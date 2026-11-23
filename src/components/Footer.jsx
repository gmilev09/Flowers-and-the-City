import { Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="relative border-t hairline-light bg-noir pb-28 pt-16 text-ivory lg:pb-10">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        {/* big CTA line */}
        <div className="flex flex-col items-start justify-between gap-8 border-b hairline-light pb-12 md:flex-row md:items-center">
          <h2 className="display-tight font-serif text-4xl font-medium sm:text-5xl md:text-6xl">
            Where the city <em className="font-light italic text-goldlight">blooms</em>
            <span className="text-goldlight">.</span>
          </h2>
          <a
            href="tel:+359897907870"
            className="group flex items-center gap-3 rounded-full border border-ivory/25 px-7 py-4 transition-all duration-500 hover:border-goldlight hover:bg-goldlight hover:text-noir"
          >
            <Phone className="h-4 w-4" />
            <span className="label-caps !text-[0.66rem]">089 790 7870</span>
          </a>
        </div>

        {/* columns */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-10 w-10 overflow-hidden rounded-full bg-paper">
                <img
                  src="/images/fb-profile.png"
                  alt="Лого на Flowers and the City"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="object-cover"
                />
              </span>
              <span className="font-serif text-xl">Flowers &amp; The City</span>
            </div>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-ivory/50">
              Цветарница и кафене в парижки дух. Цветя, чай, специално кафе и
              бавни моменти в сърцето на Благоевград.
            </p>
          </div>

          <div>
            <span className="label-caps !text-[0.58rem] text-goldlight">Навигация</span>
            <ul className="mt-5 space-y-3">
              {[
                ["#maison", "Мястото"],
                ["#atelier", "Услуги"],
                ["#galerie", "Галерия"],
                ["#carte", "Карта"],
                ["#contact", "Контакти"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="link-flourish font-serif text-lg font-light italic text-ivory/70 hover:text-ivory"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="label-caps !text-[0.58rem] text-goldlight">Намерете ни</span>
            <p className="mt-5 text-sm font-light leading-relaxed text-ivory/60">
              ул. Иван Михайлов 43А
              <br />
              (срещу РТВЦ), Благоевград
            </p>
            <div className="mt-4 border-t hairline-light pt-4">
              <span className="label-caps !text-[0.52rem] text-goldlight/70">Работно време</span>
            </div>
            <ul className="mt-3 space-y-3 text-sm font-light text-ivory/60">
              <li className="flex justify-between gap-4">
                <span>Понеделник – Събота</span>
                <span className="text-ivory/90">09:00 – 19:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Неделя</span>
                <span className="text-ivory/90">10:00 – 17:00</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="label-caps !text-[0.58rem] text-goldlight">Последвайте ни</span>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61589948000193"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 transition-all duration-500 hover:border-goldlight hover:bg-goldlight hover:text-noir"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/flowersandthecity.bg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 transition-all duration-500 hover:border-goldlight hover:bg-goldlight hover:text-noir"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-xs font-light text-ivory/40">
              @flowersandthecity.bg
            </p>
          </div>
        </div>

        {/* bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 border-t hairline-light pt-8 sm:flex-row">
          <span className="label-caps !text-[0.52rem] text-ivory/40">
            © {new Date().getFullYear()} Flowers &amp; The City · Благоевград
          </span>
          <span className="font-serif text-sm italic text-ivory/40">
            fait avec amour, в духа на Париж
          </span>
        </div>
      </div>
    </footer>
  );
}
