"use client";
import React, { useState } from "react";
import "./KyouyasaiStageTT.css";

// ✅ 正しい data import
import DayData from "./data/KyouyasaiStageTTDay";

const KyouyasaiStageTT = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="KyouyasaiStageTT-section">
      {/* タイトル（灰色ボックスの外） */}
      <div className="Kyouyasai-section-wrapper">
        <h2 className="Kyouyasai-section-title">タイムテーブル</h2>
      </div>

      {/* 灰色ボックス */}
      <div className="KyouyasaiStageTT">
        <div className="KyouyasaiStageTT-scroll-area">
          <div className="KyouyasaiStageTT-wrapper">
            <ul className="KyouyasaiStageTT-time-slot">
              {DayData.map((item, index) => (
                <li
                  key={index}
                  className="KyouyasaiStageTT-time-slot-item"
                >
                  <div
                    className="KyouyasaiStageTT-slot-header"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="KyouyasaiStageTT-time">
                      {item.time}
                    </span>

                    <div className="KyouyasaiStageTT-event">
                      <span>{item.title}</span>
                      <span>{openIndex === index ? "▲" : "▼"}</span>
                    </div>
                  </div>

                  {openIndex === index && (
                    <div className="KyouyasaiStageTT-event-detail">
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

export default KyouyasaiStageTT;
