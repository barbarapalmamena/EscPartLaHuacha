"use client";

import Link from "next/link";
import { School, Phone, Mail, MapPin } from "lucide-react";

// Íconos SVG personalizados para redes sociales (no disponibles en lucide-react v1.21)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Datos de contacto institucionales
const contactInfo = {
  address: "Lomas de la Piedra s/n, Frutillar, X Región de Los Lagos",
  phone: "+56 9 4250 7098",
  email: "contacto@escuelalahuacha.cl",
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/esc_la_huacha/",
    icon: InstagramIcon,
    id: "footer-instagram",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61585422892732",
    icon: FacebookIcon,
    id: "footer-facebook",
  },
];

const footerLinks = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Misión y Visión", href: "/quienes-somos/mision-y-vision" },
      { label: "Equipo de Trabajo", href: "/quienes-somos/equipo-de-trabajo" },
      { label: "Info Escolar", href: "/info-escolar" },
      { label: "Admisión 2026", href: "/admision-2026" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Marca y descripción */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center gradient-accent transition-transform group-hover:scale-105">
                <School className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: "var(--color-accent-soft)" }}>
                  Escuela Particular N° 240
                </p>
                <p
                  className="text-base font-bold"
                  style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
                >
                  La Huacha
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "var(--color-text-muted)" }}>
              Escuela rural multigrado comprometida con la educación inclusiva,
              personalizada y de calidad en el sector La Huacha, Frutillar.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    id={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      backgroundColor: "rgba(127, 119, 221, 0.12)",
                      color: "var(--color-accent-soft)",
                      border: "1px solid var(--color-border)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(127, 119, 221, 0.25)";
                      (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(127, 119, 221, 0.12)";
                      (e.currentTarget as HTMLElement).style.color = "var(--color-accent-soft)";
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links de navegación */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: "var(--color-accent-soft)" }}
              >
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-150"
                      style={{ color: "var(--color-text-muted)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--color-text)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Información de contacto */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--color-accent-soft)" }}
            >
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "var(--color-accent)" }}
                />
                <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "var(--color-accent)" }}
                />
                <a
                  id="footer-phone"
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-sm transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--color-text)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
                  }
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "var(--color-accent)" }}
                />
                <a
                  id="footer-email"
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--color-text)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
                  }
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="text-xs text-center" style={{ color: "var(--color-text-muted)" }}>
            © {currentYear} Escuela Particular N° 240 &quot;La Huacha&quot;. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Fundada en 1953 · Frutillar, Región de Los Lagos
          </p>
        </div>
      </div>
    </footer>
  );
}
