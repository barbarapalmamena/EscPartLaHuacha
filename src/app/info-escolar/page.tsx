import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { DocumentCardButton } from "@/components/shared/DocumentCardButton";
import { FileText, ExternalLink, Clock, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Información Escolar",
  description:
    "Reglamentos, horarios y documentos institucionales de la Escuela Particular N° 240 La Huacha, Frutillar.",
  openGraph: {
    title: "Información Escolar | Escuela La Huacha",
    description:
      "Accede a los reglamentos y horarios institucionales de la Escuela La Huacha.",
  },
};

// Documentos institucionales disponibles
const documents = [
  {
    id: "doc-reglamento-interno",
    title: "Reglamento Interno",
    description:
      "Normas de convivencia, derechos y deberes de la comunidad escolar.",
    icon: FileText,
    type: "PDF",
    status: "Disponible",
  },
  {
    id: "doc-reglamento-evaluacion",
    title: "Reglamento de Evaluación",
    description:
      "Criterios de evaluación, calificaciones y promoción de estudiantes.",
    icon: BookOpen,
    type: "PDF",
    status: "Disponible",
  },
  {
    id: "doc-horario",
    title: "Horario de Clases 2025",
    description:
      "Distribución horaria de asignaturas y actividades para el año escolar.",
    icon: Clock,
    type: "PDF",
    status: "Disponible",
  },
];

// Información sobre el calendario escolar
const calendarInfo = [
  { label: "Inicio año escolar", value: "Primer día hábil de marzo" },
  { label: "Receso invernal", value: "Julio (dos semanas)" },
  { label: "Fin año escolar", value: "Mediados de diciembre" },
  { label: "Horario entrada", value: "08:30 hrs" },
  { label: "Horario salida", value: "14:00 hrs (lunes a viernes)" },
];

export default function InfoEscolarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Comunidad escolar"
        title="Información Escolar"
        description="Documentos, reglamentos y horarios oficiales del establecimiento para el año escolar."
      />

      <div
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {/* Documentos */}
          <section>
            <SectionTitle
              eyebrow="Documentos"
              title="Reglamentos y Documentos Oficiales"
              description="Aquí encontrarás los documentos institucionales del establecimiento."
              align="center"
              className="mb-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {documents.map((doc) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={doc.id}
                    id={doc.id}
                    className="card-surface p-6 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300"
                  >
                    {/* Ícono y badge */}
                    <div className="flex items-start justify-between">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center gradient-accent"
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          color: "var(--color-accent)",
                          backgroundColor: "rgba(127,119,221,0.1)",
                          border: "1px solid rgba(127,119,221,0.2)",
                        }}
                      >
                        {doc.type}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3
                        className="text-base font-semibold mb-1"
                        style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
                      >
                        {doc.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {doc.description}
                      </p>
                    </div>

                    <DocumentCardButton
                      id={`${doc.id}-download`}
                      title={doc.title}
                    />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Calendario escolar */}
          <section>
            <SectionTitle
              eyebrow="Calendario"
              title="Año Escolar 2025"
              description="Fechas y horarios importantes para el año académico en curso."
              align="center"
              className="mb-10"
            />

            <div className="card-surface rounded-2xl overflow-hidden">
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: "var(--color-border)" }}
              >
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Información general del calendario escolar
                </h3>
              </div>
              <div className="divide-y" style={{ borderColor: "var(--color-border)" }}>
                {calendarInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-6 py-4"
                    style={{
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-xs text-center mt-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Los horarios pueden variar según calendario MINEDUC. Consulta actualizaciones con la dirección del establecimiento.
            </p>
          </section>

          {/* Enlace externo MINEDUC */}
          <section className="text-center">
            <div
              className="card-surface p-6 rounded-2xl inline-flex flex-col items-center gap-4"
            >
              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                Para más información sobre el sistema escolar chileno
              </p>
              <a
                id="mineduc-link"
                href="https://www.mineduc.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: "var(--color-accent)" }}
              >
                Visitar MINEDUC
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
