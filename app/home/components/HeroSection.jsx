"use client";
import { useEffect, useState } from "react";
import "./HeroSection.css";

export default function HeroSection({
  image = "/images/hero.jpg",
}) {

  const messages = [
    "本日はご来場ありがとうございます！",
    "企画一覧から気になるイベントをチェック！",
    "マップ機能で迷わず回ろう！",
    "フォトスポットもあるよ📸",
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

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

  return (
    <section className="hero">

      {/* メインカード */}
      <div className="hero-card">

        {/* 背景画像 */}
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />

        {/* 左上装飾 */}
        <div className="hero-frame hero-frame-left" />

        {/* 右上装飾 */}
<div className="hero-frame-top-right">

{/* 右上角 */}
  <span className="hero-frame-top-right-corner"></span>

  {/* ドット */}
  <span className="hero-frame-top-right-dot"></span>

  {/* クロスライン */}
  <span className="hero-frame-top-right-cross"></span>

  {/* 斜めライン */}
  <span className="hero-frame-top-right-line"></span>

</div>

        {/* 左下装飾 */}
        <div className="hero-frame-bottom-left">

          <span className="hero-frame-bottom-left-line1"></span>
          <span className="hero-frame-bottom-left-line2"></span>
          <span className="hero-frame-bottom-left-line3"></span>

          {/* 斜めライン */}
          <span className="hero-frame-bottom-left-straight"></span>

          {/* 横ライン */}
          <span className="hero-frame-bottom-left-straight-line"></span>

        </div>

        {/* 右下装飾 */}
        <div className="hero-frame hero-frame-right" />

        {/* タイトル */}
        <div className="hero-text">

          <h1>愛工大祭</h1>

          <p>HIYAKU</p>

        </div>

      </div>

      {/* キャラ + 吹き出し */}
      <div className="hero-mascot-card">

        <div className="balloon-slider-vertical">

          <div
            className={`balloon-item ${
              animate ? "animate" : ""
            }`}
          >

            <div className="balloon-inner">

              {/* 左リング */}
              <div className="balloon-circle">

                <img
                  src="/images/mascot.jpg"
                  alt=""
                  className="balloon-circle-image"
                />

              </div>

              {/* 上ライン */}
              <div className="balloon-top-line" />

              {/* テキスト */}
              <span className="balloon-text">
                {messages[index]}
              </span>

              {/* 下ライン */}
              <div className="balloon-tech-line" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}