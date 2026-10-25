"use client";

import { formatProductImageUrl } from "@/lib/image";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useMemo, useRef, useEffect } from "react";
import { STORE_CONTACT, PRODUCTS } from "@/data/products";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const liveResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.tamilTitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tag && p.tag.toLowerCase().includes(q)) ||
        (p.features && p.features.some((f) => f.toLowerCase().includes(q)))
      );
    }).slice(0, 5);
  }, [searchQuery]);

  const navLinks = [
    { label: language === "ta" ? "முகப்பு" : "Home", href: "/" },
    { label: language === "ta" ? "பொருட்கள் பட்டியல்" : "Product Catalogue", href: "/categories" },
    { label: language === "ta" ? "சுவாமி சிலைகள்" : "God Statues", href: "/god-statues" },
    { label: language === "ta" ? "பித்தளை & வெண்கலம்" : "Brass & Bronze Vessels", href: "/products/classic-annam-kuthu-vilakku" },
    { label: language === "ta" ? "சமையலறை & வெள்ளி" : "Kitchen & Silver Items", href: "/kitchen-items" },
    { label: language === "ta" ? "மரச்சாமான்கள்" : "Heritage Furniture", href: "/furniture" },
    { label: language === "ta" ? "எங்கள் பாரம்பரியம்" : "About Our Heritage", href: "/about" },
    { label: language === "ta" ? "கடை முகவரி & தொடர்பு" : "Visit Store & Contact", href: "/contact" },
  ];

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      setDropdownOpen(false);
      setMobileMenuOpen(false);
      router.push(`/categories?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-[#fcf9f8]">
      {/* Top Notification / Contact Strip */}
      <div className="bg-[#651d32] text-[#ffdea4] text-[10px] sm:text-xs font-semibold select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-9 sm:h-10 gap-2">
          {/* Left: Location Address (Truncated cleanly so it never overlaps) */}
          <div className="flex items-center gap-1.5 min-w-0 shrink">
            <span className="material-symbols-outlined text-[15px] text-[#eec067] shrink-0">location_on</span>
            <span className="truncate max-w-[170px] sm:max-w-xs md:max-w-md">
              {language === "ta"
                ? "கிழக்கு மாசி வீதி, மதுரை"
                : "East Masi Street, Madurai"}
            </span>
          </div>

          {/* Center: Language Translator Switcher (Protected in its own column) */}
          <div className="flex items-center justify-center shrink-0">
            <LanguageSelector />
          </div>

          {/* Right: Phone & WhatsApp */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            <a
              className="flex items-center gap-1 text-[#ffdea4] hover:text-white transition-colors"
              href={`tel:${STORE_CONTACT.phoneRaw}`}
            >
              <span className="material-symbols-outlined text-[14px]">call</span>
              <span className="font-medium hidden sm:inline">{STORE_CONTACT.phone}</span>
              <span className="font-medium sm:hidden">{STORE_CONTACT.phoneRaw}</span>
            </a>
            <span className="h-3 w-px bg-white/20"></span>
            <a
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#00402a] text-[#b1f0ce] text-xs hover:bg-[#002819] transition-colors"
              href={STORE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[14px]">chat</span>
              <span className="hidden xs:inline">{language === "ta" ? "வாட்ஸ்அப்" : "WhatsApp"}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar (100% Solid Opaque Background so background text is never visible) */}
      <div className="bg-[#fcf9f8] border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-20 flex items-center justify-between gap-4">
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md border-2 border-[#7b5902]/40 bg-white">
                <Image
                  src="/logo/jv-logo.png"
                  alt="Jayavel Stores JV Logo"
                  fill
                  className="object-contain p-0.5 group-hover:scale-105 transition-transform"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#48061d] leading-tight group-hover:text-[#651d32] transition-colors">
                  {language === "ta" ? "ஜெயவேல் ஸ்டோர்ஸ்" : "JAYAVEL STORES"}
                </span>
                <span className="text-[10px] sm:text-xs tracking-widest text-[#7b5902] uppercase font-semibold">
                  {language === "ta"
                    ? "மதுரை • 1978 முதல் பாரம்பரிய அங்காடி"
                    : "Madurai • Tradition & Homestead Since 1978"}
                </span>
              </div>
            </Link>

            {/* Desktop Search Bar with Live Suggestions */}
            <div ref={searchContainerRef} className="hidden md:flex flex-1 max-w-xl mx-4 relative">
              <form onSubmit={handleSearchSubmit} className="w-full relative">
                <button
                  type="submit"
                  aria-label="Submit search"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#867275] hover:text-[#48061d] flex items-center justify-center p-1 rounded transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </button>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setDropdownOpen(true);
                  }}
                  onFocus={() => {
                    if (searchQuery.trim()) setDropdownOpen(true);
                  }}
                  placeholder={
                    language === "ta"
                      ? "பூஜை பொருட்கள், குத்து விளக்கு, கட்டில், சோபா, பாத்திரங்கள்..."
                      : "Search Vilakku, Cot, Sofa, Bero, Cookware, Idols..."
                  }
                  className="w-full pl-10 pr-9 py-2 bg-white text-[#1b1c1c] placeholder:text-[#867275] text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48061d] border border-[#e5e2e1] shadow-sm"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setDropdownOpen(false);
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#867275] hover:text-[#48061d] p-1 flex items-center justify-center"
                    aria-label="Clear search"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                )}
              </form>

              {/* Live Search Suggestions Dropdown */}
              {dropdownOpen && searchQuery.trim() && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-2xl border border-[#e5e2e1] overflow-hidden z-50">
                  <div className="p-2.5 bg-[#f6f3f2] border-b border-[#e5e2e1] flex items-center justify-between text-xs text-[#534245]">
                    <span className="font-semibold">
                      {language === "ta" ? "நேரடி முடிவுகள்:" : "Quick Suggestions:"}
                    </span>
                    <span className="text-[11px] text-[#7b5902] font-bold">
                      {liveResults.length} {language === "ta" ? "பொருட்கள்" : "matches"}
                    </span>
                  </div>

                  {liveResults.length > 0 ? (
                    <div className="divide-y divide-[#f0eded] max-h-80 overflow-y-auto">
                      {liveResults.map((item) => (
                        <Link
                          key={item.id}
                          href={`/products/${item.slug}`}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 p-3 hover:bg-[#fcf9f8] transition-colors group"
                        >
                          <img
                            src={formatProductImageUrl(item.image)} onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.png"; }}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded-lg border border-[#e5e2e1] shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-[#48061d] group-hover:text-[#7b5902] truncate">
                              {language === "ta" ? item.tamilTitle || item.title : item.title}
                            </p>
                            <p className="text-[11px] text-[#867275] truncate">
                              {item.material} • {item.category}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="font-serif text-xs font-bold text-[#48061d]">
                              ₹{item.price.toLocaleString("en-IN")}
                            </p>
                            {item.tag && (
                              <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-[#ffdea4] text-[#48061d] font-bold">
                                {item.tag}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-5 text-center text-xs text-[#534245]">
                      {language === "ta"
                        ? `"${searchQuery}" என்ற பெயரில் உடனடி முடிவுகள் இல்லை.`
                        : `No quick matches for "${searchQuery}". Press Enter to search all items.`}
                    </div>
                  )}

                  <div className="p-2.5 bg-[#f6f3f2] border-t border-[#e5e2e1] text-center">
                    <button
                      type="button"
                      onClick={() => handleSearchSubmit()}
                      className="w-full text-center text-xs font-bold text-[#48061d] hover:text-[#7b5902] transition-colors inline-flex items-center justify-center gap-1"
                    >
                      <span>
                        {language === "ta"
                          ? `"${searchQuery}" தொடர்பான அனைத்து பொருட்களையும் காண்க`
                          : `View all results for "${searchQuery}" in catalogue`}
                      </span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/categories"
                aria-label="Catalogue Enquiry List"
                className="relative p-2 rounded-lg text-[#534245] hover:text-[#48061d] hover:bg-[#eae7e7] transition-colors"
              >
                <span className="material-symbols-outlined text-[24px]">receipt_long</span>
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#7b5902] text-white text-[10px] flex items-center justify-center font-bold">
                  3
                </span>
              </Link>
              <a
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#f0eded] text-[#48061d] hover:bg-[#651d32] hover:text-white transition-all text-xs font-semibold"
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[#7b5902] text-[18px]">chat_bubble</span>
                <span>{language === "ta" ? "வாட்ஸ்அப் விசாரணை" : "Enquire via WhatsApp"}</span>
              </a>
              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#48061d] hover:bg-[#eae7e7]"
                aria-label="Toggle navigation menu"
              >
                <span className="material-symbols-outlined text-[26px]">
                  {mobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 pb-2.5 overflow-x-auto text-xs font-semibold">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 transition-colors whitespace-nowrap rounded ${
                    isActive
                      ? "bg-[#651d32] text-white"
                      : "text-[#534245] hover:text-[#1b1c1c] hover:bg-[#f0eded]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e5e2e1] bg-white px-4 py-3 space-y-2">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#e5e2e1]">
              <span className="text-xs font-semibold text-[#534245]">
                {language === "ta" ? "மொழி மாற்றம்:" : "Language / மொழி:"}
              </span>
              <LanguageSelector />
            </div>
            <form onSubmit={handleSearchSubmit} className="mb-3 relative">
              <div className="relative w-full">
                <button
                  type="submit"
                  aria-label="Submit search"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#867275] hover:text-[#48061d] p-1 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-[18px]">search</span>
                </button>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === "ta" ? "விளக்கு, கட்டில், சோபா, பாத்திரங்கள்..." : "Search catalogue items..."}
                  className="w-full pl-9 pr-9 py-2 bg-[#f0eded] text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48061d]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#867275] p-1 flex items-center justify-center"
                    aria-label="Clear search"
                  >
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                )}
              </div>
            </form>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded text-sm font-medium ${
                  pathname === item.href
                    ? "bg-[#651d32] text-white"
                    : "text-[#1b1c1c] hover:bg-[#f0eded]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
