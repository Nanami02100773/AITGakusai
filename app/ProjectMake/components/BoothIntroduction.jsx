import React from "react";
import "./BoothIntroduction.css";

function MakeBooth() {
  return (
    <section className="Make-booth-section">
      <div className="Make-section-title">ブース紹介</div>

      <div className="Make-booth-list">
        <div className="Make-booth-item">
          <div className="Make-booth-card">
            <div className="Make-booth-image"></div>
            <p className="Make-booth-label">ヘアアレンジ</p>
          </div>
        </div>

        <div className="Make-booth-item">
          <div className="Make-booth-card">
            <div className="Make-booth-image"></div>
            <p className="Make-booth-label">メイク</p>
          </div>
        </div>

        <div className="Make-booth-item">
          <div className="Make-booth-card">
            <div className="Make-booth-image"></div>
            <p className="Make-booth-label">ボディーシール</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakeBooth;
