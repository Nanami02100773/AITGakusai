"use client";

import { useState } from "react";
import Image from "next/image";
import { orbitron } from "../page";
import "./MascotGuide.css";

import image9 from "./data/9.png";

export default function MascotGuide() {
  const [openItem, setOpenItem] = useState(null);

  const item = {
    title: "マスコットについて",
    text: "今年の愛工大祭マスコットを紹介しています。マスコットへの投票も実施していますので、ぜひお気に入りのマスコットに投票してください！",
  };

  const handleToggle = () => {
    setOpenItem(openItem === 0 ? null : 0);
  };

  return (
    <section className="Mascot-Guide-section">

      {/* ==========================
          ページタイトル
      ========================== */}

      <div className="Mascot-Guide-header">

        <div className={`Mascot-Guide-number ${orbitron.className}`}>
          09
        </div>

        <h1>
          マスコット紹介
        </h1>

      </div>


      {/* ==========================
          マスコット全体
      ========================== */}

      <div className="Mascot-Guide-content">


        {/* ==========================
            画像ボックス
        ========================== */}

        <div className="Mascot-Guide-image-box">

          <div className="Mascot-Guide-image">

            <Image
              src={image9}
              alt="マスコット紹介"
              priority
            />

          </div>

        </div>


        {/* ==========================
            タイトル
        ========================== */}

        <div className="Mascot-Guide-divider">
          マスコット紹介
        </div>


        {/* ==========================
            説明ボックス
        ========================== */}

        <div className="Mascot-Guide-notice">

          <div className="Mascot-Guide-notice-item">

            {/* 項目タイトル */}

            <button
              type="button"
              className="Mascot-Guide-notice-title"
              onClick={handleToggle}
            >

              {/* ドット */}

              <span className="Mascot-Guide-notice-dot"></span>


              {/* タイトル */}

              <h2>
                {item.title}
              </h2>


              {/* 矢印 */}

              <span
                className={`Mascot-Guide-arrow ${
                  openItem === 0 ? "is-open" : ""
                }`}
              >
                &gt;
              </span>

            </button>


            {/* 説明本文 */}

            {openItem === 0 && (

              <div className="Mascot-Guide-notice-text">
                {item.text}
              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}