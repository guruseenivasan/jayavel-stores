import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Jayavel Stores | Heritage Brassware & Pooja Essentials Madurai",
  description:
    "Madurai's premier heritage house since 1978. Authentic Nachiarkoil Annam Kuthu Vilakku, Swamimalai bronze pooja statues, Kumbakonam tin vessels, and Salem cookware.",
  icons: {
    icon: "/logo/jv-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fcf9f8] text-[#1b1c1c] font-sans antialiased selection:bg-[#ffdea4] selection:text-[#261900]">
        <LanguageProvider>
          <Suspense fallback={<div className="h-28 bg-[#fcf9f8]" />}>
            <Header />
          </Suspense>
          <main className="pt-28 md:pt-[162px] min-h-[calc(100vh-140px)] bg-[#fcf9f8]">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
