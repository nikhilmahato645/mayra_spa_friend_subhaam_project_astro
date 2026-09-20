/**
 * Location / outlet data.
 *
 * `locations` drives the ten dedicated landing pages under
 * /russian-spa-in-<area>/. Each page file is a thin wrapper that reads its
 * entry from here, so when the client sends the copy for one area you only
 * edit this file - never the layout.
 *
 * Copy marked `TODO (client copy)` is intentionally empty: nothing is invented.
 * Sections whose copy is empty are simply not rendered.
 */
import { site } from './site';

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationSection {
  heading: string;
  body: string;
}

export interface Location {
  /** URL slug, matches the folder name under src/pages/. */
  slug: string;
  /** Area name, e.g. "Mahipalpur". */
  area: string;
  /** H1 of the landing page. */
  heading: string;
  /** <title> of the landing page. */
  metaTitle: string;
  /** Meta description of the landing page (max ~155 chars). */
  metaDescription: string;
  /** Opening paragraph under the H1. Empty until the client supplies it. */
  intro: string;
  /** Long form body sections. Empty until the client supplies them. */
  sections: LocationSection[];
  /** Page specific FAQs, also used for FAQPage structured data. */
  faqs: LocationFaq[];
  /** Photo key for the hero of this location page. */
  image: string;
}

/** Helper that keeps the ten entries short and consistent. */
function location(slug: string, area: string, overrides: Partial<Location> = {}): Location {
  return {
    slug,
    area,
    heading: `Russian Spa in ${area}`,
    metaTitle: `Russian Spa in ${area} | Body Massage in ${area}`,
    metaDescription: `Russian Spa Mahipalpur offers professional massage and wellness services for guests near ${area}, Delhi NCR. Call ${site.phone} to book your session.`,
    intro: '', // TODO (client copy)
    sections: [], // TODO (client copy)
    faqs: [], // TODO (client copy)
    image: 'locationDefault',
    ...overrides,
  };
}

export const locations: Location[] = [
  location('russian-spa-in-mahipalpur', 'Mahipalpur'),
  location('russian-spa-in-aerocity', 'Aerocity'),
  location('russian-spa-in-vasant-kunj', 'Vasant Kunj'),
  location('russian-spa-in-dwarka', 'Dwarka'),
  location('russian-spa-in-gurgaon', 'Gurgaon'),
  location('russian-spa-in-saket', 'Saket'),
  location('russian-spa-in-hauz-khas', 'Hauz Khas'),
  location('russian-spa-in-green-park', 'Green Park'),
  location('russian-spa-in-karol-bagh', 'Karol Bagh'),
  location('russian-spa-in-noida', 'Noida'),
];

/** Look up one location by slug. Throws at build time if the slug is unknown. */
export function getLocation(slug: string): Location {
  const found = locations.find((entry) => entry.slug === slug);
  if (!found) {
    throw new Error(`Unknown location slug: ${slug}. Add it to src/data/locations.ts`);
  }
  return found;
}

/* -------------------------------------------------- home page: top outlets */

/**
 * "Top Outlets Of Massage Spa in Delhi" circles.
 * Areas without their own landing page point at /contact/ so the site never
 * links to a URL that does not exist (avoids Search Console soft 404s).
 */
export const topOutlets = [
  { name: 'Spa in Saket', hours: 'Open Mon - Friday', href: '/russian-spa-in-saket/' },
  { name: 'Spa in Aerocity', hours: 'Open Mon - Friday', href: '/russian-spa-in-aerocity/' },
  { name: 'Spa in Greater Kailash', hours: 'Open Mon - Friday', href: '/contact/' },
  { name: 'Spa in Karol Bagh', hours: 'Open Mon - Friday', href: '/russian-spa-in-karol-bagh/' },
  { name: 'Spa in Noida', hours: 'Open Mon - Friday', href: '/russian-spa-in-noida/' },
];

/* ----------------------------------------------- home page: prime locations */

export interface PrimeLocation {
  name: string;
  description: string;
  href: string;
  image: string;
}

/** "Prime Locations of Russian Spa Mahipalpur" cards (client supplied copy). */
export const primeLocations: PrimeLocation[] = [
  {
    name: 'Spa in Karol Bagh',
    description:
      'Looking for a relaxing spa in Karol Bagh? Enjoy a peaceful wellness experience with Thai, Aroma and Swedish massage therapies designed to help ease everyday stress and muscle tension. Our trained therapists provide personalized treatments in clean, comfortable and hygienic spa rooms, making it easy to relax and refresh after a busy day.',
    href: '/russian-spa-in-karol-bagh/',
    image: 'primeKarolBagh',
  },
  {
    name: 'Spa in Connaught Place',
    description:
      'Looking for a relaxing spa in Connaught Place? Step away from the busy streets of CP and enjoy a peaceful massage experience with Thai, Aroma and Couples Massage therapies. Our trained therapists provide personalized treatments in clean, comfortable and calming spa rooms, making it easy to unwind and refresh after a busy day in Delhi.',
    href: '/contact/',
    image: 'primeConnaughtPlace',
  },
  {
    name: 'Spa in Lajpat Nagar',
    description:
      'Looking for a relaxing spa in Lajpat Nagar? Take a peaceful break from the busy surroundings and enjoy Thai, Aroma and Full Body Massage therapies designed for relaxation. Our trained therapists provide personalized treatments in clean, comfortable and hygienic spa rooms, helping you unwind and feel refreshed after a busy day.',
    href: '/contact/',
    image: 'primeLajpatNagar',
  },
  {
    name: 'Spa in Malviya Nagar',
    description:
      'Looking for a relaxing spa in Malviya Nagar? Take a break from your busy routine and enjoy Thai, Aroma and Full Body Massage therapies designed for relaxation and comfort. Our trained therapists provide personalized treatments in clean, comfortable and hygienic spa rooms, helping you release everyday tension and feel refreshed.',
    href: '/contact/',
    image: 'primeMalviyaNagar',
  },
  {
    name: 'Spa in Aerocity',
    description:
      'Looking for a relaxing spa in Aerocity? Take a peaceful break near Delhi Airport and enjoy Thai, Aroma and Full Body Massage therapies in a comfortable environment. Our trained therapists provide personalized treatments in clean and hygienic spa rooms, making it convenient to relax, refresh and unwind before or after your journey.',
    href: '/russian-spa-in-aerocity/',
    image: 'primeAerocity',
  },
  {
    name: 'Spa in Defence Colony',
    description:
      'Looking for a relaxing spa in Defence Colony? Enjoy Thai, Ayurvedic-inspired and other relaxing massage therapies in a clean, comfortable environment. Our trained therapists provide personalized treatments focused on relaxation and well-being. Conveniently located for South Delhi guests, we offer flexible appointments for a refreshing break.',
    href: '/contact/',
    image: 'primeDefenceColony',
  },
];

/**
 * Service-area tag cloud shown above the footer. Plain text, not links,
 * because most of these areas have no page of their own yet.
 */
export const serviceAreas = [
  'Mahipalpur',
  'Aerocity',
  'New Friends Colony',
  'Vasant Kunj',
  'Paharganj',
  'Vasant Vihar',
  'Paschim Vihar',
  'Connaught Place',
  'Chanakyapuri',
  'Pitampura',
  'Laxmi Nagar',
  'Hauz Khas',
];

/** Footer "Outlets" column. */
export const footerOutlets = [
  { label: 'Spa in Mahipalpur', href: '/russian-spa-in-mahipalpur/' },
  { label: 'Spa in Aerocity', href: '/russian-spa-in-aerocity/' },
  { label: 'Spa in Karol Bagh', href: '/russian-spa-in-karol-bagh/' },
  { label: 'Spa in Saket', href: '/russian-spa-in-saket/' },
  { label: 'Spa in Noida', href: '/russian-spa-in-noida/' },
  { label: 'Spa in Dwarka', href: '/russian-spa-in-dwarka/' },
];
