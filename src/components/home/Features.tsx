"use client";

import { motion } from "framer-motion";
import { Heart, Cpu, Users, TreePine, Star, Globe } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

// Los pilares educativos de la escuela
const features = [
  {
    id: "feature-grupos",
    icon: Users,
    title: "Grupos Pequeños",
    description:
      "Con matrícula máxima de 23 estudiantes, cada niño recibe atención personalizada y cercana de nuestros docentes.",
    color: "rgba(127,119,221,0.12)",
    iconColor: "var(--color-accent)",
  },
  {
    id: "feature-tecnologia",
    icon: Cpu,
    title: "Tecnología e Innovación",
    description:
      "Integramos tecnología y aportes de la neurociencia para fortalecer el aprendizaje de manera innovadora y efectiva.",
    color: "rgba(175,169,236,0.12)",
    iconColor: "var(--color-accent-soft)",
  },
  {
    id: "feature-inclusion",
    icon: Heart,
    title: "Educación Inclusiva",
    description:
      "Somos respetuosos de la neurodiversidad. Contamos con programa PIE para integrar a todos los estudiantes.",
    color: "rgba(127,119,221,0.08)",
    iconColor: "var(--color-accent)",
  },
  {
    id: "feature-rural",
    icon: TreePine,
    title: "Identidad Rural",
    description:
      "Valoramos nuestro entorno natural y promovemos la educación medioambiental como parte del aprendizaje cotidiano.",
    color: "rgba(175,169,236,0.08)",
    iconColor: "var(--color-accent-soft)",
  },
  {
    id: "feature-gratuita",
    icon: Star,
    title: "Educación Gratuita",
    description:
      "Ofrecemos educación completamente gratuita para niños de 1° a 6° básico en el sector La Huacha, Frutillar.",
    color: "rgba(127,119,221,0.12)",
    iconColor: "var(--color-accent)",
  },
  {
    id: "feature-integral",
    icon: Globe,
    title: "Formación Integral",
    description:
      "Buscamos aprendizajes significativos mediante metodologías innovadoras que desarrollan habilidades para la vida.",
    color: "rgba(175,169,236,0.12)",
    iconColor: "var(--color-accent-soft)",
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
          eyebrow="Nuestros Pilares"
          title="¿Por qué elegirnos?"
          description="Una educación diseñada para que cada niño descubra su potencial en un ambiente acogedor, inclusivo e innovador."
          align="center"
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
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="card-surface p-6 flex flex-col gap-4 group cursor-default transition-all duration-300 hover:shadow-xl"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Ícono */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: feature.color,
                    border: `1px solid rgba(127,119,221,0.15)`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.iconColor }} />
                </div>

                {/* Texto */}
                <div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{
                      color: "var(--color-text)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {feature.description}
                  </p>
                </div>

                {/* Línea de acento al hover */}
                <div
                  className="h-0.5 w-0 group-hover:w-8 rounded-full gradient-accent transition-all duration-300 mt-auto"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
