"use client";

import { useState } from "react";
import "./BottomNavigationGuide.css";

export default function BottomNavigationGuide() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    {
      title: "ホーム",
      text: "学祭の最新情報やおすすめ企画を確認できます。",
      image: "/guide/home-icon.png",
    },
    {
      title: "ステージ情報",
      text: "ライブやイベントなどのステージ情報を確認できます。",
      image: "/guide/stage-icon.png",
    },
    {
      title: "マップ",
      text: "屋台や教室など、学内の場所を検索できます。",
      image: "/guide/map-icon.png",
    },
    {
      title: "企画紹介",
      text: "各企画の詳しい情報やアンケートを確認できます。",
      image: "/guide/project-icon.png",
    },
    {
      title: "よくある質問",
      text: "FAQやマスコット紹介などを確認できます。",
      image: "/guide/faq-icon.png",
    },
  ];

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="Bottom-Guide-section">

      {/* ==========================
          ページタイトル
      ========================== */}

      <div className="Bottom-Guide-header">

        <div className="Bottom-Guide-number">
          02
        </div>

        <h1>
          下部メニュー
        </h1>

      </div>


      {/* ==========================
          下部メニュー全体
      ========================== */}

      <div className="Bottom-Guide-content">


        {/* ==========================
            下部メニュー画像
        ========================== */}

        <div className="Bottom-Guide-image-box">

          <div className="Bottom-Guide-image">

            <img
              src="/guide/bottom-navigation.png"
              alt="下部メニュー"
            />

          </div>

        </div>


        {/* ==========================
            タイトル
        ========================== */}

        <div className="Bottom-Guide-divider">
          下部メニュー
        </div>


        {/* ==========================
            説明ボックス
        ========================== */}

        <div className="Bottom-Guide-notice">

          {items.map((item, index) => (

            <div
              className="Bottom-Guide-notice-item"
              key={item.title}
            >

              {/* ==========================
                  項目タイトル
              ========================== */}

              <button
                type="button"
                className="Bottom-Guide-notice-title"
                onClick={() => handleToggle(index)}
              >

                {/* ドット */}

                <span className="Bottom-Guide-notice-dot"></span>


                {/* アイコン */}

                <span className="Bottom-Guide-notice-icon">

                  <img
                    src={item.image}
                    alt=""
                  />

                </span>


                {/* タイトル */}

                <h2>
                  {item.title}
                </h2>


                {/* 矢印 */}

                <span
                  className={`Bottom-Guide-arrow ${
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

                <div className="Bottom-Guide-notice-text">
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