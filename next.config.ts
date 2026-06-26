import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permitir imágenes externas si fuera necesario en el futuro
    remotePatterns: [
      {
        protocol: "https",
        hostname: "escuelalahuacha.cl",
      },
    ],
  },
};

export default nextConfig;
