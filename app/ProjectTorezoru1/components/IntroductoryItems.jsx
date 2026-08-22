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

const Kajino = () => {
return ( <section className="kajino-section">

  {/* タイトル */}
  <div className="kajino-section-wrapper">
    <div className="kajino-section-title">
      ゲーム一覧
    </div>
  </div>

  {/* カード一覧 */}
  <main className="kajino-card-list">
    <div className="kajino-card-wrapper">

      {cardData.map((item, index) => (
        <div
          className="kajino-card"
          key={index}
        >
          {/* 左側 */}
          <div className="kajino-card-left">
            <div className="kajino-thumb-wrapper">

              {/* ゲーム名バー */}
              <div className="kajino-overlay-box">
                {item.group}
              </div>

              {/* 画像 */}
              <div className="kajino-thumb"></div>

              {/* ラベル */}
              <div className="kajino-label">
                {item.label}
              </div>

            </div>
          </div>

          {/* 区切り線 */}
          <div className="kajino-card-divider"></div>

          {/* 右側 */}
          <div className="kajino-card-right">

            <div className="kajino-sub1-title">
              📄 {item.title}
            </div>

            <div className="kajino-introduction1-subdesc">
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

export default Kajino;
