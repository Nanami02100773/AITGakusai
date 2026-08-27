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
    <section className="Home-Award-section">

      {/* =================================================
          タイトル
      ================================================= */}
      <h2 className="Home-section-title">
        グランプリ
      </h2>

      {/* =================================================
          説明エリア
      ================================================= */}
      <div className="Home-Award-container">

        <div className="Home-Award-crown">

          {/* =================================================
              賞一覧
          ================================================= */}
          <div className="Home-Award-list">

            <div className="Home-Award-cornerLeftBottom"></div>
            <div className="Home-Award-cornerRightBottom"></div>

            {/* =================================================
                王冠＋説明ボックス
            ================================================= */}
            <div className="Home-Award-crownArea">

              <div className="Home-Award-crownTextWrap">

                {/* =================================================
                    王冠画像
                ================================================= */}
                <div className="Home-Award-crownIconWrap">

                  <img
                    src="/Award/crown.png"
                    alt="crown"
                    className="Home-Award-crownIcon"
                  />

                </div>

                {/* =================================================
                    テキスト
                ================================================= */}
                <div className="Home-Award-crownText">

                  {/* 見出し */}
                  <div className="Home-Award-crownSubtitle">
                    グランプリとは？
                  </div>

                  {/* 説明文 */}
                  <div className="Home-Award-crownDescription">
  模擬店・工科展などの各出展企画を対象に、来場者や審査員による投票を実施し、学園祭を代表するグランプリを決定します。
</div>

                </div>

              </div>

            </div>

            {/* =================================================
                青ライン
            ================================================= */}
            <div className="Home-Award-crownLine"></div>

            {/* =================================================
                カード一覧
            ================================================= */}
            {awards.map((title, i) => (
              <div
                key={i}
                className="Home-Award-card"
              >

                {/* 左バー */}
                <div className="Home-Award-leftBar"></div>

                {/* タイトル */}
                <div className="Home-Award-cardTitle">
                  {title}
                </div>

                {/* 説明 */}
                <div className="Home-Award-cardDescription">
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