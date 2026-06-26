import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Target, Eye, Clock, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Misión y Visión",
  description:
    "Conoce la misión, visión e historia de la Escuela Particular N° 240 La Huacha, fundada en 1953 en Frutillar, Región de Los Lagos.",
  openGraph: {
    title: "Misión y Visión | Escuela La Huacha",
    description:
      "Ofrecer una educación de calidad, inclusiva e integral, que valore el entorno natural y promueva prácticas de educación medioambiental.",
  },
};

const historyFacts = [
  { icon: Clock, label: "Fundación", value: "04 de agosto de 1953" },
  { icon: Building, label: "Propietaria", value: "Corp. Ed. Lomas de la Piedra" },
  { icon: Target, label: "Modalidad", value: "Escuela rural multigrado" },
  { icon: Eye, label: "Matrícula autorizada", value: "23 estudiantes" },
];

export default function MisionVisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="¿Quiénes somos?"
        title="Misión y Visión"
        description="Conoce los valores y propósitos que guían nuestra comunidad educativa desde 1953."
        imageSrc="/mision-banner.jpg"
        imageAlt="Paisaje del sector La Huacha en Frutillar"
      />

      <div className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">

          {/* Historia */}
          <section>
            <SectionTitle
              eyebrow="Nuestra historia"
              title="Desde 1953 al servicio de la comunidad"
              description="Más de 70 años formando generaciones en el corazón de la Región de Los Lagos."
              align="center"
              accentColor="salmon"
              className="mb-12"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {historyFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="bg-white p-6 flex flex-col gap-3 text-center items-center rounded-lg"
                    style={{ border: "1px solid var(--color-border)", boxShadow: "var(--shadow-sm)" }}
                  >
                    <div
                      className="w-12 h-12 rounded flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-navy)" }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{ color: "var(--color-olive)", fontFamily: "var(--font-heading)" }}
                      >
                        {fact.label}
                      </p>
                      <p className="text-sm font-medium" style={{ color: "var(--color-heading)" }}>
                        {fact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="bg-white p-8 rounded-lg"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
                La Escuela Particular N° 240 &quot;La Huacha&quot; fue fundada el{" "}
                <strong style={{ color: "var(--color-heading)" }}>4 de agosto de 1953</strong> en
                el sector La Huacha, Casma, Frutillar, Región de Los Lagos. A lo largo de sus más
                de 70 años de historia, ha sido un pilar fundamental en la educación de las
                comunidades rurales del sector.
              </p>
              <p className="text-sm leading-relaxed mt-4" style={{ color: "var(--color-body)" }}>
                Hoy opera como escuela rural multigrado bajo la administración de la{" "}
                <strong style={{ color: "var(--color-heading)" }}>Corporación Educacional &quot;Lomas de la Piedra&quot;</strong>,
                ofreciendo educación gratuita y de calidad para niños de 1° a 6° básico con una
                matrícula autorizada de 23 estudiantes.
              </p>
            </div>
          </section>

          {/* Misión y Visión */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Misión */}
            <div
              className="bg-white p-8 rounded-lg relative overflow-hidden"
              id="mision"
              style={{ border: "1px solid var(--color-border)", boxShadow: "var(--shadow-sm)" }}
            >
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ backgroundColor: "var(--color-olive)" }}
              />
              <div className="flex items-center gap-3 mb-6 pl-4">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-olive)" }}
                >
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h2
                  className="text-xl font-bold uppercase tracking-wide"
                  style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }}
                >
                  Misión
                </h2>
              </div>

              <blockquote
                className="text-sm leading-relaxed pl-4"
                style={{ color: "var(--color-body)", fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                &ldquo;Ofrecer una educación de calidad, inclusiva e integral, que valore el
                entorno natural y promueva prácticas de educación medioambiental; integrando el
                uso pertinente de la tecnología y los aportes de la neurociencia para fortalecer
                los aprendizajes.&rdquo;
              </blockquote>
            </div>

            {/* Visión */}
            <div
              className="bg-white p-8 rounded-lg relative overflow-hidden"
              id="vision"
              style={{ border: "1px solid var(--color-border)", boxShadow: "var(--shadow-sm)" }}
            >
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ backgroundColor: "var(--color-salmon)" }}
              />
              <div className="flex items-center gap-3 mb-6 pl-4">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-salmon)" }}
                >
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2
                  className="text-xl font-bold uppercase tracking-wide"
                  style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }}
                >
                  Visión
                </h2>
              </div>

              <blockquote
                className="text-sm leading-relaxed pl-4"
                style={{ color: "var(--color-body)", fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                &ldquo;Somos una escuela rural multigrado que entrega una educación personalizada,
                inclusiva y respetuosa de la neurodiversidad. Buscamos aprendizajes significativos
                mediante metodologías innovadoras, uso de tecnologías y cuidado del
                medioambiente.&rdquo;
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
