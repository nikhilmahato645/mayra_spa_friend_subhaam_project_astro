/**
 * SINGLE SOURCE OF TRUTH for the whole website.
 *
 * Phone number, e-mail, address, social profiles and navigation all live here.
 * Change a value in this file once and every page, every JSON-LD block and
 * every footer updates automatically. Never hard-code a phone number,
 * an e-mail or a social URL inside a component or a page.
 */

import { outletNavItems, outlets } from './outlets';

/**
 * Origin this build is being served from, with no trailing slash.
 *
 * astro.config.mjs works it out (the custom domain in production, the Netlify
 * deploy URL before a domain is pointed at the site, the real domain locally)
 * and Astro passes it through as import.meta.env.SITE. Reading it here rather
 * than repeating a URL means canonical tags, JSON-LD @id values, OG urls,
 * robots.txt and the sitemap can never disagree with each other.
 *
 * The fallback only matters if `site` is ever removed from astro.config.mjs.
 */
const CANONICAL_ORIGIN: string = (
  import.meta.env.SITE || 'https://spanearmemahipalpur.com'
).replace(/\/+$/, '');

export interface SocialProfile {
  /** Machine name, also used to pick the inline SVG icon. */
  key: 'facebook' | 'x' | 'linkedin' | 'youtube' | 'pinterest' | 'instagram';
  /** Accessible label read by screen readers. */
  label: string;
  /** Full profile URL. */
  url: string;
}

export const site = {
  /** Brand name used in headings and JSON-LD. */
  name: 'Russian Spa Mahipalpur',
  /** Legal / footer copyright name. */
  legalName: 'Spa Near Me Mahipalpur',
  /**
   * Logo: the two-line wordmark plus the picture mark beside it.
   *
   * The source artwork is public/images/logo/logo.png (1240x1268, transparent).
   * The site serves the small generated copies instead - a 1.1 MB file for a
   * 40px logo would be the heaviest asset on the page. Regenerate the small
   * copies with sharp if you ever replace the artwork.
   */
  logo: {
    line1: 'RUSSIAN SPA',
    line2: 'MAHIPALPUR',
    /** 96px WebP - what modern browsers download (~5 KB). */
    markWebp: '/images/logo/logo-96.webp',
    /** 96px PNG fallback for older browsers (~5 KB). */
    markPng: '/images/logo/logo-96.png',
    /** Intrinsic size of the generated files, for width/height attributes. */
    markSize: 96,
    /** Full size original, kept for print or future re-exports. */
    markSource: '/images/logo/logo.png',
    alt: 'Russian Spa Mahipalpur logo',
  },
  /**
   * Canonical origin, no trailing slash. Comes from `site` in
   * astro.config.mjs - never hard-code a URL here, see CANONICAL_ORIGIN above.
   */
  url: CANONICAL_ORIGIN,
  /** Used as the default meta description fallback and in the footer. */
  tagline:
    'Your destination for a comfortable massage and wellness experience in Mahipalpur, Delhi.',
  locale: 'en_IN',
  language: 'en-IN',

  /* ---------------------------------------------------------------- contact */
  phone: '+91 9599547192',
  /** E.164 form used for tel: links and JSON-LD. */
  phoneE164: '+919599547192',
  /** Digits only, used to build wa.me links. */
  whatsappNumber: '919599547192',
  email: 'spanearmemahipalpur@gmail.com',

  address: {
    street: 'Block - Asset No. 6, 6, Northern Access Rd',
    locality: 'Aerocity, New Delhi',
    region: 'Delhi',
    postalCode: '110037',
    country: 'IN',
    countryName: 'India',
  },
  /** Full one-line address for the footer / contact page. */
  addressLine:
    'Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi, Delhi 110037',

  /**
   * The Google Business Profile listing, addressed by its CID - the stable id
   * Google gives the business itself. It is used instead of hand-written
   * latitude/longitude (none is documented anywhere in this project) so the
   * "Get Directions" link always lands on the real listing, from which Google
   * works out the route from wherever the visitor is.
   */
  mapsUrl: 'https://maps.google.com/?cid=15272339836783254427',

  /** Opening hours in schema.org format. */
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '23:00',
    },
  ],
  openingHoursLabel: 'Open all days, 9:00 AM - 11:00 PM',

  /**
   * The running offer, shown on the sticky tab pinned to the right edge of
   * every page (src/components/OfferTab.astro).
   *
   * ONE PLACE. Change the wording here and the tab, its accessible label and
   * the WhatsApp message it opens all change together - there is no second
   * copy of this text anywhere.
   *
   * Set `active: false` to take the tab off the whole site without deleting
   * anything; put it back to true when the next offer runs.
   *
   * Keep `label` short. It is set vertically down a ~44px wide tab, so a long
   * sentence runs off the top and bottom of the screen.
   */
  offer: {
    active: true,
    label: '50% OFF ON 2 BOOKINGS',
    /** Read out to screen readers, and used as the link's title. */
    description: 'Get 50% off when you book two sessions together',
    /** Pre-filled into WhatsApp when the tab is tapped. */
    message: 'Hi, I would like to claim the 50% off on two bookings offer.',
  },
  priceRange: '₹1499 - ₹15999',
  currency: 'INR',

  /**
   * Social profiles - ONE PLACE for every icon in the header and the footer and
   * for the `sameAs` list in the LocalBusiness JSON-LD (which is how Google
   * ties this website to these profiles).
   *
   * Every URL here is the CLEAN canonical profile URL. Share links copied from
   * a phone carry tracking junk (`utm_*`, `mibextid`, `igsh`, `rdid`,
   * `share_url`, `invite_code`, `feature=shared`) which has been stripped -
   * those parameters identify whoever copied the link, and Google treats a
   * parameterised URL as a different URL, which weakens the sameAs signal.
   *
   * Removing an entry from this array removes that icon from the header and
   * the footer and drops the URL from the structured data - no other edits.
   */
  social: [
    {
      key: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/people/Spa-In-Aerocity/61572810916439/',
    },
    { key: 'x', label: 'X (Twitter)', url: 'https://x.com/spainaerocity' },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/spa-in-aerocity-3a5519358',
    },
    { key: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@spainaerocity' },
    { key: 'pinterest', label: 'Pinterest', url: 'https://www.pinterest.com/spainaerocitynewdelhi/' },
    { key: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/spa.in.aerocity' },
  ] satisfies SocialProfile[],

  /**
   * Default social share image (WhatsApp / Facebook / X preview).
   * TODO (client): shoot a 1200x630 image, save it as /public/og-image.jpg and
   * change this value to '/og-image.jpg'. Until then it points at the same
   * stock photo used in the hero so the preview is never broken.
   */
  ogImage:
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&h=630&q=80',
} as const;

/* ------------------------------------------------------------------ helpers */

/** tel: href built from the single phone number above. */
export const telHref = `tel:${site.phoneE164}`;

/** mailto: href built from the single e-mail above. */
export const mailHref = `mailto:${site.email}`;

/**
 * Build a WhatsApp click-to-chat link. Pass a message to pre-fill the chat.
 * Every "Chat on WhatsApp" button on the site goes through this helper.
 */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Social profile URLs that have actually been filled in (used for sameAs). */
export const socialSameAs: string[] = site.social
  .map((profile) => profile.url)
  .filter((url) => url.startsWith('http'));

/* --------------------------------------------------------------- navigation */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/**
 * Main header navigation. The "Outlet" item renders as a dropdown, and its
 * children are EVERY location page the site has - the list lives in
 * src/data/outlets.ts, never here, so the header, the mobile menu and the
 * footer can never drift apart.
 */
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Our Service', href: '/services/' },
  {
    label: 'Outlet',
    href: `/${outlets[0].slug}/`,
    children: outletNavItems,
  },
  { label: 'Pricings', href: '/pricing/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact Us', href: '/contact/' },
];

/** Footer "Quick Links" column. */
export const footerQuickLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Prices', href: '/pricing/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
