/**
 * MALVIYA NAGAR LOCATION PAGE - all copy and artwork for
 * /russian-spa-in-malviya-nagar/.
 *
 * A SERVICE-AREA PAGE, NOT A BRANCH PAGE
 *
 * There is no Malviya Nagar outlet. The business trades from a SINGLE
 * address - Northern Access Road, Aerocity, New Delhi (see `site.address`) -
 * and nothing anywhere in this project says otherwise. Malviya Nagar is also
 * full of real, unrelated spa businesses; this page must never read as though
 * we were one of them. So it is written for somebody in or around Malviya
 * Nagar who is searching for a massage, and it says plainly where we actually
 * are. Same rule as the Defence Colony, Gurgaon and Karol Bagh pages.
 *
 * NEVER write on this page:
 *   - "our Malviya Nagar branch / outlet / centre", "located in Malviya
 *     Nagar", or anything implying a second address;
 *   - a Malviya Nagar address, phone number, opening hours or map pin;
 *   - a distance, driving time, metro walk or landmark gap to anywhere -
 *     none of it is verified here, and inventing it turns a location page
 *     into a doorway page;
 *   - another business's listing, rating, review or photograph;
 *   - a second LocalBusiness in the structured data (BaseLayout already emits
 *     DaySpa with the real Aerocity address on every page).
 *
 * Everything factual below traces back to existing project data:
 *   - address, phone, WhatsApp, hours, maps URL: src/data/site.ts
 *   - every price and duration: src/data/treatments.ts
 *   - the facilities list: src/data/services.ts `facilities` + private rooms
 *   - the banya ritual (gradual heat, birch venik, cooling breaks, herbal
 *     tea): the verified write-up in src/data/treatments.ts
 *
 * Deliberately absent: therapist nationalities or certifications, customer
 * counts, years in business, awards, ratings, superlatives ("best", "number
 * one", "top rated"), and any health, medical or "detox" claim.
 *
 * The wording is written fresh for this page. It does not reuse the home
 * page, the services copy, the treatment write-ups, or the Aerocity, Defence
 * Colony, Vasant Kunj, Gurgaon, Saket, Hauz Khas or Karol Bagh pages - a set
 * of location pages that say the same thing in the same order is a set of
 * duplicates, not a set of landing pages.
 *
 * PHOTOS: five remote stock photos from the Unsplash CDN, via the `image()`
 * helper the home, services, about and Defence Colony pages already use. The
 * five ids are all already in use elsewhere in this project, so each one is
 * known-good - but the COMBINATION and the order are unique to this page, and
 * every alt text below was written fresh against what the photo actually
 * shows. None of them claims to be a specific room of ours or a member of
 * staff. Because these are CDN URLs, the file names cannot be controlled from
 * here; when the client supplies real photography, drop it under
 * public/images/locations/malviya-nagar/ with descriptive names
 * (russian-spa-malviya-nagar.jpg, russian-banya-malviya-nagar.jpg, ...), swap
 * these `image()` calls for `localImage()`, run `npm run images`, and set
 * `usesUnsplash={false}` on the page's BaseLayout.
 */

import { image } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

/* ------------------------------------------------------------------ meta */

export const malviyaNagarMeta = {
  /** 49 characters. */
  title: 'Russian Spa in Malviya Nagar | Body Massage & Spa',
  /** 150 characters. */
  description:
    'Russian spa and body massage for guests near Malviya Nagar in South Delhi. Banya, Swedish, deep tissue, Thai and hot stone sessions. Book on WhatsApp.',
};

/* ----------------------------------------------------------------- images */

/**
 * Five photos, no more. This page carries its weight in text, and a location
 * page that loads a dozen stock pictures is slower without being any more
 * useful. The hero is the Largest Contentful Paint; the other four are lazy.
 */
export const malviyaNagarImages = {
  /** Hero. A massage under way - oil, towels, a covered treatment bed. */
  hero: image(
    '1544161515-4ab6ce6db874',
    'Body massage under way on a covered treatment bed with oil and fresh towels',
    1500,
    950
  ),
  /** Banya band. The heat and water side of the spa. */
  banya: image(
    '1631049307264-da0ec9d70304',
    'Steam rising in a heated bathing area used for the traditional banya',
    1000,
    720
  ),
  /** Facilities. A treatment room made up before a guest arrives. */
  room: image(
    '1620733723572-11c53f73a416',
    'Private treatment room made up with fresh linen ahead of a session',
    1000,
    720
  ),
  /** Prices band. Oils and candles set out beside the bed. */
  oils: image(
    '1532926381893-7542290edf1d',
    'Massage oils and candles set out beside a treatment bed',
    900,
    650
  ),
  /** Location band. The quiet end of the spa, where guests wait. */
  lounge: image(
    '1573461160327-b450ce3d8e7f',
    'Softly lit waiting area with seating at a wellness centre',
    900,
    650
  ),
} as const;

/* --------------------------------------------------------- menu families */

/**
 * The three shapes a session can take, used as a strip under the intro.
 * This grouping is not on any other page - it is how this page introduces
 * the menu without repeating the services copy.
 */
export const malviyaNagarFamilies = [
  {
    name: 'Oil on a table',
    body: 'Swedish, aromatherapy, deep tissue and hot stone. Bare skin under a towel, oil, and pressure you set.',
  },
  {
    name: 'Clothed on a mat',
    body: 'Thai and shiatsu. No oil at all - stretches, leans and thumb pressure instead of gliding strokes.',
  },
  {
    name: 'Heat, not hands',
    body: 'The traditional Russian banya. A bathing ritual taken in rounds rather than an hour on a table.',
  },
];

/* --------------------------------------------------------- treatment cards */

export interface MalviyaNagarTreatment {
  /** Short uppercase label above the name - the page's own grouping. */
  family: string;
  name: string;
  /** ~40-55 words, written for this page; not the /services/ copy. */
  body: string;
  price: string;
  duration: string;
}

export const malviyaNagarTreatments: MalviyaNagarTreatment[] = [
  {
    family: 'Oil, table',
    name: 'Swedish Massage',
    body: 'The least demanding thing on the menu. Long strokes at light to medium pressure, working over the whole body rather than digging into one part of it. Pick it when you want an hour of quiet rather than something to fix.',
    price: '₹2,800',
    duration: '60 minutes',
  },
  {
    family: 'Oil, table',
    name: 'Deep Tissue Massage',
    body: 'Hands move slower and press harder, staying with the tight bands across the shoulders, neck and lower back instead of passing over them. Ninety minutes because that work cannot be hurried. Speak up early if it is more than you wanted.',
    price: '₹3,500',
    duration: '90 minutes',
  },
  {
    family: 'Clothed, mat',
    name: 'Thai Massage',
    body: 'Nothing like an oil massage. You stay dressed on a floor mat and the therapist moves you - assisted stretches, leans and steady pressure through the legs, hips and back. Most people describe it as being unfolded.',
    price: '₹3,200',
    duration: '75 minutes',
  },
  {
    family: 'Oil, table',
    name: 'Aromatherapy Massage',
    body: 'You pick a scented oil blend before anything starts, and the session is built around pace rather than force. Pressure stays light the whole way through. It is the one to choose when the aim is simply to slow down.',
    price: '₹3,000',
    duration: '75 minutes',
  },
  {
    family: 'Oil, table',
    name: 'Hot Stone Therapy',
    body: 'Warmed stones are laid along the back and then worked over the muscles alongside the therapist’s hands. The heat lets firm pressure arrive gradually instead of all at once, which is why the session runs to an hour and a half.',
    price: '₹4,000',
    duration: '90 minutes',
  },
  {
    family: 'Heat ritual',
    name: 'Traditional Russian Banya',
    body: 'The one booking here that is not a massage at all. Heat taken in rounds, birch venik work and cooling breaks in between, tea at the end. It is also the least expensive hour on the list.',
    price: '₹2,500',
    duration: '60 minutes',
  },
];

/* ------------------------------------------------------------ banya stages */

/** The verified sequence from src/data/treatments.ts, in four stages. */
export const malviyaNagarBanyaStages = [
  {
    stage: '01',
    title: 'Into the steam',
    body: 'The heat is let in gradually. Rushing this stage is the usual first-timer mistake.',
  },
  {
    stage: '02',
    title: 'Birch venik',
    body: 'A bundle of leafy birch branches is swept over you in rhythm, carrying heat and scent across the skin.',
  },
  {
    stage: '03',
    title: 'Cool down',
    body: 'You step out and let your breathing settle. The break is part of the ritual, not a pause in it.',
  },
  {
    stage: '04',
    title: 'Herbal tea',
    body: 'Tea at the end, taken slowly, while the heat works its way back out.',
  },
];

/* ----------------------------------------------------------- price summary */

/** Straight from src/data/treatments.ts. Do not edit these figures here. */
export const malviyaNagarPrices = [
  { name: 'Reflexology', price: '₹2,200', duration: '45 minutes' },
  { name: 'Traditional Russian Banya', price: '₹2,500', duration: '60 minutes' },
  { name: 'Swedish Massage', price: '₹2,800', duration: '60 minutes' },
  { name: 'Aromatherapy Massage', price: '₹3,000', duration: '75 minutes' },
  { name: 'Sports Massage', price: '₹3,000', duration: '60 minutes' },
  { name: 'Thai Massage', price: '₹3,200', duration: '75 minutes' },
  { name: 'Deep Tissue Massage', price: '₹3,500', duration: '90 minutes' },
  { name: 'Shiatsu Massage', price: '₹3,500', duration: '60 minutes' },
  { name: 'Hot Stone Therapy', price: '₹4,000', duration: '90 minutes' },
  { name: 'Couple’s Spa Package', price: '₹7,500', duration: '120 minutes' },
];

/* ------------------------------------------------------------- facilities */

/**
 * `icon` picks an inline SVG in the page. Every entry is a facility already
 * listed in src/data/services.ts (plus the private rooms the treatments copy
 * establishes) - nothing new is introduced here.
 */
export const malviyaNagarFacilities = [
  {
    icon: 'room',
    name: 'Private treatment room',
    body: 'Every massage happens behind a closed door, in a room reset between guests.',
  },
  {
    icon: 'shower',
    name: 'Shower',
    body: 'On site, whether you want to rinse off before a session or after one.',
  },
  {
    icon: 'steam',
    name: 'Steam bath',
    body: 'A heated steam room. It belongs to certain packages rather than to every massage.',
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

/* -------------------------------------------------- what you decide first */

/**
 * The "built around your preference" checklist. Framed as things the GUEST
 * decides, never as claims about our staff - the project verifies no
 * therapist qualification, nationality or training, so none is asserted.
 */
export const malviyaNagarChoices = [
  { title: 'How firm', body: 'Light, medium or firm - and you can change it halfway through.' },
  { title: 'Which style', body: 'Oil on a table or clothed work on a mat. The two feel nothing alike.' },
  { title: 'How long', body: 'Sessions run from 45 minutes to two hours, depending on the treatment.' },
  { title: 'Where to spend the time', body: 'Name one area, or ask for an even pass over everything.' },
  { title: 'How much talking', body: 'Some guests chat the whole hour, some would rather not. Either is fine.' },
  { title: 'What to leave alone', body: 'Mention a sore spot, a recent injury, or a scent you would rather skip.' },
];

/* ------------------------------------------------------ what to expect */

export const malviyaNagarExpectations = [
  'Ten individual treatments, plus a couple’s package.',
  'Every price and session length published before you book.',
  'Appointments taken on WhatsApp or by phone.',
  'A private treatment room for every massage.',
  'The traditional Russian banya alongside the massage menu.',
  'One clearly stated address, open every day, 9:00 AM to 11:00 PM.',
];

/* -------------------------------------------------------------- the visit */

export const malviyaNagarSteps = [
  {
    step: '1',
    title: 'Pick a treatment',
    body: 'Choose from the menu above, or describe what is bothering you and let the team suggest one.',
  },
  {
    step: '2',
    title: 'Message or call',
    body: 'WhatsApp or ring +91 9599547138, and mention that you are travelling from Malviya Nagar.',
  },
  {
    step: '3',
    title: 'Check availability',
    body: 'The team comes back with the times genuinely free. Nothing is held until they confirm it.',
  },
  {
    step: '4',
    title: 'Agree a time',
    body: 'Settle on a slot that suits your journey, and say so if you are working to a deadline.',
  },
  {
    step: '5',
    title: 'Come in',
    body: 'Come to the Northern Access Road address in Aerocity. The therapist talks it through first.',
  },
];

/* --------------------------------------------------------------------- FAQ */

/**
 * Written for Malviya Nagar specifically. These are NOT the home page
 * questions, nor the Aerocity, Defence Colony, Saket or Hauz Khas ones - this
 * list answers what somebody searching for a spa around Malviya Nagar and
 * South Delhi would actually type.
 *
 * Whatever is here is also what the FAQPage structured data says, so the two
 * can never drift apart. Do not add a question you are not willing to have
 * shown in a search result.
 */
export const malviyaNagarFaqs = [
  {
    question: 'Is there a Russian spa near Malviya Nagar?',
    answer:
      'Not in Malviya Nagar itself. Russian Spa Mahipalpur runs from one address - Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037 - and guests from Malviya Nagar and the rest of South Delhi travel to us there.',
  },
  {
    question: 'What massage treatments are available?',
    answer:
      'Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology, shiatsu, sports and full body massage, the traditional Russian banya, and a couple’s package. Each one is described in full on our services page.',
  },
  {
    question: 'How much does a massage cost near Malviya Nagar?',
    answer:
      'The same as it costs anywhere else on our menu - there is no separate rate by area. Individual treatments run from ₹2,200 for 45 minutes of reflexology to ₹4,000 for 90 minutes of hot stone therapy.',
  },
  {
    question: 'Is the spa in South Delhi?',
    answer:
      'Our address is in Aerocity, the hotel district beside Indira Gandhi International Airport, on the south-west side of the city. It is not inside Malviya Nagar or any other South Delhi colony, so please check the address and map on this page before you set off.',
  },
  {
    question: 'Can I book a full body massage?',
    answer:
      'Yes. It covers the back, shoulders, arms and legs in one session, at a pressure you agree with the therapist beforehand. It is also the treatment the ₹1,499 first-visit price applies to.',
  },
  {
    question: 'Can two people book a session together?',
    answer:
      'Yes. The Couple’s Spa Package is 120 minutes at ₹7,500 for two guests in one private room, each choosing their own style. Confirm it when you book, since it needs a suitable room free.',
  },
  {
    question: 'What facilities are available?',
    answer:
      'A private treatment room for every massage, plus a shower, steam bath, sauna, hammam and jacuzzi bath. The steam room and jacuzzi belong to certain packages rather than to every treatment, so ask what your booking covers.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'Message us on WhatsApp or call +91 9599547138 any day between 9:00 AM and 11:00 PM. Say which treatment you want and roughly when, and the team replies with the times that are free.',
  },
];
