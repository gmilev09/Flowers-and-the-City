import Reveal from "./Reveal";
import { ABOUT_IMAGES } from "@/lib/images";

export default function Interlude() {
  const bg = ABOUT_IMAGES.interior;

  return (
    <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden">
      <img
        src={bg.src}
        alt={bg.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-noir/55" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center text-ivory">
        <Reveal>
          <span className="label-caps text-goldlight">Un moment lent</span>
          <p className="mt-8 font-serif text-4xl font-light italic leading-snug md:text-6xl">
            „Дайте на града цветя — и той ще ви върне усмивки.“
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-goldlight/70" />
            <span className="label-caps !text-[0.6rem] text-ivory/70">
              философията на къщата
            </span>
            <span className="h-px w-12 bg-goldlight/70" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
