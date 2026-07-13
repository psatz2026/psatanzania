import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_CITY,
  SITE_COUNTRY,
  SITE_SAME_AS,
} from "@/lib/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  /** Set true only for pages that must not be indexed (e.g. 404). */
  noIndex?: boolean;
}

/**
 * Builds full, page-specific metadata (canonical + Open Graph + Twitter).
 * Next.js does NOT deep-merge nested `openGraph`/`twitter` objects between a
 * layout and a page, so every route needs its own copy of these fields or it
 * silently inherits the parent's — this keeps social previews accurate.
 */
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_LEGAL_NAME,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

/** NGO / Organization structured data, rendered once in the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image.png`,
    description: SITE_DESCRIPTION,
    email: SITE_EMAIL,
    slogan: "Collaborating for Better Care",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CITY,
      addressCountry: SITE_COUNTRY,
    },
    areaServed: {
      "@type": "Country",
      name: SITE_COUNTRY,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_EMAIL,
      contactType: "customer support",
      areaServed: SITE_COUNTRY,
    },
    knowsAbout: [
      "Patient safety",
      "Patient rights",
      "Patient-centred care",
      "Healthcare accountability",
      "Health policy advocacy",
    ],
    ...(SITE_SAME_AS.length > 0 && { sameAs: SITE_SAME_AS }),
  };
}

/** WebSite structured data, rendered once in the root layout. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

/** BreadcrumbList structured data for an inner page's trail. */
export function breadcrumbJsonLd(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** FAQPage structured data — pass the same Q&A shown on the page. */
export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
