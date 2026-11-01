import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático, publicado no GitHub Pages (pasta out/).
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // GitHub Pages não otimiza imagens: as fotos vão em WebP em 4 larguras
  // (public/images) e o carregador próprio monta o srcset.
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [480, 768, 1080, 1400],
    imageSizes: [128, 256],
  },
  experimental: { inlineCss: true },
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
