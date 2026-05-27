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

      {/* =================================================
          HERO
      ================================================= */}
      <div className="stage-hero">

        <img
          src={mainImage}
          alt="ステージ"
          className="stage-image"
        />

        {/* タイトル */}
        <div className="stage-title">
          ステージ情報
        </div>

        {/* サムネ */}
        <div className="stage-thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`stage-thumb ${
                mainImage === img ? "active" : ""
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

      </div>

      {/* =================================================
          下エリア
      ================================================= */}
      <div className="stage-bottom">

        {/* =================================================
            白カード
        ================================================= */}
        <div className="stage-green-card">


  <div className="line-tl"></div>
  <div className="line-tr"></div>
  <div className="line-bl"></div>
  <div className="line-br"></div>

          {/* 外側フレーム */}
          <div className="stage-frame"></div>

          {/* 上バー */}
          <div className="top-line"></div>

          {/* 左上装飾 */}
          <div className="stage-corner-tl"></div>

          {/* 右下装飾 */}
          <div className="corner-br"></div>

          {/* =================================================
              テキスト
          ================================================= */}
          <div className="stage-info-text">

            <p className="stage-sub">
              人気アイドルやバンドのライブ、楽しいミニゲームなど
            </p>

            <h2 className="stage-main">
              盛りだくさん！
            </h2>

            <p className="stage-desc">
              参加して景品をゲットできるチャンスもあるので
              <br />
              見ても参加しても楽しめます♪
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default StageHeader;