"use client";

import { useLanguage } from "@/lib/language-context";

interface Props {
  months: string[];
  selected: string;
  onChange: (month: string) => void;
}

export function MonthFilter({ months, selected, onChange }: Props) {
  const { locale, t } = useLanguage();

  const formatMonth = (month: string) => {
    const date = new Date(month + "-01");
    if (locale === "zh") {
      return `${date.getFullYear()}年${date.getMonth() + 1}月`;
    }
    return date.toLocaleDateString("ja-JP", { year: "numeric", month: "long" });
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold text-muted shrink-0 mr-1">📅 {t("filterMonth")}</span>
      <button
        onClick={() => onChange("ALL")}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
          selected === "ALL"
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-200"
        }`}
      >
        {t("filterAll")}
      </button>
      {months.map((month) => (
        <button
          key={month}
          onClick={() => onChange(month)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            selected === month
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-200"
          }`}
        >
          {formatMonth(month)}
        </button>
      ))}
    </div>
  );
}
