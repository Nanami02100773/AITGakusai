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

      {/* =================================================
          メインカード
      ================================================= */}
      <div className="hero-card">

        {/* 背景画像 */}
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />

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
                  src="/images/mascot.jpg"
                  alt=""
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