"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card-bg border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-sm mb-3">{t("siteName")}</h3>
            <p className="text-xs text-muted">{t("footerTagline")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-xs mb-3 text-muted uppercase tracking-wide">{t("byTitle")}</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/products?tcg=POKEMON" className="text-muted hover:text-foreground">{t("POKEMON")}</Link></li>
              <li><Link href="/products?tcg=YUGIOH" className="text-muted hover:text-foreground">{t("YUGIOH")}</Link></li>
              <li><Link href="/products?tcg=ONE_PIECE" className="text-muted hover:text-foreground">{t("ONE_PIECE")}</Link></li>
              <li><Link href="/products?tcg=MTG" className="text-muted hover:text-foreground">{t("MTG")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xs mb-3 text-muted uppercase tracking-wide">{t("services")}</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/calendar" className="text-muted hover:text-foreground">{t("navCalendar")}</Link></li>
              <li><Link href="/deals" className="text-muted hover:text-foreground">{t("navDeals")}</Link></li>
              <li><Link href="/dashboard" className="text-muted hover:text-foreground">{t("myPage")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xs mb-3 text-muted uppercase tracking-wide">{t("support")}</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/about" className="text-muted hover:text-foreground">{t("aboutSite")}</Link></li>
              <li><Link href="/privacy" className="text-muted hover:text-foreground">{t("privacy")}</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-foreground">{t("contact")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border text-center text-xs text-muted">
          &copy; 2026 TCG Japan Info. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
