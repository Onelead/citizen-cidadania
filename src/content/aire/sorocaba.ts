import type { ServicePageContent } from "../types";
import { photos } from "@/data/photos";

const page: ServicePageContent = {
  service: "aire",
  city: "sorocaba",

  strategy: {
    internalName: "Serviço AIRE em Sorocaba",
    primaryKeyword: "atualização e inscrição AIRE em Sorocaba",
    secondaryKeywords: [
      "AIRE Sorocaba",
      "inscrição AIRE Sorocaba",
      "cadastro AIRE Sorocaba",
      "atualização AIRE Sorocaba",
      "regularização AIRE Sorocaba",
      "assessoria AIRE Sorocaba",
      "como fazer AIRE",
      "atualizar endereço AIRE",
      "AIRE estado civil",
    ],
    searchIntent:
      "Transacional e de dúvida: cidadãos italianos que moram na região e precisam se inscrever, atualizar dados ou regularizar o AIRE, muitas vezes antes de pedir passaporte ou outro serviço consular.",
    searchVolume: "VOLUME NÃO VALIDADO",
  },

  seoTitle: "Atualização e Inscrição AIRE em Sorocaba",
  metaDescription:
    "Atualização e inscrição AIRE em Sorocaba: assessoria para cadastro, atualização e regularização do AIRE. Fale com a Citizen Cidadania sobre seu caso.",
  h1: "Atualização e Inscrição AIRE em Sorocaba",
  updated: "2026-11-01",
  whatsappMessage:
    "Olá! Quero fazer o serviço de Atualização e Inscrição AIRE em Sorocaba.",
  serviceType: "Assessoria para inscrição e atualização do AIRE",

  hero: {
    eyebrow: "Assessoria AIRE",
    image: {
      photo: photos.bandeiraItalianaVaranda,
      alt: "Bandeira italiana hasteada na varanda de um edifício histórico",
    },
    lead: "Precisa fazer a inscrição, atualizar ou regularizar seu AIRE? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas.",
    cta: "Analisar Meu Caso",
  },

  intro: {
    topicId: "o-que-e",
    image: {
      photo: photos.fachadaBandeirasItaliaUe,
      alt: "Fachada de um palácio italiano com as bandeiras da Itália e da União Europeia",
    },
    highlights: [
      { title: "Inscrição", text: "Para quem ainda não está registrado no AIRE" },
      { title: "Atualização", text: "Endereço, estado civil, filhos e outros dados" },
      { title: "Regularização", text: "Para cadastros pendentes ou desatualizados" },
    ],
  },

  country: {
    eyebrow: "Itália",
    title: "Morando no Brasil, Registrado na Itália",
    body: [
      "O AIRE liga o cidadão italiano que vive no exterior ao seu município de referência na Itália, o comune.",
      "A inscrição e as atualizações são feitas pelo consulado responsável pela sua área de residência no Brasil, que encaminha as informações ao comune.",
    ],
    map: "italia",
    caption: "Itália, por região",
  },

  documents: {
    topicId: "cadastro",
    items: [
      { title: "Identificação", text: "Documento de identidade do cidadão italiano" },
      { title: "Comprovante de residência", text: "Endereço atual no Brasil" },
      { title: "Dados familiares", text: "Informações solicitadas pelo consulado" },
      { title: "Certidões", text: "Quando houver alteração de estado civil ou filhos" },
    ],
  },

  process: {
    title: "Como Funciona o Processo",
    steps: [
      {
        title: "Análise do Caso",
        text: "Entendemos sua situação no AIRE: inscrição nova, atualização de dados ou regularização.",
      },
      {
        title: "Documentação",
        text: "Orientamos sobre os documentos e informações que o consulado pode solicitar.",
      },
      {
        title: "Preparação",
        text: "A solicitação é organizada e conferida de acordo com o procedimento correspondente.",
      },
      {
        title: "Acompanhamento",
        text: "O cliente recebe orientação sobre as próximas etapas do pedido.",
      },
    ],
  },

  topics: [
    {
      id: "o-que-e",
      title: "O Que é o AIRE?",
      body: [
        "AIRE é a sigla de Anagrafe degli Italiani Residenti all'Estero, o registro dos cidadãos italianos que moram fora da Itália.",
        "É por ele que o Estado italiano sabe onde o cidadão reside, e os dados ficam ligados ao município italiano de referência.",
      ],
    },
    {
      id: "quem-precisa",
      title: "Quem Precisa Fazer a Inscrição no AIRE?",
      body: [
        "A inscrição é obrigatória para cidadãos italianos que residem fora da Itália por mais de 12 meses. Isso inclui brasileiros com cidadania italiana reconhecida que vivem no Brasil.",
      ],
    },
    {
      id: "cadastro",
      title: "Como Fazer o Cadastro no AIRE?",
      body: [
        "O pedido de inscrição é feito ao consulado italiano responsável pela área de residência, em geral pelo portal Fast It, do Ministério das Relações Exteriores da Itália.",
        "Costumam ser pedidos documento de identidade, comprovante de residência e dados familiares, conforme a orientação do consulado.",
      ],
    },
    {
      id: "como-atualizar",
      title: "Como Atualizar o AIRE?",
      body: [
        "A atualização também é feita junto ao consulado responsável, informando o dado que mudou e enviando os documentos que comprovam a alteração.",
      ],
    },
    {
      id: "quando-atualizar",
      title: "Quando é Necessário Atualizar o AIRE?",
      body: [
        "Sempre que houver mudança relevante: endereço, estado civil, nascimento de filhos, óbito de um familiar inscrito ou retorno para a Itália.",
        "Manter os dados corretos evita problemas em outros pedidos ao consulado.",
      ],
    },
    {
      id: "endereco",
      title: "Mudança de Endereço Precisa Ser Informada?",
      body: [
        "Sim. Uma mudança de endereço, mesmo dentro da mesma cidade ou para outra cidade do Brasil, precisa ser comunicada ao consulado para manter o AIRE atualizado.",
      ],
    },
    {
      id: "estado-civil",
      title: "Alteração de Estado Civil Precisa Ser Atualizada?",
      body: [
        "Sim. Casamento, divórcio e viuvez devem ser comunicados. Em geral, o processo envolve a transcrição da certidão correspondente nos registros italianos.",
      ],
    },
    {
      id: "regularizacao",
      title: "Como Funciona a Regularização do AIRE?",
      body: [
        "A regularização é necessária quando a inscrição nunca foi feita ou quando os dados estão desatualizados. O primeiro passo é identificar o que está pendente para então reunir os documentos e fazer a solicitação ao consulado.",
      ],
    },
    {
      id: "assessoria",
      title: "Como uma Assessoria Pode Auxiliar no AIRE?",
      body: [
        "Uma assessoria AIRE ajuda a entender qual pedido fazer, indica os documentos, confere as informações antes do envio e orienta as próximas etapas.",
        "A análise e a decisão sobre o pedido continuam sendo do consulado.",
      ],
    },
    {
      id: "servicos-consulares",
      title: "Qual a Relação Entre AIRE e Serviços Consulares?",
      body: [
        "Muitos serviços consulares, como o pedido de passaporte italiano, dependem de dados atualizados no AIRE.",
        "O endereço registrado também é usado para enviar o material de votação aos italianos que vivem no exterior.",
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
        text: "Identificamos se o seu caso é de inscrição, atualização ou regularização.",
      },
      {
        title: "Orientação documental",
        text: "Indicação clara dos documentos que podem ser solicitados.",
      },
      {
        title: "Organização do processo",
        text: "Informações conferidas antes do envio ao consulado.",
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
        q: "O que é o AIRE?",
        a: "É o registro dos cidadãos italianos que moram fora da Itália, a Anagrafe degli Italiani Residenti all'Estero.",
      },
      {
        q: "Quem precisa fazer a inscrição no AIRE?",
        a: "Cidadãos italianos que residem fora da Itália por mais de 12 meses, incluindo quem tem cidadania italiana reconhecida e mora no Brasil.",
      },
      {
        q: "Como fazer a inscrição no AIRE morando em Sorocaba?",
        a: "O pedido é feito ao consulado italiano responsável pela sua área de residência, em geral pelo portal Fast It. A Citizen orienta sobre os documentos e as etapas.",
      },
      {
        q: "Mudei de endereço. Preciso atualizar o AIRE?",
        a: "Sim. Toda mudança de endereço precisa ser comunicada ao consulado, mesmo dentro da mesma cidade.",
      },
      {
        q: "Casei ou me divorciei. Preciso atualizar o AIRE?",
        a: "Sim. Alterações de estado civil devem ser comunicadas e, em geral, envolvem a transcrição da certidão nos registros italianos.",
      },
      {
        q: "O AIRE precisa estar atualizado para tirar o passaporte italiano?",
        a: "Em geral, o consulado considera os dados do AIRE ao processar pedidos como o de passaporte, por isso é importante mantê-los atualizados.",
      },
      {
        q: "Quanto tempo leva a atualização ou a inscrição no AIRE?",
        a: "O prazo depende do consulado e do tipo de pedido, e pode variar. Por isso a Citizen não informa um prazo fixo.",
      },
      {
        q: "A Citizen pode analisar meu caso?",
        a: "Sim. Você explica sua situação pelo WhatsApp e a Citizen orienta se o caso é de inscrição, atualização ou regularização e quais são os próximos passos.",
      },
    ],
  },

  finalCta: {
    title: "Precisa Atualizar ou Fazer Sua Inscrição no AIRE?",
    text: "Explique sua situação para a Citizen Cidadania e entenda quais podem ser os próximos passos.",
    cta: "Analisar Meu Caso",
  },
};

export default page;
