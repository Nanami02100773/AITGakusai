"use client";
import React, { useState } from "react";
import "./TorezoruStageTT.css";
import TorezoruDate from "./TorezoruDate";

// data
import Day1Data from "./data/TorezoruStageTTDay1";
import Day2Data from "./data/TorezoruStageTTDay2";

const TorezoruStageTT = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1);

  // 日付で切り替え
  const data = selectedDay === 1 ? Day1Data : Day2Data;

  return (
    <section className="TorezoruStageTT-section">

      {/* ===== タイトル（灰色ボックスの外） ===== */}
      <div className="Torezoru-section-wrapper">
        <h2 className="Torezoru-section-title">
          タイムテーブル
        </h2>
      </div>

      {/* ===== 灰色ボックス ===== */}
      <div className="TorezoruStageTT">

        {/* 👇 日付切り替えは灰色ボックスの中 */}
        <TorezoruDate onDayChange={setSelectedDay} />

        {/* 中身 */}
        <div className="TorezoruStageTT-scroll-area">
          <div className="TorezoruStageTT-wrapper">
            <ul className="TorezoruStageTT-time-slot">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="TorezoruStageTT-time-slot-item"
                >
                  <div
                    className="TorezoruStageTT-slot-header"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="TorezoruStageTT-time">
                      {item.time}
                    </span>

                    <div className="TorezoruStageTT-event">
                      <span>{item.title}</span>
                      <span>{openIndex === index ? "▲" : "▼"}</span>
                    </div>
                  </div>

                  {openIndex === index && (
                    <div className="TorezoruStageTT-event-detail">
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

export default TorezoruStageTT;
