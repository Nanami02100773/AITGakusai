import React from "react";
import "./KyouyasaiGame.css";

function KyouyasaiGame() {
  return (
    <section className="Kyouyasai-gameCorner-section">
      <div className="Kyouyasai-section-title">Game Corner</div>

      <div className="Kyouyasai-gameCorner-list">
        <div className="Kyouyasai-gameCorner-item">
          <div className="Kyouyasai-gameCorner-card">
            <div className="Kyouyasai-gameCorner-image"></div>
            <p className="Kyouyasai-gameCorner-label">
              ビンゴゲーム
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KyouyasaiGame;
