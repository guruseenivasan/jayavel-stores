import { Suspense } from "react";
import { PRODUCTS, getProductBySlug, Product } from "@/data/products";
import ProductDetailContent from "./ProductDetailContent";
import fs from "fs/promises";
import path from "path";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

async function getDynamicProduct(slug: string): Promise<Product | undefined> {
  const fromMemory = getProductBySlug(slug);
  if (fromMemory) return fromMemory;

  try {
    const filePath = path.join(process.cwd(), "src", "data", "products.json");
    const raw = await fs.readFile(filePath, "utf-8");
    const all: Product[] = JSON.parse(raw);
    return all.find((p) => p.slug === slug);
  } catch {
    return undefined;
  }
}

async function ProductDetailLoader({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = (await getDynamicProduct(slug)) || PRODUCTS[0];
  return <ProductDetailContent product={product} />;
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#fcf9f8]">
          <p className="text-sm font-semibold text-[#48061d]">Loading product details...</p>
        </div>
      }
    >
      <ProductDetailLoader params={params} />
    </Suspense>
  );
}
