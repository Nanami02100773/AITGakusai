"use client";

import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export default function Carousel({ items = [] }) {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isStopped, setIsStopped] = useState(false);

  // items が空のときのダミー（6ページ）
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
    const speed = 1.2;        // 自動スクロール速度
    const stopTime = 800;     // 中央で止まる時間
    const cardWidth = 420 + 40;

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

        // 中央に来たら一回止まる
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

        // 無限ループ
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
          lastStoppedIndex = -1;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    // 手動操作検知
    const onMouseDown = () => (isUserInteracting = true);
    const onMouseUp = () => (isUserInteracting = false);
    const onMouseLeave = () => (isUserInteracting = false);
    const onTouchStart = () => (isUserInteracting = true);
    const onTouchEnd = () => (isUserInteracting = false);

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchend", onTouchEnd);

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [displayItems.length]);

  return (
    <div className="carousel-wrapper">
      <div ref={containerRef} className="carousel-container horizontal">
        <div className="carousel-list horizontal">
          {displayItems.concat(displayItems).map((item, index) => {
            const pageNumber = (index % displayItems.length) + 1;
            const isCenter = index % displayItems.length === currentPage;
            const shouldScale = isCenter && isStopped;

            return (
              <div
                key={index}
                className={`carousel-card horizontal ${
                  shouldScale ? "is-center" : ""
                }`}
              >
                <div className="carousel-page">{pageNumber}</div>

                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="carousel-image"
                  />
                )}

                <h2 className="carousel-title">{item.title}</h2>
                <p className="carousel-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ページインジケータ */}
      <div className="carousel-indicator">
        {displayItems.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${
              index === currentPage ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
