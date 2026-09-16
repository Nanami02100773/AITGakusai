"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import "./ImageCarousel.css";

import img1 from "./images/No.1.jpg";
import img2 from "./images/No.2.jpg";
import img3 from "./images/No.3.jpg";


/* ========================================
   開催風景画像
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
    <div className="make-image-carousel">


      {/* ========================================
          中央フレーム
      ======================================== */}

      <div className="make-frame-top-center" />

      <div className="make-frame-bottom-center" />


      {/* ========================================
          上部タイトル
      ======================================== */}

      <div className="make-frame-top">
        開催風景
      </div>


      {/* ========================================
          四隅装飾
      ======================================== */}

      <div className="make-frame-corner-tl" />

      <div className="make-frame-corner-tr" />

      <div className="make-frame-corner-bl" />

      <div className="make-frame-corner-br" />


      {/* ========================================
          画像
      ======================================== */}

      {images.map((image, idx) => {

        let className =
          "make-carousel-image";


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
          <Image
            key={idx}
            src={image}
            alt={`開催風景 ${idx + 1}`}
            className={className}
          />
        );

      })}

    </div>
  );
}


export default ImageCarousel;