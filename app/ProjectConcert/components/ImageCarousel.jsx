"use client";

import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

import image1 from "./images/No.1.jpg";
import image2 from "./images/No.2.jpg";
import image3 from "./images/No.3.jpg";


/* ==========================================
   開催風景画像
========================================== */

const images = [
  image1,
  image2,
  image3,
];


/* ==========================================
   ImageCarousel
========================================== */

function ImageCarousel() {

  const [current, setCurrent] = useState(0);


  /* ==========================================
     7秒ごとに画像切り替え
  ========================================== */

  useEffect(() => {

    if (images.length <= 1) return;

    const timer = setInterval(() => {

      setCurrent((prev) =>
        (prev + 1) % images.length
      );

    }, 7000);

    return () => clearInterval(timer);

  }, []);


  return (
    <div className="concert-image-carousel">

      {/* 中央フレーム */}
      <div className="concert-frame-top-center" />
      <div className="concert-frame-bottom-center" />

      {/* 上部タイトル */}
      <div className="concert-frame-top">
        開催風景
      </div>

      {/* 四隅 */}
      <div className="concert-frame-corner-tl" />
      <div className="concert-frame-corner-tr" />
      <div className="concert-frame-corner-bl" />
      <div className="concert-frame-corner-br" />


      {/* ==========================================
          画像
      ========================================== */}

      {images.map((src, idx) => {

        let className = "concert-carousel-image";


        /* 中央 */

        if (idx === current) {

          className += " center";

        }


        /* 右 */

        else if (
          idx ===
          (current + 1) % images.length
        ) {

          className += " right";

        }


        /* 左 */

        else if (
          idx ===
          (current - 1 + images.length) %
            images.length
        ) {

          className += " left";

        }


        /* その他 */

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