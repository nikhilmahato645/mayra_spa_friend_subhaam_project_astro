/**
 * EVERY location page that exists on this site, in menu order.
 *
 * ONE list. The "Outlet" dropdown in the header, the same dropdown in the
 * mobile curtain menu and the "Outlets" column in the footer are all built
 * from it, so a new area is added in exactly one place: write its page under
 * src/pages/russian-spa-in-<slug>/, then add a line here.
 *
 * Pages still listed in src/data/drafts.mjs are left out of every menu: they
 * are empty and noindex, so linking them sitewide would send visitors to a
 * blank page. Publishing a page (deleting its drafts.mjs line) brings its menu
 * entry back automatically.
 *
 * The only import is drafts.mjs, which imports nothing itself. site.ts and
 * locations.ts both read this file, and either of those importing the other
 * would be a circular import.
 */

import { isDraft } from './drafts.mjs';

export interface Outlet {
  /** Area name as it should read in a menu, e.g. "Vasant Kunj". */
  area: string;
  /** URL slug - must match the folder name under src/pages/. */
  slug: string;
}

/**
 * Order is deliberate: the flagship outlet first, then the rest of Delhi NCR
 * roughly by how much traffic each area brings in.
 */
export const outlets: Outlet[] = [
  { area: 'Mahipalpur', slug: 'russian-spa-in-mahipalpur' },
  { area: 'Aerocity', slug: 'russian-spa-in-aerocity' },
  { area: 'Vasant Kunj', slug: 'russian-spa-in-vasant-kunj' },
  { area: 'Dwarka', slug: 'russian-spa-in-dwarka' },
  { area: 'Gurgaon', slug: 'russian-spa-in-gurgaon' },
  { area: 'Saket', slug: 'russian-spa-in-saket' },
  { area: 'Hauz Khas', slug: 'russian-spa-in-hauz-khas' },
  { area: 'Green Park', slug: 'russian-spa-in-green-park' },
  { area: 'Karol Bagh', slug: 'russian-spa-in-karol-bagh' },
  { area: 'Noida', slug: 'russian-spa-in-noida' },
  { area: 'Connaught Place', slug: 'russian-spa-in-connaught-place' },
  { area: 'Lajpat Nagar', slug: 'russian-spa-in-lajpat-nagar' },
  { area: 'Malviya Nagar', slug: 'russian-spa-in-malviya-nagar' },
  { area: 'Defence Colony', slug: 'russian-spa-in-defence-colony' },
].filter((outlet) => !isDraft(`/${outlet.slug}/`));

/** Path of one outlet page, with the trailing slash the whole site uses. */
export const outletHref = (outlet: Outlet): string => `/${outlet.slug}/`;

/**
 * Header / mobile-menu dropdown entries - "Russian Spa in <Area>", matching
 * the H1 and the <title> of each page.
 */
export const outletNavItems = outlets.map((outlet) => ({
  label: `Russian Spa in ${outlet.area}`,
  href: outletHref(outlet),
}));

/**
 * Footer entries - the shorter "Spa in <Area>" wording, because the footer
 * column is narrow and the heading above it already says "Outlets".
 */
export const outletFooterLinks = outlets.map((outlet) => ({
  label: `Spa in ${outlet.area}`,
  href: outletHref(outlet),
}));
