/**
 * robots.txt, generated instead of kept as a static file in public/.
 *
 * The static copy hard-coded https://spanearmemahipalpur.com in its Sitemap:
 * line, so every deploy that was not on that domain pointed crawlers at a
 * sitemap that did not exist there. Building it means the Sitemap: line always
 * names the origin this deploy is actually served from - the same value the
 * canonical tags and the sitemap itself use.
 */
import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () =>
  new Response(
    `# ${site.url}/robots.txt
User-agent: *
Allow: /

# Nothing on this site should be hidden from search engines.
# Add Disallow rules here only for pages you never want indexed.
# Unfinished pages are handled separately: anything listed in
# src/data/drafts.mjs renders noindex and stays out of the sitemap.

Sitemap: ${site.url}/sitemap-index.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
