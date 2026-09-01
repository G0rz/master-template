import type { FC } from "react";
import { siteConfig } from "@/lib/site-config";

interface JsonLdProps {
  locale: string;
}

export const JsonLd: FC<JsonLdProps> = ({ locale }) => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: ["en", "es"],
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/icon1.png`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/${locale}/#webpage`,
        url: `${siteConfig.url}/${locale}`,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: locale,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
