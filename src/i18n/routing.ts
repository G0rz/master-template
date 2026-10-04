import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  localeCookie: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },
});
