// SEO utilities for JSON-LD structured data
// Schema.org types for better search engine understanding

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oracion-familia-site.vercel.app";

export const SITE_NAME = "Oraciones por la familia";
export const SITE_DESCRIPTION = "Oraciones originales para bendecir el hogar, pedir unidad y reconciliación, y confiar la familia a Dios cada día.";

// WebSite schema for the homepage
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: baseUrl,
    inLanguage: "es",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Organization schema
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: SITE_NAME,
    url: baseUrl,
    description: SITE_DESCRIPTION,
    sameAs: [
      "https://www.jesuscontigo.org/",
    ],
  };
}

// BreadcrumbList schema for article pages
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Article schema for prayer pages
export function getArticleSchema(params: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
}) {
  const { title, description, slug, publishedAt, updatedAt, category } = params;
  const articleUrl = `${baseUrl}/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}/#article`,
    headline: title,
    description: description,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@id": `${baseUrl}/#organization`,
    },
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "es",
    articleSection: category,
    isAccessibleForFree: true,
  };
}

// Combined schema for homepage
export function getHomePageSchemas() {
  return [
    getWebSiteSchema(),
    getOrganizationSchema(),
  ];
}

// Combined schema for article pages
export function getArticlePageSchemas(params: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
}) {
  const breadcrumbItems = [
    { name: "Inicio", url: baseUrl },
    { name: params.category.charAt(0).toUpperCase() + params.category.slice(1), url: baseUrl },
    { name: params.title, url: `${baseUrl}/${params.slug}` },
  ];

  return [
    getArticleSchema(params),
    getBreadcrumbSchema(breadcrumbItems),
  ];
}
