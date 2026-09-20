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

/**
 * Therapist cards. Names are the client's staff names as listed on the site.
 * Photos are resolved from src/data/home-images.ts - see the note there about
 * replacing the placeholder pictures with real, consented staff photos.
 */
export const therapists = [
  { name: 'Angelina', role: 'STAFF', image: 'therapist1' },
  { name: 'Mariya', role: 'STAFF', image: 'therapist2' },
  { name: 'Elmira', role: 'STAFF', image: 'therapist3' },
  { name: 'Aksinia', role: 'STAFF', image: 'therapist4' },
];

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
