import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} - Next.js 16 Master Template`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isSpanish = locale === "es";

  const tagline = isSpanish
    ? "Template Maestro para Producción con Next.js 16, React 19 y Tailwind CSS v4"
    : "Production-ready Master Template with Next.js 16, React 19 & Tailwind CSS v4";

  const stackBadge = isSpanish ? "Arquitectura Web Moderna" : "Modern Web Architecture";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "#09090b",
        padding: "64px 80px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow background accent */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(9, 9, 11, 0) 70%)",
        }}
      />

      {/* Header with badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "#10b981",
            color: "#09090b",
            fontWeight: 800,
            fontSize: "24px",
          }}
        >
          ▲
        </div>
        <div
          style={{
            padding: "6px 16px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#a1a1aa",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {stackBadge}
        </div>
      </div>

      {/* Center content: Title and Tagline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "960px",
        }}
      >
        <div
          style={{
            fontSize: "58px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#fafafa",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: 1.4,
            color: "#a1a1aa",
          }}
        >
          {tagline}
        </div>
      </div>

      {/* Footer: Tech tags and URL */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Next.js 16", "React 19", "Tailwind v4", "TypeScript", "i18n"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "4px 12px",
                borderRadius: "6px",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "#34d399",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#71717a",
            fontWeight: 500,
          }}
        >
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
