import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";
import { ASSEMBLY_FLOWERS as FL } from "@/lib/images";

/* ---------------- детерминистична „случайност“ ---------------- */
const seeded = (i, k) => {
  const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const WRAP = { paper: "#c8a97e", paperDark: "#a9885c", paperLight: "#e3cba4" };
const RIBBON = { color: "#a68956" };

const FLOWER_SPECS = [
  { src: FL.gypsophila, alt: "Гипсофила", selfStem: true, head: 128, angle: -36, dx: -52, dy: -30, delay: 0.0, scale: 0.95 },
  { src: FL.eucalyptus, alt: "Евкалипт", selfStem: true, head: 118, angle: -27, dx: -42, dy: -8, delay: 0.03, scale: 1.0 },
  { src: FL.tulipCoral, alt: "Коралово лале", selfStem: false, head: 96, angle: -21, dx: -34, dy: -46, delay: 0.06, scale: 0.94 },
  { src: FL.peonyNoir, alt: "Кремав божур", selfStem: false, head: 112, angle: -14, dx: -24, dy: -14, delay: 0.09, scale: 1.0 },
  { src: FL.hydrangeaMix, alt: "Хортензия", selfStem: false, head: 118, angle: -7, dx: -12, dy: -48, delay: 0.12, scale: 1.05 },
  { src: FL.peonyWhite, alt: "Бял божур", selfStem: false, head: 116, angle: -2, dx: -2, dy: -16, delay: 0.15, scale: 1.08 },
  { src: FL.proteaRed, alt: "Протея", selfStem: false, head: 108, angle: 4, dx: 10, dy: -44, delay: 0.18, scale: 1.0 },
  { src: FL.tulipPink, alt: "Розово лале", selfStem: false, head: 96, angle: 12, dx: 24, dy: -16, delay: 0.21, scale: 0.94 },
  { src: FL.gerberaWhite, alt: "Бяла гербера", selfStem: false, head: 100, angle: 19, dx: 32, dy: -44, delay: 0.24, scale: 0.92 },
  { src: FL.peonyPink, alt: "Розов божур", selfStem: false, head: 106, angle: 26, dx: 40, dy: -10, delay: 0.27, scale: 0.98 },
  { src: FL.gypsophila, alt: "Гипсофила", selfStem: true, head: 124, angle: 33, dx: 50, dy: -32, delay: 0.3, scale: 0.9 },
  { src: FL.eucalyptus, alt: "Евкалипт", selfStem: true, head: 116, angle: 40, dx: 56, dy: -4, delay: 0.33, scale: 0.96 },
];

/* ---- фотореалистично цвете: главата е снимка с перавана маска + нарисувано стъбло ---- */
function PhotoFlower({ spec, uid }) {
  const stemH = 190;
  if (spec.selfStem) {
    return (
      <div
        className="flower-cut-tall relative"
        style={{ width: spec.head, height: spec.head * 1.3 }}
      >
        <img
          src={spec.src}
          alt={spec.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="relative" style={{ width: spec.head }}>
      {/* глава */}
      <div className="flower-cut relative z-10" style={{ width: spec.head, height: spec.head }}>
        <img
          src={spec.src}
          alt={spec.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      {/* стъбло */}
      <svg
        width={spec.head}
        height={stemH}
        viewBox={`0 0 100 ${stemH}`}
        className="absolute left-0 top-[72%] -z-0 overflow-visible"
        aria-hidden
      >
        <path
          d={`M50 6 C ${46 + (uid.length % 3) * 3} ${stemH * 0.35} ${54 - (uid.length % 2) * 4} ${stemH * 0.7} 50 ${stemH}`}
          stroke="#42513a"
          strokeWidth={4}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d={`M50 ${stemH * 0.45} C 36 ${stemH * 0.42} 28 ${stemH * 0.3} 27 ${stemH * 0.22} C 40 ${stemH * 0.25} 48 ${stemH * 0.34} 50 ${stemH * 0.45} Z`}
          fill="#5f6b55"
          opacity={0.9}
        />
        <path
          d={`M50 ${stemH * 0.68} C 64 ${stemH * 0.65} 71 ${stemH * 0.54} 72 ${stemH * 0.46} C 59 ${stemH * 0.49} 52 ${stemH * 0.58} 50 ${stemH * 0.68} Z`}
          fill="#7c8a70"
          opacity={0.85}
        />
      </svg>
    </div>
  );
}

/* ---------------- едно летящо цвете в 3D ---------------- */
function AssemblyFlower({ spec, index, progress }) {
  const start = 0.04 + spec.delay * 0.55;
  const end = Math.min(start + 0.34, 0.66);

  const x = useTransform(progress, [start, end], [`${spec.sx}vw`, `${spec.dx}px`]);
  const y = useTransform(progress, [start, end], [`${spec.sy}vh`, `${spec.dy}px`]);
  const z = useTransform(progress, [start, end], [spec.srz, 0]);
  const rot = useTransform(progress, [start, end], [spec.srot, spec.angle]);
  const scale = useTransform(progress, [start, end], [1.1, spec.scale]);

  return (
    <motion.div
      style={{ x, y, z, rotate: rot, scale, transformStyle: "preserve-3d" }}
      className="absolute left-1/2 top-[42%] drop-shadow-[0_22px_26px_rgba(20,17,12,0.3)]"
    >
      <div
        style={{
          transform: spec.selfStem
            ? `translate(-50%, calc(-100% - ${spec.head * 0.1}px))`
            : "translate(-50%, calc(-100% - 40px))",
          transformOrigin: spec.selfStem ? "50% 78%" : `50% ${spec.head + 150}px`,
        }}
      >
        <PhotoFlower spec={spec} uid={`f${index}`} />
      </div>
    </motion.div>
  );
}

/* ---------------- падащи венчелистчета ---------------- */
function Petals({ progress }) {
  const opacity = useTransform(progress, [0.55, 0.7], [0, 1]);
  const petals = Array.from({ length: 9 }).map((_, i) => ({
    left: 8 + seeded(i, 1) * 84,
    top: seeded(i, 2) * 20,
    size: 10 + seeded(i, 3) * 16,
    dur: 9 + seeded(i, 4) * 9,
    delay: seeded(i, 5) * 6,
    drift: (seeded(i, 6) - 0.5) * 120,
    color: i % 3 === 0 ? "#e3b7b0" : i % 3 === 1 ? "#f2c94c" : "#efe9da",
  }));
  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-[100%_10%_100%_10%]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size * 1.3,
            background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
          }}
          animate={{
            y: ["0vh", "72vh"],
            x: [0, p.drift],
            rotate: [0, 360],
          }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </motion.div>
  );
}

/* ---------------- основната сцена ---------------- */
export default function FlowerAssembly() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const flowers = FLOWER_SPECS.map((f, i) => ({
    ...f,
    sx: (seeded(i, 7) - 0.5) * 92,
    sy: (seeded(i, 8) - 0.5) * 62 + 4,
    srz: -560 + seeded(i, 9) * 940,
    srot: (seeded(i, 10) - 0.5) * 280,
  }));

  // хартиени листа
  const paperLX = useTransform(scrollYProgress, [0.58, 0.74], ["-130%", "0%"]);
  const paperRX = useTransform(scrollYProgress, [0.58, 0.74], ["130%", "0%"]);
  const paperRot = useTransform(scrollYProgress, [0.58, 0.74], [14, 0]);
  const paperOpacity = useTransform(scrollYProgress, [0.56, 0.62], [0, 1]);

  // панделка
  const ribbonScale = useTransform(scrollYProgress, [0.78, 0.88], [0, 1]);
  const ribbonOpacity = useTransform(scrollYProgress, [0.76, 0.8], [0, 1]);

  // сцена
  const stageZ = useTransform(scrollYProgress, [0.85, 1], [0, -140]);
  const stageRotX = useTransform(scrollYProgress, [0, 1], [11, 4]);

  // текстови етапи
  const t1o = useTransform(scrollYProgress, [0, 0.16, 0.26], [1, 1, 0]);
  const t2o = useTransform(scrollYProgress, [0.34, 0.42, 0.56, 0.62], [0, 1, 1, 0]);
  const t3o = useTransform(scrollYProgress, [0.72, 0.82], [0, 1]);
  const t3y = useTransform(scrollYProgress, [0.72, 0.86], [40, 0]);
  const bg = useTransform(scrollYProgress, [0, 0.5, 1], ["#f4efe4", "#efe7d6", "#e9dfca"]);
  const hintO = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section ref={ref} className="relative h-[260vh] lg:h-[380vh]" id="assemble">
      <motion.div style={{ backgroundColor: bg }} className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* дълбочинна сцена */}
        <div className="absolute inset-0" style={{ perspective: 1100 }}>
          <motion.div
            style={{ z: stageZ, rotateX: stageRotX, transformStyle: "preserve-3d" }}
            className="absolute inset-0"
          >
            {/* орбитални пръстени */}
            <motion.div
              className="absolute left-1/2 top-[42%] h-[46vmin] w-[46vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/10"
              style={{
                rotate: useTransform(scrollYProgress, [0, 1], [0, 90]),
                opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 0.8]),
              }}
            />
            <motion.div
              className="absolute left-1/2 top-[42%] h-[64vmin] w-[64vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/30"
              style={{
                rotate: useTransform(scrollYProgress, [0, 1], [30, -60]),
                opacity: useTransform(scrollYProgress, [0.4, 0.55], [0, 0.7]),
              }}
            />

            {/* хартия зад цветята */}
            <motion.div
              style={{ x: paperLX, rotate: paperRot, opacity: paperOpacity }}
              className="absolute left-1/2 top-[38%] z-0"
            >
              <svg width="360" height="420" viewBox="0 0 360 420" style={{ transform: "translate(-100%, -18%)" }}>
                <path d="M340 10 C 210 60 130 170 60 380 L 340 400 Z" fill={WRAP.paper} />
                <path d="M340 10 C 250 90 190 200 150 370 L 340 400 Z" fill={WRAP.paperLight} opacity={0.8} />
              </svg>
            </motion.div>
            <motion.div
              style={{ x: paperRX, rotate: paperRot, opacity: paperOpacity }}
              className="absolute left-1/2 top-[38%] z-0"
            >
              <svg width="360" height="420" viewBox="0 0 360 420" style={{ transform: "translate(0%, -18%) scaleX(-1)" }}>
                <path d="M340 10 C 210 60 130 170 60 380 L 340 400 Z" fill={WRAP.paperDark} />
                <path d="M340 10 C 250 90 190 200 150 370 L 340 400 Z" fill={WRAP.paperLight} opacity={0.55} />
              </svg>
            </motion.div>

            {/* летящите реални цветя */}
            {flowers.map((f, i) => (
              <AssemblyFlower key={i} spec={f} index={i} progress={scrollYProgress} />
            ))}

            {/* панделка */}
            <motion.div
              style={{ scale: ribbonScale, opacity: ribbonOpacity }}
              className="absolute left-1/2 top-[38%] z-10"
            >
              <svg width="150" height="150" viewBox="0 0 150 150" style={{ transform: "translate(-50%, 96px)" }}>
                <path d="M75 40 C 48 20 20 26 16 44 C 13 60 40 66 75 50 Z" fill={RIBBON.color} />
                <path d="M75 40 C 102 20 130 26 134 44 C 137 60 110 66 75 50 Z" fill={RIBBON.color} />
                <path d="M68 50 C 60 84 54 112 56 142 L 72 142 C 70 112 72 82 80 54 Z" fill={RIBBON.color} opacity={0.92} />
                <path d="M82 50 C 90 84 96 112 94 142 L 78 142 C 80 112 78 82 70 54 Z" fill={RIBBON.color} opacity={0.85} />
                <circle cx={75} cy={46} r={11} fill={RIBBON.color} />
                <circle cx={75} cy={46} r={11} fill="#000" opacity={0.15} />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        <Petals progress={scrollYProgress} />

        {/* текстови слоеве */}
        <motion.div style={{ opacity: t1o }} className="pointer-events-none absolute inset-x-0 top-[9%] px-6 text-center">
          <span className="label-caps text-gold">№ 02 — Сцена на букета</span>
          <h2 className="display-tight mt-4 font-serif text-5xl font-medium sm:text-6xl md:text-7xl">
            От разпилени цветя…
          </h2>
        </motion.div>

        <motion.div style={{ opacity: t2o }} className="pointer-events-none absolute inset-x-0 top-[8%] px-6 text-center">
          <span className="label-caps text-gold">Сглобява се</span>
          <h2 className="display-tight mt-4 font-serif text-5xl font-medium sm:text-6xl md:text-7xl">
            <em className="font-light italic text-leaf">…в нещо красиво</em>
          </h2>
        </motion.div>

        <motion.div style={{ opacity: t3o, y: t3y }} className="pointer-events-none absolute inset-x-0 bottom-[6%] flex flex-col items-center px-6 text-center">
          <h2 className="display-tight font-serif text-4xl font-medium sm:text-5xl md:text-6xl">
            Вашият букет е <em className="font-light italic text-leaf">готов</em>
          </h2>
          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-smoke">
            Точно така работим и в ателието на ул. Иван Михайлов 43А — всяко
            цвете намира мястото си.
          </p>
          <a
            href="tel:+359897907870"
            className="group pointer-events-auto relative mt-7 inline-flex overflow-hidden rounded-full bg-ink px-8 py-4 text-ivory"
          >
            <span className="absolute inset-0 -translate-x-full bg-leaf transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
            <span className="label-caps relative z-10 flex items-center gap-2 !text-[0.66rem]">
              <Phone className="h-4 w-4" />
              Поръчай на 089 790 7870
            </span>
          </a>
        </motion.div>

        {/* подсказка за скрол */}
        <motion.div style={{ opacity: hintO }} className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink/50">
          <span className="label-caps !text-[0.55rem]">Скролвайте бавно</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
