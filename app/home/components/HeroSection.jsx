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
  const [slide, setSlide] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {

      setSlide(true);

      setTimeout(() => {

        setIndex((prev) =>
          (prev + 1) % messages.length
        );

        setSlide(false);

      }, 500);

    }, 3000);

    return () => clearInterval(interval);

  }, [messages.length]);

  const nextIndex =
    (index + 1) % messages.length;

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

      {/* マスコットカード */}
      <div className="hero-mascot-card">

        {/* キャラ */}
        <img
          src="/images/mascot.png"
          className="mascot"
          alt=""
        />

        {/* 吹き出し */}
        <div className="balloon-slider-vertical">

          <div
            className={`balloon-track-vertical ${
              slide ? "slide" : ""
            }`}
          >

            {/* 現在 */}
            <div className="balloon-item">

              {/* 左メカ円 */}
              <div className="balloon-circle">

                {/* 中の画像 */}
                <img
                  src="/images/mascot.png"
                  alt=""
                  className="balloon-circle-image"
                />

                {/* リング */}
                <div className="balloon-circle-ring" />

              </div>

              {/* テキスト */}
              <span className="balloon-text">
                {messages[index]}
              </span>

              {/* 右先端 */}
              <div className="arrow-part" />

            </div>

            {/* 次 */}
            <div className="balloon-item next">

              {/* 左メカ円 */}
              <div className="balloon-circle">

                {/* 中の画像 */}
                <img
                  src="/images/mascot.png"
                  alt=""
                  className="balloon-circle-image"
                />

                {/* リング */}
                <div className="balloon-circle-ring" />

              </div>

              {/* テキスト */}
              <span className="balloon-text">
                {messages[nextIndex]}
              </span>

              {/* 右先端 */}
              <div className="arrow-part" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}