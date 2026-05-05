import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card-bg border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-sm mb-3">TCG Japan Info</h3>
            <p className="text-xs text-muted">
              日本のTCG販売情報を毎日更新。価格比較・在庫状況・発売日を一元管理。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-xs mb-3 text-muted uppercase tracking-wide">タイトル別</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/products?tcg=pokemon" className="text-muted hover:text-foreground">ポケモンカード</Link></li>
              <li><Link href="/products?tcg=yugioh" className="text-muted hover:text-foreground">遊戯王</Link></li>
              <li><Link href="/products?tcg=onepiece" className="text-muted hover:text-foreground">ワンピースカード</Link></li>
              <li><Link href="/products?tcg=mtg" className="text-muted hover:text-foreground">MTG</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xs mb-3 text-muted uppercase tracking-wide">サービス</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/calendar" className="text-muted hover:text-foreground">発売カレンダー</Link></li>
              <li><Link href="/deals" className="text-muted hover:text-foreground">セール情報</Link></li>
              <li><Link href="/dashboard" className="text-muted hover:text-foreground">マイページ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xs mb-3 text-muted uppercase tracking-wide">サポート</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/about" className="text-muted hover:text-foreground">サイトについて</Link></li>
              <li><Link href="/privacy" className="text-muted hover:text-foreground">プライバシーポリシー</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-foreground">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border text-center text-xs text-muted">
          &copy; 2026 TCG Japan Info. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
