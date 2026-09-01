"use client";

import { TerminalLine } from "@/components/ui/terminal-line";

export function TerminalPreview() {
  return (
    <div className="bg-card border-border/50 overflow-hidden rounded-lg border shadow-lg backdrop-blur-sm">
      <div className="bg-muted/50 border-border/50 flex items-center gap-2 border-b px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-500/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        <span className="text-foreground ml-2 font-mono text-xs">nextjs@master-template:~$</span>
      </div>
      <div className="space-y-3 p-6">
        <TerminalLine delay={200}>
          <span className="text-foreground font-bold">pnpm dev</span>
        </TerminalLine>
        <TerminalLine delay={600}>
          <span className="text-muted-foreground">▲ Next.js 16 (Turbopack)</span>
        </TerminalLine>
        <TerminalLine delay={1000}>
          <span className="text-foreground font-bold">cat stack.config.json</span>
        </TerminalLine>
        <TerminalLine delay={1400}>
          <span className="text-muted-foreground">
            React 19 · TypeScript · Tailwind v4 · next-intl
          </span>
        </TerminalLine>
        <TerminalLine delay={1800}>
          <span className="text-foreground font-bold">git log --oneline -3</span>
        </TerminalLine>
        {[
          {
            delay: 2200,
            hash: "a3f9e2b",
            msg: "feat: production master template architecture",
          },
          { delay: 2500, hash: "7d1c08a", msg: "perf: server components & i18n" },
          { delay: 2800, hash: "e5b4f91", msg: "ci: docker healthcheck & vitest" },
        ].map(({ delay, hash, msg }) => (
          <TerminalLine key={hash} delay={delay}>
            <span className="font-mono text-amber-700 dark:text-amber-400">{hash}</span>
            <span className="text-muted-foreground"> {msg}</span>
          </TerminalLine>
        ))}
        <TerminalLine delay={3200}>
          <span className="text-primary animate-pulse">█</span>
        </TerminalLine>
      </div>
    </div>
  );
}
