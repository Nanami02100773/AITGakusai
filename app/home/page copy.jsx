"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import NoticeSection from "./components/NoticeSection";

const images = [
  { src: "image1.jpg", alt: "広告1" },
  { src: "image2.jpg", alt: "広告2" },
  { src: "image3.jpg", alt: "広告3" },
  { src: "image1.jpg", alt: "広告4" },
  { src: "image2.jpg", alt: "広告5" },
  { src: "image3.jpg", alt: "広告6" },
];

export default function ZentaiCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(images.length / 2); // 2枚ずつスライド

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div>
      <section className="carousel-section">
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
              display: "flex",
              width: `${(images.length / 2) * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                className="carousel-slide"
                key={slideIndex}
                style={{ display: "flex", width: "100%" }}
              >
                {images
                  .slice(slideIndex * 2, slideIndex * 2 + 2)
                  .map((image, i) => (
                    <div className="carousel-item" key={i} style={{ flex: 1 }}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <div className="indicator">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span
                key={i}
                className={`dot ${currentIndex === i ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* お知らせコンポーネントの呼び出し */}
      <NoticeSection />
    </div>
  );
}
