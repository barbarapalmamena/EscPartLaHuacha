"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Color de la línea divisoria: "olive" | "salmon" | "gold" */
  accentColor?: "olive" | "salmon" | "gold";
}

const accentColorMap = {
  olive: "var(--color-olive)",
  salmon: "var(--color-salmon)",
  gold: "var(--color-gold)",
};

/**
 * Título de sección reutilizable.
 * Estilo fiel al sitio original: texto en mayúsculas con línea separadora de color.
 */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  accentColor = "salmon",
}: SectionTitleProps) {
  const isCenter = align === "center";
  const lineColor = accentColorMap[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${isCenter ? "text-center items-center" : "text-left items-start"} flex flex-col ${className}`}
    >
      {eyebrow && (
        <span
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
          style={{ color: "var(--color-olive)", fontFamily: "var(--font-heading)" }}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wider leading-tight"
        style={{
          color: "var(--color-heading)",
          fontFamily: "var(--font-heading)",
        }}
      >
        {title}
      </h2>

      {/* Línea separadora — igual que el sitio original */}
      <div className={`flex items-center gap-2 mt-3 mb-1 ${isCenter ? "justify-center" : ""}`}>
        <div className="h-0.5 w-10 rounded-full" style={{ backgroundColor: lineColor }} />
        <div className="h-0.5 w-4 rounded-full" style={{ backgroundColor: lineColor, opacity: 0.4 }} />
      </div>

      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""}`}
          style={{ color: "var(--color-body)" }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
