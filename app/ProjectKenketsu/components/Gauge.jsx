import React, { useState, useEffect, useRef } from "react";
import "./Gauge.css";

const BloodDonationGauge = () => {
  const goalDonors = 50;
  const fullLength = 283;

  const [currentDonors, setCurrentDonors] = useState(0);
  const progressArcRef = useRef(null);
  const gaugeDotRef = useRef(null);

  useEffect(() => {
    const percentage = Math.min(currentDonors / goalDonors, 1);
    const offset = fullLength * (1 - percentage);

    // 更新：ゲージ進行
    if (progressArcRef.current) {
      progressArcRef.current.style.strokeDashoffset = offset;
    }

    // 更新：ゲージドットの位置
    const angleDeg = 180 - (percentage * 180);
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
    <div className="donation-card">
      <div className="gauge-container">
        <svg width="200" height="100">
          <path d="M10,100 A90,90 0 0,1 190,100" className="gauge-base" />
          <path
            ref={progressArcRef}
            d="M10,100 A90,90 0 0,1 190,100"
            className="gauge-progress"
            style={{ strokeDasharray: fullLength, strokeDashoffset: fullLength }}
          />
          <circle
            ref={gaugeDotRef}
            r="7"
            cx="10"
            cy="100"
            fill="#fff"
            stroke="#e74c3c"
            strokeWidth="3"
          />
        </svg>
        <div className="center-box">{currentDonors}</div>
      </div>

      <div className="goal-text">目標人数: {goalDonors} 人</div>
      <div className="gauge-text">
        目標人数まであと {Math.max(goalDonors - currentDonors, 0)} 人
      </div>
      <div className="update-time">2時間更新</div>

      <div className="input-section">
        <label htmlFor="donorInput">現在の献血者数を入力：</label>
        <input
          type="number"
          id="donorInput"
          value={currentDonors}
          onChange={handleInputChange}
          min="0"
        />
      </div>
    </div>
  );
};

export default BloodDonationGauge;
