"use client";
import "./Detail.css";

export default function Detail({ title, body }) {
  return (
    <div className="notice-container">
      <div className="notice-card">
        <div className="notice-card-bar">
          <span className="notice-card-bar-text">{title}</span>
        </div>

        <div className="notice-card-inner">
          <div className="notice-inner-title">{title}</div>

          <div className="notice-divider" />

          <p className="notice-text">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

