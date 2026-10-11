"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS, STORE_CONTACT } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

export default function GodStatuesPage() {
  const { language } = useLanguage();
  const [selectedSubcat, setSelectedSubcat] = useState("all");
  const [search, setSearch] = useState("");

  const subcategories = [
    { id: "all", labelEn: "All Statues", labelTa: "அனைத்து சிலைகள்" },
    { id: "ganesha", labelEn: "Vinayagar / Ganesha", labelTa: "விநாயகர் / கணபதி" },
    { id: "murugan", labelEn: "Lord Murugan", labelTa: "தண்டாயுதபாணி முருகன்" },
    { id: "lakshmi", labelEn: "Goddess Lakshmi & Devis", labelTa: "மகாலட்சுமி & தேவியர்" },
    { id: "ayyappan", labelEn: "Swami Ayyappan", labelTa: "சுவாமி ஐயப்பன்" },
    { id: "trio", labelEn: "Trimurti / Pooja Sets", labelTa: "திருவுருவ தொகுப்புகள்" },
  ];

  const [productsList, setProductsList] = useState(PRODUCTS);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.products)) {
          setProductsList(data.products);
        }
      })
      .catch(() => {});
  }, []);

  const statueProducts = useMemo(() => {
    return productsList.filter((p) => {
      // Must belong to God Statues category
      const isStatue =
        p.categorySlug === "pooja-statues" ||
        p.category === "God Statues (Vigraham)";
      if (!isStatue) return false;

      // Subcategory filtering
      if (selectedSubcat === "ganesha") {
        if (!p.title.toLowerCase().includes("ganapathi") && !p.slug.includes("ganapathi")) return false;
      } else if (selectedSubcat === "murugan") {
        if (!p.title.toLowerCase().includes("murugan") && !p.slug.includes("murugan")) return false;
      } else if (selectedSubcat === "lakshmi") {
        if (!p.title.toLowerCase().includes("lakshmi") && !p.slug.includes("lakshmi")) return false;
      } else if (selectedSubcat === "ayyappan") {
        if (!p.title.toLowerCase().includes("ayyappan") && !p.slug.includes("ayyappan")) return false;
      } else if (selectedSubcat === "trio") {
        if (!p.slug.includes("trio") && !p.title.toLowerCase().includes("trio") && !p.title.toLowerCase().includes("set")) return false;
      }

      // Bilingual text search filtering
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesTamil = p.tamilTitle.toLowerCase().includes(q);
        const matchesMaterial = p.material.toLowerCase().includes(q);
        const matchesDesc = (p.description || "").toLowerCase().includes(q);
        const matchesTag = (p.tag || "").toLowerCase().includes(q);
        const matchesFeatures = (p.features || []).some((f) => f.toLowerCase().includes(q));
        const matchesSlug = p.slug.toLowerCase().includes(q);

        if (!matchesTitle && !matchesTamil && !matchesMaterial && !matchesDesc && !matchesTag && !matchesFeatures && !matchesSlug) {
          return false;
        }
      }

      return true;
    });
  }, [selectedSubcat, search]);

  return (
    <div className="w-full flex flex-col bg-[#fcf9f8] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="w-full bg-[#f6f3f2] py-3 px-4 sm:px-6 border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#534245]">
          <Link href="/" className="hover:text-[#48061d] flex items-center gap-1 transition-colors font-medium">
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>{language === "ta" ? "முகப்பு" : "Home"}</span>
          </Link>
          <span className="text-[#867275]">/</span>
          <Link href="/categories" className="hover:text-[#48061d] transition-colors font-medium">
            {language === "ta" ? "பொருட்கள் பட்டியல்" : "Product Catalogue"}
          </Link>
          <span className="text-[#867275]">/</span>
          <span className="text-[#48061d] font-bold">
            {language === "ta" ? "சுவாமி சிலைகள்" : "God Statues (Vigrahangal)"}
          </span>
        </div>
      </div>

      {/* Hero Banner with Heritage Crest */}
      <section className="w-full bg-[#f6f3f2] px-4 sm:px-6 py-8 sm:py-12 border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eae7e7] text-[#48061d] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-[#7b5902]">temple_hindu</span>
              <span>
                {language === "ta"
                  ? "சுவாமிமலை & நாச்சியார்கோவில் பஞ்சலோக - பித்தளை சிலைகள்"
                  : "Authentic Swamimalai & Nachiarkoil Divine Castings"}
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#48061d] tracking-tight leading-snug">
              {language === "ta"
                ? "புனித பித்தளை & பஞ்சலோக சுவாமி சிலைகள் (திருவுருவங்கள்)"
                : "Hand-Cast Sacred Brass & Bronze God Statues"}
            </h1>
            <p className="text-sm text-[#534245] leading-relaxed">
              {language === "ta"
                ? "மதுரை & சுவாமிமலை ஸ்தபதிகளால் பாரம்பரிய மெழுகு வார்ப்பு (Lost-Wax) முறையில் வார்க்கப்பட்ட கணபதி, வேல் முருகன், மகாலட்சுமி, ஐயப்பன் மற்றும் முப்பெரும் தேவியர் திருவுருவங்கள். கோவில் மற்றும் இல்ல பூஜை மாடங்களுக்கான புனித வடிவங்கள்."
                : "Consecrated deity idols hand-cast by traditional sthapathis using age-old lost-wax methodology. Featuring Lord Ganesha, Dandayudhapani Murugan, Gajalakshmi, Swami Ayyappan, and Trimurti ensembles for sanctified home shrines worldwide."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent(
                "Vanakkam Jayavel Stores! I would like to enquire about God Statues (Ganesha, Murugan, Lakshmi, Ayyappan, or Custom Temple Vigrahangal). Please share catalog and sizes."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00402a] text-[#b1f0ce] hover:bg-[#002819] text-xs sm:text-sm font-bold transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>{language === "ta" ? "சிறப்பு அளவுகள் கேட்க வாட்ஸ்அப்" : "Custom Statue Enquiry on WhatsApp"}</span>
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
                  ? "விநாயகர், முருகன், லட்சுமி, ஐயப்பன்..."
                  : "Search Ganesha, Murugan, Lakshmi, Ayyappan..."
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
            {language === "ta" ? "சுவாமி சிலைகள் தொகுப்பு" : "Sacred Statues Collection"} ({statueProducts.length})
          </h2>
          <span className="text-xs text-[#534245]">
            {language === "ta" ? "100% தூய பித்தளை & மெழுகு வார்ப்பு" : "100% Solid Bell Brass & Lost-Wax Casting"}
          </span>
        </div>

        {statueProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {statueProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-xl border border-[#e5e2e1]">
            <span className="material-symbols-outlined text-[48px] text-[#867275] mb-2">temple_hindu</span>
            <p className="text-sm font-semibold text-[#1b1c1c]">
              {language === "ta" ? "சிலைகள் எதுவும் கிடைக்கவில்லை." : "No god statues found for this search/filter."}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedSubcat("all");
                setSearch("");
              }}
              className="mt-3 px-4 py-1.5 bg-[#48061d] text-white text-xs font-bold rounded-lg"
            >
              {language === "ta" ? "அனைத்து சிலைகளையும் பார்க்க" : "View All Statues"}
            </button>
          </div>
        )}
      </section>

      {/* Craftsmanship Features */}
      <section className="w-full bg-[#f6f3f2] py-12 px-4 sm:px-6 border-t border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b5902]">
              {language === "ta" ? "கோவில் சிற்ப சாஸ்திர சிறப்புகள்" : "Agama & Shilpa Sastra Authenticity"}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#48061d]">
              {language === "ta"
                ? "ஜெயவேல் ஸ்டோர்ஸ் சுவாமி சிலைகளின் புனிதத் தரம்"
                : "Handcrafted for Generations of Devotion"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">fire_hydrant</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "சுவாமிமலை மெழுகு வார்ப்பு" : "Lost-Wax (Cire Perdue) Casting"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "பாரம்பரிய களிமண் அச்சு மற்றும் தேன்மெழுகு கொண்டு தனித்துவமாக வார்க்கப்படும் துல்லிய வேலைப்பாடு."
                  : "Each statue is individually cast using pure beeswax molds and Cauvery clay for flawless divine contours."}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">water_drop</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "அபிஷேக எதிர்ப்பு உறுதி" : "Abhishekam Resistant Alloy"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "பால், தேன், சந்தனம், பஞ்சாமிர்த அபிஷேகங்களைத் தாங்கி தலைமுறை தலைமுறையாக நிலைத்து நிற்கும் தூய பித்தளை."
                  : "Formulated with non-reactive virgin bell metal alloys designed to withstand daily sacred abhishekam rites."}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">straighten</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "சிற்ப சாஸ்திர கணக்குகள்" : "Shilpa Shastra Proportions"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "ஆகம விதிப்படி தல மண்டலம், அயுதங்கள் மற்றும் ஆசனங்களின் அளவுகள் சாஸ்திரப்படி வடிவமைக்கப்படுகின்றன."
                  : "Strict adherence to Tala measurement ratios ensures harmonious divine energy (Prana) flow in your pooja room."}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e2e1] shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
                <span className="material-symbols-outlined text-[22px]">verified</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#48061d]">
                {language === "ta" ? "மதுரை நேர்மை & உறுதி" : "46-Year Temple Heritage Trust"}
              </h4>
              <p className="text-xs text-[#534245] leading-relaxed">
                {language === "ta"
                  ? "மீனாட்சி அம்மன் கோவில் கீழ கோபுர வாசல் அருகில் 1978 முதல் செயல்படும் நம்பிக்கையான நிறுவனம்."
                  : "Direct artisan sourcing since 1978 by East Masi Street, Madurai. Safe crated dispatch across India & globally."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Madurai Showroom Assistance banner */}
      <section className="w-full bg-[#48061d] text-white py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#ffdea4]">
              {language === "ta"
                ? "கோவில் கொடிமரம், கும்பாபிஷேக சிலைகள் அல்லது சிறப்பு வடிவங்கள் தேவையா?"
                : "Need Custom Temple Vigrahams, Bronze Castings or Specific Poses?"}
            </h3>
            <p className="text-xs sm:text-sm text-[#ffd9df] leading-relaxed">
              {language === "ta"
                ? "எங்கள் மதுரை கிடங்கில் 500+ வகைகளில் சுவாமி சிலைகள் உள்ளன. புகைப்படத்தை வாட்ஸ்அப்பில் அனுப்பி விபரம் பெறவும்."
                : "Our Madurai warehouse houses over 500 unlisted deity statues and panchaloha castings. Connect with our sthapathi desk for custom dimensions."}
            </p>
          </div>
          <a
            href={`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent(
              "Vanakkam Jayavel Stores! I am looking for a specific deity idol / custom Vigraham size. Please connect me with the store sthapathi."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#ffdea4] hover:bg-[#f6f3f2] text-[#48061d] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg flex items-center gap-2 shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>{language === "ta" ? "வாட்ஸ்அப் மூலம் தொடர்பு கொள்க" : "Chat with Temple Desk"}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
