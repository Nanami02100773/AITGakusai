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
          王冠エリア
      ================================================= */}
      <div className="Home-box1">

        <div className="award-crown">

          {/* 王冠上 */}
          <div className="award-crown-top"></div>

          {/* 丸 */}
          <span className="award-crown-dot left"></span>
          <span className="award-crown-dot center"></span>
          <span className="award-crown-dot right"></span>

          {/* 土台 */}
          <div className="award-crown-base">

            {/* 説明文 */}
            <div className="award-crown-text">
              模擬店・工科展などの出展を対象に
              <br />
              投票でグランプリを決定します。
            </div>

          </div>

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

            <div className="top-notch"></div>
            <div className="corner-br"></div>
            <div className="stripe"></div>
            <div className="inner-line"></div>
            <div className="left-bar"></div>

            <div className="Home-award-title">
              {title}
            </div>

            <div className="Home-award-desc">
              説明：——————————————
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}