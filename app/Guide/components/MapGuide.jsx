"use client";

import { useState } from "react";
import { orbitron } from "../page";
import "./MapGuide.css";

import image5 from "./data/5.jpg";

export default function MapGuide() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
       {
      title: "デジタルマップについて",
      text: "このマップは行きたい場所へ経路を示してくれるものになっています。",
    },
    {
      title: "施設関連",
      text: "トイレや休憩所、案内所などの施設をマップから確認できます。",
    },
    {
      title: "企画場所",
      text: "工科展や模擬店など、各企画が行われている場所を確認できます。",
    },
     {
      title: "操作方法",
      text: "マップの下部にHelpという操作の仕方などの説明文が載っている部分があります。操作に困ったら読んでみてください",
    },
    // {
    //   title: "打上花火時",
    //   text: "打上花火を見る際の場所や注意事項などを確認できます。",
    // },
  ];

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="Map-Guide-section">

      {/* ===== ヘッダー ===== */}
      <div className="Map-Guide-header">
        <div className={`Map-Guide-number ${orbitron.className}`}>
          05
        </div>

        <h1>マップ</h1>
      </div>

      {/* ===== コンテンツ ===== */}
      <div className="Map-Guide-content">

        {/* ===== 画像 ===== */}
        <div className="Map-Guide-image-box">
          <div className="Map-Guide-image">
            <img
              src={image5.src}
              alt="マップ画面"
            />
          </div>
        </div>

        {/* ===== 見出し ===== */}
        <div className="Guide-section-title">
          マップ
        </div>

        {/* ===== 説明 ===== */}
        <div className="Map-Guide-notice">

          {items.map((item, index) => (
            <div
              className="Map-Guide-notice-item"
              key={item.title}
            >

              <button
                type="button"
                className="Map-Guide-notice-title"
                onClick={() => handleToggle(index)}
              >
                <span className="Map-Guide-notice-dot"></span>

                <h2>{item.title}</h2>

                <span
                  className={`Map-Guide-arrow ${
                    openItem === index ? "is-open" : ""
                  }`}
                >
                  &gt;
                </span>
              </button>

              {openItem === index && (
                <div className="Map-Guide-notice-text">
                  {item.text}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}