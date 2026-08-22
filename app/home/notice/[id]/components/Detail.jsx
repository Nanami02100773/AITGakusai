"use client";

import "./Detail.css";
import { orbitron } from "../../../page";

export default function Detail({
  title,
  body,
  number,
}) {
  return (
    <div className="Home-Detail-container">
      <div className="Home-Detail-card">

        {/* フレーム */}
        <div className="Home-Detail-frame-top" />
        <div className="Home-Detail-frame-bottom" />

        {/* ヘッダー */}
        <div className="Home-Detail-header">

          {/* 番号 */}
          <div
            className={`
              Home-Detail-number
              ${orbitron.className}
            `}
          >
            {String(number || 0).padStart(2, "0")}
          </div>

          {/* タイトル */}
          <span className="Home-Detail-title">
            {title}
          </span>

        </div>

        {/* 本文 */}
        <div className="Home-Detail-content">

          {/* サブタイトル */}
          <div className="Home-Detail-subtitle">
            {title}
          </div>

          {/* 区切り線 */}
          <div className="Home-Detail-divider" />

          {/* 本文 */}
          <p className="Home-Detail-text">
            {body}
          </p>

        </div>

      </div>
    </div>
  );
}