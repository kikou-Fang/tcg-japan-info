export type Locale = "ja" | "zh";

export const translations = {
  ja: {
    // Header
    siteName: "TCG Japan Info",
    navProducts: "商品一覧",
    navCalendar: "発売カレンダー",
    navDeals: "セール情報",
    login: "ログイン",
    register: "無料会員登録",
    menu: "メニュー",

    // Hero
    heroTitle1: "日本TCG販売情報",
    heroTitle2: "完全ガイド",
    heroSubtitle: "ポケモン・遊戯王・ワンピース・MTG — 全タイトルの価格比較・在庫情報・発売日を毎日更新",
    ctaRegister: "無料で会員登録",
    ctaViewProducts: "商品を見る",

    // Sections
    featuredProducts: "注目の新商品",
    viewAll: "すべて見る →",
    latestNews: "最新ニュース",
    deals: "セール情報",
    seeAll: "すべて →",

    // Product
    inStock: "在庫あり",
    outOfStock: "品切れ",
    lowestPrice: "最安値",
    officialPrice: "定価",
    shopCount: "店舗比較",
    releaseDate: "発売日",
    premiumLabel: "会員限定",

    // Filters
    filterAll: "すべて",
    filterMonth: "月で絞り込み",
    sortByDate: "発売日順",
    sortByPrice: "価格順",
    sortByName: "名前順",
    sortLabel: "並び替え",
    noResults: "該当する商品が見つかりませんでした",

    // Calendar
    calendarTitle: "発売カレンダー",
    calendarSubtitle: "日本TCG新商品の発売スケジュール（月別）",
    available: "予約可",
    closed: "予約終了",

    // Deals
    dealsTitle: "セール・キャンペーン情報",
    dealsSubtitle: "各ショップの最新セール・割引情報を毎日更新",
    expiresAt: "期限",
    premiumOnly: "プレミアム会員限定",
    premiumDealsDesc: "在庫復活通知やショップ限定クーポンはプレミアム会員のみ配信",

    // CTA Banner
    ctaTitle: "情報格差をなくそう",
    ctaDesc: "無料会員登録でリアルタイム価格情報・カスタムアラート・お気に入り機能を利用可能",
    ctaFeature1: "リアルタイム情報",
    ctaFeature2: "カスタムアラート",
    ctaFeature3: "お気に入り管理",
    ctaFeature4: "価格推移グラフ",
    ctaButton: "無料で始める",

    // Auth
    registerTitle: "無料会員登録",
    registerSubtitle: "登録してTCG情報をフル活用しよう",
    nickname: "ニックネーム",
    email: "メールアドレス",
    password: "パスワード",
    passwordHint: "8文字以上",
    submit: "登録する",
    haveAccount: "アカウントをお持ちの方は",
    benefitsTitle: "無料会員でできること",
    benefit1: "リアルタイム価格情報",
    benefit2: "カスタムアラート（3件まで）",
    benefit3: "お気に入り登録（10件まで）",
    benefit4: "価格推移グラフ（1ヶ月分）",

    loginTitle: "ログイン",
    loginSubtitle: "アカウントにログインして続ける",
    loginButton: "ログイン",
    noAccount: "アカウントをお持ちでない方は",
    forgotPassword: "パスワードをお忘れの方",

    // Dashboard
    dashboardTitle: "マイページ",
    settings: "設定",
    favorites: "お気に入り",
    alerts: "アラート",
    history: "閲覧履歴",
    plan: "プラン",
    favoritesTitle: "お気に入り商品",
    favoritesDesc: "登録した商品の価格変動をチェック",
    alertsTitle: "アラート設定",
    alertsDesc: "価格や在庫の通知条件を管理",
    upgradeTitle: "👑 プレミアムにアップグレード",
    upgradeDesc: "無制限アラート・全店舗比較・在庫通知・CSVエクスポート",

    // Footer
    footerTagline: "日本のTCG販売情報を毎日更新。価格比較・在庫状況・発売日を一元管理。",
    byTitle: "タイトル別",
    services: "サービス",
    support: "サポート",
    aboutSite: "サイトについて",
    privacy: "プライバシーポリシー",
    contact: "お問い合わせ",
    myPage: "マイページ",

    // TCG Titles
    POKEMON: "ポケモンカード",
    YUGIOH: "遊戯王",
    ONE_PIECE: "ワンピースカード",
    MTG: "マジック:ザ・ギャザリング",
    DRAGON_BALL: "ドラゴンボールカード",
    WEISS_SCHWARZ: "ヴァイスシュヴァルツ",

    // Misc
    productsTitle: "商品一覧（日本国内販売）",
    japanFocused: "🇯🇵 日本国内市場",
    monthsAhead: "ヶ月先まで",
  },

  zh: {
    // Header
    siteName: "TCG日本情报",
    navProducts: "商品列表",
    navCalendar: "发售日历",
    navDeals: "促销信息",
    login: "登录",
    register: "免费注册",
    menu: "菜单",

    // Hero
    heroTitle1: "日本TCG销售信息",
    heroTitle2: "完全指南",
    heroSubtitle: "宝可梦·游戏王·海贼王·万智牌 — 全品类价格比较·库存信息·发售日每日更新",
    ctaRegister: "免费注册会员",
    ctaViewProducts: "查看商品",

    // Sections
    featuredProducts: "热门新品",
    viewAll: "查看全部 →",
    latestNews: "最新资讯",
    deals: "促销信息",
    seeAll: "全部 →",

    // Product
    inStock: "有货",
    outOfStock: "缺货",
    lowestPrice: "最低价",
    officialPrice: "原价",
    shopCount: "家店比价",
    releaseDate: "发售日",
    premiumLabel: "会员专属",

    // Filters
    filterAll: "全部",
    filterMonth: "按月筛选",
    sortByDate: "按发售日",
    sortByPrice: "按价格",
    sortByName: "按名称",
    sortLabel: "排序",
    noResults: "未找到符合条件的商品",

    // Calendar
    calendarTitle: "发售日历",
    calendarSubtitle: "日本TCG新品发售计划（按月）",
    available: "可预约",
    closed: "已截止",

    // Deals
    dealsTitle: "促销·活动信息",
    dealsSubtitle: "各商店最新促销·折扣信息每日更新",
    expiresAt: "截止日",
    premiumOnly: "高级会员专属",
    premiumDealsDesc: "补货通知和店铺专属优惠券仅对高级会员发放",

    // CTA Banner
    ctaTitle: "消除信息差",
    ctaDesc: "免费注册即可使用实时价格·自定义提醒·收藏夹等功能",
    ctaFeature1: "实时信息",
    ctaFeature2: "自定义提醒",
    ctaFeature3: "收藏管理",
    ctaFeature4: "价格趋势图",
    ctaButton: "免费开始",

    // Auth
    registerTitle: "免费注册",
    registerSubtitle: "注册后即可使用全部TCG情报",
    nickname: "昵称",
    email: "邮箱地址",
    password: "密码",
    passwordHint: "8位以上",
    submit: "注册",
    haveAccount: "已有账号？",
    benefitsTitle: "免费会员可享受",
    benefit1: "实时价格信息",
    benefit2: "自定义提醒（最多3条）",
    benefit3: "收藏商品（最多10件）",
    benefit4: "价格趋势图（近1个月）",

    loginTitle: "登录",
    loginSubtitle: "登录账号继续使用",
    loginButton: "登录",
    noAccount: "还没有账号？",
    forgotPassword: "忘记密码？",

    // Dashboard
    dashboardTitle: "个人中心",
    settings: "设置",
    favorites: "收藏",
    alerts: "提醒",
    history: "浏览历史",
    plan: "套餐",
    favoritesTitle: "收藏商品",
    favoritesDesc: "查看已收藏商品的价格变动",
    alertsTitle: "提醒设置",
    alertsDesc: "管理价格和库存的通知条件",
    upgradeTitle: "👑 升级到高级会员",
    upgradeDesc: "无限提醒·全店比价·补货通知·CSV导出",

    // Footer
    footerTagline: "日本TCG销售信息每日更新。价格比较·库存状态·发售日一站式管理。",
    byTitle: "按品类",
    services: "服务",
    support: "支持",
    aboutSite: "关于本站",
    privacy: "隐私政策",
    contact: "联系我们",
    myPage: "个人中心",

    // TCG Titles
    POKEMON: "宝可梦卡牌",
    YUGIOH: "游戏王",
    ONE_PIECE: "海贼王卡牌",
    MTG: "万智牌",
    DRAGON_BALL: "龙珠卡牌",
    WEISS_SCHWARZ: "Weiß Schwarz",

    // Misc
    productsTitle: "商品列表（日本国内销售）",
    japanFocused: "🇯🇵 日本本土市场",
    monthsAhead: "个月内",
  },
} as const;

export type TranslationKey = keyof typeof translations.ja;
