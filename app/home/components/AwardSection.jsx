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

      {/* =================================================
          タイトル
      ================================================= */}
      <h2 className="Home-section-title">
        グランプリ
      </h2>

      {/* =================================================
          説明エリア
      ================================================= */}
      <div className="Home-box1">

        <div className="award-crown">

          {/* =================================================
              賞一覧
          ================================================= */}
          <div className="Home-box2">
            <div className="corner-left-bottom"></div>
<div className="corner-right-bottom"></div>

            {/* =================================================
                王冠＋説明ボックス
            ================================================= */}
            <div className="award-crown-area">

              <div className="award-crown-text-wrap">

               {/* 王冠画像 */}
<div className="award-crown-icon-wrap">

  <img
    src="/Award/crown.png"
    alt="crown"
    className="award-crown-icon"
  />

</div>

             {/* テキスト */}
<div className="award-crown-text">

  <div className="award-crown-subtitle">
    グランプリとは？
  </div>

  模擬店・工科展などの各出展企画を対象に
  来場者や審査員による投票を実施し
  学園祭を代表するグランプリを決定します

</div>
              </div>

            </div>

            {/* 青ライン */}
            <div className="award-crown-line"></div>

            {/* =================================================
                カード一覧
            ================================================= */}
            {awards.map((title, i) => (
              <div
                key={i}
                className="Home-award-card"
              >

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

        </div>

      </div>

    </section>
  );
}