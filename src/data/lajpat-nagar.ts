/**
 * LAJPAT NAGAR LOCATION PAGE - all copy and artwork for
 * /russian-spa-in-lajpat-nagar/.
 *
 * A SERVICE-AREA PAGE. THERE IS NO LAJPAT NAGAR BRANCH.
 *
 * The business trades from ONE address - Block - Asset No. 6, 6, Northern
 * Access Rd, Aerocity, New Delhi 110037 (see `site.address`). Nothing in this
 * project records a second premises, so this page is written for somebody
 * SEARCHING from Lajpat Nagar and the South Delhi neighbourhoods around it,
 * and it says plainly where we actually are - in the hero, in the local
 * sections, in the location block and in the FAQ.
 *
 * Lajpat Nagar has several real, unrelated spa and massage businesses of its
 * own. Nothing on this page may borrow one of their addresses, phone numbers,
 * photographs, ratings, reviews or map listings, or read as though we were
 * one of them.
 *
 * NEVER write on this page:
 *   - "our Lajpat Nagar branch / outlet / centre", "located in Lajpat Nagar",
 *     or any wording implying a second address;
 *   - a Lajpat Nagar address, phone number, opening hours or map pin;
 *   - a distance, driving time, metro walking time or landmark gap to or from
 *     anywhere - Lajpat Nagar, South Extension, Ashram, the terminals at IGI.
 *     None of it is documented in this project, and inventing it is how a
 *     location page becomes a doorway page;
 *   - ratings, reviews, testimonials, awards, guest counts, or "best",
 *     "number one", "top rated", "most trusted";
 *   - therapist nationalities, certifications or qualifications;
 *   - medical, therapeutic, "detox", "cure" or "heals" claims of any kind;
 *   - discounts or promotions beyond the ₹1,499 first visit already published
 *     on /pricing/.
 *
 * WHAT EVERY FACT HERE IS BACKED BY
 *   - address, phone, WhatsApp, hours, maps URL: src/data/site.ts
 *   - every price and duration: src/data/treatments.ts (figures unchanged)
 *   - the ₹1,499 first visit rate: src/pages/pricing/index.astro
 *   - the facilities list: src/data/services.ts `facilities` + private rooms
 *   - the banya sequence (gradual heat, birch venik, cooling breaks, herbal
 *     tea): the verified write-up in src/data/treatments.ts
 *
 * ORIGINALITY: every sentence below is written for this page. It is not the
 * home page, the services copy, the treatment write-ups, or the Aerocity,
 * Mahipalpur, Vasant Kunj, Gurgaon, Saket, Hauz Khas, Karol Bagh or Defence
 * Colony page with the area name swapped - a set of location pages that say
 * the same thing in the same order is a set of duplicates.
 *
 * PHOTOS: eight local files under public/images/locations/lajpat-nagar/,
 * grouped by section, in the same shape as the other outlet pages. Each was
 * opened and looked at before its alt text was written, and no alt text here
 * claims to show our rooms, our equipment or a member of our staff - they are
 * stock stand-ins. TODO (client): replace the files in place, keep the names,
 * then run `npm run images`.
 */

import { localImage } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

const base = '/images/locations/lajpat-nagar';

/* ------------------------------------------------------------------- meta */

export const lajpatNagarMeta = {
  /** 51 characters. */
  title: 'Russian Spa in Lajpat Nagar | Body Massage in Delhi',
  /** 149 characters. */
  description:
    'Planning a body massage near Lajpat Nagar? Compare banya, Swedish, deep tissue, Thai and hot stone sessions, then book an appointment on WhatsApp.',
};

/* ----------------------------------------------------------------- images */

export const lajpatNagarImages = {
  /** Hero. Dark tiled steam room, lit benches and a single candle. */
  hero: localImage(
    `${base}/hero/russian-spa-lajpat-nagar.jpg`,
    'Low-lit steam room with tiled benches and a single candle burning',
    1600,
    900
  ),
  /** Treatment card. Close crop of hands kneading an oiled back. */
  bodyMassage: localImage(
    `${base}/treatments/body-massage-lajpat-nagar.jpg`,
    'Hands working across an oiled back during a body massage',
    1000,
    700
  ),
  /** Treatment card. Both hands pressing along a leg over a white towel. */
  deepTissue: localImage(
    `${base}/treatments/deep-tissue-massage-south-delhi.jpg`,
    'Steady pressure applied along the leg during an oil massage',
    1000,
    700
  ),
  /** Treatment card. Hands pressing the back of a guest still in a T-shirt. */
  thai: localImage(
    `${base}/treatments/thai-massage-near-lajpat-nagar.jpg`,
    'Clothed bodywork, with the therapist pressing along the back',
    1000,
    700
  ),
  /** Banya. Steam lifting off hot stones in a wood-lined heat room. */
  banya: localImage(
    `${base}/banya/russian-banya-lajpat-nagar.jpg`,
    'Steam rising from hot stones inside a wood-lined heat room',
    1100,
    760
  ),
  /** Comfort section. Amber oil bottles and a herbal compress on a table. */
  oils: localImage(
    `${base}/experience/aromatherapy-oils-south-delhi.jpg`,
    'Amber oil bottles and a herbal compress set out beside soft cushions',
    1000,
    700
  ),
  /** Facilities band. Sunken bath strewn with petals, towels and oils beside. */
  facilities: localImage(
    `${base}/facilities/spa-facilities-south-delhi.jpg`,
    'Sunken bath scattered with flower petals, rolled towels and oils alongside',
    1000,
    700
  ),
  /** Booking band. Rolled towels laid ready on a treatment bed. */
  booking: localImage(
    `${base}/cta/spa-near-lajpat-nagar.jpg`,
    'Rolled towels laid out ready on a treatment bed before a session',
    1200,
    600
  ),
} as const;

/* --------------------------------------------------------- treatment cards */

export interface LajpatNagarTreatment {
  name: string;
  /** 40-60 words, written for this page - not the /services/ copy. */
  body: string;
  price: string;
  duration: string;
}

/**
 * The three photographed cards, shown large on the top tier of the grid.
 * The remaining three run as compact tiles beneath them.
 */
export const lajpatNagarFeatured: (LajpatNagarTreatment & { image: SiteImage })[] = [
  {
    name: 'Swedish Massage',
    body: 'The gentlest oil massage on the list. Broad, even strokes travel the back, arms and legs at a pressure you set at the start, and nothing is held or worked hard. A sensible first booking, and the one people come back to when they simply want an hour to go quiet.',
    price: '₹2,800',
    duration: '60 minutes',
    image: lajpatNagarImages.bodyMassage,
  },
  {
    name: 'Deep Tissue Massage',
    body: 'Firmer, slower and concentrated rather than general. The therapist warms an area, then stays with it, usually across the shoulders, neck or lower back. The ninety minutes is not padding; sustained pressure needs the time. Say the moment it stops feeling useful and it is eased off.',
    price: '₹3,500',
    duration: '90 minutes',
    image: lajpatNagarImages.deepTissue,
  },
  {
    name: 'Thai Massage',
    body: 'You keep your clothes on and lie on a mat rather than a table, and no oil is used. The therapist takes you through guided stretches and presses along the legs, hips and back instead. Expect to be moved about; people who sit all week tend to take to it fastest.',
    price: '₹3,200',
    duration: '75 minutes',
    image: lajpatNagarImages.thai,
  },
];

export const lajpatNagarTreatments: LajpatNagarTreatment[] = [
  {
    name: 'Aromatherapy Massage',
    body: 'You choose the oil blend before anything begins, and the scent sets the tone for the whole session. The hands stay light and the pace stays slow. Book this one to wind down rather than to have something worked out of a shoulder.',
    price: '₹3,000',
    duration: '75 minutes',
  },
  {
    name: 'Hot Stone Therapy',
    body: 'Warmed stones are rested along the back, then worked over the muscles alongside the therapist’s hands. The heat does part of the job, so firm pressure arrives gradually instead of landing all at once. The longest of the single treatments.',
    price: '₹4,000',
    duration: '90 minutes',
  },
  {
    name: 'Traditional Russian Banya',
    body: 'Not a massage at all, but a staged heat ritual: birch venik work, cooling breaks between rounds and herbal tea at the end. It is what the Russian in our name refers to, and the least expensive way to try something genuinely different.',
    price: '₹2,500',
    duration: '60 minutes',
  },
];

/* --------------------------------------------------------- the banya stages */

/** The sequence as the verified treatments.ts write-up describes it. */
export const lajpatNagarBanyaStages = [
  {
    title: 'Into the heat',
    body: 'You settle into the steam gradually rather than pushing through it. Nothing is rushed at this stage.',
  },
  {
    title: 'The venik',
    body: 'Bundled birch branches are worked over the body in rhythm, filling the room with the smell of warm birch.',
  },
  {
    title: 'Cooling off',
    body: 'You come out, cool down and sit quietly. The pauses are as much a part of the ritual as the heat is.',
  },
  {
    title: 'Round again',
    body: 'Back into the steam, and the cycle repeats for as long as the session runs.',
  },
  {
    title: 'Herbal tea',
    body: 'Served at the end, while you sit and let the temperature come back to normal.',
  },
];

/* ----------------------------------------------- what to say before you start */

/**
 * Framed as things the GUEST decides. The project verifies no therapist
 * qualification, training or nationality, so none is asserted anywhere.
 */
export const lajpatNagarPrompts = [
  'Lighter, please',
  'Firmer through the shoulders',
  'Skip my lower back today',
  'I’d rather not talk',
  'Oil on a table, not clothed work',
  'I’ve only got 45 minutes',
];

/* -------------------------------------------------------- nearby South Delhi */

/**
 * Named once, in one place, rather than sprinkled through the prose. These are
 * areas guests travel FROM. Not one of them has premises of ours in it.
 */
export const lajpatNagarAreas = [
  'Lajpat Nagar I–IV',
  'Amar Colony',
  'Defence Colony',
  'South Extension',
  'Andrews Ganj',
  'East of Kailash',
  'Jangpura',
  'Greater Kailash',
  'New Friends Colony',
];

/* -------------------------------------------------------------- facilities */

/** `icon` picks an inline SVG on the page. Every entry is in services.ts. */
export const lajpatNagarFacilities = [
  {
    icon: 'room',
    name: 'Private treatment room',
    body: 'Every massage takes place in a private room, reset between guests.',
  },
  {
    icon: 'shower',
    name: 'Shower',
    body: 'On site, to use before a session or to rinse off afterwards.',
  },
  {
    icon: 'steam',
    name: 'Steam bath',
    body: 'A heated steam room. It forms part of certain packages, not of every massage.',
  },
  {
    icon: 'sauna',
    name: 'Sauna',
    body: 'Dry heat, and the opening stage of the traditional banya session.',
  },
  {
    icon: 'hammam',
    name: 'Hammam',
    body: 'A warm bathing area in the traditional style.',
  },
  {
    icon: 'jacuzzi',
    name: 'Jacuzzi bath',
    body: 'A warm soak, included with some packages rather than with a standard treatment.',
  },
];

/* ----------------------------------------------------------- price summary */

/** Straight from src/data/treatments.ts. Do not edit these figures here. */
export const lajpatNagarPrices = [
  { name: 'Reflexology', price: '₹2,200', duration: '45 min' },
  { name: 'Traditional Russian Banya', price: '₹2,500', duration: '60 min' },
  { name: 'Swedish Massage', price: '₹2,800', duration: '60 min' },
  { name: 'Aromatherapy Massage', price: '₹3,000', duration: '75 min' },
  { name: 'Sports Massage', price: '₹3,000', duration: '60 min' },
  { name: 'Thai Massage', price: '₹3,200', duration: '75 min' },
  { name: 'Deep Tissue Massage', price: '₹3,500', duration: '90 min' },
  { name: 'Shiatsu Massage', price: '₹3,500', duration: '60 min' },
  { name: 'Hot Stone Therapy', price: '₹4,000', duration: '90 min' },
  { name: 'Couple’s Spa Package', price: '₹7,500', duration: '120 min' },
];

/* ------------------------------------------------------- what to expect */

export const lajpatNagarExpectations = [
  'Ten individual treatments plus a couple’s package to choose between.',
  'Every rate and session length published before you book anything.',
  'Appointments only — by WhatsApp or by phone, never walk-in.',
  'A private treatment room for every massage.',
  'The traditional Russian banya alongside the massage menu.',
  'Open every day of the week, 9:00 AM to 11:00 PM.',
];

/* --------------------------------------------------------------- booking */

export const lajpatNagarSteps = [
  {
    step: '1',
    title: 'Pick a treatment',
    body: 'Choose from the menu above, or describe what you are after and let the team suggest something.',
  },
  {
    step: '2',
    title: 'Message or call',
    body: 'WhatsApp, or ring +91 9599547138 any day between 9:00 AM and 11:00 PM.',
  },
  {
    step: '3',
    title: 'Check what is free',
    body: 'The team replies with the slots genuinely open. Nothing is held until they say so.',
  },
  {
    step: '4',
    title: 'Agree a time',
    body: 'Settle on a slot that fits your journey, and mention it then if you are working to a deadline.',
  },
  {
    step: '5',
    title: 'Come to Aerocity',
    body: 'Travel to the Northern Access Road address. The therapist talks the session through before starting.',
  },
];

/* ------------------------------------------------------------------- FAQ */

/**
 * Written for Lajpat Nagar search intent specifically - not the home page
 * questions, and not the Defence Colony, Hauz Khas, Saket or Karol Bagh ones.
 *
 * Whatever is here is also exactly what the FAQPage structured data says, so
 * the two can never drift apart. Do not add a question you are not willing to
 * have shown in a search result.
 */
export const lajpatNagarFaqs = [
  {
    question: 'Is there a Russian spa in Lajpat Nagar?',
    answer:
      'Not one of ours. Russian Spa Mahipalpur runs a single spa, at Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037. Lajpat Nagar is an area we serve rather than one we have premises in.',
  },
  {
    question: 'What massage treatments can I choose from?',
    answer:
      'Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology, shiatsu and sports massage, a full body massage, the traditional Russian banya, and a couple’s package. Each one is described at length on our services page.',
  },
  {
    question: 'How much does a body massage cost?',
    answer:
      'Between ₹2,200 and ₹4,000 for a single treatment: reflexology is ₹2,200 for 45 minutes, hot stone therapy ₹4,000 for 90. The couple’s package is ₹7,500 for 120 minutes, and first-time guests can book a full body massage at ₹1,499.',
  },
  {
    question: 'Can I reach the spa from South Extension or Amar Colony?',
    answer:
      'Yes — guests come to us from right across South Delhi. We do not publish a travel time or distance from any neighbourhood, because your route and the time of day decide it. Open the map on this page and let it plan the trip.',
  },
  {
    question: 'Can I book a full body massage?',
    answer:
      'Yes. It covers the back, shoulders, arms and legs in one session, at a pressure agreed with the therapist beforehand, and it is the treatment the ₹1,499 first-visit rate applies to.',
  },
  {
    question: 'Is there anything for two people together?',
    answer:
      'The Couple’s Spa Package runs 120 minutes at ₹7,500 for two guests sharing a private room, each picking their own style. Mention it when you book, since it needs a room of the right size free.',
  },
  {
    question: 'What facilities are on site?',
    answer:
      'A private treatment room for every massage, plus a shower, steam bath, sauna, hammam and jacuzzi bath. The steam and jacuzzi belong to particular packages rather than every treatment, so ask what your booking includes.',
  },
  {
    question: 'How do I make an appointment?',
    answer:
      'Message on WhatsApp or call +91 9599547138 between 9:00 AM and 11:00 PM, any day. Say which treatment you want and roughly when suits, and the team replies with the slots open. Nothing is confirmed until they say it is.',
  },
];
