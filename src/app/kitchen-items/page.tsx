"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PRODUCTS, STORE_CONTACT } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

export default function KitchenItemsPage() {
  const { language } = useLanguage();
  const [selectedSubcat, setSelectedSubcat] = useState<string>("all");
  const [search, setSearch] = useState("");

  const subcategories = [
    { id: "all", labelEn: "All Kitchen & Silver", labelTa: "அனைத்தும்" },
    { id: "brass", labelEn: "Brass Cookware (பித்தளை)", labelTa: "பித்தளை பாத்திரங்கள்" },
    { id: "silver", labelEn: "Pure Silver & Silver-Plated (வெள்ளி)", labelTa: "வெள்ளி பொருட்கள்" },
    { id: "bronze-tin", labelEn: "Traditional Bronze & Eeyam (வெண்கலம்/ஈயம்)", labelTa: "வெண்கலம் & ஈயம்" },
    { id: "steel-copper", labelEn: "Salem Steel & Copper (ஸ்டீல் & செம்பு)", labelTa: "ஸ்டீல் & செம்பு" },
  ];

  // Filter kitchen & silver related products
  const kitchenProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Must be related to kitchen, cookware, appliances, or silver
      const isKitchenOrSilver =
        p.categorySlug === "kitchen-items" ||
        p.categorySlug === "silver-items" ||
        p.categorySlug === "traditional-cookware" ||
        p.categorySlug === "stainless-steel" ||
        p.categorySlug === "copper-essentials" ||
        p.categorySlug === "appliances" ||
        p.slug.includes("coffee") ||
        p.slug.includes("chombu") ||
        p.slug.includes("paanai") ||
        p.slug.includes("masala") ||
        p.slug.includes("thali") ||
        p.slug.includes("silver");

      if (!isKitchenOrSilver) return false;

      // Subcategory filter
      if (selectedSubcat === "brass") {
        if (!p.material.toLowerCase().includes("brass") || p.categorySlug === "silver-items") return false;
      } else if (selectedSubcat === "silver") {
        if (p.categorySlug !== "silver-items" && !p.slug.includes("silver") && !p.material.toLowerCase().includes("silver")) return false;
      } else if (selectedSubcat === "bronze-tin") {
        if (!p.material.toLowerCase().includes("tin") && !p.material.toLowerCase().includes("bronze") && !p.slug.includes("eeya") && !p.slug.includes("paanai")) return false;
      } else if (selectedSubcat === "steel-copper") {
        if (!p.material.toLowerCase().includes("steel") && !p.material.toLowerCase().includes("copper")) return false;
      }

      // Search filter
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q) || p.tamilTitle.toLowerCase().includes(q);
        const matchMat = p.material.toLowerCase().includes(q);
        if (!matchTitle && !matchMat) return false;
      }

      return true;
    });
  }, [selectedSubcat, search]);

  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb */}
      <div className="w-full bg-[#f6f3f2] py-3.5 sm:py-4 px-4 sm:px-6 border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#534245]">
          <Link href="/" className="hover:text-[#48061d] flex items-center gap-1 transition-colors font-medium">
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>{language === "ta" ? "முகப்பு" : "Home"}</span>
          </Link>
          <span className="text-[#867275]">/</span>
          <span className="text-[#48061d] font-bold">
            {language === "ta" ? "சமையலறை & வெள்ளி பொருட்கள்" : "Kitchen & Silver Items"}
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="w-full bg-[#f6f3f2] px-4 sm:px-6 py-8 sm:py-10 border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#7b5902] text-xs font-bold uppercase tracking-wider shadow-sm border border-[#e5e2e1]">
              <span className="material-symbols-outlined text-[16px]">restaurant</span>
              <span>{language === "ta" ? "பாரம்பரிய சமையலறை & அரிய வெள்ளி" : "Heritage Cookware & Fine Silver"}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl text-[#48061d] font-bold leading-tight">
              {language === "ta"
                ? "பாரம்பரிய சமையலறை பாத்திரங்கள், பித்தளை & வெள்ளி பொருட்கள்"
                : "Traditional Kitchen Items, Heirloom Brass & Pure Silver"}
            </h1>
            <p className="text-sm text-[#534245] leading-relaxed">
              {language === "ta"
                ? "கும்பகோணம் தூய ஈயச் சொம்பு, பாரம்பரிய வெண்கலப் பானை, அஞ்சறைப் பெட்டி, பித்தளை காபி டவரா மற்றும் 925 ஹால்மார்க் தூய வெள்ளிப் பொருட்கள்."
                : "Discover authentic Kumbakonam Eeya Chombu, heavy bronze Vengala Paanai, handmade brass Masala Dabbas, Degree Coffee sets, and hallmarked pure silver pooja & dining essentials."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent(
                "Hi Jayavel Stores, I am looking for traditional Kitchen items (Brass, Bronze, Eeyam or Silver sets). Please share your complete bridal catalog."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00402a] text-[#b1f0ce] hover:bg-[#002819] text-xs sm:text-sm font-bold transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>{language === "ta" ? "வாட்ஸ்அப் பட்டியல் பெறுக" : "Enquire Kitchen Catalog"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Search Bar */}
      <section className="w-full bg-white px-4 sm:px-6 py-4 border-b border-[#e5e2e1] sticky top-[152px] md:top-[158px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Subcategory Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {subcategories.map((sub) => {
              const isActive = selectedSubcat === sub.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedSubcat(sub.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#48061d] text-white shadow-sm"
                      : "bg-[#f6f3f2] text-[#534245] hover:bg-[#eae7e7] hover:text-[#1b1c1c]"
                  }`}
                >
                  {language === "ta" ? sub.labelTa : sub.labelEn}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#867275] text-[18px]">
              search
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                language === "ta"
                  ? "பாத்திரங்களை தேடுக..."
                  : "Search cookware, silver, brass..."
              }
              className="w-full pl-9 pr-3 py-1.5 bg-[#f6f3f2] text-xs sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48061d] border border-[#e5e2e1]"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-lg sm:text-xl font-bold text-[#48061d]">
            {language === "ta" ? "கிடைக்கும் பொருட்கள்" : "Available Kitchen & Silverware"} ({kitchenProducts.length})
          </h2>
          <span className="text-xs text-[#534245]">
            {language === "ta" ? "100% உணவுப் பாதுகாப்பு & தர உத்தரவாதம்" : "100% Food-Safe & Authentic Hallmarked"}
          </span>
        </div>

        {kitchenProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kitchenProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-xl border border-[#e5e2e1]">
            <span className="material-symbols-outlined text-[48px] text-[#867275] mb-2">soup_kitchen</span>
            <p className="text-sm font-semibold text-[#1b1c1c]">
              {language === "ta" ? "பொருட்கள் எதுவும் கிடைக்கவில்லை." : "No kitchen or silver products found for this filter."}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedSubcat("all");
                setSearch("");
              }}
              className="mt-3 px-4 py-1.5 bg-[#48061d] text-white text-xs font-bold rounded-lg"
            >
              {language === "ta" ? "அனைத்து பொருட்களையும் பார்க்க" : "View All Kitchen Items"}
            </button>
          </div>
        )}
      </section>

      {/* Health & Metallurgical Highlights */}
      <section className="w-full bg-[#f6f3f2] py-12 px-4 sm:px-6 border-t border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b5902]">
              {language === "ta" ? "பாரம்பரிய உலோக நன்மைகள்" : "Ayurvedic & Culinary Heritage"}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#48061d]">
              {language === "ta"
                ? "பித்தளை, வெண்கலம், ஈயம் மற்றும் வெள்ளியின் அற்புத நன்மைகள்"
                : "Why Traditional Tamil Metalware Elevates Everyday Living"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">skillet</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "தூய பித்தளை (Brass)" : "Pure Brass Cookware"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "நோய் எதிர்ப்பு சக்தியை அதிகரிக்கும்; கிருமிகளை அழிக்கும் திறன் கொண்டது. உணவு சீராக வேகும்."
                  : "Naturally anti-microbial; preserves 93% of micronutrients and distributes heat uniformly."}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">verified</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "தூய வெள்ளி (Pure Silver)" : "Hallmarked Silver"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "உடலுக்கு குளிர்ச்சி மற்றும் நச்சுத்தன்மையை நீக்கும்; பூஜை மற்றும் மங்களகரமான விருந்துகளுக்கு உகந்தது."
                  : "High thermal cooling energy; boosts cellular health and provides auspicious purity in dining."}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">cooking</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "வெள்ளி ஈயச் சொம்பு (Velli Eeyam)" : "Kumbakonam Eeyam"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "ரசத்தின் சுவை மற்றும் வாசனையை பலமடங்கு கூட்டும்; செரிமானத்திற்கு மிகவும் சிறந்தது."
                  : "Infuses rasam with incomparable therapeutic aroma and assists smooth digestive vitality."}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">military_tech</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "வெண்கலம் (Kansa Bronze)" : "Bell Metal Bronze"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "சர்க்கரைப் பொங்கல் மற்றும் கோவில் பிரசாதங்களுக்கு சிறந்தது; அமிலத்தன்மையை சமன் செய்யும்."
                  : "Alkalizes food, balances Pitta, and produces unmatched flavor in sweet festive Sakkarai Pongal."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
