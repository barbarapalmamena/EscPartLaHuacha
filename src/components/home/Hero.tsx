"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, BookOpen, MapPin } from "lucide-react";

// Estadísticas para el hero
const stats = [
  { icon: BookOpen, label: "1° a 6° Básico", value: "6 Cursos" },
  { icon: Users, label: "Matrícula máx.", value: "23 Alumnos" },
  { icon: MapPin, label: "Desde 1953", value: "Frutillar" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="inicio">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/hero-background.jpg"
          alt="Entorno natural de la Escuela La Huacha en Frutillar"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay oscuro de navy sobre la imagen */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,25,46,0.90) 0%, rgba(0,25,46,0.75) 55%, rgba(0,25,46,0.88) 100%)",
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded"
                style={{
                  color: "var(--color-olive)",
                  backgroundColor: "rgba(138,143,106,0.15)",
                  border: "1px solid rgba(138,143,106,0.4)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ backgroundColor: "var(--color-olive)" }}
                />
                Escuela Particular N° 240 · Frutillar
              </span>
            </motion.div>

            {/* Título — estilo del sitio real: texto en mayúsculas con highlight */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight uppercase"
              style={{
                color: "white",
                fontFamily: "var(--font-heading)",
              }}
            >
              &ldquo;Educando con{" "}
              <span
                className="px-1"
                style={{
                  backgroundColor: "var(--color-salmon)",
                  color: "white",
                  display: "inline",
                }}
              >
                Compromiso, Inclusión e Identidad Rural
              </span>{" "}
              en Frutillar.&rdquo;
            </motion.h1>

            {/* Bajada */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}
            >
              Somos una escuela multigrado en el sector La Huacha, Frutillar, comprometida
              con una educación personalizada, inclusiva y gratuita para niños de 1° a 6° básico.
            </motion.p>

            {/* Badges de características */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {["Colegio mixto", "1° a 6° básico", "Educación gratuita"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full"
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--color-olive)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-3 h-3">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </span>
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Link
                id="hero-cta-admision"
                href="/admision-2026"
                className="btn-salmon inline-flex items-center gap-2"
              >
                Admisión 2026
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                id="hero-cta-contacto"
                href="/contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                style={{
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Contáctanos
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(138,143,106,0.2)", border: "1px solid rgba(138,143,106,0.3)" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "var(--color-olive)" }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                        {stat.value}
                      </p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: "rgba(138,143,106,0.5)" }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--color-olive)" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
