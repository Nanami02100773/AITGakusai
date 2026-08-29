"use client";

import { useState } from "react";
import { orbitron } from "../page";
import "./FaqGuide.css";

export default function FaqGuide() {
  const [openItem, setOpenItem] = useState(null);

  const item = {
    title: "よくある質問について",
    text: "大学祭についてよく寄せられる質問をまとめています。近くに大学祭実行委員がいない場合など、分からないことがある際にぜひご活用ください。",
  };

  const handleToggle = () => {
    setOpenItem(openItem === 0 ? null : 0);
  };

  return (
    <section className="Faq-Guide-section">

      {/* ==========================
          ページタイトル
      ========================== */}

      <div className="Faq-Guide-header">

        <div className={`Faq-Guide-number ${orbitron.className}`}>
          08
        </div>

        <h1>
          よくある質問
        </h1>

      </div>


      {/* ==========================
          よくある質問全体
      ========================== */}

      <div className="Faq-Guide-content">


        {/* ==========================
            画像ボックス
        ========================== */}

        <div className="Faq-Guide-image-box">

          <div className="Faq-Guide-image">

            <img
              src="/guide/faq.png"
              alt="よくある質問"
            />

          </div>

        </div>


        {/* ==========================
            タイトル
        ========================== */}

        <div className="Faq-Guide-divider">
          よくある質問
        </div>


        {/* ==========================
            説明ボックス
        ========================== */}

        <div className="Faq-Guide-notice">

          <div className="Faq-Guide-notice-item">

            {/* 項目タイトル */}

            <button
              type="button"
              className="Faq-Guide-notice-title"
              onClick={handleToggle}
            >

              {/* ドット */}

              <span className="Faq-Guide-notice-dot"></span>


              {/* タイトル */}

              <h2>
                {item.title}
              </h2>


              {/* 矢印 */}

              <span
                className={`Faq-Guide-arrow ${
                  openItem === 0 ? "is-open" : ""
                }`}
              >
                &gt;
              </span>

            </button>


            {/* 説明本文 */}

            {openItem === 0 && (

              <div className="Faq-Guide-notice-text">
                {item.text}
              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}