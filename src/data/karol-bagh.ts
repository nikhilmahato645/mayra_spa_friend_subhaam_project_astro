/**
 * KAROL BAGH LOCATION PAGE - all copy and artwork for /russian-spa-in-karol-bagh/.
 *
 * THE ONE THING TO GET RIGHT HERE
 *
 * There is no Karol Bagh branch. The business trades from a SINGLE address -
 * Northern Access Road, Aerocity, New Delhi (see `site.address`) - and nothing
 * in this project says otherwise. So this page is written for someone in or
 * around Karol Bagh who is searching for a spa, and it says plainly where we
 * actually are. It follows the same rule the Gurgaon page set.
 *
 * NEVER write on this page:
 *   - "our Karol Bagh branch / outlet / centre", "located in Karol Bagh";
 *   - a Karol Bagh address, phone number or opening hours;
 *   - a second LocalBusiness in the structured data (BaseLayout already emits
 *     DaySpa with the real Aerocity address on every page);
 *   - a distance, travel time, metro line or exit number to anywhere. None of
 *     that is verified in the project, and inventing it is how a location page
 *     turns into a doorway page.
 *
 * Everything factual below traces back to existing project data:
 *   - address, phone, WhatsApp, hours, maps URL: src/data/site.ts
 *   - every price and duration: src/data/treatments.ts
 *   - the facilities list: src/data/services.ts `facilities`
 *   - the banya ritual (steam, birch venik, cooling breaks, herbal tea):
 *     the verified write-up in src/data/treatments.ts
 *
 * Also absent, deliberately: therapist nationalities, customer counts, years
 * in business, awards, ratings, and any health, medical or "detox" claim.
 *
 * The wording is written fresh. It does not reuse the home page, the services
 * copy, the treatment write-ups, or the Aerocity and Gurgaon pages - a set of
 * location pages that say the same thing in the same order is a set of
 * duplicates.
 *
 * Photos live in public/images/locations/karol-bagh/, one folder per section,
 * the same way the gallery and the other outlet pages are organised. Run
 * `npm run images` after adding or replacing any of them.
 *
 * TODO (client): the photographs are stock stand-ins. The alt text describes
 * each one in general terms on purpose - nothing here claims to show a
 * specific room of ours or a member of staff. Replace the files in place and
 * keep the names.
 */

import { localImage } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

const base = '/images/locations/karol-bagh';

/* ------------------------------------------------------------------ meta */

export const karolBaghMeta = {
  /** 54 characters. */
  title: 'Russian Spa in Karol Bagh | Body Massage in Delhi',
  /** 156 characters. */
  description:
    'Russian spa and body massage for Karol Bagh guests in Delhi. Banya, deep tissue, Thai and hot stone therapy at our Aerocity address. Book on WhatsApp.',
};

/* ----------------------------------------------------------------- images */

export const karolBaghImages = {
  hero: localImage(
    `${base}/hero/russian-spa-karol-bagh.jpg`,
    'Therapist working across a guest’s back during a massage',
    1600,
    900
  ),
  banya: localImage(
    `${base}/banya/russian-banya-karol-bagh.jpg`,
    'Tiered wooden benches inside a warmly lit banya room',
    1000,
    700
  ),
  heater: localImage(
    `${base}/facilities/sauna-heater-delhi-spa.jpg`,
    'Stones glowing on a round sauna heater',
    800,
    600
  ),
  buckets: localImage(
    `${base}/facilities/banya-buckets-ladle.jpg`,
    'Wooden buckets and a ladle set out beside a steam bench',
    800,
    600
  ),
  interior: localImage(
    `${base}/location/spa-interior-central-delhi.jpg`,
    'Wood-lined room with bench seating and a stone heater',
    900,
    620
  ),
  steam: localImage(
    `${base}/location/steam-room-delhi-ncr.jpg`,
    'Heated stones and a wooden ladle in a steam room',
    900,
    620
  ),
} as const;

/* --------------------------------------------------------- treatment cards */

export interface KarolBaghTreatment {
  name: string;
  /** 40-70 words, written for this page only. */
  body: string;
  price?: string;
  duration?: string;
  image?: SiteImage;
}

export const karolBaghTreatments: KarolBaghTreatment[] = [
  {
    name: 'Full Body Massage',
    body: 'Back, shoulders, arms and legs in one session, at a pressure settled with the therapist before anything starts. It is the usual first booking because it treats the whole body rather than one sore spot, and it is the treatment the introductory price further down covers.',
    image: localImage(
      `${base}/treatments/body-massage-karol-bagh.jpg`,
      'Guest lying on a treatment table during a back massage',
      700,
      500
    ),
  },
  {
    name: 'Swedish Massage',
    body: 'The lightest thing on the menu. Long, even strokes at low to medium pressure, with no attempt to dig into anything. Worth booking if you have never had a massage before and would rather find out what you like than commit to something firm.',
    price: '₹2,800',
    duration: '60 minutes',
  },
  {
    name: 'Deep Tissue Massage',
    body: 'The opposite end. Slow, heavy pressure held on the tight bands across the shoulders and upper back. It is not meant to be comfortable throughout, and the ninety minutes exist because that work cannot be rushed. Speak up if it tips past useful.',
    price: '₹3,500',
    duration: '90 minutes',
    image: localImage(
      `${base}/treatments/relaxation-room-karol-bagh.jpg`,
      'Wooden treatment room with bench seating and warm lighting',
      700,
      500
    ),
  },
  {
    name: 'Thai Massage',
    body: 'Clothed, oil-free, and done on a mat. The therapist moves you through assisted stretches and presses along the body rather than gliding over it. If your hips and hamstrings have gone stiff from sitting, this does more than a table massage will.',
    price: '₹3,200',
    duration: '75 minutes',
  },
  {
    name: 'Aromatherapy Massage',
    body: 'Light pressure throughout, built around a scented oil blend you choose at the start. The point is the pace and the aroma rather than the depth of the work, so book it when you want to switch off rather than when something specific aches.',
    price: '₹3,000',
    duration: '75 minutes',
  },
  {
    name: 'Hot Stone Therapy',
    body: 'Heated stones rest along the spine and are worked over the muscles with the therapist’s hands. Warm muscle takes firm pressure far more easily than cold muscle does, which is the whole idea, and why the session is a full ninety minutes.',
    price: '₹4,000',
    duration: '90 minutes',
    image: localImage(
      `${base}/treatments/jacuzzi-bath-delhi-spa.jpg`,
      'Corner bath tub with wooden surround and daylight',
      700,
      500
    ),
  },
];

/* ----------------------------------------------------------- price summary */

/** Straight from src/data/treatments.ts. Do not edit these figures here. */
export const karolBaghPrices = [
  { name: 'Traditional Russian Banya', price: '₹2,500', duration: '60 minutes' },
  { name: 'Swedish Massage', price: '₹2,800', duration: '60 minutes' },
  { name: 'Aromatherapy Massage', price: '₹3,000', duration: '75 minutes' },
  { name: 'Thai Massage', price: '₹3,200', duration: '75 minutes' },
  { name: 'Deep Tissue Massage', price: '₹3,500', duration: '90 minutes' },
  { name: 'Hot Stone Therapy', price: '₹4,000', duration: '90 minutes' },
];

/* ------------------------------------------------------------- facilities */

export const karolBaghFacilities = [
  'Private treatment rooms',
  'Shower',
  'Steam bath',
  'Sauna',
  'Hammam',
  'Jacuzzi bath',
];

/* ------------------------------------------------------------- why choose */

export const karolBaghReasons = [
  {
    title: 'One menu, one price list',
    body: 'The figures on this page are the figures you are quoted. Nothing is priced differently depending on where you searched from.',
  },
  {
    title: 'Clear about where we are',
    body: 'We do not run a Karol Bagh branch and will not pretend to. There is a single address, in Aerocity, so you know what you are travelling to.',
  },
  {
    title: 'Private treatment rooms',
    body: 'Every session is in a private room, reset between guests, with shower, steam, sauna and hammam facilities on site.',
  },
  {
    title: 'Sessions of different lengths',
    body: 'From 45 minutes to two hours, so a visit can fit an afternoon or take up most of one.',
  },
  {
    title: 'Booking by WhatsApp or phone',
    body: 'Message or call and the team replies with what is actually free. No account, no deposit, no app.',
  },
  {
    title: 'Open every day',
    body: 'Fourteen hours a day, every day of the week, from 9:00 AM until 11:00 PM.',
  },
];

/* -------------------------------------------------------------- the visit */

export const karolBaghSteps = [
  { step: '01', title: 'Pick a treatment', body: 'Choose from the menu, or say what is sore and let the team suggest one.' },
  { step: '02', title: 'Message or call', body: 'WhatsApp or ring the number below, whichever suits you.' },
  { step: '03', title: 'Check what is free', body: 'The team replies with the open slots. Nothing is held until they confirm.' },
  { step: '04', title: 'Agree a time', body: 'Settle on a slot, allowing for the trip across town.' },
  { step: '05', title: 'Come to Aerocity', body: 'The therapist talks the session through with you before starting.' },
];

/* --------------------------------------------------------------------- FAQ */

/**
 * Written for someone searching from Karol Bagh. These are NOT the home page
 * questions, nor the Aerocity or Gurgaon ones.
 *
 * Whatever is here is also what the FAQPage structured data says, so the two
 * can never drift apart. Do not add a question you are not willing to have
 * shown in a search result.
 */
export const karolBaghFaqs = [
  {
    question: 'Do you have a Russian spa in Karol Bagh?',
    answer:
      'Not a branch, no. We run one spa, at Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037, and guests travel to it from across Delhi including Karol Bagh. The traditional Russian banya is on the menu there alongside the massage treatments.',
  },
  {
    question: 'How far is it from Karol Bagh?',
    answer:
      'We do not publish a distance or a travel time, because it depends entirely on your route and the traffic. Put the address into the map on this page and it will tell you for the moment you are leaving.',
  },
  {
    question: 'Which massage treatments can I book?',
    answer:
      'Nine massage styles - full body, Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology, shiatsu and sports - plus the banya and a two-person package. Each one is written out on the services page.',
  },
  {
    question: 'What does a massage cost?',
    answer:
      'The cheapest single treatment is reflexology at ₹2,200 for 45 minutes; the dearest is hot stone therapy at ₹4,000 for 90. Packages sit outside that range and are listed on the pricing page.',
  },
  {
    question: 'Is the first visit offer available to me?',
    answer:
      'Yes. The ₹1,499 introductory price applies to a first-visit full body massage, wherever you are travelling from. It does not extend to the other treatments or to the packages.',
  },
  {
    question: 'Can two of us book together?',
    answer:
      'Yes - that is the Couple’s Spa Package: two hours, ₹7,500, both of you in the same private room and each picking a different treatment if you want. It needs the right room free, so ask about it while booking.',
  },
  {
    question: 'What facilities are on site?',
    answer:
      'A shower, steam bath, sauna, hammam and jacuzzi bath, and every treatment room is private. Which of them your visit includes depends on what you book - steam and jacuzzi belong to particular packages - so ask while you are on the phone.',
  },
  {
    question: 'How do I make an appointment?',
    answer:
      'WhatsApp or a phone call to +91 9599547138, any time between 9:00 AM and 11:00 PM. Give the team a treatment and a rough day, and they will come back with what is open.',
  },
];
