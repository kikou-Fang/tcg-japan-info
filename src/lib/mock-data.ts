export type TCGTitle = "POKEMON" | "YUGIOH" | "ONE_PIECE" | "MTG" | "DRAGON_BALL" | "WEISS_SCHWARZ";

export interface Product {
  id: string;
  title: string;
  tcgTitle: TCGTitle;
  releaseDate: string;
  imageUrl: string;
  officialPrice: number;
  lowestPrice: number;
  shopCount: number;
  inStock: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  tcgTitle: TCGTitle;
  publishedAt: string;
  isPremium: boolean;
}

export interface Deal {
  id: string;
  shopName: string;
  title: string;
  discount: string;
  tcgTitle: TCGTitle;
  expiresAt: string;
}

export const TCG_LABELS: Record<TCGTitle, string> = {
  POKEMON: "ポケモンカード",
  YUGIOH: "遊戯王",
  ONE_PIECE: "ワンピースカード",
  MTG: "MTG",
  DRAGON_BALL: "ドラゴンボールカード",
  WEISS_SCHWARZ: "ヴァイスシュヴァルツ",
};

export const TCG_COLORS: Record<TCGTitle, string> = {
  POKEMON: "bg-yellow-100 text-yellow-800",
  YUGIOH: "bg-purple-100 text-purple-800",
  ONE_PIECE: "bg-red-100 text-red-800",
  MTG: "bg-blue-100 text-blue-800",
  DRAGON_BALL: "bg-orange-100 text-orange-800",
  WEISS_SCHWARZ: "bg-pink-100 text-pink-800",
};

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "ポケモンカードゲーム スカーレット&バイオレット 強化拡張パック「クリムゾンヘイズ」",
    tcgTitle: "POKEMON",
    releaseDate: "2026-05-23",
    imageUrl: "/placeholder-pokemon.png",
    officialPrice: 290,
    lowestPrice: 260,
    shopCount: 12,
    inStock: true,
  },
  {
    id: "2",
    title: "遊戯王OCG デュエルモンスターズ INFINITE FORBIDDEN",
    tcgTitle: "YUGIOH",
    releaseDate: "2026-05-25",
    imageUrl: "/placeholder-yugioh.png",
    officialPrice: 176,
    lowestPrice: 155,
    shopCount: 8,
    inStock: true,
  },
  {
    id: "3",
    title: "ONE PIECEカードゲーム ブースターパック 双璧の覇者【OP-06】",
    tcgTitle: "ONE_PIECE",
    releaseDate: "2026-05-30",
    imageUrl: "/placeholder-onepiece.png",
    officialPrice: 220,
    lowestPrice: 198,
    shopCount: 6,
    inStock: false,
  },
  {
    id: "4",
    title: "マジック:ザ・ギャザリング モダンホライゾン3 ドラフト・ブースター",
    tcgTitle: "MTG",
    releaseDate: "2026-06-14",
    imageUrl: "/placeholder-mtg.png",
    officialPrice: 550,
    lowestPrice: 495,
    shopCount: 5,
    inStock: true,
  },
  {
    id: "5",
    title: "ドラゴンボールスーパーカードゲーム ブースターパック 覚醒の鼓動",
    tcgTitle: "DRAGON_BALL",
    releaseDate: "2026-06-07",
    imageUrl: "/placeholder-db.png",
    officialPrice: 198,
    lowestPrice: 178,
    shopCount: 4,
    inStock: true,
  },
  {
    id: "6",
    title: "ポケモンカードゲーム スカーレット&バイオレット ハイクラスパック「VSTARユニバース2」",
    tcgTitle: "POKEMON",
    releaseDate: "2026-06-21",
    imageUrl: "/placeholder-pokemon2.png",
    officialPrice: 550,
    lowestPrice: 520,
    shopCount: 15,
    inStock: true,
  },
];

export const mockNews: NewsItem[] = [
  {
    id: "n1",
    title: "ポケモンカード「クリムゾンヘイズ」収録カードリスト公開",
    tcgTitle: "POKEMON",
    publishedAt: "2026-05-04",
    isPremium: false,
  },
  {
    id: "n2",
    title: "遊戯王 新リミットレギュレーション 2026年7月適用分発表",
    tcgTitle: "YUGIOH",
    publishedAt: "2026-05-04",
    isPremium: false,
  },
  {
    id: "n3",
    title: "ワンピースカード OP-07 発売日決定＆先行情報まとめ",
    tcgTitle: "ONE_PIECE",
    publishedAt: "2026-05-03",
    isPremium: true,
  },
  {
    id: "n4",
    title: "【価格予測】VSTARユニバース2 当たりカード相場予想",
    tcgTitle: "POKEMON",
    publishedAt: "2026-05-03",
    isPremium: true,
  },
  {
    id: "n5",
    title: "MTG モダンホライゾン3 注目カード10選＆投資価値分析",
    tcgTitle: "MTG",
    publishedAt: "2026-05-02",
    isPremium: true,
  },
];

export const mockDeals: Deal[] = [
  {
    id: "d1",
    shopName: "カードショップ竜星",
    title: "ポケモンカード BOX 全品10%OFF",
    discount: "10%OFF",
    tcgTitle: "POKEMON",
    expiresAt: "2026-05-10",
  },
  {
    id: "d2",
    shopName: "駿河屋",
    title: "遊戯王 シングルカード まとめ買いキャンペーン",
    discount: "5枚以上で15%OFF",
    tcgTitle: "YUGIOH",
    expiresAt: "2026-05-15",
  },
  {
    id: "d3",
    shopName: "トレカパーク",
    title: "ワンピースカード 在庫復活セール",
    discount: "送料無料",
    tcgTitle: "ONE_PIECE",
    expiresAt: "2026-05-07",
  },
];
