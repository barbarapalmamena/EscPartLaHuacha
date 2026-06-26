import { MetadataRoute } from "next";

/**
 * Sitemap generado automáticamente para SEO.
 * Incluye todas las rutas públicas del sitio.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://escuelalahuacha.cl";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/quienes-somos/mision-y-vision`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quienes-somos/equipo-de-trabajo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/info-escolar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/admision-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
