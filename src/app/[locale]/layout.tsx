import { type ReactNode, Suspense } from "react";
import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Montserrat } from "next/font/google";
import { hasLocale } from "next-intl";
import { getLocale } from "next-intl/server";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import JsonLd from "@/components/seo/json-ld";
import { routing } from "@/i18n/routing";
import Providers from "@/lib/providers";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import "../globals.css";

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

const montserratHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export async function generateMetadata({}: Props): Promise<Metadata> {
  const locale = await getLocale();
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    authors: [{ name: siteConfig.author }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
    },
  };
}

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        ibmPlexSans.variable,
        montserratHeading.variable,
        jetbrains.variable,
        "antialiased",
      )}
    >
      <body className="bg-background text-foreground min-h-screen font-sans transition-colors duration-300 ease-in">
        <JsonLd locale={locale} />
        <Suspense fallback={null}>
          <Providers>
            <Navbar />
            <main tabIndex={-1} className="min-h-screen">
              {children}
            </main>
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
