/**
 * DEFENCE COLONY LOCATION PAGE - all copy and artwork for
 * /russian-spa-in-defence-colony/.
 *
 * THE ONE THING TO GET RIGHT HERE
 *
 * There is no Defence Colony branch. The business trades from a SINGLE
 * address - Northern Access Road, Aerocity, New Delhi (see `site.address`) -
 * and nothing in this project says otherwise. Defence Colony also has several
 * real, unrelated spa businesses of its own; this page must never read as if
 * we were one of them. So the page is written for somebody in or around
 * Defence Colony who is searching for a spa, and it says plainly where we
 * actually are. Same rule as the Gurgaon and Karol Bagh pages.
 *
 * NEVER write on this page:
 *   - "our Defence Colony branch / outlet / centre", "located in Defence
 *     Colony", or anything that implies a second address;
 *   - a Defence Colony address, phone number, opening hours or map pin;
 *   - another business's listing, rating, review or photograph;
 *   - a second LocalBusiness in the structured data (BaseLayout already emits
 *     DaySpa with the real Aerocity address on every page);
 *   - a distance, driving time, metro walk or landmark gap to anywhere. None
 *     of it is verified in the project, and inventing it is exactly how a
 *     location page turns into a doorway page.
 *
 * Everything factual below traces back to existing project data:
 *   - address, phone, WhatsApp, hours, maps URL: src/data/site.ts
 *   - every price and duration: src/data/treatments.ts
 *   - the facilities list: src/data/services.ts `facilities` + private rooms
 *   - the banya ritual (steam, birch venik, cooling breaks, herbal tea):
 *     the verified write-up in src/data/treatments.ts
 *
 * Also absent, deliberately: therapist nationalities or certifications,
 * customer counts, years in business, awards, ratings, superlatives ("best",
 * "number one", "top rated"), and any health, medical or "detox" claim.
 *
 * The wording is written fresh for this page. It does not reuse the home page,
 * the services copy, the treatment write-ups, or the Aerocity, Vasant Kunj,
 * Gurgaon, Saket, Hauz Khas or Karol Bagh pages - a set of location pages that
 * say the same thing in the same order is a set of duplicates.
 *
 * LENGTH: the page is kept deliberately tight. Every string below has been
 * trimmed at least once; if you add to one, take the words off another rather
 * than letting the page drift past ~1,500 words of body copy.
 *
 * PHOTOS: unlike the other outlet pages, which read local files from
 * public/images/locations/<area>/, this page uses five remote stock photos
 * from the Unsplash CDN (the same `image()` helper the home, services and
 * contact pages use). Each one was checked before its alt text was written -
 * no alt text here claims to show a specific room of ours or a member of
 * staff. When the client supplies real photography, drop the files under
 * public/images/locations/defence-colony/, swap these `image()` calls for
 * `localImage()`, run `npm run images`, and set `usesUnsplash={false}` on the
 * page's BaseLayout.
 */

import { image } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

/* ------------------------------------------------------------------ meta */

export const defenceColonyMeta = {
  /** 44 characters. */
  title: 'Russian Spa in Defence Colony | Body Massage',
  /** 147 characters. */
  description:
    'Russian spa and body massage for Defence Colony and South Delhi guests. Banya, Swedish, deep tissue, Thai and hot stone sessions. Book on WhatsApp.',
};

/* ----------------------------------------------------------------- images */

/**
 * Five photos, no more - this page carries its weight in text, not pictures.
 * Each id was opened and looked at before the alt text below was written.
 */
export const defenceColonyImages = {
  /** Hero. Hands working across a guest's back on a towelled table. */
  hero: image(
    '1639162906614-0603b0ae95fd',
    'Therapist working across a guest’s upper back during a body massage',
    1600,
    1000
  ),
  /** Banya band. A ladle of water going over hot stones, steam rising. */
  banya: image(
    '1741601274134-fa98352f1c95',
    'Water poured from a ladle over hot stones, sending steam through a banya',
    1100,
    760
  ),
  /** Facilities. Wood-lined heat room, tiered benches, round stone heater. */
  heatRoom: image(
    '1712659604528-b179a3634560',
    'Wood-lined heat room with tiered benches and a round stone heater',
    1000,
    720
  ),
  /** Treatments feature. Warm stones resting in a line along the back. */
  hotStone: image(
    '1745327883348-8d78cb4661b0',
    'Row of warmed stones resting along a guest’s back during a treatment',
    1000,
    720
  ),
  /** Location band. Quiet lounge with treatment beds and seating. */
  lounge: image(
    '1693578538512-fc66f318c833',
    'Calm, low-lit spa lounge with treatment beds, planting and seating',
    1000,
    700
  ),
} as const;

/* --------------------------------------------------------- treatment cards */

export interface DefenceColonyTreatment {
  name: string;
  /** ~40 words. Written for this page; not the /services/ copy. */
  body: string;
  price: string;
  duration: string;
}

/**
 * Six cards, text only. The Aerocity page photographs half its treatment
 * cards; this one does not, which is part of what keeps the two layouts
 * visibly different.
 */
export const defenceColonyTreatments: DefenceColonyTreatment[] = [
  {
    name: 'Swedish Massage',
    body: 'Long, unhurried strokes at a light to medium pressure, covering the whole body rather than one area. It asks nothing of you, which is why it is the usual pick for a first appointment.',
    price: '₹2,800',
    duration: '60 minutes',
  },
  {
    name: 'Deep Tissue Massage',
    body: 'Slower hands and firmer pressure, held on the tight bands across the shoulders, neck and lower back that a gentler session glides over. Say early on if it is more than you want.',
    price: '₹3,500',
    duration: '90 minutes',
  },
  {
    name: 'Thai Massage',
    body: 'No oil and no table. You stay clothed on a floor mat while the therapist guides you through assisted stretches and presses. It feels less like being massaged and more like being moved.',
    price: '₹3,200',
    duration: '75 minutes',
  },
  {
    name: 'Aromatherapy Massage',
    body: 'You choose a scented oil blend before anything begins, and the session is built around pace rather than pressure. Pick it when the aim is to slow down, not to work into a sore shoulder.',
    price: '₹3,000',
    duration: '75 minutes',
  },
  {
    name: 'Hot Stone Therapy',
    body: 'Smooth warmed stones are laid along the back, then worked over the muscles alongside the therapist’s hands. The warmth lets firm pressure arrive gradually rather than all at once.',
    price: '₹4,000',
    duration: '90 minutes',
  },
  {
    name: 'Traditional Russian Banya',
    body: 'The one treatment here that is not a massage. It is a heat ritual taken in stages, with a birch venik and cooling breaks between rounds — and the reason Russian is in our name.',
    price: '₹2,500',
    duration: '60 minutes',
  },
];

/* ----------------------------------------------------------- price summary */

/** Straight from src/data/treatments.ts. Do not edit these figures here. */
export const defenceColonyPrices = [
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
 * listed in src/data/services.ts - nothing new is introduced here.
 */
export const defenceColonyFacilities = [
  { icon: 'room', name: 'Private treatment room', body: 'Every massage is in a private room, reset between guests.' },
  { icon: 'shower', name: 'Shower', body: 'On site, to rinse off before a session or after one.' },
  { icon: 'steam', name: 'Steam bath', body: 'A heated steam room, part of certain packages rather than every massage.' },
  { icon: 'sauna', name: 'Sauna', body: 'Dry heat, and the opening stage of the traditional banya.' },
  { icon: 'hammam', name: 'Hammam', body: 'A warm bathing area in the traditional style.' },
  { icon: 'jacuzzi', name: 'Jacuzzi bath', body: 'A warm soak, included with some packages rather than a standard treatment.' },
];

/* -------------------------------------------------- what to tell us first */

/**
 * The "comfortable experience" section. Deliberately framed as things the
 * GUEST decides, not as claims about our staff - the project verifies no
 * therapist qualification, nationality or training, so none is asserted.
 */
export const defenceColonyPreferences = [
  { title: 'Pressure', body: 'Light, medium or firm — and you can change your mind mid-session.' },
  { title: 'Style', body: 'Oil on a table, or clothed work on a mat. They feel nothing alike.' },
  { title: 'Length', body: 'Sessions run from 45 to 120 minutes depending on the treatment.' },
  { title: 'Focus', body: 'Name the area you want time spent on, or ask for an even pass.' },
  { title: 'Quiet', body: 'Some guests like to talk, some would rather not. Either is fine.' },
  { title: 'Anything to avoid', body: 'Mention a sore spot, a recent injury, or an oil you would rather skip.' },
];

/* ------------------------------------------------------ what to expect */

export const defenceColonyExpectations = [
  'Ten individual treatments plus a couple’s package.',
  'Every price and session length published up front.',
  'Appointment booking, by WhatsApp or by phone.',
  'A private treatment room for every massage.',
  'The traditional Russian banya alongside the massage menu.',
  'Open every day, 9:00 AM to 11:00 PM.',
];

/* -------------------------------------------------------------- the visit */

export const defenceColonySteps = [
  {
    step: '1',
    title: 'Pick a treatment',
    body: 'Choose from the menu above, or describe what is bothering you and let the team suggest one.',
  },
  {
    step: '2',
    title: 'Message or call',
    body: 'WhatsApp or ring +91 9599547138, and say you are travelling from Defence Colony.',
  },
  {
    step: '3',
    title: 'Check availability',
    body: 'The team replies with the slots genuinely free. Nothing is held until they say so.',
  },
  {
    step: '4',
    title: 'Agree a time',
    body: 'Settle on a slot that suits your journey. Tell us then if you are working to a deadline.',
  },
  {
    step: '5',
    title: 'Come in',
    body: 'Come to the Northern Access Road address in Aerocity. The therapist talks it through first.',
  },
];

/* --------------------------------------------------------------------- FAQ */

/**
 * Written for Defence Colony specifically. These are NOT the home page
 * questions, nor the Aerocity, Karol Bagh or Gurgaon ones - this list answers
 * what somebody searching for a spa around Defence Colony and South Delhi
 * would actually type.
 *
 * Whatever is here is also what the FAQPage structured data says, so the two
 * can never drift apart. Do not add a question you are not willing to have
 * shown in a search result.
 */
export const defenceColonyFaqs = [
  {
    question: 'Is there a Russian spa near Defence Colony?',
    answer:
      'We do not have a branch in Defence Colony. Russian Spa Mahipalpur trades from one address — Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi 110037 — and South Delhi guests travel to us.',
  },
  {
    question: 'What massage treatments are available?',
    answer:
      'Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology, shiatsu, sports and full body massage, the traditional Russian banya, and a couple’s package. Each is described on our services page.',
  },
  {
    question: 'How much does a massage cost?',
    answer:
      'Individual treatments run from ₹2,200 for 45 minutes of reflexology to ₹4,000 for 90 minutes of hot stone therapy. The couple’s package is ₹7,500 for 120 minutes.',
  },
  {
    question: 'Is the spa reachable from South Extension?',
    answer:
      'Yes, guests travel to us from across South Delhi. We publish no travel time or distance, because it depends on your route and the traffic — check the map on this page.',
  },
  {
    question: 'Can I book a full body massage?',
    answer:
      'Yes. It covers the back, shoulders, arms and legs in one session, at a pressure you agree beforehand. It is the treatment the ₹1,499 first-visit price applies to.',
  },
  {
    question: 'Can two people book a session together?',
    answer:
      'Yes. The Couple’s Spa Package runs 120 minutes at ₹7,500 for two guests in one private room, each choosing their own style. Confirm it when you book.',
  },
  {
    question: 'What facilities are available?',
    answer:
      'A private treatment room for every massage, plus a shower, steam bath, sauna, hammam and jacuzzi bath. The steam and jacuzzi come with certain packages, so ask what your booking covers.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Message us on WhatsApp or call +91 9599547138 between 9:00 AM and 11:00 PM, any day. Say which treatment and roughly when, and the team replies with the times free.',
  },
];
