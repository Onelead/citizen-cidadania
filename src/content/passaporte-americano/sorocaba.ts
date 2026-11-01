import type { ServicePageContent } from "../types";
import { photos } from "@/data/photos";

const page: ServicePageContent = {
  service: "passaporte-americano",
  city: "sorocaba",

  strategy: {
    internalName: "Serviço Passaporte Americano em Sorocaba",
    primaryKeyword: "passaporte americano em Sorocaba",
    secondaryKeywords: [
      "passaporte americano Sorocaba",
      "assessoria passaporte americano Sorocaba",
      "renovação passaporte americano Sorocaba",
      "emissão passaporte americano Sorocaba",
      "agendamento passaporte americano Sorocaba",
      "documentação passaporte americano",
      "como tirar passaporte americano",
    ],
    searchIntent:
      "Transacional: cidadãos americanos que moram na região, muitas vezes com dupla nacionalidade, e precisam tirar o primeiro passaporte, renovar ou emitir para um filho. Não confundir com visto americano.",
    searchVolume: "VOLUME NÃO VALIDADO",
  },

  seoTitle: "Passaporte Americano em Sorocaba",
  metaDescription:
    "Assessoria para Passaporte Americano em Sorocaba, com orientação sobre documentação, emissão, renovação e etapas relacionadas ao processo.",
  h1: "Passaporte Americano em Sorocaba",
  updated: "2026-11-01",
  whatsappMessage:
    "Olá! Quero fazer o serviço de Passaporte Americano em Sorocaba.",
  serviceType: "Assessoria para emissão e renovação de passaporte americano",

  hero: {
    eyebrow: "Assessoria para passaporte americano",
    image: {
      photo: photos.passaporteAmericanoMao,
      alt: "Mão segurando um passaporte dos Estados Unidos sobre fundo claro",
    },
    lead: "É cidadão americano e precisa emitir ou renovar seu passaporte? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas.",
    cta: "Analisar Meu Caso",
  },

  intro: {
    topicId: "como-funciona",
    image: {
      photo: photos.passaportesAmericanos,
      alt: "Duas mãos segurando passaportes americanos em uma praça",
    },
    highlights: [
      { title: "Primeiro passaporte", text: "Para cidadãos americanos que nunca tiveram o documento" },
      { title: "Renovação", text: "Conforme os critérios do Departamento de Estado" },
      { title: "Menores", text: "Com regras próprias e consentimento dos pais" },
    ],
  },

  country: {
    eyebrow: "Estados Unidos",
    title: "Cidadão Americano Morando no Brasil",
    body: [
      "O passaporte americano é emitido pelo governo dos Estados Unidos. Para quem vive no Brasil, o pedido passa pela embaixada ou pelo consulado americano responsável pela sua região.",
      "Cidadãos americanos, mesmo com dupla nacionalidade, devem usar o passaporte americano para entrar e sair dos Estados Unidos.",
    ],
    map: "estadosUnidos",
    caption: "Estados Unidos contíguos, por estado",
  },

  documents: {
    topicId: "documentos",
    items: [
      { title: "Formulário", text: "DS-11 ou DS-82, conforme o tipo de pedido" },
      { title: "Prova de cidadania", text: "Certidão americana, CRBA, naturalização ou passaporte anterior" },
      { title: "Documento com foto", text: "Identificação válida do requerente" },
      { title: "Foto de passaporte", text: "No padrão exigido pelo Departamento de Estado" },
    ],
  },

  process: {
    title: "Como Funciona o Processo",
    steps: [
      {
        title: "Análise do Caso",
        text: "Identificamos se o pedido é de primeiro passaporte, renovação ou para menor de idade.",
      },
      {
        title: "Documentação",
        text: "Orientamos sobre formulários, comprovantes de cidadania e demais documentos.",
      },
      {
        title: "Preparação",
        text: "A documentação é organizada e conferida de acordo com o tipo de pedido.",
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
      title: "Como Funciona o Passaporte Americano?",
      body: [
        "O passaporte americano é o documento de viagem dos cidadãos dos Estados Unidos, emitido pelo Departamento de Estado.",
        "Quem mora no Brasil faz o pedido pela embaixada ou pelo consulado americano responsável pela sua região.",
      ],
    },
    {
      id: "nao-e-visto",
      title: "Passaporte Americano Não é Visto Americano",
      body: [
        "O passaporte é só para quem já é cidadão dos Estados Unidos. O visto é a autorização para estrangeiros viajarem ao país e segue outro processo.",
        "Esta página trata apenas do passaporte americano.",
      ],
    },
    {
      id: "quem-pode",
      title: "Quem Pode Solicitar?",
      body: [
        "Cidadãos americanos, como quem nasceu nos Estados Unidos ou foi naturalizado americano.",
        "Quem nasceu no exterior filho de cidadão americano pode precisar, antes, do registro de nascimento no exterior (CRBA), que pode ser pedido junto com o primeiro passaporte.",
      ],
    },
    {
      id: "documentos",
      title: "Quais Documentos Podem Ser Necessários?",
      body: [
        "Em geral, o formulário do tipo de pedido, a prova de cidadania americana, um documento com foto e a foto no padrão de passaporte, além do pagamento das taxas.",
        "A lista exata depende do caso e é conferida na análise.",
      ],
    },
    {
      id: "emissao",
      title: "Como Funciona a Emissão?",
      body: [
        "O primeiro passaporte e o passaporte de menores de 16 anos costumam exigir comparecimento pessoal à embaixada ou ao consulado, com o formulário DS-11 e a documentação original.",
        "Para menores de 16 anos, em geral é necessário o consentimento dos dois pais ou responsáveis.",
      ],
    },
    {
      id: "renovacao",
      title: "Como Funciona a Renovação?",
      body: [
        "Em alguns casos, adultos podem renovar sem comparecer pessoalmente, usando o formulário DS-82, desde que atendam aos critérios do Departamento de Estado.",
        "Quando os critérios não são atendidos, o pedido segue como uma nova emissão.",
      ],
    },
    {
      id: "agendamento",
      title: "Existem Situações que Exigem Agendamento?",
      body: [
        "Sim. Os atendimentos presenciais para cidadãos americanos, como a primeira emissão e o passaporte de menores, em geral são marcados com antecedência pelo sistema da embaixada ou do consulado.",
      ],
    },
    {
      id: "documentacao",
      title: "Como Funciona a Documentação?",
      body: [
        "O ponto central é comprovar a cidadania americana. Por isso, certidões, registros e documentos anteriores precisam estar organizados e com dados consistentes entre si.",
      ],
    },
    {
      id: "assessoria",
      title: "Como uma Assessoria Pode Auxiliar no Processo?",
      body: [
        "Uma assessoria para passaporte americano identifica o tipo de pedido, indica os formulários e documentos e confere a documentação antes do envio ou do atendimento.",
        "A análise e a emissão do passaporte continuam sendo do governo dos Estados Unidos.",
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
        text: "Identificamos o tipo de pedido e o que ele exige.",
      },
      {
        title: "Orientação documental",
        text: "Indicação clara dos formulários e comprovantes necessários.",
      },
      {
        title: "Organização do processo",
        text: "Documentação conferida antes do envio ou do atendimento.",
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
        q: "Passaporte americano é a mesma coisa que visto americano?",
        a: "Não. O passaporte é o documento de cidadãos dos Estados Unidos. O visto é para estrangeiros que querem viajar ao país e segue outro processo.",
      },
      {
        q: "Quem pode tirar o passaporte americano?",
        a: "Cidadãos americanos, por nascimento, naturalização ou por serem filhos de americanos com a cidadania registrada.",
      },
      {
        q: "Como tirar o passaporte americano morando em Sorocaba?",
        a: "O pedido passa pela embaixada ou pelo consulado americano responsável pela sua região, em geral com agendamento para os atendimentos presenciais.",
      },
      {
        q: "Quais documentos são necessários?",
        a: "Em geral, formulário DS-11 ou DS-82, prova de cidadania americana, documento com foto e foto no padrão de passaporte. A lista varia conforme o caso.",
      },
      {
        q: "Posso renovar o passaporte americano sem ir ao consulado?",
        a: "Em alguns casos, sim. Adultos que atendem aos critérios do Departamento de Estado podem renovar com o formulário DS-82, sem comparecimento pessoal.",
      },
      {
        q: "Como funciona o passaporte americano para menores?",
        a: "Para menores de 16 anos, em geral é necessário comparecimento pessoal e o consentimento dos dois pais ou responsáveis.",
      },
      {
        q: "Quanto tempo leva para emitir o passaporte americano?",
        a: "Depende do tipo de pedido e do processamento pelo governo americano, e pode variar. Por isso a Citizen não informa um prazo fixo.",
      },
      {
        q: "A Citizen pode analisar meu caso?",
        a: "Sim. Você explica sua situação pelo WhatsApp e a Citizen orienta sobre o tipo de pedido, a documentação e as próximas etapas.",
      },
    ],
  },

  finalCta: {
    title: "Precisa de Ajuda com Seu Passaporte Americano?",
    text: "Explique sua situação para a Citizen Cidadania e entenda quais podem ser os próximos passos.",
    cta: "Analisar Meu Caso",
  },
};

export default page;
