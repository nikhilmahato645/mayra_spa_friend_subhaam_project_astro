/**
 * IMAGES FOR THE INNER PAGES (about, services, pricing, gallery, contact and
 * the location landing pages).
 *
 * The home page has its own manifest (src/data/home-images.ts) so the two can
 * never affect each other. Same rule as there: these are TEMPORARY stock
 * photos - replace `src` with your own files under /public/images/ when the
 * real photography is ready, and keep width/height accurate.
 */
import { image } from '../utils/image';
import { pick } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

/* ------------------------------------------------------------ page heroes */

export const pageHeroes = {
  about: image('1540555700478-4be289fbecef', '', 1920, 800),
  services: image('1515377905703-c4788e51af15', '', 1920, 800),
  pricing: image('1532926381893-7542290edf1d', '', 1920, 800),
  gallery: image('1620733723572-11c53f73a416', '', 1920, 800),
  contact: image('1583416750470-965b2707b355', '', 1920, 800),
  /** Default hero for the ten /russian-spa-in-<area>/ pages. */
  location: image('1600334089648-b0d9d3028eb2', '', 1920, 800),
} as const;

/* ------------------------------------------------------------ about page */

/**
 * About page photography.
 *
 * NOTE: there are deliberately no therapist portraits here. The only staff
 * photos in the project are placeholder stock images, and presenting a stock
 * photo as a named member of staff would be misleading. Replace these with
 * real photographs of the premises when they are available - the alt text
 * should then be updated to describe the actual room in the picture.
 */
export const aboutImages = {
  hero: image(
    '1600334089648-b0d9d3028eb2',
    'Therapist giving a back massage in a treatment room at Russian Spa Mahipalpur',
    900,
    1000
  ),
  reception: image(
    '1573461160327-b450ce3d8e7f',
    'Softly lit waiting area with seating at the spa',
    900,
    650
  ),
  session: image(
    '1544161515-4ab6ce6db874',
    'Massage in progress with oil, towels and a covered treatment bed',
    900,
    650
  ),
  room: image(
    '1620733723572-11c53f73a416',
    'Private treatment room prepared with fresh linen before a session',
    900,
    650
  ),
  facilities: image(
    '1631049307264-da0ec9d70304',
    'Steam and jacuzzi area available to guests alongside their treatment',
    900,
    650
  ),
  detail: image(
    '1532926381893-7542290edf1d',
    'Massage oils and candles set out beside the treatment bed',
    900,
    650
  ),
} as const;

/* -------------------------------------------------------- gallery page set */

/**
 * Gallery photos. Add or remove entries freely - the grid adapts.
 * TODO (client): swap these for real photos of your outlets and rooms, and
 * write an accurate alt text for each one (alt text is what makes the photos
 * appear in Google Images).
 */
export const galleryImages: SiteImage[] = [
  image('1620733723572-11c53f73a416', 'Spa treatment room at Russian Spa Mahipalpur', 900, 700),
  image('1583416750470-965b2707b355', 'Massage room prepared for a session', 900, 700),
  image('1571902943202-507ec2618e8f', 'Hotel spa suite near Delhi Aerocity', 900, 700),
  image('1512290923902-8a9f81dc236c', 'Candles and flowers in the spa reception', 900, 700),
  image('1600585154340-be6161a56a0c', 'Private massage room interior', 900, 700),
  image('1532926381893-7542290edf1d', 'Aroma oils used during a massage session', 900, 700),
  image('1608571423902-eed4a5ad8108', 'Relaxation area at the spa', 900, 700),
  image('1631049307264-da0ec9d70304', 'Steam and jacuzzi area', 900, 700),
  image('1526506118085-60ce8714f8c5', 'Spa treatment in progress', 900, 700),
  image('1573461160327-b450ce3d8e7f', 'Waiting lounge at the spa', 900, 700),
  image('1615461066159-fea0960485d5', 'Couples massage room', 900, 700),
  image('1470259078422-826894b933aa', 'Warm lighting in the massage room', 900, 700),
];

/* ---------------------------------------------------- service page photos */

/** Keyed by the `image` field of each entry in src/data/services.ts. */
export const servicePhotos = {
  thaiMassage: image('1515377905703-c4788e51af15', 'Thai massage in Delhi', 700, 500),
  b2bMassage: image('1600334129128-685c5582fd35', 'B2B massage in Delhi', 700, 500),
  sandwichMassage: image('1526506118085-60ce8714f8c5', 'Four hand sandwich massage in Delhi', 700, 500),
  fullBodyMassage: image('1552693673-1bf958298935', 'Full body massage in Delhi', 700, 500),
  homeSpa: image('1560750588-73207b1ef5b8', 'Home spa service in Delhi NCR', 700, 500),
  couplesMassage: image('1615461066159-fea0960485d5', 'Couples massage in Delhi', 700, 500),
} as const;

/** Safe lookup for the service photos above. */
export function servicePhoto(key: string): SiteImage {
  return pick(
    servicePhotos as unknown as Record<string, SiteImage>,
    key,
    'src/data/page-images.ts'
  );
}

/* ---------------------------------------------------- pricing page photos */

/**
 * Pricing page photography (/pricing/).
 *
 * Four supporting photos only - the price cards themselves are deliberately
 * image-free so the menu stays fast and scannable on a phone. Each alt text
 * describes that specific picture; none of them is reused anywhere else on
 * the site.
 *
 * TEMPORARY stock photos, like the rest of this file. When the real
 * photography arrives, save the files as descriptive names under
 * /public/images/pricing/ (e.g. massage-prices-mahipalpur.webp) and swap
 * these calls for localImage('/images/pricing/<file>.webp', ...).
 */
export const pricingImages = {
  firstVisit: image(
    '1600334089648-b0d9d3028eb2',
    'Therapist beginning a full body massage during a first visit session in Mahipalpur',
    900,
    650
  ),
  packages: image(
    '1571902943202-507ec2618e8f',
    'Spa suite in a 5 star hotel near Delhi Airport used for package bookings',
    900,
    650
  ),
  included: image(
    '1631049307264-da0ec9d70304',
    'Steam and jacuzzi area included with the 5 star hotel outlet package',
    900,
    650
  ),
  choosing: image(
    '1544161515-4ab6ce6db874',
    'Massage oils and fresh towels laid out before a treatment at Russian Spa Mahipalpur',
    900,
    650
  ),
} as const;

/* ---------------------------------------------------- contact page photos */

/**
 * Contact page photography (/contact/).
 *
 * Three photos, and every one of them is used ONLY here - none of these ids
 * appears in the home, about, gallery, services, pricing or location
 * manifests, so the contact page does not look like a page you have already
 * scrolled past.
 *
 * `pageHeroes.contact` is intentionally not used any more: that photo also
 * shows up in the gallery grid.
 *
 * TEMPORARY stock photos. When the real photography arrives, save the files
 * under /public/images/contact/ with descriptive names (for example
 * russian-spa-mahipalpur-contact.webp) and swap these for localImage() calls.
 */
export const contactImages = {
  hero: image(
    '1598901986949-f593ff2a31a6',
    'Head massage by candlelight during an evening spa session',
    1920,
    800
  ),
  form: image(
    '1745327883508-b6cd32e5dde5',
    "Therapist's hand working across a guest's back during a massage",
    900,
    1000
  ),
  lounge: image(
    '1773924093206-9a433a14bb44',
    'Spa relaxation lounge with loungers and daylight through tall windows',
    900,
    620
  ),
} as const;
