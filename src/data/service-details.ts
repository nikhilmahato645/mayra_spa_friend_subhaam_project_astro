/**
 * LONG-FORM COPY FOR /services/ - one detailed write-up per treatment.
 *
 * The home page prints `treatment.cardText` from src/data/treatments.ts (a
 * short excerpt) and links to this page for the rest. This file supplies that
 * "rest": a longer, differently-angled paragraph per treatment, plus a short,
 * separately-worded summary used only in this page's Service schema (kept
 * distinct from `treatment.summary`, which is already used in the home page's
 * schema, so the same sentence is not published twice under two different
 * URLs).
 *
 * Price, duration, name and photo are NOT repeated here - they are looked up
 * from src/data/treatments.ts by `slug` when the page renders, so there is
 * still exactly one place to edit a price.
 *
 * No medical or outcome claims are made anywhere in this file - see the
 * project-wide rule in src/utils/schema.ts.
 */

export interface ServiceDetail {
  /** Must match a `slug` in src/data/treatments.ts. */
  slug: string;
  /** ~100-150 word write-up, one paragraph, shown on /services/. */
  body: string;
  /** One factual sentence, used only in this page's Service schema. */
  schemaSummary: string;
  /** Unique, descriptive alt text for this treatment's photo on this page. */
  imageAlt: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'traditional-russian-banya',
    body: "The Russian Banya is one of the oldest bathing traditions in Eastern Europe, built around steam and controlled heat rather than the oil-based strokes used in a typical massage. The session opens with a gradual rise in heat so your body has time to adjust before the steam builds further. A birch venik is worked lightly and rhythmically over the back, shoulders and legs - a technique carried over from the original bathhouse practice - alternated with short cooling breaks so the heat never feels constant. Herbal tea is served once the session ends. Because it runs on heat and steam rather than pressure, the Banya may suit guests who want a change from a standard massage or simply enjoy the ritual of a proper steam bath.",
    schemaSummary:
      'A heat and steam-based Russian bathing ritual with birch venik work and herbal tea, offered as a 60-minute session.',
    imageAlt: 'Traditional Russian Banya treatment in Mahipalpur',
  },
  {
    slug: 'deep-tissue-massage',
    body: "Deep Tissue Massage is built around firmer, slower pressure rather than the lighter gliding strokes used in a relaxation massage. Before the session starts, your therapist asks which areas feel tight and how much pressure you're comfortable with, then works through the back, shoulders, hips and legs in longer, more deliberate passes, spending extra time on spots that need it rather than moving through the body on a fixed schedule. The pace is unhurried on purpose - working into tight muscle gradually tends to feel more effective than rushing straight to firm pressure. This treatment often suits guests who prefer a firmer touch, sit at a desk for long hours, or simply find a lighter massage doesn't reach the areas they notice most. Pressure can be adjusted at any point during the session.",
    schemaSummary:
      'A firmer, slower massage focused on the back, shoulders, hips and legs, offered as a 90-minute session.',
    imageAlt: 'Deep tissue massage treatment at Russian Spa Mahipalpur',
  },
  {
    slug: 'hot-stone-therapy',
    body: "Hot Stone Therapy pairs a standard massage with smooth, heated stones that are placed along the body and worked into the strokes by hand. The warmth from the stones helps the muscles feel looser earlier in the session, which changes the pace of the treatment compared with a regular massage - movements tend to be slower and less rushed from the very first minutes. Your therapist checks the temperature of the stones regularly and asks how the heat feels against your skin, adjusting as needed throughout the session. Stones are used mainly across the back, shoulders and legs, either held in place briefly or moved in long strokes alongside the therapist's hands. This treatment can be a good option for guests who enjoy warmth as part of their massage and want a slower, more deliberate session.",
    schemaSummary: 'A full-body massage combined with heated stones, offered as a 90-minute session.',
    imageAlt: 'Hot stone therapy massage session in Mahipalpur',
  },
  {
    slug: 'aromatherapy-massage',
    body: "Aromatherapy Massage takes the same gliding, full-body technique used in a classic massage and pairs it with an oil blend chosen at the start of the session - floral, fresh or herbal, depending on what you're in the mood for. The pressure stays gentle to medium throughout, and the scent is part of the experience the whole way through rather than only at the beginning, carried across the back, shoulders, arms, legs and neck in long, even strokes. What sets it apart from a standard oil massage is less about technique and more about atmosphere - the room, the oil and the pace are all built around a slower, calmer session. This can be a good option for guests who want a lighter touch and a more sensory experience rather than firm, targeted pressure.",
    schemaSummary: 'A full-body massage with a choice of aromatic oil blend, offered as a 75-minute session.',
    imageAlt: 'Aromatherapy massage with scented oils in Mahipalpur',
  },
  {
    slug: 'swedish-massage',
    body: "Swedish Massage is the style most people picture when they think of a classic massage - long, flowing strokes combined with gentle kneading, moving steadily across the whole body rather than concentrating on one or two areas. Pressure sits in the gentle-to-moderate range and can be adjusted up or down depending on preference, which makes it an easy starting point if you haven't had many massages before, or a reliable choice if you already know it's the style you like. The session covers the back, shoulders, arms, legs and neck at a steady, even pace, without the deeper digging pressure used in a firmer treatment. It's often chosen by guests who want a full-body massage without anything too intense, or who simply prefer familiar, traditional technique.",
    schemaSummary:
      'A classic full-body massage with long strokes and gentle kneading, offered as a 60-minute session.',
    imageAlt: 'Swedish massage session at Russian Spa Mahipalpur',
  },
  {
    slug: 'couples-spa-package',
    body: "The Couple's Spa Package is built for two guests to have their treatments at the same time, in the same private room, with a separate therapist assigned to each person. Both guests can choose their own treatment from the regular menu - Swedish, Aromatherapy or Hot Stone are common picks - so the two sessions don't have to match if your preferences are different. Because both treatments run in parallel rather than one after the other, the full session covers two complete treatments without doubling the time spent at the spa. This package may suit couples, friends or family members who want to spend the appointment together rather than separately, and is often booked around a birthday, anniversary or simply as a shared break from a busy week.",
    schemaSummary:
      'A shared spa package for two guests with two therapists in one private room, offered as a 120-minute session.',
    imageAlt: "Couple's spa package treatment room in Mahipalpur",
  },
  {
    slug: 'thai-massage',
    body: "Thai Massage works differently from an oil-based treatment - there's no oil involved, and the session takes place on a padded floor mat rather than a table, with loose, comfortable clothing worn throughout. Your therapist uses hands, thumbs, palms and controlled body positioning to apply pressure along the body, combined with assisted stretches that move your limbs through a comfortable range of motion rather than leaving you to do the stretching yourself. The session builds gradually, starting with lighter pressure before moving into deeper stretches, and the pace is guided by your own flexibility rather than a fixed routine. This treatment may suit guests who prefer a more active style of bodywork, or who want to try something outside a standard massage without it being unfamiliar.",
    schemaSummary:
      'A traditional, fully-clothed Thai bodywork treatment with assisted stretching, offered as a 75-minute session.',
    imageAlt: 'Traditional Thai massage therapy in Mahipalpur near Aerocity',
  },
  {
    slug: 'sports-massage',
    body: "Sports Massage is built around an active routine rather than covering the whole body evenly. Before the session starts, your therapist asks about your training or activity level and which muscle groups feel most worked, then spends the session concentrating on those areas - commonly the calves, hamstrings, shoulders or back - using firmer, more targeted techniques than a general relaxation massage. Rather than moving through a fixed sequence, the session is weighted toward whatever you flag as tight or overworked, whether that's from regular training, a recent long run, or a physically demanding week at work. This treatment is often chosen by guests with an active lifestyle who want a massage that responds to their routine rather than a standard full-body session.",
    schemaSummary: 'A targeted massage built around an active routine, offered as a 60-minute session.',
    imageAlt: 'Sports massage treatment for active guests in Mahipalpur',
  },
  {
    slug: 'reflexology',
    body: "Reflexology is a shorter, foot-focused treatment rather than a full-body massage, using controlled thumb pressure across the soles, arches, heels and toes. The pace is slower and more concentrated than a typical massage since the whole session stays on the feet and lower legs, with extra time given to spots that feel particularly tight or sensitive. The session usually finishes with a few minutes of gentle movement through the ankles and lower legs before ending. This can be a good option after a long day of walking, standing or travelling - a day at the airport or on your feet at work, for instance - or simply when you'd rather focus on your feet than book a longer full-body session.",
    schemaSummary: 'A foot-focused treatment using pressure-point techniques, offered as a 45-minute session.',
    imageAlt: 'Foot reflexology massage session in Mahipalpur',
  },
  {
    slug: 'shiatsu-massage',
    body: 'Shiatsu is a Japanese bodywork style performed while you stay fully clothed, usually on a supportive floor mat rather than a massage table. The therapist applies steady, rhythmic pressure with the thumbs, fingers and palms along the back, shoulders, arms, hips and legs, working in a consistent rhythm rather than varying speed or intensity through the session. Gentle movement and stretching are worked in alongside the pressure, which gives the treatment a different feel from an oil-based massage even though the overall pace stays calm and unhurried. Shiatsu may suit guests who prefer to stay clothed during a treatment, or who want to try a structured, pressure-based style rather than the flowing strokes used in a Swedish or aromatherapy massage.',
    schemaSummary:
      'A clothed Japanese bodywork treatment using rhythmic pressure and stretching, offered as a 60-minute session.',
    imageAlt: 'Shiatsu massage therapy at Russian Spa Mahipalpur',
  },
];

/** Safe lookup by slug, used when the page zips this file with treatments.ts. */
export function serviceDetail(slug: string): ServiceDetail {
  const found = serviceDetails.find((detail) => detail.slug === slug);
  if (!found) {
    throw new Error(`Missing service detail for slug: ${slug}. Add it to src/data/service-details.ts`);
  }
  return found;
}
