import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  LoaderCircle,
  ChevronDown,
} from "lucide-react";
import Reveal from "./Reveal";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

const OCCASIONS = [
  { value: "bouquet", label: "Букет / композиция" },
  { value: "wedding", label: "Сватба" },
  { value: "event", label: "Събитие / декорация" },
  { value: "subscription", label: "Редовна доставка" },
  { value: "other", label: "Друго" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("form-name", "order");

    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    if (name.length < 2) {
      setStatus("error");
      setErrorMsg("Моля, въведете име.");
      return;
    }
    if (!/^[+\d][\d\s()/-]{5,30}$/.test(phone)) {
      setStatus("error");
      setErrorMsg("Моля, въведете валиден телефонен номер.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      if (!res.ok) throw new Error("submit-failed");
      setStatus("success");
      form.reset();
    } catch {
      // Извън Netlify формата не се приема сървърно — предлагаме директен контакт
      setStatus("error");
      setErrorMsg(
        "Изпращането не мина от тук. Обадете ни се директно на 089 790 7870 — ще запишем поръчката веднага."
      );
    }
  }

  return (
    <section id="contact" className="relative bg-noir py-28 text-ivory md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* left: info */}
          <div>
            <Reveal>
              <span className="label-caps text-goldlight">№ 06 — Contact</span>
              <h2 className="display-tight mt-4 font-serif text-5xl font-medium sm:text-6xl md:text-7xl">
                Елате
                <br />
                <em className="font-light italic text-goldlight">на цветя и кафе</em>
              </h2>
              <p className="mt-6 max-w-md text-[0.95rem] font-light leading-relaxed text-ivory/60">
                На една крачка от центъра на Благоевград. Обадете се за поръчка
                или просто спрете — вратата винаги ухае на свежи цветя.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <ul className="mt-12 space-y-7">
                <li className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/20">
                    <Phone className="h-4 w-4 text-goldlight" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="label-caps !text-[0.55rem] text-ivory/45">Телефон &amp; Viber</span>
                    <a
                      href="tel:+359897907870"
                      className="link-flourish mt-1 block font-serif text-2xl"
                    >
                      089 790 7870
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/20">
                    <MapPin className="h-4 w-4 text-goldlight" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="label-caps !text-[0.55rem] text-ivory/45">Адрес</span>
                    <a
                      href="https://maps.google.com/?q=ул.+Иван+Михайлов+43А,+Благоевград"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-flourish mt-1 block font-serif text-2xl"
                    >
                      ул. Иван Михайлов 43А
                    </a>
                    <span className="block font-serif text-base italic text-ivory/55">
                      срещу РТВЦ, Благоевград
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/20">
                    <Clock className="h-4 w-4 text-goldlight" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="label-caps !text-[0.55rem] text-ivory/45">Работно време</span>
                    <span className="mt-1 block font-serif text-2xl">
                      Пн – Сб: 09:00 – 19:00
                    </span>
                    <span className="block font-serif text-lg italic text-ivory/55">
                      Неделя: 10:00 – 17:00
                    </span>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-12 flex items-center gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61589948000193"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook страница"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 transition-all duration-500 hover:border-goldlight hover:bg-goldlight hover:text-noir"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/flowersandthecity.bg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram профил"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 transition-all duration-500 hover:border-goldlight hover:bg-goldlight hover:text-noir"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <span className="label-caps ml-2 !text-[0.58rem] text-ivory/45">
                  @flowersandthecity.bg
                </span>
              </div>
            </Reveal>

            {/* map */}
            <Reveal clip delay={300} className="mt-12">
              <div className="overflow-hidden rounded-2xl border border-ivory/15">
                <iframe
                  title="Карта: Flowers and the City, ул. Иван Михайлов 43А, Благоевград"
                  src="https://maps.google.com/maps?q=%D1%83%D0%BB.+%D0%98%D0%B2%D0%B0%D0%BD+%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2+43%D0%90,+%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B5%D0%B2%D0%B3%D1%80%D0%B0%D0%B4&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="map-mono h-64 w-full border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* right: order form (Netlify Forms) */}
          <Reveal delay={200}>
            <div className="relative border border-ivory/15 bg-ivory p-8 text-ink md:p-12">
              <span className="label-caps !text-[0.56rem] text-gold">
                Bon de commande
              </span>
              <h3 className="display-tight mt-3 font-serif text-4xl font-medium md:text-5xl">
                Поръчайте букет
              </h3>
              <p className="mt-3 text-sm font-light text-smoke">
                Попълнете формата и ще ви потърсим в рамките на час, за да
                уточним детайлите.
              </p>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 flex flex-col items-center border border-leaf/30 bg-leaf/10 px-6 py-14 text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-ivory">
                      <Check className="h-6 w-6" />
                    </span>
                    <p className="mt-6 font-serif text-2xl italic">
                      Merci! Поръчката е приета.
                    </p>
                    <p className="mt-2 text-sm font-light text-smoke">
                      Очаквайте обаждане от 089 790 7870.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="link-flourish label-caps mt-8 !text-[0.6rem] text-ink/70"
                    >
                      Нова поръчка
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={onSubmit}
                    name="order"
                    data-netlify="true"
                    data-netlify-honeypot="company"
                    className="mt-10 space-y-7"
                  >
                    <input type="hidden" name="form-name" value="order" />
                    <p className="hidden">
                      <label>
                        Не попълвайте: <input name="company" />
                      </label>
                    </p>
                    <div>
                      <label htmlFor="name" className="label-caps !text-[0.55rem] text-smoke">
                        Вашето име *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        maxLength={120}
                        placeholder="Мария Иванова"
                        className="field"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="label-caps !text-[0.55rem] text-smoke">
                        Телефон за връзка *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        required
                        maxLength={32}
                        placeholder="08x xxx xxxx"
                        className="field"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="occasion" className="label-caps !text-[0.55rem] text-smoke">
                        Повод
                      </label>
                      <select id="occasion" name="occasion" className="field pr-8" defaultValue="bouquet">
                        {OCCASIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute bottom-4 right-1 h-4 w-4 text-smoke" />
                    </div>
                    <div>
                      <label htmlFor="message" className="label-caps !text-[0.55rem] text-smoke">
                        Какво си представяте?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        maxLength={2000}
                        placeholder="Напр. букет в пастелни тонове за рожден ден, около 60 лв…"
                        className="field resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="border border-rose/40 bg-rose/10 px-4 py-3 text-sm text-ink/80">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-ink py-4 text-ivory transition-opacity disabled:opacity-60"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-leaf transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                      {status === "sending" ? (
                        <LoaderCircle className="relative z-10 h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                      )}
                      <span className="label-caps relative z-10 !text-[0.66rem]">
                        {status === "sending" ? "Изпращане…" : "Изпрати поръчка"}
                      </span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
