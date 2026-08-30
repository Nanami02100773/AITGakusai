"use client";

import React, {
  useState,
  useEffect
} from "react";

import "./ImageCarousel.css";

import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";


const defaultImages = [
  image1,
  image2,
  image3
];


function ImageCarousel({
  images = defaultImages
}) {

  const [current, setCurrent] = useState(0);


  /* =====================================
     自動切り替え
  ===================================== */

  useEffect(() => {

    if (images.length <= 1) {
      return;
    }

    const timer = setInterval(() => {

      setCurrent((prev) =>
        (prev + 1) % images.length
      );

    }, 7000);

    return () => {
      clearInterval(timer);
    };

  }, [images.length]);


  /* =====================================
     画像がない場合
  ===================================== */

  if (!images.length) {
    return null;
  }


  return (
    <div className="StampRally-image-carousel">

      {/* 中央フレーム */}
      <div className="StampRally-frame-top-center" />
      <div className="StampRally-frame-bottom-center" />


      {/* 上部タイトル */}
      <div className="StampRally-frame-top">
        開催風景
      </div>


      {/* 四隅 */}
      <div className="StampRally-frame-corner-tl" />
      <div className="StampRally-frame-corner-tr" />
      <div className="StampRally-frame-corner-bl" />
      <div className="StampRally-frame-corner-br" />


      {/* =====================================
         画像
      ===================================== */}

      {images.map((src, idx) => {

        let className =
          "StampRally-carousel-image";


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