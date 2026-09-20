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
  // '/gallery/' was published once its photos and copy were in place - it now
  // carries index,follow and appears in the sitemap.
  // '/russian-spa-in-mahipalpur/' was published once its copy, photos and FAQs
  // were written - it now carries index,follow and appears in the sitemap.
  // '/russian-spa-in-aerocity/' was published once its page was written - it
  // now carries index,follow and appears in the sitemap.
  // '/russian-spa-in-vasant-kunj/' was published once its copy, photos and FAQs
  // were written - it now carries index,follow and appears in the sitemap.
  '/russian-spa-in-dwarka/',
  // '/russian-spa-in-gurgaon/' was published once its page was written - it now
  // carries index,follow and appears in the sitemap.
  '/russian-spa-in-saket/',
  '/russian-spa-in-hauz-khas/',
  '/russian-spa-in-green-park/',
  // '/russian-spa-in-karol-bagh/' was published once its page was written - it
  // now carries index,follow and appears in the sitemap.
  '/russian-spa-in-noida/',
];

/** True when the given path (or full URL) is still a draft. */
export function isDraft(pathOrUrl) {
  return draftPages.some((page) => pathOrUrl.endsWith(page));
}
