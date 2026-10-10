import Link from "next/link";
import { PRODUCTS, STORE_CONTACT } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const bestSellers = PRODUCTS.slice(0, 4);

  const categories = [
    {
      title: "Kuthu Vilakku & Brass Lamps",
      desc: "Annam Vilakku, Kamakshi Amman Deepam, Hanging Peacock Diyas & Kerala Uruli Vilakku in pure virgin brass.",
      priceHint: "From ₹1,250 • Sizes 8\" to 6 ft",
      badge: "Flagship Specialty",
      slug: "kuthu-vilakku",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAynITXUGBss5bSRl2L3oCWWXuv9pCRUWFhjtJUZ5l4AEAUstWLyA2EgFMSU-XWuR94oI-O5sfV-VhjksmrJ2D0cLBmyfVfk_djQg8P8oiFUvkXjmdy5j655yz1pGP0UiGjle67MWV5BvaY32zVtfsQsN6zqqHKusLGtpkEW_sbAxi8v_NQSYtUeJZ0aVlyPd_IoBrw-x6W3Z4lcHtV3-IxnP9ZIoUoV8NNLK_TDueV-mF1tD7sZq6a3Q",
    },
    {
      title: "Sacred Pooja Statues & Idols",
      desc: "Murugan with Vel, Madurai Meenakshi Amman, Vinayagar, Nataraja & Perumal in pure temple bronze & heavy brass.",
      priceHint: "Lost-Wax Technique • Solid Core",
      badge: "Swamimalai Castings",
      slug: "pooja-statues",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChI-oIt1Ym4HhrjlMxRFMWV-8fgu41BAEDyT9MCNNkiPoFQ57ItoNHkwDRnb3bSEqeGNmure1hm-bDFEE5BcpzO49Tl0xK2z7uNbD_5jep5Tuit_JvRfZh4UY_wOkO__QJOK2IaGUSb_Hh-zarkMZWkptaJxfSvfnt2wAuv3bghc3obGTx8sbIrkhg6lb4a20pOnnSKsM5qJ5QSh1aqvyUif16HwB7llVSJB3Ds_F-ZVx-ZrqLMo6gFA",
    },
    {
      title: "Brass & Bronze Utensils",
      desc: "Authentic Eeya Chombu (tin alloy for aromatic rasam), Paruppu Uruli, Vengala Paanai, and manual Sevai Nazhi presses.",
      priceHint: "100% Food-Grade Tinning Available",
      badge: "Nutrient-Retaining Cookware",
      slug: "traditional-cookware",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgb4gX1c2vnhRw0zf6HdAqHSIO3Mb9tF7n2ZssqYY1DsIHt-hLsE1DP6vD2DNR9MJr8yIvaGpSgQfoU_k0CmFbAbCx_c2cXMjSZ3PAbO7ZN4frg3d9bVlPihuCFYq2_2ApvYZGMlOyO29uq4nZOZeJa9IKgMToLKw-5aWogbYPJk6q0qo0_etpT69-4tjhPBjvnziv2GXDrtqC5H6cjPBbvHY65gr2RfI6-ZIG5FXkO5sPsQF2cFvlVQ",
    },
    {
      title: "Pure Copper Essentials",
      desc: "Hammered copper water dispensers with brass spigots, Thara Sompu, Panchapatra Udharani sets, and engraved copper carafes.",
      priceHint: "99.4% Certified Pure Copper",
      badge: "Ayurvedic Wellness",
      slug: "copper-essentials",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfe1Ngziwj9vkYf9udFrPnZjgUt4xbPIx9yZd6Pl4L28v0ihiSFDI82kjKy2I5fA-0SdTmZ3UGnZoCnX2cwHpvpIKdAXyPswcTXMOyKik662qyBqoVU7Dt4geh7EY_4LOkEOoyDnFVQti98jJA4Kb-b4SaHW8Qlgzhh0JUaTQnavQYtMrmLsElwcUZEKfKbb4m5yfe0Qna5l3CXNN2Gm-O-0oAeHs6bT91TZ9U-kal2ob_ZmoPuJVXnA",
    },
    {
      title: "Stainless Steel & Tiffins",
      desc: "Salem heavy-bottom vessels, multi-tier brass latch tiffin boxes, wedding feast boilers, and rust-proof SS kitchen sets.",
      priceHint: "Lifelong Durability • 304 Grade",
      badge: "Salem Heavy Gauge",
      slug: "stainless-steel",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYjdpKw70p6cqGSX0JAUxxUwRXz6Btv113WfVbaZQeUxThJYwolu00m8ee0ttuUlNI3kp7A7ktihAFqwA9-uI07j2_NoOaanllzlM-E7j508ClryKsb-eZ4XiS-nE9Zk4Q92Wop_aqGbAtrdzRIahog9vEcgnqa4BOfjC7SMr9-c9FMnQGQfwS1WDavF0grsQ_raRie4UNnBvjUCNyEWxtlZMVyKBWVu86hxFkTkXQs-Td1cAtOxf5Vg",
    },
    {
      title: "Appliances & Coffee Brass",
      desc: "Heavy-cast brass Kumbakonam Degree Coffee filters & Dabara sets, stone wet grinders, and authorized cookware appliances.",
      priceHint: "Complete Wedding Kits",
      badge: "Daily Homestead",
      slug: "appliances",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBazM9Xg5UXxyeTn9x6qpHyPzCkOnkK_O9m9NlEVyWQ7AH3beP1jDs9fAwW8FW09nLN3xy28VfSjrs3gg4GWBdPuQavEoLutSUdXey49fZdVcaOAkC9ySIRdWWi9iEgxc9vAk-ONUOkG-ui5lmdZcsb8ROTfnGi_avDArwopWq2kOK7LLcy6mp0nyhdZdiSaSsRdhpgpcZ3JIdWD99PStHBsI8jW27WhLen6yxAMzuH9nqFA0ZlAYDJtw",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}

      {/* Hero Section */}
      <section className="relative w-full bg-[#fcf9f8] py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eae7e7] text-[#48061d] text-xs uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#7b5902] animate-pulse"></span>
              Madurai&apos;s Premier Heritage House Since 1978
            </div>
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl text-[#48061d] leading-tight font-bold tracking-tight">
                Authentic Tamil Heritage &amp; Sacred Craftsmanship{" "}
                <span className="italic font-normal text-[#7b5902]">For Every Home</span>
              </h1>
              <p className="text-base sm:text-lg text-[#534245] max-w-2xl leading-relaxed">
                From hand-cast Nachiarkoil Annam Kuthu Vilakku and temple-grade brass pooja idols to traditional Eeya Chombu, Kumbakonam bronze, and heavy-gauge Salem stainless steel cookware. Preserving divine sanctity across generations.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#48061d] text-white text-sm font-semibold shadow-md hover:bg-[#651d32] transition-all hover:shadow-lg"
              >
                <span>Explore Catalogue</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#00402a] text-[#b1f0ce] hover:bg-[#002819] text-sm font-semibold transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>WhatsApp Order Enquiry</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-[#7b5902] text-sm font-semibold hover:underline transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">storefront</span>
                <span>Showroom Experience</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#f6f3f2] flex items-center gap-3 border border-[#e5e2e1]">
                <div className="w-10 h-10 rounded-lg bg-[#7b5902]/10 flex items-center justify-center text-[#7b5902] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                </div>
                <div>
                  <p className="text-sm text-[#1b1c1c] font-bold">45+ Years</p>
                  <p className="text-xs text-[#534245]">In East Masi St, Madurai</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#f6f3f2] flex items-center gap-3 border border-[#e5e2e1]">
                <div className="w-10 h-10 rounded-lg bg-[#7b5902]/10 flex items-center justify-center text-[#7b5902] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">verified_user</span>
                </div>
                <div>
                  <p className="text-sm text-[#1b1c1c] font-bold">100% Pure Metal</p>
                  <p className="text-xs text-[#534245]">Heavy-gauge bell brass</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#f6f3f2] flex items-center gap-3 border border-[#e5e2e1]">
                <div className="w-10 h-10 rounded-lg bg-[#7b5902]/10 flex items-center justify-center text-[#7b5902] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">public</span>
                </div>
                <div>
                  <p className="text-sm text-[#1b1c1c] font-bold">Global Dispatch</p>
                  <p className="text-xs text-[#534245]">Insured courier worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden bg-[#eae7e7] shadow-xl aspect-[4/5]">
                <img
                  src="/murugan-hero.jpg"
                  alt="Divine Lord Murugan with Vel and Peacock handcrafted brass idol in temple sanctum"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#48061d]/85 via-[#48061d]/20 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-md text-[#48061d] text-xs font-semibold">
                    <span className="material-symbols-outlined text-[#7b5902] text-[16px]">stars</span>
                    <span>Temple Sanctum Grade</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#7b5902] text-white text-xs shadow-sm font-bold">
                    ESTD 1978
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-wider text-[#ffdea4] font-semibold">
                    Sacred Temple Vigraham
                  </p>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">
                    Lord Murugan with Vel &amp; Mayil
                  </h3>
                  <p className="text-xs text-[#eae7e7] mt-1">
                    Authentic lost-wax casting with sacred Vel, peacock vahana &amp; sanctum radiance.
                  </p>
                </div>
              </div>

              {/* Floating Pill Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3.5 max-w-xs border border-[#e5e2e1]">
                <div className="w-12 h-12 rounded-full bg-[#ffdea4] flex items-center justify-center text-[#48061d] shrink-0">
                  <span className="material-symbols-outlined text-[26px]">family_restroom</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1b1c1c]">Wedding Seer Specialists</p>
                  <p className="text-xs text-[#534245]">Custom brass packs for Tamil bridal ceremonies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Categories Bento Grid */}
      <section className="w-full bg-[#f6f3f2] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs text-[#7b5902] uppercase tracking-widest font-bold">
                Madurai&apos;s Handpicked Repository
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#48061d] font-bold">
                Curated Heritage Categories
              </h2>
              <p className="text-sm text-[#534245] max-w-2xl">
                Explore meticulously categorized metallurgy, traditional cookware, and sacred sanctuary essentials designed to endure for generations.
              </p>
            </div>
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-[#48061d] text-sm font-bold hover:text-[#7b5902] transition-colors shrink-0"
            >
              <span>View All 2,500+ Items</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#e5e2e1]"
              >
                <div className="relative h-60 overflow-hidden bg-[#eae7e7]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#48061d] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {cat.badge}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-lg text-[#48061d] font-bold group-hover:text-[#7b5902] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#534245] mt-1.5 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between border-t border-[#f0eded]">
                    <span className="text-xs text-[#7b5902] font-semibold">{cat.priceHint}</span>
                    <Link
                      href={`/categories?category=${cat.slug}`}
                      className="w-9 h-9 rounded-full bg-[#f0eded] flex items-center justify-center text-[#48061d] group-hover:bg-[#48061d] group-hover:text-white transition-colors"
                      aria-label={`Browse ${cat.title}`}
                    >
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Grid */}
      <section className="w-full bg-[#fcf9f8] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs text-[#7b5902] uppercase tracking-widest font-bold">
                Heirloom Quality Standard
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#48061d] font-bold">
                Best Sellers &amp; Temple Specials
              </h2>
              <p className="text-sm text-[#534245]">
                The most revered selections ordered by Madurai families and overseas temples.
              </p>
            </div>
            <Link
              href="/categories"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#48061d] hover:text-[#7b5902] transition-colors"
            >
              <span>Explore All Products</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Highlight Banner */}
      <section className="w-full bg-[#f0eded] py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#7b5902] text-xs uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[20px]">temple_hindu</span>
              <span>A Legacy Rooted in Madurai Sanctity</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#48061d] font-bold leading-tight">
              Three Generations of Preserving Tamil Metallurgy &amp; Household Divinity
            </h2>
            <p className="text-sm text-[#534245] leading-relaxed">
              Founded in 1978 along East Masi Street, just steps away from the sanctum sanctorum of the Meenakshi Sundareswarar Temple, <strong className="text-[#48061d]">Jayavel Stores</strong> was born to safeguard authentic metalcraft.
            </p>
            <p className="text-sm text-[#534245] leading-relaxed">
              We work directly with over 120 traditional Sthapatis from Kumbakonam, Swamimalai, and Nachiarkoil without middlemen, ensuring uncompromised purity and heirloom permanence.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#48061d] text-white text-xs font-semibold hover:bg-[#651d32] transition-colors shadow-sm"
              >
                <span>Read Our Full Heritage Chronicle</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-[#eae7e7]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDScP6LUQXMySMYOc3E0BP7BcxrURKkxiWzb4_zKqa_U-9NW0jBNHNhH0a4wElUiiEJ9uBP7RH6I3F8Pyr0mbmXIExpsINRgFf-PP3G07crbgyDhz4g362F02WeT6nv1_FgfFzm0oKE5Nsk6R5sIuTux1kmxMisgSJZLF2G77rtPldgzCa4O3difw-hCcEuIdT4DTUgEjuIQXd8szPWOz-CdzHwhgB0xf8yy3V4hajEwQctxOl0E6aBbg"
                  alt="Artisan casting bronze"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl p-6 bg-[#48061d] text-white shadow-md flex flex-col justify-between">
                <span className="material-symbols-outlined text-[#ffdea4] text-[32px]">auto_awesome</span>
                <div>
                  <p className="font-serif text-lg font-bold text-[#ffdea4]">Pure Bell Metal</p>
                  <p className="text-xs text-[#eae7e7] mt-1">Real heirloom weight that rings pure tone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA Strip */}
      <section className="w-full bg-[#48061d] py-12 px-4 sm:px-6 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-[#ffdea4] font-bold">
              Personalized Madurai Service
            </span>
            <h3 className="font-serif text-2xl font-bold">Planning a Wedding Seer or Temple Installation?</h3>
            <p className="text-sm text-[#eae7e7]">
              Connect directly with our master curators. We customize metal weights, engrave bride &amp; groom initials, and package safe international consignments.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#7b5902] text-white font-semibold text-sm hover:bg-[#ffdea4] hover:text-[#261900] transition-colors shadow-lg"
              href={STORE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Chat on WhatsApp ({STORE_CONTACT.phone})</span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#651d32] text-white text-sm font-semibold hover:bg-white hover:text-[#48061d] transition-colors"
              href={`tel:${STORE_CONTACT.phoneRaw}`}
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Call Showroom</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
