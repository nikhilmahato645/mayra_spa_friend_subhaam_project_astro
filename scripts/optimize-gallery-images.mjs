/**
 * Generate the WebP and small-screen copies of every gallery photo.
 *
 *   npm run images
 *
 * For public/images/gallery/<section>/<name>.jpg it writes, beside it:
 *
 *   <name>.webp        same size, WebP   - what modern browsers download
 *   <name>-sm.jpg      narrow JPG        - phones, older browsers
 *   <name>-sm.webp     narrow WebP       - phones
 *
 * components/gallery/GalleryPicture.astro works those four paths out from the
 * one .jpg path in src/data/gallery.ts, so nothing else has to know about them.
 *
 * WHY: Lighthouse measured 618 KiB of waste on /gallery/ - the originals are
 * both heavier than they need to be and larger than they are ever displayed.
 * A phone showing a 210px wide card was downloading a 700px JPG.
 *
 * Re-run this after replacing any photo. It skips work that is already done,
 * so running it twice costs nothing. Delete the generated files and re-run to
 * rebuild them from scratch.
 */
import { readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.join(process.cwd(), 'public', 'images', 'gallery');

/**
 * The narrow width per section. Each one is roughly what a phone actually
 * displays at 2x, which is the number Lighthouse compares against.
 */
const SMALL_WIDTH = {
  carousel: 440,
  tilted: 380,
  stack: 620,
  reveal: 430,
  dolly: 560,
};

const WEBP = { quality: 76, effort: 5 };
const JPEG = { quality: 74, mozjpeg: true };

/** True when `out` exists and is newer than `src` - nothing to do. */
async function isFresh(src, out) {
  if (!existsSync(out)) return false;
  const [a, b] = await Promise.all([stat(src), stat(out)]);
  return b.mtimeMs >= a.mtimeMs;
}

async function run() {
  const sections = await readdir(ROOT, { withFileTypes: true });
  let written = 0;
  let skipped = 0;

  for (const section of sections) {
    if (!section.isDirectory()) continue;

    const dir = path.join(ROOT, section.name);
    const small = SMALL_WIDTH[section.name];
    if (!small) {
      console.warn(`! no SMALL_WIDTH for "${section.name}" - add one, skipping`);
      continue;
    }

    const files = (await readdir(dir)).filter(
      (file) => file.endsWith('.jpg') && !file.endsWith('-sm.jpg')
    );

    for (const file of files) {
      const src = path.join(dir, file);
      const base = file.replace(/\.jpg$/, '');

      const targets = [
        { out: path.join(dir, `${base}.webp`), width: null, webp: true },
        { out: path.join(dir, `${base}-sm.webp`), width: small, webp: true },
        { out: path.join(dir, `${base}-sm.jpg`), width: small, webp: false },
      ];

      for (const target of targets) {
        if (await isFresh(src, target.out)) {
          skipped += 1;
          continue;
        }

        let pipeline = sharp(src);
        /* withoutEnlargement: never upscale a photo that is already small. */
        if (target.width) pipeline = pipeline.resize({ width: target.width, withoutEnlargement: true });

        await pipeline[target.webp ? 'webp' : 'jpeg'](target.webp ? WEBP : JPEG).toFile(target.out);
        written += 1;
      }
    }
  }

  console.log(`gallery images: ${written} written, ${skipped} already up to date`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
