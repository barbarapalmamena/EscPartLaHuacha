import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ProgramaPIE } from "@/components/home/ProgramaPIE";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { ContactForm } from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: 'Escuela Particular N° 240 "La Huacha" | Inicio',
  description:
    "Escuela rural multigrado en Frutillar, Región de Los Lagos. Educación inclusiva, personalizada y gratuita para niños de 1° a 6° básico. Fundada en 1953.",
  openGraph: {
    title: 'Escuela Particular N° 240 "La Huacha"',
    description:
      "Educando con compromiso, inclusión e identidad rural en Frutillar. Escuela rural multigrado desde 1953.",
  },
};

/**
 * Página principal del sitio.
 * Compone el hero, características, programa PIE,
 * feed de Instagram y formulario de contacto.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProgramaPIE />
      <InstagramFeed />
      <ContactForm />
    </>
  );
}
