import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { CheckCircle2, AlertCircle, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admisión 2026",
  description:
    "Información sobre el proceso de admisión 2026 de la Escuela Particular N° 240 La Huacha. Requisitos y documentación necesaria para postular.",
  openGraph: {
    title: "Admisión 2026 | Escuela La Huacha",
    description:
      "Conoce los requisitos y documentación necesaria para postular a la Escuela La Huacha en Frutillar para el año 2026.",
  },
};

// Documentos requeridos para el proceso de admisión
const requirements = [
  {
    id: "req-antecedentes",
    doc: "Certificado de Antecedentes",
    detail: "Del apoderado o tutor legal del estudiante.",
    forLevel: "Todos los niveles",
  },
  {
    id: "req-estudios",
    doc: "Último Certificado Anual de Estudios",
    detail: "Correspondiente al año académico anterior.",
    forLevel: "2° a 5° Básico",
  },
  {
    id: "req-jardin",
    doc: "Certificado de Egreso de Jardín Infantil",
    detail: "Emitido por el establecimiento de educación parvularia.",
    forLevel: "1° Básico",
  },
  {
    id: "req-nee",
    doc: "Informe de NEE (si corresponde)",
    detail: "Informe diagnóstico de Necesidades Educativas Especiales vigente.",
    forLevel: "Todos los niveles",
  },
];

export default function AdmisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proceso de admisión"
        title="Admisión 2026"
        description="¿Quieres que tu hijo sea parte de nuestra comunidad escolar? Conoce los requisitos del proceso de admisión."
      />

      <div
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {/* Descripción general */}
          <section>
            <SectionTitle
              eyebrow="¿Cómo postular?"
              title="Requisitos de Admisión"
              description="Para ingresar a nuestra escuela, debes presentar los siguientes documentos en la dirección del establecimiento."
              align="center"
              className="mb-10"
            />

            {/* Alerta informativa */}
            <div
              className="flex items-start gap-4 p-5 rounded-2xl mb-8"
              style={{
                backgroundColor: "rgba(127,119,221,0.08)",
                border: "1px solid rgba(127,119,221,0.2)",
              }}
            >
              <AlertCircle
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: "var(--color-accent)" }}
              />
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                El proceso de admisión está sujeto a la disponibilidad de vacantes. Nuestra
                matrícula máxima es de{" "}
                <strong style={{ color: "var(--color-text)" }}>23 estudiantes</strong>.
                Te recomendamos contactarnos antes de iniciar el proceso para confirmar
                disponibilidad.
              </p>
            </div>

            {/* Lista de documentos */}
            <div className="flex flex-col gap-4">
              {requirements.map((req) => (
                <div
                  key={req.id}
                  id={req.id}
                  className="card-surface p-6 rounded-2xl flex items-start gap-5"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 gradient-accent"
                  >
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3
                        className="text-base font-semibold"
                        style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
                      >
                        {req.doc}
                      </h3>
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{
                          color: "var(--color-accent-soft)",
                          backgroundColor: "rgba(127,119,221,0.1)",
                          border: "1px solid rgba(127,119,221,0.15)",
                        }}
                      >
                        {req.forLevel}
                      </span>
                    </div>
                    <p
                      className="text-sm mt-1 leading-relaxed"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {req.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pasos del proceso */}
          <section>
            <SectionTitle
              eyebrow="Proceso"
              title="¿Cómo es el proceso?"
              align="center"
              className="mb-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Consulta disponibilidad",
                  desc: "Contáctanos para verificar si hay vacantes disponibles para el nivel que necesitas.",
                },
                {
                  step: "02",
                  title: "Presenta documentos",
                  desc: "Reúne y entrega los documentos requeridos en la dirección de la escuela.",
                },
                {
                  step: "03",
                  title: "Confirmación de matrícula",
                  desc: "Una vez revisada la documentación, se confirma la matrícula del estudiante.",
                },
              ].map((step) => (
                <div
                  key={step.step}
                  className="card-surface p-6 rounded-2xl flex flex-col gap-4"
                >
                  <span
                    className="text-3xl font-bold"
                    style={{
                      color: "rgba(127,119,221,0.3)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {step.step}
                  </span>
                  <div>
                    <h3
                      className="text-base font-semibold mb-2"
                      style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      {step.desc}
                    </p>
                  </div>
                  <CheckCircle2
                    className="w-5 h-5 mt-auto"
                    style={{ color: "var(--color-accent)" }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <section className="text-center">
            <div
              className="card-surface p-8 rounded-2xl"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
              >
                ¿Listo para postular?
              </h3>
              <p
                className="text-sm mb-6 max-w-sm mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                Escríbenos y con gusto te orientamos sobre el proceso de admisión 2026.
              </p>
              <Link
                id="admision-cta-contacto"
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white gradient-accent transition-all duration-200 hover:opacity-90 hover:scale-105"
              >
                Contactar ahora
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
