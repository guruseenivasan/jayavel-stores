"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ta";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    catalogue: "Product Catalogue",
    lampsVessels: "Brass & Bronze Vessels",
    kitchenItems: "Kitchen & Silver Items",
    furniture: "Heritage Furniture",
    about: "About Our Heritage",
    contact: "Visit Store & Contact",
    addressShort: "East Masi Street, Near Meenakshi Amman Temple, Madurai",
    timing: "Mon - Sun: 9:00 AM - 9:30 PM",
    heritageTag: "Tamil Nadu's Trusted Heritage Store Since 1978",
    whatsappUs: "WhatsApp Us",
    searchPlaceholder: "Search 2,500+ Pooja items, Brass Vilakku, Cookware...",
    enquireWhatsApp: "Enquire via WhatsApp",
    storeTitle: "JAYAVEL STORES",
    storeSubtitle: "Madurai • Tradition & Homestead Since 1978",
    allCategories: "All Categories",
    bestseller: "Madurai Bestseller",
    pureBrass: "Pure Brass (பித்தளை)",
    castBronze: "Cast Bronze (வெண்கலம்)",
    pureCopper: "Pure Copper (செம்பு)",
    pureTin: "Pure Tin Alloy (ஈயம்)",
    pureSilver: "Pure Silver & Silver-Plated (வெள்ளி)",
    filterProducts: "Filter Products",
    orderWhatsApp: "Order on WhatsApp",
    viewDetails: "View Details",
    certifiedPurity: "Certified Purity Guarantee",
    freeDelivery: "Safe All-India Delivery",
    callStore: "Call Store",
  },
  ta: {
    home: "முகப்பு",
    catalogue: "பொருட்கள் பட்டியல்",
    lampsVessels: "பித்தளை & வெண்கல பாத்திரங்கள்",
    kitchenItems: "சமையலறை & வெள்ளி",
    furniture: "மரச்சாமான்கள்",
    about: "எங்கள் பாரம்பரியம்",
    contact: "கடை முகவரி & தொடர்பு",
    addressShort: "கிழக்கு மாசி வீதி, மீனாட்சி அம்மன் கோவில் அருகில், மதுரை",
    timing: "திங்கள் - ஞாயிறு: காலை 9:00 - இரவு 9:30",
    heritageTag: "1978 முதல் தமிழ்நாட்டின் பாரம்பரிய நம்பிக்கை",
    whatsappUs: "வாட்ஸ்அப் செய்க",
    searchPlaceholder: "2,500+ பூஜை பொருட்கள், குத்து விளக்கு, பாத்திரங்கள் தேடுக...",
    enquireWhatsApp: "வாட்ஸ்அப்பில் விசாரிக்க",
    storeTitle: "ஜெயவேல் ஸ்டோர்ஸ்",
    storeSubtitle: "மதுரை • 1978 முதல் பாரம்பரிய பித்தளை & வெண்கல அங்காடி",
    allCategories: "அனைத்து வகைகள்",
    bestseller: "அதிகம் விற்பனையாகும் பொருள்",
    pureBrass: "தூய பித்தளை",
    castBronze: "சுவாமிமலை வெண்கலம்",
    pureCopper: "தூய செம்பு",
    pureTin: "பாரம்பரிய ஈயம்",
    filterProducts: "வடிகட்டுதல்",
    orderWhatsApp: "வாட்ஸ்அப்பில் ஆர்டர் செய்ய",
    viewDetails: "விவரங்களை பார்க்க",
    certifiedPurity: "100% தூய்மை உத்தரவாதம்",
    freeDelivery: "பாதுகாப்பான இந்தியா முழுவதுமான டெலிவரி",
    callStore: "அழைக்க",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Check saved language preference
    const saved = localStorage.getItem("preferred_lang") as Language | null;
    if (saved === "ta" || saved === "en") {
      setLanguageState(saved);
      applyGoogleTranslateCookie(saved);
    }
  }, []);

  const applyGoogleTranslateCookie = (lang: Language) => {
    try {
      const code = lang === "ta" ? "ta" : "en";
      const cookieVal = `/en/${code}`;
      document.cookie = `googtrans=${cookieVal}; path=/;`;
      if (typeof window !== "undefined" && window.location.hostname) {
        document.cookie = `googtrans=${cookieVal}; path=/; domain=${window.location.hostname};`;
      }
      document.documentElement.lang = code;

      // If Google Translate select box is present in DOM, trigger change
      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (combo) {
        combo.value = code;
        combo.dispatchEvent(new Event("change"));
      }
    } catch {
      // Ignore cookie errors
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("preferred_lang", lang);
      applyGoogleTranslateCookie(lang);

      // Trigger translate event
      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (combo) {
        combo.value = lang === "ta" ? "ta" : "en";
        combo.dispatchEvent(new Event("change"));
      } else if (lang === "ta") {
        // If Google translate combo is not yet loaded, reload with cookie
        // or trigger translate element
      }
    } catch {
      // Ignore localStorage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ta" : "en");
  };

  const t = (key: string): string => {
    return UI_TRANSLATIONS[language]?.[key] || UI_TRANSLATIONS.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
