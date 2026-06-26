"use client";

import React, { useState, useEffect, useRef } from "react";
import "./Gauge.css";

const KenketsuGauge = () => {
  const goalDonors = 50;
  const fullLength = 283;

  const [currentDonors, setCurrentDonors] = useState(0);

  const progressArcRef = useRef(null);
  const gaugeDotRef = useRef(null);

  // localStorageから人数取得
  useEffect(() => {
    const load = () => {
      const value = Number(
        localStorage.getItem("bloodDonationCount") || 0
      );
      setCurrentDonors(value);
    };

    load();

    window.addEventListener("focus", load);

    return () => {
      window.removeEventListener("focus", load);
    };
  }, []);

  // ゲージ更新
  useEffect(() => {
    const percentage = Math.min(currentDonors / goalDonors, 1);
    const offset = fullLength * (1 - percentage);

    if (progressArcRef.current) {
      progressArcRef.current.style.strokeDashoffset = offset;
    }

    const angleDeg = 180 - percentage * 180;
    const angleRad = (angleDeg * Math.PI) / 180;

    const radius = 90;
    const centerX = 110;
    const centerY = 100;

    const cx =
      centerX + radius * Math.cos(angleRad);
    const cy =
      centerY - radius * Math.sin(angleRad);

    if (gaugeDotRef.current) {
      gaugeDotRef.current.setAttribute("cx", cx);
      gaugeDotRef.current.setAttribute("cy", cy);
    }
  }, [currentDonors]);

  return (
    <section className="kenketsu-section">

      <div className="kenketsu-section-wrapper">
        <div className="kenketsu-section-title">
          献血者数
        </div>
      </div>

      <div className="kenketsu-gauge-card">
        <div className="kenketsu-content-box">

          <div className="kenketsu-gauge-container">

            <svg
              width="220"
              height="120"
              viewBox="0 0 220 120"
            >
              {/* 背景 */}
              <path
                d="M20,100 A90,90 0 0,1 200,100"
                className="kenketsu-gauge-base"
              />

              {/* 進捗 */}
              <path
                ref={progressArcRef}
                d="M20,100 A90,90 0 0,1 200,100"
                className="kenketsu-gauge-progress"
                style={{
                  strokeDasharray: fullLength,
                  strokeDashoffset: fullLength,
                }}
              />

              {/* ドット */}
              <circle
                ref={gaugeDotRef}
                className="kenketsu-gauge-dot"
                r="8"
                cx="20"
                cy="100"
              />
            </svg>

            <div className="kenketsu-center-box">
              {currentDonors}
            </div>

          </div>

          <div className="kenketsu-goal-text">
            目標人数：{goalDonors} 人
          </div>

          <div className="kenketsu-gauge-text">
            目標人数まであと{" "}
            {Math.max(goalDonors - currentDonors, 0)} 人
          </div>

          <div className="kenketsu-update-time">
            2時間更新
          </div>

        </div>
      </div>

    </section>
  );
};

export default KenketsuGauge;