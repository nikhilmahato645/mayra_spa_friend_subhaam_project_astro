/**
 * Spa treatment menu - "Explore Our Spa Treatments" section on the home page.
 *
 * `description` is the client's copy verbatim, one string per paragraph
 * (paragraphs are split on blank lines in the source and rendered as
 * separate <p> tags on the card - do not collapse or trim it).
 *
 * `summary` is a short, separately-written excerpt used ONLY for the
 * meta/schema description of each treatment (a schema description field is
 * meant to be a sentence or two, not a multi-paragraph essay) - it is never
 * shown on the card itself.
 *
 * Price and duration are the client's authoritative menu figures and are also
 * fed into the home page's OfferCatalog structured data, so they must stay in
 * sync with whatever is displayed here - edit them only in this one file.
 */
import { homeImage } from './home-images';
import type { SiteImage } from '../utils/image';

export interface Treatment {
  slug: string;
  name: string;
  /** Short excerpt used only in meta/schema description, never on the card. */
  summary: string;
  /**
   * WHAT THE HOME PAGE SHOWS: one combined description per treatment.
   *
   * The home page used to print `description` (4-5 paragraphs) AND
   * `seoHeading` + `seoParagraphs` (2 more) for all ten treatments - roughly
   * 70 paragraphs that largely restated each other and repeated
   * "Mahipalpur / Aerocity / Delhi NCR" in every single card. This field
   * merges each pair into one natural paragraph that keeps the real technique
   * and who it suits, and drops the location boilerplate the page already
   * establishes elsewhere.
   */
  cardText: string;
  /**
   * Full client-supplied copy, one paragraph per array entry. Preserved in
   * full for /services/ and future per-treatment pages - just not printed
   * ten times over on the home page.
   */
  description: string[];
  /**
   * Location-focused copy from the content writer, rendered as an H4 under
   * the treatment's H3 name, followed by `seoParagraphs`. Kept as its own
   * field (not merged into `description`) so the two authors' copy can be
   * edited independently.
   */
  seoHeading: string;
  /**
   * The two service-area paragraphs that go with `seoHeading`. Stored as HTML
   * strings (only <strong> tags, converted from the source **bold**
   * markdown) and rendered with set:html - this is static content from the
   * project's own data file, not user input, so it is trusted at build time.
   */
  seoParagraphs: string[];
  /**
   * One-line blurb for the /pricing/ price cards. Deliberately shorter than
   * `cardText` and separate from `summary` (which is meta/schema only) so the
   * pricing page stays scannable and does not repeat the home or services copy.
   */
  priceNote: string;
  price: string;
  priceValue: number;
  duration: string;
  /**
   * Base filename in public/images/home_page/ (no extension), used to build a
   * <picture> with a local .webp + .jpg. Omit when `remoteImage` is set.
   */
  image?: string;
  /**
   * Fallback for a treatment with no client-supplied photo yet: reuses an
   * existing stock photo from src/data/home-images.ts instead of local files.
   */
  remoteImage?: SiteImage;
}

export const treatments: Treatment[] = [
  {
    slug: 'traditional-russian-banya',
    name: 'Traditional Russian Banya',
    summary:
      'A traditional Russian steam bathing ritual using controlled heat, aromatic birch venik and cooling breaks, finished with herbal tea.',
    cardText:
      'A traditional Russian steam ritual: enveloping heat, aromatic birch venik work and cooling breaks between stages, finished with herbal tea. The session builds gradually so you settle into the steam rather than rushing it - a good choice if you want something beyond a standard massage.',
    description: [
      'Step into the warmth of a Traditional Russian Banya and experience a wellness ritual inspired by generations of bathing culture. Our banya session combines enveloping steam, controlled heat, aromatic birch branches, and periods of cooling to create a deeply relaxing experience for the body and mind. The gentle use of the traditional venik technique encourages rhythmic movement across the body while the natural aroma of birch fills the warm surroundings.',
      'The session begins with a gradual introduction to the heat, allowing your body to settle into the steam without rushing the experience. Carefully guided venik movements are then used to create a soothing combination of warmth, pressure, and aroma. Between stages, cooling and quiet relaxation allow you to recover comfortably before continuing.',
      'The experience is especially suited to anyone looking to disconnect from everyday routines and enjoy a traditional heat-based wellness ritual. Soft lighting, warm wood, herbal aromas, and a calm atmosphere complete the experience.',
      'Leave the banya feeling refreshed, relaxed, and comfortably renewed, with herbal tea served afterward as a gentle finishing touch.',
    ],
    seoHeading: 'Experience the Tradition of Russian Wellness',
    seoParagraphs: [
      'Experience the warmth and tradition of a <strong>Russian Banya in Mahipalpur</strong>, conveniently located near <strong>Delhi Airport and Aerocity</strong>. Inspired by traditional Russian bathing rituals, our Banya experience combines gentle steam, natural warmth and a peaceful environment to help you step away from your busy routine.',
      'Whether you are staying in <strong>Aerocity, Mahipalpur, Vasant Kunj or nearby areas of Delhi NCR</strong>, our Traditional Russian Banya offers a comfortable setting to relax and enjoy a distinctive Russian wellness experience. It is a great choice for travelers, working professionals and local guests looking for something beyond a regular spa session.',
    ],
    priceNote:
      "A heat-based steam ritual with birch venik work and cooling breaks, not a table massage.",
    price: '₹2,500',
    priceValue: 2500,
    duration: '60 minutes',
    image: 'traditional-russian-banya',
  },
  {
    slug: 'deep-tissue-massage',
    name: 'Deep Tissue Massage',
    summary:
      'A firmer, focused massage that works gradually through tight shoulders, back, hips and legs after training, travel or desk work.',
    cardText:
      'Firmer, slower work through the shoulders, upper and lower back, hips and legs. Your therapist warms the muscles with broader strokes first, then works methodically into the tighter areas, adjusting pressure to your comfort. Suited to long desk days, travel or regular training.',
    description: [
      'Our Deep Tissue Massage is designed for people who prefer a more focused and firm massage experience. Rather than using only light flowing movements, the treatment works gradually through areas where muscular tightness and everyday physical strain tend to accumulate.',
      'Your therapist begins with broader strokes to warm the muscles before moving into slower, controlled pressure. Attention can be given to commonly tense areas such as the shoulders, upper back, lower back, hips, arms, and legs. The pressure is adjusted throughout the session according to your comfort, allowing the treatment to remain purposeful without becoming unnecessarily intense.',
      'This massage can be particularly suitable after demanding physical activity, long periods of desk work, travel, or repetitive daily movement. The therapist works methodically instead of rushing between areas, giving each part of the body appropriate attention.',
      'A quiet spa environment, warm towels, and carefully prepared massage oils help make the experience both therapeutic and relaxing. The goal is to leave you with a greater sense of physical ease and a lighter, more relaxed feeling throughout your body.',
    ],
    seoHeading: 'Targeted Massage for Deep Relaxation',
    seoParagraphs: [
      'Our <strong>Deep Tissue Massage in Mahipalpur</strong> is designed for guests looking for focused massage work and deeper relaxation. Firm, controlled techniques are used to concentrate on areas that may feel tense after long working hours, regular exercise or physical activity.',
      'Located conveniently for guests from <strong>Aerocity, Delhi Airport, Vasant Kunj and nearby Delhi NCR areas</strong>, our professional therapists adjust the pressure according to your comfort and focus on the areas that need attention. Enjoy a calm environment while taking some time to relax and recharge.',
    ],
    priceNote:
      "Firm, slow pressure through the back, shoulders, hips and legs. Choose this if you prefer strong work over light strokes.",
    price: '₹3,500',
    priceValue: 3500,
    duration: '90 minutes',
    image: 'deep-tissue-massage',
  },
  {
    slug: 'hot-stone-therapy',
    name: 'Hot Stone Therapy',
    summary:
      'Smooth heated stones combined with a slow full-body massage across the back, shoulders, arms and legs for an unhurried, warming session.',
    cardText:
      'Smooth heated stones are placed on the body and worked into a slow full-body massage across the back, shoulders, arms and legs. Every movement is deliberately paced, and your therapist checks the stone temperature and pressure as the session goes on.',
    description: [
      'Experience the comforting warmth of Hot Stone Therapy, where smooth heated stones are incorporated into a slow and relaxing full-body massage. The carefully warmed stones provide gentle heat while your therapist combines them with flowing massage movements to create a deeply calming treatment.',
      'The session begins with a comfortable preparation of the body before selected stones are placed on appropriate areas and others are used during the massage. Their warmth helps create a soothing sensation as the therapist works across the back, shoulders, arms, legs, and other areas according to your treatment plan.',
      'The combination of heat and steady massage pressure makes this experience especially appealing when you want to slow down and step away from a busy routine. Every movement is deliberately paced, allowing the warmth to remain part of the experience rather than becoming overwhelming.',
      'Our peaceful treatment room, soft lighting, natural textures, and warm towels add to the sense of relaxation. The therapist continually checks your comfort and adjusts the stone temperature and pressure as needed.',
      'Hot Stone Therapy is an excellent choice for an unhurried spa experience focused on warmth, comfort, and complete relaxation.',
    ],
    seoHeading: 'Warmth That Helps You Unwind',
    seoParagraphs: [
      'Enjoy a peaceful <strong>Hot Stone Therapy in Mahipalpur and near Aerocity</strong>, where relaxing massage techniques are combined with the gentle warmth of heated stones. The warmth creates a soothing atmosphere and makes the treatment a comfortable choice when you want to disconnect from a busy day.',
      'Guests visiting from <strong>Delhi Airport, Aerocity, Vasant Kunj and other parts of Delhi NCR</strong> can enjoy this relaxing spa experience in a calm and comfortable setting. Warm stones, soft surroundings and professional care come together for a tranquil wellness session.',
    ],
    priceNote:
      "Heated stones combined with a slow full-body massage. The longest of the warmth-based treatments.",
    price: '₹4,000',
    priceValue: 4000,
    duration: '90 minutes',
    image: 'hot-stone-therapy',
  },
  {
    slug: 'aromatherapy-massage',
    name: 'Aromatherapy Massage',
    summary:
      'A flowing full-body massage with a scent blend of your choice - floral, fresh or herbal - for a calm, sensory break from the day.',
    cardText:
      'Long, rhythmic strokes at lighter pressure, using an oil blend you pick at the start - floral, fresh, herbal or something more reviving. The scent stays part of the session throughout, across the back, shoulders, arms, legs and neck.',
    description: [
      'Our Aromatherapy Massage combines flowing massage techniques with carefully selected aromatic oils to create a peaceful sensory experience. Each session begins with choosing an oil blend suited to the atmosphere you want to enjoy, followed by a gentle massage designed to encourage relaxation and physical comfort.',
      'The therapist uses long, rhythmic movements together with lighter pressure across areas such as the back, shoulders, arms, legs, and neck. The natural fragrance of the chosen oil remains part of the experience throughout the treatment, creating a calm environment where you can switch off from daily distractions.',
      'You can choose from different aromatic profiles, including floral, fresh, herbal, or refreshing blends. Lavender-inspired aromas can create a soft and peaceful mood, while eucalyptus or mint-based notes offer a fresher atmosphere. The selection can be discussed with your therapist before the session begins.',
      'Warm towels, soft lighting, quiet music, and a carefully prepared treatment room complete the experience. The massage is intentionally unhurried, giving you time to settle into the rhythm of the treatment.',
      'Aromatherapy Massage is ideal when your priority is relaxation, sensory comfort, and a peaceful break from a demanding day.',
    ],
    seoHeading: 'Relax with the Comfort of Aromatic Oils',
    seoParagraphs: [
      'Our <strong>Aromatherapy Massage in Mahipalpur</strong> combines gentle massage movements with aromatic oils to create a relaxing and sensory spa experience. The pleasant fragrance, peaceful surroundings and smooth massage techniques make it a comfortable choice for personal relaxation.',
      'Convenient for guests from <strong>Aerocity, Delhi Airport, Vasant Kunj and surrounding Delhi NCR</strong>, this treatment gives you an opportunity to take a break from everyday responsibilities and enjoy some quiet time in a peaceful spa environment.',
    ],
    priceNote:
      "Lighter, flowing strokes with a scented oil blend you pick at the start of the session.",
    price: '₹3,000',
    priceValue: 3000,
    duration: '75 minutes',
    image: 'aromatherapy-massage',
  },
  {
    slug: 'swedish-massage',
    name: 'Swedish Massage',
    summary:
      'A classic full-body massage of long gliding strokes and gentle kneading, with pressure adjusted to your preference from gentle to firm.',
    cardText:
      'The classic full-body massage: long gliding strokes, gentle kneading and a steady rhythm through the major muscle groups. Pressure can be dialled from gentle to moderately firm, which makes it an easy first massage as well as a familiar one to come back to.',
    description: [
      'Discover the smooth and flowing style of Swedish Massage through a carefully paced full-body treatment created around relaxation and comfortable movement. This classic massage uses a combination of long gliding strokes, gentle kneading, rhythmic movements, and carefully controlled pressure.',
      'Your therapist begins slowly, allowing your body to become comfortable with the treatment before gradually working through the major muscle groups. Special attention can be given to areas that commonly carry everyday tension, including the shoulders, back, arms, legs, and neck.',
      'Unlike a highly intensive massage, Swedish Massage focuses on maintaining a steady rhythm. The pressure can be adjusted to suit your preference, making the treatment suitable for guests who want either a gentle relaxing session or a moderately firm experience.',
      'The surrounding environment plays an important role in the treatment. Warm towels, calming aromas, soft lighting, and peaceful music create a comfortable setting where you can step away from screens, schedules, and everyday responsibilities.',
      'Whether you are trying massage for the first time or simply want a familiar full-body relaxation experience, Swedish Massage offers an easy and balanced way to spend an hour caring for yourself.',
    ],
    seoHeading: 'A Classic Massage for Everyday Relaxation',
    seoParagraphs: [
      'Looking for a relaxing <strong>Swedish Massage in Mahipalpur or near Aerocity</strong>? Swedish Massage is a classic full-body massage style known for smooth and flowing movements. It is designed to create a comfortable experience while helping you unwind after a busy day.',
      'Our therapists can adjust the pressure according to your preference, making the treatment suitable for both first-time visitors and regular spa guests. With convenient access from <strong>Delhi Airport, Aerocity, Vasant Kunj and nearby areas</strong>, you can enjoy a relaxing spa session without traveling far.',
    ],
    priceNote:
      "The classic full-body massage. Pressure can be set anywhere from gentle to moderately firm.",
    price: '₹2,800',
    priceValue: 2800,
    duration: '60 minutes',
    image: 'swedish-massage',
  },
  {
    slug: 'couples-spa-package',
    name: "Couple's Spa Package",
    summary:
      'Two guests, two therapists, one private room - choose Swedish, aromatherapy or hot stone massage and relax together from start to finish.',
    cardText:
      'Two guests, two therapists and one private room, with both treatments running at the same time. Each person can choose Swedish, aromatherapy or hot stone. Often booked for an anniversary or birthday, or simply for time away from a busy week.',
    description: [
      "Share a relaxing spa experience with someone special through our Couple's Spa Package, created for two guests to enjoy their treatments together in a private and comfortable setting.",
      "Your experience begins with time to settle into the couples' treatment room before the selected spa treatments begin simultaneously. Depending on your preferences, you can choose from options such as Swedish Massage, Aromatherapy Massage, or Hot Stone Therapy, allowing each person to enjoy a treatment that suits them individually.",
      'The room is prepared with soft lighting, calming aromas, warm towels, gentle music, and elegant spa details to create a peaceful atmosphere for both guests. Rather than experiencing your treatments separately, the synchronized setup allows you to relax together and share the occasion from beginning to end.',
      'This package can be enjoyed as a special date, anniversary experience, birthday celebration, honeymoon activity, or simply as quality time away from a busy routine.',
      'After the treatments, take some time to relax before leaving the spa. The experience is designed around comfort, privacy, and togetherness, giving both guests an opportunity to slow down and enjoy a shared wellness moment.',
    ],
    seoHeading: 'Share a Relaxing Spa Experience Together',
    seoParagraphs: [
      "Enjoy a relaxing <strong>Couple's Spa Package in Mahipalpur</strong>, ideal for couples looking to spend quality time together in a peaceful spa environment. The experience combines professional treatments, a comfortable atmosphere and an opportunity to step away from the usual daily routine.",
      "Our couple-focused spa experience is convenient for guests from <strong>Aerocity, Delhi Airport, Vasant Kunj, Dwarka and other parts of Delhi NCR</strong>. Whether you are planning a special occasion or simply want a relaxing experience together, a couple's spa session can make your day more enjoyable.",
    ],
    priceNote:
      "Two guests treated side by side in one private room. Each person chooses their own treatment style.",
    price: '₹7,500',
    priceValue: 7500,
    duration: '120 minutes',
    image: 'couples-spa-package',
  },
  {
    slug: 'thai-massage',
    name: 'Thai Massage',
    summary:
      'A traditional, fully-clothed floor-mat treatment combining pressure and assisted stretching rather than an oil-based massage.',
    cardText:
      'Traditional Thai bodywork on a floor mat, fully clothed in loose clothing and without oils. The therapist uses hands, thumbs, palms and elbows alongside assisted stretches, building from comfortable pressure into deeper stretches within your own range of movement.',
    description: [
      'Experience the traditional approach of Thai Massage through a structured combination of pressure, assisted stretching, and rhythmic bodywork. Unlike oil-based massage performed primarily on a massage table, traditional Thai Massage is generally performed on a comfortable floor mat while the guest remains fully clothed in loose, flexible clothing.',
      'The therapist uses hands, thumbs, palms, elbows, and carefully controlled body positioning to work through different areas of the body. Gentle assisted stretches are incorporated throughout the session, creating a treatment that combines massage and movement rather than relying solely on repeated strokes.',
      'The session follows a gradual progression, beginning with comfortable pressure before moving into deeper stretches and more focused techniques. Your therapist adjusts the movements according to your flexibility and comfort rather than forcing a particular range of motion.',
      'Thai Massage can be an enjoyable choice for people who prefer an active style of bodywork and want to experience traditional massage techniques in a calm spa environment.',
      'The treatment space is kept peaceful and uncluttered, allowing you to concentrate on your breathing and the rhythm of each movement.',
    ],
    seoHeading: 'Traditional Thai-Inspired Bodywork',
    seoParagraphs: [
      'Experience <strong>Thai Massage in Mahipalpur near Aerocity</strong>, featuring traditional Thai-inspired bodywork techniques such as assisted stretching, rhythmic pressure and controlled movements. The treatment offers a different approach to relaxation compared with conventional oil-based massages.',
      'Our Thai Massage sessions take place in a calm and comfortable environment, making them convenient for guests from <strong>Delhi Airport, Aerocity, Vasant Kunj and nearby Delhi NCR locations</strong>. Take some time to slow down and experience a traditional style of bodywork in a modern spa setting.',
    ],
    priceNote:
      "Assisted stretching and pressure work on a floor mat, done fully clothed and without oils.",
    price: '₹3,200',
    priceValue: 3200,
    duration: '75 minutes',
    // No client photo supplied for this treatment yet - reuses the existing
    // Thai massage stock photo already used elsewhere on the home page,
    // rather than leaving the card without an image.
    remoteImage: homeImage('thaiMassage'),
  },
  {
    slug: 'sports-massage',
    name: 'Sports Massage',
    summary:
      'Targeted work for runners, athletes and active bodies - focused pressure and stretching on the legs, back or shoulders, built around your routine.',
    cardText:
      'Built around an active routine. After talking through your training and problem areas, your therapist concentrates on the muscle groups doing the most work - calves, hamstrings, shoulders, back or hips - using focused pressure and stretching rather than treating every area equally.',
    description: [
      'Our Sports Massage is designed around the needs of active individuals, fitness enthusiasts, runners, athletes, and anyone whose daily routine places repeated physical demands on the body.',
      'The treatment uses focused massage techniques, controlled pressure, stretching, and targeted work across areas that experience frequent activity. Depending on your needs, your therapist may concentrate on the legs, calves, hamstrings, shoulders, back, hips, or other heavily used muscle groups.',
      'Before beginning, the therapist discusses your activity level and identifies the areas you would like to focus on. The session can then be adapted around your routine, whether you are looking for a recovery-focused treatment after training or a targeted massage following repeated physical activity.',
      'Unlike a general relaxation massage, Sports Massage uses a more purposeful approach, with the therapist spending additional time on specific muscle groups instead of treating every area equally.',
      'The treatment room combines a professional sports-recovery atmosphere with the comfort of a premium spa. Warm towels, massage oils, and carefully controlled techniques help create a balanced experience between focused bodywork and relaxation.',
    ],
    seoHeading: 'Focused Care for an Active Lifestyle',
    seoParagraphs: [
      'Our <strong>Sports Massage in Mahipalpur</strong> is designed for people with active lifestyles, including those who regularly exercise, train or spend long hours involved in physical activities. The treatment uses focused massage techniques based on the areas that require attention.',
      'Whether you are visiting from <strong>Aerocity, Gurgaon, Vasant Kunj or another part of Delhi NCR</strong>, our therapists can personalize the session according to your comfort and requirements. It is a practical choice when you want focused relaxation after a physically demanding day or workout.',
    ],
    priceNote:
      "Focused work on the muscle groups your training uses most, agreed with the therapist first.",
    price: '₹3,000',
    priceValue: 3000,
    duration: '60 minutes',
    image: 'sports-massage',
  },
  {
    slug: 'reflexology',
    name: 'Reflexology',
    summary:
      'A focused foot treatment using pressure-point techniques across the soles, heels and arches - ideal after a long day on your feet.',
    cardText:
      'A focused foot treatment using thumb and pressure-point techniques through the soles, heels, arches and toes, finishing with the lower legs. Slower and more concentrated than a full-body massage, and welcome after a long day standing, walking or travelling.',
    description: [
      'Discover a focused foot-based wellness experience with our Reflexology treatment. The session centers on the feet and uses controlled pressure, thumb techniques, and precise massage movements across different areas of the foot.',
      'Your treatment begins with a comfortable foot preparation before the therapist gradually works through the soles, heels, arches, and toes. Different pressure levels are used throughout the session, with extra attention given to areas that feel particularly tense or sensitive.',
      'The experience is intentionally slower and more focused than a full-body massage. Warm towels, gentle foot preparation, calming aromas, and a peaceful treatment environment help you settle into the session while the therapist works systematically from one area of the foot to another.',
      'Reflexology can be a particularly enjoyable option when you have spent a long day standing, walking, travelling, or simply want a treatment centered around your feet and lower legs.',
      'The session finishes with relaxing foot and lower-leg movements, giving you time to enjoy the final moments of the treatment without immediately returning to a busy routine.',
    ],
    seoHeading: 'A Relaxing Focus on the Feet',
    seoParagraphs: [
      'Enjoy a calming <strong>Reflexology session in Mahipalpur</strong>, with a treatment focused primarily on the feet using controlled pressure and specialized massage techniques. It can be a relaxing option after a long day of walking, standing, traveling or working.',
      'Our convenient location makes the treatment accessible to guests from <strong>Aerocity, Delhi Airport, Vasant Kunj and nearby areas</strong>. Sit back and enjoy a peaceful foot-focused spa experience in a comfortable environment.',
    ],
    priceNote:
      "A foot-focused session across the soles, arches and toes, finishing with the lower legs.",
    price: '₹2,200',
    priceValue: 2200,
    duration: '45 minutes',
    image: 'reflexology',
  },
  {
    slug: 'shiatsu-massage',
    name: 'Shiatsu Massage',
    summary:
      'A traditional Japanese, clothed bodywork practice of rhythmic pressure and gentle stretching along the back, shoulders, arms and legs.',
    cardText:
      'Japanese bodywork done clothed on a floor mat, using rhythmic thumb, finger and palm pressure with gentle movement and stretching through the back, shoulders, arms, hips and legs. Structured and unhurried, with pressure set to your comfort.',
    description: [
      'Experience Shiatsu, a traditional Japanese bodywork practice centered around rhythmic pressure and controlled movement. The treatment is performed while you remain comfortably clothed, usually on a supportive floor mat, allowing the therapist to work with steady pressure across different areas of the body.',
      'Using thumbs, fingers, palms, and other carefully controlled techniques, the therapist applies pressure along selected areas while incorporating gentle movement and stretching. The pressure is adjusted according to your comfort, creating a treatment that feels structured, focused, and unhurried.',
      'A typical session gives attention to areas such as the back, shoulders, arms, hips, and legs while maintaining a consistent rhythm from beginning to end. The therapist works gradually rather than applying sudden or excessive pressure.',
      'The surrounding environment follows a calm Japanese-inspired aesthetic, with natural textures, warm lighting, simple décor, and a quiet atmosphere that allows you to focus on the treatment.',
      'Shiatsu is a good choice for guests who prefer a traditional clothed massage and enjoy a combination of pressure, movement, and stretching rather than an oil-based massage.',
    ],
    seoHeading: 'Japanese-Inspired Pressure Point Massage',
    seoParagraphs: [
      'Discover <strong>Shiatsu Massage in Mahipalpur and near Aerocity</strong>, a Japanese-inspired bodywork technique that uses rhythmic pressure and controlled movements across specific areas of the body. It provides a distinctive alternative to conventional massage styles.',
      'Guests from <strong>Delhi Airport, Aerocity, Vasant Kunj, Dwarka, Gurgaon and other parts of Delhi NCR</strong> can enjoy this traditional style of bodywork in a calm spa environment. Each session can be adapted to your preferred level of pressure and overall comfort.',
    ],
    priceNote:
      "Japanese bodywork done clothed on a mat, using rhythmic thumb and palm pressure with gentle stretching.",
    price: '₹3,500',
    priceValue: 3500,
    duration: '60 minutes',
    image: 'shiatsu-massage',
  },
];
