# Russian Spa Mahipalpur — website

Static website for **Russian Spa Mahipalpur** (body massage in Mahipalpur & Delhi Aerocity),
built with [Astro](https://astro.build). No backend, no database — it builds to plain HTML,
so it is fast, cheap to host and easy for Google to crawl.

Live domain: <https://spanearmemahipalpur.com>

---

## 1. Commands

| Command           | What it does                                            |
| ----------------- | ------------------------------------------------------- |
| `npm install`     | install dependencies (run once)                         |
| `npm run dev`     | start the dev server on <http://localhost:4321>         |
| `npm run build`   | type-check, then build the site into `dist/`            |
| `npm run preview` | serve the built `dist/` folder locally                  |

Upload the contents of `dist/` to your host (Netlify, Vercel, cPanel, anything).

---

## 2. The one file you will edit most

**`src/data/site.ts`** is the single source of truth for the whole site:

- phone number, WhatsApp number, e-mail, address, opening hours;
- **social media links — one place, changes everywhere** (header, footer and the
  `sameAs` list in the structured data);
- the header menu and the footer "Quick Links".

Change a value there once and every page updates. Never type a phone number or a
social URL directly into a page.

> The six social URLs are currently `'#'`. Replace them with your real profile
> links. If you have no profile on a network, delete that line — the icon then
> disappears everywhere automatically.

---

## 3. Project structure

```
public/
  images/{logo,hero,services,gallery,locations}/   your real photos go here
  favicon.svg  robots.txt  site.webmanifest

src/
  components/    Header, Footer, MobileMenu, Breadcrumbs, CTA, ServiceCard,
                 LocationCard, GalleryGrid, FAQ, SocialLinks, WhatsAppFloat, PageHero
  layouts/       BaseLayout.astro     <- the <head> and SEO for every page
                 LocationLayout.astro <- shared skeleton for the 10 area pages
  pages/         index.astro (home, complete)
                 about/ services/ pricing/ gallery/ contact/
                 russian-spa-in-<area>/   x10
                 404.astro
  data/          site.ts        contact details, socials, menus
                 services.ts    services, packages, facilities, promises
                 locations.ts   the 10 areas + prime location cards + footer outlets
                 reviews.ts     Google reviews, counters, therapists, booking steps
                 faqs.ts        FAQ questions and answers
                 drafts.mjs     pages that are still noindex (see below)
                 home-images.ts photos used ONLY by the home page
                 page-images.ts photos for all the other pages
  styles/        global.css     design tokens (colours, fonts, spacing)
  utils/         seo.ts  schema.ts  image.ts
```

**Images are split per page on purpose.** `home-images.ts` is imported by the home
page and nothing else, so changing a home page photo can never affect another page.

---

## 4. Adding content to a page

### A location page (e.g. `/russian-spa-in-dwarka/`)

1. Open `src/data/locations.ts` and fill in `intro`, `sections` and `faqs` for that slug.
2. Remove `'/russian-spa-in-dwarka/'` from `src/data/drafts.mjs`.
3. `npm run build`.

The page file itself (`src/pages/russian-spa-in-dwarka/index.astro`) is three lines
and never needs editing — all ten areas share `LocationLayout.astro`.

### The About page

Fill in `intro` and `sections` at the top of `src/pages/about/index.astro`, then
remove `'/about/'` from `drafts.mjs`.

**Write new text for it — do not copy the home page.** Two pages with the same
text compete with each other in Google (duplicate content).

### The Gallery page

Put photos in `public/images/gallery/`, then in `src/data/page-images.ts` replace the
`galleryImages` entries with `localImage('/images/gallery/room-1.webp', 'alt text', w, h)`.
Remove `'/gallery/'` from `drafts.mjs`.

---

## 5. Draft pages (`src/data/drafts.mjs`)

A page listed in that file is:

1. rendered with `<meta name="robots" content="noindex, nofollow">`, and
2. left out of `sitemap-index.xml`.

This keeps half-finished pages out of Google. Thin pages that get indexed drag the
whole domain down in Search Console. Delete a line from the list to publish that page.

Currently drafted: `/about/`, `/gallery/` and all ten location pages.
Already live and indexable: `/`, `/services/`, `/pricing/`, `/contact/`.

---

## 6. SEO checklist — what is already done

- canonical URL on every page, one single URL shape (`trailingSlash: 'always'`)
- unique title + meta description per page, with a build-time warning if either runs long
- Open Graph + Twitter card tags on every page
- `robots.txt` pointing at the sitemap
- `sitemap-index.xml` generated at build, with per-section priorities, drafts excluded
- JSON-LD structured data: `DaySpa` (local business), `WebSite`, `WebPage`,
  `BreadcrumbList`, `FAQPage`, `Service`, `OfferCatalog`
- visible breadcrumbs that match the breadcrumb markup
- one `<h1>` per page and a correct h2 → h3 heading order
- `width`/`height` on every image (no layout shift), lazy loading below the fold,
  `fetchpriority="high"` on the hero
- mobile-first responsive layout, 48px tap targets, skip link, visible focus rings,
  `prefers-reduced-motion` respected
- no JavaScript framework shipped to the browser — only ~2 kB for the mobile menu

### Not done yet (needs you)

- **Google Search Console**: add the property for `https://spanearmemahipalpur.com`,
  verify it, and submit `https://spanearmemahipalpur.com/sitemap-index.xml`.
- **`/public/og-image.jpg`** (1200×630) for social previews — `site.ts` currently
  points at a stock photo. Also add `favicon.ico` and `apple-touch-icon.png`, then
  add their `<link>` tags in `BaseLayout.astro`.
- **Real photos.** Everything is stock photography from Unsplash right now.
- **Real staff photos** for the therapist cards (with the therapists' consent).
- **The four unanswered FAQs** in `src/data/faqs.ts`.
- **Google Business Profile "Write a review" link** in `src/data/reviews.ts`.

### Deliberate decisions

- **No review / rating structured data.** Google's review-snippet policy does not
  allow a business to mark up reviews it collected and republished on its own site.
  The reviews still show on the page as testimonials; the star rating shows on your
  Google Business Profile, which is where Google wants it.
- **Links only point at pages that exist.** Areas without their own page yet
  (Greater Kailash, Lajpat Nagar, Connaught Place, Malviya Nagar, Defence Colony)
  link to `/contact/` instead of a URL that would 404.

---

## 7. Logo and icons

The source artwork is `public/images/logo/logo.png` (1240×1268, transparent).
The site never serves that file directly — 1.1 MB for a 40px logo would be the
heaviest asset on the page. These small copies are served instead:

| File | Size | Used for |
| ---- | ---- | -------- |
| `images/logo/logo-96.webp` | 5 KB | header + footer logo (modern browsers) |
| `images/logo/logo-96.png` | 5 KB | header + footer logo (fallback) |
| `apple-touch-icon.png` | 13 KB | iOS home screen |
| `favicon-512.png` | 69 KB | browser tab + web app icon |

Paths live in `site.logo` in [src/data/site.ts](src/data/site.ts) — one place.

**If you replace the logo artwork**, drop the new file at the same path and
regenerate the small copies (sharp already ships with Astro):

```js
// save as logo.mjs in the project root, run `node logo.mjs`, then delete it
import sharp from 'sharp';
const SRC = 'public/images/logo/logo.png';
const opts = { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } };
await sharp(SRC).resize(96, 96, opts).webp({ quality: 88 }).toFile('public/images/logo/logo-96.webp');
await sharp(SRC).resize(96, 96, opts).png({ compressionLevel: 9 }).toFile('public/images/logo/logo-96.png');
await sharp(SRC).resize(512, 512, opts).png({ compressionLevel: 9 }).toFile('public/favicon-512.png');
await sharp(SRC).resize(180, 180, opts).png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');
```

## 8. Design

Colours, fonts and spacing are CSS custom properties at the top of
`src/styles/global.css`. Change `--green-800` there and the header, footer and
buttons all follow.

Fonts: Oswald (headings), Playfair Display (serif headings), Dancing Script
(script headings), Poppins (body) — loaded from Google Fonts with `display=swap`.
