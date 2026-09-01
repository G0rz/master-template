import * as rootParams from "next/root-params";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import type { AbstractIntlMessages } from "next-intl";
import { routing } from "./routing";

interface MessagesModule {
  default: AbstractIntlMessages;
}

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    const paramValue = await rootParams.locale();
    if (hasLocale(routing.locales, paramValue)) {
      locale = paramValue;
    } else {
      notFound();
    }
  }

  const messagesModule = (await import(`messages/${locale}.json`)) as MessagesModule;

  return {
    locale,
    messages: messagesModule.default,
  };
});
