"use client";

import { useEffect, useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {

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
    <section className="hero">

      {/* =================================================
          メインカード
      ================================================= */}
      <div className="hero-card">

        {/* 背景画像 */}
       <div className="hero-image-wrapper">

  {heroImages.map((image, i) => (
   <div
  key={i}
  className={`hero-image ${
    i === heroIndex ? "active" : ""
  } ${
    i % 2 === 0 ? "left-motion" : "right-motion"
  }`}
  style={{
    backgroundImage: `url(${image})`,
  }}
/>
  ))}

</div>

        {/* =================================================
            左上追加装飾
        ================================================= */}
        <div className="hero-frame-left-extra" />

        {/* =================================================
            右下追加装飾
        ================================================= */}
        <div className="hero-frame-right-extra" />

        {/* =================================================
            縦ブルーライン
        ================================================= */}
        <span className="hero-frame-bottom-left-straight"></span>

        {/* =================================================
            タイトル
        ================================================= */}
        <div className="hero-text">

          <h1>愛工大祭</h1>

          <p>HIYAKU</p>

        </div>

      </div>

      {/* =================================================
          キャラ + 吹き出し
      ================================================= */}
      <div className="hero-mascot-card">

        <div className="balloon-slider-vertical">

          <div
            className={`balloon-item ${
              animate ? "animate" : ""
            }`}
          >

            {/* 名前 */}
            <div className="hero-mascot-name">
              リード君
            </div>

            <div className="balloon-inner">

              {/* =================================================
                  左キャラ円
              ================================================= */}
              <div className="balloon-circle">

                <img
                  src="/homehero/mascot.jpg"
                  alt="リード君"
                  className="balloon-circle-image"
                />

              </div>

              {/* =================================================
                  吹き出しテキスト
              ================================================= */}
              <span className="balloon-text">
                {messages[index]}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}