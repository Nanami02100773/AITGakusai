"use client";

import { useState } from "react";
import Image from "next/image";
import { orbitron } from "../page";
import "./BottomNavigationGuide.css";

import image2 from "./data/2.jpg";

import icon21 from "./data/2.1.png";
import icon22 from "./data/2.2.png";
import icon23 from "./data/2.3.png";
import icon24 from "./data/2.4.png";
import icon25 from "./data/2.5.png";

export default function BottomNavigationGuide() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    {
      title: "ホーム",
      text: "学祭の最新情報やおすすめ企画を確認できます。",
      icon: icon21.src,
    },
    {
      title: "ステージ情報",
      text: "ライブやイベントなどのステージ情報を確認できます。",
      icon: icon22.src,
    },
    {
      title: "マップ",
      text: "屋台や教室など、学内の場所を検索できます。",
      icon: icon23.src,
    },
    {
      title: "企画紹介",
      text: "各企画の詳しい情報やアンケートを確認できます。",
      icon: icon24.src,
    },
    {
      title: "よくある質問",
      text: "FAQやマスコット紹介などを確認できます。",
      icon: icon25.src,
    },
  ];

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="BottomNavigation-Guide-section">

      <div className="BottomNavigation-Guide-header">
        <div className={`BottomNavigation-Guide-number ${orbitron.className}`}>
          02
        </div>

        <h1>下部メニュー</h1>
      </div>

      <div className="BottomNavigation-Guide-content">

        {/* 写真2 */}
        <div className="BottomNavigation-Guide-image-box">
          <div className="BottomNavigation-Guide-image">
            <Image
              src={image2}
              alt="下部メニュー"
            />
          </div>
        </div>

        <div className="Guide-section-title">
          下部メニュー
        </div>

        <div className="BottomNavigation-Guide-notice">

          {items.map((item, index) => (
            <div
              className="BottomNavigation-Guide-notice-item"
              key={item.title}
            >

              <button
                type="button"
                className="BottomNavigation-Guide-notice-title"
                onClick={() => handleToggle(index)}
              >
                <span className="BottomNavigation-Guide-notice-dot"></span>

                <img
                  className="BottomNavigation-Guide-icon"
                  src={item.icon}
                  alt=""
                />

                <h2>{item.title}</h2>

                <span
                  className={`BottomNavigation-Guide-arrow ${
                    openItem === index ? "is-open" : ""
                  }`}
                >
                  &gt;
                </span>
              </button>

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