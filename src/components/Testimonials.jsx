import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const QUOTES = [
  {
    text: "Най-красивото място в Благоевград. Влизаш за кафе, а излизаш с букет и усмивка за целия ден.",
    author: "Елена М.",
    role: "редовен гост",
  },
  {
    text: "Поръчах букет за годишнината ни — съпругата ми плака от щастие. Цветята издържаха две седмици!",
    author: "Георги С.",
    role: "поръчка на букет",
  },
  {
    text: "Атмосфера като в Париж — бръшлян, аромат на кафе и хора, които наистина обичат това, което правят.",
    author: "Мария Д.",
    role: "гост",
  },
  {
    text: "Декорацията на нашата сватба беше като от филм. Всяка маса — малка градина. Благодарим ви!",
    author: "Ивана & Петър",
    role: "сватба, 2025",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 6500);
    return () => clearInterval(t);
  }, []);

  const q = QUOTES[index];

  return (
    <section className="relative overflow-hidden border-t hairline py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
        <Reveal>
          <Quote className="mx-auto h-8 w-8 text-gold" strokeWidth={1} fill="currentColor" />
        </Reveal>

        <div className="relative mt-10 min-h-[220px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-3xl font-light italic leading-snug text-ink/90 md:text-4xl">
                „{q.text}“
              </p>
              <footer className="mt-8">
                <div className="label-caps !text-[0.62rem] text-ink">{q.author}</div>
                <div className="mt-1 font-serif text-sm italic text-smoke">{q.role}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => setIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length)}
            aria-label="Предишен отзив"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-all duration-500 hover:bg-ink hover:text-ivory"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Отзив ${i + 1}`}
                aria-current={i === index}
                className="flex h-9 w-9 items-center justify-center"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-7 bg-gold" : "w-1.5 bg-ink/25"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => setIndex((i) => (i + 1) % QUOTES.length)}
            aria-label="Следващ отзив"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-all duration-500 hover:bg-ink hover:text-ivory"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
