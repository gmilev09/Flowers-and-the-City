import { motion } from "framer-motion";
import { ArrowDown, Sparkle, MapPin } from "lucide-react";
import { HERO_FACADE, HERO_DETAIL } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* ghost typography backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 left-1/2 z-0 w-full -translate-x-1/2 select-none text-center font-serif text-[26vw] leading-none text-ink/[0.035] md:text-[20vw]"
      >
        fleurs
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1500px] grid-cols-1 items-center gap-10 px-5 pb-24 pt-32 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pt-24">
        {/* ---- left: typography ---- */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-14 bg-gold" />
            <span className="label-caps text-gold">
              Maison de fleurs · Café · Thé
            </span>
          </motion.div>

          <h1 className="display-tight font-serif font-medium">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease, delay: 0.28 }}
                className="block text-[13.5vw] leading-[0.95] sm:text-7xl md:text-8xl xl:text-[7.2rem]"
              >
                Там, където
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease, delay: 0.42 }}
                className="block text-[13.5vw] leading-[0.95] sm:text-7xl md:text-8xl xl:text-[7.2rem]"
              >
                <em className="font-light italic text-leaf">градът</em> цъфти
                <span className="text-gold">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.62 }}
            className="mt-8 max-w-md text-[0.98rem] font-light leading-relaxed text-smoke"
          >
            Цветарница и кафене в парижки дух на ул. Иван Михайлов 43А,
            Благоевград. Авторски букети, ароматен чай и специално кафе — за
            тези, които обичат бавните моменти.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.78 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#assemble"
              className="group relative overflow-hidden rounded-full bg-ink px-8 py-4 text-ivory"
            >
              <span className="absolute inset-0 -translate-x-full bg-leaf transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              <span className="label-caps relative z-10 !text-[0.66rem]">
                Виж как се ражда букет
              </span>
            </a>
            <a
              href="#galerie"
              className="link-flourish label-caps !text-[0.66rem] text-ink/70 hover:text-ink"
            >
              Разгледай галерията
            </a>
          </motion.div>

          {/* small facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.05 }}
            className="mt-14 hidden items-center gap-8 border-t hairline pt-6 lg:flex"
          >
            {[
              ["№ 01", "Авторски букети"],
              ["№ 02", "Специално кафе"],
              ["№ 03", "Чай & бавни моменти"],
            ].map(([n, t]) => (
              <div key={n}>
                <div className="label-caps !text-[0.58rem] text-gold">{n}</div>
                <div className="mt-1 font-serif text-lg italic">{t}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---- right: РЕАЛНАТА фасада ---- */}
        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, ease, delay: 0.35 }}
            className="relative"
          >
            <div className="arch photo-warm relative h-[46vh] w-[78vw] max-w-[330px] overflow-hidden sm:h-[58vh] md:max-w-[400px] lg:h-[74vh] lg:w-[34vw] lg:max-w-[480px]">
              <img
                src={HERO_FACADE.src}
                alt={HERO_FACADE.alt}
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/35 via-transparent to-transparent" />
              {/* етикет с адреса */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 1.5 }}
                className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-ivory/90 px-4 py-2 backdrop-blur-sm md:flex"
              >
                <MapPin className="h-3.5 w-3.5 text-gold" />
                <span className="label-caps !text-[0.52rem] text-ink">
                  ул. Иван Михайлов 43А
                </span>
              </motion.div>
            </div>

            {/* втората малка арка — реалният интериор с пианото */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 1.1, ease, delay: 1.1 }}
              className="arch-soft absolute -bottom-10 -left-8 h-[24vh] w-[34vw] max-w-[130px] overflow-hidden border-4 border-ivory shadow-[0_24px_50px_-20px_rgba(29,25,18,0.5)] sm:max-w-[170px] md:-left-14 md:h-[30vh] md:max-w-[200px]"
            >
              <img
                src={HERO_DETAIL.src}
                alt={HERO_DETAIL.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -14 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease, delay: 1.25 }}
              className="absolute -right-6 top-10 hidden h-32 w-32 items-center justify-center md:flex"
            >
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite] text-ink"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-current text-[8px] uppercase tracking-[0.22em]">
                  <textPath href="#circlePath">
                    where the city blooms · blagoevgrad ·
                  </textPath>
                </text>
              </svg>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-paper">
                <Sparkle className="h-5 w-5" fill="currentColor" />
              </span>
            </motion.div>

            {/* caption */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="absolute -bottom-8 right-2 text-right"
            >
              <span className="font-serif text-sm italic text-smoke">
                — истинската фасада, чакай ви на прага
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#assemble"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/50 transition-colors hover:text-ink lg:flex"
      >
        <span className="label-caps !text-[0.55rem]">Скрол</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
