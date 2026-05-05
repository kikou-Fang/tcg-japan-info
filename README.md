# TCG Japan Info

日本TCG（トレーディングカードゲーム）販売情報の完全ガイドサイト。ポケモン・遊戯王・ワンピース・MTGなど主要TCGの価格比較・在庫情報・発売日を一元管理。

## 🎯 プロジェクトの目的

- 日本TCGの販売情報を一元化
- 情報格差をなくし、誰でも公平に最新情報にアクセス
- カスタムアラート・お気に入り機能でパーソナライズ
- 毎日最新情報を更新

## ✨ 会員レベル別機能

| 機能 | 非会員 | 無料会員 | プレミアム |
|------|:------:|:-------:|:----------:|
| 商品閲覧 | ✓ | ✓ | ✓ |
| 価格比較 | 上位3件 | 上位10件 | 全件 |
| リアルタイム情報 | 3日遅れ | ✓ | ✓ |
| カスタムアラート | × | 3件 | 無制限 |
| お気に入り | × | 10件 | 無制限 |
| 価格推移グラフ | × | 1ヶ月 | 全期間 |
| 在庫復活通知 | × | × | ✓ |
| CSV/APIエクスポート | × | × | ✓ |

プレミアム: 月額 ¥980

## 🛠 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイル**: Tailwind CSS v4
- **DB**: PostgreSQL (Prisma ORM)
- **認証**: NextAuth.js
- **デプロイ**: Railway

## 📁 ディレクトリ構造

```
tcg-site/
├── src/
│   ├── app/              # ページ (App Router)
│   ├── components/       # UIコンポーネント
│   └── lib/              # ユーティリティ・モックデータ
├── prisma/
│   └── schema.prisma     # DBスキーマ
└── public/               # 静的アセット
```

## 🚀 セットアップ

```bash
git clone https://github.com/kikou-Fang/tcg-japan-info.git
cd tcg-japan-info
npm install
cp .env.example .env       # DB接続情報を設定
npx prisma generate
npm run dev
```

http://localhost:3000 でアクセス

## 🌐 Railway デプロイ

```bash
railway login
railway init
railway up
```

または GitHub 連携で自動デプロイ:
1. https://railway.com/new で New Project
2. "Deploy from GitHub repo" → `kikou-Fang/tcg-japan-info` を選択
3. PostgreSQL プラグインを追加
4. 環境変数 `DATABASE_URL` を自動接続

## 📊 主要データモデル

`User` / `Product` / `Shop` / `Price` / `Favorite` / `Alert` / `NewsItem`

詳細は `prisma/schema.prisma` 参照

## 📝 ライセンス

MIT
