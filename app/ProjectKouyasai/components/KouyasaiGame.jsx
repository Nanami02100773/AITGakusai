"use client";

import React from "react";
import "./KouyasaiGame.css";

import no1Image from "./Game/No.1.jpg";
import no2Image from "./Game/No.2.jpg";
import no3Image from "./Game/No.3.jpg";
import no4Image from "./Game/No.4.jpg";
import no5Image from "./Game/No.5.jpg";


function KouyasaiGame() {

  const games = [
    {
      name: "後夜ダンス",
      image: no1Image,
    },
    {
      name: "ビンゴ",
      image: no2Image,
    },
    {
      name: "火舞",
      image: no3Image,
    },
    {
      name: "仕掛け花火",
      image: no4Image,
    },
    {
      name: "打上花火",
      image: no5Image,
    },
  ];


  return (
    <section className="koyasai-gameCorner-section">

      <div className="koyasai-section-title">
          イベント
      </div>


      <div className="koyasai-gameCorner-list">

        {games.map((game, index) => (

          <div
            className="koyasai-gameCorner-item"
            key={index}
          >

            <div className="koyasai-gameCorner-card">

              <img
                src={game.image.src}
                alt={game.name}
                className="koyasai-gameCorner-image"
              />

              <p className="koyasai-gameCorner-label">
                {game.name}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


export default KouyasaiGame;