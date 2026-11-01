import type { City, Region } from "@/data/cities";
import type { ServiceSlug } from "@/data/services";
import type { ServicePageContent } from "../types";
import aireBase from "../aire/sorocaba";
import alemaBase from "../cidadania-alema/sorocaba";
import espanholaBase from "../cidadania-espanhola/sorocaba";
import portuguesaBase from "../cidadania-portuguesa/sorocaba";
import americanoBase from "../passaporte-americano/sorocaba";
import italianoBase from "../passaporte-italiano/sorocaba";
import { picker } from "./pick";
import { variants } from "./variants";

const BASE_CITY = "Sorocaba";
const BASE_SLUG = "sorocaba";

const bases: Record<ServiceSlug, ServicePageContent> = {
  "cidadania-portuguesa": portuguesaBase,
  "cidadania-espanhola": espanholaBase,
  "cidadania-alema": alemaBase,
  "passaporte-italiano": italianoBase,
  "passaporte-americano": americanoBase,
  aire: aireBase,
};

/** Troca a cidade-base em todos os textos e links, preservando o resto. */
function swapCity<T>(value: T, city: City): T {
  if (typeof value === "string") {
    return value
      .replaceAll(`/${BASE_SLUG}/`, `/${city.slug}/`)
      .replaceAll(BASE_CITY, city.name) as T;
  }
  if (Array.isArray(value)) return value.map((v) => swapCity(v, city)) as T;
  if (value && typeof value === "object") {
    // Fotos e mapas não mudam por cidade.
    if ("src" in value && "author" in value) return value;
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, swapCity(v, city)]),
    ) as T;
  }
  return value;
}

function build(service: ServiceSlug) {
  return (city: City, region: Region): ServicePageContent => {
    const base = bases[service];
    const page = swapCity(base, city);
    const v = variants[service];
    const pick = picker(`${service}:${city.slug}`);
    const name = city.name;

    return {
      ...page,
      city: city.slug,
      strategy: {
        ...page.strategy,
        internalName: `Serviço ${base.seoTitle.replace(` em ${BASE_CITY}`, "")} em ${name}`,
        searchIntent: `${page.strategy.searchIntent} Cidade da ${region.name}.`,
      },
      metaDescription: pick.one("meta", v.meta)(name),
      hero: { ...page.hero, lead: pick.one("lead", v.lead)(name) },
      finalCta: { ...page.finalCta, title: pick.one("cta", v.ctaTitle) },
    };
  };
}

export const generators: Record<ServiceSlug, (city: City, region: Region) => ServicePageContent> = {
  "cidadania-portuguesa": build("cidadania-portuguesa"),
  "cidadania-espanhola": build("cidadania-espanhola"),
  "cidadania-alema": build("cidadania-alema"),
  "passaporte-italiano": build("passaporte-italiano"),
  "passaporte-americano": build("passaporte-americano"),
  aire: build("aire"),
};
