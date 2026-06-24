"use client";
import "./Detail.css";

export default function Detail({
  title,
  body,
  number,
}) {
  return (
    <div className="stage-notice-container">
      <div className="stage-notice-card">

        <div className="stage-notice-frame-top" />
        <div className="stage-notice-frame-bottom" />

        <div className="stage-notice-card-bar">

          <div
            className={`
              stage-notice-number
            `}
          >
            {String(number || 0).padStart(2, "0")}
          </div>

          <span className="stage-notice-card-bar-text">
            {title}
          </span>


        </div>

        <div className="stage-notice-card-inner">
          <div className="stage-notice-inner-title">
            {title}
          </div>

          <div className="stage-notice-divider" />

          <p className="stage-notice-text">
            {body}
          </p>
        </div>

      </div>
    </div>
  );
}