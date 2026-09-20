/**
 * SINGLE SOURCE OF TRUTH for the whole website.
 *
 * Phone number, e-mail, address, social profiles and navigation all live here.
 * Change a value in this file once and every page, every JSON-LD block and
 * every footer updates automatically. Never hard-code a phone number,
 * an e-mail or a social URL inside a component or a page.
 */

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
  /** Canonical origin. Must match `site` in astro.config.mjs (no trailing slash). */
  url: 'https://spanearmemahipalpur.com',
  /** Used as the default meta description fallback and in the footer. */
  tagline:
    'Your destination for a comfortable massage and wellness experience in Mahipalpur, Delhi.',
  locale: 'en_IN',
  language: 'en-IN',

  /* ---------------------------------------------------------------- contact */
  phone: '+91 9599547138',
  /** E.164 form used for tel: links and JSON-LD. */
  phoneE164: '+919599547138',
  /** Digits only, used to build wa.me links. */
  whatsappNumber: '919599547138',
  email: 'info@spanearmemahipalpur.com',

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

/** Main header navigation. The "Outlet" item renders as a dropdown. */
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Our Service', href: '/services/' },
  {
    label: 'Outlet',
    href: '/russian-spa-in-mahipalpur/',
    children: [
      { label: 'Russian Spa in Mahipalpur', href: '/russian-spa-in-mahipalpur/' },
      { label: 'Russian Spa in Aerocity', href: '/russian-spa-in-aerocity/' },
      { label: 'Russian Spa in Vasant Kunj', href: '/russian-spa-in-vasant-kunj/' },
      { label: 'Russian Spa in Dwarka', href: '/russian-spa-in-dwarka/' },
      { label: 'Russian Spa in Gurgaon', href: '/russian-spa-in-gurgaon/' },
      { label: 'Russian Spa in Saket', href: '/russian-spa-in-saket/' },
      { label: 'Russian Spa in Hauz Khas', href: '/russian-spa-in-hauz-khas/' },
      { label: 'Russian Spa in Green Park', href: '/russian-spa-in-green-park/' },
      { label: 'Russian Spa in Karol Bagh', href: '/russian-spa-in-karol-bagh/' },
      { label: 'Russian Spa in Noida', href: '/russian-spa-in-noida/' },
    ],
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
