import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { GALLERY } from "@/lib/images";

const TABS = [
  { key: "all", label: "Всички" },
  { key: "obekt", label: "Обектът" },
  { key: "buketi", label: "Букети" },
  { key: "hora", label: "Хора & моменти" },
  { key: "kafe", label: "Кафе & чай" },
];

export default function Gallery() {
  const [tab, setTab] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const images = tab === "all" ? GALLERY : GALLERY.filter((g) => g.category === tab);
  const idx = lightbox ? images.findIndex((i) => i.src === lightbox.src) : -1;

  const step = (dir) => {
    if (idx < 0) return;
    const next = (idx + dir + images.length) % images.length;
    setLightbox(images[next]);
  };

  return (
    <section id="galerie" className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 select-none font-serif text-[18vw] leading-none text-ink/[0.03]"
      >
        galerie
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-12 text-center md:mb-16">
          <Reveal>
            <span className="label-caps text-gold">№ 04 — Galerie</span>
            <h2 className="display-tight mt-4 font-serif text-5xl font-medium sm:text-6xl md:text-7xl">
              Светът <em className="font-light italic text-leaf">отвътре</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[0.95rem] font-light leading-relaxed text-smoke">
              Истински кадри от нашия Instagram и Google визитка — фасадата,
              лампите-цветя, пианото, витрината и букетите, които тръгват през
              града.
            </p>
          </Reveal>
        </div>

        {/* tabs */}
        <Reveal delay={100}>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`label-caps rounded-full border px-5 py-2.5 !text-[0.6rem] transition-all duration-500 ${
                  tab === t.key
                    ? "border-ink bg-ink text-ivory"
                    : "border-ink/20 text-ink/60 hover:border-ink/60 hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* мозайка */}
        <motion.div layout className="columns-2 gap-4 md:columns-3 md:gap-5 lg:columns-4">
          <AnimatePresence mode="popLayout">
            {images.map((img) => (
              <motion.figure
                layout
                key={img.src}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group relative mb-4 break-inside-avoid overflow-hidden md:mb-5"
              >
                <button
                  onClick={() => setLightbox(img)}
                  className={`relative block w-full cursor-pointer ${
                    img.landscape ? "aspect-[3/2]" : "aspect-[3/4]"
                  }`}
                  aria-label={img.title}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-noir/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-left">
                      <span className="label-caps block !text-[0.52rem] text-goldlight">
                        {TABS.find((t) => t.key === img.category)?.label}
                      </span>
                      <span className="mt-1 block font-serif text-lg italic text-ivory">
                        {img.title}
                      </span>
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-ink">
                      <Plus className="h-4 w-4" />
                    </span>
                  </span>
                </button>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={100}>
          <p className="mt-10 text-center text-xs font-light tracking-wide text-smoke">
            Снимки:{" "}
            <a href="https://www.instagram.com/flowersandthecity.bg" target="_blank" rel="noopener noreferrer" className="link-flourish text-ink">
              @flowersandthecity.bg
            </a>{" "}
            · фотография: @karina_hristowa · кадри на обекта: Google Maps общност
          </p>
        </Reveal>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-noir/95 p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-noir"
              onClick={() => setLightbox(null)}
              aria-label="Затвори"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-noir md:left-8"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Предишна"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-noir md:right-8"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Следваща"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={lightbox.src}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`relative mx-auto max-h-[76vh] ${
                  lightbox.landscape
                    ? "aspect-[3/2] w-[min(92vw,960px)]"
                    : "aspect-[3/4] w-[min(92vw,560px)]"
                }`}
              >
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-4">
                <p className="text-center font-serif text-lg italic text-ivory/70">
                  {lightbox.title}
                </p>
                <a
                  href={lightbox.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-flourish label-caps flex items-center gap-1.5 !text-[0.56rem] text-goldlight"
                >
                  Оригиналът тук
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
