"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import {
  mockProducts,
  TCG_COLORS,
  TCG_KEYS,
  getAvailableMonths,
  getMonthKey,
  type TCGTitle,
} from "@/lib/mock-data";
import { ProductCard } from "@/components/ProductCard";
import { MonthFilter } from "@/components/MonthFilter";

export default function ProductsPage() {
  const { t } = useLanguage();
  const [selectedTcg, setSelectedTcg] = useState<string>("ALL");
  const [selectedMonth, setSelectedMonth] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"date" | "price" | "name">("date");

  const availableMonths = useMemo(() => getAvailableMonths(mockProducts), []);

  const filtered = useMemo(() => {
    return mockProducts
      .filter((p) => selectedTcg === "ALL" || p.tcgTitle === selectedTcg)
      .filter((p) => selectedMonth === "ALL" || getMonthKey(p.releaseDate) === selectedMonth)
      .sort((a, b) => {
        if (sortBy === "date") return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
        if (sortBy === "price") return a.lowestPrice - b.lowestPrice;
        return a.title.localeCompare(b.title);
      });
  }, [selectedTcg, selectedMonth, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="inline-block text-xs font-medium bg-red-50 text-red-700 px-3 py-1 rounded-full mb-2">
          {t("japanFocused")}
        </div>
        <h1 className="text-2xl font-bold">{t("productsTitle")}</h1>
      </div>

      {/* Month Filter */}
      <div className="mb-4 bg-card-bg border border-border rounded-xl p-4">
        <MonthFilter months={availableMonths} selected={selectedMonth} onChange={setSelectedMonth} />
      </div>

      {/* TCG + Sort */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTcg("ALL")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              selectedTcg === "ALL"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-200"
            }`}
          >
            {t("filterAll")}
          </button>
          {TCG_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setSelectedTcg(key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedTcg === key ? "bg-primary text-white" : `${TCG_COLORS[key as TCGTitle]} hover:opacity-80`
              }`}
            >
              {t(key)}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "date" | "price" | "name")}
          className="ml-auto border border-border rounded-lg px-3 py-1.5 text-sm bg-card-bg"
          aria-label={t("sortLabel")}
        >
          <option value="date">{t("sortByDate")}</option>
          <option value="price">{t("sortByPrice")}</option>
          <option value="name">{t("sortByName")}</option>
        </select>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted">{t("noResults")}</div>
      )}
    </div>
  );
}
