"use client";

import { useState } from "react";
import "./NoticeCreate.css";

export default function NoticeCreate() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("all");

  /* =========================
     投稿
  ========================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      alert("タイトルと本文を入力してください");
      return;
    }

    const newNotice = {
      id: Date.now().toString(),
      title,
      body,
      category,
    };

    const existingNotices = JSON.parse(
      localStorage.getItem("notices") || "[]"
    );

    const updatedNotices = [
      newNotice,
      ...existingNotices,
    ];

    localStorage.setItem(
      "notices",
      JSON.stringify(updatedNotices)
    );

    alert("投稿しました！");

    setTitle("");
    setBody("");
    setCategory("all");
  };

  return (
    <div className="notice-create-container">

      {/* =========================
          タイトル
      ========================= */}

      <h1 className="notice-create-title">
        お知らせ投稿
      </h1>

      {/* =========================
          投稿文作成
      ========================= */}

      <div className="notice-create-section-title">
        投稿文作成
      </div>

      {/* =========================
          フォーム
      ========================= */}

      <form
        onSubmit={handleSubmit}
        className="notice-create-form"
      >

        {/* =========================
            カテゴリ
        ========================= */}

        <div className="notice-create-field">

          <div className="notice-create-label">
            <span className="notice-create-required-dot"></span>
            カテゴリ
          </div>

          <div className="notice-create-category-group">

            <button
              type="button"
              className={`notice-create-category-btn ${
                category === "all"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setCategory("all")
              }
            >
              全体
            </button>

            <button
              type="button"
              className={`notice-create-category-btn ${
                category === "stage"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setCategory("stage")
              }
            >
              ステージ
            </button>

          </div>

        </div>

        {/* =========================
            タイトル
        ========================= */}

        <div className="notice-create-field">

          <div className="notice-create-label">
            <span className="notice-create-required-dot"></span>
            タイトル
          </div>

          <input
            type="text"
            placeholder="例）落とし物のお知らせ"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="notice-create-input"
          />

        </div>

        {/* =========================
            本文
        ========================= */}

        <div className="notice-create-field">

          <div className="notice-create-label">
            <span className="notice-create-required-dot"></span>
            本文
          </div>

          <textarea
            placeholder="お知らせの内容を入力してください"
            value={body}
            onChange={(e) =>
              setBody(e.target.value)
            }
            className="notice-create-textarea"
          />

        </div>

        {/* =========================
            投稿ボタン
        ========================= */}

        <button
          type="submit"
          className="notice-create-button"
        >
          投稿する
        </button>

      </form>

    </div>
  );
}
