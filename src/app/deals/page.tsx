import { mockDeals, TCG_LABELS, TCG_COLORS } from "@/lib/mock-data";

export default function DealsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">セール・キャンペーン情報</h1>
      <p className="text-sm text-muted mb-8">各ショップの最新セール・割引情報を毎日更新</p>

      <div className="space-y-4">
        {mockDeals.map((deal) => (
          <article
            key={deal.id}
            className="bg-card-bg border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                    {deal.discount}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TCG_COLORS[deal.tcgTitle]}`}>
                    {TCG_LABELS[deal.tcgTitle]}
                  </span>
                </div>
                <h2 className="text-base font-semibold mb-1">{deal.title}</h2>
                <p className="text-sm text-muted">{deal.shopName}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-muted">期限</p>
                <p className="text-sm font-medium">
                  {new Date(deal.expiresAt).toLocaleDateString("ja-JP")}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <p className="text-sm font-medium mb-2">プレミアム会員限定</p>
        <p className="text-xs text-muted mb-3">
          在庫復活通知やショップ限定クーポンはプレミアム会員のみ配信
        </p>
        <a
          href="/auth/register"
          className="inline-block text-sm bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          会員登録する
        </a>
      </div>
    </div>
  );
}
