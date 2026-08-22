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

  <div className="notice-section-title">
    投稿文作成
  </div>

  <form onSubmit={handleSubmit} className="notice-form">

<div>
  <div className="notice-label">
  <span className="required-dot"></span>
  カテゴリ
</div>

  <div className="notice-category-group">
    <button
      type="button"
      className={`notice-category-btn ${
        category === "all" ? "active" : ""
      }`}
      onClick={() => setCategory("all")}
    >
      全体
    </button>

    <button
      type="button"
      className={`notice-category-btn ${
        category === "stage" ? "active" : ""
      }`}
      onClick={() => setCategory("stage")}
    >
      ステージ
    </button>
  </div>
</div>
  <div>
 <div className="notice-label">
  <span className="required-dot"></span>
  タイトル
</div>

    <input
      type="text"
      placeholder="例）落とし物のお知らせ"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="notice-input"
    />
  </div>

  <div>
    <div className="notice-label">
  <span className="required-dot"></span>
  本文
</div>
    <textarea
      placeholder="お知らせの内容を入力してください"
      value={body}
      onChange={(e) => setBody(e.target.value)}
      className="notice-textarea"
    />
  </div>

  <button type="submit" className="notice-button">
    投稿する
  </button>

</form>
    </div>
    
  );
}