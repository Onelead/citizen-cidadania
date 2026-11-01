export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://citizencidadania.com.br"
).replace(/\/$/, "");

export const COMPANY = {
  name: "Citizen Cidadania",
  // Preencher quando houver dados institucionais confirmados:
  // logo, e-mail, endereço, redes sociais (sameAs).
  telephone: "+5511991499258",
  telephoneDisplay: "(11) 99149-9258",
} as const;

const WHATSAPP_NUMBER = "5511991499258";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
