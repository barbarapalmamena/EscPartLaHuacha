import type { Metadata } from "next";
import { ContactForm } from "@/components/home/ContactForm";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctate con la Escuela Particular N° 240 La Huacha. Teléfono: +56 9 4250 7098. Email: contacto@escuelalahuacha.cl. Ubicados en Frutillar, Región de Los Lagos.",
  openGraph: {
    title: "Contacto | Escuela La Huacha",
    description:
      "Escríbenos para consultas sobre admisión, programa PIE u otra información del establecimiento.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Comunícate con nosotros"
        title="Contacto"
        description="Estamos disponibles para responder tus consultas sobre admisión, programa PIE u cualquier otra información del establecimiento."
      />
      <ContactForm />
    </>
  );
}
