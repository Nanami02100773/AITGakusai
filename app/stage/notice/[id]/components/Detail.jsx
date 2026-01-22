"use client";
import "./Detail.css";

export default function Detail({ title }) {
  return (
    <div className="notice-container">
      {/* 大きい外枠カード */}
      <div className="notice-card">
        {/* 外枠カード内のバー */}
        <div className="notice-card-bar">
          <span className="notice-card-bar-text">{title}</span>
        </div>

        {/* 内側カード */}
        <div className="notice-card-inner">
          {/* ★ 区切り線の上の文言 */}
          <div className="notice-inner-title">{title}</div>

          <div className="notice-divider" />

          <p className="notice-text">
            お知らせの詳細内容がここに入ります。
          </p>
        </div>
      </div>
    </div>
  );
}

