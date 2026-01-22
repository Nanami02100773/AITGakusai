"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./IntroductoryItems.css";

const cardData = [
  {
    label: "ラベル1",
    overlayText: "NEW!",
    title: "紹介文1",
    subdesc1: "これは紹介1の補足説明です。",
    location: "場所1",
    subdesc2: "これは場所1の補足説明です。",
    link: "./ProjectRakuiti-01-",
  },
  {
    label: "ラベル2",
    overlayText: "",
    title: "紹介文2",
    subdesc1: "これは紹介2の補足説明です。",
    location: "場所2",
    subdesc2: "これは場所2の補足説明です。",
    link: "./ProjectRakuiti-02-",
  },
  {
    label: "ラベル3",
    overlayText: "人気",
    title: "紹介文3",
    subdesc1: "これは紹介3の補足説明です。",
    location: "場所3",
    subdesc2: "これは場所3の補足説明です。",
    link: "./ProjectRakuiti-03-",
  },
  {
    label: "ラベル4",
    overlayText: "",
    title: "紹介文4",
    subdesc1: "これは紹介4の補足説明です。",
    location: "場所4",
    subdesc2: "これは場所4の補足説明です。",
    link: "./ProjectRakuiti-04-",
  },
  {
    label: "ラベル5",
    overlayText: "NEW!",
    title: "紹介文5",
    subdesc1: "これは紹介5の補足説明です。",
    location: "場所5",
    subdesc2: "これは場所5の補足説明です。",
    link: "./ProjectRakuiti-05-",
  },
  {
    label: "ラベル6",
    overlayText: "",
    title: "紹介文6",
    subdesc1: "これは紹介6の補足説明です。",
    location: "場所6",
    subdesc2: "これは場所6の補足説明です。",
    link: "./ProjectRakuiti-06-",
  },
];


const Rakuiti = () => {
  const router = useRouter();

  return (
    <section>
      <div className="Rakuiti-section-wrapper">
        <div className="Rakuiti-section-title">出展団体</div>
      </div>

      <main className="Rakuiti-card-list">
        {cardData.map((item, index) => (
          <div className="Rakuiti-card" key={index}>
            {/* 左 */}
            <div className="Rakuiti-card-left">
              <div className="Rakuiti-thumb-wrapper">
                <div className="Rakuiti-thumb"></div>
                <div className="Rakuiti-label">{item.label}</div>
                <div className="Rakuiti-overlay-box">
                  {item.overlayText}
                </div>
              </div>
            </div>

            <div className="Rakuiti-card-divider"></div>

            {/* 右 */}
            <div className="Rakuiti-card-right">
              {/* ▼ボタン */}
              <button
                className="Rakuiti-detail-button"
                onClick={() => router.push(item.link)}
              >
                ▼
              </button>

              <div className="Rakuiti-sub1-title">{item.title}</div>
              <div className="Rakuiti-introduction1-subdesc">
                {item.subdesc1}
              </div>
              <div className="Rakuiti-sub2-title">{item.location}</div>
              <div className="Rakuiti-introduction2-subdesc">
                {item.subdesc2}
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Rakuiti;
