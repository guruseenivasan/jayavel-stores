import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import fsSync from "fs";
import { Product } from "@/data/products";

const BUNDLED_PRODUCTS_FILE = path.join(process.cwd(), "src", "data", "products.json");
const TMP_PRODUCTS_FILE = path.join("/tmp", "products.json");
const PRODUCTS_TS_FILE = path.join(process.cwd(), "src", "data", "products.ts");

// Global in-memory cache across warm serverless function instances
let inMemoryProductsCache: Product[] | null = null;

async function readProductsFromFile(): Promise<Product[]> {
  // 1. If in-memory cache is populated, return it
  if (inMemoryProductsCache && inMemoryProductsCache.length > 0) {
    return [...inMemoryProductsCache];
  }

  // 2. Check if an updated copy exists in /tmp (written in Vercel serverless mode)
  try {
    if (fsSync.existsSync(TMP_PRODUCTS_FILE)) {
      const tmpRaw = await fs.readFile(TMP_PRODUCTS_FILE, "utf-8");
      const tmpData = JSON.parse(tmpRaw);
      if (Array.isArray(tmpData) && tmpData.length > 0) {
        inMemoryProductsCache = tmpData;
        return [...tmpData];
      }
    }
  } catch (err) {
    console.warn("Could not read /tmp/products.json:", err);
  }

  // 3. Fallback to bundled repository products.json
  try {
    const raw = await fs.readFile(BUNDLED_PRODUCTS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      inMemoryProductsCache = parsed;
      return [...parsed];
    }
    return [];
  } catch (err) {
    console.error("Failed to read bundled products.json:", err);
    return [];
  }
}

async function writeProductsToFile(products: Product[]): Promise<void> {
  // Always update in-memory cache immediately
  inMemoryProductsCache = [...products];

  // 1. Attempt writing to project bundled location (works on local dev / VPS)
  let wroteToProject = false;
  try {
    await fs.writeFile(BUNDLED_PRODUCTS_FILE, JSON.stringify(products, null, 2), "utf-8");
    wroteToProject = true;
  } catch (err: unknown) {
    const isErofs = err && typeof err === "object" && "code" in err && (err as { code: string }).code === "EROFS";
    if (!isErofs) {
      console.warn("Could not write to bundled products file:", err);
    }
  }

  // 2. Fallback to /tmp/products.json (always writable in Vercel / AWS Lambda)
  try {
    await fs.writeFile(TMP_PRODUCTS_FILE, JSON.stringify(products, null, 2), "utf-8");
  } catch (tmpErr) {
    console.warn("Failed to write to /tmp/products.json fallback:", tmpErr);
  }

  // 3. Keep src/data/products.ts in sync only if filesystem is writable
  if (wroteToProject) {
    try {
      const rawTs = await fs.readFile(PRODUCTS_TS_FILE, "utf-8");
      const marker = "export const PRODUCTS: Product[] = ";
      const idx = rawTs.indexOf(marker);
      if (idx !== -1) {
        const funcMarker = "export function getProductBySlug";
        const funcIdx = rawTs.indexOf(funcMarker);
        if (funcIdx !== -1) {
          const newTs =
            rawTs.slice(0, idx + marker.length) +
            JSON.stringify(products, null, 2) +
            ";\n\n" +
            rawTs.slice(funcIdx);
          await fs.writeFile(PRODUCTS_TS_FILE, newTs, "utf-8");
        }
      }
    } catch {
      // Ignore sync error in read-only environment
    }
  }
}

function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || `product-${Date.now()}`;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const q = searchParams.get("q");

    let products = await readProductsFromFile();

    if (category && category !== "all") {
      products = products.filter(
        (p) => p.categorySlug === category || p.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (q) {
      const lower = q.toLowerCase();
      products = products.filter(
        (p) =>
          p.title.toLowerCase().includes(lower) ||
          p.tamilTitle?.toLowerCase().includes(lower) ||
          p.description?.toLowerCase().includes(lower) ||
          p.category?.toLowerCase().includes(lower)
      );
    }

    return NextResponse.json({ success: true, count: products.length, products });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to load products";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      tamilTitle,
      category,
      categorySlug,
      price,
      originalPrice,
      weight,
      height,
      capacity,
      material,
      origin,
      image,
      gallery,
      description,
      tamilDescription,
      features,
      inStock,
      tag,
    } = body;

    if (!title || !title.trim()) {
      return NextResponse.json({ error: "Product title is required" }, { status: 400 });
    }
    if (!category || !category.trim()) {
      return NextResponse.json({ error: "Category is required" }, { status: 400 });
    }
    if (price === undefined || isNaN(Number(price))) {
      return NextResponse.json({ error: "Valid price is required" }, { status: 400 });
    }
    if (!image || !image.trim()) {
      return NextResponse.json({ error: "Product image is required" }, { status: 400 });
    }
    if (!description || !description.trim()) {
      return NextResponse.json({ error: "Product description is required" }, { status: 400 });
    }

    const products = await readProductsFromFile();

    // Generate unique ID and slug
    const idPrefix = "JV-" + Math.floor(1000 + Math.random() * 9000);
    let baseSlug = generateSlug(title);
    if (products.some((p) => p.slug === baseSlug)) {
      baseSlug = `${baseSlug}-${Date.now().toString().slice(-4)}`;
    }

    // Process features array
    let processedFeatures: string[] = [];
    if (Array.isArray(features)) {
      processedFeatures = features.filter((f) => typeof f === "string" && f.trim().length > 0);
    } else if (typeof features === "string") {
      processedFeatures = features
        .split("\n")
        .map((f) => f.trim().replace(/^[-*•]\s*/, ""))
        .filter((f) => f.length > 0);
    }

    const numPrice = Number(price);
    const numOrigPrice = originalPrice ? Number(originalPrice) : Math.round(numPrice * 1.15);

    const newProduct: Product = {
      id: idPrefix,
      slug: baseSlug,
      title: title.trim(),
      tamilTitle: tamilTitle?.trim() || title.trim(),
      category: category.trim(),
      categorySlug: categorySlug?.trim() || generateSlug(category),
      price: numPrice,
      originalPrice: numOrigPrice,
      weight: weight?.trim() || undefined,
      height: height?.trim() || undefined,
      capacity: capacity?.trim() || undefined,
      material: material?.trim() || "Authentic Handcrafted Bell Brass",
      origin: origin?.trim() || "Madurai Heritage Workshop",
      rating: 5.0,
      reviewCount: 1,
      image: image.trim(),
      gallery: Array.isArray(gallery) && gallery.length > 0 ? gallery : [image.trim()],
      description: description.trim(),
      tamilDescription: tamilDescription?.trim() || description.trim(),
      features: processedFeatures.length > 0 ? processedFeatures : [
        "100% Traditional Temple Grade Craftsmanship",
        "Direct from Madurai Master Artisans",
        "Lifetime Purity & Heritage Durability Guarantee",
      ],
      inStock: inStock !== undefined ? Boolean(inStock) : true,
      tag: tag?.trim() || "New Arrival",
    };

    // Prepend new product so it shows at top of catalog
    products.unshift(newProduct);
    await writeProductsToFile(products);

    return NextResponse.json({ success: true, product: newProduct }, { status: 201 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to create product";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Product ID is required for updating" }, { status: 400 });
    }

    const products = await readProductsFromFile();
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      return NextResponse.json({ error: `Product with ID "${id}" not found` }, { status: 404 });
    }

    // Merge updates
    const current = products[index];

    let processedFeatures = current.features;
    if (updates.features !== undefined) {
      if (Array.isArray(updates.features)) {
        processedFeatures = updates.features.filter((f: string) => typeof f === "string" && f.trim().length > 0);
      } else if (typeof updates.features === "string") {
        processedFeatures = updates.features
          .split("\n")
          .map((f: string) => f.trim().replace(/^[-*•]\s*/, ""))
          .filter((f: string) => f.length > 0);
      }
    }

    const updatedProduct: Product = {
      ...current,
      ...updates,
      id: current.id, // preserve ID
      slug: updates.slug || current.slug,
      price: updates.price !== undefined ? Number(updates.price) : current.price,
      originalPrice: updates.originalPrice !== undefined ? Number(updates.originalPrice) : current.originalPrice,
      features: processedFeatures,
      inStock: updates.inStock !== undefined ? Boolean(updates.inStock) : current.inStock,
    };

    products[index] = updatedProduct;
    await writeProductsToFile(products);

    return NextResponse.json({ success: true, product: updatedProduct });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to update product";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Product ID is required for deletion" }, { status: 400 });
    }

    const products = await readProductsFromFile();
    const filtered = products.filter((p) => p.id !== id);

    if (filtered.length === products.length) {
      return NextResponse.json({ error: `Product with ID "${id}" not found` }, { status: 404 });
    }

    await writeProductsToFile(filtered);
    return NextResponse.json({ success: true, message: `Product ${id} deleted successfully` });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to delete product";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
