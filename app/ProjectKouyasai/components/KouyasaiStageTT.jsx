"use client";

import React, { useState } from "react";
import "./KouyasaiStageTT.css";

import DayData from "./data/KouyasaiStageTTDay";

const KouyasaiStageTT = () => {
  const [openIndex, setOpenIndex] =
    useState(null);

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
                  <div
                    className="koyasaiStageTT-slot-header"
                    onClick={() =>
                      setOpenIndex(
                        openIndex === index
                          ? null
                          : index
                      )
                    }
                  >
                    <span className="koyasaiStageTT-time">
                      {item.time}
                    </span>

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

                      <span
                        className={`koyasaiStageTT-toggle-icon ${
                          openIndex === index
                            ? "open"
                            : ""
                        }`}
                      />

                    </div>
                  </div>

                  {openIndex === index && (
                    <div className="koyasaiStageTT-event-detail">

                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="koyasaiStageTT-event-image"
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

export default KouyasaiStageTT;