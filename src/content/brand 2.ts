import type { City } from "@/data/cities";
import { picker } from "./generated/pick";

/** Página de Registro de Marca: layout próprio, mesmo conteúdo-base em todas as cidades. */
export const BRAND_SLUG = "registro-de-marca";
export const BRAND_NAME = "Registro de Marca";
export const BRAND_UPDATED = "2026-11-01";

export const brandMessage = (city: string) =>
  `Olá! Quero fazer o serviço de Registro de Marca em ${city}.`;

const metas: ((c: string) => string)[] = [
  (c) => `Registro de marca em ${c}: análise do nome, da atividade e das classes antes do pedido no INPI, com orientação da Citizen Cidadania.`,
  (c) => `Assessoria para registro de marca em ${c}. Entenda se o nome pode ser registrado, em quais classes e quais são os próximos passos no INPI.`,
  (c) => `Quer registrar sua marca em ${c}? A Citizen analisa nome, atividade e possíveis conflitos antes do protocolo no INPI.`,
  (c) => `Registro de marca no INPI para empresas de ${c}: análise inicial, escolha de classes, preparação do pedido e acompanhamento.`,
  (c) => `Proteja o nome do seu negócio em ${c}. Assessoria para registro de marca com análise antes do pedido e acompanhamento no INPI.`,
];

const leads: string[] = [
  "Antes de pedir o registro no INPI, a Citizen analisa o nome, a atividade e as classes da sua marca para indicar o próximo passo com clareza.",
  "Pesquisar o nome é só uma parte. A Citizen organiza o contexto da sua marca e orienta o caminho antes do pedido no INPI.",
  "Conte o básico sobre a sua marca e receba orientação sobre classes, possíveis conflitos e o pedido de registro no INPI.",
];

const closings: string[] = [
  "Vamos Começar a Análise da Sua Marca?",
  "Pronto para Proteger o Nome do Seu Negócio?",
  "Quer Saber se Sua Marca Pode Ser Registrada?",
];

export function brandVariants(city: City) {
  const pick = picker(`${BRAND_SLUG}:${city.slug}`);
  return {
    meta: pick.one("meta", metas)(city.name),
    lead: pick.one("lead", leads),
    closing: pick.one("closing", closings),
  };
}

/* ---------- Formulário de análise inicial ---------- */

export type FormStep =
  | { key: string; kind: "text"; kicker: string; title: string; subtitle: string; label: string; placeholder: string; hint?: string }
  | { key: string; kind: "choice"; kicker: string; title: string; subtitle: string; options: string[]; detail?: { key: string; label: string; placeholder: string } }
  | { key: "contact"; kind: "contact"; kicker: string; title: string; subtitle: string };

export const formSteps: FormStep[] = [
  {
    key: "marca",
    kind: "text",
    kicker: "Etapa 1 · Sua marca",
    title: "Qual é o nome da marca que você quer proteger?",
    subtitle: "É por ele que a análise começa.",
    label: "Nome da marca",
    placeholder: "Ex.: Casa Aurora",
    hint: "Use o nome que o cliente vê. Não precisa incluir razão social ou “LTDA”.",
  },
  {
    key: "area",
    kind: "choice",
    kicker: "Etapa 2 · Seu negócio",
    title: "Em que área a marca atua?",
    subtitle: "Escolha a opção mais próxima e conte, em uma frase, o que a empresa vende ou faz.",
    options: [
      "Serviços profissionais",
      "Comércio e varejo",
      "Tecnologia e software",
      "Saúde e bem-estar",
      "Beleza e estética",
      "Alimentação e bebidas",
      "Construção e imóveis",
      "Educação e cursos",
      "Moda e acessórios",
      "Indústria",
      "Outra área",
    ],
    detail: { key: "atividade", label: "O que a empresa vende ou faz?", placeholder: "Ex.: confeitaria artesanal com entregas" },
  },
  {
    key: "fase",
    kind: "choice",
    kicker: "Etapa 3 · Momento do negócio",
    title: "Em que fase a empresa está hoje?",
    subtitle: "Isso mostra quanto a marca já está exposta no mercado.",
    options: [
      "Já está operando e vendendo",
      "Está começando agora",
      "Ainda é um projeto",
      "Vai mudar de nome ou se reposicionar",
    ],
  },
  {
    key: "uso",
    kind: "choice",
    kicker: "Etapa 4 · Uso do nome",
    title: "Há quanto tempo o nome é usado comercialmente?",
    subtitle: "Pense em site, redes sociais, fachada, embalagens ou propostas.",
    options: ["Ainda não é usado", "Menos de 1 ano", "De 1 a 3 anos", "Mais de 3 anos"],
  },
  {
    key: "objetivo",
    kind: "choice",
    kicker: "Etapa 5 · Objetivo",
    title: "O que você quer resolver agora?",
    subtitle: "Não existe resposta certa: é só para direcionar a conversa.",
    options: [
      "Registrar antes de crescer",
      "Evitar que copiem o nome",
      "Saber se o nome pode ser registrado",
      "Recebi uma notificação ou tenho um conflito",
      "Outro motivo",
    ],
  },
  {
    key: "prazo",
    kind: "choice",
    kicker: "Etapa 6 · Prazo",
    title: "Quando você pretende avançar?",
    subtitle: "Ajuda a Citizen a priorizar o atendimento.",
    options: ["O quanto antes", "Nos próximos 30 dias", "Nos próximos meses", "Ainda estou pesquisando"],
  },
  {
    key: "contact",
    kind: "contact",
    kicker: "Etapa 7 · Envio",
    title: "Pronto. Sua análise inicial está preparada.",
    subtitle: "Informe seu nome e envie pelo WhatsApp: a Citizen recebe tudo o que você respondeu, sem começar a conversa do zero.",
  },
];

/* ---------- Conteúdo das seções ---------- */

export const brandContent = {
  heroEyebrow: ["Registro de marca", "Análise antes do pedido"],
  heroNote: "Atendimento pelo WhatsApp · sem promessa de aprovação",
  startCard: {
    badge: "Etapa inicial",
    time: "leva poucos minutos",
    eyebrow: "Seu caso começa aqui",
    title: "Organize o básico da sua marca antes de falar com a Citizen.",
    rows: [
      { n: "01", title: "Nome da marca", text: "Qual nome você quer proteger?", step: 0 },
      { n: "02", title: "Atividade do negócio", text: "Em que área a marca atua?", step: 1 },
      { n: "03", title: "Momento e objetivo", text: "Como o nome é usado e o que você quer resolver?", step: 2 },
    ],
  },
  facts: [
    { title: "INPI", text: "órgão que concede o registro no Brasil" },
    { title: "Antes do pedido", text: "análise de nome, atividade e classes" },
    { title: "WhatsApp", text: "atendimento direto com a Citizen" },
    { title: "Sem promessas", text: "a decisão final é do INPI" },
  ],
  compare: {
    eyebrow: ["Se você já pesquisou o nome", "isto faz diferença"],
    title: "Pesquisar o nome é só o começo.",
    text: "Não achar uma marca igual não significa que o caminho está livre. Antes do pedido, entram atividade, classes e marcas parecidas.",
    cardKicker: "Ponto de partida",
    cardTitle: "Você pesquisou e não encontrou um nome idêntico.",
    cardAside: "o que falta avaliar?",
    rows: [
      { title: "Nome idêntico", text: "A pesquisa mostra registros com o mesmo nome.", tag: "Pesquisa", done: true },
      { title: "Marcas parecidas", text: "Grafia, som e aparência também contam.", tag: "Análise" },
      { title: "Atividade e classes", text: "A proteção precisa corresponder ao que o negócio faz.", tag: "Análise" },
      { title: "Possíveis conflitos", text: "O segmento muda a leitura de risco.", tag: "Análise" },
    ],
    from: ["Pesquisa simples", "responde uma parte"],
    to: ["Análise de registro", "mostra o cenário"],
  },
  analysis: {
    eyebrow: "Antes do protocolo",
    title: "A Citizen organiza o cenário antes de indicar o próximo passo.",
    text: "A ideia é decidir com base no contexto da marca, não só em uma pesquisa rápida ou na expectativa de aprovação.",
    cardTitle: "Análise inicial da marca",
    cardAside: "contexto do seu caso",
    rows: [
      { title: "Marca e uso", text: "O nome e como ele já aparece no negócio.", tag: "Contexto" },
      { title: "Atividade", text: "O que a empresa vende, presta ou vai lançar.", tag: "Enquadramento" },
      { title: "Classes", text: "Em quais categorias a proteção faz sentido.", tag: "Estratégia" },
      { title: "Semelhanças", text: "Marcas anteriores que merecem atenção.", tag: "Risco" },
      { title: "Próximo passo", text: "Orientação clara para decidir se e como avançar.", tag: "Decisão" },
    ],
  },
  process: {
    eyebrow: "Se fizer sentido avançar",
    title: "Você não precisa entender de INPI para começar.",
    text: "A Citizen conduz as etapas e mantém você informado do início ao acompanhamento.",
    tabs: ["Registro de marca", "Acompanhamento Citizen"],
    steps: [
      { title: "Análise inicial", text: "Contexto da marca e do negócio organizado.", now: true },
      { title: "Orientação e classes", text: "Cenário, classes e próximos passos definidos." },
      { title: "Preparação do pedido", text: "Documentação e pedido preparados para o INPI." },
      { title: "Acompanhamento", text: "Andamento acompanhado até a decisão do INPI." },
    ],
  },
  why: {
    eyebrow: "Por que registrar",
    title: "No Brasil, a marca é de quem tem o registro.",
    text: "Pela Lei de Propriedade Industrial, a propriedade da marca é adquirida pelo registro concedido pelo INPI.",
    items: [
      { title: "Uso exclusivo", text: "Direito de uso exclusivo em todo o território nacional, no ramo registrado." },
      { title: "Segurança para investir", text: "Mais tranquilidade para investir em fachada, embalagem, site e divulgação." },
      { title: "Valor para o negócio", text: "A marca registrada pode ser licenciada ou transferida." },
    ],
  },
  faq: {
    eyebrow: "Antes de começar",
    title: "As dúvidas mais comuns sobre registro de marca.",
    items: [
      {
        q: "Pesquisar o nome já garante que posso registrar?",
        a: "Não. A pesquisa ajuda a encontrar nomes iguais, mas a análise também considera marcas parecidas, a atividade do negócio e as classes.",
      },
      {
        q: "Se não existe uma marca igual, o nome está livre?",
        a: "Não necessariamente. Marcas semelhantes no som, na grafia ou na aparência, no mesmo segmento, podem impedir o registro.",
      },
      {
        q: "A Citizen garante a aprovação no INPI?",
        a: "Não. A decisão é do INPI. O papel da Citizen é analisar o cenário, orientar a estratégia e preparar e acompanhar o pedido com cuidado.",
      },
      {
        q: "Preciso ter CNPJ para registrar uma marca?",
        a: "Não necessariamente. Pessoas físicas também podem pedir o registro, desde que ligado à atividade que exercem. A análise indica o titular adequado.",
      },
      {
        q: "O que são as classes de uma marca?",
        a: "São categorias de produtos e serviços da Classificação de Nice, usada pelo INPI. A marca é protegida nas classes em que for registrada.",
      },
      {
        q: "Quanto tempo leva o registro?",
        a: "Depende do andamento do pedido no INPI, que tem etapas como publicação, prazo para oposições e exame. Por isso a Citizen não informa um prazo fixo.",
      },
      {
        q: "Por quanto tempo o registro vale?",
        a: "O registro concedido vale por 10 anos e pode ser prorrogado por períodos iguais e sucessivos.",
      },
      {
        q: "O registro vale para todo o Brasil?",
        a: "Sim. O registro concedido pelo INPI garante o uso exclusivo em todo o território nacional, nas classes registradas.",
      },
    ],
  },
  closing: {
    eyebrow: "Seu próximo passo",
    text: "Responda a análise inicial e a Citizen recebe o contexto da sua marca antes de conversar com você.",
  },
};
