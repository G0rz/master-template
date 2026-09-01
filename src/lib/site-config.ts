import { env } from "./env";

export const siteConfig = {
  name: env.SITE_NAME,
  shortName: "MT",
  description: env.SITE_DESCRIPTION,
  author: env.SITE_AUTHOR,
  url: env.SITE_URL,
  links: {
    github: "https://github.com/G0rz/master-template",
    website: "https://www.leonardobecerril.dev/",
  },
} as const;

export const navLinks = [{ labelKey: "home", id: "home" }] as const;
