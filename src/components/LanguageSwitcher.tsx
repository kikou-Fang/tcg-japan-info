"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`inline-flex items-center rounded-lg border border-border bg-card-bg overflow-hidden ${compact ? "text-xs" : "text-sm"}`}>
      <button
        onClick={() => setLocale("ja")}
        className={`px-2.5 py-1 font-medium transition-colors ${
          locale === "ja" ? "bg-primary text-white" : "text-muted hover:text-foreground"
        }`}
        aria-label="日本語"
      >
        🇯🇵 JA
      </button>
      <button
        onClick={() => setLocale("zh")}
        className={`px-2.5 py-1 font-medium transition-colors ${
          locale === "zh" ? "bg-primary text-white" : "text-muted hover:text-foreground"
        }`}
        aria-label="中文"
      >
        🇨🇳 中文
      </button>
    </div>
  );
}
