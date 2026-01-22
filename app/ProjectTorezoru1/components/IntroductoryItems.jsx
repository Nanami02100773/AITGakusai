"use client";
import React from "react";
import "./IntroductoryItems.css";

/* データ定義 */
const cardData = [
  {
    label: "ラベル1",
    overlayText: "NEW!",
    title: "紹介文1",
    subdesc1: "これは紹介1の補足説明です。",
    location: "場所1",
    subdesc2: "これは場所1の補足説明です。",
  },
  {
    label: "ラベル2",
    overlayText: "注目！",
    title: "紹介文2",
    subdesc1: "これは紹介2の補足説明です。",
    location: "場所2",
    subdesc2: "これは場所2の補足説明です。",
  },
  {
    label: "ラベル3",
    overlayText: "限定公開",
    title: "紹介文3",
    subdesc1: "これは紹介3の補足説明です。",
    location: "場所3",
    subdesc2: "これは場所3の補足説明です。",
  },
  {
    label: "ラベル4",
    overlayText: "特別企画",
    title: "紹介文4",
    subdesc1: "これは紹介4の補足説明です。",
    location: "場所4",
    subdesc2: "これは場所4の補足説明です。",
  },
  {
    label: "ラベル5",
    overlayText: "話題！",
    title: "紹介文5",
    subdesc1: "これは紹介5の補足説明です。",
    location: "場所5",
    subdesc2: "これは場所5の補足説明です。",
  },
  {
    label: "ラベル6",
    overlayText: "初出展",
    title: "紹介文6",
    subdesc1: "これは紹介6の補足説明です。",
    location: "場所6",
    subdesc2: "これは場所6の補足説明です。",
  },
];

/* コンポーネント */
const Torezoru = () => {
  return (
    <section>
      {/* セクションタイトル */}
      <div className="Torezoru-section-wrapper">
        <div className="Torezoru-section-title">
          ゲーム紹介
        </div>
      </div>

      {/* カード一覧 */}
      <main className="Torezoru-card-list">
        {cardData.map((item, index) => (
          <div className="Torezoru-card" key={index}>
            {/* 左側：サムネイル */}
            <div className="Torezoru-card-left">
              <div className="Torezoru-thumb-wrapper">
                <div className="Torezoru-thumb"></div>
                <div className="Torezoru-overlay-box">
                  {item.overlayText}
                </div>
              </div>
            </div>

            {/* 区切り線 */}
            <div className="Torezoru-card-divider"></div>

            {/* 右側：テキスト */}
            <div className="Torezoru-card-right">
              <div className="Torezoru-item-title">
                {item.title}
              </div>
              <div className="Torezoru-subdesc">
                {item.subdesc1}
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Torezoru;
