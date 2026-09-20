/**
 * SEO helpers.
 *
 * Every page builds its <title>, canonical URL and social tags through this
 * module so the rules stay identical site-wide - that consistency is what
 * Google Search Console rewards (one canonical shape, no duplicate titles,
 * no missing descriptions).
 */
import { site } from '../data/site';

/** Recommended maximums before Google truncates in the SERP. */
export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;

/**
 * Build a page title. Pass `bare: true` when the title already contains the
 * brand name (the home page does) so the suffix is not duplicated.
 */
export function buildTitle(title: string, options: { bare?: boolean } = {}): string {
  if (options.bare) return title;
  return `${title} | ${site.name}`;
}

/** Turn a site-relative path into an absolute, canonical URL. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  // trailingSlash: 'always' - keep one single URL shape for every page.
  const withSlash = clean.endsWith('/') || clean.includes('.') ? clean : `${clean}/`;
  return `${site.url}${withSlash}`;
}

/** Canonical URL for the page currently being rendered. */
export function canonicalFrom(url: URL): string {
  return absoluteUrl(url.pathname);
}

/** Trim a description to the SERP limit without cutting a word in half. */
export function clampDescription(text: string, max: number = DESCRIPTION_MAX): string {
  const flat = text.replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

/** Warn during `astro build` when a title or description is out of range. */
export function auditSeo(pathname: string, title: string, description: string): void {
  if (!import.meta.env.DEV) return;
  if (title.length > TITLE_MAX) {
    console.warn(`[seo] ${pathname}: title is ${title.length} chars (max ${TITLE_MAX})`);
  }
  if (!description) {
    console.warn(`[seo] ${pathname}: missing meta description`);
  } else if (description.length > DESCRIPTION_MAX) {
    console.warn(
      `[seo] ${pathname}: description is ${description.length} chars (max ${DESCRIPTION_MAX})`
    );
  }
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

/**
 * Build the breadcrumb trail for a page. Home is always the first crumb, which
 * is what the BreadcrumbList rich result expects.
 */
export function breadcrumbTrail(items: BreadcrumbItem[]): BreadcrumbItem[] {
  return [{ name: 'Home', href: '/' }, ...items];
}
