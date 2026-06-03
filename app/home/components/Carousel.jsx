"use client";

import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export default function Carousel({ items = [] }) {
  const containerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [isStopped, setIsStopped] = useState(false);

const fallbackItems = [
  {
    category: "マスコット総選挙",
    title: "うちのリード君を応援しませんか？",
    description:
      "全国の学祭のマスコットキャラクターの総選挙を開催中。ぜひ投票をお願いします！",
    image: "/homecarousel/generalelection.jpg",
  },
  {
    category: "休憩所のご案内",
    title: "ちょっとひと休みしませんか？",
    description:
      "楽しんだあとは休憩所でリフレッシュ！飲食や待ち合わせにもご利用いただけます。",
    image: "/homecarousel/restarea.jpg",
  },
  {
    category: "景品をゲットしよう！",
    title: "回答して豪華景品を当てよう！！",
    description:
      "全体アンケートに答えると総合案内所で抽選で素敵な景品をプレゼント！",
    image: "/homecarousel/present.jpg",
  },
  {
    category: "献血にご協力を！！",
    title: "あなたの献血が誰かの命を救う",
    description:
      "学祭会場内の献血バスで受付中です。",
    image: "/homecarousel/kenketsu.jpg",
  },
  {
    category: "歌王",
    title: "出演者たちが十八番の１曲で真剣勝負！",
    description:
      "出演者が選んだ渾身の１曲で勝負！歌声に心を動かされたらぜひ投票にご参加ください。",
    image: "/homecarousel/utao.jpg",
  },
  {
    category: "〇✕ゲーム",
    title: "〇か✕か、最後まで生き残れ！",
    description:
      "知識も運も試されるドキドキの〇✕ゲーム！最後まで勝ち残り豪華景品をゲットしよう！",
    image: "/homecarousel/game.jpg",
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

        const center =
          container.scrollLeft +
          container.clientWidth / 2;

        const index = Math.round(
          (center - cardWidth / 2) /
            cardWidth
        );

        const cardCenter =
          index * cardWidth +
          cardWidth / 2;

        setCurrentPage(
          ((index % displayItems.length) +
            displayItems.length) %
            displayItems.length
        );

        if (
          Math.abs(center - cardCenter) <=
            speed &&
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

                  <div className="Home-carousel-content">

                    {/* 画像 */}
                    <div className="Home-carousel-image-placeholder">

                      {item.image ? (
                        <img
                          src={item.image}
                        />
                      ) : (
                        "画像"
                      )}

                    </div>

                    {/* テキスト */}
                    <div className="Home-carousel-text-area">

                      <p className="Home-carousel-category">
                        {item.category}
                      </p>

                      <div className="Home-carousel-dots" />

                      <h2 className="Home-carousel-title">
                        {item.title}
                      </h2>

                

                      <p className="Home-carousel-description">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

        </div>
      </div>

      <div className="Home-carousel-indicator">

        {displayItems.map(
          (_, index) => (
            <span
              key={index}
              className={`Home-indicator-dot ${
                index === currentPage
                  ? "active"
                  : ""
              }`}
            />
          )
        )}

      </div>

    </div>
  );
}