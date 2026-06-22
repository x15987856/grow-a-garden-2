import type { Metadata } from "next";
import { getGameConfig } from "@/lib/data";

const config = getGameConfig();

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${config.seo.baseUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: config.game.name,
      images: [{ url: `${config.seo.baseUrl}/og-default.svg`, width: 1200, height: 630 }],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${config.seo.baseUrl}/og-default.svg`]
    }
  };
}

export function buildBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function buildVideoGameSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: config.game.name,
    genre: config.game.genre,
    url: `https://www.roblox.com/games/${config.game.robloxId}/Grow-a-Garden-2`,
    operatingSystem: config.game.platforms.join(", "),
    author: {
      "@type": "Organization",
      name: config.game.developer
    }
  };
}
