import type { ServicePageContent } from "../types";
import { photos } from "@/data/photos";

const page: ServicePageContent = {
  service: "passaporte-americano",
  city: "sorocaba",

  strategy: {
    internalName: "Serviço Passaporte e Visto Americano em Sorocaba",
    primaryKeyword: "passaporte e visto americano em Sorocaba",
    secondaryKeywords: [
      "passaporte americano Sorocaba",
      "visto americano Sorocaba",
      "assessoria visto americano Sorocaba",
      "assessoria passaporte americano Sorocaba",
      "renovação visto americano Sorocaba",
      "renovação passaporte americano Sorocaba",
      "como tirar visto americano",
      "como tirar passaporte americano",
      "DS-160",
    ],
    searchIntent:
      "Transacional: brasileiros que precisam do visto para viajar aos Estados Unidos e cidadãos americanos que moram na região e precisam emitir ou renovar o passaporte. A página explica a diferença entre os dois.",
    searchVolume: "VOLUME NÃO VALIDADO",
  },

  seoTitle: "Passaporte e Visto Americano em Sorocaba",
  metaDescription:
    "Assessoria para Passaporte e Visto Americano em Sorocaba, com orientação sobre documentação, formulários, agendamento, emissão e renovação.",
  h1: "Passaporte e Visto Americano em Sorocaba",
  updated: "2026-11-12",
  whatsappMessage:
    "Olá! Quero fazer o serviço de Passaporte e Visto Americano em Sorocaba.",
  serviceType: "Assessoria para passaporte e visto americano",

  hero: {
    eyebrow: "Assessoria para passaporte e visto americano",
    image: {
      photo: photos.passaporteAmericanoMao,
      alt: "Mão segurando um passaporte dos Estados Unidos sobre fundo claro",
    },
    lead: "Precisa do visto para viajar aos Estados Unidos ou do passaporte americano? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas.",
    cta: "Analisar Meu Caso",
  },

  intro: {
    topicId: "diferenca",
    image: {
      photo: photos.passaportesAmericanos,
      alt: "Duas mãos segurando passaportes americanos em uma praça",
    },
    highlights: [
      { title: "Visto", text: "Para brasileiros que vão viajar aos Estados Unidos" },
      { title: "Passaporte", text: "Para quem já é cidadão americano" },
      { title: "Renovação", text: "De visto ou de passaporte, conforme as regras de cada caso" },
    ],
  },

  country: {
    eyebrow: "Estados Unidos",
    title: "Do Brasil para os Estados Unidos",
    body: [
      "Visto e passaporte americano são emitidos pelo governo dos Estados Unidos. Para quem mora no Brasil, os pedidos passam pela embaixada ou pelos consulados americanos no país.",
      "Cidadãos americanos, mesmo com dupla nacionalidade, devem usar o passaporte americano para entrar e sair dos Estados Unidos.",
    ],
    map: "estadosUnidos",
    caption: "Estados Unidos contíguos, por estado",
  },

  documents: {
    topicId: "documentos",
    items: [
      { title: "Formulário", text: "DS-160 para o visto; DS-11 ou DS-82 para o passaporte" },
      { title: "Passaporte ou prova de cidadania", text: "Passaporte brasileiro válido para o visto; prova de cidadania americana para o passaporte" },
      { title: "Taxa paga", text: "Comprovante do pagamento da taxa consular" },
      { title: "Foto", text: "No padrão exigido pelo Departamento de Estado" },
    ],
  },

  process: {
    title: "Como Funciona o Processo",
    steps: [
      {
        title: "Análise do Caso",
        text: "Identificamos se o seu caso é de visto, de passaporte ou de renovação.",
      },
      {
        title: "Documentação",
        text: "Orientamos sobre o formulário certo, a taxa e os documentos do pedido.",
      },
      {
        title: "Preparação",
        text: "As informações são organizadas e conferidas antes do envio e do agendamento.",
      },
      {
        title: "Acompanhamento",
        text: "O cliente recebe orientação sobre as próximas etapas, incluindo a entrevista, quando houver.",
      },
    ],
  },

  topics: [
    {
      id: "diferenca",
      title: "Qual a Diferença Entre Passaporte e Visto Americano?",
      body: [
        "O visto é a autorização para estrangeiros, como brasileiros, viajarem aos Estados Unidos. O passaporte americano é o documento de viagem de quem já é cidadão dos Estados Unidos.",
        "Na prática, cada pessoa precisa de um ou de outro, nunca dos dois. A análise do caso mostra qual é o seu.",
      ],
    },
    {
      id: "visto",
      title: "Como Funciona o Visto Americano?",
      body: [
        "Para quem mora no Brasil, o pedido começa pelo formulário DS-160 e pelo pagamento da taxa consular. Depois são agendados a coleta de dados biométricos no CASV e a entrevista no consulado, conforme o caso.",
        "A decisão sobre o visto é sempre do consulado americano.",
      ],
    },
    {
      id: "renovacao-visto",
      title: "Como Funciona a Renovação do Visto?",
      body: [
        "A renovação segue o mesmo caminho de formulário, taxa e agendamento. Em alguns casos, pode haver dispensa de entrevista, conforme as regras vigentes do consulado.",
      ],
    },
    {
      id: "quem-pode",
      title: "Quem Pode Solicitar o Passaporte Americano?",
      body: [
        "Cidadãos americanos, como quem nasceu nos Estados Unidos ou foi naturalizado americano.",
        "Quem nasceu no exterior filho de cidadão americano pode precisar, antes, do registro de nascimento no exterior (CRBA), que pode ser pedido junto com o primeiro passaporte.",
      ],
    },
    {
      id: "documentos",
      title: "Quais Documentos Podem Ser Necessários?",
      body: [
        "Para o visto, em geral: passaporte brasileiro válido, confirmação do DS-160, comprovante da taxa e foto. Para o passaporte americano: o formulário do tipo de pedido, a prova de cidadania, documento com foto e foto no padrão.",
        "A lista exata depende do caso e é conferida na análise.",
      ],
    },
    {
      id: "emissao",
      title: "Como Funciona a Emissão do Passaporte?",
      body: [
        "O primeiro passaporte e o de menores de 16 anos costumam exigir comparecimento pessoal à embaixada ou ao consulado, com o formulário DS-11 e a documentação original.",
        "Para menores de 16 anos, em geral é necessário o consentimento dos dois pais ou responsáveis.",
      ],
    },
    {
      id: "renovacao",
      title: "Como Funciona a Renovação do Passaporte?",
      body: [
        "Em alguns casos, adultos podem renovar sem comparecer pessoalmente, usando o formulário DS-82, desde que atendam aos critérios do Departamento de Estado.",
      ],
    },
    {
      id: "assessoria",
      title: "Como uma Assessoria Pode Auxiliar no Processo?",
      body: [
        "Uma assessoria para passaporte e visto americano identifica o tipo de pedido, indica o formulário e os documentos, confere as informações e orienta sobre agendamento e entrevista.",
        "A análise e a decisão continuam sendo do governo dos Estados Unidos, e nenhuma assessoria pode garantir aprovação.",
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
        text: "Identificamos se o seu pedido é de visto ou de passaporte.",
      },
      {
        title: "Orientação documental",
        text: "Indicação clara do formulário e dos documentos necessários.",
      },
      {
        title: "Organização do processo",
        text: "Informações conferidas antes do envio e do agendamento.",
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
        q: "Qual a diferença entre passaporte e visto americano?",
        a: "O visto é para estrangeiros que querem viajar aos Estados Unidos. O passaporte americano é o documento de quem já é cidadão dos Estados Unidos.",
      },
      {
        q: "Como tirar o visto americano morando em Sorocaba?",
        a: "O pedido começa pelo formulário DS-160 e pelo pagamento da taxa. Depois vêm o agendamento da coleta de dados no CASV e a entrevista no consulado, conforme o caso.",
      },
      {
        q: "A Citizen garante a aprovação do visto?",
        a: "Não. A decisão é sempre do consulado americano. A Citizen orienta o preenchimento, a documentação e a preparação para cada etapa.",
      },
      {
        q: "Preciso fazer entrevista para renovar o visto?",
        a: "Depende do caso. Em algumas renovações pode haver dispensa de entrevista, conforme as regras vigentes do consulado.",
      },
      {
        q: "Quem pode tirar o passaporte americano?",
        a: "Cidadãos americanos, por nascimento, naturalização ou por serem filhos de americanos com a cidadania registrada.",
      },
      {
        q: "Posso renovar o passaporte americano sem ir ao consulado?",
        a: "Em alguns casos, sim. Adultos que atendem aos critérios do Departamento de Estado podem renovar com o formulário DS-82, sem comparecimento pessoal.",
      },
      {
        q: "Quanto tempo leva?",
        a: "Depende do tipo de pedido, da agenda do consulado e do processamento pelo governo americano, e pode variar. Por isso a Citizen não informa um prazo fixo.",
      },
      {
        q: "A Citizen pode analisar meu caso?",
        a: "Sim. Você explica sua situação pelo WhatsApp e a Citizen orienta se o caso é de visto ou de passaporte, qual a documentação e quais as próximas etapas.",
      },
    ],
  },

  finalCta: {
    title: "Precisa de Ajuda com Visto ou Passaporte Americano?",
    text: "Explique sua situação para a Citizen Cidadania e entenda quais podem ser os próximos passos.",
    cta: "Analisar Meu Caso",
  },
};

export default page;
