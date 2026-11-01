import type { Metadata } from "next";
import Link from "next/link";
import { publishedServices } from "@/content";
import { services } from "@/data/services";
import { photos } from "@/data/photos";
import { COMPANY, SITE_URL } from "@/lib/site";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Media } from "@/components/Media";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const description =
  "A Citizen Cidadania atua no suporte a pessoas e famílias que precisam organizar processos de cidadania e documentação internacional. Fale com a Citizen sobre seu caso.";
const message = "Olá! Quero fazer um dos serviços da Citizen Cidadania.";

export const metadata: Metadata = {
  title: { absolute: COMPANY.name },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: COMPANY.name,
    url: "/",
    title: COMPANY.name,
    description,
  },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <SiteHeader message={message} />
      <main id="conteudo">
        <section className="hero" aria-labelledby="titulo">
          <div className="container hero__grid">
            <div className="hero__copy">
              <span className="eyebrow">Cidadania e documentação internacional</span>
              <h1 id="titulo">Citizen Cidadania</h1>
              <p className="hero__lead">
                Suporte a pessoas e famílias que precisam organizar processos de
                cidadania e documentação internacional, a partir da análise de
                cada caso.
              </p>
              <div className="actions">
                <WhatsAppButton message={message}>Analisar Meu Caso</WhatsAppButton>
                <WhatsAppButton message={message} className="btn btn--outline">
                  Falar no WhatsApp
                </WhatsAppButton>
              </div>
            </div>
            <div className="hero__media">
              <Media
                image={{
                  photo: photos.passaportePortuguesMao,
                  alt: "Mão segurando um passaporte português diante de azulejos",
                }}
                priority
              />
            </div>
          </div>
        </section>
        <section className="section" id="servicos" aria-labelledby="servicos-titulo">
          <div className="container">
            <header className="section-head">
              <span className="eyebrow">Serviços</span>
              <h2 id="servicos-titulo">Escolha o Serviço</h2>
            </header>
            <ul className="link-cards">
              {publishedServices().map((slug) => (
                <li key={slug}>
                  <Link href={`/${slug}/`}>
                    {services[slug].pageName}
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/registro-de-marca/">
                  Registro de Marca
                  <ArrowIcon />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="section section--dark" aria-labelledby="sobre-titulo">
          <div className="container about">
            <div>
              <span className="eyebrow">Quem somos</span>
              <h2 id="sobre-titulo">Como Trabalhamos</h2>
            </div>
            <div className="prose">
              <p>
                O trabalho começa pela análise de cada situação para orientar o
                cliente sobre documentação, procedimentos e próximas etapas.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter message={message} photos={[photos.passaportePortuguesMao]} />
      <WhatsAppFloat message={message} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: COMPANY.name,
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          telephone: COMPANY.telephone,
        }}
      />
    </>
  );
}
