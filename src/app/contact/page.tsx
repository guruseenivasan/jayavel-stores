"use client";

import { useState } from "react";
import Image from "next/image";
import { STORE_CONTACT } from "@/data/products";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    city: "",
    category: "Wedding Seervarisai Complete Package",
    preference: "whatsapp",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const transitRoutes = [
    {
      title: "Madurai Junction Railway Station",
      distance: "1.8 km / 8 mins",
      desc: 'Direct auto-rickshaws available from station gate (Ask for "East Masi Street - Jayavel Vilakku Kadai"). Pre-paid auto desk available.',
      icon: "train",
    },
    {
      title: "Madurai Airport (IXM)",
      distance: "12 km / 25 mins",
      desc: "Smooth cab drive via Ring Road into East Gate. For NRI travelers, we offer advance airport luggage packing services.",
      icon: "flight",
    },
    {
      title: "Periyar Central Bus Stand",
      distance: "2.2 km / 10 mins",
      desc: "Frequent town buses stopping at Simmakkal or South Masi street junction. Quick walking stroll into East Masi corner.",
      icon: "directions_bus",
    },
    {
      title: "Meenakshi Amman East Tower",
      distance: "350m / 5 min walk",
      desc: "Exit the temple's majestic East Gopuram, walk straight along Chithirai Street, and take the quick right into East Masi Street.",
      icon: "temple_buddhist",
    },
  ];

  const faqs = [
    {
      q: "Do you provide international packaging for brass idols and heavy lamps?",
      a: "Yes, absolutely. We have a dedicated packing desk equipped with custom bubble encapsulation, thermo-cushioning, and sturdy wooden crating tailored for international air and ocean luggage allowances.",
    },
    {
      q: "How can we pre-order a full wedding Seervarisai set before visiting?",
      a: `You can message our WhatsApp Seervarisai coordinator at ${STORE_CONTACT.phone} or fill in the form above. We will send you our detailed curated Tamil Wedding Seer catalog (with weights, tier options, and custom name engravings) before your visit so everything is prepared upon arrival.`,
    },
    {
      q: "Is car parking easily accessible on East Masi Street?",
      a: "Yes! East Masi Street can get bustling during temple hours, which is why we provide free dedicated Valet Parking for all Jayavel Stores visitors. When you approach our front facade, hand your keys to our uniformed security personnel.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Top Banner */}
      <section className="relative w-full bg-[#f6f3f2] py-10 px-4 sm:px-6 border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md border-2 border-[#ffdea4] p-1 bg-white shrink-0">
              <Image
                src="/logo/jv-logo.png"
                alt="Jayavel Stores Royal Emblem"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#ffdea4]/50 text-[#261900] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[14px]">temple_hindu</span>
                <span>Madurai Heritage Precinct</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl text-[#48061d] font-bold">
                Visit Our Madurai Flagship Store &amp; Get in Touch
              </h1>
              <p className="text-sm text-[#534245] max-w-2xl">
                Located just 5 minutes from the historic Meenakshi Amman Temple. Step in to experience 3 floors of pure brass, pooja idols, and premium kitchen essentials.
              </p>
            </div>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-white shadow-sm border border-[#e5e2e1] flex items-center gap-3 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#00402a] animate-pulse"></span>
            <div>
              <div className="text-[10px] uppercase font-bold text-[#867275]">Store Status</div>
              <div className="text-xs font-bold text-[#00402a]">Showroom Open Today (365 Days)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Hub */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Store Details & Channels */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Showroom Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e2e1] space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#651d32] text-[#ffdea4] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">storefront</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#7b5902] tracking-wider">
                      Primary Location
                    </span>
                    <h2 className="font-serif text-lg text-[#48061d] font-bold">
                      Jayavel Stores (Main Flagship Showroom)
                    </h2>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#ffdea4] text-[#261900] text-xs font-bold">
                  3 Floors
                </span>
              </div>
              <div className="space-y-2 text-sm text-[#534245]">
                <p className="font-medium text-[#1b1c1c] leading-relaxed">
                  142-144, East Masi Street, Near Chithirai Street Corner,<br />
                  Near Sri Meenakshi Sundareswarar Temple,<br />
                  Madurai, Tamil Nadu - 625001, India.
                </p>
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-lg bg-[#f6f3f2] text-[#48061d] text-xs font-medium">
                  <span className="material-symbols-outlined text-[#7b5902] text-[16px]">explore</span>
                  <span><strong>Landmark:</strong> Opposite City Union Bank, East Gate entrance</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={STORE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#00402a] text-[#b1f0ce] text-xs font-semibold hover:bg-[#002819] transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href={`tel:${STORE_CONTACT.landlineRaw}`}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#651d32] text-white text-xs font-semibold hover:bg-[#48061d] transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  <span>Call Store Desk</span>
                </a>
                <a
                  href="https://maps.google.com/?q=East+Masi+Street+Madurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#f0eded] text-[#1b1c1c] text-xs font-semibold hover:bg-[#eae7e7] transition-colors"
                >
                  <span className="material-symbols-outlined text-[#7b5902] text-[16px]">directions</span>
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Timings & Direct Hotlines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Working Hours */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e2e1] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#7b5902] uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span>Store Timings</span>
                </div>
                <div className="space-y-2 text-xs text-[#534245]">
                  <div className="flex justify-between pb-1.5 border-b border-[#f0eded]">
                    <span>Monday to Saturday</span>
                    <strong className="text-[#48061d]">9:00 AM – 9:30 PM</strong>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-[#f0eded]">
                    <span>Sunday &amp; Festivals</span>
                    <strong className="text-[#48061d]">9:30 AM – 9:00 PM</strong>
                  </div>
                  <div className="p-2 bg-[#f6f3f2] rounded text-[11px] text-[#48061d] font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#7b5902] text-[14px]">celebration</span>
                    <span>Open all 365 days without lunch closure</span>
                  </div>
                </div>
              </div>

              {/* Direct Hotlines */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e2e1] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#7b5902] uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">support_agent</span>
                  <span>Direct Contact Lines</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-[#867275] font-bold">Showroom Telephone</span>
                    <p className="font-bold text-[#48061d] mt-0.5">
                      <a href={`tel:${STORE_CONTACT.landlineRaw}`} className="hover:underline">
                        {STORE_CONTACT.landline}
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#867275] font-bold">Mobile / WhatsApp</span>
                    <p className="font-bold text-[#00402a] mt-0.5">
                      <a href={STORE_CONTACT.whatsappUrl} className="hover:underline">
                        {STORE_CONTACT.phone}
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#867275] font-bold">Official Email</span>
                    <p className="text-[#48061d] font-medium mt-0.5">
                      {STORE_CONTACT.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-[#e5e2e1] relative">
              <div className="flex items-center gap-2 text-[#7b5902] text-xs font-bold uppercase tracking-wider mb-1">
                <span className="material-symbols-outlined text-[16px]">edit_calendar</span>
                <span>Madurai Flagship Desk</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#48061d] font-bold">
                Wedding Seer &amp; Store Enquiry
              </h2>
              <p className="text-xs text-[#534245] mt-1 mb-6">
                Planning a temple donation, bulk wedding seer package, or looking for specific vintage brassware?
              </p>

              {formSubmitted ? (
                <div className="p-8 bg-[#f6f3f2] rounded-xl text-center space-y-3 border border-[#e5e2e1]">
                  <div className="w-14 h-14 rounded-full bg-[#00402a] text-[#b1f0ce] mx-auto flex items-center justify-center">
                    <span className="material-symbols-outlined text-[32px]">check_circle</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#48061d]">Enquiry Received!</h3>
                  <p className="text-xs text-[#534245]">
                    Nandri {formData.fullName}! Our showroom manager in East Masi Street will message you on WhatsApp within 30 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 bg-[#48061d] text-white rounded-lg text-xs font-bold mt-2"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1b1c1c] uppercase tracking-wider mb-1" htmlFor="name">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Senthil Nathan"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#f6f3f2] text-sm text-[#1b1c1c] border border-[#e5e2e1] focus:outline-none focus:ring-2 focus:ring-[#48061d]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1b1c1c] uppercase tracking-wider mb-1" htmlFor="wa">
                        WhatsApp Number *
                      </label>
                      <input
                        id="wa"
                        type="tel"
                        required
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        placeholder="98941 XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f6f3f2] text-sm text-[#1b1c1c] border border-[#e5e2e1] focus:outline-none focus:ring-2 focus:ring-[#48061d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1b1c1c] uppercase tracking-wider mb-1" htmlFor="city">
                        City / Country *
                      </label>
                      <input
                        id="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Madurai / Chennai / USA"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f6f3f2] text-sm text-[#1b1c1c] border border-[#e5e2e1] focus:outline-none focus:ring-2 focus:ring-[#48061d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1b1c1c] uppercase tracking-wider mb-1" htmlFor="cat">
                      Select Category of Interest *
                    </label>
                    <select
                      id="cat"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#f6f3f2] text-sm text-[#1b1c1c] border border-[#e5e2e1] focus:outline-none focus:ring-2 focus:ring-[#48061d]"
                    >
                      <option value="Wedding Seervarisai Complete Package">Wedding Seervarisai Complete Package</option>
                      <option value="Brass Kuthu Vilakku">Annam / Kamakshi Kuthu Vilakku (All Sizes)</option>
                      <option value="Pooja Items &amp; Idols">Pooja Items, Bronze &amp; Brass Idols</option>
                      <option value="Traditional Cookware">Traditional Bronze Cookware &amp; Eeya Chombu</option>
                      <option value="Temple Donation Order">Temple Bells / Custom Kovil Donation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1b1c1c] uppercase tracking-wider mb-1" htmlFor="msg">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      id="msg"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify sizes, wedding dates, or idol poses..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#f6f3f2] text-sm text-[#1b1c1c] border border-[#e5e2e1] focus:outline-none focus:ring-2 focus:ring-[#48061d] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-[#48061d] hover:bg-[#651d32] text-white text-xs font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Send Direct Enquiry (We reply within 30 mins)</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Transit Arrival Guide */}
      <section className="w-full bg-[#f6f3f2] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#7b5902] font-bold">Getting To Jayavel Stores</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#48061d] font-bold">
              Madurai Flagship Arrival Guide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {transitRoutes.map((route) => (
              <div key={route.title} className="p-5 rounded-xl bg-white shadow-sm border border-[#e5e2e1] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[24px] text-[#7b5902]">{route.icon}</span>
                  <span className="text-xs font-bold text-[#7b5902]">{route.distance}</span>
                </div>
                <h3 className="font-serif text-sm font-bold text-[#48061d]">{route.title}</h3>
                <p className="text-xs text-[#534245] leading-relaxed">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#7b5902] font-bold">Helpful Tips</span>
          <h2 className="font-serif text-2xl font-bold text-[#48061d]">Frequently Asked Store Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group p-4 rounded-xl bg-white border border-[#e5e2e1] shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer text-sm font-bold text-[#48061d]">
                <span>{faq.q}</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#867275]">
                  expand_more
                </span>
              </summary>
              <p className="mt-3 text-xs text-[#534245] leading-relaxed border-t border-[#f0eded] pt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
