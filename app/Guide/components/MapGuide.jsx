"use client";

import { useState } from "react";
import { orbitron } from "../page";
import "./MapGuide.css";

export default function MapGuide() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    {
      title: "マップについて",
      text: "大学内の各施設や場所を確認できます。建物名をタップすると、その場所までの経路を表示できます。",
    },
    {
      title: "ご利用について",
      text: "八草キャンパスは敷地が広く、場所が分かりにくいこともありますので、ぜひご活用ください。場所が分からない場合は、お近くの大学祭実行委員にお気軽にお尋ねください。",
    },
  ];

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="Map-Guide-section">

      {/* ==========================
          ページタイトル
      ========================== */}

      <div className="Map-Guide-header">

        <div
          className={`Map-Guide-number ${orbitron.className}`}
        >
          05
        </div>

        <h1>
          マップ
        </h1>

      </div>


      {/* ==========================
          マップ全体
      ========================== */}

      <div className="Map-Guide-content">


        {/* ==========================
            画像ボックス
        ========================== */}

        <div className="Map-Guide-image-box">

          <div className="Map-Guide-image">

            <img
              src="/guide/map.png"
              alt="マップ画面"
            />

          </div>

        </div>


        {/* ==========================
            タイトル
        ========================== */}

        <div className="Map-Guide-divider">
          マップ
        </div>


        {/* ==========================
            説明ボックス
        ========================== */}

        <div className="Map-Guide-notice">

          {items.map((item, index) => (

            <div
              className="Map-Guide-notice-item"
              key={item.title}
            >

              {/* ==========================
                  項目タイトル
              ========================== */}

              <button
                type="button"
                className="Map-Guide-notice-title"
                onClick={() => handleToggle(index)}
              >

                {/* ドット */}

                <span className="Map-Guide-notice-dot"></span>


                {/* タイトル */}

                <h2>
                  {item.title}
                </h2>


                {/* 矢印 */}

                <span
                  className={`Map-Guide-arrow ${
                    openItem === index ? "is-open" : ""
                  }`}
                >
                  &gt;
                </span>

              </button>


              {/* ==========================
                  説明本文
              ========================== */}

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