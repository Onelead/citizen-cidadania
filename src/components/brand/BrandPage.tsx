import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import logo from "../../../public/logo.png";
import type { City, Region } from "@/data/cities";
import {
  BRAND_NAME,
  BRAND_SLUG,
  BRAND_UPDATED,
  brandContent as c,
  brandMessage,
  brandVariants,
} from "@/content/brand";
import { COMPANY, SITE_URL, absoluteUrl, whatsappUrl } from "@/lib/site";
import { JsonLd } from "../JsonLd";
import { WhatsAppFloat } from "../WhatsAppFloat";
import { AnalysisForm } from "./AnalysisForm";
import { OpenAnalysis } from "./OpenAnalysis";
import "./brand.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

function Eyebrow({ lines }: { lines: string[] | string }) {
  const list = Array.isArray(lines) ? lines : [lines];
  return (
    <p className="bm-eyebrow">
      {list.map((l, i) => (
        <span key={i}>{l}</span>
      ))}
    </p>
  );
}

function Tag({ children }: { children: string }) {
  return <span className="bm-tag">{children}</span>;
}

export function BrandPage({ city, region }: { city: City; region: Region }) {
  const v = brandVariants(city);
  const h1 = `${BRAND_NAME} em ${city.name}`;
  const msg = brandMessage(city.name);
  const path = `/${BRAND_SLUG}/${city.slug}/`;
  const url = absoluteUrl(path);
  const wa = whatsappUrl(msg);
  const neighbors = region.cities.filter((x) => x.slug !== city.slug);

  const crumbs = [
    { name: "Início", href: "/" },
    { name: BRAND_NAME, href: `/${BRAND_SLUG}/` },
    { name: city.name, href: path },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: h1,
        description: v.meta,
        inLanguage: "pt-BR",
        isPartOf: { "@type": "WebSite", name: COMPANY.name, url: SITE_URL },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: BRAND_UPDATED,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: crumbs.map((cr, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: cr.name,
          item: absoluteUrl(cr.href),
        })),
      },
      {
        "@type": "Service",
        name: h1,
        serviceType: "Assessoria para registro de marca",
        description: v.meta,
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

  const Cta = ({ secondary = true }: { secondary?: boolean }) => (
    <div className="bm-cta">
      <a className="bm-btn" href={wa} target="_blank" rel="noopener noreferrer">
        Falar com um especialista <span aria-hidden="true">→</span>
      </a>
      {secondary && (
        <OpenAnalysis className="bm-textlink">Começar análise inicial</OpenAnalysis>
      )}
    </div>
  );

  return (
    <div className={`bm ${jakarta.variable}`}>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="bm-header">
        <Link href="/" className="bm-logo" aria-label="Citizen Cidadania, página inicial">
          <Image src={logo} alt="" height={44} priority />
        </Link>
      </header>

      <main id="conteudo">
        {/* Hero */}
        <section className="bm-hero bm-shell" aria-labelledby="bm-titulo">
          <nav aria-label="Navegação estrutural" className="bm-crumbs">
            <ol>
              {crumbs.map((cr, i) => (
                <li key={cr.href}>
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page">{cr.name}</span>
                  ) : (
                    <Link href={cr.href}>{cr.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <Eyebrow lines={c.heroEyebrow} />
          <h1 id="bm-titulo" className="bm-display">
            {h1}
            <span className="bm-dot">.</span>
          </h1>
          <p className="bm-lead">{v.lead}</p>
          <Cta />
          <p className="bm-note">{c.heroNote}</p>

          <div className="bm-card bm-start">
            <div className="bm-card__bar">
              <span className="bm-live">{c.startCard.badge}</span>
              <span className="bm-pill">{c.startCard.time}</span>
            </div>
            <div className="bm-start__body">
              <Eyebrow lines={c.startCard.eyebrow} />
              <h2 className="bm-h3">{c.startCard.title}</h2>
              <ul className="bm-rows">
                {c.startCard.rows.map((r) => (
                  <li key={r.n}>
                    <span className="bm-num">{r.n}</span>
                    <span className="bm-rows__text">
                      <strong>{r.title}</strong>
                      <span>{r.text}</span>
                    </span>
                    <OpenAnalysis step={r.step} className="bm-inform">
                      Informar
                    </OpenAnalysis>
                  </li>
                ))}
              </ul>
              <OpenAnalysis className="bm-btn">Começar agora</OpenAnalysis>
            </div>
          </div>
        </section>

        {/* Fatos */}
        <section className="bm-facts bm-shell" aria-label="Como a Citizen trabalha">
          <ul>
            {c.facts.map((f) => (
              <li key={f.title}>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Comparação */}
        <section className="bm-section bm-shell" aria-labelledby="bm-compare">
          <Eyebrow lines={c.compare.eyebrow} />
          <h2 id="bm-compare" className="bm-display bm-display--md">
            {c.compare.title}
          </h2>
          <p className="bm-lead">{c.compare.text}</p>
          <div className="bm-card bm-card--wide">
            <div className="bm-card__head">
              <div>
                <span className="bm-kicker">{c.compare.cardKicker}</span>
                <strong>{c.compare.cardTitle}</strong>
              </div>
              <span className="bm-aside">{c.compare.cardAside}</span>
            </div>
            <ul className="bm-rows">
              {c.compare.rows.map((r, i) => (
                <li key={r.title}>
                  <span className={`bm-num ${r.done ? "bm-num--done" : ""}`}>
                    {r.done ? "✓" : String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="bm-rows__text">
                    <strong>{r.title}</strong>
                    <span>{r.text}</span>
                  </span>
                  <Tag>{r.tag}</Tag>
                </li>
              ))}
            </ul>
            <div className="bm-flow">
              <span>
                {c.compare.from[0]}
                <strong>{c.compare.from[1]}</strong>
              </span>
              <span className="bm-flow__arrow" aria-hidden="true">→</span>
              <span>
                {c.compare.to[0]}
                <strong>{c.compare.to[1]}</strong>
              </span>
            </div>
            <Cta secondary={false} />
          </div>
        </section>

        {/* Análise */}
        <section className="bm-section bm-shell" aria-labelledby="bm-analise">
          <Eyebrow lines={c.analysis.eyebrow} />
          <h2 id="bm-analise" className="bm-display bm-display--md">
            {c.analysis.title}
          </h2>
          <p className="bm-lead">{c.analysis.text}</p>
          <div className="bm-card bm-card--wide">
            <div className="bm-card__bar">
              <span className="bm-live">{c.analysis.cardTitle}</span>
              <span className="bm-aside">{c.analysis.cardAside}</span>
            </div>
            <ul className="bm-rows">
              {c.analysis.rows.map((r, i) => (
                <li key={r.title}>
                  <span className="bm-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="bm-rows__text">
                    <strong>{r.title}</strong>
                    <span>{r.text}</span>
                  </span>
                  <Tag>{r.tag}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Processo */}
        <section className="bm-section bm-soft" aria-labelledby="bm-processo">
          <div className="bm-shell">
            <Eyebrow lines={c.process.eyebrow} />
            <h2 id="bm-processo" className="bm-display bm-display--md">
              {c.process.title}
            </h2>
            <p className="bm-lead">{c.process.text}</p>
            <div className="bm-card bm-card--wide">
              <div className="bm-tabs">
                <span className="is-active">{c.process.tabs[0]}</span>
                <span>{c.process.tabs[1]}</span>
              </div>
              <ol className="bm-steps">
                {c.process.steps.map((s, i) => (
                  <li key={s.title} className={s.now ? "is-now" : ""}>
                    <span className="bm-num">{s.now ? "✓" : i + 1}</span>
                    <span className="bm-rows__text">
                      <span className="bm-kicker">Etapa {i + 1}</span>
                      <strong>{s.title}</strong>
                      <span>{s.text}</span>
                    </span>
                    {s.now && <Tag>agora</Tag>}
                  </li>
                ))}
              </ol>
              <Cta secondary={false} />
            </div>
          </div>
        </section>

        {/* Por que registrar (bloco escuro) */}
        <section className="bm-section bm-dark" aria-labelledby="bm-por-que">
          <div className="bm-shell">
            <Eyebrow lines={c.why.eyebrow} />
            <h2 id="bm-por-que" className="bm-display bm-display--md">
              {c.why.title}
            </h2>
            <p className="bm-lead">{c.why.text}</p>
            <ul className="bm-why">
              {c.why.items.map((w) => (
                <li key={w.title}>
                  <strong>{w.title}</strong>
                  <span>{w.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bm-section bm-soft" aria-labelledby="bm-faq">
          <div className="bm-shell">
            <Eyebrow lines={c.faq.eyebrow} />
            <h2 id="bm-faq" className="bm-display bm-display--md">
              {c.faq.title}
            </h2>
            <div className="bm-faq">
              {c.faq.items.map((f) => (
                <details key={f.q}>
                  <summary>
                    <h3>{f.q}</h3>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="bm-section bm-shell bm-closing" aria-labelledby="bm-final">
          <Eyebrow lines={c.closing.eyebrow} />
          <h2 id="bm-final" className="bm-display bm-display--md">
            {v.closing}
          </h2>
          <p className="bm-lead">{c.closing.text}</p>
          <Cta />
        </section>

        {/* Cidades próximas */}
        <section className="bm-section bm-shell bm-cities" aria-labelledby="bm-cidades">
          <h2 id="bm-cidades" className="bm-h3">
            {BRAND_NAME} na {region.name}
          </h2>
          <ul>
            {neighbors.map((n) => (
              <li key={n.slug}>
                <Link href={`/${BRAND_SLUG}/${n.slug}/`}>{n.name}</Link>
              </li>
            ))}
            <li>
              <Link href={`/${BRAND_SLUG}/`}>Todas as cidades</Link>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bm-footer">
        <div className="bm-shell">
          <p className="bm-footer__brand">
            <Image src={logo} alt="" height={32} />
            <span>{COMPANY.name}</span>
          </p>
          <p>
            <a href={wa} target="_blank" rel="noopener noreferrer">
              WhatsApp · {COMPANY.telephoneDisplay}
            </a>
            <span aria-hidden="true"> · </span>
            <Link href="/">Cidadania e passaportes</Link>
          </p>
        </div>
      </footer>

      <AnalysisForm city={city.name} message={msg} />
      <WhatsAppFloat message={msg} />
      <JsonLd data={jsonLd} />
    </div>
  );
}
