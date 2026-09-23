/**
 * SAKET LOCATION PAGE - all copy and artwork for /russian-spa-in-saket/.
 *
 * THE ONE THING TO GET RIGHT HERE
 *
 * There is no Saket branch. The business trades from a SINGLE address -
 * Northern Access Road, Aerocity, New Delhi (see `site.address`) - and nothing
 * in this project says otherwise. This page is written for someone in or
 * around Saket and South Delhi who is searching for a spa, and it states
 * plainly where the spa actually is. Same rule the Gurgaon and Karol Bagh
 * pages follow.
 *
 * NEVER write on this page:
 *   - "our Saket branch / outlet / centre", "located in Saket";
 *   - a Saket address, phone number, map pin or opening hours;
 *   - a second LocalBusiness in the structured data (BaseLayout already emits
 *     DaySpa with the real Aerocity address on every page);
 *   - a distance, travel time, metro stop, mall or exit number to or from
 *     anywhere. None of it is verified in this project, and inventing it is
 *     what turns a location page into a doorway page.
 *
 * Everything factual below traces back to existing project data:
 *   - address, phone, WhatsApp, hours, maps URL: src/data/site.ts
 *   - every price and duration: src/data/treatments.ts
 *   - the facilities list: src/data/services.ts `facilities` + `promises`
 *   - the banya ritual (gradual heat, birch venik, cooling breaks, herbal
 *     tea): the verified write-up in src/data/treatments.ts
 *   - the Rs 1,499 first-visit full body massage: src/pages/pricing/index.astro
 *
 * Deliberately absent: therapist nationalities or qualifications, customer
 * counts, years in business, awards, ratings, testimonials, and any health,
 * medical or "detox" claim.
 *
 * The wording is written fresh for this page. It does not reuse the home page,
 * the services copy, the treatment write-ups, or the Aerocity, Gurgaon, Vasant
 * Kunj and Karol Bagh pages - a set of location pages that say the same thing
 * in the same order is a set of duplicates.
 *
 * IMAGES: five stock photographs, served from the Unsplash CDN like the home
 * page ones. Each URL was checked and each alt line describes what is actually
 * in the frame - none of them claims to show our rooms or our staff.
 * TODO (client): replace with real photographs of the spa when they exist.
 */

import { image } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

/* -------------------------------------------------------------------- meta */

export const saketMeta = {
  /** 52 characters. */
  title: 'Russian Spa in Saket | Body Massage & Spa',
  /** 152 characters - inside the 155 limit clampDescription() enforces. */
  description:
    'Russian spa and body massage for guests searching around Saket, South Delhi. Banya, deep tissue, Thai and hot stone sessions. Book on WhatsApp or call.',
};

/* ------------------------------------------------------------------ images */

export const saketImages = {
  /** Above the fold. Dark basalt stones laid along a guest's back. */
  hero: image(
    '1600334089648-b0d9d3028eb2',
    'Row of warm basalt stones laid along a guest’s back during a hot stone session',
    1400,
    900
  ),
  /** The banya band. A wood-lined heat room with tiered benches. */
  banya: image(
    '1583416750470-965b2707b355',
    'Wood-lined heat room with tiered benches and a bowl of stones at the centre',
    1000,
    700
  ),
  /** Beside "choose a treatment". An amber oil bottle in daylight. */
  oils: image(
    '1608571423902-eed4a5ad8108',
    'Amber glass massage oil bottle on a wooden stand in soft daylight',
    800,
    600
  ),
  /** The unwind section. Reed diffuser, lit candles and a folded towel. */
  calm: image(
    '1620733723572-11c53f73a416',
    'Reed diffuser, lit candles and a folded white towel on a pale surface',
    800,
    600
  ),
  /** Facilities. Rolled towel, lotion and a tea light. */
  facilities: image(
    '1540555700478-4be289fbecef',
    'Rolled towel, a plain lotion bottle and a lit tea light on a treatment counter',
    800,
    600
  ),
} as const;

/* -------------------------------------------------------- treatment cards */

export interface SaketTreatment {
  name: string;
  /** 40-60 words, written for this page only. */
  body: string;
  price: string;
  duration: string;
}

export const saketTreatments: SaketTreatment[] = [
  {
    name: 'Swedish Massage',
    body: 'Long, flowing strokes at a light to medium pressure, working over the whole body rather than digging into one place. It is the easiest session to start with, and the one to pick when you would rather come out drowsy than worked over.',
    price: '₹2,800',
    duration: '60 minutes',
  },
  {
    name: 'Deep Tissue Massage',
    body: 'Slower and considerably firmer. The therapist stays on the tight bands across the shoulders, neck and lower back instead of covering ground. Ninety minutes because that kind of work does not go quickly. Say so if the pressure stops feeling useful.',
    price: '₹3,500',
    duration: '90 minutes',
  },
  {
    name: 'Thai Massage',
    body: 'Done clothed on a floor mat, with no oil. You are moved through assisted stretches and pressed along the limbs rather than glided over. A sensible choice if a desk has left your hips and hamstrings stiff rather than sore.',
    price: '₹3,200',
    duration: '75 minutes',
  },
  {
    name: 'Aromatherapy Massage',
    body: 'Built around a scented oil blend picked at the start of the session. The pressure stays gentle throughout, so the aroma and the unhurried pace carry the session rather than the depth of the work.',
    price: '₹3,000',
    duration: '75 minutes',
  },
  {
    name: 'Hot Stone Therapy',
    body: 'Warmed stones are rested along the spine and then worked over the muscles by hand. Warm muscle accepts firm pressure far more readily than cold muscle, which is the whole point of the ninety minutes.',
    price: '₹4,000',
    duration: '90 minutes',
  },
  {
    name: 'Traditional Russian Banya',
    body: 'Not a table massage at all, but a heat and steam ritual with birch venik work, cooling breaks between the stages and herbal tea to close. The one treatment on this list you will not find on most Delhi spa menus.',
    price: '₹2,500',
    duration: '60 minutes',
  },
];

/* --------------------------------------------------------- price summary */

/** Straight from src/data/treatments.ts. Do not edit these figures here. */
export const saketPrices = [
  { name: 'Reflexology', price: '₹2,200', duration: '45 minutes' },
  { name: 'Traditional Russian Banya', price: '₹2,500', duration: '60 minutes' },
  { name: 'Swedish Massage', price: '₹2,800', duration: '60 minutes' },
  { name: 'Aromatherapy Massage', price: '₹3,000', duration: '75 minutes' },
  { name: 'Sports Massage', price: '₹3,000', duration: '60 minutes' },
  { name: 'Thai Massage', price: '₹3,200', duration: '75 minutes' },
  { name: 'Shiatsu Massage', price: '₹3,500', duration: '60 minutes' },
  { name: 'Deep Tissue Massage', price: '₹3,500', duration: '90 minutes' },
  { name: 'Hot Stone Therapy', price: '₹4,000', duration: '90 minutes' },
  { name: "Couple's Spa Package", price: '₹7,500', duration: '120 minutes' },
];

/* --------------------------------------------------------------- facilities */

/** From `facilities` and `promises` in src/data/services.ts. Nothing added. */
export const saketFacilities = [
  {
    title: 'Private treatment rooms',
    body: 'Every session takes place in a room of its own, held for your slot.',
  },
  {
    title: 'Shower',
    body: 'On site, so you are not leaving straight from the table if you would rather not.',
  },
  {
    title: 'Steam bath',
    body: 'Part of certain packages rather than a standard massage - confirm yours when booking.',
  },
  {
    title: 'Sauna',
    body: 'Dry heat, available on site alongside the steam and banya rooms.',
  },
  {
    title: 'Hammam',
    body: 'The traditional bathing room, available on site.',
  },
  {
    title: 'Jacuzzi bath',
    body: 'Attached to particular packages, not to every treatment on the menu.',
  },
];

/* ----------------------------------------------------- nearby South Delhi */

export const saketNearby = [
  'Saket',
  'Malviya Nagar',
  'Hauz Khas',
  'Green Park',
  'Greater Kailash',
  'Chhatarpur',
  'Vasant Kunj',
  'South Delhi',
];

/* ------------------------------------------------------------- why guests */

export const saketReasons = [
  {
    title: 'Straight about the address',
    body: 'One spa, in Aerocity. This page exists for Saket searches, not to imply a branch that is not there.',
  },
  {
    title: 'Ten treatments, one price list',
    body: 'Every figure on this page is the figure you are quoted. Nothing changes with where you searched from.',
  },
  {
    title: 'The banya option',
    body: 'A traditional Russian heat ritual sits on the menu next to the massage treatments, at ₹2,500 for an hour.',
  },
  {
    title: 'Sessions from 45 minutes to two hours',
    body: 'Short enough to fit an errand, or long enough to be the reason you came across town.',
  },
  {
    title: 'Booking by WhatsApp or phone',
    body: 'Message or ring and the team replies with what is genuinely free. No app, no account, no deposit.',
  },
  {
    title: 'Open every day',
    body: '9:00 AM to 11:00 PM, seven days a week, which makes a late session workable.',
  },
];

/* ---------------------------------------------------------------- booking */

export const saketSteps = [
  {
    step: '01',
    title: 'Pick a treatment',
    body: 'Choose from the menu above, or describe what is bothering you and let the team suggest one.',
  },
  {
    step: '02',
    title: 'Message or call',
    body: 'WhatsApp or ring +91 9599547138 with a treatment and a rough day.',
  },
  {
    step: '03',
    title: 'Wait for the slot',
    body: 'The team comes back with what is open. Nothing is held until they confirm it.',
  },
  {
    step: '04',
    title: 'Agree a time',
    body: 'Settle on a slot, leaving room for the trip across the city.',
  },
  {
    step: '05',
    title: 'Come to the Aerocity address',
    body: 'The therapist runs through the session and the pressure with you before starting.',
  },
];

/* -------------------------------------------------------------------- FAQ */

/**
 * Written for someone searching from Saket. These are NOT the home page
 * questions, nor the Aerocity, Gurgaon, Vasant Kunj or Karol Bagh ones.
 *
 * Whatever is here is also exactly what the FAQPage structured data says, so
 * the two cannot drift apart. Do not add a question you are not willing to
 * have shown in a search result.
 */
export const saketFaqs = [
  {
    question: 'Is there a Russian spa in Saket?',
    answer:
      'Not a branch of ours, no. We run a single spa at Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037, and guests travel to it from across South Delhi, Saket included. The traditional Russian banya is on the menu there alongside the massage treatments.',
  },
  {
    question: 'Which massage treatments can I book?',
    answer:
      'Ten in total - Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology, shiatsu, sports and full body massage, plus the Russian banya and a two-person package. Each one is described in full on the services page.',
  },
  {
    question: 'How much does a body massage cost?',
    answer:
      'Single treatments run from ₹2,200 for 45 minutes of reflexology to ₹4,000 for 90 minutes of hot stone therapy. The Couple’s Spa Package is ₹7,500 for two hours. A first-visit full body massage is ₹1,499.',
  },
  {
    question: 'Can I get there easily from South Delhi?',
    answer:
      'The spa sits on the airport side of the city, so it is a drive rather than a walk from Saket or Malviya Nagar. We do not publish travel times because they depend entirely on your route and the hour - check the map on this page before you set off.',
  },
  {
    question: 'Can I book a full body massage?',
    answer:
      'Yes. It covers back, shoulders, arms, legs and feet at one pressure agreed with the therapist, rather than concentrating on a single area. First-time guests can book it at ₹1,499; that introductory rate applies to this treatment only.',
  },
  {
    question: 'Can two of us book a session together?',
    answer:
      'Yes, through the Couple’s Spa Package - two hours at ₹7,500, both of you in the same private room, each free to pick a different treatment. It depends on the right room being free, so mention it while booking.',
  },
  {
    question: 'What facilities are on site?',
    answer:
      'Private treatment rooms, a shower, steam bath, sauna, hammam and jacuzzi bath. Not all of them belong to every booking - the steam and jacuzzi come with particular packages rather than a standard massage - so ask what yours includes.',
  },
  {
    question: 'How do I make an appointment?',
    answer:
      'WhatsApp or call +91 9599547138 any time between 9:00 AM and 11:00 PM, any day of the week. Give the team a treatment and a rough time, and they will reply with what is actually open.',
  },
];
