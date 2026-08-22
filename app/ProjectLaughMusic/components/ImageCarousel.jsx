"use client";

import React, {
  useState,
  useEffect
} from "react";

import "./ImageCarousel.css";

function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent(
        (prev) =>
          (prev + 1) % images.length
      );
    }, 7000);

    return () => clearInterval(timer);
  }, [images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <div className="laughmusic-image-carousel">

      {/* 中央フレーム */}
      <div className="laughmusic-frame-top-center" />
      <div className="laughmusic-frame-bottom-center" />

      {/* 上下装飾 */}
      <div className="laughmusic-frame-top">
        開催風景
      </div>

      {/* 四隅 */}
      <div className="laughmusic-frame-corner-tl" />
      <div className="laughmusic-frame-corner-tr" />
      <div className="laughmusic-frame-corner-bl" />
      <div className="laughmusic-frame-corner-br" />

      {images.map((src, idx) => {

        let className =
          "laughmusic-carousel-image";

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
          ) %
            images.length
        ) {
          className += " left";
        }

        else {
          className += " hidden";
        }

        return (
          <img
            key={idx}
            src={src}
            alt={`carousel-${idx}`}
            className={className}
          />
        );
      })}
    </div>
  );
}

export default ImageCarousel;