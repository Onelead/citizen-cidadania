import type { ServicePageContent } from "../types";
import { photos } from "@/data/photos";

const page: ServicePageContent = {
  service: "cidadania-espanhola",
  city: "sorocaba",

  strategy: {
    internalName: "Serviço Cidadania Espanhola em Sorocaba",
    primaryKeyword: "cidadania espanhola em Sorocaba",
    secondaryKeywords: [
      "cidadania espanhola Sorocaba",
      "empresa de cidadania espanhola em Sorocaba",
      "empresa de assessoria de cidadania espanhola em Sorocaba",
      "assessoria cidadania espanhola Sorocaba",
      "nacionalidade espanhola Sorocaba",
      "dupla cidadania espanhola",
      "documentação cidadania espanhola",
      "processo cidadania espanhola",
    ],
    searchIntent:
      "Comercial local: quem quer saber se tem direito à cidadania espanhola, em geral por ascendência, e procura uma empresa de assessoria que analise o caso e organize a documentação.",
    searchVolume: "VOLUME NÃO VALIDADO",
  },

  seoTitle: "Cidadania Espanhola em Sorocaba",
  metaDescription:
    "Empresa de assessoria de cidadania espanhola em Sorocaba para análise, documentação, orientação e acompanhamento do processo de cidadania.",
  h1: "Cidadania Espanhola em Sorocaba",
  updated: "2026-11-01",
  whatsappMessage:
    "Olá! Quero fazer o serviço de Cidadania Espanhola em Sorocaba.",
  serviceType: "Assessoria de cidadania espanhola",

  hero: {
    eyebrow: "Assessoria de cidadania espanhola",
    image: {
      photo: photos.passaporteEspanholMao,
      alt: "Mãos segurando um passaporte espanhol e um cartão de embarque",
    },
    lead: "Quer saber se tem direito à cidadania espanhola? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas.",
    cta: "Analisar Meu Caso",
  },

  intro: {
    topicId: "o-que-e",
    image: {
      photo: photos.madriPalacioBandeiras,
      alt: "Palácio de Cibeles, em Madri, com bandeiras da Espanha na fachada",
    },
    highlights: [
      { title: "Origem", text: "Filhos de pai ou mãe espanhol" },
      { title: "Opção", text: "Casos específicos previstos na lei espanhola" },
      { title: "Residência", text: "Naturalização após residência legal na Espanha" },
    ],
  },

  country: {
    eyebrow: "Espanha",
    title: "Do Brasil para a Espanha",
    body: [
      "Os pedidos de cidadania espanhola são analisados pelas autoridades da Espanha. Para quem mora no Brasil, parte dos procedimentos passa pelo consulado espanhol responsável pela sua região.",
      "A Citizen Cidadania orienta cada fase a partir da análise do seu caso, para você saber o que pode ser feito aqui e o que depende dos órgãos espanhóis.",
    ],
    map: "espanha",
    caption: "Espanha peninsular e Ilhas Baleares, por comunidade autônoma",
  },

  documents: {
    topicId: "documentos",
    items: [
      { title: "Certidões do ascendente", text: "Registros espanhóis do pai, mãe ou familiar, conforme o caso" },
      { title: "Certidões brasileiras", text: "Nascimento e casamento, quando aplicável" },
      { title: "Identificação", text: "Documentos de identidade do requerente" },
      { title: "Apostila e tradução", text: "Para documentos emitidos fora da Espanha, quando exigido" },
    ],
  },

  process: {
    title: "Como Funciona o Processo",
    steps: [
      {
        title: "Análise do Caso",
        text: "Entendemos a situação do cliente e identificamos qual caminho pode ser avaliado.",
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
      title: "O Que é a Cidadania Espanhola?",
      body: [
        "É o vínculo legal de nacionalidade entre uma pessoa e a Espanha, reconhecido ou concedido conforme a situação de cada caso.",
        "Nas buscas, também aparece como nacionalidade espanhola ou dupla cidadania espanhola.",
      ],
    },
    {
      id: "quem-pode",
      title: "Quem Pode Ter Direito à Cidadania Espanhola?",
      body: [
        "Em termos gerais, a lei espanhola prevê a nacionalidade por origem para filhos de espanhóis, o direito de opção em casos específicos e a naturalização por residência legal na Espanha. O casamento com cidadão espanhol não dá a nacionalidade automaticamente.",
        "Também houve caminhos temporários, como os da Lei de Memória Democrática, com prazo próprio de solicitação. Por isso, cada caso precisa ser analisado conforme as regras em vigor.",
      ],
    },
    {
      id: "como-funciona",
      title: "Como Funciona o Processo de Cidadania Espanhola?",
      body: [
        "Em geral, o processo reúne a verificação do caminho possível, a obtenção e a organização dos documentos, a apresentação do pedido ao órgão competente e a análise por esse órgão.",
        "Etapas, exigências e prazos são definidos pelas autoridades espanholas e variam conforme o tipo de pedido.",
      ],
    },
    {
      id: "documentos",
      title: "Quais Documentos Podem Ser Necessários?",
      body: [
        "Dependendo do caso, podem ser exigidas certidões espanholas do ascendente, certidões brasileiras de nascimento e casamento e documentos de identificação.",
        "Documentos emitidos fora da Espanha podem exigir apostilamento e tradução. A lista exata só é definida depois da análise do caso.",
      ],
    },
    {
      id: "como-comecar",
      title: "Como Começar o Processo?",
      body: [
        "O primeiro passo é entender qual caminho se aplica ao seu caso. Reúna o que tiver de documentos e informações sobre o familiar espanhol e fale com a Citizen Cidadania.",
        "A análise do caso mostra o que falta e quais são as próximas etapas.",
      ],
    },
    {
      id: "morar",
      title: "Preciso Morar na Espanha?",
      body: [
        "Depende do caminho. Pedidos ligados à ascendência, em geral, não exigem residência na Espanha e podem ter etapas feitas a partir do Brasil. Já a naturalização por residência exige residência legal no país.",
      ],
    },
    {
      id: "assessoria",
      title: "Como Funciona uma Assessoria de Cidadania Espanhola?",
      body: [
        "Uma assessoria de cidadania espanhola orienta o cliente em cada fase: analisa o caso, indica os documentos, organiza e confere a documentação e esclarece as próximas etapas.",
        "A decisão sobre o pedido continua sendo das autoridades espanholas, e nenhuma assessoria pode garantir aprovação.",
      ],
    },
    {
      id: "empresa",
      title: "Como uma Empresa de Cidadania Pode Auxiliar no Processo?",
      body: [
        "Uma empresa de assessoria de cidadania ajuda a localizar e organizar documentos, conferir dados entre certidões e deixar claro o que vem em cada etapa.",
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
        q: "Quem tem direito à cidadania espanhola?",
        a: "Depende da situação de cada pessoa e da lei em vigor. Em termos gerais, há caminhos por origem, por opção e por residência legal na Espanha, cada um com requisitos próprios.",
      },
      {
        q: "Neto de espanhol tem direito à cidadania espanhola?",
        a: "Depende do caso. Netos podem ter caminhos específicos conforme a situação dos pais e as regras vigentes, por isso a análise do caso é o primeiro passo.",
      },
      {
        q: "Quais documentos são necessários?",
        a: "Em geral, certidões espanholas do ascendente, certidões brasileiras e documentos de identificação. A lista exata varia conforme o caminho.",
      },
      {
        q: "Como funciona uma assessoria de cidadania espanhola?",
        a: "A assessoria analisa o caso, indica a documentação, organiza e confere os documentos e orienta as próximas etapas. A decisão final cabe às autoridades espanholas.",
      },
      {
        q: "Casamento com espanhol dá direito à cidadania?",
        a: "Não automaticamente. O casamento pode influenciar o caminho por residência, conforme as regras da lei espanhola.",
      },
      {
        q: "Preciso morar na Espanha?",
        a: "Depende do caminho. Pedidos por ascendência, em geral, não exigem residência; a naturalização por residência exige.",
      },
      {
        q: "Quanto tempo pode levar?",
        a: "O prazo depende do tipo de pedido e da análise pelas autoridades espanholas, e pode variar bastante. Por isso a Citizen não informa um prazo fixo.",
      },
      {
        q: "A Citizen pode analisar meu caso?",
        a: "Sim. A análise do caso é o primeiro passo: você explica sua situação pelo WhatsApp e a Citizen orienta sobre documentação e próximas etapas.",
      },
    ],
  },

  finalCta: {
    title: "Precisa de Ajuda com Sua Cidadania Espanhola?",
    text: "Explique sua situação para a Citizen Cidadania e entenda quais podem ser os próximos passos.",
    cta: "Analisar Meu Caso",
  },
};

export default page;
