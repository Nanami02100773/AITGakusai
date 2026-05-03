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

  useEffect(() => {
    const interval = setInterval(() => {
      setMainImage((prev) => {
        const currentIndex = images.indexOf(prev);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stage-section">

      {/* ===== ヒーロー ===== */}
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

      {/* ===== 下 ===== */}
     <div class="stage-green-card">
  <div class="corner-br"></div>

  {/* 👇 これ追加 */}
  <div className="top-line"></div>

  <div className="stage-info-text">

            <p className="stage-sub">
              人気アイドルやバンドのライブ、楽しいミニゲームなど
            </p>

            <h2 className="stage-main">
              盛りだくさん！
            </h2>

            <p className="stage-desc">
              参加して景品をゲットできるチャンスもあるので<br />
              見ても参加しても楽しめます♪
            </p>

          </div>
        </div>
    
    </section>
  );
};

export default StageHeader;