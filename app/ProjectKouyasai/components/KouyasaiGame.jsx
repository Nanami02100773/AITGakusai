import React from "react";
import "./KouyasaiGame.css";

function koyasaiGame() {
  const games = [
    "後夜ダンス",
    "ビンゴ",
    "仕掛け花火",
    "打上花火",
  ];

  return (
    <section className="koyasai-gameCorner-section">
      <div className="koyasai-section-title">Game Corner</div>

      <div className="koyasai-gameCorner-list">
        {games.map((game, index) => (
          <div className="koyasai-gameCorner-item" key={index}>
            <div className="koyasai-gameCorner-card">
              <div className="koyasai-gameCorner-image"></div>
              <p className="koyasai-gameCorner-label">
                {game}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default koyasaiGame;
