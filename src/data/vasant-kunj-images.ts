/**
 * IMAGES FOR /russian-spa-in-vasant-kunj/ ONLY.
 *
 * Its own manifest, like every other page in this project, so swapping a photo
 * here can never change the home page, the gallery or another outlet page.
 *
 * Unlike the rest of the site these are NOT hot-linked from the Unsplash CDN -
 * the files are downloaded and served from /public/images/locations/vasant-kunj/,
 * one folder per section of the page (hero, treatments, banya, experience,
 * facilities, cta). That keeps the page independent of a third-party CDN and
 * lets the filenames carry the topic of the picture.
 *
 * ALT TEXT RULE followed here: each string describes what is actually in that
 * photograph. These are licensed stock photographs, not pictures of this
 * business or its staff, so no alt text claims to show "our therapists" or
 * "our premises", and "Vasant Kunj" is only used where it reads naturally -
 * not on every single image.
 *
 * TODO (client): when real photography of the Aerocity outlet is available,
 * drop the files into the same folders, keep the same keys, and rewrite the
 * alt text to describe the actual room in each picture.
 */
import { localImage } from '../utils/image';
import type { SiteImage } from '../utils/image';

const BASE = '/images/locations/vasant-kunj';

export const vasantKunjImages = {
  /* ------------------------------------------------------------------ hero */
  hero: localImage(
    `${BASE}/hero/russian-spa-vasant-kunj.webp`,
    'Warmly lit wooden steam room with stone-filled heaters and a tiered bench',
    1920,
    800
  ),

  /* ------------------------------------------------- intro treatment strip */
  bodyMassage: localImage(
    `${BASE}/treatments/body-massage-vasant-kunj.webp`,
    'Therapist working with both hands across a guest’s upper back and shoulders',
    900,
    650
  ),
  thaiMassage: localImage(
    `${BASE}/treatments/thai-massage-south-delhi.webp`,
    'Assisted leg stretch on a low massage bed during a stretch-based session',
    900,
    650
  ),
  aromaOils: localImage(
    `${BASE}/treatments/aromatherapy-massage-oils.webp`,
    'Bottle of essential oil held over a shallow dish of dried flowers',
    900,
    650
  ),

  /* ----------------------------------------------------------------- banya */
  banya: localImage(
    `${BASE}/banya/russian-banya-vasant-kunj.webp`,
    'Traditional wooden banya cabin with bench seating, a stone heater and a water bucket',
    900,
    700
  ),

  /* ------------------------------------------------------------ experience */
  treatmentRoom: localImage(
    `${BASE}/experience/spa-treatment-room-near-vasant-kunj.webp`,
    'Private treatment room with a made-up massage table and soft lamp light',
    900,
    650
  ),

  /* ------------------------------------------------------------ facilities */
  lounge: localImage(
    `${BASE}/facilities/spa-lounge-near-vasant-kunj.webp`,
    'Spa waiting lounge with low seating, a floor lamp and a planted urn',
    900,
    650
  ),

  /* ------------------------------------------------------------------- cta */
  booking: localImage(
    `${BASE}/cta/spa-near-vasant-kunj-booking.webp`,
    'Tea service and rolled towels set out on a low table in the spa lounge',
    900,
    650
  ),
} as const satisfies Record<string, SiteImage>;
