export type TCGTitle = "POKEMON" | "YUGIOH" | "ONE_PIECE" | "MTG" | "DRAGON_BALL" | "WEISS_SCHWARZ";

export interface Product {
  id: string;
  title: string;
  titleZh: string;
  tcgTitle: TCGTitle;
  releaseDate: string;
  imageUrl: string;
  officialPrice: number;
  lowestPrice: number;
  shopCount: number;
  inStock: boolean;
  region: "JP";
}

export interface NewsItem {
  id: string;
  title: string;
  titleZh: string;
  tcgTitle: TCGTitle;
  publishedAt: string;
  isPremium: boolean;
}

export interface Deal {
  id: string;
  shopName: string;
  title: string;
  titleZh: string;
  discount: string;
  discountZh: string;
  tcgTitle: TCGTitle;
  expiresAt: string;
}

export const TCG_COLORS: Record<TCGTitle, string> = {
  POKEMON: "bg-yellow-100 text-yellow-800",
  YUGIOH: "bg-purple-100 text-purple-800",
  ONE_PIECE: "bg-red-100 text-red-800",
  MTG: "bg-blue-100 text-blue-800",
  DRAGON_BALL: "bg-orange-100 text-orange-800",
  WEISS_SCHWARZ: "bg-pink-100 text-pink-800",
};

export const TCG_KEYS: TCGTitle[] = ["POKEMON", "YUGIOH", "ONE_PIECE", "MTG", "DRAGON_BALL", "WEISS_SCHWARZ"];

// All products are Japan-domestic releases
export const mockProducts: Product[] = [
  // 2026-05
  {
    id: "p1",
    title: "ポケモンカードゲーム 強化拡張パック「クリムゾンヘイズ」",
    titleZh: "宝可梦集换式卡牌 强化扩充包「绯红迷雾」",
    tcgTitle: "POKEMON",
    releaseDate: "2026-05-23",
    imageUrl: "/placeholder.png",
    officialPrice: 290,
    lowestPrice: 260,
    shopCount: 12,
    inStock: true,
    region: "JP",
  },
  {
    id: "p2",
    title: "遊戯王OCG INFINITE FORBIDDEN",
    titleZh: "游戏王OCG INFINITE FORBIDDEN",
    tcgTitle: "YUGIOH",
    releaseDate: "2026-05-25",
    imageUrl: "/placeholder.png",
    officialPrice: 176,
    lowestPrice: 155,
    shopCount: 8,
    inStock: true,
    region: "JP",
  },
  {
    id: "p3",
    title: "ONE PIECEカードゲーム 双璧の覇者【OP-06】",
    titleZh: "海贼王卡牌游戏 双璧霸者【OP-06】",
    tcgTitle: "ONE_PIECE",
    releaseDate: "2026-05-30",
    imageUrl: "/placeholder.png",
    officialPrice: 220,
    lowestPrice: 198,
    shopCount: 6,
    inStock: false,
    region: "JP",
  },
  // 2026-06
  {
    id: "p4",
    title: "ドラゴンボールスーパーカードゲーム 覚醒の鼓動",
    titleZh: "龙珠超卡牌游戏 觉醒的鼓动",
    tcgTitle: "DRAGON_BALL",
    releaseDate: "2026-06-07",
    imageUrl: "/placeholder.png",
    officialPrice: 198,
    lowestPrice: 178,
    shopCount: 4,
    inStock: true,
    region: "JP",
  },
  {
    id: "p5",
    title: "MTG モダンホライゾン3 ドラフト・ブースター",
    titleZh: "万智牌 现代视界3 轮抽补充包",
    tcgTitle: "MTG",
    releaseDate: "2026-06-14",
    imageUrl: "/placeholder.png",
    officialPrice: 550,
    lowestPrice: 495,
    shopCount: 5,
    inStock: true,
    region: "JP",
  },
  {
    id: "p6",
    title: "ポケモンカードゲーム ハイクラスパック「VSTARユニバース2」",
    titleZh: "宝可梦卡牌 高级礼包「VSTAR宇宙2」",
    tcgTitle: "POKEMON",
    releaseDate: "2026-06-21",
    imageUrl: "/placeholder.png",
    officialPrice: 550,
    lowestPrice: 520,
    shopCount: 15,
    inStock: true,
    region: "JP",
  },
  {
    id: "p7",
    title: "ヴァイスシュヴァルツ ブースターパック「鬼滅の刃」",
    titleZh: "Weiß Schwarz 补充包「鬼灭之刃」",
    tcgTitle: "WEISS_SCHWARZ",
    releaseDate: "2026-06-28",
    imageUrl: "/placeholder.png",
    officialPrice: 440,
    lowestPrice: 396,
    shopCount: 3,
    inStock: true,
    region: "JP",
  },
  // 2026-07
  {
    id: "p8",
    title: "遊戯王OCG ラッシュデュエル 7月新弾",
    titleZh: "游戏王OCG 闪电决斗 7月新版本",
    tcgTitle: "YUGIOH",
    releaseDate: "2026-07-05",
    imageUrl: "/placeholder.png",
    officialPrice: 165,
    lowestPrice: 148,
    shopCount: 5,
    inStock: true,
    region: "JP",
  },
  {
    id: "p9",
    title: "ONE PIECEカードゲーム ブースターパック【OP-07】",
    titleZh: "海贼王卡牌游戏 补充包【OP-07】",
    tcgTitle: "ONE_PIECE",
    releaseDate: "2026-07-12",
    imageUrl: "/placeholder.png",
    officialPrice: 220,
    lowestPrice: 210,
    shopCount: 8,
    inStock: true,
    region: "JP",
  },
  {
    id: "p10",
    title: "ポケモンカードゲーム 強化拡張パック「フューチャーフラッシュ」",
    titleZh: "宝可梦卡牌 强化扩充包「未来闪光」",
    tcgTitle: "POKEMON",
    releaseDate: "2026-07-19",
    imageUrl: "/placeholder.png",
    officialPrice: 290,
    lowestPrice: 275,
    shopCount: 10,
    inStock: true,
    region: "JP",
  },
  // 2026-08
  {
    id: "p11",
    title: "ドラゴンボールスーパーカードゲーム フュージョンワールド 第3弾",
    titleZh: "龙珠超卡牌游戏 融合世界 第3弹",
    tcgTitle: "DRAGON_BALL",
    releaseDate: "2026-08-02",
    imageUrl: "/placeholder.png",
    officialPrice: 220,
    lowestPrice: 200,
    shopCount: 6,
    inStock: true,
    region: "JP",
  },
  {
    id: "p12",
    title: "ポケモンカードゲーム ハイクラスデッキ 8月版",
    titleZh: "宝可梦卡牌 高级套牌 8月版",
    tcgTitle: "POKEMON",
    releaseDate: "2026-08-09",
    imageUrl: "/placeholder.png",
    officialPrice: 1980,
    lowestPrice: 1880,
    shopCount: 9,
    inStock: true,
    region: "JP",
  },
  {
    id: "p13",
    title: "MTG ブルームバロウ 統率者デッキ",
    titleZh: "万智牌 繁花原野 指挥官套牌",
    tcgTitle: "MTG",
    releaseDate: "2026-08-23",
    imageUrl: "/placeholder.png",
    officialPrice: 5500,
    lowestPrice: 4950,
    shopCount: 4,
    inStock: true,
    region: "JP",
  },
  // 2026-09
  {
    id: "p14",
    title: "遊戯王OCG SUPREME DARKNESS",
    titleZh: "游戏王OCG SUPREME DARKNESS",
    tcgTitle: "YUGIOH",
    releaseDate: "2026-09-06",
    imageUrl: "/placeholder.png",
    officialPrice: 176,
    lowestPrice: 162,
    shopCount: 7,
    inStock: true,
    region: "JP",
  },
  {
    id: "p15",
    title: "ヴァイスシュヴァルツ ブースターパック「ホロライブ」",
    titleZh: "Weiß Schwarz 补充包「hololive」",
    tcgTitle: "WEISS_SCHWARZ",
    releaseDate: "2026-09-20",
    imageUrl: "/placeholder.png",
    officialPrice: 440,
    lowestPrice: 408,
    shopCount: 5,
    inStock: true,
    region: "JP",
  },
];

export const mockNews: NewsItem[] = [
  {
    id: "n1",
    title: "ポケモンカード「クリムゾンヘイズ」収録カードリスト公開",
    titleZh: "宝可梦卡牌「绯红迷雾」收录卡列表公开",
    tcgTitle: "POKEMON",
    publishedAt: "2026-05-04",
    isPremium: false,
  },
  {
    id: "n2",
    title: "遊戯王 新リミットレギュレーション 2026年7月適用分発表",
    titleZh: "游戏王 新限制规则 2026年7月适用版公布",
    tcgTitle: "YUGIOH",
    publishedAt: "2026-05-04",
    isPremium: false,
  },
  {
    id: "n3",
    title: "ワンピースカード OP-07 発売日決定＆先行情報まとめ",
    titleZh: "海贼王卡牌 OP-07 发售日确定＆先行情报汇总",
    tcgTitle: "ONE_PIECE",
    publishedAt: "2026-05-03",
    isPremium: true,
  },
  {
    id: "n4",
    title: "【価格予測】VSTARユニバース2 当たりカード相場予想",
    titleZh: "【价格预测】VSTAR宇宙2 主力卡行情预测",
    tcgTitle: "POKEMON",
    publishedAt: "2026-05-03",
    isPremium: true,
  },
  {
    id: "n5",
    title: "MTG モダンホライゾン3 注目カード10選＆投資価値分析",
    titleZh: "万智牌 现代视界3 热门卡10选＆投资价值分析",
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
    titleZh: "宝可梦卡牌 BOX 全品10%OFF",
    discount: "10%OFF",
    discountZh: "10%OFF",
    tcgTitle: "POKEMON",
    expiresAt: "2026-05-10",
  },
  {
    id: "d2",
    shopName: "駿河屋",
    title: "遊戯王 シングルカード まとめ買いキャンペーン",
    titleZh: "游戏王 单卡 打包购买活动",
    discount: "5枚以上で15%OFF",
    discountZh: "5张以上15%OFF",
    tcgTitle: "YUGIOH",
    expiresAt: "2026-05-15",
  },
  {
    id: "d3",
    shopName: "トレカパーク",
    title: "ワンピースカード 在庫復活セール",
    titleZh: "海贼王卡牌 补货促销",
    discount: "送料無料",
    discountZh: "免运费",
    tcgTitle: "ONE_PIECE",
    expiresAt: "2026-05-07",
  },
];

// Helper to extract YYYY-MM from product
export function getMonthKey(dateStr: string): string {
  return dateStr.slice(0, 7);
}

// Get all unique months from products, sorted ascending
export function getAvailableMonths(products: Product[]): string[] {
  const months = new Set(products.map((p) => getMonthKey(p.releaseDate)));
  return Array.from(months).sort();
}
