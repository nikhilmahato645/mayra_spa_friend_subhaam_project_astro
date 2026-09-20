/**
 * MAHIPALPUR LOCATION PAGE - all copy and artwork for
 * /russian-spa-in-mahipalpur/.
 *
 * Like Aerocity and Gurgaon, this page does NOT go through LocationLayout /
 * src/data/locations.ts. Mahipalpur is the area the business is named after
 * and the heaviest local search term the site targets, so it gets a page
 * written for it rather than the shared skeleton.
 *
 * THE ONE THING TO GET RIGHT HERE
 * -------------------------------
 * The brand is "Russian Spa Mahipalpur", but the trading address in
 * src/data/site.ts is on Northern Access Road in AEROCITY. Aerocity and
 * Mahipalpur adjoin each other along the airport hospitality belt, and the
 * copy below says exactly that. It never prints a Mahipalpur street address,
 * never says "our Mahipalpur branch", and never implies a second outlet.
 * There is one address and it is the Aerocity one.
 *
 * WHAT IS AND IS NOT ALLOWED IN THIS FILE
 *
 * Every factual claim below already exists elsewhere in the project:
 *   - address, phone, e-mail and opening hours come from src/data/site.ts;
 *   - every price and duration is copied from src/data/treatments.ts;
 *   - the facility names are `facilities` in src/data/services.ts;
 *   - the banya details (steam, birch venik, cooling breaks, herbal tea) are
 *     the verified write-up in treatments.ts, so they may be described here;
 *   - the ₹1,499 first-visit price is live on /pricing/.
 *
 * Deliberately absent, because nothing in the project supports them:
 *   - travel times or distances to the airport, a terminal, a hotel or a metro
 *     station - "10 minutes from T3" and the like;
 *   - ratings, review counts, client numbers, years in business, awards,
 *     certifications or hotel partnerships;
 *   - therapist names, nationalities or qualifications;
 *   - any health, medical, detox or pain-relief claim;
 *   - 24/7 opening - the hours are 9:00 AM to 11:00 PM.
 *
 * The wording is written from scratch for Mahipalpur. It does not reuse the
 * home page paragraphs, the treatments.ts write-ups, the /services/ copy, or
 * the Aerocity, Vasant Kunj or Gurgaon pages - a location page that repeats a
 * sibling page is a duplicate, not a landing page.
 *
 * Photos live in public/images/locations/mahipalpur/, one folder per section,
 * the same way the gallery is organised. Run `npm run images` after adding or
 * replacing any of them.
 *
 * TODO (client): the photographs are licensed stock stand-ins. Each alt text
 * describes what is actually in that frame - none of them claims to show this
 * spa's rooms or staff. Replace the files in place, keep the names, and then
 * rewrite the alt text to describe the real room.
 */

import { localImage } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

const base = '/images/locations/mahipalpur';

/* ------------------------------------------------------------------ meta */

export const mahipalpurMeta = {
  /** 47 characters. Passed with `bareTitle` so the brand is not appended. */
  title: 'Russian Spa in Mahipalpur | Body Massage & Spa',
  /** 150 characters. */
  description:
    'Russian spa and body massage in Mahipalpur, near Aerocity and Delhi Airport. Banya, Swedish, deep tissue, Thai and hot stone therapy. Open daily 9am-11pm.',
};

/* ----------------------------------------------------------------- images */

export const mahipalpurImages = {
  hero: localImage(
    `${base}/hero/russian-spa-mahipalpur.jpg`,
    'Lamplit stone steam room with tiled benches and a low central fountain',
    1600,
    820
  ),
  banya: localImage(
    `${base}/banya/russian-banya-mahipalpur.jpg`,
    'Wooden sauna cabin with a slatted bench, timer dials and a window',
    1000,
    750
  ),
  fullBody: localImage(
    `${base}/treatments/full-body-massage-mahipalpur.jpg`,
    'Therapist working along a guest’s back with a wooden roller during a full body session',
    1000,
    700
  ),
  deepTissue: localImage(
    `${base}/treatments/deep-tissue-massage-mahipalpur.jpg`,
    'Firm pressure applied to the shoulder and upper arm of a guest lying face up',
    700,
    520
  ),
  hotStone: localImage(
    `${base}/treatments/hot-stone-therapy-mahipalpur.jpg`,
    'Row of smooth dark stones resting along a guest’s back during a hot stone treatment',
    700,
    520
  ),
  aromatherapy: localImage(
    `${base}/treatments/aromatherapy-massage-mahipalpur.jpg`,
    'Overhead view of a shoulder massage beside a bowl of floating flowers',
    700,
    520
  ),
  thai: localImage(
    `${base}/treatments/thai-massage-mahipalpur.jpg`,
    'Assisted leg and hip stretch performed on a floor mat in loose clothing',
    700,
    520
  ),
  reflexology: localImage(
    `${base}/treatments/reflexology-mahipalpur.jpg`,
    'Pair of feet resting in a bowl of water scattered with orchid petals',
    700,
    520
  ),
  room: localImage(
    `${base}/experience/massage-room-mahipalpur.jpg`,
    'Treatment room with a made-up massage table, a patterned rug and folded towels',
    1000,
    700
  ),
  lounge: localImage(
    `${base}/facilities/spa-relaxation-area-mahipalpur.jpg`,
    'Relaxation area with armchairs, tall planters and a lit display cabinet',
    1000,
    700
  ),
} as const satisfies Record<string, SiteImage>;

/* ------------------------------------------------------------- treatments */

export interface MahipalpurTreatment {
  name: string;
  /** 40-70 words, written for this page - not the /services/ copy. */
  body: string;
  price: string;
  duration: string;
}

/**
 * All ten treatments, in menu order. Price and duration are the authoritative
 * figures from src/data/treatments.ts; change them there and here together.
 */
export const mahipalpurTreatments: MahipalpurTreatment[] = [
  {
    name: 'Traditional Russian Banya',
    body: 'The bathing ritual the spa is named after. Steam and heat build gradually, aromatic birch venik work follows, and cooling breaks sit between the stages. Herbal tea closes it. Booked by guests who want something other than an hour on a table.',
    price: '₹2,500',
    duration: '60 minutes',
  },
  {
    name: 'Deep Tissue Massage',
    body: 'Slow, firm work through the shoulders, neck and lower back, aimed at the tight bands a lighter massage passes over. The therapist builds pressure in stages and asks how it is landing, so the depth stays where you want it.',
    price: '₹3,500',
    duration: '90 minutes',
  },
  {
    name: 'Hot Stone Therapy',
    body: 'Smooth warmed stones rest along the back and sit in the therapist’s hands while they work. The warmth changes the character of the session rather than the technique: slower and heavier than a plain oil massage of the same length.',
    price: '₹4,000',
    duration: '90 minutes',
  },
  {
    name: 'Aromatherapy Massage',
    body: 'A lighter, unhurried massage built around a blended oil you choose before the session starts. The scent stays in the room while the therapist works at a gentle, even pressure. The quietest thing on the menu.',
    price: '₹3,000',
    duration: '75 minutes',
  },
  {
    name: 'Swedish Massage',
    body: 'Long, flowing strokes across the back, arms and legs with a light oil, at a pressure that stays comfortable throughout. The most straightforward treatment here, and the one most first-time guests choose. Ask and the therapist goes firmer.',
    price: '₹2,800',
    duration: '60 minutes',
  },
  {
    name: "Couple's Spa Package",
    body: 'Two hours arranged for two guests together. It needs a room and two therapists set aside, so it is booked ahead rather than walked in. Send the date and time you have in mind and the team will confirm what is possible.',
    price: '₹7,500',
    duration: '120 minutes',
  },
  {
    name: 'Thai Massage',
    body: 'No oil and no table. You stay in loose clothing on a mat while the session moves through assisted stretches and steady palm pressure along the limbs and back. Expect to be moved and turned rather than to lie still.',
    price: '₹3,200',
    duration: '75 minutes',
  },
  {
    name: 'Sports Massage',
    body: 'Focused work on the legs, hips and shoulders at a firmer pressure, usually booked after training or a long day on your feet. Less about drifting off than spending the hour where it is needed. Say where at the start.',
    price: '₹3,000',
    duration: '60 minutes',
  },
  {
    name: 'Reflexology',
    body: 'Forty-five minutes on the feet and lower legs, using thumb and finger pressure across the sole, heel and toes. The shortest session on the menu, and easy to fit into a gap when you do not want a full body treatment.',
    price: '₹2,200',
    duration: '45 minutes',
  },
  {
    name: 'Shiatsu Massage',
    body: 'Pressure applied in a steady, repeating rhythm with thumbs, palms and elbows, held briefly at each point rather than stroked along the muscle. Performed with you clothed, at a calm and deliberate pace.',
    price: '₹3,500',
    duration: '60 minutes',
  },
];

/* ------------------------------------------------- "which one" comparison */

/** Preference, not ranking - no treatment here is presented as better. */
export const mahipalpurChooser = [
  { want: 'A traditional heat and steam experience', pick: 'Traditional Russian Banya' },
  { want: 'Firmer pressure on tight shoulders or back', pick: 'Deep Tissue Massage' },
  { want: 'An easy, relaxing full body massage', pick: 'Swedish Massage' },
  { want: 'A scented, gentle session', pick: 'Aromatherapy Massage' },
  { want: 'Warmth through the session', pick: 'Hot Stone Therapy' },
  { want: 'To be stretched rather than rubbed', pick: 'Thai Massage' },
  { want: 'Recovery after training or a long day', pick: 'Sports Massage' },
  { want: 'Something short, with feet only', pick: 'Reflexology' },
  { want: 'To stay clothed during the treatment', pick: 'Shiatsu Massage' },
  { want: 'To book for two people together', pick: "Couple's Spa Package" },
];

/* ---------------------------------------------------------------- pricing */

/** Identical figures to /pricing/ and to treatments.ts. */
export const mahipalpurPrices = [
  { name: 'Traditional Russian Banya', duration: '60 min', price: '₹2,500' },
  { name: 'Deep Tissue Massage', duration: '90 min', price: '₹3,500' },
  { name: 'Hot Stone Therapy', duration: '90 min', price: '₹4,000' },
  { name: 'Aromatherapy Massage', duration: '75 min', price: '₹3,000' },
  { name: 'Swedish Massage', duration: '60 min', price: '₹2,800' },
  { name: "Couple's Spa Package", duration: '120 min', price: '₹7,500' },
  { name: 'Thai Massage', duration: '75 min', price: '₹3,200' },
  { name: 'Sports Massage', duration: '60 min', price: '₹3,000' },
  { name: 'Reflexology', duration: '45 min', price: '₹2,200' },
  { name: 'Shiatsu Massage', duration: '60 min', price: '₹3,500' },
];

/* ------------------------------------------------------------- trust points */

/** Factual, checkable statements only - no "best", "No. 1" or "top rated". */
export const mahipalpurReasons = [
  {
    title: 'On the Mahipalpur-Aerocity belt',
    body: 'We trade from Northern Access Road in Aerocity, the district that runs straight on from Mahipalpur beside the airport.',
  },
  {
    title: 'Ten treatments, not three',
    body: 'Banya, Swedish, deep tissue, Thai, aromatherapy, hot stone, sports, shiatsu, reflexology and a package for two.',
  },
  {
    title: 'Prices printed up front',
    body: 'Every rate and session length on this page matches the menu on /pricing/. Nothing is quoted only on arrival.',
  },
  {
    title: 'Sessions from 45 to 120 minutes',
    body: 'Short reflexology visits through to a two-hour couple’s booking, so the treatment can fit the time you have.',
  },
  {
    title: 'A private room for every treatment',
    body: 'Treatments are given in a private room that is cleaned and reset with fresh linen between guests.',
  },
  {
    title: 'Booking by WhatsApp or phone',
    body: 'Message or ring whichever suits. The team replies with what is actually free before anything is held.',
  },
];

/* -------------------------------------------------------------- the visit */

export const mahipalpurSteps = [
  {
    step: '01',
    title: 'Choose a treatment',
    body: 'Pick from the menu above, or describe what you are after and let the team suggest something that fits.',
  },
  {
    step: '02',
    title: 'Pick a date and time',
    body: 'Have a day and a rough time in mind. Evenings fill first, so a little notice helps.',
  },
  {
    step: '03',
    title: 'Send your details',
    body: 'Your name, a number to reply to, and the treatment you want. The contact form or WhatsApp both work.',
  },
  {
    step: '04',
    title: 'Wait for the reply',
    body: 'Sending a form or a message is a request, not a booking. The team checks the diary and answers.',
  },
  {
    step: '05',
    title: 'Get your confirmation',
    body: 'Once the team confirms the slot back to you, it is held. Only then is the appointment made.',
  },
];

/* --------------------------------------------------------------------- FAQ */

/**
 * Eight questions, all Mahipalpur specific. These are the exact strings fed to
 * faqSchema(), so the markup and the visible page can never drift apart.
 */
export const mahipalpurFaqs = [
  {
    question: 'Where is the Russian Spa in Mahipalpur located?',
    answer:
      'Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037. Aerocity adjoins Mahipalpur along the airport belt, so it is the nearest outlet for anyone searching in the area. There is one address, and the map on this page points to it.',
  },
  {
    question: 'What massage treatments are available?',
    answer:
      'Ten: the Traditional Russian Banya, Swedish, deep tissue, Thai, aromatherapy, sports, shiatsu and reflexology, hot stone therapy, and a package for two. Sessions run from 45 to 120 minutes.',
  },
  {
    question: 'How much does a massage cost in Mahipalpur?',
    answer:
      'Reflexology is ₹2,200 for 45 minutes and the Banya ₹2,500 for 60. Swedish is ₹2,800, Thai ₹3,200, deep tissue ₹3,500 for 90 minutes and hot stone ₹4,000 for 90. The full menu is on the pricing page.',
  },
  {
    question: 'Is there an offer for a first visit?',
    answer:
      'Yes. A full body massage with a shower is ₹1,499 on a first appointment. It covers that one session; every other treatment is charged at its listed price.',
  },
  {
    question: 'Do you offer a full body massage?',
    answer:
      'Yes, and it is the treatment most first-time guests book. You choose the style and the length, and the pressure is agreed with the therapist before it starts.',
  },
  {
    question: 'Do you offer a Traditional Russian Banya?',
    answer:
      'Yes - ₹2,500 for 60 minutes. It is a steam bathing ritual with birch venik work and cooling breaks rather than a table massage, so guests often pair it with a shorter treatment.',
  },
  {
    question: 'Is the spa near Delhi Airport?',
    answer:
      'The address is in Aerocity, beside Indira Gandhi International Airport. We do not publish a travel time; it depends on your terminal, route and the traffic. Open daily, 9:00 AM to 11:00 PM.',
  },
  {
    question: 'Can I book a session for two people?',
    answer:
      "The Couple's Spa Package is 120 minutes for two at ₹7,500. It is arranged in advance, so send the date and time you want and the team will confirm what is possible.",
  },
];
