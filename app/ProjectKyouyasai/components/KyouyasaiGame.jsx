import React from "react";
import "./KyouyasaiGame.css";

function KyouyasaiGame() {
  const games = [
    "ビンゴ",
  ];

  return (
    <section className="kyoyasai-gameCorner-section">
      <div className="kyoyasai-section-title">Game Corner</div>

      <div className="kyoyasai-gameCorner-list">
        {games.map((game, index) => (
          <div className="kyoyasai-gameCorner-item" key={index}>
            <div className="kyoyasai-gameCorner-card">
              <div className="kyoyasai-gameCorner-image"></div>
              <p className="kyoyasai-gameCorner-label">
                {game}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KyouyasaiGame;