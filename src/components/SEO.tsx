import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  product?: {
    name: string;
    description: string;
    image?: string;
    price?: {
      amount: string;
      currency: string;
    };
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  };
}

export function SEO({
  title = "Grow Faster with Intelligent Sales Enrichment | uGrowz",
  description = "Find, enrich, and convert leads faster with AI-powered data workflows. Automate sales enrichment, build targeted prospect lists, and track buying signals with uGrowz.",
  keywords = "sales enrichment, lead generation, B2B sales, prospect lists, CRM sync, sales intelligence, lead enrichment, sales automation",
  image = "https://ugrowz.com/og-image.jpg",
  url = "https://ugrowz.com",
  type = "website",
  article,
  product
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:url', url);
    updateMetaTag('property', 'og:type', type);

    // Update Twitter tags
    updateMetaTag('property', 'twitter:title', title);
    updateMetaTag('property', 'twitter:description', description);
    updateMetaTag('property', 'twitter:image', image);
    updateMetaTag('property', 'twitter:url', url);

    // Update canonical URL
    updateCanonicalUrl(url);

    // Add structured data
    updateStructuredData({ title, description, image, url, article, product });

  }, [title, description, keywords, image, url, type, article, product]);

  return null; // This component doesn't render anything
}

function updateMetaTag(attrName: string, attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement;

  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    element.content = content;
    document.head.appendChild(element);
  }
}

function updateCanonicalUrl(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (canonical) {
    canonical.href = url;
  } else {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = url;
    document.head.appendChild(canonical);
  }
}

function updateStructuredData({
  title,
  description,
  image,
  url,
  article,
  product
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  article?: SEOProps['article'];
  product?: SEOProps['product'];
}) {
  // Remove existing structured data
  const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
  if (existingStructuredData) {
    existingStructuredData.remove();
  }

  // Create new structured data
  let structuredData: any = {
    "@context": "https://schema.org",
    "@type": product ? "Product" : article ? "Article" : "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "image": image
  };

  if (product) {
    structuredData = {
      ...structuredData,
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "image": product.image || image,
      "offers": product.price ? {
        "@type": "Offer",
        "price": product.price.amount,
        "priceCurrency": product.price.currency,
        "availability": `https://schema.org/${product.availability || 'InStock'}`
      } : undefined,
      "brand": {
        "@type": "Brand",
        "name": "uGrowz"
      }
    };
  } else if (article) {
    structuredData = {
      ...structuredData,
      "@type": "Article",
      "headline": title,
      "author": {
        "@type": "Person",
        "name": article.author || "uGrowz Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "uGrowz",
        "logo": {
          "@type": "ImageObject",
          "url": image
        }
      },
      "datePublished": article.publishedTime,
      "dateModified": article.modifiedTime,
      "articleSection": article.section,
      "keywords": article.tags?.join(', ')
    };
  } else {
    // Default webpage structured data
    structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "image": image,
      "publisher": {
        "@type": "Organization",
        "name": "uGrowz",
        "url": "https://ugrowz.com"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ugrowz.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}