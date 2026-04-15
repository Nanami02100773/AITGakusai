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

    // ★ チェック削除してそのまま遷移
    router.push("/Notice");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">学祭用ログイン</h1>

      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="login-input"
        />

        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <button type="submit" className="login-button">
          ログイン
        </button>
      </form>
    </div>
  );
}