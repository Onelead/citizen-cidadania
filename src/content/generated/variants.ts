import type { ServiceSlug } from "@/data/services";

type Variants = {
  /** Meta descriptions: frases diferentes, nunca só a cidade trocada. */
  meta: ((city: string) => string)[];
  lead: ((city: string) => string)[];
  ctaTitle: string[];
};

export const variants: Record<ServiceSlug, Variants> = {
  "cidadania-portuguesa": {
    meta: [
      (c) => `Empresa de assessoria de cidadania portuguesa em ${c} para análise, documentação, orientação e acompanhamento do processo de cidadania.`,
      (c) => `Assessoria de cidadania portuguesa em ${c}: análise do caso, organização da documentação e orientação em cada etapa do processo.`,
      (c) => `Cidadania portuguesa em ${c} com assessoria para verificar o direito, reunir certidões e acompanhar o processo de nacionalidade.`,
      (c) => `Empresa de cidadania portuguesa em ${c}: orientação sobre documentação e processo para filhos, netos e cônjuges de portugueses.`,
      (c) => `Dupla cidadania portuguesa em ${c}: a Citizen Cidadania analisa seu caso e orienta sobre documentos, processo e próximas etapas.`,
    ],
    lead: [
      () => "Precisa entender como iniciar seu processo de cidadania portuguesa? A Citizen Cidadania auxilia na análise do caso, documentação e orientação das próximas etapas.",
      () => "Tem família portuguesa e quer saber se pode pedir a nacionalidade? A Citizen Cidadania analisa o seu caso e orienta sobre documentos e etapas.",
      () => "Quer a dupla cidadania portuguesa e não sabe por onde começar? A Citizen Cidadania organiza a análise do caso, a documentação e os próximos passos.",
    ],
    ctaTitle: [
      "Precisa de Ajuda com Sua Cidadania Portuguesa?",
      "Quer Saber se Sua Família Tem Direito?",
      "Vamos Analisar Seu Caso de Cidadania Portuguesa?",
    ],
  },

  "cidadania-espanhola": {
    meta: [
      (c) => `Empresa de assessoria de cidadania espanhola em ${c} para análise, documentação, orientação e acompanhamento do processo de cidadania.`,
      (c) => `Assessoria de cidadania espanhola em ${c}: análise do caso, organização de certidões e orientação em cada etapa do processo.`,
      (c) => `Cidadania espanhola em ${c} para descendentes de espanhóis, com análise do caminho possível, documentação e acompanhamento.`,
      (c) => `Empresa de cidadania espanhola em ${c}: orientação sobre nacionalidade espanhola, documentos e processo com a Citizen Cidadania.`,
      (c) => `Dupla cidadania espanhola em ${c}: entenda se você tem direito e quais documentos reunir com a assessoria da Citizen Cidadania.`,
    ],
    lead: [
      () => "Quer saber se tem direito à cidadania espanhola? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas.",
      () => "Tem pai, mãe ou avós espanhóis? A Citizen Cidadania analisa a sua história familiar e orienta sobre o caminho possível e os documentos.",
      () => "Quer entender o processo de cidadania espanhola antes de começar? A Citizen Cidadania organiza a análise do caso e os próximos passos.",
    ],
    ctaTitle: [
      "Precisa de Ajuda com Sua Cidadania Espanhola?",
      "Quer Saber se Você Tem Direito à Cidadania Espanhola?",
      "Vamos Analisar Sua História Familiar?",
    ],
  },

  "cidadania-alema": {
    meta: [
      (c) => `Empresa de assessoria de cidadania alemã em ${c} para análise, documentação, orientação e acompanhamento do processo de cidadania.`,
      (c) => `Assessoria de cidadania alemã em ${c}: análise da linha familiar, pesquisa de documentos e orientação em cada etapa do processo.`,
      (c) => `Cidadania alemã em ${c} para descendentes de alemães, com análise do caso, organização de certidões e acompanhamento do pedido.`,
      (c) => `Empresa de cidadania alemã em ${c}: orientação sobre nacionalidade alemã, documentos de cada geração e processo de reconhecimento.`,
      (c) => `Dupla cidadania alemã em ${c}: a Citizen Cidadania analisa sua linha familiar e orienta sobre documentos e próximas etapas.`,
    ],
    lead: [
      () => "É descendente de alemães e quer saber se tem direito à cidadania? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas.",
      () => "Tem um antepassado alemão na família? A Citizen Cidadania analisa a linha familiar e orienta sobre os documentos de cada geração.",
      () => "Quer entender se a cidadania alemã foi transmitida na sua família? A Citizen Cidadania organiza a análise do caso e os próximos passos.",
    ],
    ctaTitle: [
      "Precisa de Ajuda com Sua Cidadania Alemã?",
      "Quer Saber se a Cidadania Alemã Chegou Até Você?",
      "Vamos Analisar Sua Linha Familiar?",
    ],
  },

  "passaporte-italiano": {
    meta: [
      (c) => `Assessoria para Passaporte Italiano em ${c}, com orientação sobre documentação, agendamento, emissão e renovação do passaporte italiano.`,
      (c) => `Passaporte italiano em ${c}: orientação sobre agendamento no consulado, documentos, AIRE, emissão e renovação com a Citizen Cidadania.`,
      (c) => `Como tirar o passaporte italiano em ${c}: assessoria para documentação, agendamento e renovação, com análise individual do caso.`,
      (c) => `Renovação e emissão de passaporte italiano em ${c}, com assessoria para conferir o AIRE, os documentos e o agendamento consular.`,
      (c) => `Assessoria de passaporte italiano em ${c} para quem tem cidadania reconhecida: documentos, agendamento, emissão e renovação.`,
    ],
    lead: [
      () => "Vai emitir ou renovar seu passaporte italiano? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação sobre agendamento e próximas etapas.",
      () => "Já tem a cidadania italiana e precisa do passaporte? A Citizen Cidadania confere o AIRE, os documentos e orienta sobre o agendamento.",
      () => "Seu passaporte italiano venceu ou nunca foi emitido? A Citizen Cidadania organiza a documentação e orienta cada etapa do pedido.",
    ],
    ctaTitle: [
      "Precisa de Ajuda com Seu Passaporte Italiano?",
      "Vamos Preparar Seu Pedido de Passaporte?",
      "Quer Emitir ou Renovar Seu Passaporte Italiano?",
    ],
  },

  "passaporte-americano": {
    meta: [
      (c) => `Assessoria para Passaporte Americano em ${c}, com orientação sobre documentação, emissão, renovação e etapas relacionadas ao processo.`,
      (c) => `Passaporte americano em ${c}: orientação para cidadãos americanos sobre primeiro passaporte, renovação, menores e documentos.`,
      (c) => `Como tirar o passaporte americano em ${c}: assessoria para formulários, comprovação de cidadania, emissão e renovação.`,
      (c) => `Renovação e emissão de passaporte americano em ${c}, com assessoria para conferir documentos e orientar o agendamento.`,
      (c) => `Assessoria de passaporte americano em ${c} para cidadãos dos EUA no Brasil: documentação, emissão, renovação e menores.`,
    ],
    lead: [
      () => "É cidadão americano e precisa emitir ou renovar seu passaporte? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas.",
      () => "Tem cidadania americana e mora no Brasil? A Citizen Cidadania orienta sobre formulários, documentos e etapas do passaporte americano.",
      () => "Precisa do passaporte americano para você ou para um filho? A Citizen Cidadania organiza a documentação e orienta cada etapa.",
    ],
    ctaTitle: [
      "Precisa de Ajuda com Seu Passaporte Americano?",
      "Vamos Organizar Seu Pedido de Passaporte?",
      "Quer Emitir ou Renovar Seu Passaporte Americano?",
    ],
  },

  aire: {
    meta: [
      (c) => `Atualização e inscrição AIRE em ${c}: assessoria para cadastro, atualização e regularização do AIRE. Fale com a Citizen Cidadania sobre seu caso.`,
      (c) => `Inscrição e atualização do AIRE em ${c}, com assessoria para cadastro, mudança de endereço, estado civil e regularização.`,
      (c) => `AIRE em ${c}: orientação para inscrição, cadastro, atualização de dados e regularização junto ao consulado italiano.`,
      (c) => `Assessoria AIRE em ${c} para cidadãos italianos: inscrição, atualização de endereço e estado civil e regularização do cadastro.`,
      (c) => `Como fazer ou atualizar o AIRE em ${c}: assessoria para cadastro, regularização e documentos, com a Citizen Cidadania.`,
    ],
    lead: [
      () => "Precisa fazer a inscrição, atualizar ou regularizar seu AIRE? A Citizen Cidadania auxilia na análise do caso, na documentação e na orientação das próximas etapas.",
      () => "Mudou de endereço, casou ou teve filhos? A Citizen Cidadania orienta sobre a atualização do AIRE e os documentos necessários.",
      () => "Seu AIRE está desatualizado ou nunca foi feito? A Citizen Cidadania analisa o caso e orienta sobre inscrição e regularização.",
    ],
    ctaTitle: [
      "Precisa Atualizar ou Fazer Sua Inscrição no AIRE?",
      "Vamos Colocar Seu AIRE em Dia?",
      "Quer Regularizar Seu AIRE?",
    ],
  },
};
