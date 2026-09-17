"use client";

import React from "react";
import "./KyouyasaiGame.css";

import bingoImage from "./Game/No.1.jpg";


function KyouyasaiGame() {

  const games = [
    {
      name: "ビンゴ",
      image: bingoImage,
    },
  ];


  return (
    <section className="kyoyasai-gameCorner-section">

      <div className="kyoyasai-section-title">
        イベント
      </div>


      <div className="kyoyasai-gameCorner-list">

        {games.map((game, index) => (

          <div
            className="kyoyasai-gameCorner-item"
            key={index}
          >

            <div className="kyoyasai-gameCorner-card">

              <img
                src={game.image.src}
                alt={game.name}
                className="kyoyasai-gameCorner-image"
              />

              <p className="kyoyasai-gameCorner-label">
                {game.name}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


export default KyouyasaiGame;