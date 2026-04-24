"use client";
import React from "react";
import "./DaySpeakerList.css";

const DaySpeakerList = ({ speakers }) => {
  if (!speakers || speakers.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="Stage-performer-section">
      <h2 className="Stage-section-title">出演者様紹介</h2>

      <div className="Stage-scroll-area">
        {speakers.map((speaker, index) => (
          <div className="Stage-profile-box" key={index}>
            <div className="Stage-profile">

              {/* 写真 */}
              <div className="Stage-photo">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* 名前・紹介 */}
              <div className="Stage-bio">
                <h3>{speaker.name}</h3>
                <p>{speaker.bio || "ここに演者の紹介文が入ります。"}</p>
              </div>

              {/* 物販情報 */}
              <div className="Stage-goods-info">
                {speaker.hasGoods ? (
                  <>
                    {/* 上段（あり＋場所） */}
                    <div className="Stage-goods-top">

                      <div className="left">
                        <div className="Stage-goods-status available">
                          物販あり
                        </div>
                      </div>

                      <div className="divider"></div>

                      <div className="right">
                        <div className="Stage-goods-place">
                          <span className="label">物販の場所</span>
                          <span className="value">{speaker.goodsPlace}</span>
                        </div>
                      </div>

                    </div>

                    {/* 下段（時間） */}
                    <div className="Stage-goods-time">
                      物販時間：{speaker.goodsTime}
                    </div>
                  </>
                ) : (
                  <div className="Stage-goods-status none">
                    物販なし
                  </div>
                )}
              </div>
              <div className="pattern-top"></div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DaySpeakerList;