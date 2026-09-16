"use client";

import React, {
  useState,
  useEffect
} from "react";

import "./ImageCarousel.css";


/* ========================================
   開催風景画像
======================================== */

import img1 from "./images/No.1.jpg";
import img2 from "./images/No.2.jpg";
import img3 from "./images/No.3.jpg";


/* ========================================
   画像一覧
======================================== */

const images = [
  img1,
  img2,
  img3,
];


function ImageCarousel() {

  const [current, setCurrent] = useState(0);


  /* ========================================
     自動切り替え
  ======================================== */

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) => {
        return (prev + 1) % images.length;
      });

    }, 7000);


    return () => {
      clearInterval(timer);
    };

  }, []);


  return (
    <div className="kajino-image-carousel">


      {/* ========================================
          中央フレーム
      ======================================== */}

      <div className="kajino-frame-top-center" />

      <div className="kajino-frame-bottom-center" />


      {/* ========================================
          上部タイトル
      ======================================== */}

      <div className="kajino-frame-top">
        開催風景
      </div>


      {/* ========================================
          四隅
      ======================================== */}

      <div className="kajino-frame-corner-tl" />

      <div className="kajino-frame-corner-tr" />

      <div className="kajino-frame-corner-bl" />

      <div className="kajino-frame-corner-br" />


      {/* ========================================
          画像
      ======================================== */}

      {images.map((src, idx) => {

        let className =
          "kajino-carousel-image";


        /* ========================================
           中央
        ======================================== */

        if (idx === current) {

          className += " center";

        }


        /* ========================================
           右
        ======================================== */

        else if (
          idx ===
          (current + 1) % images.length
        ) {

          className += " right";

        }


        /* ========================================
           左
        ======================================== */

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


        /* ========================================
           非表示
        ======================================== */

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