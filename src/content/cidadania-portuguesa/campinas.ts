import type { ServicePageContent } from "../types";
import { photos } from "@/data/photos";

const page: ServicePageContent = {
  service: "cidadania-portuguesa",
  city: "campinas",

  strategy: {
    internalName: "Serviço Cidadania Portuguesa em Campinas",
    primaryKeyword: "cidadania portuguesa em Campinas",
    secondaryKeywords: [
      "cidadania portuguesa Campinas",
      "empresa de cidadania portuguesa em Campinas",
      "assessoria cidadania portuguesa Campinas",
      "dupla cidadania portuguesa Campinas",
      "nacionalidade portuguesa Campinas",
      "documentação cidadania portuguesa",
      "processo cidadania portuguesa",
      "filho de português",
      "neto de português",
    ],
    searchIntent:
      "Comercial local: moradores de Campinas que procuram uma empresa de assessoria de cidadania portuguesa, com ênfase em dúvidas de família (filhos, netos e cônjuges).",
    searchVolume: "VOLUME NÃO VALIDADO",
  },

  seoTitle: "Cidadania Portuguesa em Campinas",
  metaDescription:
    "Empresa de assessoria de cidadania portuguesa em Campinas para análise do caso, organização da documentação e orientação em cada etapa do processo.",
  h1: "Cidadania Portuguesa em Campinas",
  updated: "2026-11-01",
  whatsappMessage:
    "Olá! Quero fazer o serviço de Cidadania Portuguesa em Campinas.",
  serviceType: "Assessoria de cidadania portuguesa",

  hero: {
    eyebrow: "Assessoria de cidadania portuguesa",
    image: {
      photo: photos.passaportesPortuguesesLisboa,
      alt: "Dois passaportes portugueses erguidos diante da Torre de Belém, em Lisboa",
    },
    lead: "Tem pai, mãe, avô ou cônjuge português e quer saber por onde começar? A Citizen Cidadania analisa o seu caso e orienta sobre documentação e próximas etapas.",
    cta: "Analisar Meu Caso",
  },

  intro: {
    topicId: "o-que-e",
    image: {
      photo: photos.fachadaBandeirasPortugalUe,
      alt: "Fachada com azulejos e as bandeiras de Portugal e da União Europeia",
      position: "50% 35%",
    },
    highlights: [
      { title: "Filhos", text: "De pai ou mãe com nacionalidade portuguesa" },
      { title: "Netos", text: "Com requisitos próprios definidos em lei" },
      { title: "Cônjuges", text: "Casamento ou união de facto com português" },
    ],
  },

  country: {
    eyebrow: "Portugal",
    title: "Quem Decide é Portugal",
    body: [
      "Os pedidos de nacionalidade portuguesa são tratados pelos serviços de registo de Portugal, como a Conservatória dos Registos Centrais.",
      "O papel da assessoria é preparar bem o caminho até lá: confirmar o enquadramento do caso, reunir as certidões certas e evitar pendências que atrasam a análise.",
    ],
    map: "portugal",
    caption: "Portugal continental, por distrito",
  },

  documents: {
    topicId: "documentos",
    items: [
      { title: "Registo do familiar português", text: "Assento de nascimento ou casamento em Portugal" },
      { title: "Certidões brasileiras", text: "De nascimento e casamento, em inteiro teor quando exigido" },
      { title: "Identificação", text: "Documento válido do requerente" },
      { title: "Antecedentes criminais", text: "Quando o tipo de pedido exigir" },
    ],
  },

  process: {
    title: "Como Funciona o Processo",
    steps: [
      {
        title: "Análise do Caso",
        text: "Avaliamos o vínculo com Portugal e qual tipo de pedido se aplica à sua família.",
      },
      {
        title: "Documentação",
        text: "Indicamos as certidões portuguesas e brasileiras que precisam ser reunidas.",
      },
      {
        title: "Preparação",
        text: "Conferimos dados, nomes e datas entre os documentos antes do pedido.",
      },
      {
        title: "Acompanhamento",
        text: "Você recebe orientação sobre o que acontece depois do envio.",
      },
    ],
  },

  topics: [
    {
      id: "o-que-e",
      title: "O Que é a Cidadania Portuguesa?",
      body: [
        "É a nacionalidade portuguesa reconhecida ou concedida a uma pessoa, que passa a ter os direitos de cidadão português.",
        "Como o Brasil permite manter a cidadania brasileira, muita gente procura o processo como dupla cidadania portuguesa.",
      ],
    },
    {
      id: "quem-pode",
      title: "Quem Pode Ter Direito à Cidadania Portuguesa?",
      body: [
        "Os casos mais procurados envolvem filhos de portugueses, netos de portugueses e cônjuges ou companheiros em união de facto com cidadão português. Cada situação tem requisitos próprios.",
        "Há ainda a naturalização, ligada a outros critérios, como a residência legal em Portugal.",
      ],
    },
    {
      id: "como-funciona",
      title: "Como Funciona o Processo de Cidadania Portuguesa?",
      body: [
        "Primeiro se confirma qual tipo de pedido se aplica. Depois vêm a reunião e a conferência das certidões, o envio do pedido aos serviços portugueses e a análise feita por eles.",
        "Exigências e prazos dependem do tipo de pedido e das regras em vigor.",
      ],
    },
    {
      id: "documentos",
      title: "Quais Documentos Podem Ser Necessários?",
      body: [
        "Em geral, o registo português do familiar, certidões brasileiras de nascimento e casamento, documento de identificação e, conforme o pedido, certidões de antecedentes criminais.",
        "Divergências de nomes e datas entre certidões são comuns e precisam ser identificadas antes do envio.",
      ],
    },
    {
      id: "como-comecar",
      title: "Como Começar o Processo?",
      body: [
        "Separe o que a família já tem sobre o parente português: nome completo, data e local de nascimento e qualquer documento antigo. Com isso, a análise do caso fica mais rápida e precisa.",
      ],
    },
    {
      id: "viajar",
      title: "Preciso Viajar para Portugal?",
      body: [
        "Em muitos pedidos, não. A preparação e parte do procedimento podem ser feitas a partir do Brasil, mas algumas situações podem envolver etapas em Portugal. A análise do caso esclarece isso.",
      ],
    },
    {
      id: "assessoria",
      title: "Como Funciona uma Assessoria de Cidadania Portuguesa?",
      body: [
        "A assessoria acompanha o cliente do diagnóstico ao pedido: confirma o enquadramento, indica e confere documentos e explica cada etapa em linguagem simples.",
        "Quem decide o pedido são os serviços portugueses, e nenhuma assessoria pode garantir aprovação.",
      ],
    },
    {
      id: "empresa",
      title: "Como uma Empresa de Cidadania Pode Auxiliar no Processo?",
      body: [
        "Uma empresa de assessoria de cidadania organiza o que costuma travar o processo: certidões erradas, dados divergentes e documentos fora do formato exigido.",
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
        text: "Identificamos o tipo de pedido adequado à sua família.",
      },
      {
        title: "Orientação documental",
        text: "Lista clara das certidões portuguesas e brasileiras.",
      },
      {
        title: "Organização do processo",
        text: "Dados conferidos entre documentos antes do envio.",
      },
      {
        title: "Comunicação direta",
        text: "Contato pelo WhatsApp para tirar dúvidas sobre o caso.",
      },
      {
        title: "Acompanhamento das etapas",
        text: "Orientação sobre o que vem depois de cada fase.",
      },
    ],
  },

  faq: {
    title: "Perguntas Frequentes",
    items: [
      {
        q: "Filho de português nascido no Brasil tem direito à cidadania portuguesa?",
        a: "Em geral, filhos de pai ou mãe português têm um caminho próprio para a nacionalidade. Os requisitos dependem do caso e são confirmados na análise.",
      },
      {
        q: "Neto de português pode pedir a cidadania portuguesa?",
        a: "Pode haver esse caminho, com requisitos próprios definidos em lei. Por isso, cada caso de neto precisa ser analisado individualmente.",
      },
      {
        q: "Casamento com português dá direito à cidadania?",
        a: "O casamento ou a união de facto com cidadão português pode permitir o pedido, desde que cumpridos os requisitos previstos em lei.",
      },
      {
        q: "Posso perder a cidadania brasileira?",
        a: "Em regra, não: o reconhecimento de outra nacionalidade de origem não faz perder a brasileira. Situações específicas devem ser verificadas no caso concreto.",
      },
      {
        q: "Meus filhos também podem ter a cidadania?",
        a: "Depois que a sua nacionalidade é reconhecida, seus filhos podem ter um caminho próprio. A análise do caso indica a melhor ordem dos pedidos na família.",
      },
      {
        q: "Quais documentos preciso separar primeiro?",
        a: "Os dados e documentos do familiar português e as suas certidões brasileiras. A lista completa sai da análise do caso.",
      },
      {
        q: "Quanto tempo leva o processo?",
        a: "Depende do tipo de pedido e da análise pelos serviços portugueses, e pode variar bastante. Por isso a Citizen não informa um prazo fixo.",
      },
      {
        q: "A Citizen pode analisar meu caso?",
        a: "Sim. Você conta sua história familiar pelo WhatsApp e a Citizen orienta sobre o tipo de pedido, a documentação e as próximas etapas.",
      },
    ],
  },

  finalCta: {
    title: "Quer Saber se Sua Família Tem Direito?",
    text: "Conte sua história para a Citizen Cidadania e entenda quais podem ser os próximos passos para a cidadania portuguesa.",
    cta: "Analisar Meu Caso",
  },
};

export default page;
