"use client";
import React from "react";
import "./Performer.css";

const Performer = ({ speakers }) => {
  if (!speakers || speakers.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="Stage-Performer-section">
      <h2 className="Stage-section-title">
        出演者様紹介
      </h2>

      <div className="Stage-Performer-scroll-area">
        {speakers.map((speaker, index) => (
          <div
            className="Stage-Performer-profile-box"
            key={index}
          >
            <div
              className={`Stage-Performer-profile ${
                speaker.hasGoods ? "has" : "none"
              }`}
            >
              {/* 写真 */}
              <div className="Stage-Performer-photo">
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

              {/* 名前・紹介 */}
              <div className="Stage-Performer-bio">
                <h3>{speaker.name}</h3>

                <p>
                  {speaker.bio ??
                    "ここに演者の紹介文が入ります。"}
                </p>
              </div>

              {/* 物販情報 */}
              <div className="Stage-Performer-goods-info">
                {speaker.hasGoods ? (
                  <>
                    {/* 上段 */}
                    <div className="Stage-Performer-goods-top">
                      <div className="Stage-Performer-goods-left">
                        <div className="Stage-Performer-goods-status available">
                          <img
                            src="/stagecast/correct.png"
                            alt="物販あり"
                            className="Stage-Performer-status-icon"
                          />
                          物販あり
                        </div>
                      </div>

                      <div className="Stage-Performer-divider"></div>

                      <div className="Stage-Performer-goods-right">
                        <div className="Stage-Performer-goods-place">
                          <span className="Stage-Performer-goods-label">
                            物販の場所
                          </span>

                          <span className="Stage-Performer-goods-value">
                            {speaker.goodsPlace}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 下段 */}
                    <div className="Stage-Performer-goods-time">
                      <img
                        src="/stagecast/clock.png"
                        alt="時計"
                        className="Stage-Performer-time-icon"
                      />

                      <div className="Stage-Performer-time-divider"></div>

                      <div className="Stage-Performer-goods-time-box">
                        物販時間：{speaker.goodsTime}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="Stage-Performer-goods-status none">
                    <img
                      src="/stagecast/incorrect.png"
                      alt="物販なし"
                      className="Stage-Performer-status-icon"
                    />
                    物販なし
                  </div>
                )}
              </div>

              {/* 模様 */}
              <div className="Stage-Performer-pattern-top"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Performer;