"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./LoginPage.css";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/Business");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">
          学祭用ログイン
        </h1>

        <div className="login-divider" />

        <form
          onSubmit={handleLogin}
          className="login-form"
        >
          <label>ID</label>

          <input
            type="text"
            placeholder="IDを入力してください"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="login-input active"
          />

          <label>パスワード</label>

          <input
            type="password"
            placeholder="パスワードを入力してください"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button
            type="submit"
            className="login-button"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}