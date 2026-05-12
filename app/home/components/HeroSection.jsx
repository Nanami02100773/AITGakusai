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

      {/* 背景 */}
      <div className="hero-bg-gradient" />

      {/* メイン画像 */}
      <div className="hero-card">

        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />

        <div className="hero-text">
          <h1>愛工大祭</h1>
          <p>HIYAKU</p>
        </div>

      </div>

      {/* キャラ + 吹き出し */}
      <div className="hero-mascot-card">


        {/* 吹き出し */}
        <div className="balloon-slider-vertical">

          {/* 固定フレーム */}
          <div className="balloon-frame" />

          {/* 本体 */}
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

            {/* 右先端 */}
            <div className="arrow-part" />

          </div>

        </div>

      </div>

    </section>
  );
}