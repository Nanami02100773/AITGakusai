"use client";

import { useState } from "react";
import { orbitron } from "../page";
import "./BottomNavigationGuide.css";

export default function BottomNavigationGuide() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    {
      title: "ホーム",
      text: "学祭の最新情報やおすすめ企画を確認できます。",
      icon: "/guide/icons/home.png",
    },
    {
      title: "ステージ情報",
      text: "ライブやイベントなどのステージ情報を確認できます。",
      icon: "/guide/icons/stage.png",
    },
    {
      title: "マップ",
      text: "屋台や教室など、学内の場所を検索できます。",
      icon: "/guide/icons/map.png",
    },
    {
      title: "企画紹介",
      text: "各企画の詳しい情報やアンケートを確認できます。",
      icon: "/guide/icons/企画.png",
    },
    {
      title: "よくある質問",
      text: "FAQやマスコット紹介などを確認できます。",
      icon: "/guide/icons/faq.png",
    },
  ];

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="BottomNavigation-Guide-section">

      {/* ページタイトル */}
      <div className="BottomNavigation-Guide-header">

        <div
          className={`BottomNavigation-Guide-number ${orbitron.className}`}
        >
          02
        </div>

        <h1>下部メニュー</h1>

      </div>


      {/* 下部メニュー全体 */}
      <div className="BottomNavigation-Guide-content">

        {/* 下部メニュー画像 */}
        <div className="BottomNavigation-Guide-image-box">

          <div className="BottomNavigation-Guide-image">

            <img
              src="/guide/bottom-navigation.png"
              alt="下部メニュー"
            />

          </div>

        </div>


        {/* 下部メニュータイトル */}
        <div className="BottomNavigation-Guide-divider">
          下部メニュー
        </div>


        {/* 下部メニューの説明 */}
        <div className="BottomNavigation-Guide-notice">

          {items.map((item, index) => (

            <div
              className="BottomNavigation-Guide-notice-item"
              key={item.title}
            >

              {/* 項目タイトル */}
              <button
                type="button"
                className="BottomNavigation-Guide-notice-title"
                onClick={() => handleToggle(index)}
              >

                {/* 青い丸 */}
                <span className="BottomNavigation-Guide-notice-dot"></span>


                {/* アイコン画像 */}
                <img
                  className="BottomNavigation-Guide-icon"
                  src={item.icon}
                  alt=""
                />


                {/* 項目名 */}
                <h2>{item.title}</h2>


                {/* 矢印 */}
                <span
                  className={`BottomNavigation-Guide-arrow ${
                    openItem === index ? "is-open" : ""
                  }`}
                >
                  &gt;
                </span>

              </button>


              {/* 本文 */}
              {openItem === index && (

                <div className="BottomNavigation-Guide-notice-text">
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