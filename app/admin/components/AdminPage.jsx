"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./Login.css";

export default function LoginPage() {
  const router = useRouter();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (id === "AITFES" && password === "AITfes66_HIYAKU") {
      setError("");
      router.push("/home/admin");
      return;
    }

    setError("IDまたはパスワードが違います。");
  };

  return (
    <div className="login-body">
      <main className="login-page">
        <div className="login-card">

          <h1 className="login-title">
            学祭用ログイン
          </h1>

          <p className="login-subtitle">
            愛工大祭 管理者ページ
          </p>

          <div className="login-divider"></div>

          <div className="login-form">

            <label htmlFor="login-id">
              ID
            </label>

            <input
              id="login-id"
              className="login-input"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="IDを入力してください"
              autoComplete="username"
            />

            <label htmlFor="login-password">
              パスワード
            </label>

            <input
              id="login-password"
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワードを入力してください"
              autoComplete="current-password"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLogin();
                }
              }}
            />

            {error && (
              <p
                style={{
                  margin: "20px 0 0",
                  color: "#e05f78",
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                {error}
              </p>
            )}

            <button
              className="login-button"
              type="button"
              onClick={handleLogin}
            >
              ログイン
            </button>

          </div>
        </div>
      </main>
    </div>
  );
}