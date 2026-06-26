"use client";

import { Download } from "lucide-react";

interface DocumentCardButtonProps {
  /** ID único del botón */
  id: string;
  /** Título del documento */
  title: string;
}

/**
 * Botón de descarga de documentos con interactividad.
 * Se extrae como Client Component para no contaminar
 * el Server Component de la página.
 */
export function DocumentCardButton({ id, title }: DocumentCardButtonProps) {
  return (
    <button
      id={id}
      className="flex items-center gap-2 text-sm font-medium transition-colors mt-auto w-fit"
      style={{ color: "var(--color-accent)" }}
      title={`Solicitar ${title}`}
      onClick={() =>
        alert(
          `Para obtener este documento, contáctanos a contacto@escuelalahuacha.cl`
        )
      }
    >
      <Download className="w-4 h-4" />
      Solicitar documento
    </button>
  );
}
