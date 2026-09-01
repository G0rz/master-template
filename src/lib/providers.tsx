import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextIntlClientProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
