"use client";

import React, { useState } from "react";
import "./KajinoStageTT.css";
import KajinoDate from "./KajinoDate";

// data
import Day1Data from "./data/KajinoStageTTDay1";
import Day2Data from "./data/KajinoStageTTDay2";

const KajinoStageTT = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1);

  const data =
    selectedDay === 1
      ? Day1Data
      : Day2Data;

  return (
    <section className="kajino-kajinoTT-section">

      {/* タイトル */}
      <div className="kajino-section-wrapper">
        <h2 className="kajino-section-title">
          タイムテーブル
        </h2>
      </div>

      {/* 外側背景 */}
      <div className="kajino-kajinoTT-bg">

        {/* 本体 */}
        <div className="kajino-kajinoTT">

          {/* 日付切替 */}
          <KajinoDate
            onDayChange={setSelectedDay}
          />

          <div className="kajino-kajinoTT-scroll-area">

            <div className="kajino-kajinoTT-wrapper">

              <ul className="kajino-kajinoTT-time-slot">

                {data.map((item, index) => (
                  <li
                    key={index}
                    className="kajino-kajinoTT-time-slot-item"
                  >

                    <div className="kajino-kajinoTT-slot-header">

                      <div className="kajino-kajinoTT-time">
                        {item.time}
                      </div>

                      <div
                        className="kajino-kajinoTT-event"
                        onClick={() =>
                          setOpenIndex(
                            openIndex === index
                              ? null
                              : index
                          )
                        }
                      >

                        <div className="kajino-kajinoTT-event-left">
                          <span className="kajino-kajinoTT-event-title">
                            {item.title}
                          </span>
                        </div>

                        <span
                          className={`kajino-kajinoTT-toggle-icon ${
                            openIndex === index
                              ? "open"
                              : ""
                          }`}
                        />

                      </div>

                    </div>

                    {openIndex === index && (
                      <div className="kajino-kajinoTT-event-detail">

                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="kajino-kajinoTT-event-image"
                          />
                        )}

                        {item.detail && (
                          <p>{item.detail}</p>
                        )}

                      </div>
                    )}

                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default KajinoStageTT;