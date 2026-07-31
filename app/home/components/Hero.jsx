"use client";

import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {

  const heroImages = [
    "/homehero/1.jpg",
    "/homehero/2.jpg",
    "/homehero/3.jpg",
  ];

  const messages = [
    "本日はご来場ありがとうございます！",
    "企画一覧から気になるイベントをチェック！",
    "マップ機能で迷わず回ろう！",
    "フォトスポットもあるよ📸",
  ];

  const [index, setIndex] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  /* =========================
     吹き出し切り替え
  ========================= */
  useEffect(() => {

    const interval = setInterval(() => {

      setAnimate(true);

      setTimeout(() => {

        setIndex((prev) =>
          (prev + 1) % messages.length
        );

        setAnimate(false);

      }, 400);

    }, 3000);

    return () => clearInterval(interval);

  }, [messages.length]);

  /* =========================
     ヒーロー画像切り替え
  ========================= */
  useEffect(() => {

    const interval = setInterval(() => {

      setHeroIndex((prev) =>
        (prev + 1) % heroImages.length
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

    return (
    <section className="Home-Hero-section">

      {/* =================================================
          メインカード
      ================================================= */}
      <div className="Home-Hero-card">

        {/* 背景画像 */}
        <div className="Home-Hero-image-wrapper">

          {heroImages.map((image, i) => (
            <div
              key={i}
              className={`Home-Hero-image ${
                i === heroIndex
                  ? "Home-Hero-image-active"
                  : ""
              } ${
                i % 2 === 0
                  ? "Home-Hero-image-left-motion"
                  : "Home-Hero-image-right-motion"
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}

        </div>

        {/* 左上装飾 */}
        <div className="Home-Hero-frame-left-extra" />

        {/* 右下装飾 */}
        <div className="Home-Hero-frame-right-extra" />

        {/* 縦ライン */}
        <span className="Home-Hero-frame-bottom-left-straight" />

        {/* タイトル */}
        <div className="Home-Hero-text">

          <h1>愛工大祭</h1>

          <p>HIYAKU</p>

        </div>

      </div>

      {/* =================================================
          キャラクター
      ================================================= */}
      <div className="Home-Hero-mascot-card">

        <div className="Home-Hero-balloon-slider">

          <div
            className={`Home-Hero-balloon-item ${
              animate
                ? "Home-Hero-balloon-item-animate"
                : ""
            }`}
          >

            {/* 名前 */}
            <div className="Home-Hero-mascot-name">
              リード君
            </div>

            <div className="Home-Hero-balloon-inner">

              {/* キャラクター画像 */}
              <div className="Home-Hero-mascot-circle">

                <img
                  src="/homehero/mascot.jpg"
                  alt="リード君"
                  className="Home-Hero-mascot-image"
                />

              </div>
                            {/* 吹き出し */}
              <span className="Home-Hero-balloon-text">
                {messages[index]}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
