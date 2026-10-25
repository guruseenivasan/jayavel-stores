import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    // 1. Support Base64 JSON upload (from client-side Studio White Canvas)
    if (contentType.includes("application/json")) {
      const body = await request.json();
      if (!body.dataUrl) {
        return NextResponse.json({ error: "No dataUrl provided" }, { status: 400 });
      }

      const matches = body.dataUrl.match(/^data:image\/([a-zA-Z+]+);base64,(.+)$/);
      if (!matches) {
        return NextResponse.json({ error: "Invalid dataUrl format" }, { status: 400 });
      }

      const ext = matches[1] === "jpeg" || matches[1] === "jpg" ? "jpg" : "png";
      const buffer = Buffer.from(matches[2], "base64");
      const baseName = (body.filename || "product").replace(/[^a-zA-Z0-9.-]/g, "_").toLowerCase();
      const uniqueFileName = `white-${Date.now()}-${baseName.replace(/\.[^/.]+$/, "")}.${ext}`;

      const uploadDir = path.join(process.cwd(), "public", "uploads");

      try {
        await fs.mkdir(uploadDir, { recursive: true });
        const filePath = path.join(uploadDir, uniqueFileName);
        await fs.writeFile(filePath, buffer);

        return NextResponse.json({
          success: true,
          url: `/uploads/${uniqueFileName}`,
          filename: uniqueFileName,
          size: buffer.length,
          whiteStandardized: true,
        });
      } catch (fsErr: unknown) {
        // Fallback for serverless read-only filesystem (Vercel / AWS Lambda):
        // Return the Base64 data URL directly as image URL so it renders everywhere without disk writing!
        console.warn("Read-only filesystem detected, falling back to dataUrl:", fsErr);
        return NextResponse.json({
          success: true,
          url: body.dataUrl,
          filename: uniqueFileName,
          size: buffer.length,
          whiteStandardized: true,
        });
      }
    }

    // 2. Support Multipart Form Data upload
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const forceWhiteBg = formData.get("whiteBg") !== "false"; // Default true

    if (!file) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 }
      );
    }

    // Validate mime type
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg", "image/gif", "image/svg+xml"];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: `Unsupported file format (${file.type}). Please upload JPG, PNG, or WEBP.` },
        { status: 400 }
      );
    }

    // Max 15MB file size
    const MAX_SIZE = 15 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File size exceeds 15MB limit" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_").toLowerCase();
    const rawFileName = `raw-${Date.now()}-${sanitizedName}`;

    // Target upload directory: public/uploads
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    try {
      await fs.mkdir(uploadDir, { recursive: true });
      const rawFilePath = path.join(uploadDir, rawFileName);
      await fs.writeFile(rawFilePath, buffer);

      let finalPublicUrl = `/uploads/${rawFileName}`;
      let isWhiteStandardized = false;

      // Automatically standardize raw photo to studio white background if Python is available
      if (forceWhiteBg && !file.type.includes("svg")) {
        const whiteFileName = `white-${Date.now()}-${sanitizedName.replace(/\.[^/.]+$/, "")}.jpg`;
        const whiteFilePath = path.join(uploadDir, whiteFileName);
        const pythonScript = path.join(process.cwd(), "scripts", "make_white_bg.py");

        try {
          await execFileAsync("python", [pythonScript, rawFilePath, whiteFilePath]);
          const stat = await fs.stat(whiteFilePath);
          if (stat.size > 0) {
            finalPublicUrl = `/uploads/${whiteFileName}`;
            isWhiteStandardized = true;
          }
        } catch (procErr) {
          console.warn("Python auto-standardization fallback to raw:", procErr);
        }
      }

      return NextResponse.json({
        success: true,
        url: finalPublicUrl,
        rawUrl: `/uploads/${rawFileName}`,
        filename: isWhiteStandardized ? path.basename(finalPublicUrl) : rawFileName,
        size: file.size,
        type: file.type,
        whiteStandardized: isWhiteStandardized,
      });
    } catch (fsErr: unknown) {
      // Fallback for serverless read-only filesystem (Vercel / AWS Lambda)
      const base64Data = `data:${file.type || "image/jpeg"};base64,${buffer.toString("base64")}`;
      return NextResponse.json({
        success: true,
        url: base64Data,
        rawUrl: base64Data,
        filename: sanitizedName,
        size: file.size,
        type: file.type,
        whiteStandardized: false,
      });
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to upload image";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
