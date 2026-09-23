/**
 * NOIDA LOCATION PAGE - all copy and artwork for /russian-spa-in-noida/.
 *
 * WHY THIS PAGE IS NOT AN OUTLET PAGE
 *
 * There is no Noida outlet. The business trades from ONE address - Block -
 * Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037 (see
 * `site.address`) - and nothing anywhere in this project records a second one.
 * So this page is written for people SEARCHING from Noida, Greater Noida and
 * the eastern side of Delhi NCR, and it says so in the hero, in a panel of its
 * own, in the location section and twice in the FAQ.
 *
 * This is the same footing as /russian-spa-in-gurgaon/, but none of the
 * wording, headings or structure is shared with that page - see the page file.
 *
 * WHAT MUST NEVER APPEAR HERE
 *   - "our Noida branch / outlet / centre", "located in Noida", a Noida
 *     address, a Noida phone number, Noida opening hours, a Noida map pin;
 *   - a LocalBusiness / DaySpa schema placed in Noida. BaseLayout already
 *     emits the real DaySpa carrying the Aerocity address, and this page adds
 *     only BreadcrumbList, FAQPage and Service on top of it;
 *   - a distance, a driving time, a metro walking time, a landmark or a
 *     parking claim for any Noida sector - none is documented in this project,
 *     and the DND / Chilla / Expressway routes make any single figure wrong
 *     for most of the day;
 *   - a sector named as though we operate in it. The sectors on this page are
 *     search-intent areas guests travel FROM, and the copy says that;
 *   - medical, therapeutic, "detox" or "cure" claims, therapist
 *     certifications or nationalities, ratings, reviews, awards, guest counts,
 *     coupon codes or any Noida-only offer.
 *
 * WHAT EVERY FACT HERE IS BACKED BY
 *   - address, phone, WhatsApp, e-mail, hours: src/data/site.ts
 *   - every price and duration: src/data/treatments.ts (figures unchanged)
 *   - the ₹1,499 first visit offer, and that a shower comes with it while
 *     steam + jacuzzi belong to the hotels package: src/pages/pricing/
 *   - the facilities list: src/data/aerocity.ts (the real site's own list)
 *   - the banya sequence (staged heat, birch venik, cooling breaks, herbal
 *     tea): the verified write-up in src/data/treatments.ts
 *
 * PHOTOS: five stock photographs on the Unsplash CDN, none of which is used
 * anywhere else on this site. Every alt text describes what is in the frame
 * and nothing more - no alt text here claims to show our rooms or our staff.
 * TODO (client): replace them with photographs of the actual spa and keep the
 * alt text honest when you do.
 */

import { image } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

/* ------------------------------------------------------------------ meta */

export const noidaMeta = {
  /** 41 characters. */
  title: 'Russian Spa in Noida | Body Massage & Spa',
  /** 150 characters. */
  description:
    'Looking for a Russian spa near Noida? Explore massage treatments, the Russian banya, session prices and our Aerocity address. Book on WhatsApp or call.',
};

/* ---------------------------------------------------------------- images */

export const noidaImages = {
  /** Hero. Two hands working across a guest's upper back and shoulder. */
  hero: image(
    '1519824145371-296894a0daa9',
    'Therapist working with both hands across a guest’s upper back and shoulder',
    1400,
    900
  ),
  /** Banya band. Steam lifting off dark stones in a round wooden heater. */
  banya: image(
    '1660735698223-23a4edefa264',
    'Steam lifting off dark stones in a round wooden heater inside a timber-lined room',
    1100,
    760
  ),
  /** The session section. A hand and wrist being worked on a folded towel. */
  session: image(
    '1611073615830-9f76902c10fe',
    'A guest’s hand and wrist being worked over a folded towel during a massage',
    1000,
    700
  ),
  /** Facilities. A tiled steam room, benches either side, a lit candle. */
  steam: image(
    '1761470575018-135c213340eb',
    'Tiled steam room with benches along both walls and a single lit candle',
    1000,
    700
  ),
  /** Booking band. Two rolled towels set out on a treatment bed. */
  towels: image(
    '1706795033855-eee02f726868',
    'Two rolled towels set out on a treatment bed under soft lighting',
    900,
    620
  ),
} as const;

/* ----------------------------------------------------- treatment listing */

export interface NoidaTreatment {
  /** Two digit index, shown in the list rail. */
  index: string;
  name: string;
  /** 40-60 words, written for this page only. */
  body: string;
  /** Straight from src/data/treatments.ts - never edited here. */
  price: string;
  duration: string;
}

export const noidaTreatments: NoidaTreatment[] = [
  {
    index: '01',
    name: 'Swedish Massage',
    body: 'Long, gliding strokes at a light to medium pressure, working down from the shoulders with oil. Nothing in it is demanding, which is why guests who have spent the day in traffic or at a desk tend to pick it over anything firmer.',
    price: '₹2,800',
    duration: '60 minutes',
  },
  {
    index: '02',
    name: 'Deep Tissue Massage',
    body: 'Slower and considerably firmer, concentrated through the upper back, neck and shoulders. The ninety minutes is the point rather than an upgrade — pressure at this level cannot be hurried. Say early on if it is firmer than you wanted and the therapist eases off.',
    price: '₹3,500',
    duration: '90 minutes',
  },
  {
    index: '03',
    name: 'Thai Massage',
    body: 'Done clothed on a mat, with no oil. The therapist moves you through assisted stretches and presses along set lines of the body, so you are taken through positions rather than lying still throughout. Wear something loose if you are booking it.',
    price: '₹3,200',
    duration: '75 minutes',
  },
  {
    index: '04',
    name: 'Aromatherapy Massage',
    body: 'A gentler, unhurried session built around a scented oil blend you choose before anything begins. The pressure stays light the whole way through — the pace and the aroma are what the treatment is about, not working deeply into muscle.',
    price: '₹3,000',
    duration: '75 minutes',
  },
  {
    index: '05',
    name: 'Hot Stone Therapy',
    body: 'Smooth stones are warmed and laid along the back, then used in the therapist’s hands as the session goes on, so warmth and pressure arrive together. It is the most involved of the oil treatments and runs the full ninety minutes.',
    price: '₹4,000',
    duration: '90 minutes',
  },
  {
    index: '06',
    name: 'Traditional Russian Banya',
    body: 'The heat ritual the spa takes its name from, and not a table massage at all. You warm through in stages, a leafy birch venik is worked over you, and cooling breaks sit in the middle rather than at the end. Herbal tea to finish.',
    price: '₹2,500',
    duration: '60 minutes',
  },
];

/* --------------------------------------------------------- session stages */

/** The four stages of an appointment, used in the horizontal flow band. */
export const noidaStages = [
  {
    label: 'Before',
    body: 'A short conversation about which areas you want worked on, anything to leave alone, and how firm you like the pressure.',
  },
  {
    label: 'Settling in',
    body: 'A private room, fresh linen and towels put out for your appointment, and time to get comfortable before anything starts.',
  },
  {
    label: 'During',
    body: 'Full body work across the back, shoulders, arms, legs and feet at one agreed pressure. Ask for it lighter or firmer at any point.',
  },
  {
    label: 'After',
    body: 'Time to get up slowly rather than being moved along, and a shower on site if you booked the ₹1,499 first visit full body massage.',
  },
];

/* ------------------------------------------------- Noida search-intent areas */

/**
 * Sectors and corridors guests travel FROM. Nothing here is a branch, and the
 * visible copy beside this list says so in as many words. Do not add a
 * distance, a driving time or a landmark to any entry.
 */
export const noidaAreas = [
  'Sector 18',
  'Sector 27',
  'Sector 28',
  'Sector 50',
  'Sector 51',
  'Sector 62',
  'Sector 63',
  'Sector 76',
  'Sector 104',
  'Noida Expressway',
  'Greater Noida',
];

/* ------------------------------------------------------------- facilities */

/**
 * Only what src/data/aerocity.ts and the pricing page already confirm is on
 * site. `note` carries the honest qualifier where one applies - do not drop it.
 * `icon` maps to an inline SVG in the page file.
 */
export const noidaFacilities = [
  {
    icon: 'door',
    name: 'Private treatment rooms',
    body: 'One guest at a time, with the room reset in between.',
  },
  {
    icon: 'drop',
    name: 'Shower',
    body: 'On site, for rinsing off either side of a session.',
    note: 'Included with the ₹1,499 first visit full body massage.',
  },
  {
    icon: 'steam',
    name: 'Steam bath',
    body: 'Wet heat, taken by itself or ahead of a treatment.',
  },
  {
    icon: 'flame',
    name: 'Sauna',
    body: 'Dry, radiant heat — also where a banya session begins.',
  },
  {
    icon: 'basin',
    name: 'Hammam',
    body: 'Traditional-style warm bathing, done seated.',
  },
  {
    icon: 'waves',
    name: 'Jacuzzi bath',
    body: 'A warm soak, and not a standard inclusion.',
    note: 'Steam with a jacuzzi bath is part of the 5 Star Hotels outlets package only.',
  },
];

/* -------------------------------------------------------------- price list */

/** The complete menu, straight from src/data/treatments.ts. Do not edit here. */
export const noidaPrices = [
  { name: 'Traditional Russian Banya', duration: '60 min', price: '₹2,500' },
  { name: 'Swedish Massage', duration: '60 min', price: '₹2,800' },
  { name: 'Deep Tissue Massage', duration: '90 min', price: '₹3,500' },
  { name: 'Hot Stone Therapy', duration: '90 min', price: '₹4,000' },
  { name: 'Aromatherapy Massage', duration: '75 min', price: '₹3,000' },
  { name: 'Thai Massage', duration: '75 min', price: '₹3,200' },
  { name: 'Shiatsu Massage', duration: '60 min', price: '₹3,500' },
  { name: 'Sports Massage', duration: '60 min', price: '₹3,000' },
  { name: 'Reflexology', duration: '45 min', price: '₹2,200' },
  { name: 'Couple’s Spa Package', duration: '120 min', price: '₹7,500' },
];

/* ----------------------------------------------------------- factual points */

/**
 * Factual, not promotional. No superlative, no ranking, no rating, no award -
 * none of that is verified anywhere in this project, and a page that opens by
 * admitting it has no Noida branch cannot then claim to be the best one.
 */
export const noidaPoints = [
  {
    title: 'Ten treatments, one menu',
    body: 'From 45 minutes of reflexology to a two hour package, so a visit can be built around the time the journey leaves you.',
  },
  {
    title: 'The price you are quoted',
    body: 'Every figure on this page is the figure quoted when you book. There is no separate rate for guests arriving from Noida.',
  },
  {
    title: 'Plain about the address',
    body: 'One location, in Aerocity, shown in full on this page with a map that points at it. No branch is claimed anywhere it does not exist.',
  },
  {
    title: 'WhatsApp or phone',
    body: 'Message or call and the team replies with the slots genuinely free. No account, no deposit, no app to install.',
  },
  {
    title: 'Open every day',
    body: '9:00 AM until 11:00 PM, weekends included, so a session can go in after the working day rather than instead of it.',
  },
  {
    title: 'Private rooms throughout',
    body: 'Each treatment is in a private room with fresh linen, and a shower is on site.',
  },
];

/* ---------------------------------------------------------- booking steps */

export const noidaSteps = [
  {
    step: '1',
    title: 'Pick a treatment',
    body: 'From the list above, or the full menu on the services page if none of the six is quite it.',
  },
  {
    step: '2',
    title: 'Message or call',
    body: 'WhatsApp or ring +91 9599547138 and say which treatment you want and roughly when.',
  },
  {
    step: '3',
    title: 'Check availability',
    body: 'The team comes back with the slots actually free that day, including two-person rooms.',
  },
  {
    step: '4',
    title: 'Agree a time',
    body: 'Anywhere between 9:00 AM and 11:00 PM. Allow for the road if you are setting off from Noida.',
  },
  {
    step: '5',
    title: 'Come to Aerocity',
    body: 'Your slot is booked once the team confirms it, and not before. Check the address here before you travel.',
  },
];

/* --------------------------------------------------------------------- FAQ */

/**
 * Written for Noida search intent. The first two exist specifically to stop a
 * searcher assuming a branch that is not there - do not soften them.
 *
 * Whatever is written here is exactly what the FAQPage structured data says,
 * because the page feeds this one array to both the accordion and the schema.
 */
export const noidaFaqs = [
  {
    question: 'Is there a Russian spa near Noida?',
    answer:
      'Ours is not in Noida, and we have no branch in Noida or Greater Noida. Russian Spa Mahipalpur works from one address — Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037 — and a share of our guests travel in from the Noida side. If you find a listing advertising a Noida branch under our name, it is not us.',
  },
  {
    question: 'What massage treatments are available?',
    answer:
      'Traditional Russian banya, Swedish, deep tissue, Thai, aromatherapy, hot stone therapy, sports massage, reflexology, shiatsu, and a couple’s package. Each is described at length on our services page.',
  },
  {
    question: 'How much does a body massage cost?',
    answer:
      'From ₹2,200 for 45 minutes of reflexology up to ₹4,000 for 90 minutes of hot stone therapy, with most sessions between ₹2,500 and ₹3,500. The couple’s package is ₹7,500 for two hours.',
  },
  {
    question: 'Do you offer a full body massage?',
    answer:
      'Yes. Back, shoulders, arms, legs and feet are all worked, at one pressure agreed beforehand, instead of an hour spent on one region. First-time guests can book it at ₹1,499, an introductory rate for that treatment only.',
  },
  {
    question: 'Can couples book a session together?',
    answer:
      'Yes. The couple’s package runs two hours at ₹7,500, both guests in the same private room, and neither has to pick the same treatment as the other. It depends on a suitable room being free, so confirm it when you book rather than on the day.',
  },
  {
    question: 'What facilities are there?',
    answer:
      'Private treatment rooms, a shower, a steam bath, a sauna, a hammam and a jacuzzi bath. Not all of them form part of every treatment: the shower comes with the ₹1,499 first visit massage, and steam with a jacuzzi bath belongs to the 5 Star Hotels outlets package.',
  },
  {
    question: 'How long does it take to get there from Noida?',
    answer:
      'We do not publish a travel time or a distance. It depends on where in Noida you start, whether you take the DND, the Chilla route or the Expressway, and the hour you set off. Check the route on the Get Directions link before you leave.',
  },
  {
    question: 'How do I book a massage appointment?',
    answer:
      'Message us on WhatsApp or call +91 9599547138 any day between 9:00 AM and 11:00 PM. Say which treatment you want and roughly when, and the team replies with the times that are free.',
  },
];
