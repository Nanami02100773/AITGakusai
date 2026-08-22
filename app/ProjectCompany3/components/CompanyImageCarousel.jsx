"use client";
import React, { useEffect, useState } from "react";
import "./CompanyImageCarousel.css";

const images = [
  "/images/company1.jpg",
  "/images/company2.jpg",
  "/images/company3.jpg",
];

export default function CompanyImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedImages = [...images, images[0]];

  // 自動スライド
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ★ transition終了時に処理する
  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      // いったんアニメーションを切る
      setIsTransitioning(false);
      setCurrentIndex(0);

      // 次フレームでアニメーションを戻す
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  return (
    <div className="Company-background-box">
      <div className="Company-image-carousel">
        <div
          className="Company-carousel-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning
              ? "transform 0.6s ease-in-out"
              : "none",
          }}
        >
          {extendedImages.map((src, index) => (
            <div className="Company-slide" key={index}>
              <div className="Company-card">
                <img
                  src={src}
                  alt={`company-${index}`}
                  className="Company-carousel-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}