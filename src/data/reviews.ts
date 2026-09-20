/**
 * Google reviews, counters and FAQs.
 *
 * IMPORTANT - nothing in this file may be invented. Every review below was
 * supplied by the client from their own Google Business Profile. If a review
 * is edited or removed on Google, update it here too.
 *
 * These reviews are displayed as plain testimonials only. They are deliberately
 * NOT wired into AggregateRating / Review structured data: Google's review
 * snippet policy does not allow a business to mark up reviews it collected and
 * republished on its own site, and doing it anyway risks a manual action.
 * The live Google rating already shows in the Business Profile.
 */

export interface Review {
  author: string;
  /** Relative age exactly as shown on the Google profile. */
  when: string;
  rating: 1 | 2 | 3 | 4 | 5;
  body: string;
}

/** Name of the Google Business Profile these reviews belong to. */
export const reviewSource = {
  profileName: 'Spa In Aerocity',
  totalLabel: '66 Google reviews',
  /** TODO (client): paste the "Write a review" link from your Business Profile. */
  writeReviewUrl: '#',
};

export const reviews: Review[] = [
  {
    author: 'MG SCAR',
    when: '1 year ago',
    rating: 5,
    body: 'Had a peaceful time at Aerocity Spa, Mahipalpur. The service quality was excellent and very professional. Perfect place to unwind after a long day.',
  },
  {
    author: 'Londa Gamer',
    when: '1 year ago',
    rating: 5,
    body: 'Aerocity Spa offers great service in a clean, relaxing setting. Their team is skilled and polite throughout. Highly recommend for a refreshing spa day.',
  },
  {
    author: 'Saurav Jha',
    when: '1 year ago',
    rating: 5,
    body: 'Felt completely refreshed after my visit. Definitely coming back for another session!',
  },
  {
    author: 'Pranav koli Koli',
    when: '1 year ago',
    rating: 5,
    body: 'Lovely ambiance and soothing music made it a perfect self-care day. Highly recommended.',
  },
  {
    author: 'A M',
    when: '1 year ago',
    rating: 5,
    body: 'Great service at a decent price. Staffs were very sweet and welcoming. Had an amazing time there, would love to visit again.',
  },
  {
    author: 'ADITYA Gupta',
    when: '1 year ago',
    rating: 5,
    body: 'Booked the couple’s massage and it was totally worth it! Calm vibes and skilled therapists made it a wonderful experience.',
  },
  {
    author: 'Munnu Kumar',
    when: '1 year ago',
    rating: 5,
    body: 'Best massage parlor delhi spa in aerocity.',
  },
  {
    author: 'Kuldeep Rock',
    when: '1 year ago',
    rating: 5,
    body: 'All staff good.',
  },
];

/* ------------------------------------------------------------- counters */

/** Counter strip. Figures supplied by the client. */
export const counters = [
  { value: 8, suffix: '', label: 'Years Experience' },
  { value: 12, suffix: '', label: 'Branches' },
  { value: 45, suffix: '', label: 'Massage & Treatments' },
  { value: 8500, suffix: '', label: 'Happy Clients' },
];

/* --------------------------------------------------------- team members */

export interface Therapist {
  /** Display name shown on the card. */
  name: string;
  /** Short line under the name - what this therapist is booked for. */
  role: string;
  /** Shown as a badge on the photo, and used for the alt text. */
  origin: 'Russian' | 'Indian';
  /** One or two sentences describing the therapist's work. */
  description: string;
  /** Key in src/data/home-images.ts - image1..image8 under /therpists/. */
  image: string;
}

/**
 * Therapist cards, shown in full on both the home page and /gallery/. Each card carries a call button and a WhatsApp button, both
 * built from the single number in src/data/site.ts.
 *
 * Four Russian and four Indian therapists, interleaved so the two sets are
 * mixed through the grid rather than grouped. `origin` is what the badge on
 * each photo shows, and the grid can also be filtered down to one of them.
 *
 * There is deliberately no star rating on these cards: a rating the business
 * writes about its own staff is not a real review, and Google's review snippet
 * policy does not allow self-published ratings. Do not add one back.
 *
 * TODO (client): names and descriptions here are placeholders to match the
 * placeholder photos. Replace them with your real staff before going live.
 */
export const therapists: Therapist[] = [
  {
    name: 'Angelina',
    origin: 'Russian',
    role: 'Deep Tissue & Swedish',
    description:
      'Eight years with deep tissue and Swedish massage. Works at a firm, steady pressure and checks in through the session.',
    image: 'therapist1',
  },
  {
    name: 'Priya Sharma',
    origin: 'Indian',
    role: 'Aromatherapy & Relaxation',
    description:
      'Trained in aromatherapy and relaxation massage. Picks the oil blend with you before the session starts.',
    image: 'therapist2',
  },
  {
    name: 'Mariya',
    origin: 'Russian',
    role: 'Hot Stone & Body Spa',
    description:
      'Specialises in hot stone therapy and full body spa rituals for tired shoulders, back and legs.',
    image: 'therapist3',
  },
  {
    name: 'Anjali Verma',
    origin: 'Indian',
    role: 'Thai & Stretch Therapy',
    description:
      'Thai massage and assisted stretching. A good fit if you sit at a desk all day or train regularly.',
    image: 'therapist4',
  },
  {
    name: 'Elmira',
    origin: 'Russian',
    role: 'Sports & Deep Tissue',
    description:
      'Sports and deep tissue work for stiff muscles and recovery between training days.',
    image: 'therapist5',
  },
  {
    name: 'Neha Kapoor',
    origin: 'Indian',
    role: 'Couples & Signature Spa',
    description:
      'Handles couples sessions and our signature spa package, start to finish, in a private room.',
    image: 'therapist6',
  },
  {
    name: 'Aksinia',
    origin: 'Russian',
    role: 'Russian Banya & Full Body',
    description:
      'Traditional Russian banya treatments and full body massage, the therapies our Mahipalpur outlet is known for.',
    image: 'therapist7',
  },
  {
    name: 'Kavya Nair',
    origin: 'Indian',
    role: 'Reflexology & Head Massage',
    description:
      'Reflexology, foot work and head massage - the short sessions guests book on a lunch break.',
    image: 'therapist8',
  },
];

/** The therapists from one country, in the order above. */
export function therapistsFrom(origin: Therapist['origin']): Therapist[] {
  return therapists.filter((person) => person.origin === origin);
}

/* ------------------------------------------------------- booking steps */

/**
 * "How To Book a Massage Spa in Delhi?" - these four steps only restate the
 * client's own instruction: call or WhatsApp, and the team confirms.
 */
export const bookingSteps = [
  { step: '01', title: 'Call or WhatsApp Us', body: 'Send us a message on WhatsApp or give us a call.' },
  { step: '02', title: 'Tell Us What You Need', body: 'Share the massage you are looking for and your preferred outlet.' },
  { step: '03', title: 'We Confirm Your Slot', body: 'Our team gets in touch with you to confirm your appointment.' },
  { step: '04', title: 'Visit and Relax', body: 'Arrive at the outlet at your booked time and enjoy your session.' },
];
