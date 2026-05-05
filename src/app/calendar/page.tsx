"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import {
  mockProducts,
  TCG_COLORS,
  getAvailableMonths,
  getMonthKey,
} from "@/lib/mock-data";
import { MonthFilter } from "@/components/MonthFilter";

export default function CalendarPage() {
  const { locale, t } = useLanguage();
  const [selectedMonth, setSelectedMonth] = useState<string>("ALL");

  const availableMonths = useMemo(() => getAvailableMonths(mockProducts), []);
  const dateLocale = locale === "zh" ? "zh-CN" : "ja-JP";

  const sortedByDate = useMemo(
    () =>
      [...mockProducts].sort(
        (a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
      ),
    []
  );

  const filtered = useMemo(
    () => sortedByDate.filter((p) => selectedMonth === "ALL" || getMonthKey(p.releaseDate) === selectedMonth),
    [sortedByDate, selectedMonth]
  );

  const grouped = useMemo(() => {
    return filtered.reduce((acc, product) => {
      const month = getMonthKey(product.releaseDate);
      if (!acc[month]) acc[month] = [];
      acc[month].push(product);
      return acc;
    }, {} as Record<string, typeof mockProducts>);
  }, [filtered]);

  const formatMonth = (month: string) => {
    const date = new Date(month + "-01");
    if (locale === "zh") return `${date.getFullYear()}年${date.getMonth() + 1}月`;
    return date.toLocaleDateString("ja-JP", { year: "numeric", month: "long" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="inline-block text-xs font-medium bg-red-50 text-red-700 px-3 py-1 rounded-full mb-2">
          {t("japanFocused")}
        </div>
        <h1 className="text-2xl font-bold mb-1">{t("calendarTitle")}</h1>
        <p className="text-sm text-muted">{t("calendarSubtitle")}</p>
      </div>

      <div className="mb-6 bg-card-bg border border-border rounded-xl p-4">
        <MonthFilter months={availableMonths} selected={selectedMonth} onChange={setSelectedMonth} />
      </div>

      {Object.entries(grouped).map(([month, products]) => (
        <section key={month} className="mb-8">
          <h2 className="text-lg font-bold mb-4 sticky top-16 bg-background py-2 border-b border-border">
            {formatMonth(month)}
            <span className="ml-2 text-xs font-normal text-muted">
              {products.length} {locale === "zh" ? "个商品" : "件"}
            </span>
          </h2>
          <div className="space-y-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card-bg border border-border rounded-lg p-4 flex items-center gap-4"
              >
                <div className="text-center min-w-[60px]">
                  <p className="text-2xl font-bold text-primary">
                    {new Date(product.releaseDate).getDate()}
                  </p>
                  <p className="text-xs text-muted">
                    {new Date(product.releaseDate).toLocaleDateString(dateLocale, { weekday: "short" })}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TCG_COLORS[product.tcgTitle]}`}>
                      {t(product.tcgTitle)}
                    </span>
                    {product.inStock ? (
                      <span className="text-xs text-green-600">{t("available")}</span>
                    ) : (
                      <span className="text-xs text-red-500">{t("closed")}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold">
                    {locale === "zh" ? product.titleZh : product.title}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold">¥{product.officialPrice.toLocaleString()}</p>
                  <p className="text-xs text-muted">{t("officialPrice")}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted">{t("noResults")}</div>
      )}
    </div>
  );
}
