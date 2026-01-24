"use client";
import React from "react";
import "./DaySpeakerList.css";

const DaySpeakerList = ({ speakers }) => {
  if (!speakers || speakers.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="Stage-performer-section">
      <h2>出演者様紹介</h2>

      <div className="Stage-scroll-area">
        {speakers.map((speaker, index) => (
          <div className="Stage-profile-box" key={index}>
            <div className="Stage-profile">
              {/* 写真 */}
              <div className="Stage-photo">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* 紹介文 */}
              <div className="Stage-bio">
                <h3>{speaker.name}</h3>
                <p>ここに演者の紹介文が入ります。</p>
              </div>

              {/* 物販情報 */}
              <div className="Stage-goods-info">
                <div className="Stage-goods-status available">〇 物販あり</div>
                <div className="Stage-goods-time">物販時間：13:00〜14:00</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DaySpeakerList;
