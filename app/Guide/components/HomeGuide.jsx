"use client";

import { useState } from "react";
import "./HomeGuide.css";

export default function HomeGuide() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    {
      title: "学祭の広告",
      text: "学祭で行われるイベントや企画などの情報を紹介しています。タップすると、詳しい内容を確認できます。",
    },
    {
      title: "最新のお知らせ",
      text: "落とし物や重要なお知らせなど、最新の情報を随時更新しています。",
    },
    {
      title: "タイムテーブル",
      text: "学祭期間中のイベントやステージのスケジュールを確認できます。",
    },
    {
      title: "グランプリ",
      text: "2日目の夜に投票結果を集計し、グランプリを決定します。",
    },
    {
      title: "公式SNS",
      text: "愛工大祭の公式SNSを確認できます。",
    },
  ];

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="Home-Guide-section">

      {/* ページタイトル */}
      <div className="Home-Guide-header">
        <div className="Home-Guide-number">
          03
        </div>

        <h1>ホーム</h1>
      </div>


      {/* ホーム画面全体 */}
      <div className="Home-Guide-content">

        {/* ホーム画面画像 */}
        <div className="Home-Guide-image-box">
          <div className="Home-Guide-image">
            <img
              src="/guide/home.png"
              alt="ホーム画面"
            />
          </div>
        </div>


        {/* ホーム画面タイトル */}
        <div className="Home-Guide-divider">
          ホーム画面
        </div>


        {/* ホーム画面の説明 */}
        <div className="Home-Guide-notice">

          {items.map((item, index) => (
            <div
              className="Home-Guide-notice-item"
              key={item.title}
            >

              {/* 項目タイトル */}
              <button
                className="Home-Guide-notice-title"
                onClick={() => handleToggle(index)}
              >
                <span className="Home-Guide-notice-dot"></span>

                <h2>{item.title}</h2>

                <span
                  className={`Home-Guide-arrow ${
                    openItem === index ? "is-open" : ""
                  }`}
                >
                  &gt;
                </span>
              </button>


              {/* 本文 */}
              {openItem === index && (
                <div className="Home-Guide-notice-text">
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