import React from "react";
import "./IntroductoryItems.css";

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

const Koukaten = () => {
  return (
    <section>
      {/* セクションタイトル */}
      <div className="ProjectKoukaten-section-wrapper">
        <div className="Koukaten-section-title">出展団体</div>
      </div>

      {/* カード一覧 */}
      <main className="ProjectKoukaten-card-list">
        {cardData.map((item, index) => (
          <div className="ProjectKoukaten-card" key={index}>
            <div className="ProjectKoukaten-card-left">
              <div className="ProjectKoukaten-thumb-wrapper">
                <div className="ProjectKoukaten-thumb"></div>
                <div className="ProjectKoukaten-label">{item.label}</div>
                <div className="ProjectKoukaten-overlay-box">
                  {item.overlayText}
                </div>
              </div>
            </div>

            <div className="ProjectKoukaten-card-divider"></div>

            <div className="ProjectKoukaten-card-right">
              <div className="ProjectKoukaten-sub1-title">
                {item.title}
              </div>
              <div className="ProjectKoukaten-introduction1-subdesc">
                {item.subdesc1}
              </div>
              <div className="ProjectKoukaten-sub2-title">
                {item.location}
              </div>
              <div className="ProjectKoukaten-introduction2-subdesc">
                {item.subdesc2}
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Koukaten;
