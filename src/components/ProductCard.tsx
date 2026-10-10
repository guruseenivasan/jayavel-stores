import Link from "next/link";
import { Product } from "@/data/products";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const whatsappUrl = getWhatsAppLink(product.title, "919894198916", {
    image: product.image,
    tamilTitle: product.tamilTitle,
    price: product.price,
    sku: product.id,
  });

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-[#e5e2e1]">
      <div>
        {/* Image Container with Link to Detail Page */}
        <Link href={`/products/${product.slug}`} className="block relative aspect-square overflow-hidden bg-[#f0eded]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.tag && (
            <span className="absolute top-3 left-3 bg-[#48061d] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
              {product.tag}
            </span>
          )}
          <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-[#7b5902] shadow-sm">
            ★ {product.rating} ({product.reviewCount}+)
          </span>
        </Link>

        {/* Product Details */}
        <div className="p-4 space-y-2">
          <p className="text-[11px] text-[#867275] tracking-wider uppercase font-semibold">
            {product.origin}
          </p>
          <h4 className="font-serif text-[17px] text-[#48061d] font-bold leading-snug group-hover:text-[#7b5902] transition-colors line-clamp-2">
            <Link href={`/products/${product.slug}`}>
              {product.title}
            </Link>
          </h4>
          <p className="text-xs text-[#534245]">
            {product.material} {product.weight ? `• ${product.weight}` : ""} {product.capacity ? `• ${product.capacity}` : ""}
          </p>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="font-serif text-lg text-[#48061d] font-bold">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-xs text-[#867275] line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-[11px] text-[#00402a] font-bold bg-[#b1f0ce] px-1.5 py-0.5 rounded">
                  Save {discountPercent}%
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-4 pt-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#00402a] text-[#b1f0ce] hover:bg-[#002819] text-xs font-semibold transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[16px]">chat</span>
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
