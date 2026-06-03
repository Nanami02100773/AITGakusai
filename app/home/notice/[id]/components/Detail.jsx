"use client";
import "./Detail.css";
import { orbitron } from "../../../page";// パスは環境に合わせる

export default function Detail({
  title,
  body,
  number,
}) {
  return (
    <div className="home-notice-container">
      <div className="home-notice-card">

        <div className="home-notice-frame-top" />
        <div className="home-notice-frame-bottom" />

        <div className="home-notice-card-bar">

          <div
            className={`
              home-notice-number
              ${orbitron.className}
            `}
          >
            {String(number || 0).padStart(2, "0")}
          </div>

          <span className="home-notice-card-bar-text">
            {title}
          </span>


        </div>

        <div className="home-notice-card-inner">
          <div className="home-notice-inner-title">
            {title}
          </div>

          <div className="home-notice-divider" />

          <p className="home-notice-text">
            {body}
          </p>
        </div>

      </div>
    </div>
  );
}