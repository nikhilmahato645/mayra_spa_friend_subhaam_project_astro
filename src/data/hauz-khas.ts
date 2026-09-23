/**
 * HAUZ KHAS LOCATION PAGE - all copy and artwork for /russian-spa-in-hauz-khas/.
 *
 * WHY THIS PAGE IS NOT A LocationLayout PAGE
 *
 * LocationLayout prints "Massage Services Available Near <area>" around an
 * area it assumes we serve from an outlet there. There is no Hauz Khas outlet.
 * The business trades from ONE address - Northern Access Road, Aerocity, New
 * Delhi (see `site.address`) - and nothing in this project records a second
 * one. So this is a page written for people SEARCHING from Hauz Khas and the
 * South Delhi neighbourhoods around it, and it says where we actually are in
 * the hero, in the location block and in the FAQ.
 *
 * WHAT MUST NEVER APPEAR ON THIS PAGE
 *   - "our Hauz Khas branch / outlet / centre", "located in Hauz Khas", a Hauz
 *     Khas address, a Hauz Khas phone number, a Hauz Khas map pin;
 *   - a LocalBusiness schema placed in Hauz Khas (the page emits only the real
 *     DaySpa from BaseLayout, which carries the Aerocity address);
 *   - any distance, driving time, metro walking time or landmark proximity -
 *     Hauz Khas Village, Deer Park, the Hauz Khas or Green Park metro stops.
 *     None of it is documented anywhere in this project;
 *   - medical, therapeutic, "detox" or "cure" claims; therapist
 *     certifications or nationalities; ratings, reviews, awards, guest counts,
 *     "best", "number one", "top rated";
 *   - discounts or promotions beyond the Rs 1,499 first visit already published.
 *
 * WHAT EVERY FACT HERE IS BACKED BY
 *   - address, phone, WhatsApp, hours: src/data/site.ts
 *   - every price and duration: src/data/treatments.ts (figures unchanged)
 *   - the Rs 1,499 first visit offer: src/pages/pricing/index.astro
 *   - the facilities list: src/data/services.ts `facilities` + `promises`
 *   - the banya stages (gradual heat, birch venik, cooling breaks, herbal
 *     tea): the verified write-up in treatments.ts
 *
 * The wording is written fresh for Hauz Khas search intent. It is not the
 * Aerocity, Gurgaon, Vasant Kunj, Karol Bagh or Mahipalpur page with the area
 * renamed - different headings, a different section order, and two blocks
 * (the banya stage rail and "Tell the therapist first") that exist on no
 * other page.
 *
 * TODO (client): the photographs are stock stand-ins and their alt text is
 * deliberately general - no alt text here claims to show our rooms or our
 * staff. Replace the files in place, keep the names, run `npm run images`.
 */

import { localImage } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

const base = '/images/locations/hauz-khas';

/* ------------------------------------------------------------------ meta */

export const hauzKhasMeta = {
  /** 45 characters. */
  title: 'Russian Spa in Hauz Khas | Body Massage & Spa',
  /** 147 characters. */
  description:
    'Russian spa and body massage for guests near Hauz Khas and South Delhi. Banya, Swedish, deep tissue and Thai sessions in Aerocity. Book on WhatsApp.',
};

/* ----------------------------------------------------------------- images */

export const hauzKhasImages = {
  hero: localImage(
    `${base}/hero/russian-spa-hauz-khas.jpg`,
    'Warm stones set along the back during a hot stone massage',
    1600,
    900
  ),
  massage: localImage(
    `${base}/treatments/body-massage-hauz-khas.jpg`,
    'Therapist working across a guest’s back during a body massage',
    1000,
    700
  ),
  oils: localImage(
    `${base}/experience/aromatherapy-oil-south-delhi.jpg`,
    'Massage oil poured from a bottle before an aromatherapy session',
    1000,
    700
  ),
  calm: localImage(
    `${base}/facilities/spa-near-hauz-khas.jpg`,
    'Reed diffuser, rolled towel and lit candles in a quiet treatment setting',
    1000,
    700
  ),
  booking: localImage(
    `${base}/cta/spa-treatment-setup-south-delhi.jpg`,
    'Folded towel, lotion and a lit candle laid out ready for a treatment',
    1200,
    600
  ),
} as const;

/* --------------------------------------------------------- treatment cards */

export interface HauzKhasTreatment {
  name: string;
  /** 40-60 words. Written for this page; not the /services/ copy. */
  body: string;
  price: string;
  duration: string;
}

export const hauzKhasTreatments: HauzKhasTreatment[] = [
  {
    name: 'Swedish Massage',
    body: 'The lightest of the oil massages on the menu. Long, unhurried strokes travel the length of the back, arms and legs at a pressure you set before the therapist starts. Nothing about it is demanding, which is why it suits a first visit or the end of a long week.',
    price: '₹2,800',
    duration: '60 minutes',
  },
  {
    name: 'Deep Tissue Massage',
    body: 'Slower hands, and a good deal more weight behind them. The therapist warms an area with broad strokes, then stays with the tight band across the shoulders, neck or lower back rather than moving on. Say early if the pressure is more than you want; it is adjusted as you go.',
    price: '₹3,500',
    duration: '90 minutes',
  },
  {
    name: 'Thai Massage',
    body: 'Clothed, oil-free and worked on a mat instead of a table. Assisted stretches, leaning pressure and slow joint rotations replace the gliding strokes, so it feels more like being moved through positions than massaged. A sensible pick for stiff hips, hamstrings and shoulders.',
    price: '₹3,200',
    duration: '75 minutes',
  },
  {
    name: 'Aromatherapy Massage',
    body: 'Built around a scented oil blend you choose before anything begins. Pressure stays light the whole way through and the pace stays slow, so the aroma and the rhythm carry the session rather than the depth of the work. Ask for whichever blend smells right on the day.',
    price: '₹3,000',
    duration: '75 minutes',
  },
  {
    name: 'Hot Stone Therapy',
    body: 'Smooth warmed stones are laid along the back and then worked over the muscles alongside the therapist’s hands. Heat lets firm pressure build far more gradually than cold hands could manage, which is why this one runs to a longer session.',
    price: '₹4,000',
    duration: '90 minutes',
  },
  {
    name: 'Traditional Russian Banya',
    body: 'Not a massage at all, and the treatment the spa is named for. A heat ritual run in stages - steam, birch venik work, a cooling break, then back in - with herbal tea at the close. Choose it when you want something slower and more involved than an hour on a table.',
    price: '₹2,500',
    duration: '60 minutes',
  },
];

/* --------------------------------------------------------- the banya stages */

/**
 * The four stages, in order, from the verified banya write-up in
 * treatments.ts. Deliberately experiential - no health claim anywhere.
 */
export const banyaStages = [
  {
    step: '01',
    title: 'Settle into the steam',
    body: 'You go in and do nothing while the heat builds. This is the stage most people cut short.',
  },
  {
    step: '02',
    title: 'The birch venik',
    body: 'Once you are warm, a bundle of leafy birch branches is swept over you in rhythm, carrying heat and scent across the skin.',
  },
  {
    step: '03',
    title: 'Step out and cool',
    body: 'A quiet break away from the heat before the next round. The stages are separated on purpose.',
  },
  {
    step: '04',
    title: 'Herbal tea',
    body: 'The session closes sitting down with tea rather than getting straight up off a table.',
  },
];

/* ------------------------------------------------- tell the therapist first */

/** The things worth saying out loud before a session starts. */
export const preferencePoints = [
  {
    title: 'How much pressure',
    body: 'Light, medium or firm - and say so again mid-session if it stops being right.',
  },
  {
    title: 'Which style',
    body: 'Oil-based work, clothed Thai stretching, or the heat ritual. They are different experiences.',
  },
  {
    title: 'How long',
    body: 'Sessions run from 45 to 120 minutes depending on the treatment you pick.',
  },
  {
    title: 'Where to focus',
    body: 'Shoulders and neck after desk work, legs after travel, or an even pass head to toe.',
  },
  {
    title: 'How quiet',
    body: 'Some guests want conversation, most want none. Either is fine - just mention it.',
  },
  {
    title: 'Anything to avoid',
    body: 'A sore spot, a recent injury, a scent you dislike. Tell the therapist before they begin.',
  },
];

/* ---------------------------------------------------------- nearby areas */

/**
 * Neighbourhoods guests travel in from. PLAIN TEXT, not links, and not a
 * claim of a branch in any of them - see the header of this file.
 */
export const nearbyAreas = [
  'Hauz Khas',
  'Green Park',
  'Malviya Nagar',
  'Saket',
  'Greater Kailash',
  'Vasant Kunj',
  'Chhatarpur',
  'Vasant Vihar',
];

/* ----------------------------------------------------------- price summary */

/** Straight from src/data/treatments.ts. Do not edit these figures here. */
export const hauzKhasPrices = [
  { name: 'Reflexology', price: '₹2,200', duration: '45 minutes' },
  { name: 'Traditional Russian Banya', price: '₹2,500', duration: '60 minutes' },
  { name: 'Swedish Massage', price: '₹2,800', duration: '60 minutes' },
  { name: 'Aromatherapy Massage', price: '₹3,000', duration: '75 minutes' },
  { name: 'Sports Massage', price: '₹3,000', duration: '60 minutes' },
  { name: 'Thai Massage', price: '₹3,200', duration: '75 minutes' },
  { name: 'Shiatsu Massage', price: '₹3,500', duration: '60 minutes' },
  { name: 'Deep Tissue Massage', price: '₹3,500', duration: '90 minutes' },
  { name: 'Hot Stone Therapy', price: '₹4,000', duration: '90 minutes' },
  { name: 'Couple’s Spa Package', price: '₹7,500', duration: '120 minutes' },
];

/* ------------------------------------------------------------- facilities */

/**
 * `icon` keys match the inline SVG paths in the page file. The list itself is
 * src/data/services.ts `facilities` plus the private room from `promises`.
 * Note which ones are package-linked rather than standard - that distinction
 * comes from the pricing page and must not be flattened into "all included".
 */
export const hauzKhasFacilities = [
  {
    icon: 'room',
    name: 'Private treatment room',
    body: 'Every treatment is given in a private room, reset between guests.',
  },
  {
    icon: 'shower',
    name: 'Shower',
    body: 'On site. Included with the ₹1,499 first visit full body massage.',
  },
  {
    icon: 'steam',
    name: 'Steam bath',
    body: 'A heated steam room. It comes with certain packages rather than with every massage.',
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
    body: 'A warm soak, included with some packages rather than with all treatments.',
  },
];

/* --------------------------------------------------------- what to expect */

/** Factual only. Nothing here is a superlative, a rating or a review. */
export const expectPoints = [
  'Ten individual treatments plus a couple’s package to choose between.',
  'Every price and session length published before you book - on this page and on the pricing page.',
  'Appointment-based, so the room and the therapist are held for your slot.',
  'Booking by WhatsApp or by phone on the same number, with no account and no deposit.',
  'Treatments given in a private room, with shower, steam, sauna, hammam and jacuzzi on site.',
  'The traditional Russian banya as an alternative to a table massage.',
  'Sessions for one guest, or for two together in one room on the Couple’s Spa Package.',
  'Open every day of the week, 9:00 AM to 11:00 PM, holidays included.',
];

/* -------------------------------------------------------------- the visit */

export const hauzKhasSteps = [
  {
    step: '01',
    title: 'Pick a treatment',
    body: 'Choose from the menu above, or describe what is bothering you and let the team suggest one.',
  },
  {
    step: '02',
    title: 'Message or call',
    body: 'WhatsApp or ring the number below. Mention you are travelling in from the Hauz Khas side.',
  },
  {
    step: '03',
    title: 'Check availability',
    body: 'The team replies with the slots genuinely free. Nothing is held until they say so.',
  },
  {
    step: '04',
    title: 'Agree a time',
    body: 'Settle on a slot that leaves room for the journey in each direction.',
  },
  {
    step: '05',
    title: 'Come to Aerocity',
    body: 'Arrive at the Northern Access Road address. The therapist talks the session through first.',
  },
];

/* --------------------------------------------------------------------- FAQ */

/**
 * Written for Hauz Khas search intent specifically. These are NOT the home
 * page questions, and not the Aerocity, Gurgaon or Vasant Kunj sets.
 *
 * Whatever is here is also what the FAQPage structured data says, so the two
 * can never drift apart. The first answer states plainly that the address is
 * in Aerocity, not Hauz Khas - do not soften it.
 */
export const hauzKhasFaqs = [
  {
    question: 'Is there a Russian spa in Hauz Khas?',
    answer:
      'Not a branch in Hauz Khas itself. Russian Spa Mahipalpur trades from a single address - Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037 - and takes bookings from guests across South Delhi, Hauz Khas included. The traditional banya and the full massage menu are available there.',
  },
  {
    question: 'What massage treatments can I book?',
    answer:
      'Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology, shiatsu, sports and full body massage, the traditional Russian banya, and a couple’s package. Each one is described in full on our services page.',
  },
  {
    question: 'How much does a massage cost?',
    answer:
      'Individual treatments run from ₹2,200 for 45 minutes of reflexology to ₹4,000 for 90 minutes of hot stone therapy, with the banya at ₹2,500 for 60 minutes. The couple’s package is ₹7,500 for 120 minutes. The full list is on our pricing page.',
  },
  {
    question: 'Can I reach the spa from other parts of South Delhi?',
    answer:
      'Guests travel in from Green Park, Malviya Nagar, Saket, Greater Kailash, Vasant Kunj and Chhatarpur among others. We do not publish travel times or distances - they depend on your route and the traffic. Check the map on this page and allow for the journey back.',
  },
  {
    question: 'Can I book a full body massage?',
    answer:
      'Yes. A full body massage covers the back, shoulders, arms and legs at a pressure agreed with the therapist first. If it is your first appointment with us, it can be booked at the ₹1,499 first visit price.',
  },
  {
    question: 'Is a couple’s massage available?',
    answer:
      'Yes - the Couple’s Spa Package, 120 minutes at ₹7,500 for two guests in one private room, each choosing their own style. Confirm it when you book, as it needs a suitable room free.',
  },
  {
    question: 'What facilities are on site?',
    answer:
      'A private treatment room for every session, plus a shower, steam bath, sauna, hammam and jacuzzi bath. They are not all part of every treatment - the steam and jacuzzi come with certain packages - so ask what your booking covers.',
  },
  {
    question: 'How do I make an appointment?',
    answer:
      'Message us on WhatsApp or call +91 9599547138 between 9:00 AM and 11:00 PM, any day. Say which treatment and roughly when suits you, and the team replies with the times free. Your slot is booked once they confirm it.',
  },
];
