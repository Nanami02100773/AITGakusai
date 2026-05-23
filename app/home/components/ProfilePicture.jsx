"use client";
import React from "react";
import "./ProfilePicture.css";

const SnsSection = () => {
  return (
    <section className="Home-sns-section">

      <h2 className="Home-section-title">
        愛工大祭公式SNS
      </h2>

      <div className="Home-container">

        <div className="Home-sns-list">

          {/* Instagram */}
          <a
            className="Home-sns-item Home-instagram"
            href="https://www.instagram.com/ait_fes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Home-sns-circle">

              <img
                src="/snsicons/Instagram.png"
                alt="Instagram"
                className="Home-sns-icon-image"
              />

            </div>

            <div className="Home-sns-label">
              <span></span>Instagram<span></span>
            </div>
          </a>

          {/* X */}
          <a
            className="Home-sns-item Home-twitter"
            href="https://x.com/aitfes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Home-sns-circle">

              <img
                src="/snsicons/X.png"
                alt="X"
                className="Home-sns-icon-image"
              />

            </div>

            <div className="Home-sns-label">
              <span></span>X<span></span>
            </div>
          </a>

          {/* Website */}
          <a
            className="Home-sns-item Home-web"
            href="https://aitech.ac.jp/~festival/top.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Home-sns-circle">

              <img
                src="/snsicons/HP.png"
                alt="Website"
                className="Home-sns-icon-image"
              />

            </div>

            <div className="Home-sns-label">
              <span></span>Website<span></span>
            </div>
          </a>

          {/* LINE */}
          <a
            className="Home-sns-item Home-line"
            href="https://t.co/Sa3GEvffep"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Home-sns-circle">

              <img
                src="/snsicons/LINE.png"
                alt="LINE"
                className="Home-sns-icon-image"
              />

            </div>

            <div className="Home-sns-label">
              <span></span>LINE<span></span>
            </div>
          </a>

        </div>

      </div>

    </section>
  );
};

export default SnsSection;