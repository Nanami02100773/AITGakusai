"use client";
import React from "react";
import "./Sns.css";

const SnsSection = () => {
  return (
    <section className="Home-Sns-section">

      <h2 className="Home-section-title">
        愛工大祭公式SNS
      </h2>

      <div className="Home-Sns-container">

        <div className="Home-Sns-list">

          {/* Instagram */}
          <a
            className="Home-Sns-item Home-Sns-instagram"
            href="https://www.instagram.com/ait_fes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Home-Sns-circle">

              <img
                src="/snsicons/Instagram.png"
                alt="Instagram"
                className="Home-Sns-iconImage"
              />

            </div>

            <div className="Home-Sns-label">
              <span></span>Instagram<span></span>
            </div>
          </a>

          {/* X */}
          <a
            className="Home-Sns-item Home-Sns-twitter"
            href="https://x.com/aitfes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Home-Sns-circle">

              <img
                src="/snsicons/X.png"
                alt="X"
                className="Home-Sns-iconImage"
              />

            </div>

            <div className="Home-Sns-label">
              <span></span>X<span></span>
            </div>
          </a>

          {/* Website */}
          <a
            className="Home-Sns-item Home-Sns-web"
            href="https://aitech.ac.jp/~festival/top.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Home-Sns-circle">

              <img
                src="/snsicons/HP.png"
                alt="Website"
                className="Home-Sns-iconImage"
              />

            </div>

            <div className="Home-Sns-label">
              <span></span>Website<span></span>
            </div>
          </a>

          {/* LINE */}
          <a
            className="Home-Sns-item Home-Sns-line"
            href="https://t.co/Sa3GEvffep"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Home-Sns-circle">

              <img
                src="/snsicons/LINE.png"
                alt="LINE"
                className="Home-Sns-iconImage"
              />

            </div>

            <div className="Home-Sns-label">
              <span></span>LINE<span></span>
            </div>
          </a>

        </div>

      </div>

    </section>
  );
};

export default SnsSection;