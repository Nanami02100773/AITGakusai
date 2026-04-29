"use client";
import React, { useState, useEffect } from "react";
import "./StageTitle.css";

const images = [
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
];

const StageHeader = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  // 👇 ここに入れる！！！
  useEffect(() => {
    const interval = setInterval(() => {
      setMainImage((prev) => {
        const currentIndex = images.indexOf(prev);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000); // ← 3秒おすすめ

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stage-section">

      <div className="stage-hero">
        <img src={mainImage} alt="ステージ" className="stage-image" />

        <div className="stage-title">
          ステージ情報
        </div>

        <div className="stage-thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`stage-thumb ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
              alt=""
            />
          ))}
        </div>
      </div>

      <div className="stage-bottom">
        <div className="stage-white-base">
          <div className="stage-green-card">
            <div className="stage-info-text">
              <p>人気アイドルやバンドのライブ、楽しいミニゲームなど盛りだくさん！</p>
              <p>参加して景品をゲットできるチャンスもある</p>
              <p>見ても参加しても楽しめます。</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default StageHeader;