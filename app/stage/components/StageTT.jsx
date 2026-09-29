"use client";

import React, { useState } from "react";
import "./StageTT.css";

const StageTT = ({ data = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index, item) => {
    if (item.isPerformer === true) {
      return;
    }

    setOpenIndex(
      openIndex === index
        ? null
        : index
    );
  };

  return (
    <section className="Stage-TT-section">
      <h2 className="Stage-section-title">
        タイムテーブル
      </h2>

      <div className="Stage-TT-container">
        <div className="Stage-TT-scroll">
          <ul className="Stage-TT-list">
            {data.map((item, index) => {
              const isPerformer =
                item.isPerformer === true;

              return (
                <li
                  key={index}
                  className="Stage-TT-item"
                >
                  <div className="Stage-TT-dot"></div>

                  <div className="Stage-TT-card">

                    {/* 時間 */}
                    <div className="Stage-TT-time">
                      {item.time}
                    </div>

                    {/* イベント */}
                    <div
                      className={`Stage-TT-event ${
                        openIndex === index
                          ? "Stage-TT-event-open"
                          : ""
                      }`}
                      onClick={() =>
                        toggleDetail(index, item)
                      }
                    >

                      <div className="Stage-TT-event-line"></div>

                      {/* アイコン */}
                      <div className="Stage-TT-event-icon">
                        <img
                          src={item.icon}
                          alt={item.title}
                        />
                      </div>

                      {/* タイトル */}
                      <div className="Stage-TT-event-content">

                        <div className="Stage-TT-event-title">
                          {item.title}
                        </div>

                        {/* プルダウン用ドット */}
                        {!isPerformer && (
                          <div className="Stage-TT-event-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        )}

                      </div>

                      {/* 開閉ボタン */}
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

                    {/* 詳細 */}
                    {!isPerformer &&
                      openIndex === index && (
                        <div className="Stage-TT-detail">

                          {/* 写真 */}
                          {item.image && (
                            <img
                              src={item.image.src}
                              alt={item.title}
                              className="Stage-TT-detail-image"
                            />
                          )}

                          {/* 紹介文 */}
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