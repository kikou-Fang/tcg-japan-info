"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function RegisterPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-card-bg border border-border rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-2">{t("registerTitle")}</h1>
        <p className="text-sm text-muted text-center mb-6">{t("registerSubtitle")}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t("nickname")}</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t("email")}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t("password")}</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder={t("passwordHint")}
              minLength={8}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            {t("submit")}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted">
            {t("haveAccount")}{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              {t("login")}
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-sm font-semibold mb-3">{t("benefitsTitle")}</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span>{t("benefit1")}</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span>{t("benefit2")}</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span>{t("benefit3")}</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span>{t("benefit4")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
