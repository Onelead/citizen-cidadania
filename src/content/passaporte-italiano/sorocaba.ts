import type { ServicePageContent } from "../types";
import { photos } from "@/data/photos";

const page: ServicePageContent = {
  service: "passaporte-italiano",
  city: "sorocaba",

  strategy: {
    internalName: "Serviço Passaporte Italiano em Sorocaba",
    primaryKeyword: "passaporte italiano em Sorocaba",
    secondaryKeywords: [
      "passaporte italiano Sorocaba",
      "assessoria passaporte italiano Sorocaba",
      "renovação passaporte italiano Sorocaba",
      "agendamento passaporte italiano Sorocaba",
      "emissão passaporte italiano Sorocaba",
      "documentação passaporte italiano",
      "como tirar passaporte italiano",
    ],
    searchIntent:
      "Transacional: quem tem cidadania italiana reconhecida e quer emitir ou renovar o passaporte, com dúvidas sobre agendamento, documentos e AIRE.",
    searchVolume: "VOLUME NÃO VALIDADO",
  },

  seoTitle: "Passaporte Italiano em Sorocaba",
  metaDescription:
    "Assessoria para Passaporte Italiano em Sorocaba, com orientação sobre documentação, agendamento, emissão e renovação do passaporte italiano.",
  h1: "Passaporte Italiano em Sorocaba",
  updated: "2026-11-01",
  whatsappMessage:
    "Olá! Quero fazer o serviço de Passaporte Italiano em Sorocaba.",
  serviceType: "Assessoria para emissão e renovação de passaporte italiano",

  hero: {
    eyebrow: "Assessoria para passaporte italiano",
    image: {
      photo: photos.passaporteItaliano,
      alt: "Passaporte italiano bordô com o emblema da República Italiana",
    },
    lead: "Vai emitir ou renovar seu passaporte italiano? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação sobre agendamento e próximas etapas.",
    cta: "Analisar Meu Caso",
  },

  intro: {
    topicId: "como-funciona",
    image: {
      photo: photos.palacioItalianoBandeiras,
      alt: "Palácio histórico italiano com bandeiras na fachada",
    },
    highlights: [
      { title: "Emissão", text: "Primeiro passaporte para quem tem cidadania reconhecida" },
      { title: "Renovação", text: "Novo passaporte quando o anterior vence ou se esgota" },
      { title: "Agendamento", text: "Pedido marcado no sistema do consulado" },
    ],
  },

  country: {
    eyebrow: "Itália",
    title: "Passaporte Italiano Sem Sair do Brasil",
    body: [
      "Quem tem cidadania italiana reconhecida e mora no Brasil pode solicitar o passaporte ao consulado italiano responsável pela sua área de residência, sem precisar viajar à Itália.",
      "Antes do agendamento, vale conferir se o AIRE está atualizado e se a documentação está completa.",
    ],
    map: "italia",
    caption: "Itália, por região",
  },

  documents: {
    topicId: "documentos",
    items: [
      { title: "Formulário de solicitação", text: "Preenchido conforme o modelo do consulado" },
      { title: "Fotos recentes", text: "No padrão exigido para passaporte" },
      { title: "Documento de identidade", text: "Documento válido do requerente" },
      { title: "Passaporte anterior", text: "Em caso de renovação" },
    ],
  },

  process: {
    title: "Como Funciona o Processo",
    steps: [
      {
        title: "Análise do Caso",
        text: "Verificamos sua situação: primeira emissão ou renovação, AIRE e documentação.",
      },
      {
        title: "Documentação",
        text: "Orientamos sobre os documentos, fotos e informações que o consulado pode solicitar.",
      },
      {
        title: "Agendamento",
        text: "Orientamos sobre o agendamento no sistema do consulado e a preparação para o atendimento.",
      },
      {
        title: "Acompanhamento",
        text: "O cliente recebe orientação sobre as próximas etapas do pedido.",
      },
    ],
  },

  topics: [
    {
      id: "como-funciona",
      title: "Como Funciona o Passaporte Italiano?",
      body: [
        "O passaporte italiano é emitido para cidadãos italianos. Quem mora no Brasil faz o pedido no consulado italiano responsável pela sua área de residência, com agendamento prévio.",
        "Por ser um passaporte da Itália, é também um documento de viagem de cidadão da União Europeia.",
      ],
    },
    {
      id: "quem-pode",
      title: "Quem Pode Solicitar?",
      body: [
        "Cidadãos italianos, incluindo brasileiros com cidadania italiana já reconhecida. Para menores de idade, em geral é necessário o consentimento dos pais.",
      ],
    },
    {
      id: "documentos",
      title: "Quais Documentos Podem Ser Necessários?",
      body: [
        "Em geral, o consulado pede o formulário de solicitação, fotos recentes no padrão de passaporte, documento de identidade e, na renovação, o passaporte anterior.",
        "A lista exata e o pagamento das taxas seguem as regras do consulado, por isso a documentação é conferida na análise do caso.",
      ],
    },
    {
      id: "agendamento",
      title: "Como Funciona o Agendamento?",
      body: [
        "O atendimento para passaporte é marcado com antecedência pelo sistema de agendamento do consulado. A disponibilidade de datas varia e é definida pelo próprio consulado.",
      ],
    },
    {
      id: "emissao",
      title: "Como Funciona a Emissão?",
      body: [
        "No dia do atendimento, o consulado confere os documentos e, em geral, coleta dados biométricos, como as impressões digitais, por isso o comparecimento pessoal costuma ser necessário.",
        "A forma de retirada ou entrega do passaporte segue as regras do consulado.",
      ],
    },
    {
      id: "renovacao",
      title: "Como Funciona a Renovação?",
      body: [
        "Na prática, renovar significa emitir um novo passaporte. O processo segue as mesmas etapas da emissão, e o passaporte anterior costuma ser apresentado ao consulado.",
      ],
    },
    {
      id: "aire",
      title: "O AIRE Precisa Estar Atualizado?",
      body: [
        "Em geral, sim. O consulado considera os dados do AIRE ao processar o pedido, por isso endereço e estado civil precisam estar corretos antes do agendamento.",
      ],
      link: {
        href: "/aire/sorocaba/",
        label: "Atualização e Inscrição AIRE em Sorocaba",
      },
    },
    {
      id: "assessoria",
      title: "Como uma Assessoria Pode Auxiliar no Processo?",
      body: [
        "Uma assessoria para passaporte italiano confere a situação do AIRE, indica os documentos, orienta sobre o agendamento e esclarece as próximas etapas.",
        "A análise e a emissão do passaporte continuam sendo do consulado.",
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
        text: "Identificamos se o caso é de emissão ou renovação e o que precisa ser ajustado.",
      },
      {
        title: "Orientação documental",
        text: "Indicação clara dos documentos que podem ser solicitados.",
      },
      {
        title: "Organização do processo",
        text: "Documentação conferida antes do atendimento no consulado.",
      },
      {
        title: "Comunicação direta",
        text: "Contato pelo WhatsApp para tirar dúvidas e conversar sobre o caso.",
      },
      {
        title: "Acompanhamento das etapas",
        text: "Orientação sobre o que vem a seguir em cada fase do pedido.",
      },
    ],
  },

  faq: {
    title: "Perguntas Frequentes",
    items: [
      {
        q: "Quem pode tirar o passaporte italiano?",
        a: "Cidadãos italianos, incluindo brasileiros com cidadania italiana reconhecida. Menores de idade, em geral, precisam do consentimento dos pais.",
      },
      {
        q: "Como tirar o passaporte italiano morando em Sorocaba?",
        a: "O pedido é feito no consulado italiano responsável pela sua área de residência, com agendamento prévio. A Citizen orienta sobre documentos e etapas.",
      },
      {
        q: "Quais documentos são necessários?",
        a: "Em geral, formulário, fotos recentes, documento de identidade e, na renovação, o passaporte anterior. A lista exata segue as regras do consulado.",
      },
      {
        q: "Preciso ir pessoalmente ao consulado?",
        a: "Em geral, sim: a emissão costuma envolver a coleta de dados biométricos, como as impressões digitais.",
      },
      {
        q: "Como funciona a renovação do passaporte italiano?",
        a: "A renovação é a emissão de um novo passaporte, com as mesmas etapas. O passaporte anterior costuma ser apresentado no atendimento.",
      },
      {
        q: "O AIRE precisa estar atualizado para tirar o passaporte?",
        a: "Em geral, sim. O consulado considera os dados do AIRE, então endereço e estado civil precisam estar corretos.",
      },
      {
        q: "Quanto tempo leva para emitir o passaporte italiano?",
        a: "Depende da agenda e dos procedimentos do consulado, e pode variar. Por isso a Citizen não informa um prazo fixo.",
      },
      {
        q: "A Citizen pode analisar meu caso?",
        a: "Sim. Você explica sua situação pelo WhatsApp e a Citizen orienta sobre AIRE, documentação, agendamento e próximas etapas.",
      },
    ],
  },

  finalCta: {
    title: "Precisa de Ajuda com Seu Passaporte Italiano?",
    text: "Explique sua situação para a Citizen Cidadania e entenda quais podem ser os próximos passos.",
    cta: "Analisar Meu Caso",
  },
};

export default page;
