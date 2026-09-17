"use client";

import React from "react";
import "./LaughMusicGameCorner.css";

import no1Image from "./Game/No.1.jpg";
import no2Image from "./Game/No.2.jpg";


function LaughMusicGameCorner() {

  const games = [
    {
      name: "歌王",
      image: no1Image,
    },
    {
      name: "イントロドン",
      image: null,
    },
    {
      name: "〇✕ゲーム",
      image: no2Image,
    },
  ];


  return (
    <section className="LaughMusic-gameCorner-section">

      <div className="LaughMusic-section-title">
        イベント
      </div>


      <div className="LaughMusic-gameCorner-list">

        {games.map((game, index) => (

          <div
            className="LaughMusic-gameCorner-item"
            key={index}
          >

            <div className="LaughMusic-gameCorner-card">

              {game.image ? (
                <img
                  src={game.image.src}
                  alt={game.name}
                  className="LaughMusic-gameCorner-image"
                />
              ) : (
                <div className="LaughMusic-gameCorner-image LaughMusic-gameCorner-noImage">
                  NO IMAGE
                </div>
              )}

              <p className="LaughMusic-gameCorner-label">
                {game.name}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


export default LaughMusicGameCorner;