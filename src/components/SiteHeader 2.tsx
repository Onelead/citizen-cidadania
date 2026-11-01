import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { COMPANY, whatsappUrl } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

export type NavItem = { href: string; label: string };

export function SiteHeader({
  message,
  nav = [],
}: {
  message: string;
  nav?: NavItem[];
}) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="Citizen Cidadania, página inicial">
          <Image src={logo} alt="" height={40} priority className="brand__logo" />
          <span className="brand__name">Citizen Cidadania</span>
        </Link>
        {nav.length > 0 && (
          <nav aria-label="Seções da página" className="site-nav">
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <a
          className="header-contact"
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="header-contact__phone">{COMPANY.telephoneDisplay}</span>
          <span className="header-contact__hint">Falar no WhatsApp</span>
        </a>
        <WhatsAppButton message={message} className="btn btn--sm header-cta">
          Analisar Meu Caso
        </WhatsAppButton>
      </div>
    </header>
  );
}
