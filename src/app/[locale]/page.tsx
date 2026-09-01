import { getLocale, getTranslations } from "next-intl/server";
import { FaArrowRight } from "react-icons/fa6";
import { TerminalPreview } from "@/components/layout/terminal-preview";
import { siteConfig } from "@/lib/site-config";

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <div className="relative overflow-hidden">
      <div className="grid-background pointer-events-none absolute inset-0" />
      <div className="glow-dot-1 pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full" />
      <div className="glow-dot-2 pointer-events-none absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full" />
      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24 pb-16"
      >
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="border-border bg-muted/50 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs">
              <span className="bg-primary shadow-primary h-2 w-2 animate-pulse rounded-full shadow-[0px_0px_6px]" />
              {t("statusLabel")}
            </div>

            <div className="space-y-4">
              <p className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
                {t("badge")}
              </p>
              <h1
                className="text-foreground font-mono leading-none font-bold"
                style={{
                  fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("title")}
                <span className="text-primary">.</span>
              </h1>
              <p className="text-muted-foreground max-w-lg font-sans text-base leading-relaxed font-light md:text-lg">
                {t("about")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm font-semibold shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
              >
                {t("primaryCta")} <FaArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="w-full">
            <TerminalPreview />
          </div>
        </div>
      </section>
    </div>
  );
}
