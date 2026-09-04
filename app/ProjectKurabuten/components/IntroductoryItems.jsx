"use client";

import React, { useEffect, useState } from "react";
import "./IntroductoryItems.css";


/* ==========================================
   No.1
========================================== */

import no1Image1 from "./Group/No.1/1.jpg";
import no1Image2 from "./Group/No.1/2.jpg";
import no1Image3 from "./Group/No.1/3.jpg";


/* ==========================================
   No.2
========================================== */

import no2Image1 from "./Group/No.2/1.jpg";
import no2Image2 from "./Group/No.2/2.jpg";
import no2Image3 from "./Group/No.2/3.jpg";
import no2Image4 from "./Group/No.2/4.jpg";


/* ==========================================
   No.3
========================================== */

import no3Image1 from "./Group/No.3/1.jpg";
import no3Image2 from "./Group/No.3/2.jpg";


/* ==========================================
   No.4
========================================== */

import no4Image1 from "./Group/No.4/1.jpg";
import no4Image2 from "./Group/No.4/2.jpg";
import no4Image3 from "./Group/No.4/3.jpg";
import no4Image4 from "./Group/No.4/4.jpg";
import no4Image5 from "./Group/No.4/5.jpg";


/* ==========================================
   出展団体データ
========================================== */

const cardData = [

  {
    group: "フリーサウンドサークル",

    subdesc1:
      "フリーサウンドは、月1回程度のペースでライブを行っているバンドサークルです。普段はコピーバンドを中心に演奏活動をしています。みなさんが知っているアーティストの曲を演奏することも！熱い生演奏をぜひ体感しに来てください、心よりお待ちしております！",

    images: [
      no1Image1,
      no1Image2,
      no1Image3,
    ],
  },


  {
    group: "DJ・DTM部",

    subdesc1:
      "私たちは「音楽を作る（DTM）」と「音楽を繋ぐ（DJ）」を中心に、日々楽しく活動しています。【DTM活動】火・金曜日の活動日にみんなで作曲を行い、お互いの曲を聴き合ってアドバイスを交換しています。同人音楽即売会（M3）に参加し、部員の楽曲をまとめたCDを制作・販売するのも大きな目標の一つです！【DJ活動】空き時間に機材を使って自由に練習ができます。腕を磨いて外部のイベントに出演したり、自らイベントを主催する部員もいたりと、自分のペースで自由に挑戦できる環境です。",

    images: [
      no2Image1,
      no2Image2,
      no2Image3,
      no2Image4,
    ],
  },


  {
    group: "サバイバルゲーム部",

    subdesc1:
      "サバゲー部です！経験問わず大歓迎！未経験者には装備の貸し出しもあるので安心して始められます。活動は基本的に自由で、普段は部室で銃の調整や雑談をして緩く楽しんでいます。最低年4回のサバゲーに加え、他校との合同イベントや有志での活動も盛んです！今回はB2iという赤外線をもちいた安全なサバゲー体験を行います！ぜひ来てください！",

    images: [
      no3Image1,
      no3Image2,
    ],
  },


  {
    group: "自由ヶ丘ボードゲームサークル",

    subdesc1:
      "私達ボードゲームサークルは月曜日の4限後に集まり、ボードゲームをして交流をしているサークルです。ボードゲームをしているサークルではありますが、過去には近くの小学校の卒業生を送る会に参加させていただき、クイズやなぞなぞなども企画しました。自由ヶ丘キャンパス312教室で活動しています！",

    images: [
      no4Image1,
      no4Image2,
      no4Image3,
      no4Image4,
      no4Image5,
    ],
  },

];


/* ==========================================
   コンポーネント
========================================== */

const IntroductoryItems = () => {

  const [currentImages, setCurrentImages] = useState(
    cardData.map(() => 0)
  );


  /* ==========================================
     写真を5秒ごとに切り替え
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

          {cardData.map((item, index) => {

            const imageCount = item.images.length;
            const currentImage = currentImages[index];

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
                        key={`${index}-${currentImage}`}
                        src={item.images[currentImage].src}
                        alt={`${item.group} 写真 ${currentImage + 1}`}
                        className="IntroductoryItems-thumb-image"
                      />


                      {/* ==============================
                          写真枚数
                      ============================== */}

                      {imageCount > 1 && (

                        <div className="IntroductoryItems-photo-count">
                          {currentImage + 1} / {imageCount}
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
                                imageIndex === currentImage
                                  ? "IntroductoryItems-photo-dot active"
                                  : "IntroductoryItems-photo-dot"
                              }
                            />

                          ))}

                        </div>

                      )}

                    </>

                  ) : (

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