import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { href: "#maison", label: "Мястото" },
  { href: "#atelier", label: "Услуги" },
  { href: "#galerie", label: "Галерия" },
  { href: "#carte", label: "Карта" },
  { href: "#contact", label: "Контакти" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // докато мобилното меню е отворено — фонът не се движи
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-ivory/90 shadow-[0_1px_0_rgba(29,25,18,0.12)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10">
          {/* brand */}
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative block h-11 w-11 overflow-hidden rounded-full border border-ink/15 bg-paper shadow-sm">
              <img
                src="/images/fb-profile.png"
                alt="Flowers and the City — лого"
                width={44}
                height={44}
                className="object-cover transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110"
              />
            </span>
            <span className="leading-none">
              <span className="block font-serif text-xl font-medium tracking-wide">
                Flowers <span className="italic text-gold">&amp;</span> The City
              </span>
              <span className="label-caps mt-1 block text-[0.56rem] text-smoke">
                Blagoevgrad · est. 2025
              </span>
            </span>
          </a>

          {/* desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-flourish label-caps text-[0.66rem] text-ink/70 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+359897907870"
              className="group flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 transition-all duration-500 hover:border-ink hover:bg-ink hover:text-ivory"
            >
              <Phone className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-12" />
              <span className="label-caps text-[0.66rem]">089 790 7870</span>
            </a>
          </nav>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Меню"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-noir text-ivory transition-all duration-700 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className={`font-serif text-4xl font-light italic transition-all duration-500 hover:text-goldlight ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${120 + i * 70}ms` }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="tel:+359897907870"
          className={`mt-8 flex items-center gap-2 rounded-full border border-ivory/30 px-6 py-3 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <Phone className="h-4 w-4" />
          <span className="label-caps text-xs">089 790 7870</span>
        </a>
      </div>

      {/* мобилно: постоянна лента за обаждане и поръчка */}
      {!open && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-ink/10 bg-ivory/95 px-4 pt-2.5 backdrop-blur-md lg:hidden"
          style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
        >
          <a
            href="tel:+359897907870"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/25 py-3 transition-colors duration-300 active:bg-ink/5"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="label-caps !text-[0.58rem]">Обади се</span>
          </a>
          <a
            href="#contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-3 text-ivory transition-colors duration-300 active:bg-leaf"
          >
            <span className="label-caps !text-[0.58rem]">Поръчай букет</span>
          </a>
        </div>
      )}
    </>
  );
}
