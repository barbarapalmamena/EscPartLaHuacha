import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TeamCard } from "@/components/shared/TeamCard";

export const metadata: Metadata = {
  title: "Equipo de Trabajo",
  description:
    "Conoce al equipo docente y administrativo de la Escuela Particular N° 240 La Huacha: directivos, profesores y especialistas comprometidos con la educación.",
  openGraph: {
    title: "Equipo de Trabajo | Escuela La Huacha",
    description:
      "Nuestro equipo de profesionales comprometidos con brindar una educación de calidad, inclusiva y personalizada.",
  },
};

// Equipo completo de la escuela
const teamMembers = [
  {
    name: "Marcelo Fuentes",
    role: "Director y Profesor Encargado",
    imageSrc: "/team-director.jpg",
  },
  {
    name: "Jonathan Fuentes",
    role: "Encargado de Administración y Finanzas",
  },
  {
    name: "Carolina Campos R.",
    role: "Profesora de Inglés",
  },
  {
    name: "Raúl Carrasco",
    role: "Profesor de Educación Física",
  },
  {
    name: "Balbina Montecino",
    role: "Asistente de Aula",
  },
  {
    name: "Karim Yelor",
    role: "Asistente de Aula",
  },
  {
    name: "Miguel Fuentes",
    role: "Tallerista Audiovisual",
  },
  {
    name: "Javiera Saravia",
    role: "Coordinadora PIE",
  },
  {
    name: "Madelaine Saravia",
    role: "Psicóloga",
  },
];

export default function EquipoPage() {
  return (
    <>
      <PageHeader
        eyebrow="¿Quiénes somos?"
        title="Equipo de Trabajo"
        description="Un equipo de profesionales comprometidos con ofrecer una educación de calidad, cercana e inclusiva para cada estudiante."
        imageSrc="/mision-banner.jpg"
        imageAlt="Equipo docente de la Escuela La Huacha"
      />

      <div
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Nuestro equipo"
            title="Personas que hacen posible la educación"
            description="Docentes, especialistas y administrativos que trabajan cada día para entregar lo mejor a nuestros estudiantes."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
