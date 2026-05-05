"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/language-context";
import {
  mockProducts,
  mockNews,
  mockDeals,
  TCG_COLORS,
  TCG_KEYS,
  getAvailableMonths,
  getMonthKey,
} from "@/lib/mock-data";
import { ProductCard } from "@/components/ProductCard";
import { MonthFilter } from "@/components/MonthFilter";

export default function HomePage() {
  const { locale, t } = useLanguage();
  const [selectedMonth, setSelectedMonth] = useState<string>("ALL");

  const availableMonths = useMemo(() => getAvailableMonths(mockProducts), []);
  const filtered = useMemo(
    () =>
      selectedMonth === "ALL"
        ? mockProducts
        : mockProducts.filter((p) => getMonthKey(p.releaseDate) === selectedMonth),
    [selectedMonth]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center py-10 mb-6">
        <div className="inline-block text-xs font-medium bg-red-50 text-red-700 px-3 py-1 rounded-full mb-3">
          {t("japanFocused")}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {t("heroTitle1")}
          <span className="text-primary">{t("heroTitle2")}</span>
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-6">{t("heroSubtitle")}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/auth/register"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            {t("ctaRegister")}
          </Link>
          <Link
            href="/products"
            className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-card-bg transition-colors"
          >
            {t("ctaViewProducts")}
          </Link>
        </div>
      </section>

      {/* TCG Title Filter */}
      <section className="mb-6">
        <div className="flex flex-wrap justify-center gap-2">
          {TCG_KEYS.map((key) => (
            <Link
              key={key}
              href={`/products?tcg=${key}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${TCG_COLORS[key]} hover:opacity-80 transition-opacity`}
            >
              {t(key)}
            </Link>
          ))}
        </div>
      </section>

      {/* Month Filter */}
      <section className="mb-8 bg-card-bg border border-border rounded-xl p-4">
        <MonthFilter months={availableMonths} selected={selectedMonth} onChange={setSelectedMonth} />
      </section>

      {/* Latest Products */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{t("featuredProducts")}</h2>
          <Link href="/products" className="text-sm text-primary hover:underline">
            {t("viewAll")}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted py-8">{t("noResults")}</p>
        )}
      </section>

      {/* News & Deals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News */}
        <section className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">{t("latestNews")}</h2>
          <div className="space-y-3">
            {mockNews.map((news) => (
              <article
                key={news.id}
                className="bg-card-bg border border-border rounded-lg p-4 flex items-start gap-3"
              >
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${TCG_COLORS[news.tcgTitle]}`}
                >
                  {t(news.tcgTitle)}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium line-clamp-1">
                    {news.isPremium && (
                      <span className="inline-flex items-center text-xs text-amber-600 font-semibold mr-1">
                        👑 PREMIUM
                      </span>
                    )}
                    {locale === "zh" ? news.titleZh : news.title}
                  </h3>
                  <p className="text-xs text-muted mt-1">{news.publishedAt}</p>
                </div>
                {news.isPremium && (
                  <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded shrink-0">
                    {t("premiumLabel")}
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Deals Sidebar */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{t("deals")}</h2>
            <Link href="/deals" className="text-sm text-primary hover:underline">
              {t("seeAll")}
            </Link>
          </div>
          <div className="space-y-3">
            {mockDeals.map((deal) => (
              <article key={deal.id} className="bg-card-bg border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-amber-600">
                    {locale === "zh" ? deal.discountZh : deal.discount}
                  </span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${TCG_COLORS[deal.tcgTitle]}`}>
                    {t(deal.tcgTitle)}
                  </span>
                </div>
                <h3 className="text-sm font-medium">{locale === "zh" ? deal.titleZh : deal.title}</h3>
                <p className="text-xs text-muted mt-1">
                  {deal.shopName} | ~{deal.expiresAt}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Banner */}
      <section className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">{t("ctaTitle")}</h2>
        <p className="text-muted mb-4">{t("ctaDesc")}</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {t("ctaFeature1")}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {t("ctaFeature2")}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {t("ctaFeature3")}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {t("ctaFeature4")}
          </div>
        </div>
        <Link
          href="/auth/register"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          {t("ctaButton")}
        </Link>
      </section>
    </div>
  );
}
