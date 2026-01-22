import React from "react";
import "./LaughMusicGameCorner.css";

function LaughMusicGameCorner() {
  return (
    <section className="LaughMusic-gameCorner-section">
      <div className="LaughMusic-section-title">Game Corner</div>

      <div className="LaughMusic-gameCorner-list">
        <div className="LaughMusic-gameCorner-item">
          <div className="LaughMusic-gameCorner-card">
            <div className="LaughMusic-gameCorner-image"></div>
            <p className="LaughMusic-gameCorner-label">ビンゴゲーム</p>
          </div>
        </div>

        <div className="LaughMusic-gameCorner-item">
          <div className="LaughMusic-gameCorner-card">
            <div className="LaughMusic-gameCorner-image"></div>
            <p className="LaughMusic-gameCorner-label">
              〇✕ゲーム
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LaughMusicGameCorner;
