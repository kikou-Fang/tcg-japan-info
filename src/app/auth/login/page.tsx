"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function LoginPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-card-bg border border-border rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-2">{t("loginTitle")}</h1>
        <p className="text-sm text-muted text-center mb-6">{t("loginSubtitle")}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t("email")}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t("password")}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            {t("loginButton")}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-muted">
            {t("noAccount")}{" "}
            <Link href="/auth/register" className="text-primary hover:underline">
              {t("register")}
            </Link>
          </p>
          <p className="text-xs text-muted">
            <Link href="/auth/forgot-password" className="hover:underline">
              {t("forgotPassword")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
