"use client";

import { useState } from "react";
import "./NoticePage.css";

export default function NoticePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("all"); // ← 追加

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("タイトルと本文を入力してください");
      return;
    }

    const newNotice = {
      id: Date.now().toString(),
      title,
      body,
      category, // ← 追加
    };

    const existing =
      JSON.parse(localStorage.getItem("notices") || "[]");

    const updated = [newNotice, ...existing];

    localStorage.setItem("notices", JSON.stringify(updated));

    alert("投稿しました！");

    setTitle("");
    setBody("");
    setCategory("all");
  };

  return (
    <div className="notice-container">
      <h1 className="notice-title">お知らせ投稿</h1>

      <form onSubmit={handleSubmit} className="notice-form">
        
        {/* カテゴリ選択 */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="notice-input"
        >
          <option value="all">全体</option>
          <option value="stage">ステージ</option>
        </select>

        <input
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="notice-input"
        />

        <textarea
          placeholder="本文"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="notice-textarea"
        />

        <button type="submit" className="notice-button">
          投稿
        </button>
      </form>
    </div>
  );
}