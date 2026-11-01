import type { ServiceSlug } from "@/data/services";
import type { ServicePageContent } from "./types";
import cidadaniaPortuguesaSorocaba from "./cidadania-portuguesa/sorocaba";
import aireSorocaba from "./aire/sorocaba";
import passaporteItalianoSorocaba from "./passaporte-italiano/sorocaba";
import passaporteAmericanoSorocaba from "./passaporte-americano/sorocaba";
import cidadaniaEspanholaSorocaba from "./cidadania-espanhola/sorocaba";
import cidadaniaAlemaSorocaba from "./cidadania-alema/sorocaba";

// Para publicar uma nova página: criar o arquivo de conteúdo e registrar aqui.
export const pages: ServicePageContent[] = [
  cidadaniaPortuguesaSorocaba,
  aireSorocaba,
  passaporteItalianoSorocaba,
  passaporteAmericanoSorocaba,
  cidadaniaEspanholaSorocaba,
  cidadaniaAlemaSorocaba,
];

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
  return [...new Set(pages.map((p) => p.service))];
}

export function pagePath(p: Pick<ServicePageContent, "service" | "city">) {
  return `/${p.service}/${p.city}/`;
}
