import { useEffect } from "react";

const SITE_URL = "https://www.riversideazure.co.ke";

function ensureMetaTag(selector, attributes) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      tag.setAttribute(key, value);
    }
  });

  return tag;
}

function ensureCanonicalLink(url) {
  let link = document.head.querySelector("link[rel='canonical']");

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
  return link;
}

function ensureJsonLd(schema) {
  if (!schema) {
    return;
  }

  let script = document.head.querySelector("script[data-seo-schema='riverside-azure']");

  if (!script) {
    script = document.createElement("script");
    script.setAttribute("data-seo-schema", "riverside-azure");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
}

export default function Seo({
  title,
  description,
  canonicalPath = "/",
  ogTitle,
  ogDescription,
  image = "/og-image.jpg",
  type = "website",
  noIndex = false,
  schema,
}) {
  useEffect(() => {
    const pageTitle = title || "Riverside Azure Apartments | 1, 2 & 3 Bedroom Homes on Riverside Drive, Nairobi";
    const pageDescription =
      description ||
      "Luxury apartments for sale in Riverside, Nairobi. Discover Riverside Azure residences, investment potential, and premium living at 25 Riverside Drive.";
    const pageUrl = `${SITE_URL}${canonicalPath}`;
    const finalOgTitle = ogTitle || pageTitle;
    const finalOgDescription = ogDescription || pageDescription;

    // SEO: apply the current page title and description for route-level indexing.
    document.title = pageTitle;
    ensureMetaTag('meta[name="description"]', {
      name: "description",
      content: pageDescription,
    });

    // SEO: keep canonical, Open Graph, and robots values aligned with each route.
    ensureCanonicalLink(pageUrl);
    ensureMetaTag("meta[property='og:title']", {
      property: "og:title",
      content: finalOgTitle,
    });
    ensureMetaTag("meta[property='og:description']", {
      property: "og:description",
      content: finalOgDescription,
    });
    ensureMetaTag("meta[property='og:url']", {
      property: "og:url",
      content: pageUrl,
    });
    ensureMetaTag("meta[property='og:type']", {
      property: "og:type",
      content: type,
    });
    ensureMetaTag("meta[property='og:image']", {
      property: "og:image",
      content: `${SITE_URL}${image}`,
    });
    ensureMetaTag('meta[name="robots"]', {
      name: "robots",
      content: noIndex ? "noindex,follow" : "index,follow",
    });

    // SEO: attach page schema only when a route offers a verified structured-data payload.
    ensureJsonLd(schema);
  }, [title, description, canonicalPath, ogTitle, ogDescription, image, type, noIndex, schema]);

  return null;
}
