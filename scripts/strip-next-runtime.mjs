// Pós-build do export estático: as páginas não usam React no navegador (a única
// interação, o formulário de Registro de Marca, é public/js/analysis.js). Remove do
// HTML o runtime do Next e o payload RSC, que duplicavam todo o conteúdo.
// Mantém: JSON-LD (dados estruturados) e scripts próprios fora de /_next/.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
let pages = 0;
let before = 0;
let after = 0;

function strip(html) {
  return html
    // scripts do Next (chunks, polyfills)
    .replace(/<script\b[^>]*\bsrc="\/_next\/[^"]*"[^>]*><\/script>/g, "")
    // pré-carregamento de scripts do Next
    .replace(/<link\b[^>]*\bas="script"[^>]*\/?>/g, "")
    .replace(/<link\b[^>]*\brel="modulepreload"[^>]*\/?>/g, "")
    // scripts inline (payload RSC etc.), exceto JSON-LD
    .replace(/<script\b(?![^>]*application\/ld\+json)(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/script>/g, "");
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith(".html")) {
      const html = readFileSync(path, "utf8");
      const out = strip(html);
      before += html.length;
      after += out.length;
      writeFileSync(path, out);
      pages++;
    }
  }
}

walk(OUT);
console.log(
  `runtime: ${pages} páginas, HTML ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB`,
);
