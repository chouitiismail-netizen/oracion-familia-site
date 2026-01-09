import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://REPLACE_AFTER_VERCEL.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Oraciones de la noche - Cierra el día en paz con Dios",
  description: "Oraciones y reflexiones originales para cerrar el día, agradecer, pedir perdón y descansar en paz con Dios.",
  keywords: ["oraciones de la noche", "oraciones católicas", "antes de dormir", "paz interior", "reflexiones nocturnas"],
  openGraph: {
    title: "Oraciones de la noche",
    description: "Oraciones y reflexiones originales para cerrar el día, agradecer, pedir perdón y descansar en paz con Dios.",
    url: baseUrl,
    siteName: "Oraciones de la noche",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
