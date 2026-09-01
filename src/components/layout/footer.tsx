import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-border/50 bg-card/20 w-full border-t py-6 text-center">
      <p className="text-muted-foreground font-mono text-xs">
        ©{new Date().getFullYear()} {siteConfig.author}
      </p>
    </footer>
  );
}
