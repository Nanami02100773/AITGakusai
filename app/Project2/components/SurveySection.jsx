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

      {/* 左白パーツ */}
      <div className="Survey-white-left" />

      {/* 中央白パーツ */}
      <div className="Survey-white-center" />

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
          <div className="Survey-item" key={index}>

            {/* 左丸 */}
            <div className="Survey-circle-area">

              <div className="Survey-stick" />

              <div className="Survey-circle-outer">
                <div className="Survey-circle-inner" />
              </div>

            </div>

            {/* テキスト */}
            <div className="Survey-label">
              {item}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}