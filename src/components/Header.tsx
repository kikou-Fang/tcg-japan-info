"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/products", label: t("navProducts") },
    { href: "/calendar", label: t("navCalendar") },
    { href: "/deals", label: t("navDeals") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card-bg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🃏</span>
          <span className="font-bold text-base md:text-lg text-primary">{t("siteName")}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitcher compact />
          <Link
            href="/auth/login"
            className="hidden md:inline text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            {t("login")}
          </Link>
          <Link
            href="/auth/register"
            className="hidden md:inline text-sm font-medium bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            {t("register")}
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t("menu")}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card-bg px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-muted hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-border flex gap-3">
            <Link href="/auth/login" className="text-sm font-medium text-muted">
              {t("login")}
            </Link>
            <Link href="/auth/register" className="text-sm font-medium text-primary">
              {t("register")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
