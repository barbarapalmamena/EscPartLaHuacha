"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

// Íconos SVG de redes sociales (no disponibles en lucide-react v1.21)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nuestro Equipo", href: "/quienes-somos/equipo-de-trabajo" },
  { label: "Contáctanos", href: "/contacto" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-navy)" }}>
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Columna 1 — Marca */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-olive)" }}
            >
              Escuela Particular N° 240
            </p>
            <h3
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              La Huacha
            </h3>
            <blockquote
              className="text-sm italic mb-6 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-serif)" }}
            >
              &ldquo;Somos una escuela pequeña, con grandes aprendizajes.&rdquo;
            </blockquote>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--color-olive)" }} />
                <span style={{ color: "rgba(255,255,255,0.6)" }}>
                  Lomas de la piedra s/n, Frutillar – X Región de Los Lagos
                </span>
              </div>
            </div>
          </div>

          {/* Columna 2 — Hablemos */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest text-white mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hablemos
            </h4>
            <p className="text-xs mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Puedes contactarnos a nuestro teléfono o Email detallados a continuación y te
              responderemos a la brevedad.
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "var(--color-olive)" }}
                >
                  Fono Contacto
                </p>
                <a
                  id="footer-phone"
                  href="tel:+56942507098"
                  className="flex items-center gap-2 text-sm text-white transition-colors hover:opacity-80"
                >
                  <Phone className="w-4 h-4" style={{ color: "var(--color-gold)" }} />
                  +56 9 4250 7098
                </a>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "var(--color-olive)" }}
                >
                  Correo Electrónico
                </p>
                <a
                  id="footer-email"
                  href="mailto:contacto@escuelalahuacha.cl"
                  className="flex items-center gap-2 text-sm text-white transition-colors hover:opacity-80"
                >
                  <Mail className="w-4 h-4" style={{ color: "var(--color-gold)" }} />
                  contacto@escuelalahuacha.cl
                </a>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-3 mt-6">
              <a
                id="footer-facebook"
                href="https://web.facebook.com/profile.php?id=61585422892732"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "#1877F2" }}
              >
                <FacebookIcon className="w-4 h-4 text-white" />
              </a>
              <a
                id="footer-instagram"
                href="https://www.instagram.com/esc_la_huacha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
              >
                <InstagramIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Columna 3 — Links */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest text-white mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-olive)" }} />
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Barra de copyright */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Escuela Particular N° 240 La Huacha {currentYear} © — Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Frutillar · X Región de Los Lagos · Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
