"use client";

import React, { useEffect, useState } from "react";
import "./Group.css";
import GroupData from "./data/GroupData";


/* ==========================================
   コンポーネント
========================================== */

const IntroductoryItems = () => {

  const [currentImages, setCurrentImages] = useState(
    GroupData.map(() => 0)
  );


  /* ==========================================
     写真を5秒ごとに切り替え
  ========================================== */

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentImages((prev) =>
        prev.map((current, index) => {

          const images = GroupData[index].images;

          /* 画像が1枚以下の場合 */

          if (!images || images.length <= 1) {
            return 0;
          }

          /* 次の画像へ */

          return (current + 1) % images.length;

        })
      );

    }, 5000);

    return () => clearInterval(timer);

  }, []);


  return (
    <section className="IntroductoryItems-section">


      {/* ==========================================
          セクションタイトル
      ========================================== */}

      <div className="IntroductoryItems-section-wrapper">

        <div className="kurabuten-section-title">
          出展団体
        </div>

      </div>


      {/* ==========================================
          カード一覧
      ========================================== */}

      <main className="IntroductoryItems-card-list">

        <div className="IntroductoryItems-card-wrapper">

          {GroupData.map((item, index) => {

            /* ==================================
               画像枚数
            ================================== */

            const imageCount = item.images.length;


            /* ==================================
               現在の画像番号
            ================================== */

            const currentImage =
              currentImages[index] || 0;


            /* ==================================
               安全な画像番号
            ================================== */

            const safeImageIndex =
              imageCount > 0
                ? currentImage % imageCount
                : 0;


            return (

              <div
                className="IntroductoryItems-card"
                key={index}
              >


                {/* ==================================
                    番号＋団体名
                ================================== */}

                <div className="IntroductoryItems-top">

                  <div className="IntroductoryItems-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="IntroductoryItems-group">
                    {item.group}
                  </div>

                </div>


                {/* ==================================
                    ピンクライン
                ================================== */}

                <div className="IntroductoryItems-red-line"></div>


                {/* ==================================
                    紹介文
                ================================== */}

                <div className="IntroductoryItems-description">
                  {item.subdesc1}
                </div>


                {/* ==================================
                    画像
                ================================== */}

                <div className="IntroductoryItems-thumb">

                  {imageCount > 0 ? (

                    <>


                      {/* ==============================
                          写真
                      ============================== */}

                      <img
                        key={`${index}-${safeImageIndex}`}
                        src={item.images[safeImageIndex].src}
                        alt={`${item.group} 写真 ${safeImageIndex + 1}`}
                        className="IntroductoryItems-thumb-image"
                      />


                      {/* ==============================
                          写真枚数
                      ============================== */}

                      {imageCount > 1 && (

                        <div className="IntroductoryItems-photo-count">

                          {safeImageIndex + 1} / {imageCount}

                        </div>

                      )}


                      {/* ==============================
                          写真ドット
                      ============================== */}

                      {imageCount > 1 && (

                        <div className="IntroductoryItems-photo-dots">

                          {item.images.map((_, imageIndex) => (

                            <span
                              key={imageIndex}
                              className={
                                imageIndex === safeImageIndex
                                  ? "IntroductoryItems-photo-dot active"
                                  : "IntroductoryItems-photo-dot"
                              }
                            />

                          ))}

                        </div>

                      )}

                    </>

                  ) : (

                    /* ==============================
                       写真なし
                    ============================== */

                    <div className="IntroductoryItems-no-image">
                      PHOTO
                    </div>

                  )}

                </div>

              </div>

            );

          })}

        </div>

      </main>

    </section>
  );
};


export default IntroductoryItems;