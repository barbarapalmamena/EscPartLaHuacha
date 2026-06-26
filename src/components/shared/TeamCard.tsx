"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  /** Nombre completo del miembro */
  name: string;
  /** Cargo o rol */
  role: string;
  /** Ruta de imagen de perfil */
  imageSrc?: string;
  /** Índice para escalonar animaciones */
  index?: number;
}

/**
 * Tarjeta de miembro del equipo docente/administrativo.
 */
export function TeamCard({ name, role, imageSrc, index = 0 }: TeamCardProps) {
  // Obtiene las iniciales del nombre para el avatar de respaldo
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="card-surface p-6 flex flex-col items-center text-center gap-4 group hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: "rgba(127,119,221,0.15)" }}
    >
      {/* Avatar */}
      <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`Foto de ${name}`}
            fill
            className="object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-xl font-bold gradient-accent"
            style={{ color: "white" }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Nombre */}
      <div>
        <h3
          className="text-base font-semibold leading-snug"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
        >
          {name}
        </h3>
        <p
          className="text-sm mt-1 leading-tight"
          style={{ color: "var(--color-text-muted)" }}
        >
          {role}
        </p>
      </div>

      {/* Línea de acento al hover */}
      <div
        className="h-0.5 w-0 group-hover:w-10 rounded-full gradient-accent transition-all duration-300"
      />
    </motion.div>
  );
}
