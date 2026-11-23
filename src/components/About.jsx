import Reveal from "./Reveal";
import { ABOUT_IMAGES } from "@/lib/images";
import { Coffee, Flower2, Hourglass } from "lucide-react";

export default function About() {
  return (
    <section id="maison" className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        {/* section head */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <Reveal>
            <span className="label-caps text-gold">№ 01 — La maison</span>
            <h2 className="display-tight mt-4 font-serif text-5xl font-medium sm:text-6xl md:text-7xl">
              Малък Париж,
              <br />
              <em className="font-light italic text-leaf">вграден в града</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="max-w-sm">
            <p className="text-[0.95rem] font-light leading-relaxed text-smoke">
              Flowers &amp; The City не е просто цветарница. Това е къща на
              цветята — място, където ароматът на свежи божури се смесва с
              мириса на прясно смляно кафе, а времето тече по-бавно.
            </p>
          </Reveal>
        </div>

        {/* collage */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
          {/* tall arch image — реалният интериор с лампите */}
          <Reveal clip className="md:col-span-4">
            <div className="arch zoom-img relative h-[520px] overflow-hidden md:h-[620px]">
              <img
                src={ABOUT_IMAGES.interior.src}
                alt={ABOUT_IMAGES.interior.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 font-serif text-sm italic text-smoke">
              І. Интериорът — лампите-цветя, които са нашата емблема
            </p>
          </Reveal>

          {/* center text card with real logo */}
          <Reveal
            delay={180}
            className="relative flex flex-col items-center justify-center border hairline bg-paper px-8 py-14 text-center shadow-[0_30px_60px_-40px_rgba(29,25,18,0.35)] md:col-span-4 md:mt-16"
          >
            <span className="label-caps text-[0.58rem] text-gold">
              Notre histoire
            </span>
            <span className="relative mt-6 block h-28 w-28 overflow-hidden rounded-full border border-ink/10 shadow-sm">
              <img
                src="/images/fb-profile.png"
                alt="Логото на Flowers and the City — рисувано цвете"
                width={112}
                height={112}
                loading="lazy"
                className="object-cover"
              />
            </span>
            <p className="mt-8 font-serif text-2xl font-light italic leading-snug text-ink/90">
              „Всяко цвете, което връзваме, и всяка чаша, която сервираме, е
              малко любовно писмо към града.“
            </p>
            <span className="mt-6 h-px w-16 bg-gold" />
            <span className="label-caps mt-4 text-[0.56rem] text-smoke">
              Екипът на Flowers &amp; The City
            </span>
          </Reveal>

          {/* second offset image */}
          <Reveal clip delay={120} className="md:col-span-4 md:mt-32">
            <div className="zoom-img relative h-[400px] overflow-hidden md:h-[480px]">
              <img
                src={ABOUT_IMAGES.street.src}
                alt={ABOUT_IMAGES.street.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-right font-serif text-sm italic text-smoke">
              ІІ. Цветята излизат на улицата — и градът оживява
            </p>
          </Reveal>
        </div>

        {/* pillars */}
        <div className="mt-24 grid grid-cols-1 gap-px border hairline bg-ink/10 sm:grid-cols-3">
          {[
            {
              icon: Flower2,
              n: "01",
              title: "Цветя с характер",
              text: "Сезонни сортове, подбрани всяка сутрин. Букети, които разказват история, а не просто декорация.",
            },
            {
              icon: Coffee,
              n: "02",
              title: "Специално кафе",
              text: "Внимателно изпечени зърна и баристи, за които всяка чаша е малък ритуал.",
            },
            {
              icon: Hourglass,
              n: "03",
              title: "Бавни моменти",
              text: "Място без бързане — за разговор, книга, чай или просто тишина сред цветя.",
            },
          ].map((p, i) => (
            <Reveal key={p.n} delay={i * 120} className="bg-ivory">
              <div className="group h-full px-8 py-12 transition-colors duration-700 hover:bg-cream/70">
                <div className="flex items-center justify-between">
                  <p.icon
                    className="h-6 w-6 text-gold transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110"
                    strokeWidth={1.25}
                  />
                  <span className="label-caps !text-[0.56rem] text-smoke">
                    {p.n}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-3xl font-medium">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-smoke">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
