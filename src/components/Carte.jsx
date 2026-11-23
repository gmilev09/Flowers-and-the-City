import Reveal from "./Reveal";
import { CARTE_SIDE_IMAGE } from "@/lib/images";
import { Coffee, CupSoda, Croissant } from "lucide-react";

const KAFE = [
  { name: "Еспресо", note: "двойно, интензивно", price: "3.20" },
  { name: "Капучино", note: "класика с кадифена пяна", price: "4.50" },
  { name: "Флорално лате", note: "лате арт вдъхновен от градината", price: "5.20" },
  { name: "Филтър V60", note: "сезонни едноизточникови зърна", price: "5.50" },
];

const CHAI = [
  { name: "Билков букет", note: "лайка, мента и розови венчелистчета", price: "4.80" },
  { name: "Плодова градина", note: "горски плодове и хибискус", price: "5.00" },
  { name: "Сладко на деня", note: "питайте ни — винаги е изненада", price: "4.50" },
  { name: "Лимонада с розмарин", note: "домашна, освежаваща", price: "4.80" },
];

function MenuColumn({ icon: Icon, title, fr, items }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15">
          <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
        </span>
        <div>
          <span className="label-caps !text-[0.56rem] text-gold">{fr}</span>
          <h3 className="font-serif text-2xl font-medium">{title}</h3>
        </div>
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={i * 60}>
            <div className="group flex items-baseline gap-3">
              <div className="min-w-0">
                <div className="font-serif text-lg font-medium transition-colors duration-500 group-hover:text-leaf">
                  {item.name}
                </div>
                <div className="text-xs font-light text-smoke">{item.note}</div>
              </div>
              <span className="mx-2 flex-1 border-b border-dotted border-ink/30" />
              <span className="font-serif text-base italic text-ink/80">
                {item.price} <span className="text-xs not-italic">лв</span>
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function Carte() {
  const sideImg = CARTE_SIDE_IMAGE;

  return (
    <section id="carte" className="relative bg-cream/60 py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* left: heading + photo */}
          <div>
            <Reveal>
              <span className="label-caps text-gold">№ 05 — La carte</span>
              <h2 className="display-tight mt-4 font-serif text-4xl font-medium sm:text-5xl md:text-6xl">
                Картата
                <br />
                <em className="font-light italic text-leaf">на бавните моменти</em>
              </h2>
              <p className="mt-5 max-w-md text-[0.95rem] font-light leading-relaxed text-smoke">
                Както във всяко парижко кафене — тук чашата не е просто
                напитка, а повод да останеш още малко. Цените са в левове.
              </p>
            </Reveal>

            <Reveal clip delay={200} className="mt-8 hidden lg:block">
              <div className="arch-soft zoom-img relative h-[280px] overflow-hidden">
                <img
                  src={sideImg.src}
                  alt={sideImg.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/30 to-transparent" />
                <span className="absolute bottom-5 left-6 font-serif text-lg italic text-ivory/90">
                  пианото и витрината
                </span>
              </div>
            </Reveal>
          </div>

          {/* right: the carte */}
          <Reveal delay={150}>
            <div className="relative border hairline bg-paper p-6 shadow-[0_40px_80px_-50px_rgba(29,25,18,0.4)] md:p-9">
              <div className="pointer-events-none absolute inset-3 border border-ink/10" />
              <div className="relative">
                <div className="mb-7 text-center">
                  <Croissant className="mx-auto h-5 w-5 text-gold" strokeWidth={1.25} />
                  <span className="label-caps mt-3 block !text-[0.55rem] text-smoke">
                    Flowers &amp; The City · Blagoevgrad
                  </span>
                  <span className="mt-1 block font-serif text-base italic">
                    servi avec amour
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-9 md:grid-cols-2 md:gap-8">
                  <MenuColumn icon={Coffee} title="Кафе" fr="Café" items={KAFE} />
                  <MenuColumn icon={CupSoda} title="Чай & друго" fr="Thé & douceurs" items={CHAI} />
                </div>
                <p className="mt-8 text-center font-serif text-sm italic text-smoke">
                  * Към всяка поръчка на букет — комплимент: ароматна следа в
                  картонена чаша за пътя.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
