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

## Nova página

1. Copiar `src/content/cidadania-portuguesa/sorocaba.ts` como ponto de partida e reescrever o conteúdo de verdade, sem só trocar a cidade.
2. Registrar em `src/content/index.ts`.
3. Atualizar `updated` somente quando o conteúdo mudar de verdade.
