"use client";

import { useState } from "react";
import Link from "next/link";
import { mockProducts, TCG_LABELS, TCG_COLORS, type TCGTitle } from "@/lib/mock-data";

const ALL_TITLES = ["ALL", ...Object.keys(TCG_LABELS)] as const;

export default function ProductsPage() {
  const [selectedTcg, setSelectedTcg] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"date" | "price" | "name">("date");

  const filtered = mockProducts
    .filter((p) => selectedTcg === "ALL" || p.tcgTitle === selectedTcg)
    .sort((a, b) => {
      if (sortBy === "date") return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      if (sortBy === "price") return a.lowestPrice - b.lowestPrice;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">商品一覧</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex flex-wrap gap-2">
          {ALL_TITLES.map((key) => (
            <button
              key={key}
              onClick={() => setSelectedTcg(key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedTcg === key
                  ? "bg-primary text-white"
                  : key === "ALL"
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : `${TCG_COLORS[key as TCGTitle]} hover:opacity-80`
              }`}
            >
              {key === "ALL" ? "すべて" : TCG_LABELS[key as TCGTitle]}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "date" | "price" | "name")}
          className="ml-auto border border-border rounded-lg px-3 py-1.5 text-sm bg-card-bg"
        >
          <option value="date">発売日順</option>
          <option value="price">価格順</option>
          <option value="name">名前順</option>
        </select>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-card-bg border border-border rounded-xl p-4 hover:shadow-md transition-shadow block"
          >
            <div className="flex items-start justify-between mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TCG_COLORS[product.tcgTitle]}`}>
                {TCG_LABELS[product.tcgTitle]}
              </span>
              {product.inStock ? (
                <span className="text-xs text-green-600 font-medium">在庫あり</span>
              ) : (
                <span className="text-xs text-red-500 font-medium">品切れ</span>
              )}
            </div>
            <div className="w-full h-28 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-3xl">
              🃏
            </div>
            <h3 className="text-sm font-semibold line-clamp-2 mb-2">{product.title}</h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-muted">最安値</p>
                <p className="text-base font-bold text-primary">¥{product.lowestPrice.toLocaleString()}</p>
              </div>
              <p className="text-xs text-muted">{product.shopCount}店舗</p>
            </div>
            <p className="text-xs text-muted mt-2">
              {new Date(product.releaseDate).toLocaleDateString("ja-JP")}
            </p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted">
          該当する商品が見つかりませんでした
        </div>
      )}
    </div>
  );
}
