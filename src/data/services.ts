export type ServiceSlug =
  | "cidadania-portuguesa"
  | "cidadania-espanhola"
  | "cidadania-alema"
  | "passaporte-italiano"
  | "passaporte-americano"
  | "aire";

export type Service = {
  slug: ServiceSlug;
  name: string;
  /** Nome usado no H1 e no SEO Title das páginas de cidade: "<pageName> em <Cidade>". */
  pageName: string;
  // Pergunta do WhatsApp: "Olá! Quero fazer o serviço de <name> em <cidade>."
  hubIntro: string;
};

export const services: Record<ServiceSlug, Service> = {
  "cidadania-portuguesa": {
    slug: "cidadania-portuguesa",
    name: "Cidadania Portuguesa",
    pageName: "Cidadania Portuguesa",
    hubIntro:
      "A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas do processo de cidadania portuguesa. Escolha sua cidade para ver a página correspondente.",
  },
  "cidadania-espanhola": {
    slug: "cidadania-espanhola",
    name: "Cidadania Espanhola",
    pageName: "Cidadania Espanhola",
    hubIntro:
      "A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas do processo de cidadania espanhola. Escolha sua cidade para ver a página correspondente.",
  },
  "cidadania-alema": {
    slug: "cidadania-alema",
    name: "Cidadania Alemã",
    pageName: "Cidadania Alemã",
    hubIntro:
      "A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas do processo de cidadania alemã. Escolha sua cidade para ver a página correspondente.",
  },
  "passaporte-italiano": {
    slug: "passaporte-italiano",
    name: "Passaporte Italiano",
    pageName: "Passaporte Italiano",
    hubIntro:
      "A Citizen Cidadania orienta sobre documentação, agendamento, emissão e renovação do passaporte italiano, a partir da análise de cada caso. Escolha sua cidade para ver a página correspondente.",
  },
  "passaporte-americano": {
    slug: "passaporte-americano",
    name: "Passaporte e Visto Americano",
    // H1 e SEO Title definidos pelo cliente: "Passaporte e Visto Americano em <Cidade>".
    // A URL continua /passaporte-americano/<cidade>/ para preservar a indexação.
    pageName: "Passaporte e Visto Americano",
    hubIntro:
      "A Citizen Cidadania orienta sobre o passaporte americano, para quem é cidadão dos Estados Unidos, e sobre o visto americano, para quem vai viajar ao país, a partir da análise de cada caso. Escolha sua cidade.",
  },
  aire: {
    slug: "aire",
    name: "AIRE",
    // Definido pelo cliente: H1 e SEO Title "Atualização e Inscrição AIRE em <Cidade>". URL: /aire/<cidade>/
    pageName: "Atualização e Inscrição AIRE",
    hubIntro:
      "A Citizen Cidadania auxilia na inscrição, atualização e regularização do AIRE, com análise do caso e orientação sobre a documentação. Escolha sua cidade para ver a página correspondente.",
  },
};
