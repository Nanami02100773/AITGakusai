"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./IntroductoryItems.css";

const cardData = [
{
group: "団体名A",
label: "ラベル1",
title: "紹介文1",
subdesc1: "これは紹介1の補足説明です。",
location: "場所1",
subdesc2: "これは場所1の補足説明です。",
link: "./ProjectRakuiti-01-",
},
{
group: "団体名B",
label: "ラベル2",
title: "紹介文2",
subdesc1: "これは紹介2の補足説明です。",
location: "場所2",
subdesc2: "これは場所2の補足説明です。",
link: "./ProjectRakuiti-02-",
},
{
group: "団体名C",
label: "ラベル3",
title: "紹介文3",
subdesc1: "これは紹介3の補足説明です。",
location: "場所3",
subdesc2: "これは場所3の補足説明です。",
link: "./ProjectRakuiti-03-",
},
{
group: "団体名D",
label: "ラベル4",
title: "紹介文4",
subdesc1: "これは紹介4の補足説明です。",
location: "場所4",
subdesc2: "これは場所4の補足説明です。",
link: "./ProjectRakuiti-04-",
},
{
group: "団体名E",
label: "ラベル5",
title: "紹介文5",
subdesc1: "これは紹介5の補足説明です。",
location: "場所5",
subdesc2: "これは場所5の補足説明です。",
link: "./ProjectRakuiti-05-",
},
{
group: "団体名F",
label: "ラベル6",
title: "紹介文6",
subdesc1: "これは紹介6の補足説明です。",
location: "場所6",
subdesc2: "これは場所6の補足説明です。",
link: "./ProjectRakuiti-06-",
},
];

const Rakuichi = () => {
const router = useRouter();

return ( <section className="rakuichi-section">

  {/* タイトル */}
  <div className="rakuichi-section-wrapper">
    <div className="rakuichi-section-title">
      出展団体
    </div>
  </div>

  {/* カード一覧 */}
  <main className="rakuichi-card-list">
    <div className="rakuichi-card-wrapper">

      {cardData.map((item, index) => (
        <div
          className="rakuichi-card"
          key={index}
          onClick={() => router.push(item.link)}
          style={{ cursor: "pointer" }}
        >
          {/* 左側 */}
          <div className="rakuichi-card-left">
            <div className="rakuichi-thumb-wrapper">

              {/* 団体名バー */}
              <div className="rakuichi-overlay-box">
                {item.group}
              </div>

              {/* 画像 */}
              <div className="rakuichi-thumb"></div>

              {/* ラベル */}
              <div className="rakuichi-label">
                {item.label}
              </div>

            </div>
          </div>

          {/* 区切り線 */}
          <div className="rakuichi-card-divider"></div>

          {/* 右側 */}
   <div className="rakuichi-card-right">

  <button
    className="rakuichi-detail-button"
    onClick={(e) => {
      e.stopPropagation();
      router.push(item.link);
    }}
  >
    ▼
  </button>

  <div className="rakuichi-sub1-title">
    📄 {item.title}
  </div>

  <div className="rakuichi-introduction1-subdesc">
    {item.subdesc1}
  </div>

  <div className="rakuichi-dotted-line"></div>

  <div className="rakuichi-sub2-title">
    📍 {item.location}
  </div>

  <div className="rakuichi-introduction2-subdesc">
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

export default Rakuichi;
