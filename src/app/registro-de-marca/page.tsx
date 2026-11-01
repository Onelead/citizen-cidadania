import type { Metadata } from "next";
import Link from "next/link";
import { regions } from "@/data/cities";
import { BRAND_NAME, BRAND_SLUG } from "@/content/brand";
import { COMPANY } from "@/lib/site";
import { ArrowIcon } from "@/components/Icons";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const description =
  "Assessoria da Citizen Cidadania para registro de marca no INPI: análise do nome, da atividade e das classes antes do pedido. Escolha sua cidade.";
const message = "Olá! Quero fazer o serviço de Registro de Marca.";

export const metadata: Metadata = {
  title: { absolute: BRAND_NAME },
  description,
  alternates: { canonical: `/${BRAND_SLUG}/` },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: COMPANY.name,
    url: `/${BRAND_SLUG}/`,
    title: BRAND_NAME,
    description,
  },
};

export default function BrandHub() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <SiteHeader message={message} />
      <main id="conteudo">
        <section className="hero" aria-labelledby="titulo">
          <div className="container" style={{ paddingBlock: "8px 72px" }}>
            <span className="eyebrow">Atendimento por cidade</span>
            <h1 id="titulo">{BRAND_NAME}</h1>
            <p className="hero__lead" style={{ marginTop: 20 }}>
              Antes de pedir o registro no INPI, a Citizen Cidadania analisa o
              nome, a atividade e as classes da sua marca. Escolha sua cidade.
            </p>
            <div className="actions">
              <WhatsAppButton message={message}>Falar com um especialista</WhatsAppButton>
            </div>
          </div>
        </section>
        {regions.map((region) => (
          <section
            key={region.slug}
            className="section section--hub"
            aria-labelledby={`regiao-${region.slug}`}
          >
            <div className="container">
              <header className="section-head">
                <span className="eyebrow">Cidades</span>
                <h2 id={`regiao-${region.slug}`}>{region.name}</h2>
              </header>
              <ul className="link-cards">
                {region.cities.map((city) => (
                  <li key={city.slug}>
                    <Link href={`/${BRAND_SLUG}/${city.slug}/`}>
                      {BRAND_NAME} em {city.name}
                      <ArrowIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>
      <SiteFooter message={message} />
      <WhatsAppFloat message={message} />
    </>
  );
}
