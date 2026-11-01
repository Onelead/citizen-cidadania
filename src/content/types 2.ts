import type { ServiceSlug } from "@/data/services";
import type { Photo } from "@/data/photos";
import type { CountryMapKey } from "@/data/maps";

export type PageImage = {
  photo: Photo;
  alt: string;
  /** object-position CSS para enquadrar o assunto (padrão: centro). */
  position?: string;
};

export type ServicePageContent = {
  service: ServiceSlug;
  city: string;

  // Planejamento SEO (não é renderizado na página)
  strategy: {
    internalName: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    searchIntent: string;
    searchVolume: string;
  };

  seoTitle: string;
  metaDescription: string;
  h1: string;
  /** Data (AAAA-MM-DD) da última alteração real de conteúdo, usada no sitemap. */
  updated: string;
  /** Texto enviado ao WhatsApp em todos os botões da página. */
  whatsappMessage: string;
  /** Nome do serviço usado em Service/JSON-LD. */
  serviceType: string;

  hero: { eyebrow: string; lead: string; cta: string; image: PageImage };
  /** Bloco de abertura: imagem + primeiro tópico + destaques (palavras, nunca números inventados). */
  intro: {
    topicId: string;
    image: PageImage;
    highlights: { title: string; text: string }[];
  };
  /** Seção com o mapa do país do serviço ao lado. */
  country: {
    eyebrow: string;
    title: string;
    body: string[];
    map: CountryMapKey;
    caption: string;
  };
  /** Tópico apresentado na faixa escura de documentos. */
  documents: { topicId: string; items: { title: string; text: string }[] };
  process: { title: string; steps: { title: string; text: string }[] };
  topics: {
    id: string;
    title: string;
    body: string[];
    /** Link interno opcional ao fim do tópico. */
    link?: { href: string; label: string };
  }[];
  about: { title: string; body: string[] };
  why: { title: string; items: { title: string; text: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  finalCta: { title: string; text: string; cta: string };
};
