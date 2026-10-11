import Link from "next/link";
import Image from "next/image";
import { STORE_CONTACT } from "@/data/products";

export default function Footer() {
  return (
    <footer className="w-full bg-[#48061d] text-[#eae7e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Brand & Heritage */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md border border-[#ffdea4]/50 bg-white/10 shrink-0">
              <Image
                src="/logo/jv-logo.png"
                alt="Jayavel Stores Emblem"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <span className="font-serif text-xl text-[#ffdea4] font-semibold tracking-wide">
              JAYAVEL STORES
            </span>
          </div>
          <p className="text-sm text-[#e5e2e1]/90 leading-relaxed">
            Guardians of Madurai&apos;s metallurgy traditions since 1978. Serving families, temples, and collectors with heirloom-grade brass, sacred bronze idols, and traditional kitchen essentials touched by generations of mastery.
          </p>
          <div className="flex items-center gap-1.5 text-[#ffdea4] text-xs font-semibold">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Handcrafted with Sacred Purity</span>
          </div>
        </div>

        {/* Col 2: Sacred Collections */}
        <div className="space-y-3">
          <h4 className="text-xs text-[#ffdea4] uppercase tracking-wider font-bold">
            Sacred Collections
          </h4>
          <ul className="space-y-2 text-sm text-[#e5e2e1]/90">
            <li>
              <Link href="/products/classic-annam-kuthu-vilakku" className="hover:text-[#eec067] transition-colors">
                Annam Kuthu Vilakku (Pair)
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-[#eec067] transition-colors">
                Uruli &amp; Floral Brass Decor
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-[#eec067] transition-colors">
                Traditional Bronze Cookware
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-[#eec067] transition-colors">
                Pure Hand-hammered Copper Pots
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-[#eec067] transition-colors">
                Silver Plated Pooja Sets
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-[#eec067] transition-colors">
                Vinayagar &amp; Murugan Statues
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Services & Care */}
        <div className="space-y-3">
          <h4 className="text-xs text-[#ffdea4] uppercase tracking-wider font-bold">
            Services &amp; Care
          </h4>
          <ul className="space-y-2 text-sm text-[#e5e2e1]/90">
            <li>
              <Link href="/contact" className="hover:text-[#eec067] transition-colors">
                Custom Temple Order Consultation
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#eec067] transition-colors">
                Bulk Wedding Seer Packages
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#eec067] transition-colors">
                Worldwide Air &amp; Sea Courier
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#eec067] transition-colors">
                Madurai Flagship Store Pickup
              </Link>
            </li>
            <li>
              <Link href="/products/classic-annam-kuthu-vilakku" className="hover:text-[#eec067] transition-colors">
                Brass Polishing &amp; Care Guidance
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Madurai Flagship Info */}
        <div className="space-y-3">
          <h4 className="text-xs text-[#ffdea4] uppercase tracking-wider font-bold">
            Madurai Flagship
          </h4>
          <p className="text-sm text-[#e5e2e1]/90 leading-relaxed">
            142-144, East Masi Street,<br />
            Near Meenakshi Amman Kovil East Tower,<br />
            Madurai, Tamil Nadu 625001
          </p>
          <div className="space-y-1.5 text-sm text-[#e5e2e1]">
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#ffdea4]">call</span>
              <a href={`tel:${STORE_CONTACT.phoneRaw}`} className="hover:underline">
                {STORE_CONTACT.phone}
              </a>
              <span>/</span>
              <a href={`tel:${STORE_CONTACT.landlineRaw}`} className="hover:underline">
                {STORE_CONTACT.landline}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#ffdea4]">schedule</span>
              <span>{STORE_CONTACT.timing}</span>
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[#ffdea4] hover:text-white text-xs font-semibold mt-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">map</span>
            <span>View Arrival Guide &amp; Directions</span>
          </Link>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#651d32] text-[#e5e2e1]/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>&copy; 2025 Jayavel Stores Madurai. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span className="text-[#eec067]">Authentic Metallurgy &amp; Homestead Craftsmanship</span>
            <span className="opacity-40">•</span>
            <Link href="/admin" className="text-white/60 hover:text-[#ffdea4] transition-colors underline-offset-2 hover:underline">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
