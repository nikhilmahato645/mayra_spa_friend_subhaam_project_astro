import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { isDraft } from './src/data/drafts.mjs';

/**
 * Canonical origin of the site being built. Everything SEO related (canonical
 * tags, OG urls, JSON-LD @id values, robots.txt, sitemap) is derived from this
 * one value - Astro hands it back to the app as import.meta.env.SITE, which is
 * what src/data/site.ts reads.
 *
 * It is worked out at build time instead of being hard-coded, so a deploy
 * always describes the URL it is actually served from:
 *
 *   SITE_URL          - manual override, wins over everything (rarely needed)
 *   URL               - Netlify, production build: the site's primary URL.
 *                       That is the custom domain once one is attached, and
 *                       the <name>.netlify.app address until then.
 *   DEPLOY_PRIME_URL  - Netlify, branch deploy or deploy preview: that
 *                       deploy's own URL, so a preview never claims to be the
 *                       live site (which would hand Google a wrong canonical).
 *   fallback          - `npm run dev` / a local build, where none of the above
 *                       is set. The real domain, so local output matches live.
 */
const FALLBACK_SITE = 'https://spanearmemahipalpur.com';

const SITE = (
  process.env.SITE_URL ||
  (process.env.CONTEXT === 'production' ? process.env.URL : process.env.DEPLOY_PRIME_URL) ||
  FALLBACK_SITE
).replace(/\/+$/, '');

export default defineConfig({
  site: SITE,
  // Google Search Console friendly: one single URL shape for every page.
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  image: {
    // Remote placeholder photography (Unsplash) until real studio photos land
    // in /public/images/. Keeps <Image /> usable later without a config change.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      // Keep 404s and unfinished (noindex) pages out of the sitemap - a sitemap
      // that lists noindex URLs is reported as an error in Search Console.
      filter: (page) => !page.includes('/404') && !isDraft(page),
      serialize(item) {
        // Home gets top priority, money pages next, location pages after.
        if (item.url === `${SITE}/`) {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        if (/\/(services|pricing|contact)\/$/.test(item.url)) {
          return { ...item, priority: 0.9 };
        }
        if (/\/russian-spa-in-[a-z-]+\/$/.test(item.url)) {
          return { ...item, priority: 0.8 };
        }
        return { ...item, priority: 0.7 };
      },
    }),
  ],
});
