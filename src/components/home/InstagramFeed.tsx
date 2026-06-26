"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

// Ícono SVG de Instagram
const InstagramIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Posts que reflejan el contenido real de @esc_la_huacha
const instagramPosts = [
  {
    id: "post-1",
    caption: "🎬 PRONTO en YouTube... Próximo contenido audiovisual de nuestra escuela. #EscuelaLaHuacha",
    likes: 48,
    comments: 7,
    bg: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
    emoji: "🎬",
    label: "PRONTO...",
  },
  {
    id: "post-2",
    caption: "🎓 Talleres y actividades especiales con nuestros estudiantes. #EducaciónRural #Frutillar",
    likes: 62,
    comments: 12,
    bg: "linear-gradient(135deg, #2a4a7a, #1a3a6a)",
    emoji: "🎓",
    label: "ESTUBIA",
  },
  {
    id: "post-3",
    caption: "🚔 Feliz Día del Carabinero. Reconociendo a quienes nos protegen. #Carabineros",
    likes: 94,
    comments: 18,
    bg: "linear-gradient(135deg, #1a3a1a, #2a5a2a)",
    emoji: "🚔",
    label: "FELIZ DÍA",
  },
  {
    id: "post-4",
    caption: "⚽ Actividades de Educación Física. El deporte une a nuestra comunidad. #DeporteEscolar",
    likes: 55,
    comments: 9,
    bg: "linear-gradient(135deg, #3a1a6a, #5a2a9a)",
    emoji: "⚽",
    label: "ESTUDIO",
  },
  {
    id: "post-5",
    caption: "💻 Escuela Particular N° 240 — Aprendizaje con nuevas tecnologías. #Innovación",
    likes: 77,
    comments: 14,
    bg: "linear-gradient(135deg, #2a2a4a, #4a4a8a)",
    emoji: "🏫",
    label: "N° 240",
  },
  {
    id: "post-6",
    caption: "🌿 EDUCACIÓN RURAL — Orgullosos de nuestra identidad y entorno natural. #IdentidadRural",
    likes: 110,
    comments: 23,
    bg: "linear-gradient(135deg, #2a2a5a, #4a3a7a)",
    emoji: "🌿",
    label: "EDUCACIÓN RURAL",
  },
];

export function InstagramFeed() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-bg)" }}
      id="instagram"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header del feed — igual que el sitio real */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          {/* Avatar de cuenta */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl font-bold"
            style={{
              background: "linear-gradient(135deg, var(--color-navy), var(--color-olive))",
              fontFamily: "var(--font-heading)",
            }}
          >
            ESC
          </div>
          <div>
            <p
              className="text-base font-bold"
              style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }}
            >
              esc_la_huacha
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--color-body)" }}>
              Educación personalizada con grupos pequeños 📚 Tecnología + aprendizaje práctico 📲 Atención cercana a cada estudiante
            </p>
          </div>
        </div>

        <SectionTitle
          title="Síguenos en Instagram"
          align="center"
          accentColor="salmon"
          className="mb-10"
        />

        {/* Grid de posts — igual que el sitio real */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-8">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              id={post.id}
              href="https://www.instagram.com/esc_la_huacha/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded overflow-hidden group cursor-pointer"
              style={{ background: post.bg }}
            >
              {/* Contenido del post */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl">{post.emoji}</span>
              </div>

              {/* Label visible */}
              <div className="absolute bottom-2 left-2 right-2">
                <span
                  className="text-xs font-bold text-white uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-heading)", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
                >
                  {post.label}
                </span>
              </div>

              {/* Overlay al hover */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 text-center"
                style={{ backgroundColor: "rgba(0,25,46,0.88)" }}
              >
                <p className="text-xs leading-snug text-white line-clamp-3">{post.caption}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-xs text-white/80">
                    <Heart className="w-3 h-3 text-red-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/80">
                    <MessageCircle className="w-3 h-3" style={{ color: "var(--color-olive)" }} />
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Botones de acción — igual que el sitio real */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            id="instagram-ver-mas"
            href="https://www.instagram.com/esc_la_huacha/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ver más...
          </a>
          <a
            id="instagram-seguir"
            href="https://www.instagram.com/esc_la_huacha/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              fontFamily: "var(--font-heading)",
            }}
          >
            <InstagramIcon className="w-4 h-4" />
            Síguenos en Instagram
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
