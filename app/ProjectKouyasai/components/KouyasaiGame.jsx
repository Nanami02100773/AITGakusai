import React from "react";
import "./KouyasaiGame.css";

function KouyasaiGame() {
  const games = [
    "後夜ダンス",
    "ビンゴ",
    "仕掛け花火",
    "打上花火",
  ];

  return (
    <section className="Kouyasai-gameCorner-section">
      <div className="Kouyasai-section-title">Game Corner</div>

      <div className="Kouyasai-gameCorner-list">
        {games.map((game, index) => (
          <div className="Kouyasai-gameCorner-item" key={index}>
            <div className="Kouyasai-gameCorner-card">
              <div className="Kouyasai-gameCorner-image"></div>
              <p className="Kouyasai-gameCorner-label">
                {game}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KouyasaiGame;
