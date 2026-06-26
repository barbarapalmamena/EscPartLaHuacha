"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Íconos SVG personalizados para redes sociales
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

// Esquema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactDetails = [
  {
    id: "contact-address",
    icon: MapPin,
    label: "Dirección",
    value: "Lomas de la Piedra s/n, Frutillar",
    sub: "X Región de Los Lagos",
    href: "https://maps.google.com/?q=Frutillar,+Chile",
  },
  {
    id: "contact-phone",
    icon: Phone,
    label: "Teléfono",
    value: "+56 9 4250 7098",
    href: "tel:+56942507098",
  },
  {
    id: "contact-email",
    icon: Mail,
    label: "Correo",
    value: "contacto@escuelalahuacha.cl",
    href: "mailto:contacto@escuelalahuacha.cl",
  },
  {
    id: "contact-instagram",
    icon: InstagramIcon,
    label: "Instagram",
    value: "@esc_la_huacha",
    href: "https://www.instagram.com/esc_la_huacha/",
  },
  {
    id: "contact-facebook",
    icon: FacebookIcon,
    label: "Facebook",
    value: "Escuela La Huacha",
    href: "https://web.facebook.com/profile.php?id=61585422892732",
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

  // Simulación de envío de formulario (sin backend por ahora)
  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.info("Formulario enviado:", data); // eslint-disable-line no-console
    setSubmitted(true);
    reset();
  };

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-surface)" }}
      id="contacto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Escríbenos"
          title="Contacto"
          description="¿Tienes preguntas sobre admisión, el programa PIE u otra consulta? Escríbenos y te responderemos a la brevedad."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="card-surface p-6 sm:p-8 rounded-2xl">
              {submitted ? (
                // Estado de éxito
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center gradient-accent"
                  >
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
                  >
                    ¡Mensaje enviado!
                  </h3>
                  <p style={{ color: "var(--color-text-muted)" }} className="text-sm max-w-xs">
                    Gracias por contactarte con nosotros. Te responderemos a la brevedad.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-medium mt-2 transition-colors"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
                  {/* Nombre */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" style={{ color: "var(--color-text)" }} htmlFor="contact-name">
                      Nombre completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(22,22,26,0.6)",
                        border: errors.name ? "1px solid #ef4444" : "1px solid var(--color-border)",
                        color: "var(--color-text)",
                      }}
                      onFocus={(e) => !errors.name && ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)")}
                      onBlur={(e) => !errors.name && ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)")}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" style={{ color: "var(--color-text)" }} htmlFor="contact-email-input">
                      Correo electrónico
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      placeholder="tu@correo.cl"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(22,22,26,0.6)",
                        border: errors.email ? "1px solid #ef4444" : "1px solid var(--color-border)",
                        color: "var(--color-text)",
                      }}
                      onFocus={(e) => !errors.email && ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)")}
                      onBlur={(e) => !errors.email && ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)")}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Asunto */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" style={{ color: "var(--color-text)" }} htmlFor="contact-subject">
                      Asunto
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="¿En qué podemos ayudarte?"
                      {...register("subject")}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(22,22,26,0.6)",
                        border: errors.subject ? "1px solid #ef4444" : "1px solid var(--color-border)",
                        color: "var(--color-text)",
                      }}
                      onFocus={(e) => !errors.subject && ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)")}
                      onBlur={(e) => !errors.subject && ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)")}
                    />
                    {errors.subject && (
                      <span className="text-xs text-red-400">{errors.subject.message}</span>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" style={{ color: "var(--color-text)" }} htmlFor="contact-message">
                      Mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Escribe tu mensaje aquí..."
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{
                        backgroundColor: "rgba(22,22,26,0.6)",
                        border: errors.message ? "1px solid #ef4444" : "1px solid var(--color-border)",
                        color: "var(--color-text)",
                      }}
                      onFocus={(e) => !errors.message && ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)")}
                      onBlur={(e) => !errors.message && ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)")}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-400">{errors.message.message}</span>
                    )}
                  </div>

                  {/* Botón de envío */}
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-semibold text-sm text-white gradient-accent transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ boxShadow: "0 4px 20px rgba(127,119,221,0.3)" }}
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
                        <Send className="w-4 h-4" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Información de contacto */}
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
                  className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 group"
                  style={{
                    backgroundColor: "rgba(127,119,221,0.04)",
                    border: "1px solid var(--color-border)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(127,119,221,0.1)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(127,119,221,0.04)")
                  }
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 gradient-accent"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "var(--color-text-muted)" }}>
                      {detail.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                      {detail.value}
                    </p>
                    {detail.sub && (
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                        {detail.sub}
                      </p>
                    )}
                  </div>
                </motion.a>
              );
            })}

            {/* Enlace a mapa */}
            <Link
              id="contact-map-link"
              href="https://maps.google.com/?q=Frutillar,+Los+Lagos,+Chile"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-80"
              style={{
                color: "var(--color-accent)",
                backgroundColor: "rgba(127,119,221,0.08)",
                border: "1px solid rgba(127,119,221,0.2)",
              }}
            >
              <MapPin className="w-4 h-4" />
              Ver en Google Maps
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
