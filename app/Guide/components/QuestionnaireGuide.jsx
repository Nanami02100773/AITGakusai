"use client";

import { useState } from "react";
import { orbitron } from "../page";
import "./QuestionnaireGuide.css";

export default function QuestionnaireGuide() {
  const [openItem, setOpenItem] = useState(null);

  const item = {
    title: "アンケートについて",
    text: "各企画などでアンケートを実施しています。今後の大学祭の活動や運営の参考にさせていただきますので、ぜひご回答をお願いします。",
  };

  const handleToggle = () => {
    setOpenItem(openItem === 0 ? null : 0);
  };

  return (
    <section className="Questionnaire-Guide-section">

      {/* ==========================
          ページタイトル
      ========================== */}

      <div className="Questionnaire-Guide-header">

        <div className={`Questionnaire-Guide-number ${orbitron.className}`}>
          07
        </div>

        <h1>
          アンケート
        </h1>

      </div>


      {/* ==========================
          アンケート全体
      ========================== */}

      <div className="Questionnaire-Guide-content">


        {/* ==========================
            画像ボックス
        ========================== */}

        <div className="Questionnaire-Guide-image-box">

          <div className="Questionnaire-Guide-image">

            <img
              src="/guide/questionnaire.png"
              alt="アンケート"
            />

          </div>

        </div>


        {/* ==========================
            タイトル
        ========================== */}

        <div className="Questionnaire-Guide-divider">
          アンケート
        </div>


        {/* ==========================
            説明ボックス
        ========================== */}

        <div className="Questionnaire-Guide-notice">

          <div className="Questionnaire-Guide-notice-item">

            {/* 項目タイトル */}

            <button
              type="button"
              className="Questionnaire-Guide-notice-title"
              onClick={handleToggle}
            >

              {/* ドット */}

              <span className="Questionnaire-Guide-notice-dot"></span>


              {/* タイトル */}

              <h2>
                {item.title}
              </h2>


              {/* 矢印 */}

              <span
                className={`Questionnaire-Guide-arrow ${
                  openItem === 0 ? "is-open" : ""
                }`}
              >
                &gt;
              </span>

            </button>


            {/* 説明本文 */}

            {openItem === 0 && (

              <div className="Questionnaire-Guide-notice-text">
                {item.text}
              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}