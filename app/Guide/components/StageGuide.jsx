"use client";

import { useState } from "react";
import "./StageGuide.css";

export default function StageGuide() {

  const [openItem, setOpenItem] = useState(null);

  const items = [
    {
      title: "お知らせ（ステージ）",
      text: "ステージに関する最新のお知らせを掲載しています。",
    },
    {
      title: "ステージのタイムテーブル",
      text: "ステージで行われる企画のスケジュールを確認できます。タップすると詳しい内容を確認できます。",
    },
    {
      title: "出演様紹介",
      text: "その日にステージへ出演してくださる演者様の一覧を確認できます。",
    },
  ];

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="Stage-Guide-section">

      {/* ==========================
          ページタイトル
      ========================== */}

      <div className="Stage-Guide-header">

        <div className="Stage-Guide-number">
          04
        </div>

        <h1>
          ステージ
        </h1>

      </div>


      {/* ==========================
          ステージ情報全体
      ========================== */}

      <div className="Stage-Guide-content">


        {/* ==========================
            画像ボックス
        ========================== */}

        <div className="Stage-Guide-image-box">

          <div className="Stage-Guide-image">

            <img
              src="/guide/stage.png"
              alt="ステージ情報"
            />

          </div>

        </div>


        {/* ==========================
            タイトル
        ========================== */}

        <div className="Stage-Guide-divider">
          ステージ
        </div>


        {/* ==========================
            説明ボックス
        ========================== */}

        <div className="Stage-Guide-notice">

          {items.map((item, index) => (

            <div
              className="Stage-Guide-notice-item"
              key={item.title}
            >

              {/* 項目タイトル */}

              <button
                type="button"
                className="Stage-Guide-notice-title"
                onClick={() => handleToggle(index)}
              >

                {/* ドット */}

                <span className="Stage-Guide-notice-dot"></span>


                {/* タイトル */}

                <h2>
                  {item.title}
                </h2>


                {/* 矢印 */}

                <span
                  className={`Stage-Guide-arrow ${
                    openItem === index ? "is-open" : ""
                  }`}
                >
                  &gt;
                </span>

              </button>


              {/* 説明本文 */}

              {openItem === index && (

                <div className="Stage-Guide-notice-text">

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