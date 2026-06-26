import type { Metadata } from "next";
import { Poppins, Roboto, Lora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Fuentes usadas en el sitio real
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
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
      className={`${poppins.variable} ${roboto.variable} ${lora.variable} h-full`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-body)" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
