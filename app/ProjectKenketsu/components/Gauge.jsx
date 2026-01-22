"use client";

import React, { useState, useEffect, useRef } from "react";
import "./Gauge.css";

const KenketsuGauge = () => {
  const goalDonors = 50;
  const fullLength = 283;

  const [currentDonors, setCurrentDonors] = useState(0);
  const progressArcRef = useRef(null);
  const gaugeDotRef = useRef(null);

  useEffect(() => {
    const percentage = Math.min(currentDonors / goalDonors, 1);
    const offset = fullLength * (1 - percentage);

    if (progressArcRef.current) {
      progressArcRef.current.style.strokeDashoffset = offset;
    }

    const angleDeg = 180 - percentage * 180;
    const angleRad = angleDeg * (Math.PI / 180);
    const radius = 90;

    const cx = 100 + radius * Math.cos(angleRad);
    const cy = 100 - radius * Math.sin(angleRad);

    if (gaugeDotRef.current) {
      gaugeDotRef.current.setAttribute("cx", cx);
      gaugeDotRef.current.setAttribute("cy", cy);
    }
  }, [currentDonors]);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 0) value = 0;
    setCurrentDonors(value);
  };

  return (
    <section className="Kenketsu-section">
      {/* タイトル */}
      <div className="Kenketsu-section-wrapper">
        <div className="Kenketsu-section-title">献血者数</div>
      </div>

      <div className="Kenketsu-gauge-card">
        {/* タイトル以外を覆う灰色ボックス */}
        <div className="Kenketsu-content-box">
          <div className="Kenketsu-gauge-container">
            <svg width="200" height="120" viewBox="0 0 200 120">
              <path
                d="M10,100 A90,90 0 0,1 190,100"
                className="Kenketsu-gauge-base"
              />
              <path
                ref={progressArcRef}
                d="M10,100 A90,90 0 0,1 190,100"
                className="Kenketsu-gauge-progress"
                style={{
                  strokeDasharray: fullLength,
                  strokeDashoffset: fullLength,
                }}
              />
              <circle
                ref={gaugeDotRef}
                className="Kenketsu-gauge-dot"
                r="8"
                cx="10"
                cy="100"
              />
            </svg>

            <div className="Kenketsu-center-box">{currentDonors}</div>
          </div>

          <div className="Kenketsu-goal-text">
            目標人数：{goalDonors} 人
          </div>

          <div className="Kenketsu-gauge-text">
            目標人数まであと {Math.max(goalDonors - currentDonors, 0)} 人
          </div>

          <div className="Kenketsu-update-time">2時間更新</div>

          <div className="Kenketsu-input-section">
            <label htmlFor="donorInput">現在の献血者数：</label>
            <input
              type="number"
              id="donorInput"
              value={currentDonors}
              onChange={handleInputChange}
              min="0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KenketsuGauge;
