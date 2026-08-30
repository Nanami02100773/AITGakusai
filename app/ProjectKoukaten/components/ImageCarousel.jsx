"use client";

import React, {
  useState,
  useEffect
} from "react";

import "./ImageCarousel.css";

import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";


function ImageCarousel() {

  const images = [
    image1.src,
    image2.src,
    image3.src
  ];

  const [current, setCurrent] = useState(0);


  /* =====================================
     自動切り替え
  ===================================== */

  useEffect(() => {

    if (images.length <= 1) return;

    const timer = setInterval(() => {

      setCurrent((prev) =>
        (prev + 1) % images.length
      );

    }, 7000);

    return () => clearInterval(timer);

  }, [images.length]);


  return (
    <div className="Koukaten-image-carousel">

      {/* 中央フレーム */}
      <div className="Koukaten-frame-top-center" />
      <div className="Koukaten-frame-bottom-center" />


      {/* 上部タイトル */}
      <div className="Koukaten-frame-top">
        開催風景
      </div>


      {/* 四隅 */}
      <div className="Koukaten-frame-corner-tl" />
      <div className="Koukaten-frame-corner-tr" />
      <div className="Koukaten-frame-corner-bl" />
      <div className="Koukaten-frame-corner-br" />


      {/* =====================================
          画像
      ===================================== */}

      {images.map((src, idx) => {

        let className =
          "Koukaten-carousel-image";


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
          (
            current -
            1 +
            images.length
          ) % images.length
        ) {

          className += " left";

        }


        /* 非表示 */
        else {

          className += " hidden";

        }


        return (
          <img
            key={idx}
            src={src}
            alt={`開催風景 ${idx + 1}`}
            className={className}
          />
        );

      })}

    </div>
  );
}


export default ImageCarousel;