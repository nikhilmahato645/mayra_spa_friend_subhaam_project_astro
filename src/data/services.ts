/**
 * Massage / spa services offered.
 *
 * The copy in this file is the client supplied website copy - do not invent
 * new claims here. `image` holds only the KEY of a photo; the actual photo URL
 * is resolved per page (home page photos live in src/data/home-images.ts) so a
 * page can swap artwork without touching this content file.
 */

export interface Service {
  /** URL slug, used later for /services/<slug>/ detail pages. */
  slug: string;
  /** Card / heading title. */
  title: string;
  /** Short SEO friendly headline used on the services page. */
  headline: string;
  /** Full description as supplied by the client. */
  description: string;
  /** Photo key, resolved by the page that renders the card. */
  image: string;
}

export const services: Service[] = [
  {
    slug: 'thai-massage',
    title: 'Thai Massage',
    headline: 'Thai Massage in Delhi',
    description:
      'Experience a relaxing Thai Massage in Delhi with traditional stretching and pressure techniques designed to promote relaxation, flexibility and overall body comfort. At Russian Spa Mahipalpur, our trained therapists provide Thai massage in a clean, peaceful and comfortable environment, with a focus on hygiene and guest comfort. Book your session today and enjoy a refreshing Thai massage experience near Mahipalpur and Aerocity.',
    image: 'thaiMassage',
  },
  {
    slug: 'b2b-massage',
    title: 'B2B Massage',
    headline: 'B2B Massage in Delhi',
    description:
      'Enjoy a relaxing B2B Massage in Delhi at Russian Spa Mahipalpur, where comfort, privacy and professional service come together. Our massage experience is designed to help you unwind, release everyday tension and enjoy a peaceful wellness session. With a clean and comfortable environment and trained therapists, we focus on providing a refreshing spa experience for guests visiting from Mahipalpur, Aerocity and nearby Delhi NCR areas.',
    image: 'b2bMassage',
  },
  {
    slug: 'sandwich-massage',
    title: 'Sandwich Massage',
    headline: 'Sandwich Massage in Delhi',
    description:
      'Enjoy a relaxing Sandwich Massage in Delhi at Russian Spa Mahipalpur, designed to provide a soothing and refreshing wellness experience. This four-hand massage involves synchronized massage techniques performed by two trained therapists to help release everyday tension and promote deep relaxation. The session is provided in a clean, comfortable and private environment, making it a peaceful choice for guests visiting from Mahipalpur, Aerocity and nearby Delhi NCR areas.',
    image: 'sandwichMassage',
  },
  {
    slug: 'full-body-massage',
    title: 'Full Body Massage',
    headline: 'Full Body Massage in Delhi',
    description:
      'Enjoy a relaxing Full Body Massage in Delhi at Russian Spa Mahipalpur, designed to help you unwind and take a break from everyday stress. Our full body massage uses soothing techniques that can promote relaxation, ease everyday muscle tension and leave you feeling refreshed. Sessions are provided by trained therapists in a clean, comfortable and peaceful environment. Book your appointment today for a premium and rejuvenating massage experience near Mahipalpur and Aerocity.',
    image: 'fullBodyMassage',
  },
  {
    slug: 'home-spa',
    title: 'Home Spa',
    headline: 'Home Spa in Delhi',
    description:
      'Enjoy a relaxing Home Spa in Delhi with professional therapists who bring a comfortable spa experience to your home or hotel. Our home massage services are designed to help you unwind, ease everyday muscle tension and refresh your mind. At Russian Spa Mahipalpur, we focus on hygiene, comfort, privacy and professional service for a convenient wellness experience. Book your home spa session today and relax in the comfort of your own space.',
    image: 'homeSpa',
  },
  {
    slug: 'couples-massage',
    title: 'Couples Massage',
    headline: 'Couples Massage in Delhi',
    description:
      'Enjoy a relaxing Couples Massage in Delhi with your partner at Russian Spa Mahipalpur. Our couples massage sessions are designed to create a peaceful and comfortable atmosphere where both guests can unwind together. Trained therapists use soothing massage techniques to help release everyday tension and promote relaxation. Enjoy your session in a clean, private and welcoming environment near Mahipalpur and Aerocity.',
    image: 'couplesMassage',
  },
];

/** The six therapy highlights shown right under the hero section. */
export const therapyHighlights = [
  { title: 'Foreigner Therapist', image: 'highlightForeigner' },
  { title: '5 Star Hotels Spa', image: 'highlightHotel' },
  { title: 'Home Spa', image: 'highlightHomeSpa' },
  { title: 'Thai Massage', image: 'highlightThai' },
  { title: 'B2B Therapy', image: 'highlightB2b' },
  { title: 'Night Spa', image: 'highlightNight' },
];

/** Spa facilities - "How We Provide Relaxation" strip. */
export const facilities = [
  { title: 'Shower', icon: 'shower' },
  { title: 'Hammam', icon: 'hammam' },
  { title: 'Jacuzzi Bath', icon: 'jacuzzi' },
  { title: 'Steam Bath', icon: 'steam' },
  { title: 'Souna', icon: 'sauna' },
];

/** "Our Promise" tick strip. */
export const promises = [
  'Private Room',
  'Jacuzzi Bath',
  'Steam Bath',
  'Naturally Spa',
  '5 Star Hotels',
  'Foreigner Therapist',
];

export interface PricingPackage {
  name: string;
  price: string;
  priceValue: number;
  unit: string;
  features: string[];
  featured: boolean;
}

/** Package cards - "Our Exclusive Delhi Massage Spa Packages". */
export const packages: PricingPackage[] = [
  {
    name: 'Spa Outlet',
    price: '₹4999',
    priceValue: 4999,
    unit: '/Session',
    features: ['Full Body Massage', 'One Session', 'Indian therapist', 'Private Room'],
    featured: false,
  },
  {
    name: '5 Star Hotels outlets',
    price: '₹15999',
    priceValue: 15999,
    unit: '/Session',
    features: [
      'Full Body Massage',
      'One Session',
      'Foreigner therapist',
      '5 Star Hotel Room',
      'Steam With Jacuzzi Bath',
      'Free Consultation',
    ],
    featured: true,
  },
];

/** "Top Services At Massage Spa in Delhi" - three pricing entry cards. */
export const topServices = [
  { title: 'Full Body Massage in Delhi', href: '/pricing/', image: 'topFullBody' },
  { title: 'B2B Massage in Delhi', href: '/pricing/', image: 'topB2b' },
  { title: 'Hotel & Home Spa in Delhi', href: '/pricing/', image: 'topHotelHome' },
];
