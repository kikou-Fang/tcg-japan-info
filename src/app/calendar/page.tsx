import { mockProducts, TCG_LABELS, TCG_COLORS } from "@/lib/mock-data";

export default function CalendarPage() {
  const sortedByDate = [...mockProducts].sort(
    (a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
  );

  const grouped = sortedByDate.reduce((acc, product) => {
    const month = product.releaseDate.slice(0, 7);
    if (!acc[month]) acc[month] = [];
    acc[month].push(product);
    return acc;
  }, {} as Record<string, typeof mockProducts>);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">発売カレンダー</h1>
      <p className="text-sm text-muted mb-8">TCG新商品の発売スケジュールを一覧表示</p>

      {Object.entries(grouped).map(([month, products]) => (
        <section key={month} className="mb-8">
          <h2 className="text-lg font-bold mb-4 sticky top-16 bg-background py-2 border-b border-border">
            {new Date(month + "-01").toLocaleDateString("ja-JP", { year: "numeric", month: "long" })}
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
                    {new Date(product.releaseDate).toLocaleDateString("ja-JP", { weekday: "short" })}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TCG_COLORS[product.tcgTitle]}`}>
                      {TCG_LABELS[product.tcgTitle]}
                    </span>
                    {product.inStock ? (
                      <span className="text-xs text-green-600">予約可</span>
                    ) : (
                      <span className="text-xs text-red-500">予約終了</span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold">{product.title}</h3>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold">¥{product.officialPrice.toLocaleString()}</p>
                  <p className="text-xs text-muted">定価</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
