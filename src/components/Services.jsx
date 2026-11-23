import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICE_IMAGES } from "@/lib/images";

const SERVICES = [
  {
    key: "bouquets",
    n: "№ 01",
    fr: "Bouquets",
    title: "Букети & композиции",
    text: "Авторски букети за рождени дни, годишнини, извинения и „просто така“. Ръчно връзани, винаги различни.",
  },
  {
    key: "coffee",
    n: "№ 02",
    fr: "Café de spécialité",
    title: "Специално кафе",
    text: "Еспресо, филтър и лате с флорални нотки. Зърна от малки пекарни, изпичани с грижа.",
  },
  {
    key: "tea",
    n: "№ 03",
    fr: "Thé & douceurs",
    title: "Чай & сладки моменти",
    text: "Подбрани билкови и класически чайове, сервирани бавно, в порцелан — с гледка към цветята.",
  },
  {
    key: "events",
    n: "№ 04",
    fr: "Mariages & événements",
    title: "Сватби & събития",
    text: "Флорална декорация за сватби, кръщенета и частни вечери — от арката до последното цвете на масата.",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const img = SERVICE_IMAGES[SERVICES[active].key];

  return (
    <section id="atelier" className="relative bg-noir py-28 text-ivory md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="label-caps text-goldlight">№ 03 — L&apos;atelier</span>
            <h2 className="display-tight mt-4 font-serif text-5xl font-medium sm:text-6xl md:text-7xl">
              Какво създаваме
              <br />
              <em className="font-light italic text-goldlight">всеки ден</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-[0.95rem] font-light leading-relaxed text-ivory/60">
              Четири занаята, една философия: красотата е в детайла, а детайлът
              изисква време.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* list */}
          <Reveal>
            <ul>
              {SERVICES.map((s, i) => (
                <li key={s.key} className="border-t hairline-light last:border-b">
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group flex w-full items-start justify-between gap-6 py-8 text-left transition-colors duration-500 md:py-10"
                  >
                    <div className="flex items-baseline gap-5 md:gap-8">
                      <span className="label-caps !text-[0.6rem] text-goldlight/70">
                        {s.n}
                      </span>
                      <div>
                        <span className="label-caps !text-[0.58rem] block text-ivory/40 transition-colors duration-500 group-hover:text-goldlight">
                          {s.fr}
                        </span>
                        <span
                          className={`mt-2 block font-serif text-3xl font-medium transition-all duration-500 sm:text-4xl md:text-5xl ${
                            active === i
                              ? "translate-x-2 text-ivory md:translate-x-4"
                              : "text-ivory/55"
                          }`}
                        >
                          {s.title}
                        </span>
                        <span
                          className={`mt-3 block max-w-md text-sm font-light leading-relaxed transition-all duration-700 ${
                            active === i
                              ? "max-h-40 text-ivory/60 opacity-100"
                              : "max-h-40 text-ivory/40 opacity-70 md:max-h-0 md:overflow-hidden md:opacity-0"
                          }`}
                        >
                          {s.text}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`mt-2 h-6 w-6 shrink-0 transition-all duration-500 ${
                        active === i
                          ? "rotate-45 text-goldlight"
                          : "text-ivory/30"
                      }`}
                      strokeWidth={1.25}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* снимката се показва и на телефон — така докосването на
              услуга веднага сменя кадъра (на десктоп е sticky) */}
          <Reveal delay={200} className="relative order-first lg:order-none">
            <div className="lg:sticky lg:top-32">
              <div className="arch relative h-[240px] overflow-hidden sm:h-[320px] lg:h-[560px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/35 to-transparent" />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-serif text-lg italic text-ivory/70">
                  {img.alt}
                </span>
                <a
                  href="#contact"
                  className="link-flourish label-caps !text-[0.6rem] text-goldlight"
                >
                  Запитване
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
