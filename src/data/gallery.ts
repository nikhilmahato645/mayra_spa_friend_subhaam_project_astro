/**
 * GALLERY PAGE IMAGES - used by src/pages/gallery/ and nothing else.
 *
 * Every photo is a real file under public/images/gallery/, one sub folder per
 * section of the page, matching the component that renders it:
 *
 *   public/images/gallery/carousel/  ->  components/gallery/SkewedCarousel.astro
 *   public/images/gallery/tilted/    ->  components/gallery/TiltedTiles.astro
 *   public/images/gallery/stack/     ->  components/gallery/ScrollStack.astro
 *   public/images/gallery/reveal/    ->  components/gallery/TileReveal.astro
 *   public/images/gallery/dolly/     ->  components/gallery/DollyGallery.astro
 *
 * All 42 photos are different - nothing is reused between sections, and
 * nothing is reused from the home page.
 *
 * FILE NAMES ARE PART OF THE SEO. Google Images reads the file name as well as
 * the alt text, which is why these are 'hot-stone-therapy.jpg' and not
 * 'image7.jpg'. Keep that habit when you swap in your own photography.
 *
 * WIDTH AND HEIGHT ARE NOT DECORATION. They are the intrinsic pixel size of
 * each file and they are what stops the page jumping around as photos load
 * (Cumulative Layout Shift, which Core Web Vitals measures). If you replace a
 * photo at a different size, update the numbers here too.
 *
 * TODO (client): these are stock photos standing in until the real studio
 * shoot is ready. Replace the files in place, keep the folder and the file
 * name, and nothing else in the codebase has to change.
 */

import { localImage } from '../utils/image';
import type { SiteImage } from '../utils/image';

export type { SiteImage };

/** A gallery photo that also carries the caption shown over it. */
export interface GalleryItem extends SiteImage {
  /** Short label on the card. */
  title: string;
  /** One line of supporting copy. */
  caption: string;
}

function item(
  src: string,
  title: string,
  caption: string,
  alt: string,
  width: number,
  height: number
): GalleryItem {
  return { ...localImage(src, alt, width, height), title, caption };
}

/* ------------------------------------------------ 1. skewed carousel (8) */

/**
 * The rooms themselves, shot portrait. The carousel turns these into angled
 * cards, so tall crops read much better here than wide ones.
 */
export const carouselImages: GalleryItem[] = [
  item(
    '/images/gallery/carousel/private-treatment-room.jpg',
    'Private Treatment Room',
    'Single room with its own shower, used for full body and deep tissue sessions.',
    'Private massage treatment room at Russian Spa Mahipalpur',
    700,
    930
  ),
  item(
    '/images/gallery/carousel/hotel-spa-suite-aerocity.jpg',
    'Hotel Spa Suite',
    'Our Aerocity suite, a two minute drive from Delhi airport.',
    'Hotel spa suite near Delhi Aerocity',
    700,
    930
  ),
  item(
    '/images/gallery/carousel/modern-massage-studio.jpg',
    'Massage Studio',
    'Bright studio room kept for aromatherapy and Swedish massage.',
    'Modern massage studio interior with white walls',
    700,
    930
  ),
  item(
    '/images/gallery/carousel/steam-room-candlelight.jpg',
    'Steam Room',
    'Steam room lit low, open to every guest before a session.',
    'Candlelit steam room at the spa',
    700,
    930
  ),
  item(
    '/images/gallery/carousel/jacuzzi-bath-suite.jpg',
    'Jacuzzi Suite',
    'Warm soak before the massage, included with the signature package.',
    'Jacuzzi bath suite at Russian Spa Mahipalpur',
    700,
    930
  ),
  item(
    '/images/gallery/carousel/indoor-pool-lounge.jpg',
    'Pool Lounge',
    'Indoor pool and loungers at the Aerocity outlet.',
    'Indoor pool and lounge chairs at the spa',
    700,
    930
  ),
  item(
    '/images/gallery/carousel/wooden-sauna-bench.jpg',
    'Wooden Sauna',
    'Dry sauna benches, the first stop in a Russian banya session.',
    'Wooden sauna benches with warm lighting',
    700,
    930
  ),
  item(
    '/images/gallery/carousel/couples-suite-interior.jpg',
    'Couples Suite',
    'Two tables, one room - booked for our couples massage.',
    'Couples massage suite with two treatment tables',
    700,
    930
  ),
];

/* -------------------------------------------------- 2. tilted tiles (12) */

/**
 * The drifting collage. These are plain SiteImages: the tiles are decorative
 * movement behind the heading, so they carry alt text but no caption.
 */
export const tiltedImages: SiteImage[] = [
  localImage('/images/gallery/tilted/warm-lit-massage-room.jpg', 'Warm lighting in a massage room', 600, 800),
  localImage('/images/gallery/tilted/thai-massage-session.jpg', 'Thai massage session in progress', 600, 800),
  localImage('/images/gallery/tilted/thai-stretch-therapy.jpg', 'Thai stretch therapy at the spa', 600, 800),
  localImage('/images/gallery/tilted/therapist-back-massage.jpg', 'Therapist giving a back massage', 600, 800),
  localImage('/images/gallery/tilted/full-body-massage-table.jpg', 'Massage table set up for a full body session', 600, 800),
  localImage('/images/gallery/tilted/home-spa-setup.jpg', 'Home spa massage setup in Delhi NCR', 600, 800),
  localImage('/images/gallery/tilted/b2b-massage-room.jpg', 'B2B massage room at the spa', 600, 800),
  localImage('/images/gallery/tilted/hotel-spa-lounge.jpg', 'Hotel spa lounge in Delhi', 600, 800),
  localImage('/images/gallery/tilted/prepared-massage-room.jpg', 'Massage room prepared for the next guest', 600, 800),
  localImage('/images/gallery/tilted/shoulder-massage-closeup.jpg', 'Close up of a shoulder massage', 600, 800),
  localImage('/images/gallery/tilted/relaxation-area.jpg', 'Relaxation area at the spa', 600, 800),
  localImage('/images/gallery/tilted/couples-massage-room.jpg', 'Couples massage room for two guests', 600, 800),
];

/* --------------------------------------------------- 3. scroll stack (5) */

/**
 * One card per signature therapy, stacked as the visitor scrolls. Wide crops,
 * because each card fills the width of the column.
 */
export const stackImages: GalleryItem[] = [
  item(
    '/images/gallery/stack/deep-tissue-back-massage.jpg',
    'Deep Tissue Massage',
    'Firm, slow pressure through the back and shoulders for knots that will not shift.',
    'Deep tissue back massage at Russian Spa Mahipalpur',
    1000,
    625
  ),
  item(
    '/images/gallery/stack/hot-stone-therapy.jpg',
    'Hot Stone Therapy',
    'Heated basalt stones worked along the spine to loosen tight muscle.',
    'Hot stone massage therapy in progress',
    1000,
    625
  ),
  item(
    '/images/gallery/stack/aromatherapy-leg-massage.jpg',
    'Aromatherapy Massage',
    'Light, flowing strokes with an oil blend you choose before the session.',
    'Aromatherapy leg massage with warm towels',
    1000,
    625
  ),
  item(
    '/images/gallery/stack/four-hand-sandwich-massage.jpg',
    'Four Hand Massage',
    'Two therapists working in time with each other, start to finish.',
    'Four hand sandwich massage with two therapists',
    1000,
    625
  ),
  item(
    '/images/gallery/stack/russian-banya-steam.jpg',
    'Russian Banya',
    'Steam, heat and cool down - the therapy this outlet is named for.',
    'Steam rising in a traditional Russian banya',
    1000,
    625
  ),
];

/* ---------------------------------------------------- 4. tile reveal (9) */

/** The small details of a visit. Square crops so the grid stays even. */
export const revealImages: GalleryItem[] = [
  item('/images/gallery/reveal/candles-spa-reception.jpg', 'Reception', 'Candles at the front desk.', 'Candles at the spa reception', 800, 800),
  item('/images/gallery/reveal/aroma-oils-tray.jpg', 'Aroma Oils', 'The blends we mix from.', 'Tray of aromatherapy massage oils', 800, 800),
  item('/images/gallery/reveal/sauna-stones-steam.jpg', 'Sauna Stones', 'Heated before every banya.', 'Steam rising from heated sauna stones', 800, 800),
  item('/images/gallery/reveal/banya-water-ladle.jpg', 'Banya Ladle', 'Water on the stones.', 'Water ladle beside a banya heater', 800, 800),
  item('/images/gallery/reveal/relaxation-bench-corner.jpg', 'Quiet Corner', 'Where you wait, and cool down.', 'Relaxation bench in a quiet corner of the spa', 800, 800),
  item('/images/gallery/reveal/wood-fired-stove.jpg', 'Wood Stove', 'The heat behind the banya room.', 'Wood fired stove in the banya room', 800, 800),
  item('/images/gallery/reveal/minimal-pool-deck.jpg', 'Pool Deck', 'Open to guests all day.', 'Pool deck at the spa', 800, 800),
  item('/images/gallery/reveal/back-massage-monochrome.jpg', 'In Session', 'A back massage, mid treatment.', 'Back massage in progress', 800, 800),
  item('/images/gallery/reveal/warm-towel-service.jpg', 'Warm Towels', 'Fresh linen for every guest.', 'Warm towels laid out for a guest', 800, 800),
];

/* --------------------------------------------------- 5. dolly gallery (8) */

/**
 * The closing tunnel above the footer. Wide crops, because each photo comes
 * straight at the camera and fills the frame as it passes.
 */
export const dollyImages: GalleryItem[] = [
  item('/images/gallery/dolly/pool-lounge-wooden-walls.jpg', 'Pool Lounge', 'Loungers beside the indoor pool.', 'Indoor pool lounge with wooden walls', 900, 620),
  item('/images/gallery/dolly/indoor-pool-window.jpg', 'Pool Window', 'Daylight over the water.', 'Indoor swimming pool beside a large window', 900, 620),
  item('/images/gallery/dolly/sauna-heating-stones.jpg', 'Sauna Stones', 'Stacked and heated for the banya.', 'Sauna interior with stacked heating stones', 900, 620),
  item('/images/gallery/dolly/banya-bucket-ladles.jpg', 'Banya Kit', 'Bucket and ladles, ready.', 'Wooden sauna with a bucket and two ladles', 900, 620),
  item('/images/gallery/dolly/steam-and-jacuzzi-area.jpg', 'Steam & Jacuzzi', 'Open to every guest.', 'Steam room and jacuzzi area at the spa', 900, 620),
  item('/images/gallery/dolly/pool-lounge-windows.jpg', 'Pool Deck', 'Chairs along the water.', 'Indoor pool with lounge chairs and windows', 900, 620),
  item('/images/gallery/dolly/spa-table-concrete-wall.jpg', 'Spa Detail', 'A quiet corner of the lounge.', 'Wooden table against a concrete spa wall', 900, 620),
  item('/images/gallery/dolly/outdoor-relaxation-bench.jpg', 'Cool Down', 'Where you sit between rounds.', 'Relaxation bench beside stacked stones', 900, 620),
];

/* --------------------------------------------------------------- totals */

/**
 * The photos that go into the ImageGallery structured data.
 *
 * tiltedImages are deliberately LEFT OUT. That band is a decorative backdrop
 * behind a heading - the component renders those tiles with alt="" and repeats
 * each one twice. Listing them as captioned ImageObjects would tell Google
 * something the page itself does not say, and the markup has to match what the
 * visitor sees.
 */
export const allGalleryImages: SiteImage[] = [
  ...carouselImages,
  ...stackImages,
  ...revealImages,
  ...dollyImages,
];
