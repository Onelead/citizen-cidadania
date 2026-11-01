import type { ServiceSlug } from "@/data/services";
import { regions } from "@/data/cities";
import type { ServicePageContent } from "./types";
import { generators } from "./generated";
import cidadaniaPortuguesaSorocaba from "./cidadania-portuguesa/sorocaba";
import aireSorocaba from "./aire/sorocaba";
import passaporteItalianoSorocaba from "./passaporte-italiano/sorocaba";
import passaporteAmericanoSorocaba from "./passaporte-americano/sorocaba";
import cidadaniaEspanholaSorocaba from "./cidadania-espanhola/sorocaba";
import cidadaniaAlemaSorocaba from "./cidadania-alema/sorocaba";
import cidadaniaPortuguesaCampinas from "./cidadania-portuguesa/campinas";

// Páginas escritas uma a uma. Têm prioridade sobre as geradas.
const handwritten: ServicePageContent[] = [
  cidadaniaPortuguesaSorocaba,
  aireSorocaba,
  passaporteItalianoSorocaba,
  passaporteAmericanoSorocaba,
  cidadaniaEspanholaSorocaba,
  cidadaniaAlemaSorocaba,
  cidadaniaPortuguesaCampinas,
];

// Demais combinações serviço + cidade: montadas a partir de variações
// escritas à mão em src/content/generated/, escolhidas por cidade.
const generated: ServicePageContent[] = (
  Object.keys(generators) as ServiceSlug[]
).flatMap((service) =>
  regions.flatMap((region) =>
    region.cities
      .filter(
        (city) =>
          !handwritten.some((p) => p.service === service && p.city === city.slug),
      )
      .map((city) => generators[service](city, region)),
  ),
);

const serviceOrder: ServiceSlug[] = [
  "cidadania-portuguesa",
  "cidadania-espanhola",
  "cidadania-alema",
  "passaporte-italiano",
  "passaporte-americano",
  "aire",
];
const cityOrder = regions.flatMap((r) => r.cities.map((c) => c.slug));

export const pages: ServicePageContent[] = [...handwritten, ...generated].sort(
  (a, b) =>
    serviceOrder.indexOf(a.service) - serviceOrder.indexOf(b.service) ||
    cityOrder.indexOf(a.city) - cityOrder.indexOf(b.city),
);

export function getPage(
  service: string,
  city: string,
): ServicePageContent | undefined {
  return pages.find((p) => p.service === service && p.city === city);
}

export function pagesByService(service: string): ServicePageContent[] {
  return pages.filter((p) => p.service === service);
}

export function pagesByCity(city: string): ServicePageContent[] {
  return pages.filter((p) => p.city === city);
}

export function publishedServices(): ServiceSlug[] {
  return serviceOrder.filter((s) => pages.some((p) => p.service === s));
}

export function pagePath(p: Pick<ServicePageContent, "service" | "city">) {
  return `/${p.service}/${p.city}/`;
}
