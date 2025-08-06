import React from "react";
import "./BoothIntroduction.css";

function MakeBooth() {
  return (
    <section className="booth-section">
      <div className="Make-title">ブース紹介</div>
      <div className="booth-list centered">
        <div className="booth-item">
          <div className="booth-card">
            <div className="booth-image"></div>
            <p className="booth-label">ヘアアレンジ</p>
          </div>
        </div>
        <div className="booth-item">
          <div className="booth-card">
            <div className="booth-image"></div>
            <p className="booth-label">メイク</p>
          </div>
        </div>
        <div className="booth-item">
          <div className="booth-card">
            <div className="booth-image"></div>
            <p className="booth-label">ボディーシール</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakeBooth;
