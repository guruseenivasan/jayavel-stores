"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <div className="min-h-screen bg-[#fcf9f8]">{children}</div>;
  }

  return (
    <>
      <Suspense fallback={<div className="h-28 bg-[#fcf9f8]" />}>
        <Header />
      </Suspense>
      <main className="pt-28 md:pt-[162px] min-h-[calc(100vh-140px)] bg-[#fcf9f8]">
        {children}
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
