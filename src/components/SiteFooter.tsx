import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { COMPANY, whatsappUrl } from "@/lib/site";
import { services } from "@/data/services";
import type { Photo } from "@/data/photos";
import { publishedServices } from "@/content";

export function SiteFooter({
  message,
  photos = [],
}: {
  message: string;
  photos?: Photo[];
}) {
  const credits = photos.filter(
    (p, i, all) => all.findIndex((x) => x.author === p.author) === i,
  );
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link href="/" className="brand" aria-label="Citizen Cidadania, página inicial">
              <Image src={logo} alt="" height={36} className="brand__logo" />
              <span className="brand__name">{COMPANY.name}</span>
            </Link>
            <p>
              Análise do caso, documentação e orientação para processos de
              cidadania e documentação internacional.
            </p>
          </div>
          <nav aria-label="Páginas de serviço">
            <p className="site-footer__title">Serviços</p>
            <ul>
              {publishedServices().map((slug) => (
                <li key={slug}>
                  <Link href={`/${slug}/`}>{services[slug].pageName}</Link>
                </li>
              ))}
              <li>
                <Link href="/registro-de-marca/">Registro de Marca</Link>
              </li>
            </ul>
          </nav>
          <div>
            <p className="site-footer__title">Contato</p>
            <a
              className="site-footer__phone"
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {COMPANY.telephoneDisplay}
            </a>
            <p className="site-footer__hint">Atendimento pelo WhatsApp</p>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {COMPANY.name}</p>
          {credits.length > 0 && (
            <p>
              Fotos:{" "}
              {credits.map((c, i) => (
                <span key={c.url}>
                  {i > 0 && ", "}
                  <a href={c.url} target="_blank" rel="noopener noreferrer">
                    {c.author}
                  </a>
                </span>
              ))}{" "}
              (Unsplash)
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
