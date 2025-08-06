"use client";
import React, { useState } from "react";
import "./StageTT.css";

const StageTT = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="timetable">
      <h2 className="timetable-heading">タイムテーブル</h2>
      <div className="scroll-area wrapper">
        <ul className="time-slot">
          {data.map((item, index) => (
            <li key={index} className="time-slot-item">
              <div className="slot-header">
                <div className="time-container">
                  <span className="time">{item.time}</span>
                </div>
                <div className="event-container">
                  <div className="event" onClick={() => toggleDetail(index)}>
                    <span className="title">{item.title}</span>
                    <span className="toggle-icon">
                      {openIndex === index ? "▲" : "▼"}
                    </span>
                  </div>
                </div>
              </div>

              {openIndex === index && (
                <div className="event-detail">
                  <div className="event-image-box">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="event-image"
                    />
                  </div>
                  <p className="event-description">{item.detail}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StageTT;

