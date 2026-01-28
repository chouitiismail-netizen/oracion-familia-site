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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oracion-familia-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Oraciones por la familia - Oraciones para bendecir el hogar y la familia",
  description: "Oraciones originales para bendecir el hogar, pedir unidad y reconciliación, y confiar la familia a Dios cada día.",
  keywords: ["oraciones por la familia", "oraciones católicas", "unidad familiar", "bendición del hogar", "reconciliación familiar"],
  authors: [{ name: "Oraciones por la familia" }],
  creator: "Oraciones por la familia",
  publisher: "Oraciones por la familia",
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Oraciones por la familia",
    description: "Oraciones originales para bendecir el hogar, pedir unidad y reconciliación, y confiar la familia a Dios cada día.",
    url: baseUrl,
    siteName: "Oraciones por la familia",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Oraciones por la familia",
    description: "Oraciones originales para bendecir el hogar, pedir unidad y reconciliación, y confiar la familia a Dios cada día.",
  },
  other: {
    "theme-color": "#d17b27",
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
