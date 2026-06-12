"use client";
import React from "react";
import "./Playground.css";

/* データ */
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
    overlayText: "限定公開",
    title: "紹介文3",
    subdesc1: "これは紹介3の補足説明です。",
    location: "場所3",
    subdesc2: "これは場所3の補足説明です。",
    noticeTitle: "注意事項3",
    noticeDesc: "これは注意事項3です。",
  },
  {
    label: "ラベル4",
    overlayText: "特別企画",
    title: "紹介文4",
    subdesc1: "これは紹介4の補足説明です。",
    location: "場所4",
    subdesc2: "これは場所4の補足説明です。",
    noticeTitle: "注意事項4",
    noticeDesc: "これは注意事項4です。",
  },
  {
    label: "ラベル5",
    overlayText: "特別企画",
    title: "紹介文5",
    subdesc1: "これは紹介5の補足説明です。",
    location: "場所5",
    subdesc2: "これは場所5の補足説明です。",
    noticeTitle: "注意事項5",
    noticeDesc: "これは注意事項5です。",
  },
];

const kirakiraparc = () => {
  return (
    <section>

      {/* タイトル */}
      <div className="kirakiraparc-section-wrapper">
        <div className="kirakiraparc-section-title">
          ゲーム紹介
        </div>
      </div>

      {/* カード一覧 */}
      <main className="kirakiraparc-card-list">
        {cardData.map((item, index) => (
          <div
            className="kirakiraparc-card"
            key={index}
          >

            {/* 左側 */}
            <div className="kirakiraparc-card-left">

              <div className="kirakiraparc-thumb-wrapper">

                {/* 上部バー */}
                <div className="kirakiraparc-overlay-box">
                  {item.overlayText}
                </div>

                {/* 画像 */}
                <div className="kirakiraparc-thumb"></div>

                {/* ラベル */}
                <div className="kirakiraparc-label">
                  {item.label}
                </div>

              </div>

            </div>

            {/* 区切り線 */}
            <div className="kirakiraparc-card-divider"></div>

            {/* 右側 */}
            <div className="kirakiraparc-card-right">

              <div className="kirakiraparc-sub1-title">
                📄 {item.title}
              </div>

              <div className="kirakiraparc-introduction1-subdesc">
                {item.subdesc1}
              </div>

              <div className="kirakiraparc-dotted-line"></div>

              <div className="kirakiraparc-sub2-title">
                📍 {item.location}
              </div>

              <div className="kirakiraparc-introduction2-subdesc">
                {item.subdesc2}
              </div>

              <div className="kirakiraparc-dotted-line"></div>

              <div className="kirakiraparc-sub3-title">
                ⚠️ {item.noticeTitle}
              </div>

              <div className="kirakiraparc-introduction3-subdesc">
                {item.noticeDesc}
              </div>

            </div>

          </div>
        ))}
      </main>

    </section>
  );
};

export default kirakiraparc;