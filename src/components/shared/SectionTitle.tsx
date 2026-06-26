"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  /** Texto pequeño sobre el título principal */
  eyebrow?: string;
  /** Título principal */
  title: string;
  /** Descripción opcional */
  description?: string;
  /** Alineación del texto */
  align?: "left" | "center";
  /** Clase adicional */
  className?: string;
}

/**
 * Componente de título de sección reutilizable.
 * Incluye animación de entrada y línea de acento.
 */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${isCenter ? "text-center items-center" : "text-left items-start"} flex flex-col ${className}`}
    >
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-[0.15em] mb-3 px-3 py-1 rounded-full"
          style={{
            color: "var(--color-accent)",
            backgroundColor: "rgba(127, 119, 221, 0.12)",
            border: "1px solid rgba(127, 119, 221, 0.2)",
          }}
        >
          {eyebrow}
        </span>
      )}

      {/* Línea decorativa */}
      {!eyebrow && (
        <div
          className={`h-1 w-10 rounded-full mb-4 gradient-accent ${isCenter ? "mx-auto" : ""}`}
        />
      )}

      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
        style={{
          color: "var(--color-text)",
          fontFamily: "var(--font-display)",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""}`}
          style={{ color: "var(--color-text-muted)" }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
