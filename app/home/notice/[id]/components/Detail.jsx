"use client";
import "./Detail.css";

export default function Detail({ title, body }) {
  return (
    <div className="home-notice-container">
      <div className="home-notice-card">
        {/* 上部バー */}
        <div className="home-notice-card-bar">
          <span className="home-notice-card-bar-text">{title}</span>
        </div>

        <div className="home-notice-card-inner">
          {/* 区切り線の上の文言 */}
          <div className="home-notice-inner-title">{title}</div>

          <div className="home-notice-divider" />

          <p className="home-notice-text">{body}</p>
        </div>
      </div>
    </div>
  );
}


