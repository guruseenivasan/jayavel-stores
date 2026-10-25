import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import fsSync from "fs";
import { Category } from "@/data/products";

const BUNDLED_CATEGORIES_FILE = path.join(process.cwd(), "src", "data", "categories.json");
const TMP_CATEGORIES_FILE = path.join("/tmp", "categories.json");
const BUNDLED_PRODUCTS_FILE = path.join(process.cwd(), "src", "data", "products.json");
const TMP_PRODUCTS_FILE = path.join("/tmp", "products.json");

let inMemoryCategoriesCache: Category[] | null = null;

async function readCategories(): Promise<Category[]> {
  if (inMemoryCategoriesCache && inMemoryCategoriesCache.length > 0) {
    return [...inMemoryCategoriesCache];
  }

  // 1. Check /tmp
  try {
    if (fsSync.existsSync(TMP_CATEGORIES_FILE)) {
      const tmpRaw = await fs.readFile(TMP_CATEGORIES_FILE, "utf-8");
      const tmpData = JSON.parse(tmpRaw);
      if (Array.isArray(tmpData) && tmpData.length > 0) {
        inMemoryCategoriesCache = tmpData;
        return [...tmpData];
      }
    }
  } catch {}

  // 2. Bundled file
  try {
    const raw = await fs.readFile(BUNDLED_CATEGORIES_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      inMemoryCategoriesCache = parsed;
      return [...parsed];
    }
    return [];
  } catch {
    return [];
  }
}

async function writeCategories(categories: Category[]): Promise<void> {
  inMemoryCategoriesCache = [...categories];

  // Try bundled file
  try {
    await fs.writeFile(BUNDLED_CATEGORIES_FILE, JSON.stringify(categories, null, 2), "utf-8");
  } catch (err: unknown) {
    const isErofs = err && typeof err === "object" && "code" in err && (err as { code: string }).code === "EROFS";
    if (!isErofs) {
      console.warn("Could not write bundled categories file:", err);
    }
  }

  // Write to /tmp
  try {
    await fs.writeFile(TMP_CATEGORIES_FILE, JSON.stringify(categories, null, 2), "utf-8");
  } catch (tmpErr) {
    console.warn("Failed to write /tmp/categories.json:", tmpErr);
  }
}

export async function GET() {
  try {
    const categories = await readCategories();
    // Count current products in each category dynamically
    try {
      let prodRaw = "";
      if (fsSync.existsSync(TMP_PRODUCTS_FILE)) {
        try {
          prodRaw = await fs.readFile(TMP_PRODUCTS_FILE, "utf-8");
        } catch {}
      }
      if (!prodRaw) {
        prodRaw = await fs.readFile(BUNDLED_PRODUCTS_FILE, "utf-8");
      }
      const products = JSON.parse(prodRaw);
      const enriched = categories.map((cat) => {
        const matching = products.filter(
          (p: { categorySlug?: string; category?: string }) =>
            p.categorySlug === cat.slug || p.category?.toLowerCase() === cat.name.toLowerCase()
        );
        return {
          ...cat,
          count: matching.length > 0 ? matching.length : cat.count,
        };
      });
      return NextResponse.json({ success: true, categories: enriched });
    } catch {
      return NextResponse.json({ success: true, categories });
    }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to load categories";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug } = body;

    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Category name is required" }, { status: 400 });
    }

    const categories = await readCategories();
    const cleanSlug =
      slug?.trim() ||
      name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-");

    if (categories.some((c) => c.slug === cleanSlug)) {
      return NextResponse.json({ error: "Category slug already exists" }, { status: 400 });
    }

    const newCategory: Category = {
      name: name.trim(),
      slug: cleanSlug,
      count: 0,
    };

    categories.push(newCategory);
    await writeCategories(categories);

    return NextResponse.json({ success: true, category: newCategory }, { status: 201 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to create category";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
