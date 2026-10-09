"use client";

import { useState, useEffect } from "react";
import "./Gauge.css";

const KenketsuGauge = () => {
  const [currentDonors, setCurrentDonors] = useState(0);

  useEffect(() => {
    const load = () => {
      const value = Number(
        localStorage.getItem("bloodDonationCount") || 0
      );

      setCurrentDonors(
        Number.isFinite(value) ? Math.max(0, value) : 0
      );
    };

    load();

    window.addEventListener("focus", load);
    window.addEventListener("storage", load);

    return () => {
      window.removeEventListener("focus", load);
      window.removeEventListener("storage", load);
    };
  }, []);

  return (
    <section className="kenketsu-section">
      <div className="kenketsu-section-wrapper">
        <div className="kenketsu-section-title">
          献血者数
        </div>
      </div>

      <div className="kenketsu-gauge-card">
        <div className="kenketsu-content-box">
          <div className="kenketsu-center-box">
            合計 {currentDonors} 人
          </div>
        </div>
      </div>
    </section>
  );
};

export default KenketsuGauge;

