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

const Kurabuten = () => {
  return (
    <section>
      {/* セクションタイトル */}
      <div className="Kurabuten-section-wrapper">
        <div className="Kurabuten-section-title">出展団体</div>
      </div>

      {/* カード一覧 */}
      <main className="Kurabuten-card-list">
        {cardData.map((item, index) => (
          <div className="Kurabuten-card" key={index}>
            <div className="Kurabuten-card-left">
              <div className="Kurabuten-thumb-wrapper">
                <div className="Kurabuten-thumb"></div>
                <div className="Kurabuten-label">{item.label}</div>
                <div className="Kurabuten-overlay-box">
                  {item.overlayText}
                </div>
              </div>
            </div>

            <div className="Kurabuten-card-divider"></div>

            <div className="Kurabuten-card-right">
              <div className="Kurabuten-sub1-title">{item.title}</div>
              <div className="Kurabuten-introduction1-subdesc">
                {item.subdesc1}
              </div>
              <div className="Kurabuten-sub2-title">{item.location}</div>
              <div className="Kurabuten-introduction2-subdesc">
                {item.subdesc2}
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Kurabuten;
