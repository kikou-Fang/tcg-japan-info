"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function DashboardPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">{t("dashboardTitle")}</h1>
          <p className="text-sm text-muted">TCG太郎・FREE</p>
        </div>
        <button className="text-sm border border-border rounded-lg px-4 py-2 hover:bg-card-bg transition-colors">
          {t("settings")}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card-bg border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-primary">3</p>
          <p className="text-xs text-muted">{t("favorites")}</p>
        </div>
        <div className="bg-card-bg border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-primary">1</p>
          <p className="text-xs text-muted">{t("alerts")}</p>
        </div>
        <div className="bg-card-bg border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-primary">5</p>
          <p className="text-xs text-muted">{t("history")}</p>
        </div>
        <div className="bg-card-bg border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">FREE</p>
          <p className="text-xs text-muted">{t("plan")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link
          href="/dashboard/favorites"
          className="bg-card-bg border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold mb-1">{t("favoritesTitle")}</h3>
          <p className="text-sm text-muted">{t("favoritesDesc")}</p>
        </Link>
        <Link
          href="/dashboard/alerts"
          className="bg-card-bg border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold mb-1">{t("alertsTitle")}</h3>
          <p className="text-sm text-muted">{t("alertsDesc")}</p>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">{t("upgradeTitle")}</h3>
            <p className="text-sm text-muted">{t("upgradeDesc")}</p>
          </div>
          <button className="bg-amber-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors shrink-0 whitespace-nowrap">
            ¥980/月
          </button>
        </div>
      </div>
    </div>
  );
}
