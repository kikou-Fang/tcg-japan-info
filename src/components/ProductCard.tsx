"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { TCG_COLORS, type Product } from "@/lib/mock-data";

export function ProductCard({ product }: { product: Product }) {
  const { locale, t } = useLanguage();
  const title = locale === "zh" ? product.titleZh : product.title;
  const dateLocale = locale === "zh" ? "zh-CN" : "ja-JP";

  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-card-bg border border-border rounded-xl p-4 hover:shadow-md transition-shadow block"
    >
      <div className="flex items-start justify-between mb-2 gap-2">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TCG_COLORS[product.tcgTitle]}`}>
          {t(product.tcgTitle)}
        </span>
        {product.inStock ? (
          <span className="text-xs text-green-600 font-medium shrink-0">{t("inStock")}</span>
        ) : (
          <span className="text-xs text-red-500 font-medium shrink-0">{t("outOfStock")}</span>
        )}
      </div>
      <div className="w-full h-28 bg-gray-100 dark:bg-slate-700 rounded-lg mb-3 flex items-center justify-center text-3xl">
        🃏
      </div>
      <h3 className="text-sm font-semibold line-clamp-2 mb-2 min-h-[2.5rem]">{title}</h3>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-muted">{t("lowestPrice")}</p>
          <p className="text-base font-bold text-primary">¥{product.lowestPrice.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted">{t("officialPrice")} ¥{product.officialPrice.toLocaleString()}</p>
          <p className="text-xs text-muted">{product.shopCount} {t("shopCount")}</p>
        </div>
      </div>
      <p className="text-xs text-muted mt-2">
        {t("releaseDate")}: {new Date(product.releaseDate).toLocaleDateString(dateLocale)}
      </p>
    </Link>
  );
}
