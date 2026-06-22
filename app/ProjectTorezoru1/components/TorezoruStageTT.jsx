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

  const data =
    selectedDay === 1
      ? Day1Data
      : Day2Data;

  return (
    <section className="ruminosu-ruminosuTT-section">

      {/* タイトル */}
      <div className="ruminosu-section-wrapper">
        <h2 className="ruminosu-section-title">
          タイムテーブル
        </h2>
      </div>

      {/* 本体 */}
      <div className="ruminosu-ruminosuTT">

        {/* 日付切替そのまま */}
        <TorezoruDate
          onDayChange={setSelectedDay}
        />

        <div className="ruminosu-ruminosuTT-scroll-area">

          <div className="ruminosu-ruminosuTT-wrapper">

            <ul className="ruminosu-ruminosuTT-time-slot">

              {data.map((item, index) => (
                <li
                  key={index}
                  className="ruminosu-ruminosuTT-time-slot-item"
                >

                  <div className="ruminosu-ruminosuTT-slot-header">

                    <div className="ruminosu-ruminosuTT-time">
                      {item.time}
                    </div>

                    <div
                      className="ruminosu-ruminosuTT-event"
                      onClick={() =>
                        setOpenIndex(
                          openIndex === index
                            ? null
                            : index
                        )
                      }
                    >

                      <div className="ruminosu-ruminosuTT-event-left">

                        <div className="ruminosu-ruminosuTT-event-icon">

                          {item.icon && (
                            <img
                              src={item.icon}
                              alt={item.title}
                            />
                          )}

                        </div>

                        <span className="ruminosu-ruminosuTT-event-title">
                          {item.title}
                        </span>

                      </div>

                      <span
                        className={`ruminosu-ruminosuTT-toggle-icon ${
                          openIndex === index
                            ? "open"
                            : ""
                        }`}
                      />

                    </div>

                  </div>

                  {openIndex === index && (
                    <div className="ruminosu-ruminosuTT-event-detail">

                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="ruminosu-ruminosuTT-event-image"
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
              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TorezoruStageTT;