"use client";

import { useState } from "react";
import "./ProjectGuide.css";

export default function ProjectGuide() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    {
      title: "企画紹介",
      text: "教室企画やステージ企画の詳しい情報を確認できます。「＞」をタップすると、企画の内容や開催場所など、より詳しい情報を確認できます。",
    },
  ];

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="Project-Guide-section">

      {/* ==========================
          ページタイトル
      ========================== */}

      <div className="Project-Guide-header">

        <div className="Project-Guide-number">
          06
        </div>

        <h1>
          企画紹介
        </h1>

      </div>


      {/* ==========================
          企画紹介全体
      ========================== */}

      <div className="Project-Guide-content">


        {/* ==========================
            画像ボックス
        ========================== */}

        <div className="Project-Guide-image-box">

          <div className="Project-Guide-image">

            <img
              src="/guide/project.png"
              alt="企画紹介"
            />

          </div>

        </div>


        {/* ==========================
            タイトル
        ========================== */}

        <div className="Project-Guide-divider">
          企画紹介
        </div>


        {/* ==========================
            説明ボックス
        ========================== */}

        <div className="Project-Guide-notice">

          {items.map((item, index) => (

            <div
              className="Project-Guide-notice-item"
              key={item.title}
            >

              <button
                type="button"
                className="Project-Guide-notice-title"
                onClick={() => handleToggle(index)}
              >

                {/* ドット */}

                <span className="Project-Guide-notice-dot"></span>


                {/* タイトル */}

                <h2>
                  {item.title}
                </h2>


                {/* 矢印 */}

                <span
                  className={`Project-Guide-arrow ${
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

                <div className="Project-Guide-notice-text">
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