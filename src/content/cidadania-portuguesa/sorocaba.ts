import type { ServicePageContent } from "../types";
import { photos } from "@/data/photos";

const page: ServicePageContent = {
  service: "cidadania-portuguesa",
  city: "sorocaba",

  strategy: {
    internalName: "Serviço Cidadania Portuguesa em Sorocaba",
    primaryKeyword: "cidadania portuguesa em Sorocaba",
    secondaryKeywords: [
      "cidadania portuguesa Sorocaba",
      "empresa de cidadania portuguesa em Sorocaba",
      "empresa de assessoria de cidadania portuguesa em Sorocaba",
      "assessoria cidadania portuguesa Sorocaba",
      "assessoria para cidadania portuguesa em Sorocaba",
      "dupla cidadania portuguesa Sorocaba",
      "nacionalidade portuguesa Sorocaba",
      "documentação cidadania portuguesa Sorocaba",
      "processo cidadania portuguesa Sorocaba",
    ],
    searchIntent:
      "Comercial local: quem procura uma empresa ou assessoria de cidadania portuguesa em Sorocaba. Parte do público ainda está entendendo direito, documentos e por onde começar, e a página responde a isso antes de levar ao WhatsApp.",
    searchVolume: "VOLUME NÃO VALIDADO",
  },

  seoTitle: "Cidadania Portuguesa em Sorocaba",
  metaDescription:
    "Empresa de assessoria de cidadania portuguesa em Sorocaba para análise, documentação, orientação e acompanhamento do processo de cidadania.",
  h1: "Cidadania Portuguesa em Sorocaba",
  updated: "2026-11-01",
  whatsappMessage:
    "Olá! Quero fazer o serviço de Cidadania Portuguesa em Sorocaba.",
  serviceType: "Assessoria de cidadania portuguesa",

  hero: {
    eyebrow: "Assessoria de cidadania portuguesa",
    image: {
      photo: photos.passaportePortuguesMao,
      alt: "Mão segurando um passaporte português diante de azulejos",
    },
    lead: "Precisa entender como iniciar seu processo de cidadania portuguesa? A Citizen Cidadania auxilia na análise do caso, documentação e orientação das próximas etapas.",
    cta: "Analisar Meu Caso",
  },

  intro: {
    topicId: "o-que-e",
    image: {
      photo: photos.passaportesPortuguesesLisboa,
      alt: "Dois passaportes portugueses erguidos diante da Torre de Belém, em Lisboa",
    },
    highlights: [
      { title: "Ascendência", text: "Filhos e, em certos casos, netos de portugueses" },
      { title: "Casamento", text: "Ou união de facto com cidadão português" },
      { title: "Naturalização", text: "Conforme os requisitos da lei em vigor" },
    ],
  },

  country: {
    eyebrow: "Portugal",
    title: "Do Brasil para Portugal",
    body: [
      "O pedido de cidadania portuguesa é analisado pelas autoridades de Portugal, mas boa parte da preparação acontece no Brasil: reunir certidões, conferir dados e organizar a documentação.",
      "A Citizen Cidadania orienta cada fase a partir da análise do seu caso, para você saber o que fazer aqui e o que depende dos órgãos portugueses.",
    ],
    map: "portugal",
    caption: "Portugal continental, por distrito",
  },

  documents: {
    topicId: "documentos",
    items: [
      { title: "Identificação", text: "Documentos de identidade do requerente" },
      { title: "Certidões de registro", text: "Nascimento, casamento e óbito, conforme o caso" },
      { title: "Antecedentes criminais", text: "Quando exigidos para o tipo de pedido" },
      { title: "Apostila e tradução", text: "Para documentos emitidos fora de Portugal, quando aplicável" },
    ],
  },

  process: {
    title: "Como Funciona o Processo",
    steps: [
      {
        title: "Análise do Caso",
        text: "Entendemos a situação do cliente e identificamos quais etapas precisam ser avaliadas.",
      },
      {
        title: "Documentação",
        text: "Orientamos sobre os documentos e informações necessários.",
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
      title: "O Que é a Cidadania Portuguesa?",
      body: [
        "É o vínculo legal de nacionalidade entre uma pessoa e Portugal, reconhecido ou concedido conforme a situação de cada caso.",
        "Nas buscas, também aparece como nacionalidade portuguesa ou dupla cidadania portuguesa, quando a pessoa mantém a cidadania de origem.",
      ],
    },
    {
      id: "quem-pode",
      title: "Quem Pode Ter Direito à Cidadania Portuguesa?",
      body: [
        "O direito depende da situação familiar e do histórico de cada pessoa. Em termos gerais, a legislação portuguesa prevê caminhos por ascendência, por casamento ou união de facto com cidadão português e por naturalização.",
        "Os requisitos mudam conforme a lei em vigor, por isso cada caso precisa ser analisado individualmente.",
      ],
    },
    {
      id: "como-funciona",
      title: "Como Funciona o Processo de Cidadania Portuguesa?",
      body: [
        "Em geral, o processo reúne a verificação do direito, a obtenção e a organização dos documentos, o envio do pedido ao órgão português competente e a análise do pedido por esse órgão.",
        "Etapas, exigências e prazos são definidos pelas autoridades portuguesas e podem variar conforme o tipo de pedido.",
      ],
    },
    {
      id: "documentos",
      title: "Quais Documentos Podem Ser Necessários?",
      body: [
        "Dependendo do caso, podem ser exigidos documentos de identificação, certidões de nascimento, casamento e óbito e certidões de antecedentes criminais.",
        "Documentos emitidos no exterior podem exigir apostilamento e, em alguns casos, tradução. A lista exata só pode ser definida depois da análise do caso.",
      ],
    },
    {
      id: "como-comecar",
      title: "Como Começar o Processo?",
      body: [
        "O primeiro passo é entender qual é o caminho possível para o seu caso. Reúna os documentos da família que você já tiver e fale com a Citizen Cidadania.",
        "A análise do caso mostra o que falta e quais são as próximas etapas.",
      ],
    },
    {
      id: "viajar",
      title: "Preciso Viajar para Portugal?",
      body: [
        "Nem sempre. Dependendo do tipo de pedido e das regras em vigor, parte do procedimento pode ser feita a partir do Brasil, e outras etapas podem exigir presença ou contato com órgãos portugueses.",
        "Isso é verificado na análise do caso.",
      ],
    },
    {
      id: "assessoria",
      title: "Como Funciona uma Assessoria de Cidadania Portuguesa?",
      body: [
        "Uma assessoria de cidadania portuguesa orienta o cliente em cada fase: analisa o caso, indica os documentos, organiza e confere a documentação e esclarece as próximas etapas.",
        "A decisão sobre o pedido continua sendo das autoridades portuguesas, e nenhuma assessoria pode garantir aprovação.",
      ],
    },
    {
      id: "empresa",
      title: "Como uma Empresa de Cidadania Pode Auxiliar no Processo?",
      body: [
        "Uma empresa de assessoria de cidadania ajuda a organizar o processo: identificar documentos que faltam, conferir dados entre certidões e deixar claro o que vem em cada etapa.",
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
        text: "Cada situação familiar é avaliada separadamente.",
      },
      {
        title: "Orientação documental",
        text: "Indicação clara dos documentos e das informações necessários.",
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
        q: "Quem tem direito à cidadania portuguesa?",
        a: "Depende da situação familiar de cada pessoa e da lei em vigor. Em termos gerais, há caminhos por ascendência, casamento ou união de facto e naturalização, e cada um tem requisitos próprios.",
      },
      {
        q: "Como saber se posso solicitar?",
        a: "Depende da sua ligação familiar com Portugal e da legislação vigente. Reunir certidões de familiares ajuda, mas a confirmação vem da análise do caso.",
      },
      {
        q: "Quais documentos são necessários?",
        a: "Em geral, documentos de identificação, certidões de nascimento, casamento e óbito e certidões de antecedentes criminais. A lista exata varia conforme o tipo de pedido.",
      },
      {
        q: "Como funciona uma assessoria de cidadania portuguesa?",
        a: "A assessoria analisa o caso, indica a documentação, organiza e confere os documentos e orienta as próximas etapas. A decisão final cabe às autoridades portuguesas.",
      },
      {
        q: "Por onde começar?",
        a: "Pela análise do caso. Reúna os documentos da família que já tiver e explique sua situação à Citizen pelo WhatsApp.",
      },
      {
        q: "Preciso viajar para Portugal?",
        a: "Nem sempre. Depende do tipo de pedido e das regras em vigor, e isso é verificado na análise do caso.",
      },
      {
        q: "Quanto tempo pode levar?",
        a: "O prazo depende do tipo de pedido, da documentação e da análise feita pelos órgãos portugueses, e pode variar bastante. Por isso a Citizen não informa um prazo fixo.",
      },
      {
        q: "A Citizen pode analisar meu caso?",
        a: "Sim. A análise do caso é o primeiro passo: você explica sua situação pelo WhatsApp e a Citizen orienta sobre documentação e próximas etapas.",
      },
    ],
  },

  finalCta: {
    title: "Precisa de Ajuda com Sua Cidadania Portuguesa?",
    text: "Explique sua situação para a Citizen Cidadania e entenda quais podem ser os próximos passos.",
    cta: "Analisar Meu Caso",
  },
};

export default page;
