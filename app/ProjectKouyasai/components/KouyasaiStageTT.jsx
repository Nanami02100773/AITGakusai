"use client";

import React from "react";
import "./KouyasaiStageTT.css";

import DayData from "./data/KouyasaiStageTTDay";

const KouyasaiStageTT = () => {
  return (
    <section className="koyasaiStageTT-section">

      <div className="koyasai-section-wrapper">
        <h2 className="koyasai-section-title">
          タイムテーブル
        </h2>
      </div>

      <div className="koyasaiStageTT-bg">

        <div className="koyasaiStageTT">

          <div className="koyasaiStageTT-scroll-area">

            <div className="koyasaiStageTT-wrapper">

              <ul className="koyasaiStageTT-time-slot">

                {DayData.map((item, index) => (
                  <li
                    key={index}
                    className="koyasaiStageTT-time-slot-item"
                  >

                    {/* 時間 */}
                    <div className="koyasaiStageTT-slot-header">

                      <span className="koyasaiStageTT-time">
                        {item.time}
                      </span>

                      {/* 企画 */}
                      <div className="koyasaiStageTT-event">

                        <div className="koyasaiStageTT-event-left">

                          {item.icon && (
                            <div className="koyasaiStageTT-event-icon">
                              <img
                                src={item.icon}
                                alt={item.title}
                              />
                            </div>
                          )}

                          <span className="koyasaiStageTT-event-title">
                            {item.title}
                          </span>

                        </div>

                      </div>

                    </div>

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

export default KouyasaiStageTT;