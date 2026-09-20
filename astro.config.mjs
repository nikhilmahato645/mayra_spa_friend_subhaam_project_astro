import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { isDraft } from './src/data/drafts.mjs';

/**
 * Canonical origin of the live site. Everything SEO related (canonical tags,
 * OG urls, JSON-LD @id values, sitemap) is derived from this one value.
 */
const SITE = 'https://spanearmemahipalpur.com';

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
