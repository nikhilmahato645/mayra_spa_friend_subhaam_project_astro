/**
 * AEROCITY LOCATION PAGE - all copy and artwork for /russian-spa-in-aerocity/.
 *
 * This page does NOT go through LocationLayout / src/data/locations.ts like the
 * other nine outlet pages. Aerocity is the address the business actually trades
 * from (see `site.address`), so it gets a page written for it rather than the
 * shared skeleton, and its copy lives here rather than in the locations table.
 *
 * WHAT IS AND IS NOT ALLOWED IN THIS FILE
 *
 * Every factual claim below is already established elsewhere in the project:
 *   - the address, phone and opening hours come from src/data/site.ts;
 *   - every price and duration is copied from src/data/treatments.ts;
 *   - the facilities list is src/data/services.ts `facilities`;
 *   - the banya description follows the verified write-up in treatments.ts
 *     (steam, birch venik, cooling breaks, herbal tea).
 *
 * Deliberately absent, because nothing in the project supports them:
 *   - distances or travel times to the airport, any terminal or the metro;
 *   - therapist nationalities;
 *   - customer counts, ratings, awards or years in business;
 *   - any health, medical or "detox" claim.
 *
 * The wording is written fresh for this page. It does not reuse the home page
 * paragraphs, the treatment write-ups or the services copy - a location page
 * that repeats the home page is a duplicate, not a landing page.
 *
 * Photos live in public/images/locations/aerocity/, one folder per section,
 * the same way the gallery is organised. Run `npm run images` after adding or
 * replacing any of them.
 *
 * TODO (client): the photographs are stock stand-ins. They are described in
 * general terms on purpose - no alt text here claims to show a specific room
 * or member of staff. Replace the files in place and keep the names.
 */

import { localImage } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

const base = '/images/locations/aerocity';

/* ------------------------------------------------------------------ meta */

export const aerocityMeta = {
  /** 50 characters. */
  title: 'Russian Spa in Aerocity | Body Massage Near Airport',
  /** 152 characters. */
  description:
    'Russian spa and body massage in Aerocity, New Delhi, close to IGI Airport. Banya, Swedish, deep tissue and Thai massage. Open daily. Book on WhatsApp.',
};

/* ----------------------------------------------------------------- images */

export const aerocityImages = {
  hero: localImage(
    `${base}/hero/russian-spa-aerocity.jpg`,
    'Treatment room prepared for a massage at a spa in Aerocity',
    1600,
    900
  ),
  banya: localImage(
    `${base}/banya/russian-banya-aerocity.jpg`,
    'Wooden banya room with bench seating and a central heater',
    1000,
    700
  ),
  steam: localImage(
    `${base}/facilities/steam-room-near-delhi-airport.jpg`,
    'Guests relaxing in a heated sauna cabin',
    800,
    600
  ),
  lounge: localImage(
    `${base}/facilities/spa-lounge-aerocity.jpg`,
    'Quiet seating corner with plants in a wellness space',
    800,
    600
  ),
  reception: localImage(
    `${base}/location/spa-reception-near-delhi-airport.jpg`,
    'Reception desk at a wellness centre',
    900,
    620
  ),
  exterior: localImage(
    `${base}/location/spa-near-igi-airport.jpg`,
    'Wood and greenery in a hotel style reception area',
    900,
    620
  ),
} as const;

/* --------------------------------------------------------- treatment cards */

export interface AerocityTreatment {
  name: string;
  /** 40-70 words. Written for this page; not the /services/ copy. */
  body: string;
  /** Present only where the treatment is on the verified price list. */
  price?: string;
  duration?: string;
  image?: SiteImage;
}

export const aerocityTreatments: AerocityTreatment[] = [
  {
    name: 'Full Body Massage',
    body: 'A head-to-toe session across the back, shoulders, arms and legs, at a pressure you agree with the therapist first. Most first-time guests pick it because it is a general reset rather than work on one problem area, and it is what the first-visit price covers.',
    image: localImage(
      `${base}/treatments/body-massage-aerocity.jpg`,
      'Guest resting on a massage table during a full body session',
      700,
      500
    ),
  },
  {
    name: 'Swedish Massage',
    body: 'Long, flowing strokes at a light to medium pressure. Nothing about it is demanding, which makes it a sensible choice after a long day or a flight. Ask for firmer work partway through and the therapist adjusts.',
    price: '₹2,800',
    duration: '60 minutes',
  },
  {
    name: 'Deep Tissue Massage',
    body: 'Slower and firmer, aimed at the tight bands across the upper back, neck and shoulders that a lighter massage only skims. Useful if you sit at a desk or carry bags. Say so early if the pressure is more than you want.',
    price: '₹3,500',
    duration: '90 minutes',
    image: localImage(
      `${base}/treatments/massage-room-aerocity.jpg`,
      'Massage bed made up in a treatment room',
      700,
      500
    ),
  },
  {
    name: 'Thai Massage',
    body: 'Done clothed and without oil, on a mat rather than a table. Assisted stretches and pressure replace gliding strokes, so it feels closer to being moved through positions than massaged. Good for stiff hips and hamstrings.',
    price: '₹3,200',
    duration: '75 minutes',
  },
  {
    name: 'Aromatherapy Massage',
    body: 'A gentler, slower session built around a scented oil blend you pick before the therapist begins. Pressure stays light throughout; the emphasis is the pace and the aroma rather than working deep into muscle.',
    price: '₹3,000',
    duration: '75 minutes',
    image: localImage(
      `${base}/treatments/massage-oils-aerocity.jpg`,
      'Shelf of massage oils and treatment supplies',
      700,
      500
    ),
  },
  {
    name: 'Hot Stone Therapy',
    body: 'Warmed stones rest along the back and are worked over the muscles alongside the therapist’s hands. The heat lets firm pressure build more gradually than it could cold, which is why the session runs longer.',
    price: '₹4,000',
    duration: '90 minutes',
  },
];

/* ----------------------------------------------------------- price summary */

/** Straight from src/data/treatments.ts. Do not edit these figures here. */
export const aerocityPrices = [
  { name: 'Traditional Russian Banya', price: '₹2,500', duration: '60 minutes' },
  { name: 'Swedish Massage', price: '₹2,800', duration: '60 minutes' },
  { name: 'Aromatherapy Massage', price: '₹3,000', duration: '75 minutes' },
  { name: 'Thai Massage', price: '₹3,200', duration: '75 minutes' },
  { name: 'Deep Tissue Massage', price: '₹3,500', duration: '90 minutes' },
  { name: 'Hot Stone Therapy', price: '₹4,000', duration: '90 minutes' },
];

/* ------------------------------------------------------------- facilities */

export const aerocityFacilities = [
  {
    name: 'Private treatment rooms',
    body: 'Every treatment is in a private room, reset between guests.',
  },
  { name: 'Shower', body: 'On site, to rinse off before or after a session.' },
  { name: 'Steam bath', body: 'A heated steam room, on its own or before a massage.' },
  { name: 'Sauna', body: 'Dry heat, and the first stage of the traditional banya session.' },
  { name: 'Hammam', body: 'A warm bathing area in the traditional style.' },
  { name: 'Jacuzzi bath', body: 'A warm soak, included with some packages rather than all treatments.' },
];

/* ------------------------------------------------------------- trust points */

export const aerocityReasons = [
  {
    title: 'An Aerocity address',
    body: 'We trade from Northern Access Road in Aerocity - the location itself, not a booking desk for somewhere else.',
  },
  {
    title: 'A full treatment menu',
    body: 'Banya, Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology, shiatsu, sports and a couple’s package.',
  },
  {
    title: 'Prices published up front',
    body: 'Every price and session length here is what you are quoted when you book.',
  },
  {
    title: 'Private rooms',
    body: 'Treatments are in a private room, with shower, steam, sauna and hammam on site.',
  },
  {
    title: 'Booking by WhatsApp or phone',
    body: 'Message or call and the team replies with the slots actually free. No account, no deposit.',
  },
  {
    title: 'Open every day',
    body: '9:00 AM to 11:00 PM, seven days a week, holidays included.',
  },
];

/* -------------------------------------------------------------- the visit */

export const aerocitySteps = [
  {
    step: '01',
    title: 'Pick a treatment',
    body: 'Pick from the menu above, or describe the problem and let the team suggest something.',
  },
  {
    step: '02',
    title: 'Message or call',
    body: 'WhatsApp or ring the number below. Mention Aerocity so you are booked here.',
  },
  {
    step: '03',
    title: 'Check availability',
    body: 'The team replies with the times free. Nothing is held until they confirm.',
  },
  {
    step: '04',
    title: 'Agree a time',
    body: 'Settle on a slot. Tell us then if you are travelling to a deadline.',
  },
  {
    step: '05',
    title: 'Come in',
    body: 'Come to the Northern Access Road address. The therapist talks it through before starting.',
  },
];

/* --------------------------------------------------------------------- FAQ */

/**
 * Written for Aerocity specifically. These are NOT the home page questions -
 * that list answers general questions about the business, this one answers
 * what somebody searching for a spa in this area would actually ask.
 *
 * Whatever is here is also what the FAQPage structured data says, so the two
 * can never drift apart. Do not add a question here you are not willing to
 * have shown in a search result.
 */
export const aerocityFaqs = [
  {
    question: 'Is there a Russian spa in Aerocity?',
    answer:
      'Yes. Russian Spa Mahipalpur trades from Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037. The traditional banya is on the menu alongside the massage treatments, and we open daily, 9:00 AM to 11:00 PM.',
  },
  {
    question: 'Is the spa near Delhi Airport?',
    answer:
      'The address is in Aerocity, the hospitality district beside Indira Gandhi International Airport. We do not publish a travel time - it depends on your terminal, route and the traffic. Check the map on this page first.',
  },
  {
    question: 'What massage treatments can I book in Aerocity?',
    answer:
      'Full body, Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology, shiatsu and sports massage, the traditional banya, and a couple’s package. Full descriptions are on our services page.',
  },
  {
    question: 'How much does a massage cost here?',
    answer:
      'Individual treatments run from ₹2,200 for 45 minutes of reflexology to ₹4,000 for 90 minutes of hot stone therapy. Packages are priced separately. The full list is on our pricing page.',
  },
  {
    question: 'Can I book a massage before or after a flight?',
    answer:
      'Yes, but message or call first to check what is free - slots are not held automatically. Leave room for the journey back to the airport.',
  },
  {
    question: 'Can two of us book together?',
    answer:
      'Yes. The Couple’s Spa Package is 120 minutes at ₹7,500 for two guests in one private room, each choosing their own style. Confirm it when you book, as it needs a suitable room free.',
  },
  {
    question: 'What facilities are on site?',
    answer:
      'Private treatment rooms, a shower, steam bath, sauna, hammam and jacuzzi bath. Not all of them are part of every treatment - the jacuzzi and steam come with certain packages. Ask what your booking covers.',
  },
  {
    question: 'How do I make an appointment?',
    answer:
      'Message us on WhatsApp or call +91 9599547138 between 9:00 AM and 11:00 PM. Say which treatment and roughly when, and the team replies with the times free at Aerocity.',
  },
];
