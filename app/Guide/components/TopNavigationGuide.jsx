"use client";

import { useState } from "react";
import { orbitron } from "../page";
import "./TopNavigationGuide.css";

export default function TopNavigationGuide() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    {
      number: "01",
      title: "戻るボタン",
      text: "左側にあるマークを押すと、一つ前のページに戻ることができます。",
    },
    {
      number: "02",
      title: "ロゴエリア",
      text: "愛工大祭のロゴなどが表示されます。",
    },
    {
      number: "03",
      title: "メニュー",
      text: "アプリの操作説明を確認できます。",
    },
  ];

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="TopNavigationGuide">

      {/* ページタイトル */}
      <div className="TopNavigationGuide-header">

        <div
          className={`TopNavigationGuide-number ${orbitron.className}`}
        >
          01
        </div>

        <h1>上部メニュー</h1>

      </div>


      {/* 上部メニュー全体 */}
      <div className="TopNavigationGuide-content">

        {/* 上部メニュー画像 */}
        <div className="TopNavigationGuide-image-box">

          <div className="TopNavigationGuide-image">

            <img
              src="/guide/top-navigation.png"
              alt="上部メニュー"
            />

          </div>

        </div>


        {/* 上部メニュータイトル */}
        <div className="TopNavigationGuide-divider">
          上部メニュー
        </div>


        {/* 上部メニューの説明 */}
        <div className="TopNavigationGuide-notice">

          {items.map((item, index) => (

            <div
              className="TopNavigationGuide-notice-item"
              key={item.title}
            >

              <button
                type="button"
                className="TopNavigationGuide-notice-title"
                onClick={() => handleToggle(index)}
              >

                {/* 左端のドット */}
                <span className="TopNavigationGuide-notice-dot"></span>


                {/* 番号 */}
                <span
                  className={`TopNavigationGuide-item-number ${orbitron.className}`}
                >
                  {item.number}
                </span>


                {/* 項目名 */}
                <h2>{item.title}</h2>


                {/* 矢印 */}
                <span
                  className={`TopNavigationGuide-arrow ${
                    openItem === index ? "is-open" : ""
                  }`}
                >
                  &gt;
                </span>

              </button>


              {/* 説明本文 */}
              {openItem === index && (

                <div className="TopNavigationGuide-notice-text">
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