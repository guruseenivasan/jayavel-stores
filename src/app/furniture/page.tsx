"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PRODUCTS, STORE_CONTACT } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

export default function FurniturePage() {
  const { language } = useLanguage();
  const [selectedSubcat, setSelectedSubcat] = useState<string>("all");
  const [search, setSearch] = useState("");

  const subcategories = [
    { id: "all", labelEn: "All Furniture", labelTa: "அனைத்தும்" },
    { id: "bed", labelEn: "Cot & Beds (கட்டில்)", labelTa: "தேக்கு மர கட்டில்" },
    { id: "sofa", labelEn: "Sofas & Diwans (சோபா)", labelTa: "சோபா செட் & திவான்" },
    { id: "bero", labelEn: "Bero & Wardrobes (பீரோ)", labelTa: "மர & ஸ்டீல் பீரோ" },
    { id: "stove", labelEn: "Gas Stove Stands (அடுப்பு மேடை)", labelTa: "அடுப்பு மேடை & ஸ்டாண்ட்" },
    { id: "oonjal", labelEn: "Teakwood Swings (ஊஞ்சல்)", labelTa: "தேக்கு மர ஊஞ்சல்" },
    { id: "mandapam", labelEn: "Pooja Mandapams (பூஜை மண்டபம்)", labelTa: "பூஜை மண்டபம் & பீடம்" },
  ];

  // Filter furniture items
  const furnitureProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const isFurniture =
        p.categorySlug === "furniture" ||
        p.slug.includes("oonjal") ||
        p.slug.includes("mandapam") ||
        p.slug.includes("diwan") ||
        p.slug.includes("peedam") ||
        p.slug.includes("bed") ||
        p.slug.includes("cot") ||
        p.slug.includes("sofa") ||
        p.slug.includes("bero") ||
        p.slug.includes("stove");

      if (!isFurniture) return false;

      if (search.trim()) {
        const q = search.trim().toLowerCase();
        const inTitle = p.title.toLowerCase().includes(q) || p.tamilTitle.toLowerCase().includes(q);
        const inMat = p.material.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inTag = p.tag ? p.tag.toLowerCase().includes(q) : false;
        const inFeatures = p.features ? p.features.some((f) => f.toLowerCase().includes(q)) : false;
        const inSlug = p.slug.toLowerCase().includes(q);

        if (!inTitle && !inMat && !inDesc && !inTag && !inFeatures && !inSlug) return false;
      }

      if (selectedSubcat === "bed" && !(p.slug.includes("bed") || p.slug.includes("cot"))) return false;
      if (selectedSubcat === "sofa" && !(p.slug.includes("sofa") || p.slug.includes("diwan"))) return false;
      if (selectedSubcat === "bero" && !p.slug.includes("bero")) return false;
      if (selectedSubcat === "stove" && !p.slug.includes("stove")) return false;
      if (selectedSubcat === "oonjal" && !p.slug.includes("oonjal")) return false;
      if (selectedSubcat === "mandapam" && !(p.slug.includes("mandapam") || p.slug.includes("peedam"))) return false;

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
            {language === "ta" ? "மரச்சாமான்கள் & சீர்வரிசை" : "Heritage Furniture & Seervarisai"}
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="w-full bg-[#f6f3f2] px-4 sm:px-6 py-8 sm:py-10 border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#7b5902] text-xs font-bold uppercase tracking-wider shadow-sm border border-[#e5e2e1]">
              <span className="material-symbols-outlined text-[16px]">chair</span>
              <span>{language === "ta" ? "செட்டிநாடு & மதுரை மரச்சாமான்கள் & சீர்வரிசை" : "Chettinad & Madurai Wooden Furniture & Seervarisai"}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl text-[#48061d] font-bold leading-tight">
              {language === "ta"
                ? "பாரம்பரிய தேக்கு மரச்சாமான்கள், பீரோ & சீர்வரிசை பொருட்கள்"
                : "Heirloom Teakwood Furniture, Beros & Wedding Essentials"}
            </h1>
            <p className="text-sm text-[#534245] leading-relaxed">
              {language === "ta"
                ? "கம்பீரமான தேக்கு மர கட்டில், செட்டிநாடு சோபா செட், மர & சேலம் ஸ்டீல் பீரோ, கேஸ் ஸ்டவ் அடுப்பு மேடை, ஊஞ்சல் மற்றும் கோவில் கோபுர வேலைப்பாடு பூஜை மண்டபங்கள்."
                : "Handcrafted solid teakwood cots, palatial sofa sets, wooden & Salem heavy steel beros, gas stove stands, heirloom oonjal swings, and carved pooja mandapams for Tamil homes worldwide."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent(
                "Hi Jayavel Stores, I am interested in Furniture (Bed / Cot, Sofa set, Bero, Gas Stove stand, Oonjal Swing, or Mandapam). Please share catalog and pricing."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00402a] text-[#b1f0ce] hover:bg-[#002819] text-xs sm:text-sm font-bold transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>{language === "ta" ? "விருப்ப அளவுகள் கேட்க வாட்ஸ்அப்" : "Custom Order on WhatsApp"}</span>
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
                  ? "கட்டில், சோபா, பீரோ, ஸ்டவ், ஊஞ்சல் தேடுக..."
                  : "Search cots, beds, sofas, beros, stove stands..."
              }
              className="w-full pl-9 pr-8 py-1.5 bg-[#f6f3f2] text-xs sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48061d] border border-[#e5e2e1]"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#867275] hover:text-[#48061d] p-0.5 flex items-center justify-center"
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-lg sm:text-xl font-bold text-[#48061d]">
            {language === "ta" ? "மரச்சாமான்கள் பட்டியல்" : "Furniture Collection"} ({furnitureProducts.length})
          </h2>
          <span className="text-xs text-[#534245]">
            {language === "ta" ? "100% தூய முதல் தர தேக்கு மரம்" : "100% Solid Seasoned Teakwood"}
          </span>
        </div>

        {furnitureProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {furnitureProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-xl border border-[#e5e2e1]">
            <span className="material-symbols-outlined text-[48px] text-[#867275] mb-2">chair</span>
            <p className="text-sm font-semibold text-[#1b1c1c]">
              {language === "ta" ? "பொருட்கள் எதுவும் கிடைக்கவில்லை." : "No furniture products found for this filter."}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedSubcat("all");
                setSearch("");
              }}
              className="mt-3 px-4 py-1.5 bg-[#48061d] text-white text-xs font-bold rounded-lg"
            >
              {language === "ta" ? "அனைத்து மரச்சாமான்களையும் பார்க்க" : "View All Furniture"}
            </button>
          </div>
        )}
      </section>

      {/* Craftsmanship Features */}
      <section className="w-full bg-[#f6f3f2] py-12 px-4 sm:px-6 border-t border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b5902]">
              {language === "ta" ? "மரவேலை சிறப்பம்சங்கள்" : "Artisanal Excellence"}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#48061d]">
              {language === "ta"
                ? "ஜெயவேல் ஸ்டோர்ஸ் தேக்கு மரச்சாமான்களின் தரம்"
                : "Built to Last Across Generations in Tamil Homes"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">forest</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "முதல் தர தேக்கு மரம்" : "100% Mature Teakwood"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "இயற்கையிலேயே கரையான் தாக்காத, தலைமுறை தலைமுறையாக நிலைத்து நிற்கும் உறுதி."
                  : "Naturally resistant to pests and moisture; retains structural strength for over 100 years."}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">link</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "கனரக பித்தளை சங்கிலிகள்" : "Heavy Solid Brass Links"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "ஊஞ்சல்களுக்கான தனித்துவமான பித்தளை வளையங்கள், மயில்கள் மற்றும் யானை வேலைப்பாடுகள்."
                  : "Forged interlocked brass chain links load-tested to hold up to 350 kg securely."}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">palette</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "பாரம்பரிய இயற்கை பாலிஷ்" : "Natural Honey-Wax Polish"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "ரசாயனங்கள் அற்ற மூலிகை மெழுகு பூச்சு; மரத்தின் அசல் அழகையும் நறுமணத்தையும் வெளிப்படுத்தும்."
                  : "Eco-friendly non-toxic wax sealing brings out rich golden grain patterns."}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">architecture</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "விருப்ப அளவுகள் (Custom)" : "Custom Dimensions"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "உங்கள் வீட்டின் பூஜை அறை அல்லது ஹால் அளவிற்கு ஏற்ப பிரத்யேகமாக வடிவமைத்துத் தரப்படும்."
                  : "Tailored to your puja room ceiling height and living space proportions upon request."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
