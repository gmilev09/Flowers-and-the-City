/**
 * Генерира src/lib/images-data.js от снимките в public/images/.
 *
 * Моделът е взет от репозиторио Tennis-academy-Ivo-Gushterov
 * (scripts/optimize-images.mjs): всяка снимка се записва като data: URL
 * (base64) и така се вгражда в бандъла. Резултатът — снимките, логото и
 * цветята се показват на всеки хостинг, дори когато отделните файлове не са
 * качени в public/.
 *
 * Използване:  node scripts/gen-media.mjs && npm run build
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "public/images");
const OUT = path.resolve(process.cwd(), "src/lib/images-data.js");

if (!fs.existsSync(ROOT)) {
  console.error(`Липсва папка: ${ROOT}`);
  process.exit(1);
}

const files = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) files.push(full);
  }
};
walk(ROOT);

const mime = (file) => (/\.png$/i.test(file) ? "image/png" : "image/jpeg");

let js = `/**
 * data: URL-и на всички снимки, логото и цветята.
 *
 * ГЕНЕРИРАНО ОТ public/images/ — не редактирай на ръка.
 * Регенериране:  node scripts/gen-media.mjs
 */
export const MEDIA = {\n`;

for (const file of files) {
  const key = "/" + path.relative(path.resolve(process.cwd(), "public"), file).split(path.sep).join("/");
  js += `  ${JSON.stringify(key)}: "data:${mime(file)};base64,${fs.readFileSync(file).toString("base64")}",\n`;
}
js += "};\n";

fs.writeFileSync(OUT, js);
console.log(`✓ ${files.length} снимки → ${path.relative(process.cwd(), OUT)} (${(js.length / 1024 / 1024).toFixed(2)} MB)`);
