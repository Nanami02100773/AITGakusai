"use client";

import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export default function Carousel({ items = [] }) {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isStopped, setIsStopped] = useState(false);

  const fallbackItems = [
    { title: "企業広告①", description: "企業名：紹介文など" },
    { title: "企業広告②", description: "企業名：紹介文など" },
    { title: "企業広告③", description: "企業名：紹介文など" },
    { title: "企業広告④", description: "企業名：紹介文など" },
    { title: "企業広告⑤", description: "企業名：紹介文など" },
    { title: "企業広告⑥", description: "企業名：紹介文など" },
  ];

  const displayItems = items.length > 0 ? items : fallbackItems;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;
    const speed = 1.2;
    const stopTime = 800;

    let isPaused = false;
    let lastStoppedIndex = -1;

    const scroll = () => {
      const list = container.querySelector(".Home-carousel-list");
      const firstCard = list?.children[0];

      if (!firstCard) {
        animationId = requestAnimationFrame(scroll);
        return;
      }

      // 実際のカード幅（ズレ防止）
      const cardWidth = firstCard.offsetWidth + 24;
      const totalWidth = displayItems.length * cardWidth;

      if (!isPaused) {
        setIsStopped(false);
        container.scrollLeft += speed;

        const center = container.scrollLeft + container.clientWidth / 2;
        const index = Math.floor(center / cardWidth);
        const cardCenter = index * cardWidth + cardWidth / 2;

        setCurrentPage(index % displayItems.length);

        // 中央で一瞬停止
        if (
          Math.abs(center - cardCenter) < speed &&
          index !== lastStoppedIndex
        ) {
          isPaused = true;
          lastStoppedIndex = index;
          setIsStopped(true);

          setTimeout(() => {
            isPaused = false;
            setIsStopped(false);
          }, stopTime);
        }

        // 🔥 無限ループ（ここが重要）
        if (container.scrollLeft >= totalWidth) {
          container.scrollLeft -= totalWidth;
          lastStoppedIndex = -1;
        }

        if (container.scrollLeft <= 0) {
          container.scrollLeft += totalWidth;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [displayItems.length]);

  return (
    <div className="Home-carousel-wrapper">
      <div ref={containerRef} className="Home-carousel-container">
        <div className="Home-carousel-list">
          {displayItems.concat(displayItems).map((item, index) => {
            const isCenter =
              index % displayItems.length === currentPage;
            const shouldScale = isCenter && isStopped;

            return (
              <div
                key={index}
                className={`Home-carousel-card ${
                  shouldScale ? "is-center" : ""
                }`}
              >
                <div className="Home-carousel-image-placeholder">
                  画像
                </div>

                <h2 className="Home-carousel-title">{item.title}</h2>
                <p className="Home-carousel-description">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="Home-carousel-indicator">
        {displayItems.map((_, index) => (
          <span
            key={index}
            className={`Home-indicator-dot ${
              index === currentPage ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}