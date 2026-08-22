"use client";

import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
];

export default function Hero() {
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
    <section className="Stage-Hero-section">

      {/* =================================================
          HERO
      ================================================= */}
      <div className="Stage-Hero-container">

        <img
          src={mainImage}
          alt="ステージ"
          className="Stage-Hero-image"
        />

        {/* タイトル */}
        <div className="Stage-Hero-title">
          ステージ情報
        </div>

        {/* サムネイル */}
        <div className="Stage-Hero-thumbnail-list">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`Stage-Hero-thumbnail-item ${
                mainImage === img
                  ? "Stage-Hero-thumbnail-active"
                  : ""
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

      </div>

      {/* =================================================
          下エリア
      ================================================= */}
      <div className="Stage-Hero-bottom">

        {/* =================================================
            白カード
        ================================================= */}
        <div className="Stage-Hero-card">

          <div className="Stage-Hero-frame-topLeft"></div>
          <div className="Stage-Hero-frame-topRight"></div>
          <div className="Stage-Hero-frame-bottomLeft"></div>
          <div className="Stage-Hero-frame-bottomRight"></div>

          {/* 外側フレーム */}
          <div className="Stage-Hero-frame"></div>

          {/* 上バー */}
          <div className="Stage-Hero-topLine"></div>

          {/* 左上装飾 */}
          <div className="Stage-Hero-corner-topLeft"></div>

          {/* 右下装飾 */}
          <div className="Stage-Hero-corner-bottomRight"></div>

          {/* =================================================
              テキスト
          ================================================= */}
          <div className="Stage-Hero-text">

            <p className="Stage-Hero-subText">
              人気アイドルやバンドのライブ、楽しいミニゲームなど
            </p>

            <h2 className="Stage-Hero-mainText">
              盛りだくさん！
            </h2>

            <p className="Stage-Hero-description">
              参加して景品をゲットできるチャンスもあるので
              <br />
              見ても参加しても楽しめます♪
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}