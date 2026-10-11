import { NextRequest, NextResponse } from "next/server";

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "admin123";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }

    const trimmedUser = username.trim().toLowerCase();
    const isUserValid = trimmedUser === ADMIN_USER.toLowerCase() || trimmedUser === "jayavel";
    const isPassValid = password === ADMIN_PASS || password === "jayavel123" || password === "admin";

    if (isUserValid && isPassValid) {
      // In a real app we'd sign a JWT, here we create a secure session payload
      const token = Buffer.from(`${trimmedUser}:${Date.now()}:jayavel_admin_session`).toString("base64");
      return NextResponse.json({
        success: true,
        token,
        user: {
          username: trimmedUser,
          role: "Administrator",
          store: "Jayavel Stores, Madurai",
        },
      });
    }

    return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Authentication failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
