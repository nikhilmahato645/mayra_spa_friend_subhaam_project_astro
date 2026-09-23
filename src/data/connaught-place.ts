/**
 * CONNAUGHT PLACE LANDING PAGE - all copy and artwork for
 * /russian-spa-in-connaught-place/.
 *
 * THE ONE THING TO GET RIGHT HERE
 *
 * There is NO Connaught Place branch. The business trades from a single
 * address - Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi
 * 110037 (see `site.address`) - and nothing anywhere in this project says
 * otherwise. This page is written for someone searching from or around
 * Connaught Place and Central Delhi, and it states plainly where the spa
 * actually is. It follows the rule the Gurgaon and Karol Bagh pages set.
 *
 * NEVER write on this page:
 *   - "our Connaught Place branch / outlet / centre", "located in CP";
 *   - a Connaught Place address, phone number or opening hours;
 *   - a second LocalBusiness in the structured data (BaseLayout already emits
 *     DaySpa with the real Aerocity address on every page);
 *   - a distance, driving time, metro line, exit gate or parking claim. None
 *     of that is verified in the project, and inventing it is exactly how a
 *     location page turns into a doorway page.
 *
 * Everything factual below traces back to existing project data:
 *   - address, phone, WhatsApp, hours, maps URL: src/data/site.ts
 *   - every price and duration: src/data/treatments.ts
 *   - the facilities list: src/data/services.ts `facilities` + `promises`
 *   - steam + jacuzzi being package-bound: src/data/services.ts `packages`
 *   - the banya ritual (steam, birch venik, cooling breaks, herbal tea):
 *     the verified write-up in src/data/treatments.ts
 *
 * Deliberately absent: therapist nationalities or qualifications, ratings,
 * review counts, awards, years in business, and any health, medical or
 * "detox" claim.
 *
 * The wording is written fresh for this page. It does not reuse the home
 * page, the services or pricing copy, or the Aerocity, Karol Bagh, Gurgaon,
 * Vasant Kunj and Mahipalpur pages - a set of location pages that say the
 * same thing in the same order is a set of duplicates.
 *
 * PHOTOS: this page uses five remote stock photographs (Unsplash CDN) rather
 * than a public/images/locations/connaught-place/ folder, so there is nothing
 * to run `npm run images` over. Each alt text describes what is actually in
 * the frame. None of them is presented as our premises or our staff.
 *
 * TODO (client): replace the five stock photos with real studio photography
 * and move them into public/images/locations/connaught-place/.
 */

import { image } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

/* -------------------------------------------------------------------- meta */

export const connaughtPlaceMeta = {
  /** 51 characters. */
  title: 'Russian Spa in Connaught Place | Body Massage & Spa',
  /** 152 characters. */
  description:
    'Russian spa and body massage for guests near Connaught Place, Central Delhi. Banya, deep tissue, Thai and hot stone sessions. Book on WhatsApp or call.',
};

/* ------------------------------------------------------------------ images */

/**
 * Five photographs, no more - this page is written to be read, and every
 * extra image is another request before the text arrives. The hero is the
 * only eager one.
 */
export const connaughtPlaceImages = {
  hero: image(
    '1544161515-4ab6ce6db874',
    'Massage oil being poured out before a back massage begins',
    1600,
    1000
  ),
  banya: image(
    '1583416750470-965b2707b355',
    'Wood-lined heat room with bench seating and stones on a heater',
    1000,
    700
  ),
  session: image(
    '1519823551278-64ac92734fb1',
    'Therapist working with both hands across a guest’s back',
    900,
    620
  ),
  stones: image(
    '1600334089648-b0d9d3028eb2',
    'Warmed stones resting in a line along a guest’s back',
    900,
    620
  ),
  facilities: image(
    '1620733723572-11c53f73a416',
    'Reed diffuser, lit candles and a rolled towel on a spa counter',
    800,
    600
  ),
} as const;

/* -------------------------------------------------------- treatment cards */

export interface CpTreatment {
  name: string;
  /** 40-60 words, written for this page only. */
  body: string;
  price: string;
  duration: string;
}

export const connaughtPlaceTreatments: CpTreatment[] = [
  {
    name: 'Swedish Massage',
    body: 'Long, gliding strokes at light to medium pressure, working over the back, shoulders, arms and legs without pushing into anything. It is the session to pick when you want an hour of quiet rather than something that tests you, and the usual choice for a first massage.',
    price: '₹2,800',
    duration: '60 minutes',
  },
  {
    name: 'Deep Tissue Massage',
    body: 'Slower and considerably firmer. The therapist stays with the tight bands across the shoulders, neck and lower back instead of covering the whole body evenly. Ninety minutes because that work does not hurry. Say so at any point if the pressure goes past useful.',
    price: '₹3,500',
    duration: '90 minutes',
  },
  {
    name: 'Thai Massage',
    body: 'Done on a mat, fully clothed, with no oil. You are moved through assisted stretches and pressed along the limbs and back rather than rubbed. Worth booking when hips, hamstrings and shoulders have stiffened up from long hours at a desk.',
    price: '₹3,200',
    duration: '75 minutes',
  },
  {
    name: 'Aromatherapy Massage',
    body: 'A light-pressure session built around a scented oil blend chosen at the start. The pace and the aroma carry it rather than the depth of the work, which makes it a reasonable pick at the end of a long day in town rather than for one stubborn ache.',
    price: '₹3,000',
    duration: '75 minutes',
  },
  {
    name: 'Hot Stone Therapy',
    body: 'Smooth heated stones are set along the spine and then worked over the muscles in the therapist’s hands. Warm muscle accepts firm pressure far more easily than cold muscle does, which is the whole point of the ninety minutes.',
    price: '₹4,000',
    duration: '90 minutes',
  },
  {
    name: 'Traditional Russian Banya',
    body: 'Not a massage at all - a heat and bathing ritual run in stages, with a birch venik, cooling breaks between rounds and herbal tea to finish. It is the treatment the Russian in our name refers to, and the least expensive thing on the menu.',
    price: '₹2,500',
    duration: '60 minutes',
  },
];

/* ---------------------------------------------------------- price list */

/**
 * Straight from src/data/treatments.ts, ordered cheapest first. Do not edit a
 * figure here - change it in treatments.ts and copy it across.
 */
export const connaughtPlacePrices = [
  { name: 'Reflexology', price: '₹2,200', duration: '45 minutes' },
  { name: 'Traditional Russian Banya', price: '₹2,500', duration: '60 minutes' },
  { name: 'Swedish Massage', price: '₹2,800', duration: '60 minutes' },
  { name: 'Aromatherapy Massage', price: '₹3,000', duration: '75 minutes' },
  { name: 'Sports Massage', price: '₹3,000', duration: '60 minutes' },
  { name: 'Thai Massage', price: '₹3,200', duration: '75 minutes' },
  { name: 'Deep Tissue Massage', price: '₹3,500', duration: '90 minutes' },
  { name: 'Shiatsu Massage', price: '₹3,500', duration: '60 minutes' },
  { name: 'Hot Stone Therapy', price: '₹4,000', duration: '90 minutes' },
  { name: "Couple's Spa Package", price: '₹7,500', duration: '120 minutes' },
];

/* -------------------------------------------------------------- facilities */

/**
 * Only what src/data/services.ts documents. `note` says plainly when
 * something belongs to a package rather than to every booking - the ₹15,999
 * package is the one that lists steam with a jacuzzi bath.
 */
export interface CpFacility {
  name: string;
  /** Key into the inline icon set in the page file. */
  icon: 'room' | 'shower' | 'steam' | 'hammam' | 'jacuzzi' | 'sauna';
  note: string;
}

export const connaughtPlaceFacilities: CpFacility[] = [
  { name: 'Private treatment room', icon: 'room', note: 'Every treatment, every booking.' },
  { name: 'Shower', icon: 'shower', note: 'On site, for use around your session.' },
  { name: 'Steam bath', icon: 'steam', note: 'Part of certain packages, not of a standard massage.' },
  { name: 'Sauna', icon: 'sauna', note: 'On site. Ask what your booking covers.' },
  { name: 'Hammam', icon: 'hammam', note: 'On site. Ask what your booking covers.' },
  { name: 'Jacuzzi bath', icon: 'jacuzzi', note: 'Part of certain packages, not of a standard massage.' },
];

/* ------------------------------------------------------ nearby localities */

/**
 * Plain text, deliberately NOT links and deliberately NOT branches. These are
 * the parts of Delhi guests travel in from; none of them has an outlet.
 */
export const connaughtPlaceNearby = [
  'Connaught Place',
  'Central Delhi',
  'Karol Bagh',
  'Paharganj',
  'Patel Nagar',
  'Chanakyapuri',
  'India Gate area',
  'New Delhi',
];

/* ---------------------------------------------------- what to expect list */

export const connaughtPlaceExpect = [
  'Ten treatments to choose between, from 45 minutes to two hours.',
  'The price and the session length stated before you book, not after.',
  'A private room for every treatment, reset between guests.',
  'Booking by WhatsApp or by phone - no account, no app, no deposit.',
  'Open every day of the week, 9:00 AM to 11:00 PM.',
  'One verified address, shown in full on this page and on the map.',
];

/* ---------------------------------------------------------- booking steps */

export const connaughtPlaceSteps = [
  {
    step: '01',
    title: 'Pick a treatment',
    body: 'Choose from the menu above, or describe what is aching and let the team suggest one.',
  },
  {
    step: '02',
    title: 'Message or ring',
    body: 'WhatsApp or call +91 9599547138, any time between 9:00 AM and 11:00 PM.',
  },
  {
    step: '03',
    title: 'Ask what is free',
    body: 'The team replies with the slots actually open. Nothing is held before that reply.',
  },
  {
    step: '04',
    title: 'Settle on a time',
    body: 'Agree a slot that leaves room for the trip across town from Central Delhi.',
  },
  {
    step: '05',
    title: 'Come to the Aerocity address',
    body: 'The therapist talks the session and the pressure through with you before starting.',
  },
];

/* --------------------------------------------------------------------- FAQ */

/**
 * Written for someone searching from Connaught Place. These are NOT the home
 * page questions, nor the Aerocity, Karol Bagh or Gurgaon ones.
 *
 * Whatever is here is also what the FAQPage structured data says, so the two
 * can never drift apart. Do not add a question you are not willing to have
 * shown in a search result.
 */
export const connaughtPlaceFaqs = [
  {
    question: 'Is there a Russian spa in Connaught Place?',
    answer:
      'Not a branch of ours, no. We run one spa, at Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037, and guests travel to it from all over the city including Connaught Place. This page exists for that search, not to suggest an outlet in CP.',
  },
  {
    question: 'Which massage treatments can I book?',
    answer:
      'Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology, shiatsu, sports and full body massage, plus the traditional Russian banya and a two-person package. Every one of them is written out in full on the services page.',
  },
  {
    question: 'How much does a massage cost?',
    answer:
      'Single treatments run from ₹2,200 for 45 minutes of reflexology to ₹4,000 for 90 minutes of hot stone therapy. The Couple’s Spa Package is ₹7,500 for two hours. Packages beyond that are listed on the pricing page.',
  },
  {
    question: 'How far is the spa from Central Delhi?',
    answer:
      'We do not publish a distance or a travel time, because it depends entirely on your route, your starting point and the traffic that day. Put the address into the map lower down this page and it will work the journey out for the moment you are leaving.',
  },
  {
    question: 'Can I book a full body massage?',
    answer:
      'Yes. A full body massage covers back, shoulders, arms and legs in one session at a pressure agreed with the therapist beforehand, and it is the treatment the ₹1,499 first-visit price applies to. That introductory price covers a first visit only.',
  },
  {
    question: 'Can two of us book a session together?',
    answer:
      'Yes - that is the Couple’s Spa Package: ₹7,500 for 120 minutes, both of you in the same private room, each free to pick a different treatment. It needs the right room to be free, so mention it while you are booking rather than on arrival.',
  },
  {
    question: 'What facilities are on site?',
    answer:
      'Private treatment rooms, a shower, steam bath, sauna, hammam and jacuzzi bath. Not all of them form part of every booking - steam and the jacuzzi belong to particular packages rather than to a standard massage - so ask what yours covers when you confirm.',
  },
  {
    question: 'How do I make an appointment?',
    answer:
      'Message the spa on WhatsApp or call +91 9599547138 between 9:00 AM and 11:00 PM, any day. Give the team a treatment and a rough time, and they will come back with what is open. Your slot counts as booked once they confirm it.',
  },
];
