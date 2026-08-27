"use client";

import React, { useState } from "react";
import "./LaughMusicStageTT.css";

import Day1Data from "./data/LaughMusicStageTTDay1";
import Day2Data from "./data/LaughMusicStageTTDay2";

const LaughMusicStageTT = ({
  selectedDay,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const data =
    selectedDay === 1
      ? Day1Data
      : Day2Data;

  // タップして詳細を表示しない企画
  const noDetailTitles = [
    "オープニング",
    "準備",
    "〇✕ゲーム",
    "アイドルリハーサル",
    "歌王",
    "エンディング",
  ];

  return (
    <section className="LaughMusicStageTT-section">

      <div className="LaughMusic-section-wrapper">
        <h2 className="LaughMusic-section-title">
          タイムテーブル
        </h2>
      </div>

      <div className="LaughMusicStageTT">

        <div className="LaughMusicStageTT-scroll-area">

          <div className="LaughMusicStageTT-wrapper">

            <ul className="LaughMusicStageTT-time-slot">

              {data.map((item, index) => {

                // 詳細表示しない企画かどうか
                const noDetail =
                  noDetailTitles.includes(item.title);

                return (
                  <li
                    key={index}
                    className="LaughMusicStageTT-time-slot-item"
                  >

                    <div
                      className={`LaughMusicStageTT-slot-header ${
                        noDetail
                          ? "no-detail"
                          : ""
                      }`}
                      onClick={() => {
                        // 詳細なしの企画は何もしない
                        if (noDetail) return;

                        setOpenIndex(
                          openIndex === index
                            ? null
                            : index
                        );
                      }}
                    >

                      {/* 時間 */}
                      <span className="LaughMusicStageTT-time">
                        {item.time}
                      </span>

                      {/* イベント */}
                      <div className="LaughMusicStageTT-event">

                        <div className="LaughMusicStageTT-event-left">

                          {item.icon && (
                            <div className="LaughMusicStageTT-event-icon">
                              <img
                                src={item.icon}
                                alt={item.title}
                              />
                            </div>
                          )}

                          <span className="LaughMusicStageTT-event-title">
                            {item.title}
                          </span>

                        </div>

                        {/* 詳細がある企画だけ矢印を表示 */}
                        {!noDetail && (
                          <span
                            className={`LaughMusicStageTT-toggle-icon ${
                              openIndex === index
                                ? "open"
                                : ""
                            }`}
                          />
                        )}

                      </div>

                    </div>

                    {/* 詳細がある企画だけ表示 */}
                    {!noDetail &&
                      openIndex === index && (
                        <div className="LaughMusicStageTT-event-detail">

                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="LaughMusicStageTT-event-image"
                            />
                          )}

                          {item.detail && (
                            <p>
                              {item.detail}
                            </p>
                          )}

                        </div>
                      )}

                  </li>
                );
              })}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LaughMusicStageTT;