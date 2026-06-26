"use client";

import React from "react";

import { motion } from "framer-motion";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";

// Ícono SVG personalizado de Instagram
const InstagramIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import { SectionTitle } from "@/components/shared/SectionTitle";

// Posts simulados representativos de la cuenta @esc_la_huacha
const instagramPosts = [
  {
    id: "post-1",
    caption: "🌿 Aprendizaje al aire libre. Nuestros estudiantes explorando la naturaleza del sector La Huacha. #EscuelaRural #LoLagos",
    likes: 48,
    comments: 7,
    bg: "linear-gradient(135deg, #2d5016, #4a7c25)",
    emoji: "🌿",
  },
  {
    id: "post-2",
    caption: "📚 Dia de lectura en clases. Cada libro es una aventura nueva. #EducaciónInclusiva #Lectura",
    likes: 62,
    comments: 12,
    bg: "linear-gradient(135deg, #1a1a4e, #7f77dd)",
    emoji: "📚",
  },
  {
    id: "post-3",
    caption: "🎨 Taller de arte y expresión creativa. Los más pequeños demuestran su talento. #Creatividad #Arte",
    likes: 94,
    comments: 18,
    bg: "linear-gradient(135deg, #4a1942, #c87dd4)",
    emoji: "🎨",
  },
  {
    id: "post-4",
    caption: "⚽ Educación física y juego en equipo. El deporte fortalece cuerpo y mente. #DeporteEscolar",
    likes: 55,
    comments: 9,
    bg: "linear-gradient(135deg, #0d3d56, #1a9bbf)",
    emoji: "⚽",
  },
  {
    id: "post-5",
    caption: "💻 Tecnología en el aula. Aprendiendo con herramientas digitales modernas. #Tecnología #Innovación",
    likes: 77,
    comments: 14,
    bg: "linear-gradient(135deg, #2c1810, #c4712e)",
    emoji: "💻",
  },
  {
    id: "post-6",
    caption: "🏫 Nuestra hermosa escuela en plena naturaleza. Orgullosos de nuestra identidad rural. #LaHuacha",
    likes: 110,
    comments: 23,
    bg: "linear-gradient(135deg, #1a3a1a, #5a8f3c)",
    emoji: "🏫",
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
        <SectionTitle
          eyebrow="Redes sociales"
          title="Síguenos en Instagram"
          description="Conoce el día a día de nuestra comunidad escolar. Compartimos nuestras actividades, logros y momentos especiales."
          align="center"
          className="mb-12"
        />

        {/* Grid de posts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              id={post.id}
              href="https://www.instagram.com/esc_la_huacha/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              style={{ background: post.bg }}
            >
              {/* Emoji grande como contenido */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl sm:text-6xl">{post.emoji}</span>
              </div>

              {/* Overlay con información al hover */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center"
                style={{ backgroundColor: "rgba(22,22,26,0.85)" }}
              >
                <p
                  className="text-xs leading-snug line-clamp-3"
                  style={{ color: "var(--color-text)" }}
                >
                  {post.caption}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
                    <Heart className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
                    <MessageCircle className="w-3 h-3" style={{ color: "var(--color-accent-soft)" }} />
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA a Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <a
            id="instagram-profile-link"
            href="https://www.instagram.com/esc_la_huacha/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 group"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
            }}
          >
            <InstagramIcon className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
            @esc_la_huacha
            <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
