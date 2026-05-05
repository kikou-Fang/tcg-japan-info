"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("デモ版: 実際のログイン処理はバックエンド接続後に実装されます");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-card-bg border border-border rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-2">ログイン</h1>
        <p className="text-sm text-muted text-center mb-6">
          アカウントにログインして続ける
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">メールアドレス</label>
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
            <label className="block text-sm font-medium mb-1">パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="パスワード"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            ログイン
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-muted">
            アカウントをお持ちでない方は{" "}
            <Link href="/auth/register" className="text-primary hover:underline">
              無料会員登録
            </Link>
          </p>
          <p className="text-xs text-muted">
            <Link href="/auth/forgot-password" className="hover:underline">
              パスワードをお忘れの方
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
