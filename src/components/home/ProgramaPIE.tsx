"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

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
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-lg overflow-hidden">
              <Image
                src="/school-classroom.jpg"
                alt="Sala de clases de la Escuela La Huacha"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge flotante — mismo estilo del sitio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-4 sm:-right-6 bg-white px-5 py-4 rounded-lg"
              style={{ boxShadow: "var(--shadow-lg)", border: "1px solid var(--color-border)" }}
            >
              <p
                className="text-2xl font-bold"
                style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
              >
                Programa
              </p>
              <p
                className="text-xl font-bold"
                style={{ color: "var(--color-salmon)", fontFamily: "var(--font-heading)" }}
              >
                PIE
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-muted)" }}>
                Integración Escolar
              </p>
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <SectionTitle
              eyebrow="Inclusión educativa"
              title="Programa de Integración Escolar"
              description="El PIE es un programa de integración que busca entregar apoyo especializado a estudiantes que presentan Necesidades Educativas Especiales, ya sean de carácter permanente o transitorio."
              align="left"
              accentColor="olive"
            />

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
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--color-olive)" }}
                  />
                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Link
              id="pie-cta-contacto"
              href="/contacto"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider group w-fit"
              style={{ color: "var(--color-olive)", fontFamily: "var(--font-heading)" }}
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
