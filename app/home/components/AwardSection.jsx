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
          タイトル装飾
      ================================================= */}
      <div className="Home-box1">

        <div className="award-crown">

          {/* 左右ライン */}
          <div className="award-side-line-left"></div>
          <div className="award-side-line-right"></div>

  

          {/* =================================================
              中央ボックス
          ================================================= */}
          <div className="award-crown-base">

            {/* 左装飾 */}
            <span className="blue-part blue-part1"></span>
            <span className="blue-part blue-part2"></span>
            <div className="white-line"></div>

            {/* 右装飾 */}
            <span className="blue-part blue-part-right1"></span>
            <span className="blue-part blue-part-right2"></span>
            <div className="white-line-right"></div>

            {/* テキスト */}
            <div className="award-crown-text">
  模擬店・工科展などの各出展企画を対象に
  <br />
  来場者や審査員による投票を実施し
  <br />
  学園祭を代表するグランプリを決定します
</div>

          </div>

        </div>

      </div>

{/* =================================================
    賞カード一覧
================================================= */}
<div className="Home-box2">

  {/* 外側コーナーフレーム */}
  <div className="Home-box2-frame"></div>

  {awards.map((title, i) => (
    <div
      key={i}
      className="Home-award-card"
    >

      {/* 上ノッチ */}
      <div className="top-notch"></div>

      {/* 右下装飾 */}
      <div className="corner-br"></div>

      {/* ストライプ */}
      <div className="stripe"></div>

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