"use client";

import React, { useState } from "react";
import "./StageTT.css";

const StageTT = ({ data = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="Stage-TT-section">

      <h2 className="Stage-section-title">
        タイムテーブル
      </h2>

      <div className="Stage-TT-container">
        <div className="Stage-TT-scroll">

          <ul className="Stage-TT-list">

            {data.map((item, index) => (
              <li
                key={index}
                className="Stage-TT-item"
              >

                <div className="Stage-TT-header">

                  <div className="Stage-TT-time">
                    {item.time}
                  </div>

                  <div
                    className="Stage-TT-event"
                    onClick={() => toggleDetail(index)}
                  >
                    <div className="Stage-TT-event-left">

                      <div className="Stage-TT-event-icon">
                        <img
                          src={item.icon}
                          alt={item.title}
                        />
                      </div>

                      <span className="Stage-TT-event-title">
                        {item.title}
                      </span>

                    </div>

                    <span
                      className={`Stage-TT-toggle-icon ${
                        openIndex === index
                          ? "Stage-TT-toggle-icon-open"
                          : ""
                      }`}
                    />

                  </div>

                </div>

                {openIndex === index && (
                  <div className="Stage-TT-detail">

                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="Stage-TT-detail-image"
                      />
                    )}

                    {item.detail && (
                      <p className="Stage-TT-detail-text">
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

    </section>
  );
};

export default StageTT;