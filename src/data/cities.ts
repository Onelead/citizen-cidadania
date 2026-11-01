export type CitySlug = string;

export type City = { slug: CitySlug; name: string };

export type Region = { slug: string; name: string; cities: City[] };

// Catálogo para expansão. Uma cidade só ganha página quando existir um arquivo
// de conteúdo em src/content/<serviço>/<cidade>.ts registrado em src/content/index.ts.
export const regions: Region[] = [
  {
    slug: "sorocaba",
    name: "Região de Sorocaba",
    cities: [
      { slug: "sorocaba", name: "Sorocaba" },
      { slug: "votorantim", name: "Votorantim" },
      { slug: "itu", name: "Itu" },
      { slug: "salto", name: "Salto" },
      { slug: "aracoiaba-da-serra", name: "Araçoiaba da Serra" },
      { slug: "ipero", name: "Iperó" },
      { slug: "porto-feliz", name: "Porto Feliz" },
      { slug: "boituva", name: "Boituva" },
      { slug: "tatui", name: "Tatuí" },
      { slug: "itapetininga", name: "Itapetininga" },
      { slug: "sao-roque", name: "São Roque" },
      { slug: "mairinque", name: "Mairinque" },
      { slug: "aluminio", name: "Alumínio" },
      { slug: "ibiuna", name: "Ibiúna" },
      { slug: "piedade", name: "Piedade" },
      { slug: "salto-de-pirapora", name: "Salto de Pirapora" },
      { slug: "capela-do-alto", name: "Capela do Alto" },
      { slug: "cerquilho", name: "Cerquilho" },
    ],
  },
  {
    slug: "campinas",
    name: "Região de Campinas",
    cities: [
      { slug: "campinas", name: "Campinas" },
      { slug: "indaiatuba", name: "Indaiatuba" },
      { slug: "valinhos", name: "Valinhos" },
      { slug: "vinhedo", name: "Vinhedo" },
      { slug: "paulinia", name: "Paulínia" },
      { slug: "hortolandia", name: "Hortolândia" },
      { slug: "sumare", name: "Sumaré" },
      { slug: "americana", name: "Americana" },
      { slug: "nova-odessa", name: "Nova Odessa" },
      { slug: "limeira", name: "Limeira" },
    ],
  },
  {
    slug: "jundiai",
    name: "Região de Jundiaí",
    cities: [
      { slug: "jundiai", name: "Jundiaí" },
      { slug: "itupeva", name: "Itupeva" },
      { slug: "louveira", name: "Louveira" },
      { slug: "varzea-paulista", name: "Várzea Paulista" },
      { slug: "campo-limpo-paulista", name: "Campo Limpo Paulista" },
      { slug: "cabreuva", name: "Cabreúva" },
      { slug: "itatiba", name: "Itatiba" },
    ],
  },
];

export const cities: City[] = regions.flatMap((r) => r.cities);

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
