import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { Category } from "@/data/products";

const CATEGORIES_FILE = path.join(process.cwd(), "src", "data", "categories.json");
const PRODUCTS_FILE = path.join(process.cwd(), "src", "data", "products.json");

async function readCategories(): Promise<Category[]> {
  try {
    const raw = await fs.readFile(CATEGORIES_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeCategories(categories: Category[]): Promise<void> {
  await fs.writeFile(CATEGORIES_FILE, JSON.stringify(categories, null, 2), "utf-8");
}

export async function GET() {
  try {
    const categories = await readCategories();
    // Count current products in each category dynamically
    try {
      const prodRaw = await fs.readFile(PRODUCTS_FILE, "utf-8");
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
