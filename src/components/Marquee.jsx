import { Flower2 } from "lucide-react";

const ITEMS = [
  "Авторски букети",
  "Специално кафе",
  "Ароматни чайове",
  "Сватби & събития",
  "Бавни моменти",
  "Доставка в града",
];

export default function Marquee({ dark = false }) {
  const row = (key) => (
    <div key={key} className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={`${key}-${item}`} className="flex items-center">
          <span
            className={`whitespace-nowrap px-8 font-serif text-2xl font-light italic md:text-3xl ${
              dark ? "text-ivory/90" : "text-ink/80"
            }`}
          >
            {item}
          </span>
          <Flower2
            className={`h-4 w-4 shrink-0 ${dark ? "text-goldlight" : "text-gold"}`}
            strokeWidth={1.5}
          />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee-paused relative overflow-hidden border-y py-5 ${
        dark ? "hairline-light bg-noir" : "hairline bg-cream/60"
      }`}
    >
      <div className="marquee-track flex w-max animate-marquee">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
