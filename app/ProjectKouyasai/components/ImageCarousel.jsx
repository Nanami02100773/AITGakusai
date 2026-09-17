"use client";

import React, {
  useState,
  useEffect,
} from "react";

import "./ImageCarousel.css";


// =================================================
// 画像
// =================================================

import img1 from "./images/No.1.jpg";
import img2 from "./images/No.2.jpg";
import img3 from "./images/No.3.jpg";


const images = [
  img1,
  img2,
  img3,
];


// =================================================
// ImageCarousel
// =================================================

function ImageCarousel() {

  const [current, setCurrent] = useState(0);


  // =================================================
  // 自動切り替え
  // =================================================

  useEffect(() => {

    if (images.length <= 1) {
      return;
    }

    const timer = setInterval(() => {

      setCurrent(
        (prev) =>
          (prev + 1) % images.length
      );

    }, 7000);


    return () => {
      clearInterval(timer);
    };

  }, []);


  // =================================================
  // 表示
  // =================================================

  return (
    <div className="koyasai-image-carousel">


      {/* ==========================================
          中央フレーム
      ========================================== */}

      <div className="koyasai-frame-top-center" />

      <div className="koyasai-frame-bottom-center" />


      {/* ==========================================
          上部装飾
      ========================================== */}

      <div className="koyasai-frame-top">
        開催風景
      </div>


      {/* ==========================================
          四隅
      ========================================== */}

      <div className="koyasai-frame-corner-tl" />

      <div className="koyasai-frame-corner-tr" />

      <div className="koyasai-frame-corner-bl" />

      <div className="koyasai-frame-corner-br" />


      {/* ==========================================
          画像
      ========================================== */}

      {images.map((src, idx) => {

        let className =
          "koyasai-carousel-image";


        // ------------------------------
        // 中央
        // ------------------------------

        if (idx === current) {

          className += " center";

        }


        // ------------------------------
        // 右
        // ------------------------------

        else if (
          idx ===
          (current + 1) % images.length
        ) {

          className += " right";

        }


        // ------------------------------
        // 左
        // ------------------------------

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


        // ------------------------------
        // 非表示
        // ------------------------------

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