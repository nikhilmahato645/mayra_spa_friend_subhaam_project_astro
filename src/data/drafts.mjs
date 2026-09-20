/**
 * PAGES THAT ARE STILL WAITING FOR COPY.
 *
 * A page listed here is:
 *   1. rendered with <meta name="robots" content="noindex, nofollow">, and
 *   2. left out of sitemap-index.xml.
 *
 * That keeps thin, unfinished pages out of Google while you build them - a
 * half empty page that gets indexed hurts the whole domain ("thin content" in
 * Search Console). The page itself still works and is fully browsable.
 *
 * HOW TO PUBLISH A PAGE: add its content, then delete its line from this list
 * and run `npm run build`. Nothing else to change.
 *
 * This file is plain .mjs on purpose so both astro.config.mjs and .astro pages
 * can import it - one single list, no duplication.
 */

export const draftPages = [
  // '/about/' was published once its copy was written - it now carries
  // index,follow and appears in the sitemap.
  '/gallery/',
  '/russian-spa-in-mahipalpur/',
  '/russian-spa-in-aerocity/',
  '/russian-spa-in-vasant-kunj/',
  '/russian-spa-in-dwarka/',
  '/russian-spa-in-gurgaon/',
  '/russian-spa-in-saket/',
  '/russian-spa-in-hauz-khas/',
  '/russian-spa-in-green-park/',
  '/russian-spa-in-karol-bagh/',
  '/russian-spa-in-noida/',
];

/** True when the given path (or full URL) is still a draft. */
export function isDraft(pathOrUrl) {
  return draftPages.some((page) => pathOrUrl.endsWith(page));
}
