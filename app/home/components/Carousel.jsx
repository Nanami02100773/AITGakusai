"use client";

import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export default function Carousel({ items = [] }) {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isStopped, setIsStopped] = useState(false);

  const fallbackItems = [
    { title: "学園祭のお知らせ①", description: "各企画を準備中です", image: "https://placehold.jp/600x400.png" },
    { title: "学園祭のお知らせ②", description: "ステージ企画を準備中", image: "https://placehold.jp/600x400.png" },
    { title: "学園祭のお知らせ③", description: "屋台情報を更新予定", image: "https://placehold.jp/600x400.png" },
    { title: "学園祭のお知らせ④", description: "参加団体を紹介します", image: "https://placehold.jp/600x400.png" },
    { title: "学園祭のお知らせ⑤", description: "タイムテーブル公開予定", image: "https://placehold.jp/600x400.png" },
    { title: "学園祭のお知らせ⑥", description: "最新情報をお楽しみに", image: "https://placehold.jp/600x400.png" },
  ];

  const displayItems = items.length > 0 ? items : fallbackItems;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;
    const speed = 1.2;
    const stopTime = 800;
    const cardWidth = 320 + 24; // ← カード幅に合わせて調整

    let isPaused = false;
    let isUserInteracting = false;
    let lastStoppedIndex = -1;

    const scroll = () => {
      if (!isPaused && !isUserInteracting) {
        setIsStopped(false);
        container.scrollLeft += speed;

        const center = container.scrollLeft + container.clientWidth / 2;
        const index = Math.floor(center / cardWidth);
        const cardCenter = index * cardWidth + cardWidth / 2;

        setCurrentPage(index % displayItems.length);

        if (Math.abs(center - cardCenter) < speed && index !== lastStoppedIndex) {
          isPaused = true;
          lastStoppedIndex = index;
          setIsStopped(true);

          setTimeout(() => {
            isPaused = false;
            setIsStopped(false);
          }, stopTime);
        }

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
          lastStoppedIndex = -1;
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
            const pageNumber = (index % displayItems.length) + 1;
            const isCenter = index % displayItems.length === currentPage;
            const shouldScale = isCenter && isStopped;

            return (
              <div
                key={index}
                className={`Home-carousel-card ${shouldScale ? "is-center" : ""}`}
              >
                <div className="Home-carousel-page">{pageNumber}</div>

                <img src={item.image} alt={item.title} className="Home-carousel-image" />
                <h2 className="Home-carousel-title">{item.title}</h2>
                <p className="Home-carousel-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="Home-carousel-indicator">
        {displayItems.map((_, index) => (
          <span
            key={index}
            className={`Home-indicator-dot ${index === currentPage ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
