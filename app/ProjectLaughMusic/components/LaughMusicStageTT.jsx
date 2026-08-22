"use client";

import React, { useState } from "react";
import "./LaughMusicStageTT.css";

import Day1Data from "./data/LaughMusicStageTTDay1";
import Day2Data from "./data/LaughMusicStageTTDay2";

const LaughMusicStageTT = ({
  selectedDay,
}) => {
  const [openIndex, setOpenIndex] =
    useState(null);

  const data =
    selectedDay === 1
      ? Day1Data
      : Day2Data;

  return (
    <section className="LaughMusicStageTT-section">

      <div className="LaughMusic-section-wrapper">
        <h2 className="LaughMusic-section-title">
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
                  <div
                    className="LaughMusicStageTT-slot-header"
                    onClick={() =>
                      setOpenIndex(
                        openIndex === index
                          ? null
                          : index
                      )
                    }
                  >
                    <span className="LaughMusicStageTT-time">
                      {item.time}
                    </span>

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

                      <span
                        className={`LaughMusicStageTT-toggle-icon ${
                          openIndex === index
                            ? "open"
                            : ""
                        }`}
                      />

                    </div>
                  </div>

                  {openIndex === index && (
                    <div className="LaughMusicStageTT-event-detail">

                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="LaughMusicStageTT-event-image"
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

    </section>
  );
};

export default LaughMusicStageTT;