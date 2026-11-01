import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pagePath, pagesByService, publishedServices } from "@/content";
import { services, type ServiceSlug } from "@/data/services";
import { getCity } from "@/data/cities";
import { COMPANY } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowIcon } from "@/components/Icons";
import { Media } from "@/components/Media";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedServices().map((servico) => ({ servico }));
}

function resolve(servico: string) {
  if (!publishedServices().includes(servico as ServiceSlug)) return null;
  return services[servico as ServiceSlug];
}

export async function generateMetadata({
  params,
}: PageProps<"/[servico]">): Promise<Metadata> {
  const service = resolve((await params).servico);
  if (!service) return {};
  return {
    title: { absolute: service.name },
    description: service.hubIntro,
    alternates: { canonical: `/${service.slug}/` },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: COMPANY.name,
      url: `/${service.slug}/`,
      title: service.name,
      description: service.hubIntro,
    },
  };
}

export default async function Hub({ params }: PageProps<"/[servico]">) {
  const service = resolve((await params).servico);
  if (!service) notFound();
  const message = `Olá! Quero fazer o serviço de ${service.pageName}.`;
  const cityPages = pagesByService(service.slug);
  const image = cityPages[0].hero.image;

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
              <Breadcrumbs
                items={[
                  { name: "Início", href: "/" },
                  { name: service.name, href: `/${service.slug}/` },
                ]}
              />
              <span className="eyebrow">Atendimento por cidade</span>
              <h1 id="titulo">{service.name}</h1>
              <p className="hero__lead">{service.hubIntro}</p>
              <div className="actions">
                <WhatsAppButton message={message}>Analisar Meu Caso</WhatsAppButton>
              </div>
            </div>
            <div className="hero__media">
              <Media image={image} priority />
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="cidades-titulo">
          <div className="container">
            <header className="section-head">
              <span className="eyebrow">Cidades</span>
              <h2 id="cidades-titulo">Escolha Sua Cidade</h2>
            </header>
            <ul className="link-cards">
              {cityPages.map((p) => (
                <li key={p.city}>
                  <Link href={pagePath(p)}>
                    {service.pageName} em {getCity(p.city)?.name}
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter message={message} photos={[image.photo]} />
      <WhatsAppFloat message={message} />
    </>
  );
}
