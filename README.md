# Citizen Cidadania: páginas locais

Next.js 16 + Tailwind v4. As páginas são estáticas, e todo o conteúdo vem no HTML.

## Rodar

```bash
npm install
npm run dev
```

Antes de publicar, preencha `NEXT_PUBLIC_SITE_URL` em `.env.local` com o domínio real. Ele define o canonical, o Open Graph, o `sitemap.xml` e o `robots.txt`. A variável `NEXT_PUBLIC_GSC_VERIFICATION` é opcional e guarda o código de verificação do Search Console.

## Arquitetura

- URL: `/<serviço>/<cidade>/` (silo: `/<serviço>/` lista as cidades publicadas)
- `src/data/services.ts`: serviços e o nome usado no H1/Title (`pageName`)
- `src/data/cities.ts`: catálogo de cidades por região (só vira página com conteúdo)
- `src/content/<serviço>/<cidade>.ts`: conteúdo e planejamento SEO de cada página
- `src/content/index.ts`: registro. Uma página só existe (e entra no sitemap) se estiver aqui. O resto devolve 404.
- Todos os CTAs abrem o WhatsApp `5511991499258` com "Olá! Quero fazer o serviço de <Serviço> em <Cidade>."

## Páginas

- **210 páginas**: 6 serviços × 35 cidades (regiões de Sorocaba, Campinas e Jundiaí, em `src/data/cities.ts`).
- **Escritas à mão** (`src/content/<serviço>/<cidade>.ts`): os 6 serviços de Sorocaba e Cidadania Portuguesa em Campinas.
- **Geradas** (`src/content/generated/`): replicam a página de Sorocaba do serviço trocando a cidade nos textos e links. A meta description, a chamada do hero e o título da chamada final alternam entre versões escritas à mão (`variants.ts`), então nenhuma cidade repete a meta de outra.
- Para dar texto próprio a uma cidade, crie `src/content/<serviço>/<cidade>.ts` e registre em `handwritten` (`src/content/index.ts`). A página escrita substitui a gerada.
- Atualize `updated` somente quando o conteúdo mudar de verdade.
