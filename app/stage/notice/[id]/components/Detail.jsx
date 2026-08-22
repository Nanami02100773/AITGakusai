"use client";

import "./Detail.css";

export default function Detail({
  title,
  body,
  number,
}) {
  return (
    <div className="Stage-Detail-container">
      <div className="Stage-Detail-card">

        {/* フレーム */}
        <div className="Stage-Detail-frame-top" />
        <div className="Stage-Detail-frame-bottom" />

        {/* ヘッダー */}
        <div className="Stage-Detail-header">

          {/* 番号 */}
          <div className="Stage-Detail-number">
            {String(number || 0).padStart(2, "0")}
          </div>

          {/* タイトル */}
          <span className="Stage-Detail-title">
            {title}
          </span>

        </div>

        {/* 本文 */}
        <div className="Stage-Detail-content">

          {/* サブタイトル */}
          <div className="Stage-Detail-subtitle">
            {title}
          </div>

          {/* 区切り線 */}
          <div className="Stage-Detail-divider" />

          {/* 本文テキスト */}
          <p className="Stage-Detail-text">
            {body}
          </p>

        </div>

      </div>
    </div>
  );
}