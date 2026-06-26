"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

// Estructura de navegación principal — refleja la del sitio real
const navLinks = [
  { label: "Inicio", href: "/" },
  {
    label: "Quiénes Somos",
    href: "#",
    children: [
      { label: "Misión y Visión", href: "/quienes-somos/mision-y-vision" },
      { label: "Equipo de Trabajo", href: "/quienes-somos/equipo-de-trabajo" },
    ],
  },
  { label: "Info Escolar", href: "/info-escolar" },
  { label: "Contacto", href: "/contacto" },
  { label: "Admisión 2026", href: "/admision-2026" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "var(--color-navy)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0" id="nav-logo">
            <div
              className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 border-2 transition-transform group-hover:scale-105"
              style={{ borderColor: "var(--color-olive)", backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Image
                src="/logo.png"
                alt="Logo Escuela La Huacha"
                width={40}
                height={40}
                className="object-contain"
                onError={() => {/* fallback handled below */}}
              />
            </div>
            <div className="leading-tight hidden sm:block">
              <p
                className="text-xs font-medium tracking-wide"
                style={{ color: "var(--color-olive)", fontFamily: "var(--font-heading)" }}
              >
                Escuela Particular N° 240
              </p>
              <p
                className="text-sm font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                La Huacha
              </p>
            </div>
          </Link>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    id={`nav-dropdown-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center gap-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-150"
                    style={{
                      color: openDropdown === link.label ? "var(--color-gold)" : "rgba(255,255,255,0.85)",
                      fontFamily: "var(--font-heading)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--color-gold)")
                    }
                    onMouseLeave={(e) => {
                      if (openDropdown !== link.label)
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {openDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-0 w-56 overflow-hidden shadow-xl"
                      style={{ backgroundColor: "var(--color-navy-dark)" }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          id={`nav-${child.label.toLowerCase().replace(/\s/g, "-")}`}
                          className="block px-5 py-3 text-xs font-medium uppercase tracking-wide transition-colors duration-150 border-l-2 border-transparent"
                          style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-heading)" }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "white";
                            (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--color-olive)";
                            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                            (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
                            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.label === "Admisión 2026" ? (
                // El CTA de admisión con estilo especial
                <Link
                  key={link.href}
                  href={link.href}
                  id="nav-admision"
                  className="ml-3 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                  style={{
                    backgroundColor: "var(--color-salmon)",
                    color: "white",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Admisión 2026
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-150"
                  style={{
                    color: pathname === link.href ? "var(--color-gold)" : "rgba(255,255,255,0.85)",
                    fontFamily: "var(--font-heading)",
                    borderBottom: pathname === link.href ? "2px solid var(--color-olive)" : "2px solid transparent",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--color-gold)")
                  }
                  onMouseLeave={(e) => {
                    if (pathname !== link.href)
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Hamburger móvil */}
          <button
            id="nav-mobile-toggle"
            className="md:hidden p-2 rounded transition-colors text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div
            className="md:hidden pb-4 border-t border-white/10"
          >
            <div className="flex flex-col">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div style={{ backgroundColor: "var(--color-navy-dark)" }}>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-8 py-3 text-xs uppercase tracking-wide"
                            style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-heading)" }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider ${
                      link.label === "Admisión 2026" ? "mt-2 mx-4 rounded text-center" : ""
                    }`}
                    style={{
                      color: link.label === "Admisión 2026" ? "white" : "rgba(255,255,255,0.85)",
                      backgroundColor: link.label === "Admisión 2026" ? "var(--color-salmon)" : "transparent",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
