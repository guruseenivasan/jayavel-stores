import { Suspense } from "react";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import ProductDetailContent from "./ProductDetailContent";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

async function ProductDetailLoader({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug) || PRODUCTS[0];
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
