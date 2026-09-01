"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaBars, FaTerminal, FaXmark } from "react-icons/fa6";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { usePathname, useRouter } from "@/i18n/navigation";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface LinksProps {
  labelKey: string;
  id: string;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const tNav = useTranslations("Navigation");

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  function handleLocaleChange(newLocale: "en" | "es") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <header
      className={cn(
        scrolled
          ? "border-border/50 bg-background/80 border-b backdrop-blur-md"
          : "border-none bg-transparent backdrop-blur-none",
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-1.5 font-mono text-sm font-medium">
          <FaTerminal className="text-primary size-4" />
          <span className="text-primary">~</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-semibold">{siteConfig.name}</span>
        </a>

        <nav aria-label="Desktop navigation" className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map(({ labelKey, id }: LinksProps) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-muted-foreground hover:text-primary font-mono text-xs tracking-wide capitalize transition-colors duration-200"
                >
                  {tNav(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="border-border bg-muted/40 text-foreground flex items-center rounded-lg border font-mono text-xs">
            <button
              onClick={() => {
                handleLocaleChange("en");
              }}
              aria-label="Switch to English"
              className={cn(
                "rounded px-1.5 py-0.5 transition-colors",
                locale === "en"
                  ? "bg-primary text-primary-foreground font-bold"
                  : "hover:text-primary",
              )}
            >
              EN
            </button>
            <button
              onClick={() => {
                handleLocaleChange("es");
              }}
              aria-label="Cambiar a Español"
              className={cn(
                "rounded px-1.5 py-0.5 transition-colors",
                locale === "es"
                  ? "bg-primary text-primary-foreground font-bold"
                  : "hover:text-primary",
              )}
            >
              ES
            </button>
          </div>
          <ModeToggle />
        </div>
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="border-border bg-muted/50 text-foreground hover:bg-muted flex size-9 items-center justify-center rounded-lg border transition-all md:hidden"
        >
          {mobileMenuOpen ? <FaXmark className="size-4" /> : <FaBars className="size-4" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className={cn(
            scrolled ? "" : "bg-background border-border border-b",
            "animate-in slide-in-from-top-2 px-6 py-6 transition-all md:hidden",
          )}
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ labelKey, id }: LinksProps) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className="border-border text-foreground hover:text-primary block border-b font-mono text-sm tracking-wide capitalize transition-colors"
                  >
                    {tNav(labelKey)}
                  </a>
                </li>
              ))}
              <li className="flex w-full items-center justify-around" id="options">
                <div className="border-border bg-muted/40 text-foreground flex items-center rounded-lg border font-mono text-xs">
                  <button
                    onClick={() => {
                      handleLocaleChange("en");
                    }}
                    aria-label="Switch to English"
                    className={cn(
                      "rounded px-1.5 py-0.5 transition-colors",
                      locale === "en"
                        ? "bg-primary text-primary-foreground font-bold"
                        : "hover:text-primary",
                    )}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      handleLocaleChange("es");
                    }}
                    aria-label="Cambiar a Español"
                    className={cn(
                      "rounded px-1.5 py-0.5 transition-colors",
                      locale === "es"
                        ? "bg-primary text-primary-foreground font-bold"
                        : "hover:text-primary",
                    )}
                  >
                    ES
                  </button>
                </div>
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
