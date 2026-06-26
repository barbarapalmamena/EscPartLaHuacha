import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Target, Eye, Clock, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Misión y Visión",
  description:
    "Conoce la misión, visión e historia de la Escuela Particular N° 240 La Huacha, fundada en 1953 en Frutillar, Región de Los Lagos.",
  openGraph: {
    title: 'Misión y Visión | Escuela La Huacha',
    description:
      "Ofrecer una educación de calidad, inclusiva e integral, que valore el entorno natural y promueva prácticas de educación medioambiental.",
  },
};

// Datos históricos institucionales
const historyFacts = [
  {
    icon: Clock,
    label: "Fundación",
    value: "04 de agosto de 1953",
  },
  {
    icon: Building,
    label: "Propietaria",
    value: "Sra. Agustina Barría · Corp. Ed. Lomas de la Piedra",
  },
  {
    icon: Target,
    label: "Modalidad",
    value: "Escuela rural multigrado",
  },
  {
    icon: Eye,
    label: "Matrícula autorizada",
    value: "23 estudiantes",
  },
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

      <div
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          {/* Historia */}
          <section>
            <SectionTitle
              eyebrow="Nuestra historia"
              title="Desde 1953 al servicio de la comunidad"
              description="Más de 70 años formando generaciones en el corazón de la Región de Los Lagos."
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {historyFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="card-surface p-6 flex flex-col gap-3 text-center items-center"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center gradient-accent"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ color: "var(--color-accent-soft)" }}
                      >
                        {fact.label}
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--color-text)" }}
                      >
                        {fact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 card-surface p-8 rounded-2xl">
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                La Escuela Particular N° 240 &quot;La Huacha&quot; fue fundada el{" "}
                <strong style={{ color: "var(--color-text)" }}>4 de agosto de 1953</strong> en
                el sector La Huacha, Casma, Frutillar, Región de Los Lagos. A lo largo de sus más
                de 70 años de historia, ha sido un pilar fundamental en la educación de las
                comunidades rurales del sector, adaptándose constantemente a los nuevos desafíos
                pedagógicos sin perder su esencia de cercanía y compromiso con cada familia.
              </p>
              <p className="text-base leading-relaxed mt-4" style={{ color: "var(--color-text-muted)" }}>
                Hoy opera como escuela rural multigrado bajo la administración de la{" "}
                <strong style={{ color: "var(--color-text)" }}>Corporación Educacional &quot;Lomas de la Piedra&quot;</strong>,
                ofreciendo educación gratuita y de calidad para niños de 1° a 6° básico con una
                matrícula autorizada de 23 estudiantes.
              </p>
            </div>
          </section>

          {/* Misión y Visión en cards grandes */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Misión */}
            <div
              className="card-surface p-8 rounded-2xl relative overflow-hidden"
              id="mision"
            >
              {/* Elemento decorativo */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl"
                style={{ backgroundColor: "var(--color-accent)" }}
              />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
                >
                  Misión
                </h2>
              </div>

              <blockquote
                className="text-base leading-relaxed italic border-l-2 pl-5"
                style={{
                  color: "var(--color-text-muted)",
                  borderColor: "var(--color-accent)",
                }}
              >
                &ldquo;Ofrecer una educación de calidad, inclusiva e integral, que valore el
                entorno natural y promueva prácticas de educación medioambiental; integrando el
                uso pertinente de la tecnología y los aportes de la neurociencia para fortalecer
                los aprendizajes.&rdquo;
              </blockquote>
            </div>

            {/* Visión */}
            <div
              className="card-surface p-8 rounded-2xl relative overflow-hidden"
              id="vision"
            >
              {/* Elemento decorativo */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl"
                style={{ backgroundColor: "var(--color-accent-soft)" }}
              />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
                >
                  Visión
                </h2>
              </div>

              <blockquote
                className="text-base leading-relaxed italic border-l-2 pl-5"
                style={{
                  color: "var(--color-text-muted)",
                  borderColor: "var(--color-accent-soft)",
                }}
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
