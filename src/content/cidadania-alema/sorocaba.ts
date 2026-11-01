import type { ServicePageContent } from "../types";
import { photos } from "@/data/photos";

const page: ServicePageContent = {
  service: "cidadania-alema",
  city: "sorocaba",

  strategy: {
    internalName: "Serviço Cidadania Alemã em Sorocaba",
    primaryKeyword: "cidadania alemã em Sorocaba",
    secondaryKeywords: [
      "cidadania alemã Sorocaba",
      "assessoria cidadania alemã Sorocaba",
      "empresa de cidadania alemã em Sorocaba",
      "empresa de assessoria de cidadania em Sorocaba",
      "nacionalidade alemã",
      "dupla cidadania alemã",
      "documentação cidadania alemã",
      "processo cidadania alemã",
    ],
    searchIntent:
      "Comercial local: descendentes de alemães que querem saber se a cidadania foi transmitida na família, como comprová-la e qual empresa de assessoria pode analisar o caso.",
    searchVolume: "VOLUME NÃO VALIDADO",
  },

  seoTitle: "Cidadania Alemã em Sorocaba",
  metaDescription:
    "Empresa de assessoria de cidadania alemã em Sorocaba para análise, documentação, orientação e acompanhamento do processo de cidadania.",
  h1: "Cidadania Alemã em Sorocaba",
  updated: "2026-11-01",
  whatsappMessage: "Olá! Quero fazer o serviço de Cidadania Alemã em Sorocaba.",
  serviceType: "Assessoria de cidadania alemã",

  hero: {
    eyebrow: "Assessoria de cidadania alemã",
    image: {
      photo: photos.passaporteAlemao,
      alt: "Mão segurando um passaporte alemão bordô",
      position: "20% 50%",
    },
    lead: "É descendente de alemães e quer saber se tem direito à cidadania? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas.",
    cta: "Analisar Meu Caso",
  },

  intro: {
    topicId: "o-que-e",
    image: {
      photo: photos.reichstagBandeira,
      alt: "Bandeira da Alemanha tremulando diante do edifício do Reichstag, em Berlim",
      position: "30% 50%",
    },
    highlights: [
      { title: "Ascendência", text: "Transmissão por pai ou mãe alemão, conforme as regras de cada geração" },
      { title: "Restituição", text: "Para descendentes de perseguidos pelo regime nazista" },
      { title: "Naturalização", text: "Para quem tem residência legal na Alemanha" },
    ],
  },

  country: {
    eyebrow: "Alemanha",
    title: "Do Brasil para a Alemanha",
    body: [
      "Para quem mora no Brasil, o pedido de reconhecimento da cidadania alemã costuma ser analisado pelo Bundesverwaltungsamt, o Escritório Federal de Administração, e pode ser apresentado por meio da representação alemã no país.",
      "A Citizen Cidadania orienta cada fase a partir da análise do seu caso, da pesquisa dos documentos à organização do pedido.",
    ],
    map: "alemanha",
    caption: "Alemanha, por estado",
  },

  documents: {
    topicId: "documentos",
    items: [
      { title: "Registros do ascendente", text: "Certidões alemãs de nascimento e casamento, conforme o caso" },
      { title: "Documentos de imigração", text: "Passaporte antigo, registro de estrangeiro ou similares" },
      { title: "Certidões da família", text: "Nascimentos e casamentos de cada geração até o requerente" },
      { title: "Apostila e tradução", text: "Documentos brasileiros podem exigir tradução para o alemão" },
    ],
  },

  process: {
    title: "Como Funciona o Processo",
    steps: [
      {
        title: "Análise do Caso",
        text: "Avaliamos a linha familiar e identificamos se a cidadania pode ter sido transmitida.",
      },
      {
        title: "Documentação",
        text: "Orientamos sobre os documentos de cada geração e os registros do ascendente alemão.",
      },
      {
        title: "Preparação",
        text: "A documentação é organizada e conferida de acordo com o procedimento correspondente.",
      },
      {
        title: "Acompanhamento",
        text: "O cliente recebe orientação sobre as próximas etapas do processo.",
      },
    ],
  },

  topics: [
    {
      id: "o-que-e",
      title: "O Que é a Cidadania Alemã?",
      body: [
        "É o vínculo legal de nacionalidade entre uma pessoa e a Alemanha. Para descendentes, em geral, trata-se de reconhecer uma cidadania transmitida pela família.",
        "Nas buscas, também aparece como nacionalidade alemã ou dupla cidadania alemã.",
      ],
    },
    {
      id: "quem-pode",
      title: "Quem Pode Ter Direito à Cidadania Alemã?",
      body: [
        "O caminho mais comum é a ascendência. A transmissão depende da data de nascimento de cada geração, de o ascendente ser pai ou mãe, do estado civil dos pais e de regras que mudaram ao longo do tempo.",
        "Também existem caminhos de restituição para descendentes de pessoas perseguidas pelo regime nazista, além da naturalização para quem reside legalmente na Alemanha.",
      ],
    },
    {
      id: "como-funciona",
      title: "Como Funciona o Processo de Cidadania Alemã?",
      body: [
        "Em geral, o processo começa pela análise da linha familiar, segue com a pesquisa e a organização dos documentos e termina com o pedido ao órgão alemão competente, que analisa o caso.",
        "Um ponto importante é verificar se o ascendente se naturalizou em outro país, o que pode ter interrompido a transmissão da cidadania.",
      ],
    },
    {
      id: "documentos",
      title: "Quais Documentos Podem Ser Necessários?",
      body: [
        "Dependendo do caso, podem ser exigidos registros alemães do ascendente, documentos de imigração e certidões de nascimento e casamento de cada geração até o requerente.",
        "Documentos brasileiros podem exigir apostilamento e tradução para o alemão. A lista exata só é definida depois da análise do caso.",
      ],
    },
    {
      id: "dupla",
      title: "A Alemanha Permite Dupla Cidadania?",
      body: [
        "Desde 2024, a lei alemã passou a admitir a dupla nacionalidade de forma geral. Para casos anteriores e situações específicas, as regras de cada época precisam ser verificadas na análise do caso.",
      ],
    },
    {
      id: "como-comecar",
      title: "Como Começar o Processo?",
      body: [
        "O primeiro passo é reunir o que a família tem sobre o ascendente alemão: nomes, datas, cidade de origem e documentos antigos. Com isso, a Citizen Cidadania analisa o caso e indica o que falta.",
      ],
    },
    {
      id: "assessoria",
      title: "Como Funciona uma Assessoria de Cidadania Alemã?",
      body: [
        "Uma assessoria de cidadania alemã analisa a linha familiar, indica os documentos de cada geração, organiza e confere a documentação e esclarece as próximas etapas.",
        "A decisão sobre o pedido continua sendo das autoridades alemãs, e nenhuma assessoria pode garantir aprovação.",
      ],
    },
    {
      id: "empresa",
      title: "Como uma Empresa de Cidadania Pode Auxiliar no Processo?",
      body: [
        "Uma empresa de assessoria de cidadania ajuda a localizar e organizar documentos antigos, conferir dados entre certidões e deixar claro o que vem em cada etapa.",
        "O objetivo é tornar o processo mais claro para o cliente, sem prometer resultado.",
      ],
    },
  ],

  about: {
    title: "Citizen Cidadania",
    body: [
      "A Citizen Cidadania atua no suporte a pessoas e famílias que precisam organizar processos relacionados à cidadania e documentação internacional.",
      "O trabalho começa pela análise de cada situação para orientar o cliente sobre documentação, procedimentos e próximas etapas.",
    ],
  },

  why: {
    title: "Por Que Contar com a Citizen?",
    items: [
      {
        title: "Análise individual do caso",
        text: "Cada linha familiar é avaliada separadamente.",
      },
      {
        title: "Orientação documental",
        text: "Indicação clara dos documentos de cada geração.",
      },
      {
        title: "Organização do processo",
        text: "Documentação organizada e conferida conforme o procedimento.",
      },
      {
        title: "Comunicação direta",
        text: "Contato pelo WhatsApp para tirar dúvidas e conversar sobre o caso.",
      },
      {
        title: "Acompanhamento das etapas",
        text: "Orientação sobre o que vem a seguir em cada fase.",
      },
    ],
  },

  faq: {
    title: "Perguntas Frequentes",
    items: [
      {
        q: "Quem tem direito à cidadania alemã?",
        a: "Em geral, descendentes de alemães cuja linha familiar transmitiu a cidadania conforme as regras de cada época, além de casos de restituição e naturalização.",
      },
      {
        q: "Bisneto de alemão tem direito à cidadania alemã?",
        a: "Pode ter, dependendo de cada geração da linha familiar. O que define é se a cidadania foi transmitida sem interrupção, e isso só se confirma na análise do caso.",
      },
      {
        q: "Quais documentos são necessários?",
        a: "Em geral, registros alemães do ascendente, documentos de imigração e certidões de nascimento e casamento de cada geração. A lista varia conforme o caso.",
      },
      {
        q: "A Alemanha aceita dupla cidadania?",
        a: "Desde 2024, a lei alemã passou a admitir a dupla nacionalidade de forma geral. Situações anteriores precisam ser verificadas caso a caso.",
      },
      {
        q: "Preciso morar na Alemanha?",
        a: "Não para o reconhecimento por ascendência, que pode ser pedido a partir do Brasil. A naturalização, por outro lado, exige residência legal na Alemanha.",
      },
      {
        q: "Como funciona uma assessoria de cidadania alemã?",
        a: "A assessoria analisa a linha familiar, indica e confere os documentos e orienta as próximas etapas. A decisão final cabe às autoridades alemãs.",
      },
      {
        q: "Quanto tempo pode levar?",
        a: "O prazo depende do tipo de pedido e da análise pelas autoridades alemãs, e pode variar bastante. Por isso a Citizen não informa um prazo fixo.",
      },
      {
        q: "A Citizen pode analisar meu caso?",
        a: "Sim. Você explica sua história familiar pelo WhatsApp e a Citizen orienta sobre documentação e próximas etapas.",
      },
    ],
  },

  finalCta: {
    title: "Precisa de Ajuda com Sua Cidadania Alemã?",
    text: "Explique sua situação para a Citizen Cidadania e entenda quais podem ser os próximos passos.",
    cta: "Analisar Meu Caso",
  },
};

export default page;
