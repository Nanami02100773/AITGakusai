"use client";
import React from "react";
import "./SpeakerIntroduction.css";

const SpeakerIntroduction = () => {
  return (
    <section className="performer-section">
      <h2>出演者様紹介</h2>
      <div className="scroll-area1">
        {[...Array(5)].map((_, index) => (
          <div className="profile-box" key={index}>
            <div className="profile">
              <div className="photo">宣材写真</div>
              <div className="bio">
                <h3>紹介文</h3>
                <p>ここに演者の紹介文が入ります。</p>
              </div>
              <div className="goods-info">
                <div className="goods-status available">〇 物販あり</div>
                <div className="goods-time">物販時間：13:00〜14:00</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakerIntroduction;
