"use client";

import { motion } from "framer-motion";
import { Heart, Cpu, Users, TreePine, Star, Globe } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

// Los 6 pilares educativos — con la paleta real
const features = [
  {
    id: "feature-grupos",
    icon: Users,
    title: "Grupos Pequeños",
    description:
      "Con matrícula máxima de 23 estudiantes, cada niño recibe atención personalizada y cercana de nuestros docentes.",
    iconBg: "var(--color-olive)",
  },
  {
    id: "feature-tecnologia",
    icon: Cpu,
    title: "Tecnología e Innovación",
    description:
      "Integramos tecnología y aportes de la neurociencia para fortalecer el aprendizaje de manera innovadora y efectiva.",
    iconBg: "var(--color-navy)",
  },
  {
    id: "feature-inclusion",
    icon: Heart,
    title: "Educación Inclusiva",
    description:
      "Somos respetuosos de la neurodiversidad. Contamos con programa PIE para integrar a todos los estudiantes.",
    iconBg: "var(--color-salmon)",
  },
  {
    id: "feature-rural",
    icon: TreePine,
    title: "Identidad Rural",
    description:
      "Valoramos nuestro entorno natural y promovemos la educación medioambiental como parte del aprendizaje cotidiano.",
    iconBg: "var(--color-olive)",
  },
  {
    id: "feature-gratuita",
    icon: Star,
    title: "Educación Gratuita",
    description:
      "Ofrecemos educación completamente gratuita para niños de 1° a 6° básico en el sector La Huacha, Frutillar.",
    iconBg: "var(--color-gold)",
  },
  {
    id: "feature-integral",
    icon: Globe,
    title: "Formación Integral",
    description:
      "Buscamos aprendizajes significativos mediante metodologías innovadoras que desarrollan habilidades para la vida.",
    iconBg: "var(--color-navy)",
  },
];

export function Features() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-bg)" }}
      id="caracteristicas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nuestros pilares"
          title="¿Por qué elegirnos?"
          description="Una educación diseñada para que cada niño descubra su potencial en un ambiente acogedor, inclusivo e innovador."
          align="center"
          accentColor="salmon"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                id={feature.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4, boxShadow: "var(--shadow-md)" }}
                className="group bg-white p-6 flex flex-col gap-4 rounded-lg transition-all duration-300 cursor-default"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* Ícono con fondo de color */}
                <div
                  className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3
                    className="text-sm font-bold uppercase tracking-wide mb-2"
                    style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
                    {feature.description}
                  </p>
                </div>

                {/* Línea olive al hover */}
                <div
                  className="h-0.5 w-0 group-hover:w-8 rounded-full transition-all duration-300 mt-auto"
                  style={{ backgroundColor: "var(--color-olive)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
