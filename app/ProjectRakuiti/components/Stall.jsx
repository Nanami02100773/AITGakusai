"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./Stall.css";
import cardData from "./data/StallData";

const Stall = () => {
  const router = useRouter();

  const [currentImages, setCurrentImages] = useState(
    cardData.map(() => 0)
  );

  /* ==========================================
     写真自動切り替え
  ========================================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((current, index) => {
          const images = cardData[index].images;

          if (!images || images.length <= 1) {
            return 0;
          }

          return (current + 1) % images.length;
        })
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="rakuichi-section">

      {/* タイトル */}
      <div className="rakuichi-section-wrapper">
        <div className="rakuichi-section-title">
          出展団体
        </div>
      </div>

      {/* カード一覧 */}
      <main className="rakuichi-card-list">
        <div className="rakuichi-card-wrapper">

          {cardData.map((item, index) => {
            const images = item.images || [];
            const imageCount = images.length;
            const currentImage = currentImages[index] || 0;

            return (
              <div
                className="rakuichi-card"
                key={index}
                onClick={() => router.push(item.link)}
              >

                {/* 左：写真＋団体名 */}
                <div className="rakuichi-card-left">

                  {/* 写真 */}
                  <div className="rakuichi-thumb">

                    {imageCount > 0 && (
                      <>
                        <img
                          key={`${index}-${currentImage}`}
                          src={images[currentImage].src}
                          alt={`${item.title} 写真 ${currentImage + 1}`}
                          className="rakuichi-thumb-image"
                        />

                        {/* 写真枚数 */}
                        {imageCount > 1 && (
                          <div className="rakuichi-photo-count">
                            {currentImage + 1} / {imageCount}
                          </div>
                        )}

                        {/* ドット */}
                        {imageCount > 1 && (
                          <div className="rakuichi-photo-dots">
                            {images.map((_, imageIndex) => (
                              <span
                                key={imageIndex}
                                className={
                                  imageIndex === currentImage
                                    ? "rakuichi-photo-dot active"
                                    : "rakuichi-photo-dot"
                                }
                              />
                            ))}
                          </div>
                        )}
                      </>
                    )}

                  </div>

                  {/* 団体名 */}
                  {item.group && (
                    <div className="rakuichi-shop-name-left">
                      {item.group}
                    </div>
                  )}

                </div>

                {/* 右：情報 */}
                <div className="rakuichi-card-right">

                  {/* 模擬店名 */}
                  <div className="rakuichi-shop-name">
                    {item.title}
                  </div>

                  {/* 詳細ボタン */}
                  <button
                    className="rakuichi-detail-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(item.link);
                    }}
                  >
                    ›
                  </button>

                  {/* 紹介 */}
                  <div className="rakuichi-info-block">

                    <div className="rakuichi-info-title">
                      紹介
                    </div>

                    {item.subdesc1 && (
                      <div className="rakuichi-info-text">
                        {item.subdesc1}
                      </div>
                    )}

                  </div>

                  {/* 屋台メニュー */}
                  <div className="rakuichi-menu-block">

                    <div className="rakuichi-info-title">
                      屋台メニュー
                    </div>

                    <div className="rakuichi-menu-text">
                      {item.food}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </main>
    </section>
  );
};

export default Stall;