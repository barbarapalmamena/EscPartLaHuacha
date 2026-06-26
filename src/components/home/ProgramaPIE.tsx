"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

// Beneficios del Programa de Integración Escolar
const benefits = [
  "Atención especializada para estudiantes con Necesidades Educativas Especiales (NEE)",
  "Coordinación PIE a cargo de profesionales especializados",
  "Apoyo psicológico con psicóloga dedicada",
  "Estrategias de aprendizaje adaptadas a cada estudiante",
  "Trabajo colaborativo entre docentes y especialistas",
];

export function ProgramaPIE() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-surface)" }}
      id="programa-pie"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="/school-classroom.jpg"
                alt="Sala de clases de la Escuela La Huacha con estudiantes aprendiendo"
                fill
                className="object-cover"
              />
              {/* Overlay sutil */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(22,22,26,0.5) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Badge flotante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-4 sm:-right-6 card-surface px-5 py-4 rounded-2xl"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <p
                className="text-2xl font-bold"
                style={{
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Programa
              </p>
              <p
                className="text-lg font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                PIE
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                Integración Escolar
              </p>
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <SectionTitle
              eyebrow="Inclusión educativa"
              title="Programa de Integración Escolar"
              description="El PIE es un programa de integración que busca entregar apoyo especializado a estudiantes que presentan Necesidades Educativas Especiales, ya sean de carácter permanente o transitorio."
              align="left"
            />

            {/* Lista de beneficios */}
            <ul className="flex flex-col gap-3">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              id="pie-cta-contacto"
              href="/contacto"
              className="inline-flex items-center gap-2 text-sm font-semibold group w-fit"
              style={{ color: "var(--color-accent)" }}
            >
              Consultar sobre el programa PIE
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
