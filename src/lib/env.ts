const defaultSiteUrl = "https://master-template-beta.vercel.app";

function resolveSiteUrl(value: string | undefined): string {
  const candidate = value?.trim();

  if (!candidate) {
    return defaultSiteUrl;
  }

  try {
    const url = new URL(candidate);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return defaultSiteUrl;
    }

    return url.toString().replace(/\/$/, "");
  } catch {
    return defaultSiteUrl;
  }
}

const siteUrl = resolveSiteUrl(process.env["NEXT_PUBLIC_SITE_URL"]);
const siteName = process.env["NEXT_PUBLIC_SITE_NAME"] ?? "Master Template";
const siteDescription =
  process.env["NEXT_PUBLIC_SITE_DESCRIPTION"] ??
  "Production-ready Next.js 16 starter template with React 19, TypeScript, Tailwind CSS v4, next‑intl, Docker and CI/CD.";
const siteAuthor = process.env["NEXT_PUBLIC_SITE_AUTHOR"] ?? "Leonardo Becerril";
const siteLocale = process.env["NEXT_PUBLIC_SITE_LOCALE"];
const siteEnv = process.env.NODE_ENV;

export const env = {
  SITE_URL: siteUrl,
  SITE_NAME: siteName,
  SITE_DESCRIPTION: siteDescription,
  SITE_AUTHOR: siteAuthor,
  SITE_LOCALE: siteLocale,
  NODE_ENV: siteEnv,
} as const;
