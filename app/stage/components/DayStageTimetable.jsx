"use client";

import React, { useState } from "react";
import "./DayStageTimetable.css";

const DayStageTimetable = ({ data = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="timetable-section">

      <h2 className="stage-section-title">
        タイムテーブル
      </h2>

      <div className="timetable">
        <div className="timetable-scroll">

          <ul className="time-slot">

            {data.map((item, index) => (
              <li key={index} className="time-slot-item">

                <div className="slot-header">

                  <div className="time">
                    {item.time}
                  </div>

                  <div
                    className="event"
                    onClick={() => toggleDetail(index)}
                  >
                    <div className="event-left">
  <div className="event-icon">
    <img src={item.icon} alt={item.title} />
  </div>

  <span className="event-title">
    {item.title}
  </span>
</div>
                    <span
                      className={`toggle-icon ${
                        openIndex === index ? "open" : ""
                      }`}
                    />

                  </div>

                </div>

                {openIndex === index && (
                  <div className="event-detail">

                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="event-image"
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

    </section>
  );
};

export default DayStageTimetable;