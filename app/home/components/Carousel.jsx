"use client";

import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export default function Carousel({ items = [] }) {
  const containerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [isStopped, setIsStopped] = useState(false);

  const fallbackItems = [
    {
      title: "企業広告①",
      description: "企業名：紹介文など",
      image: "/sample1.jpg",
    },
    {
      title: "企業広告②",
      description: "企業名：紹介文など",
      image: "/sample2.jpg",
    },
    {
      title: "企業広告③",
      description: "企業名：紹介文など",
      image: "/sample3.jpg",
    },
    {
      title: "企業広告④",
      description: "企業名：紹介文など",
      image: "/sample4.jpg",
    },
    {
      title: "企業広告⑤",
      description: "企業名：紹介文など",
      image: "/sample5.jpg",
    },
    {
      title: "企業広告⑥",
      description: "企業名：紹介文など",
      image: "/sample6.jpg",
    },
  ];

  const displayItems =
    items.length > 0 ? items : fallbackItems;

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let animationId;

    const speed = 1.4;
    const stopTime = 800;

    let isPaused = false;
    let lastStoppedIndex = -1;

    const scroll = () => {

      const list =
        container.querySelector(
          ".Home-carousel-list"
        );

      const firstCard = list?.children[0];

      if (!firstCard) {

        animationId =
          requestAnimationFrame(scroll);

        return;
      }

      const cardWidth =
        firstCard.offsetWidth + 28;

      const totalWidth =
        displayItems.length * cardWidth;

      if (!isPaused) {

        setIsStopped(false);

        container.scrollLeft += speed;

        /* =========================
           画面中央位置
        ========================= */
        const center =
          container.scrollLeft +
          container.clientWidth / 2;

        /* =========================
           中央カード判定
        ========================= */
        const index =
          Math.round(
            (center - cardWidth / 2) /
              cardWidth
          );

        /* =========================
           カード中央位置
        ========================= */
        const cardCenter =
          index * cardWidth +
          cardWidth / 2;

        /* =========================
           ページ更新
        ========================= */
        setCurrentPage(
          (
            (index %
              displayItems.length) +
            displayItems.length
          ) % displayItems.length
        );

        /* =========================
           中央で停止
        ========================= */
        if (
          Math.abs(
            center - cardCenter
          ) <= speed &&
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

        /* =========================
           無限ループ
        ========================= */
        if (
          container.scrollLeft >=
          totalWidth
        ) {

          container.scrollLeft -=
            totalWidth;

          lastStoppedIndex = -1;
        }

        if (
          container.scrollLeft <= 0
        ) {

          container.scrollLeft +=
            totalWidth;
        }
      }

      animationId =
        requestAnimationFrame(scroll);
    };

    animationId =
      requestAnimationFrame(scroll);

    return () =>
      cancelAnimationFrame(animationId);

  }, [displayItems.length]);

  return (
    <div className="Home-carousel-wrapper">

      {/* =========================
          スクロール
      ========================= */}
      <div
        ref={containerRef}
        className="Home-carousel-container"
      >

        <div className="Home-carousel-list">

          {displayItems
            .concat(displayItems)
            .map((item, index) => {

              const isCenter =
                index %
                  displayItems.length ===
                currentPage;

              const shouldScale =
                isCenter && isStopped;

              return (
                <div
                  key={index}
                  className={`Home-carousel-card ${
                    shouldScale
                      ? "is-center"
                      : ""
                  }`}
                >

                  {/* 上ライン */}
                  <div className="Home-carousel-card-top-line-left" />
                  <div className="Home-carousel-card-top-line-right" />

                  {/* 下ライン */}
                  <div className="Home-carousel-card-bottom-line-left" />
                  <div className="Home-carousel-card-bottom-line-right" />

                  {/* 上中央 */}
                  <div className="futuristic-frame-top" />

                  {/* 下中央 */}
                  <div className="futuristic-frame-bottom" />

                  {/* 中身 */}
                  <div className="Home-carousel-content">

                    {/* 画像 */}
                    <div className="Home-carousel-image-placeholder">

                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                        />
                      ) : (
                        "画像"
                      )}

                    </div>

                    {/* タイトル */}
                    <h2 className="Home-carousel-title">
                      {item.title}
                    </h2>

                    {/* ドット */}
                    <div className="Home-carousel-dots" />

                    {/* 説明 */}
                    <p className="Home-carousel-description">
                      {item.description}
                    </p>

                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* =========================
          インジケータ
      ========================= */}
      <div className="Home-carousel-indicator">

        {displayItems.map((_, index) => (

          <span
            key={index}
            className={`Home-indicator-dot ${
              index === currentPage
                ? "active"
                : ""
            }`}
          />

        ))}

      </div>
    </div>
  );
}