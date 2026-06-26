"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc?: string;
  index?: number;
}

/**
 * Tarjeta de miembro del equipo.
 * Estilo light con avatar olive y hover suave.
 */
export function TeamCard({ name, role, imageSrc, index = 0 }: TeamCardProps) {
  // Iniciales del nombre para el avatar de respaldo
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
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="bg-white p-6 flex flex-col items-center text-center gap-4 rounded-lg group transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
      style={{
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {/* Avatar */}
      <div
        className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
        style={{ border: "3px solid var(--color-border)" }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`Foto de ${name}`}
            fill
            className="object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-xl font-bold text-white"
            style={{
              backgroundColor: "var(--color-navy)",
              fontFamily: "var(--font-heading)",
            }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Nombre y rol */}
      <div>
        <h3
          className="text-sm font-bold leading-snug"
          style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }}
        >
          {name}
        </h3>
        <p
          className="text-xs mt-1 leading-tight"
          style={{ color: "var(--color-olive)" }}
        >
          {role}
        </p>
      </div>

      {/* Línea olive al hover */}
      <div
        className="h-0.5 w-0 group-hover:w-10 rounded-full transition-all duration-300"
        style={{ backgroundColor: "var(--color-olive)" }}
      />
    </motion.div>
  );
}
