import React from "react";
import "./AwardSection.css";

const awards = [
  "ベスト・オブ・ブース賞",
  "ベストオブ工科展賞",
  "瑞若会特別賞",
  "後援会賞",
];

export default function AwardSection() {
  return (
    <section className="Home-award-section">

      <h2 className="Home-section-title">
        グランプリ
      </h2>

      {/* =================================================
          説明エリア
      ================================================= */}
      <div className="Home-box1">

        <div className="box1-notch"></div>

        {/* =================================================
            NEW DONATION風ヘッダー
        ================================================= */}
      <div className="award-panel-header">

  <div className="award-crown"></div>

  <div className="award-header-light left"></div>

  <div className="award-header-title">
    本校学園祭では、模擬店・工科展などの出展に対し、
    来場者や審査員による投票をもとに
    「グランプリ」を決定します。
 </div>

  <div className="award-header-light right"></div>

</div>
      </div>

      {/* =================================================
          賞カード
      ================================================= */}
      <div className="Home-box2">

        {awards.map((title, i) => (
          <div
            key={i}
            className="Home-award-card"
          >

            {/* 装飾 */}
            <div className="top-notch"></div>
            <div className="corner-br"></div>
            <div className="stripe"></div>
            <div className="inner-line"></div>

            {/* 左バー */}
            <div className="left-bar"></div>

            {/* タイトル */}
            <div className="Home-award-title">
              {title}
            </div>

            {/* 説明 */}
            <div className="Home-award-desc">
              説明：——————————————
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}