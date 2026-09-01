const siteUrl = process.env["NEXT_PUBLIC_SITE_URL"] ?? "http://localhost:3000";
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
