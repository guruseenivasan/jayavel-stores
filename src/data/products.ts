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
        "id": "JV-2960",
        "slug": "antique-gold-brass-lord-hanuman-statue",
        "title": "Antique Gold Brass Lord Hanuman Statue",
        "tamilTitle": "பழங்கால தங்க நிற பித்தளை அனுமன் சிலை",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 4999,
        "originalPrice": 5749,
        "image": "/uploads/white-1792932694-golden_brass_hanuman_statue_on_rock_base.jpg",
        "description": "Bring divine strength, courage, and devotion into your home with this beautifully crafted Antique Gold Brass Lord Hanuman Statue. Featuring Lord Hanuman in a standing pose, this traditional masterpiece showcases an intricately carved crown, detailed facial features, ornate jewelry, decorative garments, and a beautifully designed gada (mace).\n\nThe rich antique-gold finish highlights the fine engravings and traditional Indian craftsmanship, while the raised blessing hand symbolizes protection, peace, and positive energy. The detailed base adds grandeur, making this statue a wonderful addition to your home temple, pooja room, living room, or spiritual collection.",
        "tamilDescription": "Bring divine strength, courage, and devotion into your home with this beautifully crafted Antique Gold Brass Lord Hanuman Statue. Featuring Lord Hanuman in a standing pose, this traditional masterpiece showcases an intricately carved crown, detailed facial features, ornate jewelry, decorative garments, and a beautifully designed gada (mace).\n\nThe rich antique-gold finish highlights the fine engravings and traditional Indian craftsmanship, while the raised blessing hand symbolizes protection, peace, and positive energy. The detailed base adds grandeur, making this statue a wonderful addition to your home temple, pooja room, living room, or spiritual collection.",
        "features": [
            "Traditional Lord Hanuman standing statue",
            "Rich antique-gold brass appearance",
            "Intricate carvings, jewelry, and ornamental detailing",
            "Blessing pose symbolizing courage, strength, and protection",
            "Decorative gada and detailed sculpted base",
            "Ideal for home temples, pooja rooms, and festive décor",
            "A thoughtful gift for housewarmings, religious occasions, and festivals"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-5856",
        "slug": "antique-gold-brass-cow-and-calf-decorative-statue",
        "title": "Antique Gold Brass Cow and Calf Decorative Statue",
        "tamilTitle": "பழங்கால தங்க நிற பித்தளை பசு மற்றும் கன்று அலங்காரச் சிலை",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 899,
        "originalPrice": 1034,
        "image": "/uploads/white-1792932603-ornate_brass_cow_and_calf_statue.jpg",
        "description": "Bring home traditional Indian artistry and auspicious charm with this beautifully crafted Antique Gold Brass Cow and Calf Statue. Featuring a finely detailed mother cow with her calf, this elegant decorative piece showcases intricate engravings, traditional ornamental patterns, and a rich antique-gold finish.\n\nThe statue is elevated on a beautifully carved platform with decorative legs, adding a royal and traditional touch. Its timeless design makes it ideal for pooja rooms, home temples, living rooms, office spaces, and festive decorations.",
        "tamilDescription": "Bring home traditional Indian artistry and auspicious charm with this beautifully crafted Antique Gold Brass Cow and Calf Statue. Featuring a finely detailed mother cow with her calf, this elegant decorative piece showcases intricate engravings, traditional ornamental patterns, and a rich antique-gold finish.\n\nThe statue is elevated on a beautifully carved platform with decorative legs, adding a royal and traditional touch. Its timeless design makes it ideal for pooja rooms, home temples, living rooms, office spaces, and festive decorations.",
        "features": [
            "Elegant antique-gold brass finish",
            "Intricate traditional carvings and ornamental detailing",
            "Beautiful cow and calf design symbolizing love, prosperity, and abundance",
            "Decorative raised platform with detailed craftsmanship",
            "Ideal for pooja rooms, home décor, gifting, and festive occasions",
            "A timeless addition to traditional and contemporary interiors"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-1741",
        "slug": "antique-gold-brass-hindu-trinity-statue-lakshmi-ganesha-saraswati",
        "title": "Antique Gold Brass Hindu Trinity Statue – Lakshmi, Ganesha & Saraswati",
        "tamilTitle": "பழங்கால பாணி பொன்னிற பித்தளை இந்து மும்மூர்த்தி சிலை – லட்சுமி, கணேசர் மற்றும் சரஸ்வதி",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 600,
        "originalPrice": 690,
        "image": "/uploads/white-1792932399-antique_brass_hindu_deity_trio.jpg",
        "description": "Bring divine blessings and traditional elegance to your home with this beautifully crafted antique-gold brass Hindu Trinity statue set featuring Goddess Lakshmi, Lord Ganesha, and Goddess Saraswati. Each deity is intricately detailed with traditional ornaments, expressive features, and finely carved patterns, seated gracefully on decorative lotus-style pedestals.\n\nThe elegant gold finish and ornate rectangular base make this statue set ideal for your pooja room, home temple, living room, or office. Perfect for daily worship, festive decorations, housewarming ceremonies, and auspicious gifting, this divine trio adds a timeless spiritual charm to any space.",
        "tamilDescription": "Bring divine blessings and traditional elegance to your home with this beautifully crafted antique-gold brass Hindu Trinity statue set featuring Goddess Lakshmi, Lord Ganesha, and Goddess Saraswati. Each deity is intricately detailed with traditional ornaments, expressive features, and finely carved patterns, seated gracefully on decorative lotus-style pedestals.\n\nThe elegant gold finish and ornate rectangular base make this statue set ideal for your pooja room, home temple, living room, or office. Perfect for daily worship, festive decorations, housewarming ceremonies, and auspicious gifting, this divine trio adds a timeless spiritual charm to any space.",
        "features": [
            "Material: Brass-finish metal",
            "Design: Lakshmi, Ganesha, and Saraswati in a traditional seated design",
            "Finish: Antique gold with detailed engravings",
            "Base: Decorative shared rectangular pedestal",
            "Suitable for: Pooja rooms, home temples, offices, and spiritual décor",
            "Ideal for gifting: Diwali, housewarming, weddings, and other festive occasions"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-9987",
        "slug": "antique-gold-brass-lord-shiva-and-goddess-parvati-on-nandi-traditional-divine-statue",
        "title": "Antique Gold Brass Lord Shiva and Goddess Parvati on Nandi – Traditional Divine Statue",
        "tamilTitle": "பழங்கால தங்க பித்தளை நந்தியின் மீது சிவன் மற்றும் பார்வதி தேவி - பாரம்பரிய தெய்வீக சிலை",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 8999,
        "originalPrice": 10349,
        "image": "/uploads/white-1792932237-golden_shiva_and_parvati_on_nandi.jpg",
        "description": "Bring divine beauty and spiritual elegance to your home with this intricately crafted Lord Shiva and Goddess Parvati statue seated on Nandi, the sacred bull. Featuring detailed crowns, traditional jewellery, beautifully carved ornaments, and an elaborately decorated pedestal, this stunning sculpture showcases a rich antique-gold brass finish that highlights its timeless South Indian craftsmanship.",
        "tamilDescription": "Bring divine beauty and spiritual elegance to your home with this intricately crafted Lord Shiva and Goddess Parvati statue seated on Nandi, the sacred bull. Featuring detailed crowns, traditional jewellery, beautifully carved ornaments, and an elaborately decorated pedestal, this stunning sculpture showcases a rich antique-gold brass finish that highlights its timeless South Indian craftsmanship.",
        "features": [
            "Lord Shiva and Goddess Parvati seated on Nandi",
            "Intricate traditional crowns, jewellery, and ornamental carvings",
            "Beautifully detailed Nandi with decorative harness and embellishments",
            "Rich antique-gold brass appearance with finely defined engravings",
            "Elegant decorative base suitable for display",
            "Ideal for pooja rooms, home temples, and traditional interiors",
            "A meaningful gift for housewarming ceremonies, weddings, and festive occasions"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-6750",
        "slug": "antique-gold-brass-sri-rama-darbar-statue-set-with-ornate-arch-traditional-indian-spiritual-d-cor",
        "title": "Antique Gold Brass Sri Rama Darbar Statue Set with Ornate Arch – Traditional Indian Spiritual Décor",
        "tamilTitle": "அலங்கார வளைவுடன் கூடிய பழங்கால தங்கப் பித்தளை ஸ்ரீ ராம தர்பார் சிலை தொகுப்பு – பாரம்பரிய இந்திய ஆன்மீக அலங்காரம்",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 8999,
        "originalPrice": 10349,
        "image": "/uploads/white-1792932069-ornate_brass_hindu_deity_tableau.jpg",
        "description": "Bring divine blessings and timeless elegance to your home with this beautifully crafted Sri Rama Darbar statue set. Featuring Lord Rama, Goddess Sita, Lakshmana, and Lord Hanuman beneath an intricately carved ornamental arch, this traditional brass-finish sculpture showcases detailed crowns, jewellery, graceful expressions, and decorative engravings. The rich antique-gold finish and beautifully carved rectangular pedestal make it a striking centerpiece for your pooja room, home temple, or spiritual décor collection.",
        "tamilDescription": "Bring divine blessings and timeless elegance to your home with this beautifully crafted Sri Rama Darbar statue set. Featuring Lord Rama, Goddess Sita, Lakshmana, and Lord Hanuman beneath an intricately carved ornamental arch, this traditional brass-finish sculpture showcases detailed crowns, jewellery, graceful expressions, and decorative engravings. The rich antique-gold finish and beautifully carved rectangular pedestal make it a striking centerpiece for your pooja room, home temple, or spiritual décor collection.",
        "features": [
            "Traditional Sri Rama Darbar with Lord Rama, Goddess Sita, Lakshmana, and Lord Hanuman",
            "Ornate decorative arch with floral carvings and intricate detailing",
            "Rich antique-gold brass appearance",
            "Finely detailed crowns, ornaments, garments, and pedestal",
            "Ideal for pooja rooms, home temples, and traditional interiors",
            "A thoughtful gift for housewarming ceremonies, weddings, and festive occasions"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-1926",
        "slug": "antique-gold-brass-lord-krishna-statue-with-flute-traditional-indian-home-d-cor",
        "title": "Antique Gold Brass Lord Krishna Statue with Flute – Traditional Indian Home Décor",
        "tamilTitle": "புல்லாங்குழலுடன் கூடிய பழங்கால தங்கப் பித்தளை கிருஷ்ணர் சிலை – பாரம்பரிய இந்திய வீட்டு அலங்காரம்",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 7999,
        "originalPrice": 9199,
        "image": "/uploads/white-1792931878-ornate_antique_brass_krishna_statue.jpg",
        "description": "Bring divine charm and traditional elegance to your home with this beautifully detailed Lord Krishna brass statue, featuring an ornate crown, intricate jewellery, a decorative back design, and a traditional flute-playing pose. The rich antique-gold finish, finely carved ornaments, and elegant lotus-style pedestal make it a stunning addition to pooja rooms, temples, living spaces, and festive décor.",
        "tamilDescription": "Bring divine charm and traditional elegance to your home with this beautifully detailed Lord Krishna brass statue, featuring an ornate crown, intricate jewellery, a decorative back design, and a traditional flute-playing pose. The rich antique-gold finish, finely carved ornaments, and elegant lotus-style pedestal make it a stunning addition to pooja rooms, temples, living spaces, and festive décor.",
        "features": [
            "Premium antique-gold brass appearance",
            "Detailed crown, jewellery, garments, and decorative motifs",
            "Traditional Lord Krishna flute-playing posture",
            "Ornate lotus-style pedestal",
            "Ideal for pooja rooms, spiritual décor, and festive gifting",
            "Suitable for housewarming ceremonies and special occasions"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-7457",
        "slug": "antique-gold-buddha-statue-premium-meditation-spiritual-d-cor",
        "title": "Antique Gold Buddha Statue – Premium Meditation & Spiritual Décor",
        "tamilTitle": "பழங்கால தங்க புத்தர் சிலை – உயர்தர தியானம் மற்றும் ஆன்மீக அலங்காரப் பொருள்",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 5999,
        "originalPrice": 6899,
        "image": "/uploads/white-1792931670-golden_buddha_statue_on_lotus_pedestal.jpg",
        "description": "Bring peace, positivity, and serenity into your home with this beautifully crafted Buddha statue. Featuring a serene facial expression, intricately detailed curls, a traditional meditation posture, and elegant antique-gold and dark bronze finishes, this statue reflects timeless artistry and spiritual elegance.\n\nThe Buddha is seated in a peaceful cross-legged meditation pose, with one hand raised in a gesture of blessing and the other resting gently in the lap. Its refined detailing and contrasting metallic finish make it a striking addition to any spiritual or decorative setting.",
        "tamilDescription": "Bring peace, positivity, and serenity into your home with this beautifully crafted Buddha statue. Featuring a serene facial expression, intricately detailed curls, a traditional meditation posture, and elegant antique-gold and dark bronze finishes, this statue reflects timeless artistry and spiritual elegance.\n\nThe Buddha is seated in a peaceful cross-legged meditation pose, with one hand raised in a gesture of blessing and the other resting gently in the lap. Its refined detailing and contrasting metallic finish make it a striking addition to any spiritual or decorative setting.",
        "features": [
            "Premium antique-gold finish with dark bronze detailing",
            "Beautifully sculpted Buddha face and textured hair",
            "Traditional seated meditation posture",
            "Intricate robe patterns and realistic craftsmanship",
            "Ideal for pooja rooms, meditation spaces, living rooms, and offices",
            "Suitable for housewarming gifts, festive gifting, and spiritual décor"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-7315",
        "slug": "antique-brass-deity-vilakku-traditional-south-indian-oil-lamp",
        "title": "Antique Brass Deity Vilakku – Traditional South Indian Oil Lamp",
        "tamilTitle": "பழங்கால பித்தளை தெய்வ விளக்கு – பாரம்பரிய தென்னிந்திய எண்ணெய் விளக்கு",
        "category": "Kuthu Vilakku (Traditional Lamps)",
        "categorySlug": "kuthu-vilakku",
        "price": 299,
        "originalPrice": 344,
        "image": "/uploads/white-1792931458-ornate_golden_horse-headed_deity_diya.jpg",
        "description": "nhance your pooja space with this beautifully crafted antique-gold brass vilakku, featuring an intricately detailed Hindu deity, an ornate decorative arch, and a traditional scalloped oil bowl. The elegant pedestal showcases finely carved patterns and a rich antique finish, reflecting the beauty of traditional South Indian craftsmanship.\n\nPerfect for daily pooja, festive decorations, temple use, housewarming gifts, and spiritual décor, this traditional brass lamp adds a divine and timeless touch to any space.",
        "tamilDescription": "nhance your pooja space with this beautifully crafted antique-gold brass vilakku, featuring an intricately detailed Hindu deity, an ornate decorative arch, and a traditional scalloped oil bowl. The elegant pedestal showcases finely carved patterns and a rich antique finish, reflecting the beauty of traditional South Indian craftsmanship.\n\nPerfect for daily pooja, festive decorations, temple use, housewarming gifts, and spiritual décor, this traditional brass lamp adds a divine and timeless touch to any space.",
        "features": [
            "Traditional antique-gold brass finish",
            "Intricate deity and ornamental carvings",
            "Decorative oil bowl for lighting",
            "Elegant pedestal with detailed engravings",
            "Ideal for pooja rooms, temples, and festive occasions",
            "A thoughtful gift for religious ceremonies and special celebrations"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-2148",
        "slug": "antique-gold-brass-peacock-vilakku-traditional-multi-wick-oil-lamp",
        "title": "Antique Gold Brass Peacock Vilakku – Traditional Multi-Wick Oil Lamp",
        "tamilTitle": "பழங்கால பாணி பித்தளை மயில் விளக்கு – பாரம்பரியமான, பல திரிகள் கொண்ட எண்ணெய் விளக்கு",
        "category": "Kuthu Vilakku (Traditional Lamps)",
        "categorySlug": "kuthu-vilakku",
        "price": 699,
        "originalPrice": 804,
        "image": "/uploads/white-1792931175-ornate_brass_peacock_diya_stand.jpg",
        "description": "Bring timeless elegance and traditional South Indian charm to your home with this beautifully crafted brass peacock vilakku. Featuring an intricately carved peacock finial, a multi-bowl oil lamp design, a decorative stem, and an ornate circular pedestal, this lamp showcases the beauty of traditional Indian craftsmanship.\n\nThe antique-gold finish and detailed ornamental carvings make it a stunning addition to your pooja room, home temple, and festive décor. Its elegant peacock design adds a traditional and auspicious touch to your sacred space.",
        "tamilDescription": "Bring timeless elegance and traditional South Indian charm to your home with this beautifully crafted brass peacock vilakku. Featuring an intricately carved peacock finial, a multi-bowl oil lamp design, a decorative stem, and an ornate circular pedestal, this lamp showcases the beauty of traditional Indian craftsmanship.\n\nThe antique-gold finish and detailed ornamental carvings make it a stunning addition to your pooja room, home temple, and festive décor. Its elegant peacock design adds a traditional and auspicious touch to your sacred space.",
        "features": [
            "Material: Brass",
            "Finish: Antique gold",
            "Design: Decorative peacock finial with multiple oil bowls",
            "Base: Ornately carved circular pedestal with decorative feet",
            "Style: Traditional South Indian craftsmanship",
            "Usage: Daily pooja, devotional rituals, and home décor",
            "Placement: Pooja room, home temple, entrance, or festive display"
        ],
        "material": "Pure Bell Brass",
        "weight": "2",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-8612",
        "slug": "antique-gold-brass-goddess-vilakku-traditional-standing-oil-lamp",
        "title": "Antique Gold Brass Goddess Vilakku – Traditional Standing Oil Lamp",
        "tamilTitle": "பழங்கால தங்க நிற பித்தளை தேவதை விளக்கு – பாரம்பரியமான நின்ற நிலை எண்ணெய் விளக்கு",
        "category": "Kuthu Vilakku (Traditional Lamps)",
        "categorySlug": "kuthu-vilakku",
        "price": 700,
        "originalPrice": 805,
        "image": "/uploads/white-1792931025-antique_brass_hindu_goddess_statue.jpg",
        "description": "Bring a divine and traditional touch to your pooja room with this beautifully crafted standing brass goddess vilakku. Featuring a finely detailed goddess figure holding a lamp bowl, an ornate crown, traditional jewelry, and an intricately carved pedestal, this piece showcases the beauty of Indian devotional craftsmanship.\n\nThe antique-gold finish and detailed engravings give the lamp a timeless, elegant appearance, making it ideal for daily worship, festive decorations, and traditional home interiors.",
        "tamilDescription": "Bring a divine and traditional touch to your pooja room with this beautifully crafted standing brass goddess vilakku. Featuring a finely detailed goddess figure holding a lamp bowl, an ornate crown, traditional jewelry, and an intricately carved pedestal, this piece showcases the beauty of Indian devotional craftsmanship.\n\nThe antique-gold finish and detailed engravings give the lamp a timeless, elegant appearance, making it ideal for daily worship, festive decorations, and traditional home interiors.",
        "features": [
            "Material: Brass",
            "Finish: Antique gold",
            "Design: Standing goddess with a lamp bowl and decorative pedestal",
            "Style: Traditional South Indian devotional art",
            "Usage: Daily pooja, lighting oil lamps, and home decoration",
            "Placement: Pooja room, home temple, or prayer area"
        ],
        "material": "Pure Bell Brass",
        "weight": "3",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-6957",
        "slug": "antique-gold-brass-vilakku-traditional-decorative-oil-lamp",
        "title": "Antique Gold Brass Vilakku – Traditional Decorative Oil Lamp",
        "tamilTitle": "Antique Gold Brass Vilakku – Traditional Decorative Oil Lamp",
        "category": "Kuthu Vilakku (Traditional Lamps)",
        "categorySlug": "kuthu-vilakku",
        "price": 450,
        "originalPrice": 518,
        "image": "/uploads/white-1792930318-ornate_golden_brass_diya_stand.jpg",
        "description": "Bring divine elegance and traditional South Indian charm to your home with this beautifully crafted brass vilakku. Featuring a wide, scalloped bowl with an elegant spout, intricate floral engravings, and a decorative lotus-inspired pedestal, this vilakku showcases timeless craftsmanship.\n\nThe rich golden-brass finish and detailed ornamental patterns make it a beautiful addition to your pooja room, home temple, festive decorations, and traditional interiors.",
        "tamilDescription": "Bring divine elegance and traditional South Indian charm to your home with this beautifully crafted brass vilakku. Featuring a wide, scalloped bowl with an elegant spout, intricate floral engravings, and a decorative lotus-inspired pedestal, this vilakku showcases timeless craftsmanship.\n\nThe rich golden-brass finish and detailed ornamental patterns make it a beautiful addition to your pooja room, home temple, festive decorations, and traditional interiors.",
        "features": [
            "Material: Brass",
            "Finish: Antique gold",
            "Design: Floral-patterned bowl with decorative pedestal",
            "Style: Traditional South Indian craftsmanship",
            "Usage: Pooja, daily worship, festivals, and home decoration",
            "Placement: Pooja room, home temple, or devotional display"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-6233",
        "slug": "temple-handcrafted-brass-saraswati-idol",
        "title": "Temple Handcrafted Brass Saraswati Idol",
        "tamilTitle": "அருள்மிகு பித்தளை கலைமகள் சரஸ்வதி சிலை",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 600,
        "originalPrice": 6900,
        "image": "/uploads/white-1792929989-a_clean_studio_product_photo_a_single_ornate_gold.jpg",
        "description": "Sacred handcrafted brass Goddess Saraswati statue holding the divine Veena on an ornate lotus pedestal. Consecrated proportions, authentic Madurai master craftsmanship.",
        "tamilDescription": "Sacred handcrafted brass Goddess Saraswati statue holding the divine Veena on an ornate lotus pedestal. Consecrated proportions, authentic Madurai master craftsmanship.",
        "features": [
            "Pure Sandcast Bell Brass",
            "Lost-Wax (Madhuchehishtavidhana) Casting",
            "Consecrated Kaval Deivam Proportions",
            "Hand-chiseled Aruval & Traditional Moustache Details",
            "Lifetime Durability & Antique Shine"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-3646",
        "slug": "lord-karuppasamy-idol",
        "title": "Lord Karuppasamy Idol",
        "tamilTitle": "அருள்மிகு பித்தளை கருப்பசாமி சிலை",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 5900,
        "originalPrice": 6785,
        "image": "/uploads/white-1792927384-golden_brass_warrior_deity_statue_on_ornate_pedestal.jpg",
        "description": "Sacred handcrafted brass Lord Karuppasamy statue standing in a powerful guardian stance with a traditional Aruval (sickle) on an ornate pedestal. Consecrated proportions, authentic Madurai master craftsmanship.",
        "tamilDescription": "Sacred handcrafted brass Lord Karuppasamy statue standing in a powerful guardian stance with a traditional Aruval (sickle) on an ornate pedestal. Consecrated proportions, authentic Madurai master craftsmanship.",
        "features": [
            "Pure Sandcast Bell Brass",
            "Lost-Wax (Madhuchehishtavidhana) Casting",
            "Consecrated Kaval Deivam Proportions",
            "Hand-chiseled Aruval & Traditional Moustache Details",
            "Lifetime Durability & Antique Shine"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "9 - 10 Inches",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-3171",
        "slug": "lord-thiruchendur-murugan-idol",
        "title": "Lord Thiruchendur Murugan Idol",
        "tamilTitle": "திருச்செந்தூர் முருகன் சிலை",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 4498,
        "originalPrice": 5173,
        "image": "/uploads/white-1792926845-ornate_golden_brass_temple_deity_statue.jpg",
        "description": "Sacred handcrafted brass Lord Thiruchendur Senthil Andavar statue holding the divine Vel with the majestic Mayil Vahanam (Peacock Mount) on an ornate lotus pedestal. Consecrated proportions, authentic Madurai master craftsmanship.",
        "tamilDescription": "Sacred handcrafted brass Lord Thiruchendur Senthil Andavar statue holding the divine Vel with the majestic Mayil Vahanam (Peacock Mount) on an ornate lotus pedestal. Consecrated proportions, authentic Madurai master craftsmanship.",
        "features": [
            "Pure Sandcast Bell Brass",
            "Lost-Wax (Madhuchehishtavidhana) Casting",
            "Consecrated Thiruchendur Senthil Andavar Proportions",
            "Hand-chiseled Sacred Vel & Peacock Mount Details",
            "Lifetime Durability & Shine"
        ],
        "material": "Pure Bell Brass",
        "weight": "5",
        "height": "3",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-5389",
        "slug": "temple-handcrafted-brass-krishna-idol-10-inches",
        "title": "Temple Handcrafted Brass Krishna Idol (10 Inches)",
        "tamilTitle": "அருள்மிகு பித்தளை வேணுகோபால கிருஷ்ணர் சிலை (10 அங்குலம்)",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 8000,
        "originalPrice": 9200,
        "image": "/uploads/white-1792926346-krishna_butter_pot_studio.jpg",
        "description": "Brass Krishna Idol Flute Standing Statue பாரம்பரிய தங்க நிறப் பித்தளையில் நின்ற கோலத்தில் அமைந்த வேணுகோபால சிலை.",
        "tamilDescription": "Brass Krishna Idol Flute Standing Statue பாரம்பரிய தங்க நிறப் பித்தளையில் நின்ற கோலத்தில் அமைந்த வேணுகோபால சிலை.",
        "features": [
            "Pure Sandcast Bell Brass",
            "Lost-Wax (Madhuchehishtavidhana) Casting",
            "Consecrated Tribhanga & Venugopala Proportions",
            "Hand-chiseled Peacock Crown & Flute Details",
            "Lifetime Durability & Shine"
        ],
        "material": "Pure Bell Brass",
        "weight": "",
        "height": "10",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
    },
    {
        "id": "JV-7682",
        "slug": "temple-handcrafted-brass-nataraja-idol-10-inches",
        "title": "Temple Handcrafted Brass Nataraja Idol - 10 Inches",
        "tamilTitle": "அருள்மிகு பித்தளை ஆனந்த நடராஜர் சிலை",
        "category": "God Statues (Vigraham)",
        "categorySlug": "pooja-statues",
        "price": 8515,
        "originalPrice": 7475,
        "image": "/uploads/white-1792926273-ornate_golden_krishna_dancing_statue.jpg",
        "description": "Sacred handcrafted brass Lord Nataraja statue performing the cosmic Ananda Tandava within the flaming Prabhavali aureole on an ornate lotus pedestal. Consecrated proportions, authentic Madurai master craftsmanship.",
        "tamilDescription": "Sacred handcrafted brass Lord Nataraja statue performing the cosmic Ananda Tandava within the flaming Prabhavali aureole on an ornate lotus pedestal. Consecrated proportions, authentic Madurai master craftsmanship.",
        "features": [
            "Pure Sandcast Bell Brass",
            "Lost-Wax (Madhuchehishtavidhana) Casting",
            "Consecrated Ananda Tandava Proportions",
            "Hand-chiseled Flaming Prabhavali Aureole",
            "Lifetime Durability & Shine"
        ],
        "material": "Pure Bell Brass",
        "weight": "5.0 kg",
        "height": "10 Inches",
        "tag": "New Arrival",
        "inStock": true,
        "origin": "Madurai Artisan Guild",
        "rating": 5,
        "reviewCount": 1
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
        "image": "/ganesha-statue.jpg",
        "gallery": [
            "/ganesha-statue.jpg"
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
        "image": "/products/peacock-uruli.jpg",
        "description": "Stout carved solid teak pedestal stool designed for elevating large Brass Urulis, deity vigrahams, or Kuthu Vilakku off the floor with elegance.",
        "features": [
            "Carved lotus petal base with non-slip rubberized foot pads",
            "Water-resistant herbal wax polish protects against flower moisture",
            "Supports heavy brass vessels up to 50 kg safely",
            "Compact 14-inch diameter top platform"
        ],
        "inStock": true,
        "gallery": [
            "/products/peacock-uruli.jpg"
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
        "image": "/ganesha-statue.jpg",
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
            "/ganesha-statue.jpg"
        ]
    }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, count = 4): Product[] {
  return PRODUCTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
