/**
 * HOME PAGE IMAGES - used by src/pages/index.astro and nothing else.
 *
 * These are TEMPORARY stock photos (Unsplash CDN) standing in until the real
 * studio photography is ready. To go live with your own pictures:
 *   1. drop the files into  public/images/hero|services|gallery|locations/
 *   2. replace the `src` below with e.g. '/images/services/thai-massage.webp'
 *   3. keep `width` / `height` accurate - they prevent layout shift (CLS),
 *      which Core Web Vitals and Google Search Console both measure.
 *
 * Every other page keeps its own image file, so changing a home page photo can
 * never affect another page.
 */

import { image, localImage, pick } from '../utils/image';
import type { SiteImage } from '../utils/image';

// Re-exported so components can `import type { SiteImage } from '../data/home-images'`.
export type { SiteImage };

export const homeImages = {
  /*
   * Hero - client-supplied banner photo (public/images/home_page/baneer_images/).
   * `src` here is the JPG fallback; the page adds a <picture><source webp>
   * itself (see the hero markup in index.astro) since this single-SiteImage
   * shape has no room for a second format.
   */
  hero: localImage(
    '/images/home_page/baneer_images/banner1.jpg',
    'Relaxing full body massage session at Russian Spa Mahipalpur',
    1920,
    755
  ),

  /* ------------------------------------------- therapy highlight tiles (6) */
  highlightForeigner: image('1540555700478-4be289fbecef', 'Foreigner therapist massage service in Delhi', 600, 700),
  highlightHotel: image('1571902943202-507ec2618e8f', '5 star hotel spa room in Delhi Aerocity', 600, 700),
  highlightHomeSpa: image('1600585154340-be6161a56a0c', 'Home spa massage service in Delhi NCR', 600, 700),
  highlightThai: image('1519823551278-64ac92734fb1', 'Thai massage therapy at a spa in Mahipalpur', 600, 700),
  highlightB2b: image('1570172619644-dfd03ed5d881', 'B2B massage therapy room in Delhi', 600, 700),
  highlightNight: image('1512290923902-8a9f81dc236c', 'Night spa ambience with candles in Delhi', 600, 700),

  /* ------------------------------------------------------ 1st visit offer */
  firstVisitOffer: image(
    '1620733723572-11c53f73a416',
    'Spa treatment room set up for a full body massage in Delhi',
    900,
    700
  ),

  /* ---------------------------------------------------------- B2B section */
  b2bSection: image(
    '1596178065887-1198b6148b2b',
    'B2B massage session at Russian Spa Mahipalpur',
    900,
    1000
  ),

  /* -------------------------------------------- foreigner therapist block */
  foreignerSection: image(
    '1600334089648-b0d9d3028eb2',
    'Professional therapist giving a back massage in Delhi',
    900,
    800
  ),

  /* -------------------------------------------- Defence Colony wide strip */
  defenceColonyBg: image('1631049307264-da0ec9d70304', '', 1920, 900),
  defenceColony: image(
    '1583416750470-965b2707b355',
    'Guests enjoying a spa experience near Defence Colony, South Delhi',
    700,
    800
  ),

  /* ------------------------------------------------------ service cards (6) */
  thaiMassage: image('1515377905703-c4788e51af15', 'Thai massage in Delhi at Russian Spa Mahipalpur', 700, 500),
  b2bMassage: image('1600334129128-685c5582fd35', 'B2B massage in Delhi at Russian Spa Mahipalpur', 700, 500),
  sandwichMassage: image('1526506118085-60ce8714f8c5', 'Four hand sandwich massage in Delhi', 700, 500),
  fullBodyMassage: image('1552693673-1bf958298935', 'Full body massage in Delhi with trained therapists', 700, 500),
  homeSpa: image('1560750588-73207b1ef5b8', 'Home spa massage service in Delhi and NCR', 700, 500),
  couplesMassage: image('1615461066159-fea0960485d5', 'Couples massage in Delhi for two guests', 700, 500),

  /* ------------------------------------------------- full body to body band */
  fullBodyBandBg: image('1631049307264-da0ec9d70304', '', 1920, 800),
  fullBodyBand: image(
    '1498843053639-170ff2122f35',
    'Trained female therapist preparing a full body massage session',
    700,
    500
  ),

  /* ---------------------------------------------------- top services (3) */
  topFullBody: image('1608571423902-eed4a5ad8108', 'Full body massage in Delhi - pricing', 600, 420),
  topB2b: image('1532926381893-7542290edf1d', 'B2B massage in Delhi - pricing', 600, 420),
  topHotelHome: image('1573461160327-b450ce3d8e7f', 'Hotel and home spa in Delhi - pricing', 600, 420),

  /* ------------------------------------------------------- promise strip bg */
  promiseBg: image('1629198688000-71f23e745b6e', '', 1920, 500),

  /* ------------------------------------------------------- therapist cards */
  /*
   * Client-supplied therapist photos, served from
   * public/images/home_page/therpists/ (image1.jpg ... image8.jpg). They are
   * read through src/data/reviews.ts by the "Our Therapists" section on the
   * home page and by the same section on /gallery/.
   *
   * TODO (client): these files are still stock portraits standing in for the
   * real staff. Overwrite image1..image8 with real, consented photos of your
   * own therapists - keep the same file names and nothing else changes.
   */
  therapist1: localImage('/images/home_page/therpists/image1.jpg', 'Massage therapist at Russian Spa Mahipalpur', 500, 620),
  therapist2: localImage('/images/home_page/therpists/image2.jpg', 'Massage therapist at Russian Spa Mahipalpur', 500, 620),
  therapist3: localImage('/images/home_page/therpists/image3.jpg', 'Massage therapist at Russian Spa Mahipalpur', 500, 620),
  therapist4: localImage('/images/home_page/therpists/image4.jpg', 'Massage therapist at Russian Spa Mahipalpur', 500, 620),
  therapist5: localImage('/images/home_page/therpists/image5.jpg', 'Massage therapist at Russian Spa Mahipalpur', 500, 620),
  therapist6: localImage('/images/home_page/therpists/image6.jpg', 'Massage therapist at Russian Spa Mahipalpur', 500, 620),
  therapist7: localImage('/images/home_page/therpists/image7.jpg', 'Massage therapist at Russian Spa Mahipalpur', 500, 620),
  therapist8: localImage('/images/home_page/therpists/image8.jpg', 'Massage therapist at Russian Spa Mahipalpur', 500, 620),

  /* ------------------------------------------------------- prime locations */
  primeKarolBagh: image('1608571423902-eed4a5ad8108', 'Spa room at our Karol Bagh outlet', 800, 560),
  primeConnaughtPlace: image('1573461160327-b450ce3d8e7f', 'Spa room at our Connaught Place outlet', 800, 560),
  primeLajpatNagar: image('1620733723572-11c53f73a416', 'Spa room at our Lajpat Nagar outlet', 800, 560),
  primeMalviyaNagar: image('1600585154340-be6161a56a0c', 'Spa room at our Malviya Nagar outlet', 800, 560),
  primeAerocity: image('1571902943202-507ec2618e8f', 'Spa room at our Aerocity outlet near Delhi Airport', 800, 560),
  primeDefenceColony: image('1583416750470-965b2707b355', 'Spa room at our Defence Colony outlet', 800, 560),
} as const;

export type HomeImageKey = keyof typeof homeImages;

/** Safe lookup used when a data file stores only an image key. */
export function homeImage(key: string): SiteImage {
  return pick(homeImages as unknown as Record<string, SiteImage>, key, 'src/data/home-images.ts');
}
