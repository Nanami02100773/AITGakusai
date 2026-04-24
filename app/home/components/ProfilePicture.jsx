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
              <div className="Home-sns-inner">
                <div className="Home-sns-icon">IG</div>
              </div>
              <div className="Home-sns-dot"></div>
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
              <div className="Home-sns-inner">
                <div className="Home-sns-icon">X</div>
              </div>
              <div className="Home-sns-dot"></div>
            </div>

            <div className="Home-sns-label">
              <span></span>X<span></span>
            </div>
          </a>

          {/* Web */}
          <a
            className="Home-sns-item Home-web"
            href="https://aitech.ac.jp/~festival/top.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Home-sns-circle">
              <div className="Home-sns-inner">
                <div className="Home-sns-icon">🌐</div>
              </div>
              <div className="Home-sns-dot"></div>
            </div>

            <div className="Home-sns-label">
              <span></span>Website<span></span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default SnsSection;