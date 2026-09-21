"use client";

import React, { useState } from "react";
import "./StageTT.css";

const StageTT = ({ data = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index, item) => {
    // 演者様関連の項目は開かない
    if (
      item.title?.includes("演者") ||
      item.title?.includes("出演")
    ) {
      return;
    }

    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="Stage-TT-section">

      {/* =================================================
          タイトル
      ================================================= */}
      <h2 className="Stage-section-title">
        タイムテーブル
      </h2>


      {/* =================================================
          タイムテーブル外枠
      ================================================= */}
      <div className="Stage-TT-container">

        <div className="Stage-TT-scroll">

          <ul className="Stage-TT-list">

            {data.map((item, index) => {

              const isPerformer =
                item.title?.includes("演者") ||
                item.title?.includes("出演");

              return (
                <li
                  key={index}
                  className="Stage-TT-item"
                >

                  {/* =================================================
                      タイムラインの丸
                  ================================================= */}
                  <div className="Stage-TT-dot"></div>


                  {/* =================================================
                      大きなカード
                  ================================================= */}
                  <div className="Stage-TT-card">

                    {/* =================================================
                        時間
                    ================================================= */}
                    <div className="Stage-TT-time">
                      {item.time}
                    </div>


                    {/* =================================================
                        イベントカード
                    ================================================= */}
                    <div
                      className={`Stage-TT-event ${
                        openIndex === index
                          ? "Stage-TT-event-open"
                          : ""
                      }`}
                      onClick={() => toggleDetail(index, item)}
                    >

                      {/* 左側の青ライン */}
                      <div className="Stage-TT-event-line"></div>


                      {/* =================================================
                          アイコン
                      ================================================= */}
                      <div className="Stage-TT-event-icon">

                        <img
                          src={item.icon}
                          alt={item.title}
                        />

                      </div>


                      {/* =================================================
                          イベント内容
                      ================================================= */}
                      <div className="Stage-TT-event-content">

                        <div className="Stage-TT-event-title">
                          {item.title}
                        </div>


                        {/* 赤い3点 */}
                        {!isPerformer && (
                          <div className="Stage-TT-event-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        )}

                      </div>


                      {/* =================================================
                          矢印
                      ================================================= */}
                      {!isPerformer && (
                        <div className="Stage-TT-toggle-button">

                          <span
                            className={`Stage-TT-toggle-icon ${
                              openIndex === index
                                ? "Stage-TT-toggle-icon-open"
                                : ""
                            }`}
                          />

                        </div>
                      )}

                    </div>


                    {/* =================================================
                        詳細
                    ================================================= */}
                    {!isPerformer && openIndex === index && (
                      <div className="Stage-TT-detail">

                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="Stage-TT-detail-image"
                          />
                        )}

                        {item.detail && (
                          <p className="Stage-TT-detail-text">
                            {item.detail}
                          </p>
                        )}

                      </div>
                    )}

                  </div>

                </li>
              );
            })}

          </ul>

        </div>

      </div>

    </section>
  );
};

export default StageTT;