import { STORE_CONTACT } from "@/data/products";

export default function WhatsAppButton() {
  return (
    <aside className="fixed bottom-6 right-6 z-40">
      <a
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#00402a] text-[#b1f0ce] shadow-[0_8px_20px_rgba(0,40,26,0.35)] hover:bg-[#002819] hover:scale-105 transition-all group border border-[#b1f0ce]/30"
        href={STORE_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Jayavel Stores on WhatsApp"
      >
        <span className="material-symbols-outlined text-[24px]">chat</span>
        <span className="text-xs sm:text-sm font-semibold tracking-wide pr-1">
          Direct WhatsApp Help
        </span>
      </a>
    </aside>
  );
}
