"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("デモ版: 実際の登録処理はバックエンド接続後に実装されます");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-card-bg border border-border rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-2">無料会員登録</h1>
        <p className="text-sm text-muted text-center mb-6">
          登録してTCG情報をフル活用しよう
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">ニックネーム</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="TCG太郎"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">メールアドレス</label>
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
            <label className="block text-sm font-medium mb-1">パスワード</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="8文字以上"
              minLength={8}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            登録する
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted">
            アカウントをお持ちの方は{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              ログイン
            </Link>
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-sm font-semibold mb-3">無料会員でできること</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>リアルタイム価格情報
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>カスタムアラート（3件まで）
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>お気に入り登録（10件まで）
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>価格推移グラフ（1ヶ月分）
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
