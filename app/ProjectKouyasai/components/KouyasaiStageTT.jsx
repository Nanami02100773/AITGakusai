"use client";
import React, { useState } from "react";
import "./KouyasaiStageTT.css";

import DayData from "./data/KouyasaiStageTTDay";

const KouyasaiStageTT = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="KouyasaiStageTT-section">
      {/* タイトル */}
      <div className="Kouyasai-section-wrapper">
        <h2 className="Kouyasai-section-title">タイムテーブル</h2>
      </div>

      {/* 灰色ボックス */}
      <div className="KouyasaiStageTT">
        <div className="KouyasaiStageTT-scroll-area">
          <div className="KouyasaiStageTT-wrapper">
            <ul className="KouyasaiStageTT-time-slot">
              {DayData.map((item, index) => (
                <li
                  key={index}
                  className="KouyasaiStageTT-time-slot-item"
                >
                  <div
                    className="KouyasaiStageTT-slot-header"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="KouyasaiStageTT-time">
                      {item.time}
                    </span>

                    <div className="KouyasaiStageTT-event">
                      <span>{item.title}</span>
                      <span>{openIndex === index ? "▲" : "▼"}</span>
                    </div>
                  </div>

                  {openIndex === index && (
                    <div className="KouyasaiStageTT-event-detail">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "100%", borderRadius: "6px" }}
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

export default KouyasaiStageTT;
