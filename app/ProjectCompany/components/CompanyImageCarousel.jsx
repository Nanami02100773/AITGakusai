"use client";
import React, { useEffect, useRef, useState } from "react";
import "./CompanyImageCarousel.css";

const images = [
  "/images/company1.jpg",
  "/images/company2.jpg",
  "/images/company3.jpg",
];

export default function CompanyImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);   // ← 型指定なし（JSX用）
  const [slideWidth, setSlideWidth] = useState(0);

  // 表示枠の幅を取得
  useEffect(() => {
    if (!carouselRef.current) return;
    setSlideWidth(carouselRef.current.clientWidth);
  }, []);

  // 自動スライド
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ループ処理
  useEffect(() => {
    if (currentIndex === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 600);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex]);

  return (
    <div className="Company-background-box">
      <div className="Company-image-carousel" ref={carouselRef}>
        <div
          className="Company-carousel-track"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {[...images, images[0]].map((src, index) => (
            <div className="Company-slide" key={index}>
              <img
                src={src}
                alt={`company-${index}`}
                className="Company-carousel-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
