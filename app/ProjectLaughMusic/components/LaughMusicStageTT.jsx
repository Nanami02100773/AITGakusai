"use client";
import React, { useState } from "react";
import "./LaughMusicStageTT.css";
import LaughMusicDate from "./LaughMusicDate";

// data
import Day1Data from "./data/LaughMusicStageTTDay1";
import Day2Data from "./data/LaughMusicStageTTDay2";

const LaughMusicStageTT = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1);

  // 日付で切り替え
  const data = selectedDay === 1 ? Day1Data : Day2Data;

  return (
    <section className="LaughMusicStageTT-section">

      {/* ===== タイトル（灰色ボックスの外） ===== */}
      <div className="LaughMusic-section-wrapper">
        <h2 className="LaughMusic-section-title">
          タイムテーブル
        </h2>
      </div>

      {/* ===== 灰色ボックス ===== */}
      <div className="LaughMusicStageTT">

        {/* 👇 日付切り替えは灰色ボックスの中 */}
        <LaughMusicDate onDayChange={setSelectedDay} />

        {/* 中身 */}
        <div className="LaughMusicStageTT-scroll-area">
          <div className="LaughMusicStageTT-wrapper">
            <ul className="LaughMusicStageTT-time-slot">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="LaughMusicStageTT-time-slot-item"
                >
                  <div
                    className="LaughMusicStageTT-slot-header"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="LaughMusicStageTT-time">
                      {item.time}
                    </span>

                    <div className="LaughMusicStageTT-event">
                      <span>{item.title}</span>
                      <span>{openIndex === index ? "▲" : "▼"}</span>
                    </div>
                  </div>

                  {openIndex === index && (
                    <div className="LaughMusicStageTT-event-detail">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          borderRadius: "6px",
                        }}
                      />
                      <p>{item.detail}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LaughMusicStageTT;
