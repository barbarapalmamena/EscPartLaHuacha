import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Tipografías de Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'Escuela Particular N° 240 "La Huacha" | Frutillar',
    template: '%s | Escuela La Huacha',
  },
  description:
    "Escuela rural multigrado en Frutillar, Región de Los Lagos. Educación inclusiva, personalizada y gratuita para 1° a 6° básico. Comprometidos con la identidad rural y el aprendizaje significativo.",
  keywords: [
    "escuela rural",
    "Frutillar",
    "educación básica",
    "Los Lagos",
    "La Huacha",
    "educación inclusiva",
    "PIE",
    "multigrado",
  ],
  authors: [{ name: "Escuela Particular N° 240 La Huacha" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://escuelalahuacha.cl",
    siteName: 'Escuela Particular N° 240 "La Huacha"',
    title: 'Escuela Particular N° 240 "La Huacha" | Frutillar',
    description:
      "Escuela rural multigrado en Frutillar, Región de Los Lagos. Educación inclusiva, personalizada y gratuita.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
