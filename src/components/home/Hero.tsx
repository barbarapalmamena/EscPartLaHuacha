"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, BookOpen, MapPin } from "lucide-react";

// Datos de estadísticas para el hero
const stats = [
  { icon: BookOpen, label: "1° a 6° Básico", value: "6 Cursos" },
  { icon: Users, label: "Matrícula máx.", value: "23 Alumnos" },
  { icon: MapPin, label: "Desde 1953", value: "Frutillar" },
];

// Variantes de animación para entrada escalonada
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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
        {/* Overlay gradiente oscuro */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(22,22,26,0.92) 0%, rgba(22,22,26,0.78) 50%, rgba(22,22,26,0.88) 100%)",
          }}
        />
      </div>

      {/* Orbes decorativos de acento */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ backgroundColor: "var(--color-accent-soft)" }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge institucional */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full"
                style={{
                  color: "var(--color-accent)",
                  backgroundColor: "rgba(127, 119, 221, 0.12)",
                  border: "1px solid rgba(127, 119, 221, 0.25)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full gradient-accent inline-block" />
                Escuela Particular N° 240 · Frutillar
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-display)",
              }}
            >
              Educando con{" "}
              <span className="text-gradient">compromiso</span>,{" "}
              inclusión e identidad{" "}
              <span className="text-gradient">rural</span>.
            </motion.h1>

            {/* Bajada */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl leading-relaxed max-w-xl"
              style={{ color: "var(--color-text-muted)" }}
            >
              Somos una escuela multigrado en el sector La Huacha, Frutillar,
              comprometida con una educación personalizada, inclusiva y gratuita
              para niños de 1° a 6° básico.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link
                id="hero-cta-admision"
                href="/admision-2026"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white gradient-accent transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
                style={{ boxShadow: "0 4px 20px rgba(127,119,221,0.35)" }}
              >
                Admisión 2026
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                id="hero-cta-contacto"
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  color: "var(--color-text)",
                  backgroundColor: "rgba(240,239,255,0.08)",
                  border: "1px solid rgba(240,239,255,0.15)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(240,239,255,0.12)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(240,239,255,0.08)")
                }
              >
                Contáctanos
              </Link>
            </motion.div>

            {/* Estadísticas */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 pt-4"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "rgba(127,119,221,0.12)",
                        border: "1px solid rgba(127,119,221,0.2)",
                      }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: "var(--color-accent)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold leading-tight"
                        style={{ color: "var(--color-text)" }}
                      >
                        {stat.value}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-muted)" }}
                      >
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

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: "rgba(127,119,221,0.4)" }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
