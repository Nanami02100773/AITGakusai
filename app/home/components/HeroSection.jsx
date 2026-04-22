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
        setIndex((prev) => (prev + 1) % messages.length);
        setSlide(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (index + 1) % messages.length;

  return (
    <section className="hero">

      <div className="hero-bg-gradient" />

      <div className="hero-card">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className="hero-text">
          <h1>愛工大祭</h1>
          <p>HIYAKU</p>
        </div>
      </div>

      <div className="hero-mascot-card">
        <img src="/images/mascot.png" className="mascot" />

        <div className="balloon-slider-vertical">
          <div className={`balloon-track-vertical ${slide ? "slide" : ""}`}>
            <div className="balloon-item">
              {messages[index]}
            </div>

            <div className="balloon-item next">
              {messages[nextIndex]}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}