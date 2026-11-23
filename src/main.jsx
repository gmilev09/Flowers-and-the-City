import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/**
 * Рисуван placeholder при неуспешно зареждане на снимка — по модела на
 * src/lib/Image.jsx в репозиторио Tennis-academy-Ivo-Gushterov.
 * Всички снимки идват като data: URL от src/lib/images-data.js, така че
 * тук се стига само при липсващ/непознат път.
 */
const PLACEHOLDER =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">` +
      `<rect width="600" height="450" fill="#efe7d6"/>` +
      `<g fill="none" stroke="#a68956" stroke-width="5" stroke-linecap="round">` +
      `<circle cx="300" cy="200" r="74"/><path d="M300 274c0-42 24-74 58-92"/>` +
      `<path d="M300 274c-4-46-28-76-64-92"/></g>` +
      `<text x="300" y="368" text-anchor="middle" font-family="Georgia,serif" ` +
      `font-style="italic" font-size="24" fill="#6f6a5d">Flowers &amp; The City</text></svg>`
  );

function installImageGuard() {
  window.addEventListener(
    "error",
    (event) => {
      const img = event.target;
      if (!img || img.tagName !== "IMG") return;
      const src = img.getAttribute("src") || "";
      if (!src || src.startsWith("data:")) return;
      if (img.dataset.fallback === "1") return;
      img.dataset.fallback = "1";
      img.src = PLACEHOLDER;
    },
    true
  );
}

installImageGuard();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
