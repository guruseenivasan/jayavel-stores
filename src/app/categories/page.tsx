"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, CATEGORIES, STORE_CONTACT } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CategoriesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-[#534245]">Loading Catalogue...</div>}>
      <CategoriesContent />
    </Suspense>
  );
}

function CategoriesContent() {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || "";
  const urlCategory = searchParams.get("category") || "all";

  const [search, setSearch] = useState(urlQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory);
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(60000);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync state if URL search parameters change
  useEffect(() => {
    if (urlQuery !== undefined) {
      setSearch(urlQuery);
    }
  }, [urlQuery]);

  useEffect(() => {
    if (urlCategory && urlCategory !== "all") {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  const materials = [
    { label: "All Materials", value: "all" },
    { label: "Pure Brass (பித்தளை)", value: "Brass" },
    { label: "Cast Bronze (வெண்கலம்)", value: "Bronze" },
    { label: "Pure Copper 99% (செம்பு)", value: "Copper" },
    { label: "Pure Tin Alloy (ஈயம்)", value: "Tin" },
    { label: "Salem Stainless Steel", value: "Stainless" },
    { label: "Solid Teakwood (தேக்கு மரம்)", value: "Teakwood" },
  ];

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();

    return PRODUCTS.filter((p) => {
      let matchSearch = true;
      if (q) {
        const inTitle = p.title.toLowerCase().includes(q);
        const inTamil = p.tamilTitle.toLowerCase().includes(q);
        const inCat = p.category.toLowerCase().includes(q);
        const inMat = p.material.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inTag = p.tag ? p.tag.toLowerCase().includes(q) : false;
        const inFeatures = p.features ? p.features.some((f) => f.toLowerCase().includes(q)) : false;

        matchSearch = inTitle || inTamil || inCat || inMat || inDesc || inTag || inFeatures;
      }

      const matchCategory =
        selectedCategory === "all" || p.categorySlug === selectedCategory;

      const matchMaterial =
        selectedMaterial === "all" ||
        p.material.toLowerCase().includes(selectedMaterial.toLowerCase());

      const matchPrice = p.price <= maxPrice;

      return matchSearch && matchCategory && matchMaterial && matchPrice;
    });
  }, [search, selectedCategory, selectedMaterial, maxPrice]);

  return (
    <div className="w-full flex flex-col">
      {/* Brand Header Banner */}
      <section className="w-full bg-[#f6f3f2] px-4 sm:px-6 py-6 border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <nav className="flex items-center gap-2 text-xs text-[#534245] uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-[#48061d]">Home</Link>
              <span>/</span>
              <span className="text-[#48061d] font-bold">Product Catalogue</span>
            </nav>
            <h1 className="font-serif text-2xl sm:text-3xl text-[#48061d] font-bold">
              Complete Heritage Collection — 2,500+ Authentic Items
            </h1>
            <p className="text-xs sm:text-sm text-[#534245] max-w-3xl mt-1">
              Hand-forged temple brassware, consecrated bronze idols, Kumbakonam tin vessels, and Salem tri-ply cookware.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-[#e5e2e1] shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#ffdea4] flex items-center justify-center text-[#48061d]">
              <span className="material-symbols-outlined text-[24px]">military_tech</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#48061d] uppercase">Madurai Hallmark Purity</p>
              <p className="text-[11px] text-[#534245]">47 Years of Temple &amp; Seer Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Active Filters Bar */}
      <section className="w-full bg-white px-4 sm:px-6 py-3 border-b border-[#e5e2e1] sticky top-[152px] md:top-[158px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#867275] text-[20px]">
              search
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, Tamil name, or metal (e.g. Kuthu Vilakku, Cot, Bero, Stove stand)..."
              className="w-full pl-10 pr-9 py-2 bg-[#f6f3f2] text-sm text-[#1b1c1c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48061d]"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#867275] hover:text-[#48061d] p-1 flex items-center justify-center"
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-[#f0eded] text-[#48061d] text-xs font-bold rounded-lg"
            >
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>Filters</span>
            </button>
            <div className="text-xs font-semibold text-[#534245] bg-[#f0eded] px-3 py-2 rounded-lg">
              <strong className="text-[#48061d]">{filteredProducts.length}</strong> items shown
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid & Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full flex flex-col lg:flex-row gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className={`w-full lg:w-72 shrink-0 space-y-6 ${mobileFilterOpen ? "block" : "hidden lg:block"}`}>
          {/* Wedding Seer Card */}
          <div className="p-4 bg-[#48061d] text-white rounded-xl space-y-2.5 shadow-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffdea4] text-[20px]">inventory</span>
              <span className="text-xs uppercase tracking-wider text-[#ffdea4] font-bold">
                Bridal Seervarisai
              </span>
            </div>
            <p className="text-xs text-[#eae7e7] leading-relaxed">
              Need a complete 21 or 51-vessel bronze, brass &amp; silver seer package customized for wedding rites?
            </p>
            <a
              href={`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent("Hello Jayavel Stores, I need assistance with Wedding Seervarisai packages.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#ffdea4] text-[#48061d] text-xs font-bold hover:bg-[#eec067] transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">chat</span>
              <span>Request Seer List</span>
            </a>
          </div>

          {/* Categories */}
          <div className="p-5 bg-white rounded-xl shadow-sm border border-[#e5e2e1] space-y-3">
            <h3 className="text-xs font-bold text-[#48061d] uppercase tracking-wider">
              Categories
            </h3>
            <div className="space-y-1.5 text-xs text-[#534245]">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`w-full text-left py-1 px-2 rounded transition-colors flex justify-between ${
                  selectedCategory === "all" ? "bg-[#651d32] text-white font-bold" : "hover:bg-[#f6f3f2]"
                }`}
              >
                <span>All Categories</span>
                <span>{PRODUCTS.length}</span>
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setSelectedCategory(c.slug)}
                  className={`w-full text-left py-1 px-2 rounded transition-colors flex justify-between ${
                    selectedCategory === c.slug ? "bg-[#651d32] text-white font-bold" : "hover:bg-[#f6f3f2]"
                  }`}
                >
                  <span className="truncate pr-2">{c.name}</span>
                  <span className="text-[10px] opacity-70">{c.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div className="p-5 bg-white rounded-xl shadow-sm border border-[#e5e2e1] space-y-3">
            <h3 className="text-xs font-bold text-[#48061d] uppercase tracking-wider">
              Metallurgy
            </h3>
            <div className="space-y-1.5 text-xs text-[#534245]">
              {materials.map((m) => (
                <button
                  key={m.value}
                  type="button"
                  onClick={() => setSelectedMaterial(m.value)}
                  className={`w-full text-left py-1 px-2 rounded transition-colors flex justify-between ${
                    selectedMaterial === m.value ? "bg-[#651d32] text-white font-bold" : "hover:bg-[#f6f3f2]"
                  }`}
                >
                  <span>{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Slider */}
          <div className="p-5 bg-white rounded-xl shadow-sm border border-[#e5e2e1] space-y-3">
            <h3 className="text-xs font-bold text-[#48061d] uppercase tracking-wider">
              Max Price: ₹{maxPrice.toLocaleString("en-IN")}
            </h3>
            <input
              type="range"
              min={1000}
              max={60000}
              step={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#48061d]"
            />
            <div className="flex justify-between text-[11px] text-[#867275]">
              <span>₹1,000</span>
              <span>₹60,000+</span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 w-full space-y-6">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-[#e5e2e1] space-y-3">
              <span className="material-symbols-outlined text-[48px] text-[#867275]">search_off</span>
              <h3 className="font-serif text-lg font-bold text-[#48061d]">No items match your criteria</h3>
              <p className="text-xs text-[#534245]">
                Try adjusting your search query, price limit, or category selection.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("all");
                  setSelectedMaterial("all");
                  setMaxPrice(30000);
                }}
                className="px-4 py-2 bg-[#48061d] text-white rounded-lg text-xs font-bold mt-2"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Advisory Notice Strip */}
          <div className="p-6 bg-white rounded-xl shadow-sm border border-[#e5e2e1] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ffdea4] flex items-center justify-center text-[#48061d] shrink-0">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#48061d]">
                  Cannot find a specific size, weight, or idol pose?
                </h4>
                <p className="text-xs text-[#534245] mt-0.5">
                  Our Madurai showroom houses over 12,000 unlisted heirloom items. Send a photo on WhatsApp for immediate warehouse check.
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent("Hello Jayavel Stores, I am looking for a custom vessel or specific idol size not listed online.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 rounded-lg bg-[#00402a] hover:bg-[#002819] text-[#b1f0ce] text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Send Photo to Store Floor</span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
