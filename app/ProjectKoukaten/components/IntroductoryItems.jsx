import React from "react";
import "./IntroductoryItems.css";

const cardData = [
{
group: "団体名A",
label: "ラベル1",
title: "紹介文1",
subdesc1: "これは紹介1の補足説明です。",
location: "場所1",
subdesc2: "これは場所1の補足説明です。",
},
{
group: "団体名B",
label: "ラベル2",
title: "紹介文2",
subdesc1: "これは紹介2の補足説明です。",
location: "場所2",
subdesc2: "これは場所2の補足説明です。",
},
{
group: "団体名C",
label: "ラベル3",
title: "紹介文3",
subdesc1: "これは紹介3の補足説明です。",
location: "場所3",
subdesc2: "これは場所3の補足説明です。",
},
{
group: "団体名D",
label: "ラベル4",
title: "紹介文4",
subdesc1: "これは紹介4の補足説明です。",
location: "場所4",
subdesc2: "これは場所4の補足説明です。",
},
{
group: "団体名E",
label: "ラベル5",
title: "紹介文5",
subdesc1: "これは紹介5の補足説明です。",
location: "場所5",
subdesc2: "これは場所5の補足説明です。",
},
{
group: "団体名F",
label: "ラベル6",
title: "紹介文6",
subdesc1: "これは紹介6の補足説明です。",
location: "場所6",
subdesc2: "これは場所6の補足説明です。",
},
];

const Koukaten = () => {
return ( <section className="Koukaten-section">
{/* タイトル */} <div className="Koukaten-section-wrapper"> 
  <div className="Koukaten-section-title">出展団体 </div> </div>

  {/* カード一覧 */}
  <main className="Koukaten-card-list">
    <div className="Koukaten-card-wrapper">
      {cardData.map((item, index) => (
        <div
          className="Koukaten-card"
          key={index}
        >
          {/* 左側 */}
          <div className="Koukaten-card-left">
            <div className="Koukaten-thumb-wrapper">
              {/* 団体名バー */}
              <div className="Koukaten-overlay-box">
                {item.group}
              </div>

              {/* 画像 */}
              <div className="Koukaten-thumb"></div>

              {/* ラベル */}
              <div className="Koukaten-label">
                {item.label}
              </div>
            </div>
          </div>

          {/* 区切り線 */}
          <div className="Koukaten-card-divider"></div>

          {/* 右側 */}
          <div className="Koukaten-card-right">
            <div className="Koukaten-sub1-title">
              📄 {item.title}
            </div>

            <div className="Koukaten-introduction1-subdesc">
              {item.subdesc1}
            </div>

            <div className="Koukaten-dotted-line"></div>

            <div className="Koukaten-sub2-title">
              📍 {item.location}
            </div>

            <div className="Koukaten-introduction2-subdesc">
              {item.subdesc2}
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
</section>


);
};

export default Koukaten;
