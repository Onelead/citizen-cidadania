// Carregador de imagens para o site estático (GitHub Pages não otimiza imagens).
// As fotos de /images existem em 480, 768, 1080 e 1400 px; o navegador baixa a
// menor que cobre a largura pedida. Demais arquivos (logo) seguem como estão.
const WIDTHS = [480, 768, 1080];

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (!src.startsWith("/images/") || !src.endsWith(".webp")) return src;
  const w = WIDTHS.find((x) => x >= width);
  return w ? src.replace(/\.webp$/, `-${w}.webp`) : src;
}
