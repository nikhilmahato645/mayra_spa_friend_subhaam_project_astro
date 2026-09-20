/**
 * GURGAON LOCATION PAGE - all copy and artwork for /russian-spa-in-gurgaon/.
 *
 * WHY THIS PAGE IS DIFFERENT FROM EVERY OTHER OUTLET PAGE
 *
 * There is no Gurgaon outlet. The business trades from ONE address - Northern
 * Access Road, Aerocity, New Delhi (see `site.address`) - and nothing in this
 * project records a second one. So this page is written as a page for people
 * SEARCHING from Gurgaon / Gurugram, and it says so plainly in the hero, in
 * the location section and in the FAQ.
 *
 * WHAT MUST NEVER APPEAR ON THIS PAGE
 *   - "our Gurgaon branch / outlet", "located in Gurgaon", a Gurgaon address,
 *     a Gurgaon phone number, Gurgaon opening hours, a Gurgaon map pin;
 *   - a LocalBusiness schema placed in Gurgaon (the page emits only the real
 *     DaySpa from BaseLayout, which carries the Aerocity address);
 *   - any driving time, distance or "x minutes from Cyber City" - none is
 *     documented anywhere in this project and traffic on that corridor makes
 *     any such figure wrong most of the day;
 *   - medical, therapeutic or "cure" claims, therapist certifications,
 *     nationalities, ratings, reviews, awards or guest counts.
 *
 * WHAT EVERY FACT HERE IS BACKED BY
 *   - address, phone, e-mail, hours: src/data/site.ts
 *   - every price and duration: src/data/treatments.ts (unchanged figures)
 *   - the ₹1,499 first visit offer: src/pages/pricing/index.astro
 *   - the banya description (heat stages, birch venik, cooling breaks, herbal
 *     tea): the verified write-up in treatments.ts
 *
 * The wording is written fresh for Gurgaon search intent. It is not the
 * Aerocity page with the city name swapped - different headings, different
 * structure, and a whole section (Choosing the Right Massage) that exists on
 * no other page.
 *
 * Photos live in public/images/locations/gurgaon/, one folder per section.
 * Run `npm run images` after adding or replacing any of them.
 *
 * TODO (client): the photographs are stock stand-ins and their alt text is
 * deliberately general - no alt text here claims to show our rooms or our
 * staff. Replace the files in place and keep the names.
 */

import { localImage } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

const base = '/images/locations/gurgaon';

/* ------------------------------------------------------------------ meta */

export const gurgaonMeta = {
  /** 43 characters. */
  title: 'Russian Spa in Gurgaon | Body Massage & Spa',
  /** 152 characters. */
  description:
    'Russian spa and body massage for guests in Gurgaon and Gurugram. Banya, deep tissue, Swedish and couple’s sessions in Aerocity, Delhi. Book on WhatsApp.',
};

/* ----------------------------------------------------------------- images */

export const gurgaonImages = {
  hero: localImage(
    `${base}/hero/russian-spa-near-gurgaon.jpg`,
    'Russian spa and full body massage near Gurgaon',
    1600,
    900
  ),
  banya: localImage(
    `${base}/banya/russian-banya-heat-room.jpg`,
    'Wooden heat room with tiered benches and a stone-filled heater',
    1000,
    700
  ),
  relaxation: localImage(
    `${base}/experience/spa-relaxation-area-near-gurgaon.jpg`,
    'Reed diffuser, folded towel and lit candles in a quiet spa setting',
    1000,
    700
  ),
  fullBody: localImage(
    `${base}/treatments/hot-stone-massage-near-gurgaon.jpg`,
    'Guest lying face down on a massage table during a back treatment',
    700,
    500
  ),
  reflexology: localImage(
    `${base}/treatments/reflexology-foot-massage-gurgaon.jpg`,
    'Feet resting in a bowl of warm water with flower petals',
    700,
    500
  ),
} as const;

/* --------------------------------------------------------- treatment cards */

export interface GurgaonTreatment {
  name: string;
  /** 35-60 words, written for this page only. */
  body: string;
  /** Straight from src/data/treatments.ts. */
  price: string;
  duration: string;
  image?: SiteImage;
}

export const gurgaonTreatments: GurgaonTreatment[] = [
  {
    name: 'Traditional Russian Banya',
    body: 'The heat ritual the spa takes its name from, and not a table massage. You warm through in stages, the therapist works over you with a leafy birch venik, and cooling breaks are built into the middle rather than tacked on the end. Herbal tea to finish.',
    price: '₹2,500',
    duration: '60 minutes',
    image: localImage(
      `${base}/banya/russian-banya-heat-room.jpg`,
      'Wooden heat room with tiered benches and a stone-filled heater',
      1000,
      700
    ),
  },
  {
    name: 'Deep Tissue Massage',
    body: 'Slow, firm work through the upper back, neck and shoulders. The ninety minutes is the whole point - pressure like this cannot be rushed. Say something early if it is firmer than you want; the therapist adjusts as you go rather than starting again.',
    price: '₹3,500',
    duration: '90 minutes',
    image: localImage(
      `${base}/treatments/deep-tissue-massage-near-gurgaon.jpg`,
      'Therapist applying firm pressure along a guest’s lower back',
      700,
      500
    ),
  },
  {
    name: 'Swedish Massage',
    body: 'Long, flowing strokes at a light to medium pressure, working from the shoulders down. Nothing about it is demanding, which is why it is the usual pick at the end of a full working day or a long drive rather than at the start of one.',
    price: '₹2,800',
    duration: '60 minutes',
  },
  {
    name: 'Aromatherapy Massage',
    body: 'A gentler, unhurried session built around a scented oil blend you choose before the therapist starts. The pressure stays light throughout - the pace and the aroma are what the session is about, rather than working deeply into muscle.',
    price: '₹3,000',
    duration: '75 minutes',
    image: localImage(
      `${base}/treatments/aromatherapy-massage-oil-gurgaon.jpg`,
      'Amber dropper bottle of massage oil on a wooden stand',
      700,
      500
    ),
  },
  {
    name: 'Sports Massage',
    body: 'Focused work over the legs, hips and shoulders after training, a match or a long run. It is aimed at how comfortable the muscles feel afterwards - it is not treatment for an injury, and you should see a doctor for one.',
    price: '₹3,000',
    duration: '60 minutes',
  },
  {
    name: 'Couple’s Spa Package',
    body: 'Two guests, one private room, two hours, with each person choosing their own treatment style. It depends on a suitable room being free at the time you want, so confirm it when you book rather than turning up together on the day.',
    price: '₹7,500',
    duration: '120 minutes',
    image: localImage(
      `${base}/treatments/couple-spa-package-gurgaon.jpg`,
      'Two guests on adjacent massage tables in one treatment room',
      700,
      500
    ),
  },
];

/* --------------------------------------------------- choosing a treatment */

/**
 * The "if you want X, consider Y" table. Deliberately neutral - no treatment
 * is called the best one, because that depends entirely on the guest.
 */
export const gurgaonChoices = [
  { want: 'A traditional heat and steam experience', consider: 'Traditional Russian Banya' },
  { want: 'Deeper, firmer pressure', consider: 'Deep Tissue Massage' },
  { want: 'A relaxing, flowing massage', consider: 'Swedish Massage' },
  { want: 'An aromatic, slower session', consider: 'Aromatherapy Massage' },
  { want: 'To unwind after training or a match', consider: 'Sports Massage' },
  { want: 'Foot-focused relaxation', consider: 'Reflexology' },
  { want: 'A two-person booking', consider: 'Couple’s Spa Package' },
];

/* ----------------------------------------------------------- full price list */

/** The complete menu, straight from src/data/treatments.ts. Do not edit here. */
export const gurgaonPrices = [
  { name: 'Traditional Russian Banya', duration: '60 min', price: '₹2,500' },
  { name: 'Deep Tissue Massage', duration: '90 min', price: '₹3,500' },
  { name: 'Hot Stone Therapy', duration: '90 min', price: '₹4,000' },
  { name: 'Aromatherapy Massage', duration: '75 min', price: '₹3,000' },
  { name: 'Swedish Massage', duration: '60 min', price: '₹2,800' },
  { name: 'Couple’s Spa Package', duration: '120 min', price: '₹7,500' },
  { name: 'Thai Massage', duration: '75 min', price: '₹3,200' },
  { name: 'Sports Massage', duration: '60 min', price: '₹3,000' },
  { name: 'Reflexology', duration: '45 min', price: '₹2,200' },
  { name: 'Shiatsu Massage', duration: '60 min', price: '₹3,500' },
];

/* ------------------------------------------------------------- trust points */

/**
 * No superlatives. Nothing here claims "best", "number one", "most trusted"
 * or an award, because none of that is verified anywhere in this project.
 */
export const gurgaonReasons = [
  {
    title: 'One menu, one price list',
    body: 'Ten treatments from 45 minutes to two hours, and the figure on this page is the figure you are quoted when you book. There is no separate rate for guests arriving from Gurgaon.',
  },
  {
    title: 'Straight about where we are',
    body: 'We do not run a Gurgaon branch and we do not claim one. There is a single address, in Aerocity, so you know exactly where you are going before you set off.',
  },
  {
    title: 'Private treatment rooms',
    body: 'Every treatment takes place in a private room that is reset between guests, with a shower on site so you can rinse off before or after.',
  },
  {
    title: 'Sessions of different lengths',
    body: 'Forty-five minutes through to a two-hour package, so a visit can fit into an evening or take up a whole afternoon, whichever the journey justifies.',
  },
  {
    title: 'Booking by WhatsApp or phone',
    body: 'Message or call and the team replies with the slots that are genuinely free. No account to create, no deposit, no app.',
  },
  {
    title: 'Open every day',
    body: 'Nine in the morning to eleven at night, seven days a week, which leaves room for a late session after a full working day.',
  },
];

/* ---------------------------------------------------------- booking steps */

export const gurgaonSteps = [
  {
    step: '01',
    title: 'Choose a treatment',
    body: 'Pick from the cards above, or from the full menu on the services page if none of the six is quite it.',
  },
  {
    step: '02',
    title: 'Pick a date and time',
    body: 'Any day between 9:00 AM and 11:00 PM. Leave room for the road if you are coming from the Gurgaon side.',
  },
  {
    step: '03',
    title: 'Message or call',
    body: 'Send a WhatsApp message or ring the number below and say which treatment you want and roughly when.',
  },
  {
    step: '04',
    title: 'Share your details',
    body: 'Your name, how many guests, and anything the therapist should know before starting - a sore area, a preference.',
  },
  {
    step: '05',
    title: 'Wait for confirmation',
    body: 'The slot is yours once the team confirms it, and not before. You get the time, the treatment and the address back in writing.',
  },
];

/* --------------------------------------------------------------------- FAQ */

/**
 * Written for Gurgaon search intent. Two of these exist specifically to stop
 * a searcher assuming a branch that is not there - do not soften them.
 *
 * Whatever is here is also what the FAQPage structured data says, so the
 * markup and the visible text can never drift apart.
 */
export const gurgaonFaqs = [
  {
    question: 'What is a Russian spa in Gurgaon?',
    answer:
      'It is the phrase people use for a spa that offers the traditional Russian banya - a staged heat ritual - alongside a normal massage menu. To be clear about our own spa: it is not in Gurgaon. Russian Spa Mahipalpur operates from Aerocity in New Delhi, and a good share of our guests travel in from the Gurgaon side.',
  },
  {
    question: 'Do you have a branch in Gurgaon or Gurugram?',
    answer:
      'No. There is one location and one only: Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi, Delhi 110037. If you find a listing advertising a Gurgaon branch under our name, it is not us.',
  },
  {
    question: 'What massage treatments can I book?',
    answer:
      'Traditional Russian banya, Swedish, deep tissue, Thai, aromatherapy, hot stone, sports massage, reflexology, shiatsu, and a couple’s package for two guests. Each one is described in full on our services page.',
  },
  {
    question: 'How much does a massage cost?',
    answer:
      'From ₹2,200 for 45 minutes of reflexology to ₹4,000 for 90 minutes of hot stone therapy, with most sessions between ₹2,500 and ₹3,500. The couple’s package is ₹7,500 for two hours. The full list is on our pricing page.',
  },
  {
    question: 'Do you offer a full body massage?',
    answer:
      'Yes. It covers the back, shoulders, arms, legs and feet at one agreed pressure, rather than concentrating on a single area. First-time guests can book it at the ₹1,499 introductory rate, which applies to that treatment only.',
  },
  {
    question: 'Can I book a couple’s spa session?',
    answer:
      'Yes - 120 minutes at ₹7,500 for two guests in one private room, with each person choosing their own treatment style. It depends on a suitable room being free, so please confirm it when you book rather than on the day.',
  },
  {
    question: 'How far is the spa from Gurgaon?',
    answer:
      'We do not publish a distance or a driving time. It depends on where in Gurgaon you start, the route you take and the traffic at that hour, and any single figure would be wrong for most of the day. The address is in Aerocity, beside Indira Gandhi International Airport - check the route on the Get Directions link on this page before you leave.',
  },
  {
    question: 'How do I book a massage?',
    answer:
      'Message us on WhatsApp or call +91 9599547138 between 9:00 AM and 11:00 PM. Tell us the treatment and roughly when you would like to come, and the team replies with the times that are free and confirms the slot.',
  },
];
