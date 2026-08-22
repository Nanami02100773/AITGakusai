"use client";

import React, { useState } from "react";
import "./KyouyasaiStageTT.css";

import DayData from "./data/KyouyasaiStageTTDay";

const KyouyasaiStageTT = () => {
  const [openIndex, setOpenIndex] =
    useState(null);

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
                  <div
                    className="kyoyasaiStageTT-slot-header"
                    onClick={() =>
                      setOpenIndex(
                        openIndex === index
                          ? null
                          : index
                      )
                    }
                  >
                    <span className="kyoyasaiStageTT-time">
                      {item.time}
                    </span>

                    <div className="kyoyasaiStageTT-event">
<div className="kyoyasaiStageTT-event-left">
  <span className="kyoyasaiStageTT-event-title">
    {item.title}
  </span>
</div>

                      <span
                        className={`kyoyasaiStageTT-toggle-icon ${
                          openIndex === index
                            ? "open"
                            : ""
                        }`}
                      />

                    </div>
                  </div>

                  {openIndex === index && (
                    <div className="kyoyasaiStageTT-event-detail">

                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="kyoyasaiStageTT-event-image"
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

export default KyouyasaiStageTT;