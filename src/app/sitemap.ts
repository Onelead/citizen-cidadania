import type { MetadataRoute } from "next";
import { pages, pagePath, pagesByService, publishedServices } from "@/content";
import { absoluteUrl } from "@/lib/site";

// Apenas URLs indexáveis, canônicas e com HTTP 200.
// lastModified vem da data "updated" de cada conteúdo, alterada só em mudança real.
export default function sitemap(): MetadataRoute.Sitemap {
  const latest = (dates: string[]) => dates.sort().at(-1)!;
  const all = pages.map((p) => p.updated);

  return [
    { url: absoluteUrl("/"), lastModified: latest(all) },
    ...publishedServices().map((s) => ({
      url: absoluteUrl(`/${s}/`),
      lastModified: latest(pagesByService(s).map((p) => p.updated)),
    })),
    ...pages.map((p) => ({
      url: absoluteUrl(pagePath(p)),
      lastModified: p.updated,
    })),
  ];
}
