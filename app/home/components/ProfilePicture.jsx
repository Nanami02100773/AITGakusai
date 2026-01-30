import React from "react";
import "./ProfilePicture.css";

const SnsSection = () => {
  return (
    <section className="Home-sns-section">
      <h2 className="Home-section-title">愛工大祭公式SNS</h2>

      <div className="Home-container">
        <div className="Home-sns-list">
          <a
            className="Home-sns-icon"
            href="https://www.instagram.com/ait_fes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            インスタ
          </a>
          <a
            className="Home-sns-icon"
            href="https://x.com/aitfes"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            className="Home-sns-icon"
            href="https://aitech.ac.jp/~festival/top.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HP
          </a>
        </div>
      </div>
    </section>
  );
};

export default SnsSection;
