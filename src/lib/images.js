/**
 * Всички снимки на сайта.
 *
 * Пътищата сочат към public/images/..., но през MEDIA (src/lib/images-data.js)
 * се резолврат до data: URL — по модела на репозиторио
 * Tennis-academy-Ivo-Gushterov. Така снимките, логото и цветята се показват
 * на всеки хостинг (Netlify, Cloudflare, локално), без да се разчита на
 * отделни файлове.
 *
 * Кадрите са реални фотографии на обекта от Google Maps визитката на
 * Flowers and the City (ул. Иван Михайлов 43А, Благоевград).
 */
import { MEDIA } from "./images-data";

/** "/images/g/hero-facade.jpg" → "data:image/jpeg;base64,..." (ако е налична) */
export const img = (path) => MEDIA[path] || path;

const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Flowers+and+the+City+%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B5%D0%B2%D0%B3%D1%80%D0%B0%D0%B4";

export const HERO_FACADE = {
  src: img("/images/g/hero-facade.jpg"),
  alt: "Фасадата на Flowers and the City — ул. Иван Михайлов 43А, Благоевград",
};

export const HERO_DETAIL = {
  src: img("/images/g/hero-piano.jpg"),
  alt: "Интериорът — пианото, стъклена витрина с букети и лампите-цветя",
};

export const GALLERY = [
  // --- Обектът: екстериор & интериор ---
  {
    src: img("/images/g/hero-facade.jpg"),
    alt: "Фасадата с отворената врата и външните маси",
    title: "Фасадата",
    category: "obekt",
    ig: MAPS,
    landscape: true,
  },
  {
    src: img("/images/g/salon-arch.jpg"),
    alt: "Салонът — арковата витрина с букети и лампите-цветя",
    title: "Витрината",
    category: "obekt",
    ig: MAPS,
    landscape: true,
  },
  {
    src: img("/images/g/salon-piano.jpg"),
    alt: "Черното пиано и стъклената витрина с букети",
    title: "Пианото",
    category: "obekt",
    ig: MAPS,
    landscape: true,
  },
  {
    src: img("/images/g/hero-piano.jpg"),
    alt: "Кътът за снимки с пианото и арковата ниша",
    title: "Арковата ниша",
    category: "obekt",
    ig: MAPS,
    landscape: true,
  },

  // --- Букети ---
  {
    src: img("/images/ig/bouquet-blue.jpg"),
    alt: "Букет със синя хортензия и розови рози",
    title: "Синя хортензия",
    category: "buketi",
    ig: MAPS,
  },
  {
    src: img("/images/ig/hatbox-pink.jpg"),
    alt: "Розова хат-бокс композиция с рози и зелена хортензия",
    title: "Розова хат-бокс",
    category: "buketi",
    ig: MAPS,
  },
  {
    src: img("/images/ig/bouquet-basket.jpg"),
    alt: "Коледна кошница с букет, перли и панделки",
    title: "Кошница с перли",
    category: "buketi",
    ig: MAPS,
  },

  // --- Хора & моменти ---
  {
    src: img("/images/ig/bouquet-hand.jpg"),
    alt: "Ръка с пръстен, държаща кремав букет от рози и хортензии",
    title: "Моментът",
    category: "hora",
    ig: MAPS,
  },

  // --- Кафе & чай ---
  {
    src: img("/images/g/cafe-bar.jpg"),
    alt: "Ледено лате на масата до роза — лято на Иван Михайлов",
    title: "Лятна чаша",
    category: "kafe",
    ig: MAPS,
  },
  {
    src: img("/images/g/coffee-bags.jpg"),
    alt: "Пакети с кафе на плота — „най-доброто кафе у дома“",
    title: "Нашето кафе",
    category: "kafe",
    ig: MAPS,
    landscape: true,
  },
];

export const ABOUT_IMAGES = {
  interior: {
    src: img("/images/g/salon-arch.jpg"),
    alt: "Интериорът на Flowers and the City с лампите-цветя",
  },
  detail: {
    src: img("/images/ig/bouquet-blue.jpg"),
    alt: "Детайл от букет със синя хортензия",
  },
  street: {
    src: img("/images/g/salon-piano.jpg"),
    alt: "Пианото и витрината с букети в салона",
  },
};

export const SERVICE_IMAGES = {
  bouquets: { src: img("/images/ig/bouquet-hand.jpg"), alt: "Авторски букет в ръцете на клиент" },
  coffee: { src: img("/images/g/cafe-bar.jpg"), alt: "Специално кафе — ледено лате на външна маса" },
  tea: { src: img("/images/g/coffee-bags.jpg"), alt: "Кафе и чай на плота" },
  events: { src: img("/images/ig/hatbox-pink.jpg"), alt: "Хат-бокс композиция за събитие" },
};

export const CARTE_SIDE_IMAGE = {
  src: img("/images/g/hero-piano.jpg"),
  alt: "Пианото и стъклената витрина с букети",
};

/** Реални снимки на цветя за 3D сцената на букета */
export const ASSEMBLY_FLOWERS = {
  gypsophila: img("/images/flowers/gypsophila.jpg"),
  eucalyptus: img("/images/flowers/eucalyptus.jpg"),
  tulipCoral: img("/images/flowers/tulip-coral.jpg"),
  tulipPink: img("/images/flowers/tulip-pink.jpg"),
  peonyWhite: img("/images/flowers/peony-white.jpg"),
  peonyPink: img("/images/flowers/peony-pink.jpg"),
  peonyNoir: img("/images/flowers/peony-noir.jpg"),
  proteaRed: img("/images/flowers/protea-red.jpg"),
  hydrangeaMix: img("/images/flowers/hydrangea-mix.jpg"),
  gerberaWhite: img("/images/flowers/gerbera-white.jpg"),
};
