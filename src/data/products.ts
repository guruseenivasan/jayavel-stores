export interface Product {
  id: string;
  slug: string;
  title: string;
  tamilTitle: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice: number;
  weight?: string;
  height?: string;
  capacity?: string;
  material: string;
  origin: string;
  rating: number;
  reviewCount: number;
  image: string;
  gallery?: string[];
  description: string;
  tamilDescription?: string;
  features: string[];
  inStock: boolean;
  tag?: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}

export const STORE_CONTACT = {
  phone: "+91 98941 98916",
  phoneRaw: "9894198916",
  landline: "0452-4358916",
  landlineRaw: "04524358916",
  whatsappUrl: "https://wa.me/919894198916",
  email: "contact@jayavelstores.com",
  address: "142-144, East Masi Street, Near Meenakshi Amman Temple East Tower Gate, Madurai, Tamil Nadu 625001",
  timing: "Open All 7 Days: 9:00 AM – 9:30 PM",
};

export const CATEGORIES: Category[] = [
  {
    "name": "Kuthu Vilakku (Traditional Lamps)",
    "slug": "kuthu-vilakku",
    "count": 184
  },
  {
    "name": "Pooja Items & Peedam",
    "slug": "pooja-items",
    "count": 412
  },
  {
    "name": "God Statues (Vigraham)",
    "slug": "pooja-statues",
    "count": 290
  },
  {
    "name": "Kitchen Items (Brass & Cookware)",
    "slug": "kitchen-items",
    "count": 580
  },
  {
    "name": "Silver & Silver-Plated Essentials",
    "slug": "silver-items",
    "count": 210
  },
  {
    "name": "Heritage Wooden Furniture & Mandapams",
    "slug": "furniture",
    "count": 85
  },
  {
    "name": "Traditional Cookware (Vessels)",
    "slug": "traditional-cookware",
    "count": 520
  },
  {
    "name": "Stainless Steel & Triply Cookware",
    "slug": "stainless-steel",
    "count": 630
  },
  {
    "name": "Uruli & Floral Decoratives",
    "slug": "uruli-decoratives",
    "count": 145
  },
  {
    "name": "Home Appliances & Essentials",
    "slug": "appliances",
    "count": 333
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "JV-9756",
    "slug": "krishnar",
    "title": "Krishnar",
    "tamilTitle": "Krishnar",
    "category": "Kuthu Vilakku (Traditional Lamps)",
    "categorySlug": "kuthu-vilakku",
    "price": 1500,
    "originalPrice": 1725,
    "weight": "1 kg",
    "height": "10 inches",
    "material": "Pure Sandcast Bell Brass",
    "origin": "Madurai Traditional Workshop",
    "rating": 5,
    "reviewCount": 1,
    "image": "/uploads/white-1791723093685-whatsapp_image_2026-10-11_at_2.33.26_pm__1_.jpg",
    "gallery": [
      "/uploads/white-1791723093685-whatsapp_image_2026-10-11_at_2.33.26_pm__1_.jpg"
    ],
    "description": "krishnar silai",
    "tamilDescription": "krishnar silai",
    "features": [
      "Virgin Grade Metal Alloy",
      "Handcrafted by Madurai Master Artisans",
      "Lifetime Durability Guarantee"
    ],
    "inStock": true,
    "tag": "New Arrival"
  },
  {
    "id": "JV-2728",
    "slug": "natarajar-silai",
    "title": "natarajar silai",
    "tamilTitle": "natarajar silai",
    "category": "God Statues (Vigraham)",
    "categorySlug": "pooja-statues",
    "price": 7998,
    "originalPrice": 9198,
    "material": "Pure Sandcast Bell Brass",
    "origin": "Madurai Traditional Workshop",
    "rating": 5,
    "reviewCount": 1,
    "image": "/uploads/white-1791709654653-whatsapp_image_2026-10-11_at_2.33.27_pm.jpg",
    "gallery": [
      "/uploads/white-1791709654653-whatsapp_image_2026-10-11_at_2.33.27_pm.jpg"
    ],
    "description": "natarajar",
    "tamilDescription": "natarajar",
    "features": [
      "Virgin Grade Metal Alloy",
      "Handcrafted by Madurai Master Artisans",
      "Lifetime Durability Guarantee"
    ],
    "inStock": true,
    "tag": "New Arrival"
  },
  {
    "id": "JV-8235",
    "slug": "ganesha-statue",
    "title": "Ganesha statue",
    "tamilTitle": "Ganesha statue",
    "category": "God Statues (Vigraham)",
    "categorySlug": "pooja-statues",
    "price": 3500,
    "originalPrice": 4025,
    "material": "Pure Sandcast Bell Brass",
    "origin": "Madurai Traditional Workshop",
    "rating": 5,
    "reviewCount": 1,
    "image": "/statues/ganesha_statue.jpg",
    "gallery": [
      "/statues/ganesha_statue.jpg"
    ],
    "description": "The lord ganesha statue available in all types of sizes and weights if you want a more details about the product click the below enquires button our experts will contact you",
    "tamilDescription": "The lord ganesha statue available in all types of sizes and weights if you want a more details about the product click the below enquires button our experts will contact you",
    "features": [
      "Virgin Grade Metal Alloy",
      "Handcrafted by Madurai Master Artisans",
      "Lifetime Durability Guarantee"
    ],
    "inStock": true,
    "tag": "New Arrival"
  },
  {
    "id": "JV-1682",
    "slug": "pooja-villaku",
    "title": "Pooja villaku",
    "tamilTitle": "Pooja villaku",
    "category": "Pooja Items & Peedam",
    "categorySlug": "pooja-items",
    "price": 1200,
    "originalPrice": 1380,
    "material": "Pure Sandcast Bell Brass",
    "origin": "Madurai Traditional Workshop",
    "rating": 5,
    "reviewCount": 1,
    "image": "/products/kuthu-vilakku.jpg",
    "gallery": [
      "/products/kuthu-vilakku.jpg"
    ],
    "description": "Pooja  peedams kuthu villaku",
    "tamilDescription": "Pooja  peedams kuthu villaku",
    "features": [
      "Virgin Grade Metal Alloy",
      "Handcrafted by Madurai Master Artisans",
      "Lifetime Durability Guarantee"
    ],
    "inStock": true,
    "tag": "New Arrival"
  },
  {
    "id": "JV-1554",
    "slug": "murugan-silai",
    "title": "Murugan silai",
    "tamilTitle": "Murugan silai",
    "category": "God Statues (Vigraham)",
    "categorySlug": "pooja-statues",
    "price": 8000,
    "originalPrice": 9200,
    "material": "Pure Sandcast Bell Brass",
    "origin": "Madurai Traditional Workshop",
    "rating": 5,
    "reviewCount": 1,
    "image": "/statues/murugan_statue.jpg",
    "gallery": [
      "/statues/murugan_statue.jpg"
    ],
    "description": "Murugan silai avilable",
    "tamilDescription": "Murugan silai avilable",
    "features": [
      "Virgin Grade Metal Alloy",
      "Handcrafted by Madurai Master Artisans",
      "Lifetime Durability Guarantee"
    ],
    "inStock": true,
    "tag": "New Arrival"
  },
  {
    "id": "JV-6120",
    "slug": "brass-lamps",
    "title": "Brass Lamps",
    "tamilTitle": "பித்தளை விளக்குகள்",
    "category": "Kuthu Vilakku (Traditional Lamps)",
    "categorySlug": "kuthu-vilakku",
    "price": 400,
    "originalPrice": 1,
    "material": "Pure Sandcast Bell Brass",
    "origin": "Madurai Traditional Workshop",
    "rating": 5,
    "reviewCount": 1,
    "image": "/products/kuthu-vilakku.jpg",
    "gallery": [
      "/products/kuthu-vilakku.jpg"
    ],
    "description": "Annam Vilakku, Kamakshi Amman Deepam, Hanging Peacock Diyas & Kerala Uruli Vilakku in pure virgin brass.",
    "tamilDescription": "Annam Vilakku, Kamakshi Amman Deepam, Hanging Peacock Diyas & Kerala Uruli Vilakku in pure virgin brass.",
    "features": [
      "Virgin Grade Metal Alloy",
      "Handcrafted by Madurai Master Artisans",
      "Lifetime Durability Guarantee"
    ],
    "inStock": true,
    "tag": "New Arrival",
    "weight": "",
    "height": ""
  },
  {
    "id": "JV-1042",
    "slug": "classic-annam-kuthu-vilakku",
    "title": "Classic Annam Kuthu Vilakku (Pair) - 24 Inches",
    "tamilTitle": "பாரம்பரிய அன்னம் குத்து விளக்கு (ஜோடி)",
    "category": "Kuthu Vilakku (Traditional Lamps)",
    "categorySlug": "kuthu-vilakku",
    "price": 7850,
    "originalPrice": 9200,
    "weight": "5.2 kg Pair",
    "height": "24 Inches / 2.0 ft",
    "material": "Pure Sandcast Brass (Cu-Zn 60:40 alloy)",
    "origin": "Nachiarkoil Handcrafted (GI Tagged)",
    "rating": 4.9,
    "reviewCount": 310,
    "tag": "Madurai Bestseller",
    "image": "/products/kuthu-vilakku.jpg",
    "gallery": [
      "/products/kuthu-vilakku.jpg"
    ],
    "description": "Handcrafted virgin bell-grade brass standing oil lamps cast with traditional lost-wax methodology in Nachiarkoil. Crowned with an intricately hand-chiseled mythological Annam swan finial.",
    "tamilDescription": "நச்சியார்கோவில் கைவினைப் பித்தளையில் வார்த்தெடுக்கப்பட்ட புனித அன்னம் குத்து விளக்கு ஜோடி. 5 முக திரிகள் தாங்கும் வசதியுடன் தலைமுறை தலைமுறையாக நிலைத்திருக்கும் தரம்.",
    "features": [
      "Virgin Bell Brass: Cu-Zn 60:40 alloy ratio",
      "5-Tier Threaded Modular Assembly: Twists apart into 5 pieces for easy cleaning",
      "5 Deep Wick Notches: Retains cotton wicks steadily",
      "Hand-Chiseled Annam Finial: Auspicious swan symbol of spiritual discernment",
      "Lifetime Polish Assistance & Temple Tested"
    ],
    "inStock": true
  },
  {
    "id": "JV-2015",
    "slug": "antique-lord-murugan-vel",
    "title": "Antique Lord Murugan with Vel Idol - 12 Inches",
    "tamilTitle": "சுவாமிமலை வெண்கல முருகன் சிலை",
    "category": "God Statues (Vigraham)",
    "categorySlug": "pooja-statues",
    "price": 14500,
    "originalPrice": 16800,
    "weight": "3.4 kg",
    "height": "12 Inches",
    "material": "Panchaloha Temple Bronze",
    "origin": "Swamimalai Temple Bronze Lost-Wax",
    "rating": 5,
    "reviewCount": 210,
    "tag": "Temple Sanctum Grade",
    "image": "/statues/murugan_statue.jpg",
    "description": "Exquisitely detailed Swamimalai lost-wax bronze idol of Lord Murugan standing with the divine sacred Vel spear, accompanied by the peacock Mayil vahana. Consecration ready.",
    "features": [
      "Authentic Swamimalai Lost-Wax casting",
      "Panchaloha alloy composition according to Shilpa Shastras",
      "Hand-chiseled ornaments and crown",
      "Ideal for daily Abhishekam and temple pooja"
    ],
    "inStock": true,
    "gallery": [
      "/statues/murugan_statue.jpg"
    ]
  },
  {
    "id": "JV-5034",
    "slug": "traditional-eeya-chombu",
    "title": "Pure Eeya Chombu (Velli Eeyam Rasam Vessel)",
    "tamilTitle": "பாரம்பரிய ஈயச் சொம்பு",
    "category": "Traditional Cookware (Vessels)",
    "categorySlug": "traditional-cookware",
    "price": 3600,
    "originalPrice": 4100,
    "weight": "850 g",
    "capacity": "1.2 Litres",
    "material": "100% Pure Food-Grade Tin Alloy (Velli Eeyam)",
    "origin": "Kumbakonam Traditional Workshop",
    "rating": 4.9,
    "reviewCount": 420,
    "tag": "Heirloom Rasam Secret",
    "image": "/products/eeya-chombu.jpg",
    "description": "Authentic Kumbakonam pure tin alloy vessel for simmering aromatic South Indian rasam. Infuses therapeutic benefits and distinctive aroma that cannot be replicated in stainless steel.",
    "features": [
      "100% Certified food-safe tin alloy",
      "Ayurvedic health qualities & digestion support",
      "Retains heat and aroma gently without scorching",
      "Hand-hammered traditional shape"
    ],
    "inStock": true,
    "gallery": [
      "/products/eeya-chombu.jpg"
    ]
  },
  {
    "id": "JV-9087",
    "slug": "peacock-rim-brass-uruli",
    "title": "Handcrafted Uruli with Peacocks & Diya Holders - 16 Inches",
    "tamilTitle": "மயில் உருளி • Lotus Floating Brass Decor Bowl",
    "category": "Uruli & Floral Decoratives",
    "categorySlug": "uruli-decoratives",
    "price": 5400,
    "originalPrice": 6200,
    "weight": "4.1 kg",
    "height": "16 Inches Dia",
    "material": "Cast Bell Metal Brass",
    "origin": "Madurai Workshop",
    "rating": 4.8,
    "reviewCount": 260,
    "tag": "Foyer Vastu Decor",
    "image": "/products/peacock-uruli.jpg",
    "description": "Broad handcrafted traditional brass Uruli bowl featuring twin carved peacocks on rim and integrated floating diya notches. Perfect for welcoming positive energy at entryways with floating jasmine and rose petals.",
    "features": [
      "Heavy virgin brass with golden mirror buff",
      "Twin ornamental peacock handles",
      "Ideal for Vastu entryway placement with fresh flowers & floating diyas",
      "Water leak-tested and tarnish-resistant finish"
    ],
    "inStock": true,
    "gallery": [
      "/products/peacock-uruli.jpg"
    ]
  },
  {
    "id": "JV-3081",
    "slug": "traditional-vengala-paanai",
    "title": "Traditional Vengala Paanai (Bronze Sweet Pongal Pot)",
    "tamilTitle": "கைவினை வெண்கல பானை",
    "category": "Traditional Cookware (Vessels)",
    "categorySlug": "traditional-cookware",
    "price": 4200,
    "originalPrice": 4900,
    "weight": "2.8 kg",
    "capacity": "3.5 Litres",
    "material": "Hand-Beaten Bell Bronze (Kansa Metal)",
    "origin": "Madurai & Kumbakonam Guilds",
    "rating": 4.9,
    "reviewCount": 340,
    "tag": "Traditional Pongal",
    "image": "/products/vengala-paanai.jpg",
    "description": "Heavy South Indian hand-hammered bronze Vengala Paanai for boiling traditional sweet Sakkarai Pongal and temple prasadams. Distributes heat evenly without burning.",
    "features": [
      "Pure Kansa bronze composition (78% Copper, 22% Tin)",
      "Naturally non-toxic and acid-safe for sweet milk cooking",
      "Retains natural nutrients and rich caramel flavor",
      "Flared lip designed for joyful festive overflowing"
    ],
    "inStock": true,
    "gallery": [
      "/products/vengala-paanai.jpg"
    ]
  },
  {
    "id": "JV-4092",
    "slug": "pure-copper-water-pot",
    "title": "Pure Copper Water Pot / Ganga Sompu with Brass Faucet",
    "tamilTitle": "செம்பு தண்ணீர் பானை",
    "category": "Pure Copper Essentials",
    "categorySlug": "copper-essentials",
    "price": 2950,
    "originalPrice": 3500,
    "capacity": "8 Litres",
    "material": "Pure Copper 99%",
    "origin": "Hand-Hammered Madurai",
    "rating": 4.8,
    "reviewCount": 195,
    "tag": "Ayurvedic Health",
    "image": "/products/pure-copper-water-pot-white.jpg",
    "description": "99% pure hammered copper drinking water dispenser pot equipped with a solid brass drip-free faucet. Naturally purifies water overnight following Tamra Jal Ayurvedic traditions.",
    "features": [
      "99.4% Certified pure virgin copper",
      "Leak-proof heavy brass tap with washers",
      "Tamra Jal health benefits for digestion & immunity",
      "Decorative floral hand-embossed surface"
    ],
    "inStock": true,
    "gallery": [
      "/products/pure-copper-water-pot-white.jpg"
    ]
  },
  {
    "id": "JV-6019",
    "slug": "meenakshi-amman-brass-idol",
    "title": "Meenakshi Amman Brass Idol with Parrot - 10 Inches",
    "tamilTitle": "மதுரை மீனாட்சி அம்மன் பித்தளை விக்கிரகம்",
    "category": "God Statues (Vigraham)",
    "categorySlug": "pooja-statues",
    "price": 8900,
    "originalPrice": 10500,
    "weight": "2.9 kg",
    "height": "10 Inches",
    "material": "Temple Replica Solid Brass",
    "origin": "Madurai Meenakshi Workshop",
    "rating": 5,
    "reviewCount": 280,
    "tag": "Madurai Flagship Item",
    "image": "/products/meenakshi-amman.jpg",
    "description": "Gracefully sculpted brass statue of Goddess Madurai Meenakshi Amman holding a sacred lotus with the royal green parrot resting on her shoulder. Faithful replica of the Madurai Kovil sanctum form.",
    "features": [
      "Madurai Sthapati authenticated iconography",
      "Solid core brass with detailed crown and silks",
      "Blessed with sacred Meenakshi Temple kumkum & vibhuti before dispatch",
      "Hand-finished radiant luster"
    ],
    "inStock": true,
    "gallery": [
      "/products/meenakshi-amman.jpg"
    ]
  },
  {
    "id": "JV-7043",
    "slug": "triply-stainless-steel-biryani-handi",
    "title": "Heavy Duty Triply Stainless Steel Biryani Handi - 7 Litres",
    "tamilTitle": "சேலம் ஸ்டீல் பிரியாணி பாத்திரம்",
    "category": "Stainless Steel & Triply Cookware",
    "categorySlug": "stainless-steel",
    "price": 2450,
    "originalPrice": 2990,
    "capacity": "7 Litres",
    "material": "Food-Grade Salem SS 304 Tri-Ply (2.5mm)",
    "origin": "Salem Heavy Tri-ply Steel",
    "rating": 4.8,
    "reviewCount": 155,
    "tag": "Salem SS 304",
    "image": "/products/triply-stainless-steel-biryani-handi-white.jpg",
    "description": "Heavy-gauge triply stainless steel handi with sandwich aluminum core for scorching-free Dum biryani, curries, and feast cooking. Compatible with induction and gas.",
    "features": [
      "Food-safe SS 304 inner surface",
      "Aluminum middle core for 360-degree rapid heat spread",
      "Magnetic stainless steel base for all cooktops",
      "10-Year Manufacturer Warranty"
    ],
    "inStock": true,
    "gallery": [
      "/products/triply-stainless-steel-biryani-handi-white.jpg"
    ]
  },
  {
    "id": "JV-8012",
    "slug": "classic-brass-filter-coffee",
    "title": "Classic Brass Filter Coffee Drip Brewer - Size 3",
    "tamilTitle": "கும்பகோணம் பித்தளை ஃபில்டர் காபி மேக்கர்",
    "category": "Home Appliances & Essentials",
    "categorySlug": "appliances",
    "price": 890,
    "originalPrice": 1150,
    "capacity": "4 Cups / Size 3",
    "material": "Pure Heavy Gauge Brass",
    "origin": "Kumbakonam Workshop",
    "rating": 4.9,
    "reviewCount": 510,
    "tag": "Degree Kaapi Essential",
    "image": "/products/classic-brass-filter-coffee-white.jpg",
    "description": "Traditional Kumbakonam Degree Coffee brass drip maker with micro-perforated filter disc and umbrella presser. Brews thick, aromatic South Indian decoction effortlessly.",
    "features": [
      "Micro-perforated precision filter holes",
      "Heavy brass retains decoction warmth",
      "Lead-free food-safe alloy",
      "Includes presser disk & secure top lid"
    ],
    "inStock": true,
    "gallery": [
      "/products/classic-brass-filter-coffee-white.jpg"
    ]
  },
  {
    "id": "JV-9101",
    "slug": "traditional-brass-masala-dabba",
    "title": "Handmade Heavy Brass 7-Cup Masala Dabba / Anjalai Petti",
    "tamilTitle": "பாரம்பரிய பித்தளை அஞ்சறைப் பெட்டி (7 கிண்ணங்கள்)",
    "category": "Kitchen Items (Brass & Cookware)",
    "categorySlug": "kitchen-items",
    "price": 1850,
    "originalPrice": 2200,
    "weight": "1.1 kg",
    "material": "Pure Heavy Sheet Brass with Hand-Embossed Lid",
    "origin": "Madurai Metal Guild",
    "rating": 4.9,
    "reviewCount": 380,
    "tag": "Kitchen Heirloom",
    "image": "/products/traditional-brass-masala-dabba-white.jpg",
    "description": "Traditional South Indian 7-compartment Anjalai Petti handcrafted in pure heavy brass. Includes 7 individual brass spice cups, a brass spoon, and an airtight engraved lid for preserving spices naturally.",
    "features": [
      "Heavy virgin brass: naturally anti-microbial for spice preservation",
      "7 removable spice cups + 1 mini brass measuring spoon",
      "Traditional floral engraved dome lid",
      "Passed down as an auspicious bridal kitchen heirloom"
    ],
    "inStock": true,
    "gallery": [
      "/products/traditional-brass-masala-dabba-white.jpg"
    ]
  },
  {
    "id": "JV-9102",
    "slug": "silver-plated-thali-set",
    "title": "Pure Silver-Plated Heritage Dinner & Pooja Thali Set (6-Piece)",
    "tamilTitle": "பாரம்பரிய வெள்ளி பூச்சு தட்டு & கிண்ணம் விருந்து செட்",
    "category": "Silver & Silver-Plated Essentials",
    "categorySlug": "silver-items",
    "price": 3450,
    "originalPrice": 4200,
    "weight": "1.4 kg Set",
    "material": "EPNS Heavy Brass Core with 999 Pure Silver Micron Plating",
    "origin": "Kumbakonam Master Silversmiths",
    "rating": 5,
    "reviewCount": 290,
    "tag": "Wedding Seervarisai",
    "image": "/products/silver-plated-thali-set-white.jpg",
    "description": "Opulent 6-piece silver-plated feast and pooja set comprising an embossed dining thali plate, 2 katoris, sweet bowl, tumbler, and spoon. Finished in lustrous pure silver plating that does not tarnish easily.",
    "features": [
      "Heavy brass base with certified 999 silver micron plating",
      "Includes 12-inch Thali, 2 Curd/Curry Bowls, Sweet Dish, Tumbler & Spoon",
      "Food-safe lacquered coating protects shine",
      "Comes in royal red velvet presentation gift box"
    ],
    "inStock": true,
    "gallery": [
      "/products/silver-plated-thali-set-white.jpg"
    ]
  },
  {
    "id": "JV-9103",
    "slug": "pure-silver-pooja-diya-pair",
    "title": "Hallmarked 92.5 Pure Silver Pooja Diya Lamps (Pair)",
    "tamilTitle": "925 தூய வெள்ளி பூஜை விளக்கு ஜோடி",
    "category": "Silver & Silver-Plated Essentials",
    "categorySlug": "silver-items",
    "price": 6800,
    "originalPrice": 7900,
    "weight": "120 g Pure Silver",
    "material": "92.5% Sterling Silver (Hallmarked)",
    "origin": "Madurai Temple Goldsmiths",
    "rating": 4.9,
    "reviewCount": 175,
    "tag": "925 Hallmarked Silver",
    "image": "/products/pure-silver-pooja-diya-pair-white.jpg",
    "description": "Pair of consecrated solid sterling silver Deepak lamps for household deity alters and festive Lakshmi Kubera pooja. Cast in traditional South Indian floral base with sturdy wick holders.",
    "features": [
      "92.5% Certified Hallmarked Sterling Silver",
      "Solid cast stable base with deep ghee well",
      "Ideal for Friday poojas, Diwali, and Housewarming grahapravesam",
      "Delivered with Silver Purity Certificate"
    ],
    "inStock": true,
    "gallery": [
      "/products/pure-silver-pooja-diya-pair-white.jpg"
    ]
  },
  {
    "id": "JV-9104",
    "slug": "brass-davarah-tumbler-set",
    "title": "Traditional Heavy Brass Kumbakonam Coffee Davarah & Tumbler (Set of 2)",
    "tamilTitle": "பாரம்பரிய பித்தளை டவரா & டம்ளர் (2 செட்)",
    "category": "Kitchen Items (Brass & Cookware)",
    "categorySlug": "kitchen-items",
    "price": 980,
    "originalPrice": 1250,
    "capacity": "150 ml per Tumbler",
    "weight": "480 g (Set of 2)",
    "material": "Pure Food-Grade Heavy Brass (Lead-Free)",
    "origin": "Kumbakonam Artisans",
    "rating": 5,
    "reviewCount": 640,
    "tag": "Filter Kaapi Ritual",
    "image": "/products/brass-davarah-tumbler-set-white.jpg",
    "description": "Authentic heavy gauge brass South Indian Davarah and Tumbler set for enjoying frothy Madras filter coffee at home. Perfectly aerates and preserves temperature.",
    "features": [
      "Authentic Kumbakonam flared lip design for smooth pouring and froth",
      "Food-grade lead-free virgin brass with mirror polish",
      "Includes 2 Davarahs and 2 Tumblers",
      "Dishwasher safe with tamarind/pitambari wash"
    ],
    "inStock": true,
    "gallery": [
      "/products/brass-davarah-tumbler-set-white.jpg"
    ]
  },
  {
    "id": "JV-8101",
    "slug": "chettinad-teakwood-oonjal-swing",
    "title": "Authentic Chettinad Teakwood Oonjal (Swing) with Solid Brass Chains",
    "tamilTitle": "செட்டிநாடு தேக்கு மர ஊஞ்சல் (பாரம்பரிய பித்தளை சங்கிலியுடன்)",
    "category": "Heritage Wooden Furniture & Mandapams",
    "categorySlug": "furniture",
    "price": 38500,
    "originalPrice": 44000,
    "weight": "42 kg",
    "material": "Seasoned First-Grade Burma Teakwood & Solid Cast Brass Links",
    "origin": "Karaikudi & Madurai Woodcraft Guild",
    "rating": 5,
    "reviewCount": 94,
    "tag": "Heritage Masterpiece",
    "image": "/products/chettinad-teakwood-oonjal-swing-white.jpg",
    "description": "Handcrafted heirloom Chettinad porch swing made from 100% seasoned solid teakwood with intricate Yali and peacock carvings. Suspended with heavy, hand-cast ornate brass link chains and brass ceiling hooks.",
    "features": [
      "Solid First-Cut Seasoned Teakwood: Termite-proof, natural honey-wax polish",
      "Heavy Interlocking Brass Chains: Tested to support up to 350 kg load",
      "Hand-Carved Backrest & Armrest: Traditional Yali mythological motifs",
      "Includes complete brass hanging hardware kit & ceiling bolts"
    ],
    "inStock": true,
    "gallery": [
      "/products/chettinad-teakwood-oonjal-swing-white.jpg"
    ]
  },
  {
    "id": "JV-8102",
    "slug": "teakwood-pooja-mandapam-shrine",
    "title": "Madurai Gopuram Carved Teakwood Pooja Mandapam with Brass Bells",
    "tamilTitle": "மதுரை கோபுர வேலைப்பாடு தேக்கு மர பூஜை மண்டபம்",
    "category": "Heritage Wooden Furniture & Mandapams",
    "categorySlug": "furniture",
    "price": 29500,
    "originalPrice": 34000,
    "height": "4.5 ft / 54 Inches",
    "weight": "28 kg",
    "material": "Solid Teakwood with Brass Bells & Inlay Trims",
    "origin": "Madurai Temple Carpenter Guild",
    "rating": 4.9,
    "reviewCount": 120,
    "tag": "Sanctum Mandapam",
    "image": "/products/teakwood-pooja-mandapam-shrine-white.jpg",
    "description": "Temple-inspired home altar mandapam featuring multi-tier South Indian gopuram crown, twin carved pillars, brass hanging bells, pull-out prasadam drawer, and Diya extension tray.",
    "features": [
      "Carved Dravidian Gopuram shikhara with brass kalasam",
      "8 Real ringing brass bells embedded in door panels and canopy",
      "Pull-out brass-lined extension tray for deepams and camphor",
      "Spacious storage drawer with brass antique pulls"
    ],
    "inStock": true,
    "gallery": [
      "/products/teakwood-pooja-mandapam-shrine-white.jpg"
    ]
  },
  {
    "id": "JV-8103",
    "slug": "brass-studded-teakwood-diwan",
    "title": "Royal Madurai Brass-Studded Teakwood Diwan with Fluted Legs",
    "tamilTitle": "பித்தளை வேலைப்பாடு கொண்ட தேக்கு மர திவான்",
    "category": "Heritage Wooden Furniture & Mandapams",
    "categorySlug": "furniture",
    "price": 24800,
    "originalPrice": 28500,
    "weight": "35 kg",
    "material": "Kiln-Dried Solid Teakwood & Cast Brass Corner Plates",
    "origin": "Madurai Homestead Carpentry",
    "rating": 4.8,
    "reviewCount": 65,
    "tag": "Royal Living",
    "image": "/products/brass-studded-teakwood-diwan-white.jpg",
    "description": "Grand vintage living room daybed handcrafted from mature teak timber, featuring fluted lathe-turned legs, decorative brass medallions, and brass edge reinforcements.",
    "features": [
      "100% Solid Heartwood Teak: Resilient against sagging and weather changes",
      "Decorative antique brass stud accents along side rails",
      "Classic turned baluster legs with heavy load capacity",
      "Includes plush bolster & mattress support base slats"
    ],
    "inStock": true,
    "gallery": [
      "/products/brass-studded-teakwood-diwan-white.jpg"
    ]
  },
  {
    "id": "JV-8104",
    "slug": "carved-teakwood-peedam-uruli-stand",
    "title": "Handcrafted Teakwood Pooja Peedam & Uruli Elevation Stand - 14 Inches",
    "tamilTitle": "தேக்கு மர பூஜை பீடம் / உருளி ஸ்டாண்டு",
    "category": "Heritage Wooden Furniture & Mandapams",
    "categorySlug": "furniture",
    "price": 2200,
    "originalPrice": 2650,
    "weight": "3.2 kg",
    "material": "Solid Single-Block Seasoned Teak",
    "origin": "Madurai Woodcraft",
    "rating": 4.9,
    "reviewCount": 180,
    "tag": "Pooja Essential",
    "image": "/products/carved-teakwood-peedam-uruli-stand-white.jpg",
    "description": "Stout carved solid teak pedestal stool designed for elevating large Brass Urulis, deity vigrahams, or Kuthu Vilakku off the floor with elegance.",
    "features": [
      "Carved lotus petal base with non-slip rubberized foot pads",
      "Water-resistant herbal wax polish protects against flower moisture",
      "Supports heavy brass vessels up to 50 kg safely",
      "Compact 14-inch diameter top platform"
    ],
    "inStock": true,
    "gallery": [
      "/products/carved-teakwood-peedam-uruli-stand-white.jpg"
    ]
  },
  {
    "id": "JV-8105",
    "slug": "teakwood-king-cot-bed",
    "title": "Solid Teakwood King Size Cot Bed with Floral Headboard",
    "tamilTitle": "தேக்கு மர கிங் சைஸ் கட்டில் (பூ வேலைப்பாடு)",
    "category": "Heritage Wooden Furniture & Mandapams",
    "categorySlug": "furniture",
    "price": 34500,
    "originalPrice": 39900,
    "weight": "65 kg",
    "material": "100% Solid Seasoned Teakwood with Brass Inlay Accents",
    "origin": "Madurai Master Woodcraft",
    "rating": 4.9,
    "reviewCount": 88,
    "tag": "Bridal Seervarisai Essential",
    "image": "/products/teakwood-king-cot-bed-white.jpg",
    "description": "Grand King Size 72x78 inch master bedroom cot handcrafted from dense heartwood teak. Features an intricately chiseled floral arch headboard, solid base support planks, and corner brass medallions.",
    "features": [
      "King Size: 72 x 78 Inches (Fits standard King mattress)",
      "Solid 1.5-inch thick teak planks for zero creaking or sagging",
      "Hand-carved floral crown headboard and matching footboard",
      "Pre-treated against termites with natural walnut polish"
    ],
    "inStock": true,
    "gallery": [
      "/products/teakwood-king-cot-bed-white.jpg"
    ]
  },
  {
    "id": "JV-8106",
    "slug": "chettinad-carved-teakwood-sofa-set",
    "title": "Chettinad Carved Teakwood (3+1+1) Luxury Sofa Set",
    "tamilTitle": "செட்டிநாடு தேக்கு மர (3+1+1) சோபா செட்",
    "category": "Heritage Wooden Furniture & Mandapams",
    "categorySlug": "furniture",
    "price": 46500,
    "originalPrice": 54000,
    "weight": "75 kg Complete Set",
    "material": "Heavy Burma Teakwood with High-Density Washable Upholstery",
    "origin": "Karaikudi Master Guild",
    "rating": 5,
    "reviewCount": 112,
    "tag": "Living Room Royalty",
    "image": "/products/chettinad-carved-teakwood-sofa-set-white.jpg",
    "description": "Majestic 5-seater living room sofa set (3-seater bench + two single armchairs) in classic Chettinad palatial style. Adorned with roll-top lion armrests, fluted legs, and comfortable washable cushions.",
    "features": [
      "Complete 5-Seater Ensemble: 1 Three-Seater + 2 Single Club Chairs",
      "Hand-carved lion head armrests and turned spindle backrests",
      "Includes high-density 32-density foam cushions with zipper covers",
      "Reinforced mortise & tenon joinery built for a lifetime"
    ],
    "inStock": true,
    "gallery": [
      "/products/chettinad-carved-teakwood-sofa-set-white.jpg"
    ]
  },
  {
    "id": "JV-8107",
    "slug": "solid-teakwood-3-door-bero",
    "title": "Solid Teakwood 3-Door Heritage Wardrobe (Bero) with Locker & Mirror",
    "tamilTitle": "பாரம்பரிய தேக்கு மர 3-கதவு பீரோ (கண்ணாடி & லாக்கர்)",
    "category": "Heritage Wooden Furniture & Mandapams",
    "categorySlug": "furniture",
    "price": 42000,
    "originalPrice": 48500,
    "height": "6.5 ft / 78 Inches",
    "weight": "85 kg",
    "material": "Solid Seasoned Teakwood with Brass Godrej Style Locks",
    "origin": "Madurai Furniture Workshop",
    "rating": 4.9,
    "reviewCount": 76,
    "tag": "Wedding Wardrobe",
    "image": "/products/solid-teakwood-3-door-bero-white.jpg",
    "description": "Generous 3-door wooden Bero designed for family storage and bridal seer gifting. Features a full-length dressing mirror, concealed jewelry locker with double-key security, saree hanging rod, and deep shelving.",
    "features": [
      "Three-door spacious configuration with Belgian glass dressing mirror",
      "Internal secret drawer & dual-keyed safe locker for gold/valuables",
      "Heavy brass hinges, ornate brass key escutcheons & handles",
      "Natural teak grain with glossy protective lacquer"
    ],
    "inStock": true,
    "gallery": [
      "/products/solid-teakwood-3-door-bero-white.jpg"
    ]
  },
  {
    "id": "JV-8108",
    "slug": "teakwood-steel-gas-stove-table-stand",
    "title": "Heavy Kitchen Gas Stove Table Stand with Cylinder Bay & Shelves",
    "tamilTitle": "கேஸ் ஸ்டவ் அடுப்பு மேடை & பாத்திர ஸ்டாண்டு (சிலிண்டர் அறை)",
    "category": "Heritage Wooden Furniture & Mandapams",
    "categorySlug": "furniture",
    "price": 9800,
    "originalPrice": 11900,
    "height": "34 Inches x 48 Inches Wide",
    "weight": "24 kg",
    "material": "Treated Waterproof Teakwood Frame & SS 304 Stainless Steel Top",
    "origin": "Salem & Madurai Kitchen Craft",
    "rating": 4.8,
    "reviewCount": 145,
    "tag": "Kitchen Utility Essential",
    "image": "/products/teakwood-steel-gas-stove-table-stand-white.jpg",
    "description": "Ergonomic kitchen counter stand engineered for South Indian cooking. Features a heavy heat-resistant stainless steel top platform for 2/3-burner gas stoves, lower shelves for spice jars and heavy vessels, and an enclosed gas cylinder bay.",
    "features": [
      "Food-grade heat-resistant top platform for 2 or 3-burner gas stove",
      "Dedicated well-ventilated bottom bay for LPG cylinder",
      "2 Tier wire racks for storing daily cooking vessels and spice dabbas",
      "Water-resistant leveling bushes prevent floor scratches"
    ],
    "inStock": true,
    "gallery": [
      "/products/teakwood-steel-gas-stove-table-stand-white.jpg"
    ]
  },
  {
    "id": "JV-8109",
    "slug": "salem-heavy-steel-wedding-bero",
    "title": "Salem Premium Heavy-Gauge Steel Wedding Bero (Double Door with Safe)",
    "tamilTitle": "சேலம் ஹெவி கேஜ் ஸ்டீல் கல்யாண பீரோ (டபுள் டோர்)",
    "category": "Heritage Wooden Furniture & Mandapams",
    "categorySlug": "furniture",
    "price": 16500,
    "originalPrice": 19500,
    "height": "6.5 ft / 78 Inches",
    "weight": "62 kg",
    "material": "Cold-Rolled Salem Heavy Sheet Steel (Powder-Coated)",
    "origin": "Salem Steel Fabrication",
    "rating": 4.9,
    "reviewCount": 230,
    "tag": "Salem Heavy Steel",
    "image": "/products/salem-heavy-steel-wedding-bero-white.jpg",
    "description": "Traditional Tamil bridal seervarisai steel wardrobe manufactured from rust-resistant Salem sheet metal. Features multi-coat baked enamel paint, inner safe locker, bangle tray, and 5-lever brass lock.",
    "features": [
      "Heavy 18-gauge Salem steel sheet for lifelong anti-theft rigidity",
      "Rust-proof phosphated multi-bake powder coating in royal maroon finish",
      "Dual secret lockers & separate coin/jewelry partition",
      "Godrej pattern 5-lever ultra key security mechanism"
    ],
    "inStock": true,
    "gallery": [
      "/products/salem-heavy-steel-wedding-bero-white.jpg"
    ]
  },
  {
    "id": "JV-2016",
    "slug": "consecrated-brass-ganapathi-idol",
    "title": "Temple Handcrafted Brass Ganapathi (Vinayagar) Idol - 8 Inches",
    "tamilTitle": "அருள்மிகு பித்தளை விநாயகர் / கணபதி சிலை (8 இன்ச்)",
    "category": "God Statues (Vigraham)",
    "categorySlug": "pooja-statues",
    "price": 4850,
    "originalPrice": 5800,
    "weight": "3.2 kg",
    "height": "8 Inches / 20 cm",
    "material": "Authentic Swamimalai Virgin Brass (மதுரை & சுவாமிமலை பித்தளை)",
    "origin": "Swamimalai Artisan Guild",
    "rating": 5,
    "reviewCount": 142,
    "tag": "Vastu Auspicious Bestseller",
    "image": "/statues/ganesha_statue.jpg",
    "description": "Exquisitely hand-cast solid brass Lord Ganesha idol seated in Padmasana on a sculpted blooming lotus pedestal. Features modak in left hand, noose and goad in upper hands, and abhaya mudra for removing all obstacles. Cast using traditional Madurai lost-wax technique.",
    "tamilDescription": "மதுரை & சுவாமிமலை பாரம்பரிய மெழுகு வார்ப்பு முறையில் வார்த்தெடுக்கப்பட்ட அருள்மிகு கணபதி சிலை. தாமரை பீடத்தில் அமர்ந்த கோலம், விக்னங்களை நீக்கும் அபய கரத்துடன் உங்கள் இல்லத்திற்கு மங்கலம் தரும் புனித வடிவம்.",
    "features": [
      "Virgin Bell Metal Brass with rich antique golden luster",
      "Intricately carved lotus pedestal (Padma Peedam)",
      "Vastu-compliant right-trunk (Valampuri) sacred carving",
      "Hand-chiseled crown (Kireedam) and traditional ornaments",
      "Temple prana-prathishta compliant holy casting"
    ],
    "inStock": true,
    "gallery": [
      "/statues/ganesha_statue.jpg"
    ]
  },
  {
    "id": "JV-2017",
    "slug": "brass-lakshmi-ganesha-saraswati-trio",
    "title": "Shri Lakshmi Ganesha Saraswati Brass Trio Ensemble on Shared Peedam",
    "tamilTitle": "ஸ்ரீ லட்சுமி கணபதி சரஸ்வதி பித்தளை திருவுருவ பீடம்",
    "category": "God Statues (Vigraham)",
    "categorySlug": "pooja-statues",
    "price": 8500,
    "originalPrice": 9900,
    "weight": "4.8 kg",
    "height": "6.5 Inches / 16.5 cm",
    "material": "Pure Sandcast Brass (தூய பித்தளை வார்ப்பு)",
    "origin": "Kumbakonam & Swamimalai Guild",
    "rating": 4.9,
    "reviewCount": 96,
    "tag": "Diwali & Housewarming Essential",
    "image": "/statues/lakshmi_ganesh_saraswati.jpg",
    "description": "Auspicious trio idol featuring Goddess Lakshmi (Wealth), Lord Ganesha (Wisdom & Good Luck), and Goddess Saraswati (Knowledge & Arts) seated harmoniously on an ornate unified brass peedam. Highly sought after for home pooja altars, business offices, and grihapravesam.",
    "tamilDescription": "தனலட்சுமி, விக்ன விநாயகர் மற்றும் கலைவாணி சரஸ்வதி தேவி மூவரும் ஒரே பித்தளை பீடத்தில் அருள்பாலிக்கும் மங்கலத் தொகுப்பு. புதுமனை புகுவிழா மற்றும் தீபாவளி லட்சுமி பூஜைக்குரியது.",
    "features": [
      "Harmonious 3-in-1 divine brass composition on single ornamental peedam",
      "Goddess Lakshmi holding lotuses, Ganesha with modak, Saraswati with veena",
      "Fine hand-etched filigree on pedestal and backings",
      "Ideal for Grihapravesam, Akshaya Tritiya, and Deepavali pooja",
      "Durable tarnish-resistant natural polish"
    ],
    "inStock": true,
    "gallery": [
      "/statues/lakshmi_ganesh_saraswati.jpg"
    ]
  },
  {
    "id": "JV-2018",
    "slug": "padmasana-gajalakshmi-brass-idol",
    "title": "Auspicious Padmasana Goddess Lakshmi Brass Idol - 9 Inches",
    "tamilTitle": "பத்மாசன ஸ்ரீ கஜலட்சுமி பித்தளை திருவுருவம் (9 இன்ச்)",
    "category": "God Statues (Vigraham)",
    "categorySlug": "pooja-statues",
    "price": 5200,
    "originalPrice": 6200,
    "weight": "3.6 kg",
    "height": "9 Inches / 23 cm",
    "material": "Heavy Solid Brass (கனரக தூய பித்தளை)",
    "origin": "Nachiarkoil Handcrafted",
    "rating": 5,
    "reviewCount": 128,
    "tag": "Wealth & Prosperity",
    "image": "/statues/lakshmi_statue.jpg",
    "description": "Divine brass idol of Goddess Mahalakshmi seated serenely in lotus posture with four arms, holding fresh lotus blooms in upper hands and granting Abhaya & Varada blessings. Radiates peaceful spiritual energy for home sanctums.",
    "tamilDescription": "மலர் விரிந்த தாமரையில் வீற்றிருக்கும் ஸ்ரீ மகாலட்சுமி தாயார் சிலை. செல்வ வளம், குடும்ப அமைதி மற்றும் சந்தோஷம் அருளும் நாச்சியார்கோவில் கைவினை பொக்கிஷம்.",
    "features": [
      "Seated on a multi-layered blooming lotus (Sahasrara Padma Peedam)",
      "Detailed jewelry, armlets, and sun-ray halo (Prabhavali) crown",
      "Heavy solid brass bottom base for supreme stability",
      "Certified non-leaded traditional brass composition",
      "Auspicious Friday Vilakku Pooja and Varalakshmi Vratham icon"
    ],
    "inStock": true,
    "gallery": [
      "/statues/lakshmi_statue.jpg"
    ]
  },
  {
    "id": "JV-2019",
    "slug": "temple-brass-lord-murugan-vel-statue",
    "title": "Majestic Lord Murugan (Dandayudhapani) with Sacred Vel & Peacock - 18 Inches",
    "tamilTitle": "அருள்மிகு தண்டாயுதபாணி முருகன் சிலை (வேல், சேவல் & மயில்) - 18 இன்ச்",
    "category": "God Statues (Vigraham)",
    "categorySlug": "pooja-statues",
    "price": 18500,
    "originalPrice": 22000,
    "weight": "11.5 kg",
    "height": "18 Inches / 45 cm",
    "material": "Panchaloha / Heavy Bell Brass Alloy (பஞ்சலோக முறை பித்தளை)",
    "origin": "Swamimalai Temple Sthapathi Masterpiece",
    "rating": 5,
    "reviewCount": 215,
    "tag": "Temple Consecrated Masterpiece",
    "image": "/statues/murugan_statue.jpg",
    "description": "Magnificent standing Lord Murugan deity cast with sacred Vel spear, Seval rooster flag in hand, and the royal Mayil peacock vahana standing proudly behind on a stepped lotus pedestal. Hand-finished by Swamimalai sthapathis with divine facial majesty.",
    "tamilDescription": "அசுரர்களை வென்ற ஞானவேல், வெற்றிக்கொடியான சேவற்கொடி ஏந்தி, தோகை மயில் பின்புறம் கம்பீரமாக நிற்க சுவாமிமலை சிற்பிகளால் வடிக்கப்பட்ட 18 இன்ச் தண்டாயுதபாணி முருகன் சிலை.",
    "features": [
      "Tall 18-inch authentic temple icon with Vel spear & Seval rooster banner",
      "Graceful Peacock (Mayil) vahana sculpted in full relief behind",
      "Double-tier lotus pedestal (Padma Peedam) with sacred inscriptions",
      "Agama Sastra compliant proportions (Shilpa Shastra certified)",
      "Weighty 11.5 kg heirloom quality for generations of daily abhishekam"
    ],
    "inStock": true,
    "gallery": [
      "/statues/murugan_statue.jpg"
    ]
  },
  {
    "id": "JV-2020",
    "slug": "swami-ayyappan-thiruvachi-brass-idol",
    "title": "Consecrated Swami Ayyappan with Royal Thiruvachi Arch Brass Idol - 15 Inches",
    "tamilTitle": "அருள்மிகு சுவாமி ஐயப்பன் திருவாச்சி பித்தளை சிலை (15 இன்ச்)",
    "category": "God Statues (Vigraham)",
    "categorySlug": "pooja-statues",
    "price": 16800,
    "originalPrice": 19500,
    "weight": "9.8 kg",
    "height": "15 Inches / 38 cm",
    "material": "Sacred Heavy Sandcast Brass with Detachable Thiruvachi",
    "origin": "Madurai & Kerala Sthapathi Guild",
    "rating": 5,
    "reviewCount": 89,
    "tag": "Mandala Pooja Sacred Icon",
    "image": "/statues/ayyappan_statue.jpg",
    "description": "Grand Swami Ayyappan deity depicted in eternal Yogapatta posture on a sacred lotus throne, enclosed within a magnificent sun-flame Thiruvachi (Prabhavali arch) with Kirtimukha crest. Ideal for Sabarimala Mandala pooja, home shrines, and community temples.",
    "tamilDescription": "யோகப்பட்டை தரித்து பத்மாசனத்தில் தவக்கோலத்தில் அருள்பாலிக்கும் சுவாமி ஐயப்பன் சிலை. சுடர்விடும் திருவாச்சி (பிரபாவளி) வளைவுடன் கூடிய கனரக பித்தளை வார்ப்பு.",
    "features": [
      "Authentic Yogic posture with sacred knee-band (Yogapatta) detailing",
      "Magnificent radiating sun-halo Thiruvachi arch with ornate crest",
      "Right hand in Chinmudra granting supreme spiritual liberation",
      "High-density sandcast brass resistant to panchamritam & milk abhishekam",
      "Heavyweight 9.8 kg stable foundation"
    ],
    "inStock": true,
    "gallery": [
      "/statues/ayyappan_statue.jpg"
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, count = 4): Product[] {
  return PRODUCTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
