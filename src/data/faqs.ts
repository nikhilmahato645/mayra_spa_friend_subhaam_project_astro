/**
 * Frequently asked questions.
 *
 * Only questions with a non-empty `answer` are rendered on the page AND fed to
 * the FAQPage structured data. Questions whose answer is still empty are left
 * here as a checklist for the client - nothing is invented on their behalf, and
 * an empty answer can never reach Google as a made-up claim.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const homeFaqs: Faq[] = [
  {
    question: 'How to Choose the Best Massage Spa in Delhi?',
    answer:
      'To choose the best massage spa in Delhi, check therapist experience, hygiene standards, customer reviews, service quality and location. A trusted spa should provide professional massage therapies, a peaceful environment, privacy and comfortable service focused on customer satisfaction.',
  },
  {
    question: 'What is a Traditional Russian Banya?',
    answer:
      'A Traditional Russian Banya is a warm steam-based wellness experience inspired by Russian bathing traditions. It combines heat, steam and a peaceful environment to create a relaxing spa experience. Our Banya service is available for guests visiting from Mahipalpur, Aerocity and nearby Delhi NCR areas.',
  },
  {
    question: 'Can I book a spa session for two people?',
    answer:
      "Yes. We offer Couple's Spa Packages for guests who would like to enjoy a relaxing treatment together. You can contact us in advance to check the available package options and suitable appointment times.",
  },
  {
    question: 'Is the spa located near Delhi Airport?',
    answer:
      'Yes, our Mahipalpur spa is conveniently located near Delhi Airport and Aerocity, making it a convenient option for airport travelers, hotel guests and people visiting the surrounding areas of Delhi NCR.',
  },
  {
    question: 'What treatments are available at your spa?',
    answer:
      'Our spa menu includes a variety of treatments such as Traditional Russian Banya, Deep Tissue Massage, Hot Stone Therapy, Aromatherapy Massage, Swedish Massage, Thai Massage, Sports Massage, Reflexology and Shiatsu Massage.',
  },
  {
    question: 'Do you maintain hygiene standards in the spa?',
    answer:
      'We focus on maintaining a clean, comfortable and well-organized spa environment. Treatment areas, linens and commonly used spa facilities are kept clean between sessions to provide guests with a pleasant experience.',
  },
  {
    question: 'How can I reserve an appointment?',
    answer:
      'You can contact our spa directly to enquire about available treatments, prices and appointment timings. Booking ahead is recommended, particularly during busy hours, weekends and holidays.',
  },
  {
    question: 'Are your massage therapists professionally trained?',
    answer:
      'Our treatments are provided by experienced spa therapists who are familiar with different massage techniques. The treatment and pressure can be discussed with the therapist before the session so that the experience is comfortable for you.',
  },
  {
    question: 'What happens when I visit the spa for the first time?',
    answer:
      'On your first visit, you can discuss your preferred treatment, pressure level and areas of focus with the spa team. You will then be guided through the treatment process so you can feel comfortable before your session begins.',
  },
  {
    question: 'Do you have spa packages or special offers?',
    answer:
      "Package availability can vary depending on the treatment and current spa offerings. You can contact us directly for the latest information about massage packages, couple's treatments and other available offers.",
  },
  {
    question: 'How much do your spa treatments cost?',
    answer:
      'The price depends on the type of treatment, session duration and selected package. For the latest spa and massage prices in Mahipalpur, please contact our team before booking so you can choose the option that suits you.',
  },
  {
    question: 'What are your spa opening hours?',
    answer:
      'Our operating hours may vary depending on the service and appointment schedule. For the most accurate timing, we recommend contacting the spa before visiting, especially if you are coming from Delhi Airport, Aerocity, Gurgaon or another part of Delhi NCR.',
  },
  {
    question: 'Is parking available?',
    answer:
      'Parking availability can depend on the location and current conditions around the property. Guests can contact our team before arriving for the latest information and directions.',
  },
  {
    question: 'Can I visit without an appointment?',
    answer:
      "Walk-in availability may depend on the current schedule. For a smoother experience, especially for Couple's Spa Packages, Russian Banya or longer massage sessions, it is better to contact us and reserve your preferred time in advance.",
  },
  {
    question: 'Do you serve guests from Aerocity and nearby areas?',
    answer:
      'Yes. Our location in Mahipalpur near Aerocity makes the spa convenient for guests staying in nearby hotels, airport travelers and residents from surrounding areas such as Vasant Kunj and other parts of Delhi NCR.',
  },
  // TODO (client copy): send the answers for the four questions below and paste
  // them into the empty `answer` strings. They stay hidden until then.
  {
    question: 'Are Professional Spas Available in the Malviya Nagar Area?',
    answer: '',
  },
  {
    question: 'Is Body to Body Massage Available at Spa in Lajpat Nagar?',
    answer: '',
  },
  {
    question: 'What Services Are Offered at the Spa in Karol Bagh?',
    answer: '',
  },
  {
    question: 'Why Choose Your Spa in Connaught Place?',
    answer: '',
  },
];

/** Drop the unanswered entries - used by both the UI and the JSON-LD. */
export function answeredFaqs(list: Faq[]): Faq[] {
  return list.filter((faq) => faq.answer.trim().length > 0);
}

/**
 * Contact page FAQ - booking and visiting questions only.
 *
 * Deliberately short and separate from `homeFaqs`: the two lists never share a
 * question, so the two FAQPage blocks on the site do not compete with each
 * other in search results. Every answer here is limited to what is documented
 * in src/data/site.ts and the treatment data - nothing is promised or
 * guaranteed on the spa's behalf.
 */
export const contactFaqs: Faq[] = [
  {
    question: 'How can I book a massage appointment?',
    answer:
      'Fill in the booking form on this page and it opens WhatsApp with your details ready to send, or contact us directly on WhatsApp or by phone. Our team replies with the available slots and confirms the booking.',
  },
  {
    question: 'What are your opening hours?',
    answer:
      'We are open all days from 9:00 AM to 11:00 PM. Appointments towards the end of the evening are best arranged in advance.',
  },
  {
    question: 'Where is Russian Spa Mahipalpur located?',
    answer:
      'Our address is Block - Asset No. 6, 6, Northern Access Rd, Aerocity, New Delhi, Delhi 110037, a short drive from Mahipalpur and Delhi Airport.',
  },
  {
    question: 'Can I choose my preferred massage treatment?',
    answer:
      'Yes. Pick the treatment you want in the booking form, or select "Other / Not Sure" and our team will talk through the options with you before your appointment.',
  },
  {
    question: 'Can I check availability before visiting?',
    answer:
      'Please do. Message or call us with the date and time you have in mind and we will tell you what is free before you travel to us.',
  },
  {
    question: 'Can I request an appointment for two people?',
    answer:
      "You can request a couple's session for two guests in one room. Let us know the date and time you would like and we will check whether it can be arranged.",
  },
];
