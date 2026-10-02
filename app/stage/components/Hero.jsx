"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Hero.css";

import image1 from "./data/1.jpg";
import image2 from "./data/2.jpg";
import image3 from "./data/3.jpg";
import image4 from "./data/4.jpg";
import image5 from "./data/5.jpg";
import image6 from "./data/6.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

export default function Hero() {
  const [mainImage, setMainImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMainImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="Stage-Hero-section">

      {/* =================================================
          HERO
      ================================================= */}
      <div className="Stage-Hero-container">

        <Image
          src={images[mainImage]}
          alt="ステージ"
          fill
          priority
          className="Stage-Hero-image"
        />

        {/* タイトル */}
        <div className="Stage-Hero-title">
          ステージ情報
        </div>

        {/* サムネイル */}
        <div className="Stage-Hero-thumbnail-list">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className={`Stage-Hero-thumbnail-button ${
                mainImage === i
                  ? "Stage-Hero-thumbnail-active"
                  : ""
              }`}
              onClick={() => setMainImage(i)}
            >
              <Image
                src={img}
                alt={`ステージ${i + 1}`}
                fill
                className="Stage-Hero-thumbnail-item"
              />
            </button>
          ))}
        </div>

      </div>

      {/* =================================================
          下エリア
      ================================================= */}
      <div className="Stage-Hero-bottom">

        <div className="Stage-Hero-card">

          {/* 外側フレーム */}
          <div className="Stage-Hero-frame"></div>

          {/* 上バー */}
          <div className="Stage-Hero-topLine"></div>

          {/* 右下装飾 */}
          <div className="Stage-Hero-corner-bottomRight"></div>

          {/* テキスト */}
          <div className="Stage-Hero-text">

            <p className="Stage-Hero-subText">
              人気アイドルやバンドのライブ楽しいミニゲームなど
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