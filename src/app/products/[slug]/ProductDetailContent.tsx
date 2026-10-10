"use client";

import { useState } from "react";
import Link from "next/link";
import { Product, getRelatedProducts, STORE_CONTACT } from "@/data/products";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function ProductDetailContent({ product }: { product: Product }) {
  const relatedProducts = getRelatedProducts(product.slug, 4);

  // Interactive State
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedHeight, setSelectedHeight] = useState("24");
  const [selectedPrice, setSelectedPrice] = useState(product.price);
  const [selectedMrp, setSelectedMrp] = useState(product.originalPrice);
  const [selectedWeight, setSelectedWeight] = useState(product.weight || "5.2 kg Pair");
  const [selectedFinish, setSelectedFinish] = useState("Traditional Bright Polish");
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"specs" | "significance" | "care" | "shipping">("specs");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);

  const images = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  const sizeOptions = [
    { height: "18", label: "18 Inches (1.5 ft)", price: 5600, mrp: 6500, weight: "3.8 kg / pair" },
    { height: "24", label: "24 Inches (2.0 ft)", price: 7850, mrp: 9200, weight: "5.2 kg / pair", badge: "POPULAR" },
    { height: "30", label: "30 Inches (2.5 ft)", price: 11400, mrp: 13500, weight: "7.5 kg / pair" },
    { height: "36", label: "36 Inches (3.0 ft)", price: 16800, mrp: 19500, weight: "10.8 kg / pair", badge: "MANDAPAM" },
  ];

  const handleSizeSelect = (option: typeof sizeOptions[0]) => {
    setSelectedHeight(option.height);
    setSelectedPrice(option.price);
    setSelectedMrp(option.mrp);
    setSelectedWeight(option.weight);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const whatsappUrl = getWhatsAppLink(product.title, "919894198916", {
    image: images[selectedImage] || product.image,
    tamilTitle: product.tamilTitle,
    price: selectedPrice,
    variant: `${qty} unit(s) • ${selectedHeight} Inches • ${selectedFinish}`,
    sku: product.id,
  });

  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb */}
      <div className="w-full bg-[#f6f3f2] py-3.5 sm:py-4 px-4 sm:px-6 border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#534245]">
          <Link href="/" className="hover:text-[#48061d] flex items-center gap-1 transition-colors font-medium">
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>Home</span>
          </Link>
          <span className="text-[#867275]">/</span>
          <Link href="/categories" className="hover:text-[#48061d] transition-colors font-medium">
            Product Catalogue
          </Link>
          <span className="text-[#867275]">/</span>
          <span className="text-[#48061d] font-bold truncate max-w-xs sm:max-w-md">
            {product.title}
          </span>
        </div>
      </div>

      {/* Main Product Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#e5e2e1]">
              <div className="relative w-full aspect-[4/5] bg-[#f6f3f2] rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={images[selectedImage] || product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-1 items-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-md text-[#48061d] text-[10px] font-bold rounded shadow-sm">
                    <span className="material-symbols-outlined text-[14px] text-[#7b5902]">verified</span>
                    TEMPLE GRADE • VIRGIN BRASS
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#ffdea4] text-[#261900] text-[10px] rounded font-bold shadow-sm">
                    {product.origin}
                  </span>
                </div>
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div className="grid grid-cols-5 gap-2 mt-4">
                  {images.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setSelectedImage(idx)}
                      className={`relative rounded-lg overflow-hidden aspect-square bg-[#f0eded] border-2 transition-all ${
                        selectedImage === idx
                          ? "border-[#48061d] scale-105 shadow-sm"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Video Inspection Callout */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e2e1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ffdea4] flex items-center justify-center shrink-0 text-[#261900]">
                  <span className="material-symbols-outlined text-[24px]">videocam</span>
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#48061d] font-bold">
                    Request Live Video Inspection
                  </h4>
                  <p className="text-xs text-[#534245] mt-1">
                    Buying for wedding seer or overseas? We will show this exact piece live from our Madurai showroom over WhatsApp video call.
                  </p>
                </div>
              </div>
              <a
                href={getWhatsAppLink(product.title, "919894198916", {
                  image: product.image,
                  tamilTitle: product.tamilTitle,
                  variant: "Live Video Call Inspection Request",
                  sku: product.id,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 bg-[#eae7e7] hover:bg-[#651d32] hover:text-white text-[#48061d] text-xs font-semibold rounded-lg flex items-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                <span>Book 5-Min Call</span>
              </a>
            </div>
          </div>

          {/* Right Column: Product Detail & WhatsApp Commerce */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e2e1] space-y-4">
              <div>
                <span className="text-[10px] tracking-widest text-[#7b5902] font-bold uppercase">
                  Jayavel Heritage Homestead Series
                </span>
                <h1 className="font-serif text-2xl text-[#48061d] font-bold mt-1 leading-tight">
                  {product.title}
                </h1>
                {product.tamilTitle && (
                  <p className="text-xs text-[#534245] italic mt-0.5">
                    {product.tamilTitle}
                  </p>
                )}
                <div className="flex items-center gap-2 pt-2 text-xs">
                  <span className="text-[#7b5902] font-bold">★ {product.rating}</span>
                  <span className="text-[#867275]">({product.reviewCount} Reviews)</span>
                  <span className="text-[#867275]">•</span>
                  <span className="font-mono text-[#867275]">SKU: {product.id}</span>
                </div>
              </div>

              {/* Price Block */}
              <div className="bg-[#f6f3f2] p-4 rounded-lg flex items-end justify-between border border-[#e5e2e1]">
                <div>
                  <span className="text-[10px] text-[#867275] uppercase font-bold tracking-wider">
                    Pair Price (2 Pieces Complete)
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-serif text-2xl text-[#48061d] font-bold">
                      ₹{selectedPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-[#867275] line-through">
                      ₹{selectedMrp.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-[#00402a] font-bold bg-[#b1f0ce] px-1.5 py-0.5 rounded">
                      Save {Math.round(((selectedMrp - selectedPrice) / selectedMrp) * 100)}%
                    </span>
                  </div>
                  <span className="text-[11px] text-[#534245] mt-1 block">
                    Weight: {selectedWeight} • Free Madurai Delivery
                  </span>
                </div>
              </div>

              {/* Size & Weight Selector */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#1b1c1c] uppercase tracking-wide">
                    Select Height &amp; Solid Weight:
                  </label>
                  <button
                    type="button"
                    onClick={() => setSizeModalOpen(true)}
                    className="text-xs text-[#7b5902] hover:underline flex items-center gap-0.5"
                  >
                    <span className="material-symbols-outlined text-[14px]">straighten</span>
                    <span>Height Guide</span>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {sizeOptions.map((opt) => (
                    <button
                      key={opt.height}
                      type="button"
                      onClick={() => handleSizeSelect(opt)}
                      className={`p-2.5 rounded-lg text-left transition-all flex flex-col border ${
                        selectedHeight === opt.height
                          ? "bg-[#651d32] text-white border-[#651d32] shadow-sm"
                          : "bg-[#f6f3f2] hover:bg-[#eae7e7] text-[#1b1c1c] border-[#e5e2e1]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{opt.label}</span>
                        {opt.badge && (
                          <span className="text-[9px] bg-[#ffdea4] text-[#261900] px-1.5 rounded font-bold">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      <span className={`text-[11px] mt-0.5 ${selectedHeight === opt.height ? "text-white/80" : "text-[#534245]"}`}>
                        Weight: {opt.weight}
                      </span>
                      <span className={`text-xs font-bold mt-1 ${selectedHeight === opt.height ? "text-[#ffdea4]" : "text-[#48061d]"}`}>
                        ₹{opt.price.toLocaleString("en-IN")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1b1c1c] uppercase tracking-wide">
                  Finish Selection:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Traditional Bright Polish", "Antique Matte Patina"].map((finish) => (
                    <button
                      key={finish}
                      type="button"
                      onClick={() => setSelectedFinish(finish)}
                      className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                        selectedFinish === finish
                          ? "bg-[#ffdea4] text-[#261900] border-[#7b5902] font-bold"
                          : "bg-[#f6f3f2] text-[#534245] border-[#e5e2e1] hover:bg-[#eae7e7]"
                      }`}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center bg-[#f0eded] rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-8 h-8 rounded bg-white text-[#1b1c1c] hover:bg-[#651d32] hover:text-white font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-[#1b1c1c]">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty(qty + 1)}
                    className="w-8 h-8 rounded bg-white text-[#1b1c1c] hover:bg-[#651d32] hover:text-white font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-[#534245]">
                  Pairs (Total {qty * 2} individual standing lamps)
                </span>
              </div>

              {/* Primary WhatsApp Order CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-lg bg-[#00402a] hover:bg-[#002819] text-white flex items-center justify-between shadow-md transition-all group border border-[#b1f0ce]/30"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[26px] text-[#b1f0ce]">chat</span>
                  <div className="flex flex-col text-left">
                    <span className="font-serif text-base text-[#b1f0ce] font-bold leading-none">
                      Enquire &amp; Order on WhatsApp
                    </span>
                    <span className="text-[11px] text-white/80 mt-1">
                      Direct response from Madurai store desk
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-[#b1f0ce] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

              {/* Secondary Actions */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => showToast(`Added ${qty} Pair (${selectedHeight}") to enquiry tray!`)}
                  className="py-2.5 px-3 rounded-lg bg-[#651d32] text-white text-xs font-semibold hover:bg-[#48061d] transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                  <span>Add to Enquiry List</span>
                </button>
                <button
                  type="button"
                  onClick={() => showToast("Item added to your Wedding Seer Package!")}
                  className="py-2.5 px-3 rounded-lg bg-[#f0eded] hover:bg-[#eae7e7] text-[#48061d] text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#7b5902]">celebration</span>
                  <span>Add to Wedding Seer</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-[#e5e2e1] overflow-hidden">
          <div className="flex border-b border-[#e5e2e1] bg-[#f6f3f2] px-4 pt-2 gap-2 overflow-x-auto text-xs font-bold">
            {[
              { id: "specs", label: "Technical Specifications", icon: "tune" },
              { id: "significance", label: "Auspicious Significance", icon: "temple_hindu" },
              { id: "care", label: "Cleaning & Maintenance", icon: "clean_hands" },
              { id: "shipping", label: "Shipping & Packaging", icon: "local_shipping" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-3 rounded-t-lg transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? "bg-white text-[#48061d] border-t-2 border-[#48061d]"
                    : "text-[#534245] hover:text-[#48061d]"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === "specs" && (
              <div className="space-y-3 text-sm text-[#534245]">
                <h3 className="font-serif text-lg font-bold text-[#48061d] mb-4">
                  Dimensional &amp; Material Analysis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b border-[#f0eded]">
                    <span>Product Category</span>
                    <strong className="text-[#1b1c1c]">{product.category}</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0eded]">
                    <span>Material Metallurgy</span>
                    <strong className="text-[#1b1c1c]">{product.material}</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0eded]">
                    <span>Lamp Height</span>
                    <strong className="text-[#1b1c1c]">{selectedHeight} Inches / {Math.round(Number(selectedHeight) * 2.54)} cm</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0eded]">
                    <span>Net Weight</span>
                    <strong className="text-[#1b1c1c]">{selectedWeight}</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0eded]">
                    <span>Wick Points</span>
                    <strong className="text-[#1b1c1c]">5 Petal Diya Points (Ainthu-Mugam)</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#f0eded]">
                    <span>Crafting Origin</span>
                    <strong className="text-[#1b1c1c]">{product.origin}</strong>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "significance" && (
              <div className="space-y-4 text-sm text-[#534245]">
                <h3 className="font-serif text-lg font-bold text-[#48061d]">
                  The Divine Discernment of the Annam Bird
                </h3>
                <p className="leading-relaxed">
                  In South Indian iconography, the <strong>Annam</strong> (celestial swan or <em>Hamsa</em>) embodies <em>Viveka</em>—spiritual discernment. Legend says it drinks pure milk and rejects water, symbolizing taking divine goodness and discarding negativity.
                </p>
                <p className="leading-relaxed">
                  Lighting the five wicks invokes Mahalakshmi, sanctifying the household with auspicious light, prosperity, and peace.
                </p>
              </div>
            )}

            {activeTab === "care" && (
              <div className="space-y-4 text-sm text-[#534245]">
                <h3 className="font-serif text-lg font-bold text-[#48061d]">
                  Preserving Golden Shine
                </h3>
                <p className="leading-relaxed">
                  Apply a paste of <strong>Pitambari powder</strong> or tamarind paste with salt and lemon juice. Rest for 3 minutes, then scrub gently with a soft cotton cloth. Rinse with warm water and wipe completely dry.
                </p>
                <p className="text-xs text-[#7b5902] font-semibold">
                  Avoid harsh steel wire wool or chlorine-based cleaners to preserve the original metal luster.
                </p>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-4 text-sm text-[#534245]">
                <h3 className="font-serif text-lg font-bold text-[#48061d]">
                  Pooja-Grade Export Packaging
                </h3>
                <p className="leading-relaxed">
                  Every piece is individually bubble-wrapped, nestled inside shock-absorbent thermocol, and secured in heavy corrugated crates. Dispatched worldwide via DHL, FedEx, and India Post with 100% transit guarantee.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Essentials */}
        <div className="mt-12 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#48061d]">
            Frequently Paired Pooja Essentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-[#e5e2e1] flex flex-col justify-between group"
              >
                <div>
                  <Link href={`/products/${rel.slug}`} className="block aspect-square rounded-lg overflow-hidden bg-[#f0eded] mb-3">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </Link>
                  <h4 className="text-xs font-bold text-[#1b1c1c] line-clamp-2">
                    <Link href={`/products/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p className="text-[11px] text-[#867275] mt-1">{rel.material}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#f0eded] flex items-center justify-between">
                  <span className="font-serif font-bold text-[#48061d] text-sm">
                    ₹{rel.price.toLocaleString("en-IN")}
                  </span>
                  <a
                    href={getWhatsAppLink(rel.title, "919894198916", {
                      image: rel.image,
                      tamilTitle: rel.tamilTitle,
                      price: rel.price,
                      sku: rel.id,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-[#f0eded] text-[#48061d] hover:bg-[#651d32] hover:text-white text-xs font-semibold transition-colors"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#651d32] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-2 text-xs font-semibold">
          <span className="material-symbols-outlined text-[18px] text-[#ffdea4]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Size Guide Modal */}
      {sizeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5e2e1]">
              <h4 className="font-serif text-lg font-bold text-[#48061d]">
                Kuthu Vilakku Height Recommendation
              </h4>
              <button
                type="button"
                onClick={() => setSizeModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-[#f0eded] flex items-center justify-center text-[#867275]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="space-y-2.5 text-xs text-[#534245]">
              <div className="p-3 bg-[#f6f3f2] rounded-lg">
                <strong className="text-[#48061d]">18 Inches (1.5 ft):</strong> Ideal for compact apartment pooja mandirs or table tops.
              </div>
              <div className="p-3 bg-[#ffdea4]/40 rounded-lg">
                <strong className="text-[#7b5902]">24 Inches (2.0 ft) [Recommended]:</strong> Traditional home sanctum threshold and wedding seer gifts.
              </div>
              <div className="p-3 bg-[#f6f3f2] rounded-lg">
                <strong className="text-[#48061d]">30 Inches (2.5 ft):</strong> Sprawling bungalows, courtyards, and festive halls.
              </div>
              <div className="p-3 bg-[#f6f3f2] rounded-lg">
                <strong className="text-[#48061d]">36 Inches (3.0 ft):</strong> Temple mandapams and grand reception entryways.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSizeModalOpen(false)}
              className="w-full py-2.5 bg-[#48061d] text-white rounded-lg text-xs font-bold"
            >
              Close Height Guide
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
