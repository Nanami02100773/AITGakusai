import React from "react";
import "./Playground.css";

const cardData = [
  {
    label: "ラベル1",
    overlayText: "NEW!",
    title: "紹介文1",
    subdesc1: "これは紹介1の補足説明です。",
    location: "場所1",
    subdesc2: "これは場所1の補足説明です。",
    noticeTitle: "注意事項1",
    noticeDesc: "これは注意事項1です。",
  },
  {
    label: "ラベル2",
    overlayText: "注目！",
    title: "紹介文2",
    subdesc1: "これは紹介2の補足説明です。",
    location: "場所2",
    subdesc2: "これは場所2の補足説明です。",
    noticeTitle: "注意事項2",
    noticeDesc: "これは注意事項2です。",
  },
  {
    label: "ラベル3",
    overlayText: "人気！",
    title: "紹介文3",
    subdesc1: "これは紹介3の補足説明です。",
    location: "場所3",
    subdesc2: "これは場所3の補足説明です。",
    noticeTitle: "注意事項3",
    noticeDesc: "これは注意事項3です。",
  },
  {
    label: "ラベル4",
    overlayText: "おすすめ！",
    title: "紹介文4",
    subdesc1: "これは紹介4の補足説明です。",
    location: "場所4",
    subdesc2: "これは場所4の補足説明です。",
    noticeTitle: "注意事項4",
    noticeDesc: "これは注意事項4です。",
  },
  {
    label: "ラベル5",
    overlayText: "話題！",
    title: "紹介文5",
    subdesc1: "これは紹介5の補足説明です。",
    location: "場所5",
    subdesc2: "これは場所5の補足説明です。",
    noticeTitle: "注意事項5",
    noticeDesc: "これは注意事項5です。",
  },
  {
    label: "ラベル6",
    overlayText: "注目！",
    title: "紹介文6",
    subdesc1: "これは紹介6の補足説明です。",
    location: "場所6",
    subdesc2: "これは場所6の補足説明です。",
    noticeTitle: "注意事項6",
    noticeDesc: "これは注意事項6です。",
  },
  {
    label: "ラベル7",
    overlayText: "特集！",
    title: "紹介文7",
    subdesc1: "これは紹介7の補足説明です。",
    location: "場所7",
    subdesc2: "これは場所7の補足説明です。",
    noticeTitle: "注意事項7",
    noticeDesc: "これは注意事項7です。",
  },
  {
    label: "ラベル8",
    overlayText: "限定！",
    title: "紹介文8",
    subdesc1: "これは紹介8の補足説明です。",
    location: "場所8",
    subdesc2: "これは場所8の補足説明です。",
    noticeTitle: "注意事項8",
    noticeDesc: "これは注意事項8です。",
  },
];

const WakuwakuLand = () => {
  return (
    <section>
      {/* セクションタイトル */}
      <div className="WakuwakuLand-section-wrapper">
        <div className="WakuwakuLand-section-title">
          遊具紹介
        </div>
      </div>

      {/* カード一覧 */}
      <main className="WakuwakuLand-card-list">
        {cardData.map((item, index) => (
          <div className="WakuwakuLand-card" key={index}>
            <div className="WakuwakuLand-card-left">
              <div className="WakuwakuLand-thumb-wrapper">
                <div className="WakuwakuLand-thumb"></div>
                <div className="WakuwakuLand-overlay-box">
                  {item.overlayText}
                </div>
              </div>
            </div>

            <div className="WakuwakuLand-card-divider"></div>

            <div className="WakuwakuLand-card-right">
              <div className="WakuwakuLand-title">{item.title}</div>
              <div className="WakuwakuLand-subdesc">{item.subdesc1}</div>
              <div className="WakuwakuLand-desc">{item.location}</div>
              <div className="WakuwakuLand-subdesc">{item.subdesc2}</div>

              {/* 注意事項 */}
              <div className="WakuwakuLand-notice-title">
                {item.noticeTitle}
              </div>
              <div className="WakuwakuLand-notice-desc">
                {item.noticeDesc}
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default WakuwakuLand;
