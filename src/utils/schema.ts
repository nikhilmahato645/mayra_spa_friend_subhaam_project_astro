/**
 * JSON-LD structured data builders (schema.org).
 *
 * Rules followed here:
 *  - one stable @id per entity so Google can link the graph together;
 *  - no AggregateRating / Review markup (self-published reviews are against
 *    Google's review snippet policy);
 *  - no claim that is not already visible on the page.
 */
import { site, socialSameAs } from '../data/site';
import { absoluteUrl } from './seo';
import type { BreadcrumbItem } from './seo';
import type { Faq } from '../data/faqs';

/** Stable @id values for the main entities. */
export const ids = {
  business: `${site.url}/#localbusiness`,
  website: `${site.url}/#website`,
  organization: `${site.url}/#organization`,
};

/** The spa itself - DaySpa is the most specific LocalBusiness subtype. */
export function daySpaSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DaySpa',
    '@id': ids.business,
    name: site.name,
    alternateName: site.legalName,
    url: `${site.url}/`,
    description: site.tagline,
    telephone: site.phoneE164,
    email: site.email,
    image: absoluteUrl(site.ogImage),
    priceRange: site.priceRange,
    currenciesAccepted: site.currency,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: site.openingHours.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    ...(socialSameAs.length > 0 ? { sameAs: socialSameAs } : {}),
  };
}

/** WebSite entity - also declares the site-wide search box if one is added. */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': ids.website,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: site.language,
    publisher: { '@id': ids.business },
  };
}

/** WebPage entity for the page being rendered. */
export function webPageSchema(params: {
  url: string;
  name: string;
  description: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${params.url}#webpage`,
    url: params.url,
    name: params.name,
    description: params.description,
    inLanguage: site.language,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.business },
    ...(params.image ? { primaryImageOfPage: absoluteUrl(params.image) } : {}),
  };
}

/** Breadcrumb trail rich result. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

/** FAQ rich result. Only questions that actually have an answer are included. */
export function faqSchema(faqs: Faq[]) {
  const answered = faqs.filter((faq) => faq.answer.trim().length > 0);
  if (answered.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: answered.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

/** A single spa service offered by the business. */
export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: params.url,
    serviceType: 'Massage therapy',
    provider: { '@id': ids.business },
    areaServed: {
      '@type': 'City',
      name: params.areaServed ?? 'Delhi NCR',
    },
  };
}

/** Price list, used on the pricing page and the home page package cards. */
export function offerCatalogSchema(
  items: { name: string; price: number; description?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `${site.name} spa packages`,
    itemListElement: items.map((item, index) => ({
      '@type': 'Offer',
      position: index + 1,
      name: item.name,
      price: item.price,
      priceCurrency: site.currency,
      availability: 'https://schema.org/InStock',
      url: `${site.url}/pricing/`,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}
