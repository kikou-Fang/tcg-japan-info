"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { mockDeals, TCG_COLORS } from "@/lib/mock-data";

export default function DealsPage() {
  const { locale, t } = useLanguage();
  const dateLocale = locale === "zh" ? "zh-CN" : "ja-JP";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="inline-block text-xs font-medium bg-red-50 text-red-700 px-3 py-1 rounded-full mb-2">
          {t("japanFocused")}
        </div>
        <h1 className="text-2xl font-bold mb-1">{t("dealsTitle")}</h1>
        <p className="text-sm text-muted">{t("dealsSubtitle")}</p>
      </div>

      <div className="space-y-4">
        {mockDeals.map((deal) => (
          <article
            key={deal.id}
            className="bg-card-bg border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                    {locale === "zh" ? deal.discountZh : deal.discount}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TCG_COLORS[deal.tcgTitle]}`}>
                    {t(deal.tcgTitle)}
                  </span>
                </div>
                <h2 className="text-base font-semibold mb-1">
                  {locale === "zh" ? deal.titleZh : deal.title}
                </h2>
                <p className="text-sm text-muted">{deal.shopName}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-muted">{t("expiresAt")}</p>
                <p className="text-sm font-medium">
                  {new Date(deal.expiresAt).toLocaleDateString(dateLocale)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <p className="text-sm font-medium mb-2">{t("premiumOnly")}</p>
        <p className="text-xs text-muted mb-3">{t("premiumDealsDesc")}</p>
        <Link
          href="/auth/register"
          className="inline-block text-sm bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          {t("register")}
        </Link>
      </div>
    </div>
  );
}
