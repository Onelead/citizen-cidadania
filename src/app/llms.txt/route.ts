import { regions } from "@/data/cities";
import { services } from "@/data/services";
import { publishedServices } from "@/content";
import { BRAND_NAME, BRAND_SLUG } from "@/content/brand";
import { COMPANY, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Resumo do site para assistentes de IA (convenção llms.txt), montado a partir
// dos mesmos dados das páginas. Só fatos confirmados: nada de números ou promessas.
export function GET() {
  const cityNames = regions.map(
    (r) => `- ${r.name}: ${r.cities.map((c) => c.name).join(", ")}`,
  );

  const serviceLines = publishedServices().map(
    (slug) => `- [${services[slug].pageName}](${absoluteUrl(`/${slug}/`)})`,
  );

  const text = `# ${COMPANY.name}

> A ${COMPANY.name} atua no suporte a pessoas e famílias que precisam organizar processos de cidadania e documentação internacional. O atendimento começa pela análise de cada caso e orienta sobre documentação, procedimentos e próximas etapas.

## Serviços

${serviceLines.join("\n")}
- [${BRAND_NAME}](${absoluteUrl(`/${BRAND_SLUG}/`)}): análise de nome, atividade e classes antes do pedido no INPI.

Cada serviço tem uma página por cidade no formato ${absoluteUrl("/<serviço>/<cidade>/")}, por exemplo ${absoluteUrl("/cidadania-portuguesa/sorocaba/")} e ${absoluteUrl(`/${BRAND_SLUG}/campinas/`)}.

## Cidades atendidas pelas páginas

${cityNames.join("\n")}

## Como funciona

1. Análise do caso
2. Orientação sobre a documentação
3. Organização e conferência dos documentos
4. Acompanhamento das próximas etapas

A decisão final sobre cada pedido é sempre do órgão competente (consulados, autoridades estrangeiras ou INPI). A ${COMPANY.name} não promete aprovação nem prazos.

## Contato

- WhatsApp: ${COMPANY.telephoneDisplay} (https://wa.me/${COMPANY.telephone.replace("+", "")})
- Site: ${absoluteUrl("/")}
- Mapa do site: ${absoluteUrl("/sitemap.xml")}
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
