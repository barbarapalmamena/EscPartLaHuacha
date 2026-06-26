"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Íconos SVG de redes sociales
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

// Esquema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  phone: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactDetails = [
  {
    id: "contact-phone",
    icon: Phone,
    label: "Fono Contacto",
    value: "+56 9 4250 7098",
    href: "tel:+56942507098",
  },
  {
    id: "contact-email",
    icon: Mail,
    label: "Correo Electrónico",
    value: "contacto@escuelalahuacha.cl",
    href: "mailto:contacto@escuelalahuacha.cl",
  },
  {
    id: "contact-address",
    icon: MapPin,
    label: "Dirección",
    value: "Lomas de la Piedra s/n, Frutillar",
    href: "https://maps.google.com/?q=Frutillar,+Chile",
  },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.info("Formulario enviado:", data); // eslint-disable-line no-console
    setSubmitted(true);
    reset();
  };

  // Estilo reutilizable para inputs
  const inputStyle = (hasError: boolean) => ({
    width: "100%",
    padding: "0.6rem 0.875rem",
    border: `1px solid ${hasError ? "#e53e3e" : "var(--color-border)"}`,
    borderRadius: "4px",
    fontSize: "0.8125rem",
    color: "var(--color-heading)",
    backgroundColor: "white",
    outline: "none",
    fontFamily: "var(--font-body)",
    transition: "border-color 0.15s",
  });

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-bg)" }}
      id="contacto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contacto"
          description="¿Tienes preguntas sobre admisión, el programa PIE u otra consulta? Escríbenos y te responderemos a la brevedad."
          align="center"
          accentColor="salmon"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Formulario — 3/5 del ancho */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-4 bg-white rounded-lg"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-olive)" }}
                >
                  <Send className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-lg font-bold uppercase tracking-wide"
                  style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p style={{ color: "var(--color-body)" }} className="text-sm max-w-xs">
                  Gracias por contactarte con nosotros. Te responderemos a la brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold mt-2 uppercase tracking-wide transition-colors hover:opacity-70"
                  style={{ color: "var(--color-olive)", fontFamily: "var(--font-heading)" }}
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
                noValidate
              >
                {/* Nombre y Apellidos en dos columnas — igual que el sitio real */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium" style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }} htmlFor="contact-name">
                      Nombre <span style={{ color: "var(--color-salmon)" }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Nombre"
                      {...register("name")}
                      style={inputStyle(!!errors.name)}
                      onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-olive)")}
                      onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = errors.name ? "#e53e3e" : "var(--color-border)")}
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium" style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }} htmlFor="contact-lastname">
                      Apellidos <span style={{ color: "var(--color-salmon)" }}>*</span>
                    </label>
                    <input
                      id="contact-lastname"
                      type="text"
                      placeholder="Apellidos"
                      {...register("lastName")}
                      style={inputStyle(!!errors.lastName)}
                      onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-olive)")}
                      onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = errors.lastName ? "#e53e3e" : "var(--color-border)")}
                    />
                    {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message}</span>}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium" style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }} htmlFor="contact-email-input">
                    Email <span style={{ color: "var(--color-salmon)" }}>*</span>
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    style={inputStyle(!!errors.email)}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-olive)")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = errors.email ? "#e53e3e" : "var(--color-border)")}
                  />
                  {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium" style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }} htmlFor="contact-phone">
                    Teléfono
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="Teléfono"
                    {...register("phone")}
                    style={inputStyle(false)}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-olive)")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)")}
                  />
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium" style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }} htmlFor="contact-message">
                    Mensaje <span style={{ color: "var(--color-salmon)" }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Escriba su mensaje y responderemos a la brevedad"
                    {...register("message")}
                    className="resize-none"
                    style={{
                      ...inputStyle(!!errors.message),
                      resize: "none",
                    }}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-olive)")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = errors.message ? "#e53e3e" : "var(--color-border)")}
                  />
                  {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                </div>

                {/* Botón enviar */}
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Panel de información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.a
                  key={detail.id}
                  id={detail.id}
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.07, duration: 0.4 }}
                  className="flex items-start gap-4 p-4 rounded-lg transition-all duration-200 group bg-white"
                  style={{ border: "1px solid var(--color-border)", boxShadow: "var(--shadow-sm)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-olive)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)")
                  }
                >
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--color-olive)" }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-0.5"
                      style={{ color: "var(--color-olive)", fontFamily: "var(--font-heading)" }}
                    >
                      {detail.label}
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-heading)" }}>
                      {detail.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Redes sociales */}
            <div className="flex gap-3 mt-2">
              <a
                id="contact-facebook-link"
                href="https://web.facebook.com/profile.php?id=61585422892732"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "#1877F2" }}
              >
                <FacebookIcon className="w-5 h-5 text-white" />
              </a>
              <a
                id="contact-instagram-link"
                href="https://www.instagram.com/esc_la_huacha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "linear-gradient(45deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)",
                }}
              >
                <InstagramIcon className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Enlace Google Maps */}
            <Link
              id="contact-map-link"
              href="https://maps.google.com/?q=Frutillar,+Los+Lagos,+Chile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:opacity-70"
              style={{ color: "var(--color-olive)", fontFamily: "var(--font-heading)" }}
            >
              <MapPin className="w-3.5 h-3.5" />
              Ver en Google Maps
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
