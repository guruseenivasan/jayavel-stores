"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Add Google Translate script if not already present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      (window as unknown as { googleTranslateElementInit?: () => void }).googleTranslateElementInit = () => {
        const google = (window as unknown as { google?: { translate?: { TranslateElement: new (options: unknown, id: string) => void } } }).google;
        if (google?.translate?.TranslateElement) {
          new google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,ta",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };
    }
  }, []);

  return (
    <div className="inline-flex items-center gap-1.5" title="Translate Page / மொழி மாற்றம்">
      <div className="flex items-center bg-[#48061d] border border-[#ffdea4]/40 rounded-full p-0.5 shadow-sm">
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-label="Switch to English"
          className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
            language === "en"
              ? "bg-[#ffdea4] text-[#48061d] shadow"
              : "text-[#ffdea4]/80 hover:text-white hover:bg-white/10"
          }`}
        >
          <span className="material-symbols-outlined text-[13px]">translate</span>
          <span>ENG</span>
        </button>

        <button
          type="button"
          onClick={() => setLanguage("ta")}
          aria-label="தமிழுக்கு மாற்றுக"
          className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
            language === "ta"
              ? "bg-[#ffdea4] text-[#48061d] shadow"
              : "text-[#ffdea4]/80 hover:text-white hover:bg-white/10"
          }`}
        >
          <span>தமிழ்</span>
        </button>
      </div>

      {/* Hidden container for Google Translate element */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
    </div>
  );
}
