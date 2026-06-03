"use client";
import "./Detail.css";

export default function Detail({ title, body }) {
  return (
    <div className="Stage-notice-container">
      <div className="Stage-notice-card">
        {/* 上部バー */}
        <div className="Stage-notice-card-bar">
          <span className="Stage-notice-card-bar-text">
            {title}
          </span>

          <div className="notice-style-dots" />
        </div>

        <div className="Stage-notice-card-inner">
          {/* 区切り線の上の文言 */}
          <div className="Stage-notice-inner-title">
            {title}
          </div>

          <div className="Stage-notice-divider" />

          <p className="Stage-notice-text">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
