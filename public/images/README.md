# Снимки — Flowers & The City

Структурата е като в репозиторио `Tennis-academy-Ivo-Gushterov`:

1. **Оригиналните файлове** стоят тук, в `public/images/`.
2. При build се генерира `src/lib/images-data.js` — всяка снимка е
   записана като `data:` URL (base64) и се вгражда в кода.
3. `src/lib/images.js` резолвва всеки път през `MEDIA`, така че
   снимките, логото и цветята се показват на **всеки** хостинг
   (Netlify, Cloudflare Pages, локално) — дори ако файловете не са
   качени отделно.

## Регенериране на data URL-ите

След като смениш/добавиш снимка в `public/images/`:

```bash
node scripts/gen-media.mjs   # или виж /tmp/gen-media.mjs от deploy-а
npm run build
```

## Текущи файлове

| Път | Какво е |
|---|---|
| `fb-profile.png` | логото (навигация, футър, преloader) |
| `g/hero-facade.jpg` | фасадата — начален кадър, og:image |
| `g/hero-piano.jpg` | интериор с пианото |
| `g/salon-piano.jpg` | пианото и витрината |
| `g/salon-arch.jpg` | арковата витрина |
| `g/cafe-bar.jpg` | ледено лате — услугата „специално кафе“ |
| `g/coffee-bags.jpg` | кафе на плота |
| `ig/bouquet-hand.jpg` | букет в ръцете |
| `ig/bouquet-blue.jpg` | синя хортензия |
| `ig/hatbox-pink.jpg` | розова хат-бокс |
| `ig/bouquet-basket.jpg` | кошница с перли |
| `flowers/*.jpg` | 10 глави на цветя за сцената на букета |

Кадрите са реални снимки на обекта от Google Maps визитката
(Flowers and the City, ул. Иван Михайлов 43А, Благоевград).

**Важно:** имената се сравняват точно (Linux е с чувствителен регистър).
