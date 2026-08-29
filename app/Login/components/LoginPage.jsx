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

            <input
              id="login-password"
              type="password"
              placeholder="パスワードを入力してください"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="login-input"
            />

          </div>

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
  );
}