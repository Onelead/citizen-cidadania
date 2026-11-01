// Pós-build do export estático: o Next gera as imagens de compartilhamento como
// "opengraph-image" (sem extensão), e o GitHub Pages define o tipo pelo nome do
// arquivo. Renomeia para .png e atualiza as referências no HTML e nos payloads.
import { readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
let renamed = 0;
let rewritten = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walk(path);
    } else if (name === "opengraph-image") {
      renameSync(path, `${path}.png`);
      renamed++;
    } else if (name.endsWith(".html") || name.endsWith(".txt")) {
      const text = readFileSync(path, "utf8");
      const next = text.replaceAll("/opengraph-image?", "/opengraph-image.png?");
      if (next !== text) {
        writeFileSync(path, next);
        rewritten++;
      }
    }
  }
}

walk(OUT);
console.log(`og: ${renamed} imagens renomeadas, ${rewritten} arquivos atualizados`);
