"use client";

import React, {
  useState,
  useEffect,
} from "react";

import "./ImageCarousel.css";

// ==============================
// 画像
// ==============================

import img1 from "./images/No.1.jpg";
import img2 from "./images/No.2.jpg";
import img3 from "./images/No.3.jpg";

const images = [
  img1,
  img2,
  img3,
];


// ==============================
// 画像カルーセル
// ==============================

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(
        (prev) =>
          (prev + 1) % images.length
      );
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="kurabuten-image-carousel">

      {/* ==============================
          中央フレーム
      ============================== */}

      <div className="kurabuten-frame-top-center" />

      <div className="kurabuten-frame-bottom-center" />


      {/* ==============================
          上部装飾
      ============================== */}

      <div className="kurabuten-frame-top">
        開催風景
      </div>


      {/* ==============================
          四隅
      ============================== */}

      <div className="kurabuten-frame-corner-tl" />
      <div className="kurabuten-frame-corner-tr" />
      <div className="kurabuten-frame-corner-bl" />
      <div className="kurabuten-frame-corner-br" />


      {/* ==============================
          画像
      ============================== */}

      {images.map((src, idx) => {

        let className =
          "kurabuten-carousel-image";

        if (idx === current) {
          className += " center";
        }

        else if (
          idx ===
          (current + 1) % images.length
        ) {
          className += " right";
        }

        else if (
          idx ===
          (
            current -
            1 +
            images.length
          ) % images.length
        ) {
          className += " left";
        }

        else {
          className += " hidden";
        }

        return (
          <img
            key={idx}
            src={src.src}
            alt={`開催風景 ${idx + 1}`}
            className={className}
          />
        );
      })}

    </div>
  );
}

export default ImageCarousel;