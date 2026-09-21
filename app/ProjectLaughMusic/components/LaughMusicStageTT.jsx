"use client";

import React from "react";
import "./LaughMusicStageTT.css";

import Day1Data from "./data/LaughMusicStageTTDay1";
import Day2Data from "./data/LaughMusicStageTTDay2";

const LaughMusicStageTT = ({ selectedDay }) => {
  const data = selectedDay === 1 ? Day1Data : Day2Data;

  return (
    <section className="LaughMusicStageTT-section">

      <div className="LaughMusic-section-wrapper">
        <h2 className="laughmusic-section-title">
          タイムテーブル
        </h2>
      </div>

      <div className="LaughMusicStageTT">

        <div className="LaughMusicStageTT-scroll-area">

          <div className="LaughMusicStageTT-wrapper">

            <ul className="LaughMusicStageTT-time-slot">

              {data.map((item, index) => (
                <li
                  key={index}
                  className="LaughMusicStageTT-time-slot-item"
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

                  </div>

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