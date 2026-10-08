"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./LoginPage.css";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      id === "AITFES" &&
      password === "AIT66HIYAKU"
    ) {
      setError("");
      router.push("/Business");
      return;
    }

    setError("IDまたはパスワードが違います。");
  };

  return (
    <div className="login-body">

      <div className="login-page">

        <div className="login-card">

          {/* タイトル */}

          <h1 className="login-title">
            学祭用ログイン
          </h1>

          <div className="login-divider" />

          {/* フォーム */}

          <form
            onSubmit={handleLogin}
            className="login-form"
          >

            {/* ID */}

            <div className="login-field">

              <label htmlFor="login-id">
                ID
              </label>

              <input
                id="login-id"
                type="text"
                placeholder="IDを入力してください"
                value={id}
                onChange={(e) =>
                  setId(e.target.value)
                }
                className="login-input"
              />

            </div>

            {/* パスワード */}

            <div className="login-field">

              <label htmlFor="login-password">
                パスワード
              </label>

              <div className="login-password-wrapper">

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="パスワードを入力してください"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="login-input login-password-input"
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "パスワードを隠す"
                      : "パスワードを表示"
                  }
                >
                  {showPassword ? "◉" : "◌"}
                </button>

              </div>

            </div>

            {/* エラー */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* ログイン */}

            <button
              type="submit"
              className="login-button"
            >
              ログイン
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}