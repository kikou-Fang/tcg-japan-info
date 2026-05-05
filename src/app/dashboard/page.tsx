import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">マイページ</h1>
          <p className="text-sm text-muted">TCG太郎さん・無料会員</p>
        </div>
        <button className="text-sm border border-border rounded-lg px-4 py-2 hover:bg-card-bg transition-colors">
          設定
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card-bg border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-primary">3</p>
          <p className="text-xs text-muted">お気に入り</p>
        </div>
        <div className="bg-card-bg border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-primary">1</p>
          <p className="text-xs text-muted">アラート</p>
        </div>
        <div className="bg-card-bg border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-primary">5</p>
          <p className="text-xs text-muted">閲覧履歴</p>
        </div>
        <div className="bg-card-bg border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">FREE</p>
          <p className="text-xs text-muted">プラン</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link
          href="/dashboard/favorites"
          className="bg-card-bg border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold mb-1">お気に入り商品</h3>
          <p className="text-sm text-muted">登録した商品の価格変動をチェック</p>
        </Link>
        <Link
          href="/dashboard/alerts"
          className="bg-card-bg border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold mb-1">アラート設定</h3>
          <p className="text-sm text-muted">価格や在庫の通知条件を管理</p>
        </Link>
      </div>

      {/* Upgrade Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg mb-1">👑 プレミアムにアップグレード</h3>
            <p className="text-sm text-muted">
              無制限アラート・全店舗比較・在庫通知・CSVエクスポート
            </p>
          </div>
          <button className="bg-amber-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors shrink-0">
            月額 ¥980
          </button>
        </div>
      </div>
    </div>
  );
}
