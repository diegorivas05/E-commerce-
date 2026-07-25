import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignores errores de ESLint al compilar en Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora advertencias estrictas de TypeScript en producción
    ignoreBuildErrors: true,
  },
};

export default nextConfig;