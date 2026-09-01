"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  className?: string;
}

export function ModeToggle({ className }: ModeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      aria-label="Toggle theme"
      className={cn(
        "border-border bg-muted/50 text-primary hover:bg-muted relative flex size-9 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105",
        className,
      )}
    >
      <FaSun className="hidden size-4 dark:block" />
      <FaMoon className="block size-4 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
