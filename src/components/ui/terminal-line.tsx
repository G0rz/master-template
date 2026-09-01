"use client";
import { useEffect, useState } from "react";

export function TerminalLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => {
      clearTimeout(t);
    };
  }, [delay]);
  return (
    <div
      className="flex items-start gap-3 transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(8px)" }}
    >
      <span
        style={{ color: "#00d4aa", fontFamily: "JetBrains Mono, monospace" }}
        className="text-sm select-none"
      >
        &gt;
      </span>
      <span style={{ fontFamily: "JetBrains Mono, monospace" }} className="text-sm">
        {children}
      </span>
    </div>
  );
}
