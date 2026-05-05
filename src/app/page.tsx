import Link from "next/link";
import { mockProducts, mockNews, mockDeals, TCG_LABELS, TCG_COLORS } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center py-12 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          日本TCG販売情報<span className="text-primary">完全ガイド</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-6">
          ポケモン・遊戯王・ワンピース・MTG — 全タイトルの価格比較・在庫情報・発売日を毎日更新
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/auth/register"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            無料で会員登録
          </Link>
          <Link
            href="/products"
            className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-card-bg transition-colors"
          >
            商品を見る
          </Link>
        </div>
      </section>

      {/* TCG Title Filter */}
      <section className="mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {Object.entries(TCG_LABELS).map(([key, label]) => (
            <Link
              key={key}
              href={`/products?tcg=${key.toLowerCase()}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${TCG_COLORS[key as keyof typeof TCG_COLORS]} hover:opacity-80 transition-opacity`}
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Products */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">注目の新商品</h2>
          <Link href="/products" className="text-sm text-primary hover:underline">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockProducts.slice(0, 6).map((product) => (
            <article
              key={product.id}
              className="bg-card-bg border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${TCG_COLORS[product.tcgTitle]}`}
                >
                  {TCG_LABELS[product.tcgTitle]}
                </span>
                {product.inStock ? (
                  <span className="text-xs text-green-600 font-medium">在庫あり</span>
                ) : (
                  <span className="text-xs text-red-500 font-medium">品切れ</span>
                )}
              </div>
              <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-4xl">
                🃏
              </div>
              <h3 className="text-sm font-semibold line-clamp-2 mb-2">{product.title}</h3>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-muted">最安値</p>
                  <p className="text-lg font-bold text-primary">¥{product.lowestPrice.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted">定価 ¥{product.officialPrice.toLocaleString()}</p>
                  <p className="text-xs text-muted">{product.shopCount}店舗比較</p>
                </div>
              </div>
              <p className="text-xs text-muted mt-2">
                発売日: {new Date(product.releaseDate).toLocaleDateString("ja-JP")}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* News & Deals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News */}
        <section className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">最新ニュース</h2>
          </div>
          <div className="space-y-3">
            {mockNews.map((news) => (
              <article
                key={news.id}
                className="bg-card-bg border border-border rounded-lg p-4 flex items-start gap-3"
              >
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${TCG_COLORS[news.tcgTitle]}`}
                >
                  {TCG_LABELS[news.tcgTitle]}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium line-clamp-1">
                    {news.isPremium && (
                      <span className="inline-flex items-center text-xs text-accent font-semibold mr-1">
                        👑 PREMIUM
                      </span>
                    )}
                    {news.title}
                  </h3>
                  <p className="text-xs text-muted mt-1">{news.publishedAt}</p>
                </div>
                {news.isPremium && (
                  <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded shrink-0">
                    会員限定
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Deals Sidebar */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">セール情報</h2>
            <Link href="/deals" className="text-sm text-primary hover:underline">
              すべて →
            </Link>
          </div>
          <div className="space-y-3">
            {mockDeals.map((deal) => (
              <article
                key={deal.id}
                className="bg-card-bg border border-border rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-amber-600">{deal.discount}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${TCG_COLORS[deal.tcgTitle]}`}>
                    {TCG_LABELS[deal.tcgTitle]}
                  </span>
                </div>
                <h3 className="text-sm font-medium">{deal.title}</h3>
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
        <h2 className="text-2xl font-bold mb-2">情報格差をなくそう</h2>
        <p className="text-muted mb-4">
          無料会員登録でリアルタイム価格情報・カスタムアラート・お気に入り機能を利用可能
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>リアルタイム情報
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>カスタムアラート
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>お気に入り管理
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>価格推移グラフ
          </div>
        </div>
        <Link
          href="/auth/register"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          無料で始める
        </Link>
      </section>
    </div>
  );
}
