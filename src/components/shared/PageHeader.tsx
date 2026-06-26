"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

/**
 * Encabezado para subpáginas internas.
 * Fondo navy con imagen overlay — igual que el sitio original.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = "Banner de página",
}: PageHeaderProps) {
  return (
    <section
      className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(0,25,46,0.95) 0%, rgba(0,42,74,0.95) 100%)",
      }}
    >
      {/* Imagen de fondo con overlay navy más ligero */}
      {imageSrc && (
        <>
          <div className="absolute inset-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,25,46,0.60) 0%, rgba(0,25,46,0.85) 100%)",
            }}
          />
        </>
      )}

      {/* Contenido centrado */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded"
              style={{
                color: "var(--color-olive)",
                backgroundColor: "rgba(138,143,106,0.15)",
                border: "1px solid rgba(138,143,106,0.3)",
                fontFamily: "var(--font-heading)",
              }}
            >
              {eyebrow}
            </span>
          )}

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight mb-4 text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>

          {/* Línea separadora decorativa */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-10 rounded-full" style={{ backgroundColor: "var(--color-salmon)" }} />
            <div className="h-0.5 w-4 rounded-full opacity-40" style={{ backgroundColor: "var(--color-salmon)" }} />
          </div>

          {description && (
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}
            >
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
