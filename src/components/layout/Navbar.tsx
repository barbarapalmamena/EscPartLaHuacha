"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, School } from "lucide-react";

// Estructura de navegación principal
const navLinks = [
  { label: "Inicio", href: "/" },
  {
    label: "¿Quiénes Somos?",
    href: "#",
    children: [
      { label: "Misión y Visión", href: "/quienes-somos/mision-y-vision" },
      { label: "Equipo de Trabajo", href: "/quienes-somos/equipo-de-trabajo" },
    ],
  },
  { label: "Info Escolar", href: "/info-escolar" },
  { label: "Admisión 2026", href: "/admision-2026" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detectar scroll para cambiar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              backgroundColor: "rgba(22, 22, 26, 0.95)",
              backdropFilter: "blur(12px)",
              borderColor: "var(--color-border)",
            }
          : {}
      }
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            id="nav-logo"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 gradient-accent transition-transform group-hover:scale-105"
            >
              <School className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-medium" style={{ color: "var(--color-accent-soft)" }}>
                Escuela Particular N° 240
              </p>
              <p className="text-sm font-bold" style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}>
                La Huacha
              </p>
            </div>
          </Link>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    id={`nav-dropdown-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(127, 119, 221, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-52 rounded-xl overflow-hidden shadow-xl transition-all duration-200 ${
                      openDropdown === link.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        id={`nav-${child.label.toLowerCase().replace(/\s/g, "-")}`}
                        className="block px-4 py-3 text-sm transition-all duration-150"
                        style={{ color: "var(--color-text-muted)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(127, 119, 221, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
                          (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color: pathname === link.href ? "var(--color-accent)" : "var(--color-text-muted)",
                    backgroundColor: pathname === link.href ? "rgba(127, 119, 221, 0.1)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== link.href) {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(127, 119, 221, 0.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.href) {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Link
              href="/admision-2026"
              id="nav-cta-admision"
              className="px-5 py-2 text-sm font-semibold rounded-xl gradient-accent text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
            >
              Admisión 2026
            </Link>
          </div>

          {/* Botón hamburger móvil */}
          <button
            id="nav-mobile-toggle"
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "var(--color-text)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div
            className="md:hidden pb-6 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg"
                      style={{ color: "var(--color-text)" }}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-4 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="px-4 py-2.5 text-sm rounded-lg"
                            style={{ color: "var(--color-text-muted)" }}
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
                    className="px-4 py-3 text-sm font-medium rounded-lg"
                    style={{
                      color: pathname === link.href ? "var(--color-accent)" : "var(--color-text)",
                      backgroundColor: pathname === link.href ? "rgba(127, 119, 221, 0.1)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/admision-2026"
                className="mx-4 mt-2 py-3 text-sm font-semibold rounded-xl gradient-accent text-white text-center"
              >
                Admisión 2026
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
