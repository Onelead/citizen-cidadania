import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático, publicado no GitHub Pages (pasta out/).
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // GitHub Pages não otimiza imagens: as fotos já vão em WebP (public/images).
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
