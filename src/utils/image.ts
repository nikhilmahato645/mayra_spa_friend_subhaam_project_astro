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
