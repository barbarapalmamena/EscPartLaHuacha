"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeaderProps {
  /** Texto pequeño sobre el título */
  eyebrow?: string;
  /** Título principal de la página */
  title: string;
  /** Descripción de la página */
  description?: string;
  /** Imagen de fondo opcional */
  imageSrc?: string;
  /** Texto alternativo de la imagen */
  imageAlt?: string;
}

/**
 * Encabezado reutilizable para subpáginas internas.
 * Muestra gradiente de fondo + imagen opcional con overlay.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = "Banner de página",
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      {/* Imagen de fondo con overlay */}
      {imageSrc && (
        <>
          <div className="absolute inset-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(22,22,26,0.85) 0%, rgba(22,22,26,0.95) 100%)",
            }}
          />
        </>
      )}

      {/* Gradiente decorativo de fondo cuando no hay imagen */}
      {!imageSrc && (
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at top, rgba(127, 119, 221, 0.1) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Contenido */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {eyebrow && (
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full"
              style={{
                color: "var(--color-accent)",
                backgroundColor: "rgba(127, 119, 221, 0.12)",
                border: "1px solid rgba(127, 119, 221, 0.2)",
              }}
            >
              {eyebrow}
            </span>
          )}

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-display)",
            }}
          >
            {title}
          </h1>

          {description && (
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--color-text-muted)" }}
            >
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
