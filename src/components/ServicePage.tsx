import Link from "next/link";
import type { ServicePageContent } from "@/content/types";
import { services } from "@/data/services";
import { getCity } from "@/data/cities";
import { photos } from "@/data/photos";
import { pagePath, pagesByCity, pagesByService } from "@/content";
import { COMPANY, SITE_URL, absoluteUrl } from "@/lib/site";
import { Breadcrumbs } from "./Breadcrumbs";
import { CountryMap } from "./CountryMap";
import { ArrowIcon, CheckIcon, DocIcon } from "./Icons";
import { JsonLd } from "./JsonLd";
import { Media } from "./Media";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppButton } from "./WhatsAppButton";
import { WhatsAppFloat } from "./WhatsAppFloat";

const NAV = [
  { href: "#processo", label: "Processo" },
  { href: "#documentos", label: "Documentos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#perguntas", label: "Perguntas" },
];

export function ServicePage({ page }: { page: ServicePageContent }) {
  const service = services[page.service];
  const city = getCity(page.city)!;
  const url = absoluteUrl(pagePath(page));
  const msg = page.whatsappMessage;

  const crumbs = [
    { name: "Início", href: "/" },
    { name: service.name, href: `/${page.service}/` },
    { name: city.name, href: pagePath(page) },
  ];

  const intro = page.topics.find((t) => t.id === page.intro.topicId)!;
  const docs = page.topics.find((t) => t.id === page.documents.topicId)!;
  const rest = page.topics.filter((t) => t !== intro && t !== docs);

  const siblings = pagesByService(page.service).filter((p) => p.city !== page.city);
  const sameCity = pagesByCity(page.city).filter((p) => p.service !== page.service);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.seoTitle,
        description: page.metaDescription,
        inLanguage: "pt-BR",
        isPartOf: { "@type": "WebSite", name: COMPANY.name, url: SITE_URL },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: absoluteUrl(page.hero.image.photo.src),
        dateModified: page.updated,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: absoluteUrl(c.href),
        })),
      },
      {
        "@type": "Service",
        name: page.h1,
        serviceType: page.serviceType,
        description: page.metaDescription,
        url,
        areaServed: { "@type": "City", name: city.name },
        provider: {
          "@type": "Organization",
          name: COMPANY.name,
          url: SITE_URL,
          telephone: COMPANY.telephone,
        },
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <SiteHeader message={msg} nav={NAV} />

      <main id="conteudo">
        {/* 01 Hero */}
        <section className="hero" aria-labelledby="titulo">
          <div className="container hero__grid">
            <div className="hero__copy">
              <Breadcrumbs items={crumbs} />
              <span className="eyebrow">{page.hero.eyebrow}</span>
              <h1 id="titulo">{page.h1}</h1>
              <p className="hero__lead">{page.hero.lead}</p>
              <div className="actions">
                <WhatsAppButton message={msg}>{page.hero.cta}</WhatsAppButton>
                <WhatsAppButton message={msg} className="btn btn--outline">
                  Falar no WhatsApp
                </WhatsAppButton>
              </div>
            </div>
            <div className="hero__media">
              <Media image={page.hero.image} priority />
            </div>
          </div>
        </section>

        {/* 02 Abertura */}
        <section className="section" id={intro.id} aria-labelledby={`${intro.id}-titulo`}>
          <div className="container split">
            <Media image={page.intro.image} variant="left" />
            <div className="split__copy">
              <span className="eyebrow">Entenda</span>
              <h2 id={`${intro.id}-titulo`}>{intro.title}</h2>
              <div className="prose">
                {intro.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <ul className="tiles">
                {page.intro.highlights.map((h) => (
                  <li key={h.title} className="tile">
                    <span className="tile__title">{h.title}</span>
                    <span className="tile__text">{h.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 03 Processo */}
        <section className="section section--tint" id="processo" aria-labelledby="processo-titulo">
          <div className="container">
            <header className="section-head section-head--center">
              <span className="eyebrow">Passo a passo</span>
              <h2 id="processo-titulo">{page.process.title}</h2>
            </header>
            <ol className="steps">
              {page.process.steps.map((step, i) => (
                <li key={step.title} className="step">
                  <span className="step__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <span className="step__arrow">
                    <ArrowIcon />
                  </span>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 04 Documentos */}
        <section className="section" id="documentos" aria-labelledby={`${docs.id}-titulo`}>
          <div className="container">
            <header className="section-head">
              <span className="eyebrow">Documentação</span>
              <h2 id={`${docs.id}-titulo`}>{docs.title}</h2>
            </header>
            <ul className="docbar">
              {page.documents.items.map((d) => (
                <li key={d.title}>
                  <span className="docbar__icon">
                    <DocIcon />
                  </span>
                  <span>
                    <strong>{d.title}</strong>
                    <span className="docbar__text">{d.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="prose prose--note">
              {docs.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 04b País */}
        <section className="section country" aria-labelledby="pais-titulo">
          <span className="country__blob" aria-hidden="true" />
          <div className="container country__grid">
            <div className="country__copy">
              <h2 id="pais-titulo">{page.country.title}</h2>
              <span className="eyebrow eyebrow--accent">{page.country.eyebrow}</span>
              <div className="prose">
                {page.country.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <WhatsAppButton message={msg} className="btn">
                {page.hero.cta}
              </WhatsAppButton>
            </div>
            <figure className="country__map">
              <CountryMap map={page.country.map} />
              <figcaption>{page.country.caption}</figcaption>
            </figure>
          </div>
        </section>

        {/* 05 Dúvidas */}
        <section className="section section--top-0" id="duvidas" aria-label="Dúvidas sobre o processo">
          <div className="container">
            <header className="section-head">
              <span className="eyebrow">Dúvidas sobre o processo</span>
              <p className="display">Entenda Antes de Começar</p>
            </header>
            <div className="cards">
              {rest.map((t) => (
                <section key={t.id} id={t.id} className="card" aria-labelledby={`${t.id}-titulo`}>
                  <h2 id={`${t.id}-titulo`}>{t.title}</h2>
                  {t.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {t.link && (
                    <Link className="card__link" href={t.link.href}>
                      {t.link.label}
                      <ArrowIcon />
                    </Link>
                  )}
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* 06 Citizen (bloco preto) */}
        <section className="section section--dark" aria-labelledby="sobre-titulo">
          <div className="container about">
            <div>
              <span className="eyebrow">Quem somos</span>
              <h2 id="sobre-titulo">{page.about.title}</h2>
            </div>
            <div className="prose">
              {page.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 07 Diferenciais */}
        <section className="section" aria-labelledby="por-que-titulo">
          <div className="container">
            <div className="panel">
              <header className="section-head">
                <span className="eyebrow">Diferenciais</span>
                <h2 id="por-que-titulo">{page.why.title}</h2>
              </header>
              <ul className="why">
                {page.why.items.map((item) => (
                  <li key={item.title}>
                    <span className="why__icon">
                      <CheckIcon />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 08 FAQ */}
        <section className="section section--top-0" id="perguntas" aria-labelledby="faq-titulo">
          <div className="container faq-wrap">
            <header className="faq-wrap__head">
              <span className="eyebrow">Tire suas dúvidas</span>
              <h2 id="faq-titulo">{page.faq.title}</h2>
              <p>Não encontrou sua dúvida? Fale com a Citizen pelo WhatsApp.</p>
              <WhatsAppButton message={msg} className="btn btn--dark">
                {page.hero.cta}
              </WhatsAppButton>
            </header>
            <div className="faq">
              {page.faq.items.map((item) => (
                <details key={item.q}>
                  <summary>
                    <h3>{item.q}</h3>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {(sameCity.length > 0 || siblings.length > 0) && (
          <section className="section section--top-0" aria-labelledby="links-titulo">
            <div className="container">
              <header className="section-head">
                <span className="eyebrow">Veja também</span>
                <h2 id="links-titulo">Outros Serviços em {city.name}</h2>
              </header>
              <ul className="link-cards">
                {sameCity.map((p) => (
                  <li key={pagePath(p)}>
                    <Link href={pagePath(p)}>
                      {services[p.service].pageName} em {city.name}
                      <ArrowIcon />
                    </Link>
                  </li>
                ))}
                {siblings.map((p) => (
                  <li key={pagePath(p)}>
                    <Link href={pagePath(p)}>
                      {service.pageName} em {getCity(p.city)?.name}
                      <ArrowIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 09 Chamada final */}
        <section className="final" aria-labelledby="cta-titulo">
          <div className="container final__grid">
            <div className="final__photo">
              <Media
                image={{
                  photo: photos.assinaturaDocumentos,
                  alt: "Mãos preenchendo e assinando documentos sobre uma mesa",
                }}
                variant="left"
                sizes="(max-width: 960px) 100vw, 40vw"
              />
            </div>
            <div className="final__copy">
              <h2 id="cta-titulo">{page.finalCta.title}</h2>
              <p>{page.finalCta.text}</p>
              <div className="actions">
                <WhatsAppButton message={msg}>{page.finalCta.cta}</WhatsAppButton>
                <WhatsAppButton message={msg} className="btn btn--outline">
                  Falar no WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        message={msg}
        photos={[page.hero.image.photo, page.intro.image.photo, photos.assinaturaDocumentos]}
      />
      <WhatsAppFloat message={msg} />
      <JsonLd data={jsonLd} />
    </>
  );
}
