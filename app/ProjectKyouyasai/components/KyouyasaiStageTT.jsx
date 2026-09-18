"use client";

import React from "react";
import "./KyouyasaiStageTT.css";

import DayData from "./data/KyouyasaiStageTTDay";

const KyouyasaiStageTT = () => {
  return (
    <section className="kyoyasaiStageTT-section">

      <div className="kyoyasai-section-wrapper">
        <h2 className="kyoyasai-section-title">
          タイムテーブル
        </h2>
      </div>

      <div className="kyoyasaiStageTT-bg">

        <div className="kyoyasaiStageTT">

          <div className="kyoyasaiStageTT-scroll-area">

            <div className="kyoyasaiStageTT-wrapper">

              <ul className="kyoyasaiStageTT-time-slot">

                {DayData.map((item, index) => (
                  <li
                    key={index}
                    className="kyoyasaiStageTT-time-slot-item"
                  >

                    <div className="kyoyasaiStageTT-slot-header">

                      {/* 時間 */}
                      <span className="kyoyasaiStageTT-time">
                        {item.time}
                      </span>

                      {/* 企画名 */}
                      <div className="kyoyasaiStageTT-event">

                        <div className="kyoyasaiStageTT-event-left">

                          <span className="kyoyasaiStageTT-event-title">
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

export default KyouyasaiStageTT;