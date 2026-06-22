import React from "react";
import "./IntroductoryItems.css";

const cardData = [
{
group: "ゲーム名A",
label: "ラベル1",
title: "紹介文1",
subdesc1: "これは紹介1の補足説明です。",
},
{
group: "ゲーム名B",
label: "ラベル2",
title: "紹介文2",
subdesc1: "これは紹介2の補足説明です。",
},
{
group: "ゲーム名C",
label: "ラベル3",
title: "紹介文3",
subdesc1: "これは紹介3の補足説明です。",
},
{
group: "ゲーム名D",
label: "ラベル4",
title: "紹介文4",
subdesc1: "これは紹介4の補足説明です。",
},
{
group: "ゲーム名E",
label: "ラベル5",
title: "紹介文5",
subdesc1: "これは紹介5の補足説明です。",
},
{
group: "ゲーム名F",
label: "ラベル6",
title: "紹介文6",
subdesc1: "これは紹介6の補足説明です。",
},
];

const Ruminosu = () => {
return ( <section className="ruminosu-section">

  {/* タイトル */}
  <div className="ruminosu-section-wrapper">
    <div className="ruminosu-section-title">
      ルミノス
    </div>
  </div>

  {/* カード一覧 */}
  <main className="ruminosu-card-list">
    <div className="ruminosu-card-wrapper">

      {cardData.map((item, index) => (
        <div
          className="ruminosu-card"
          key={index}
        >
          {/* 左側 */}
          <div className="ruminosu-card-left">
            <div className="ruminosu-thumb-wrapper">

              {/* ゲーム名バー */}
              <div className="ruminosu-overlay-box">
                {item.group}
              </div>

              {/* 画像 */}
              <div className="ruminosu-thumb"></div>

              {/* ラベル */}
              <div className="ruminosu-label">
                {item.label}
              </div>

            </div>
          </div>

          {/* 区切り線 */}
          <div className="ruminosu-card-divider"></div>

          {/* 右側 */}
          <div className="ruminosu-card-right">

            <div className="ruminosu-sub1-title">
              📄 {item.title}
            </div>

            <div className="ruminosu-introduction1-subdesc">
              {item.subdesc1}
            </div>

          </div>
        </div>
      ))}

    </div>
  </main>

</section>

);
};

export default Ruminosu;
