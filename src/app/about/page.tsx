import Image from "next/image";
import Link from "next/link";
import { STORE_CONTACT } from "@/data/products";

export default function AboutPage() {
  const milestones = [
    {
      year: "1978",
      title: "East Masi Street Doorway",
      desc: "Modest beginning near Meenakshi Kovil, focusing on sacred temple lamps, bronze Urulis, and puja hand-bells.",
      icon: "storefront",
    },
    {
      year: "1992",
      title: "Artisan Direct Guilds",
      desc: "Formalized fair-trade partnerships with 40+ bronze icon casting sthapatis in Swamimalai & Nachiarkoil.",
      icon: "groups",
    },
    {
      year: "2005",
      title: "Tri-Ply & Modern Cookware",
      desc: "Introduced high-grade SS304 food-safe stainless steel and heavy bottom cast iron for contemporary homes.",
      icon: "skillet",
    },
    {
      year: "2018",
      title: "3-Storey Flagship Store",
      desc: "Unveiled Madurai's largest temple-themed experiential metalware destination with dedicated Seervarisai lounge.",
      icon: "domain",
    },
    {
      year: "2024",
      title: "Diaspora Care in 25+ Nations",
      desc: "Delivering sacred temple bells, brass idols, and seer sets to Tamil households across USA, Singapore, UK & Australia.",
      icon: "public",
    },
  ];

  const craftSteps = [
    {
      step: "01",
      title: "Madhuchehishtavidhana",
      sub: "Lost-Wax Sculpting",
      desc: "Hand-carved beeswax models coated in river clay from the Cauvery bed, dried under temple sunlight, and burnt away to leave hollow impressions.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgvFM545YPWnz52Z7w9_iidDsUUzr74qNWRFDGSnd_MKkhGwjgyib61gW5nLkuicu8l1-u4QKgKdxIv1bgjpgw6qz-wmTVg4ithJnbV7H_TpZiQz_sxiOcoXRZZrBcB7hZnv-oWu3NZ_GmkTwvOJc8hddLtRUrAXSvIIiV6_thY1_fm3R1tP1qpcFXXG1dkd306pH6EeQIlpDqQCybwrrHrg0rYJDWXrLP1D3Au-ayUvCZfsmmJYwm9A",
      note: "Chola-era proportion guidelines",
    },
    {
      step: "02",
      title: "Manoeuvred Chiseling",
      sub: "Fine Ornament Engraving",
      desc: "Using micro steel styluses, craftsmen etch temple petaled lotuses, sacred Annapakshi birds, and divine crests with millimeter precision.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3fasxdCu6RykaaDW3A-t1qDOG-T_bdnKlowCRk3HY9Et5xAdil6kcTUHwVK4IXyiPlsvFF6BcGWyAKntmBMruUlARulkoDaT6milOgVDTUBWhyqmvgSVxK-eLZjgWSzL1Fb_5eaQfilSzjmLsw0ueSE3PXTxPMCXE5_XrHSPRFtrgJ0SzKbYhI7vMVMK_lDOJrUz7UaUhfHwhknPa0O8Qzn8G68em2WHRfKF_BZ25niOpXHMPzKeSmw",
      note: "100% Hand-beaten detailing",
    },
    {
      step: "03",
      title: "Eeyam Poosuthal",
      sub: "Traditional Food-Safe Tinning",
      desc: "Internal lining of brass and bronze pots with 99.8% pure silver-grade tin (Velli Eeyam) using charcoal heat and natural sal-ammoniac powder.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ8hwXIOjy6tjIWb_VocSlXvZxxaE5EXiSOWJHE24aojKnI-PImBW3La0G8rEnjJYXCkMbA6bJwXDa5gRwBu_y3ob_tXXMwPOetr3pYZNInuwwIu3YQMLSbvXU6C0e4Aw0rL-26Ytwylz7H7LbXnDXXcWXg_6PIduVQLRmz4rcrHK3__oBORKO4SNCP0LlbkF4QS3zgs_wnzLJPTaQcpGZw700PisF1CeUQMVeqLMG_ZMbQf0GVdQLaA",
      note: "Ayurvedic acid resistance",
    },
    {
      step: "04",
      title: "Suvarna Kanthi",
      sub: "Sacred Buffing & Quality Sanctum",
      desc: "Tamarind and wood-ash polishing reveals the radiant golden mirror lustre that repels premature tarnish while leaving natural tactile warmth.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_a778DqsE1mQFUkwNTQMTa87tU_OmJD9egQx0v-wg3PW8a9ozaggIEFNuzrBCM6YVMV4TIpqWxsVN0MNYnzKL8jDpOcndIdJfZUL3DoCiKCeCD0jj6237mPCbOgB9WuR0U8qKl481KLtczkm1HUE9qJZi9tUBdsp_1suKFZKCkRuK1dckeYrQCr9Ci5PVJU3b8_v6vbF3c8NDq2dZHxSvtSjcyiQC1iWMVzlF0t92inuXEqi02Umi8Q",
      note: "Lifetime heirlooms sealed",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Heritage Chronicle Hero */}
      <section className="relative w-full bg-[#f6f3f2] py-14 px-4 sm:px-6 overflow-hidden border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm text-xs font-bold text-[#48061d]">
              <span className="w-2 h-2 rounded-full bg-[#7b5902]"></span>
              <span>Heritage Chronicle • Est. 1978 Madurai</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-[#534245]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#7b5902]">verified</span>
                <span>Temple Certified Craft</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#7b5902]">handshake</span>
                <span>120+ Artisan Guilds</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block">
                <span className="text-xs uppercase tracking-widest text-[#7b5902] font-bold">
                  Sacred Metallurgical Legacy
                </span>
                <div className="h-0.5 w-12 bg-[#7b5902] mt-1"></div>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#48061d] font-bold leading-tight">
                Carrying the Flame of Tamil Craftsmanship for Over 45 Years
              </h1>
              <p className="text-base text-[#534245] leading-relaxed">
                Founded in 1978 in the sacred shadows of the Madurai Meenakshi Amman Temple, Jayavel Stores has been the trusted sanctuary for generations of families seeking authentic pooja essentials, enduring metalware, and cherished kitchen heirlooms.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={STORE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#48061d] text-white rounded-lg text-sm font-semibold hover:bg-[#651d32] transition-colors shadow-md"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Speak with Our Madurai Connoisseur</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white text-[#48061d] rounded-lg text-sm font-semibold border border-[#e5e2e1] hover:bg-[#eae7e7] transition-colors shadow-sm"
                >
                  <span>Visit Showroom</span>
                  <span className="material-symbols-outlined text-[18px] text-[#7b5902]">storefront</span>
                </Link>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-[#e5e2e1]">
                  <span className="block font-serif text-2xl text-[#48061d] font-bold">45+</span>
                  <span className="text-[11px] text-[#534245] uppercase tracking-wider">Years of Pure Metallurgy</span>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-[#e5e2e1]">
                  <span className="block font-serif text-2xl text-[#7b5902] font-bold">120+</span>
                  <span className="text-[11px] text-[#534245] uppercase tracking-wider">Sthapati Guild Families</span>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-[#e5e2e1]">
                  <span className="block font-serif text-2xl text-[#00402a] font-bold">25+</span>
                  <span className="text-[11px] text-[#534245] uppercase tracking-wider">Countries Shipped</span>
                </div>
              </div>
            </div>

            {/* Right Emblem Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-xl border border-[#e5e2e1] flex flex-col items-center text-center relative">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-lg border-4 border-[#ffdea4] p-1 bg-white">
                  <Image
                    src="/logo/jv-logo.png"
                    alt="Jayavel Stores JV Brand Emblem"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <div className="font-serif text-xl text-[#48061d] font-bold">JAYAVEL STORES</div>
                  <div className="text-xs text-[#7b5902] font-semibold uppercase tracking-widest">
                    Madurai • Tamil Nadu
                  </div>
                  <p className="text-xs text-[#534245] italic pt-2">
                    &ldquo;Every vessel holds a prayer, every lamp kindles an auspicious tomorrow.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="w-full bg-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#eae7e7]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLDuM59aUALA-zVJQ6DfAewNjRVhNcu4PZ3DU4sPkBgZ9kZV4KOD5kFqkSn-PlCbSjb5Be59VepeeqsuknWtdq3PQUk98rqjxkcUEnkEqHj9qICKED__kv8lypHJvLGM13q0mVRADivNeJXCrd3yFBC8MjjwxWUSAxUHxWWGlsbr9zcoE7lThSyj2dpIT3Anh2G7EksWYUxCEcPJ5hkEyfK76-lPJXl9vsrw_HPU1lURLtQJorXn2aCA"
                alt="Founder Sri S. Jayavel"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#48061d]/90 via-[#48061d]/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#ffdea4] font-bold">The Visionary</span>
                <h3 className="font-serif text-xl font-bold">Sri S. Jayavel (1942–2014)</h3>
                <p className="text-xs text-[#eae7e7] mt-0.5">Founder &amp; Master Curator</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#7b5902] font-bold">Origins of Trust</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#48061d] font-bold">
              From East Masi Street to Kitchens Across the World
            </h2>
            <p className="text-sm text-[#1b1c1c] leading-relaxed">
              In the winter of 1978, amidst the chiming bell towers of the Madurai Meenakshi Amman Temple, Sri S. Jayavel rented a modest 180-square-foot doorway along the historic East Masi Street. His inventory was modest: twenty brass Kuthu Vilakkus crafted by family sthapatis in Swamimalai, heavy bronze Urlis, and pure bell-metal cooking pots.
            </p>
            <p className="text-sm text-[#534245] leading-relaxed">
              While commercial markets pivoted to flimsy sheet-press metal and lightweight alloys, Sri Jayavel made a solemn vow: <strong className="text-[#1b1c1c]">&ldquo;Never sell a vessel you wouldn&apos;t place in your mother&apos;s temple room.&rdquo;</strong>
            </p>
            <div className="p-4 bg-[#f6f3f2] rounded-xl border border-[#e5e2e1] space-y-2">
              <div className="flex items-center gap-2 text-[#48061d] font-bold text-sm">
                <span className="material-symbols-outlined text-[#7b5902]">family_restroom</span>
                <span>An Inheritance Passed Across Generations</span>
              </div>
              <p className="text-xs text-[#534245] leading-relaxed">
                Today, grandmothers who bought their wedding Seervarisai at Jayavel Stores in the 1980s arrive holding the hands of their daughters and granddaughters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full bg-[#f6f3f2] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#7b5902] font-bold">Journey of 4 Decades</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#48061d] font-bold">
              Milestones Marked in Pure Gold &amp; Bronze
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {milestones.map((m) => (
              <div key={m.year} className="bg-white p-5 rounded-xl shadow-sm border border-[#e5e2e1] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3">
                    <span className="font-serif text-xl text-[#7b5902] font-bold">{m.year}</span>
                    <span className="w-8 h-8 rounded-full bg-[#ffdea4] flex items-center justify-center text-[#261900]">
                      <span className="material-symbols-outlined text-[18px]">{m.icon}</span>
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#48061d]">{m.title}</h3>
                  <p className="text-xs text-[#534245] mt-2 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Craft Section */}
      <section className="w-full bg-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#7b5902] font-bold">
              Sacred Metallurgical Mastery
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#48061d] font-bold">
              The Art of the Craft: Step by Step
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftSteps.map((c) => (
              <div key={c.step} className="bg-[#fcf9f8] rounded-xl overflow-hidden shadow-sm border border-[#e5e2e1] flex flex-col">
                <div className="relative h-52 overflow-hidden bg-[#eae7e7]">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#48061d] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    Step {c.step}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#48061d]">{c.title}</h3>
                    <p className="text-[11px] text-[#7b5902] font-semibold">{c.sub}</p>
                    <p className="text-xs text-[#534245] mt-2 leading-relaxed">{c.desc}</p>
                  </div>
                  <span className="text-[11px] text-[#867275] pt-2 border-t border-[#e5e2e1]">
                    ✓ {c.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full bg-[#f6f3f2] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-[#e5e2e1]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md bg-[#eae7e7]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIN_ScTnRttrdlxtiZ4z4loYg6KA50kvwGwkxkwpT3CxCflMXlPRrUacsWUyGlYTxUGjt2umN-5AwGr7tdwlxsxFIPRBPMrAGpldX4N_lb2fzahoBtcQRrODW8gj-E59MfZfhwvFIMiY9sBO8R_1iA_UfnZbUl-gRd82NoQpY7nVXi_d_YAxOqvQnJ-C_5AWCjBbGqr8k1yjvd4TAi-AjV39wtyF8yr-2YT3RlZOH5FP9q925yZKQrFQ"
                  alt="Managing Director Shri J. Sivakumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#48061d] font-bold">J. Sivakumar</h3>
                <p className="text-xs text-[#7b5902] font-semibold">Managing Director &amp; Son of the Founder</p>
                <p className="text-xs text-[#534245] mt-0.5">Leading Jayavel Stores Madurai since 2002</p>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#7b5902] font-bold">
                A Message to Our Extended Family
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-[#48061d] font-bold">
                &ldquo;Every morning when we unlock our gates at East Masi Street, we welcome family, not customers.&rdquo;
              </h2>
              <p className="text-sm text-[#534245] leading-relaxed">
                When my father founded this store 47 years ago, he taught us that people don&apos;t buy a brass diya merely to burn oil; they buy it hoping the deity will protect their daughter&apos;s newborn child or illuminate their first home. That responsibility rests on our shoulders every single day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
