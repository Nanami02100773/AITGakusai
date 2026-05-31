"use client";
import "./SurveySection.css";

export default function SurveySection() {

  const surveys = [
    "アプリ満足度",
    "全体",
    "脱出ゲーム",
    "メイク",
    "クラブ・工科",
  ];

  return (
    <section className="SurveySection">

      {/* 上ライン */}
  <div className="Survey-top-line"></div>

      {/* 左白パーツ */}
      <div className="Survey-white-left" />
      

      {/* 中央白パーツ */}
      <div className="Survey-white-center" />
      <div className="Survey-diagonal-line"></div>
<div className="Survey-diagonal-line-2"></div>


      {/* 青い斜め背景 */}
      <div className="Survey-blue-bg" />

      {/* 複製 */}
      <div className="Survey-blue-bg2" />

      {/* タイトル */}
      <div className="Home-section-title">
        お知らせ
      </div>

      {/* 本体 */}
      <div className="Survey-container">

        {surveys.map((item, index) => (
          <div
            className="Survey-item"
            key={index}
          >

            {/* 左青バー */}
            <div className="Survey-left-bar" />

            {/* アイコン */}
            <div className="Survey-circle-area">

              <div className="Survey-circle-outer">

                <div className="Survey-circle-inner">
                  ★
                </div>

              </div>

            </div>

            {/* 点線 */}
            <div className="Survey-divider" />

            {/* テキスト */}
            <div className="Survey-label">
              {item}
            </div>

            {/* 矢印 */}
            <div className="Survey-arrow">
              ›
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}