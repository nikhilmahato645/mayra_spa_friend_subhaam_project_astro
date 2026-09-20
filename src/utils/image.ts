/**
 * Image helpers shared by every image manifest.
 *
 * Each page keeps its own manifest file (src/data/home-images.ts,
 * src/data/page-images.ts, ...) so swapping a photo on one page can never
 * change another page. Only the plumbing lives here.
 */

export interface SiteImage {
  /** Absolute URL or site-relative path such as '/images/hero/spa.webp'. */
  src: string;
  /** Alt text. Leave '' for purely decorative background photos. */
  alt: string;
  /** Intrinsic size - always set it, it is what prevents layout shift (CLS). */
  width: number;
  height: number;
}

/**
 * Build an Unsplash CDN url at an exact size.
 * TEMPORARY: replace stock photos with your own files under /public/images/.
 */
export function stock(id: string, width: number, height: number): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
}

/** Build a full image object from an Unsplash id. */
export function image(id: string, alt: string, width: number, height: number): SiteImage {
  return { src: stock(id, width, height), alt, width, height };
}

/** Build a full image object from a local file in /public. */
export function localImage(src: string, alt: string, width: number, height: number): SiteImage {
  return { src, alt, width, height };
}

/** Look a key up in an image manifest and fail loudly at build time. */
export function pick(
  manifest: Record<string, SiteImage>,
  key: string,
  fileHint: string
): SiteImage {
  const found = manifest[key];
  if (!found) {
    throw new Error(`Unknown image key: ${key}. Add it to ${fileHint}`);
  }
  return found;
}

/* ------------------------------------------------- responsive gallery art */

/** The four files `npm run images` produces for one gallery photo. */
export interface ImageVariants {
  /** The original JPG - the src, and the fallback for very old browsers. */
  jpg: string;
  /** Same size, WebP. What almost every browser actually downloads. */
  webp: string;
  /** Narrow JPG for phones. */
  jpgSmall: string;
  /** Narrow WebP for phones. */
  webpSmall: string;
}

/**
 * Work the generated variants out from one '/images/gallery/x/y.jpg' path.
 *
 * The names are a convention, not a lookup: scripts/optimize-gallery-images.mjs
 * writes y.webp, y-sm.jpg and y-sm.webp beside y.jpg, so the data file only
 * ever stores the one original path.
 *
 * Anything that is not a gallery .jpg is returned unchanged in all four slots,
 * so a <picture> built from it simply serves the same file everywhere.
 */
export function variants(src: string): ImageVariants {
  if (!src.endsWith('.jpg')) {
    return { jpg: src, webp: src, jpgSmall: src, webpSmall: src };
  }
  const base = src.slice(0, -'.jpg'.length);
  return {
    jpg: src,
    webp: `${base}.webp`,
    jpgSmall: `${base}-sm.jpg`,
    webpSmall: `${base}-sm.webp`,
  };
}

/** Build one `srcset` from a narrow and a full copy. */
export function srcSet(small: string, full: string, smallWidth: number, fullWidth: number): string {
  return `${small} ${smallWidth}w, ${full} ${fullWidth}w`;
}
