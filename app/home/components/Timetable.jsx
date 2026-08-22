"use client";

import React from "react";
import "./Timetable.css";
import HomeTTData from "./data/HomeTTData";

const ZentaiTimetable = () => {
  return (
    <section className="Home-Timetable-section">

      <h2 className="Home-section-title">
        タイムテーブル
      </h2>

      <div className="Home-Timetable-container">

        {HomeTTData.map((dayData, index) => (
          <div key={index}>

            <h3
              className={`Home-Timetable-dayTitle ${
                index === 1
                  ? "Home-Timetable-dayTitleSecond"
                  : ""
              }`}
            >
              <span>

                <small>
                  {index === 0
                    ? "1日目"
                    : "2日目"}
                </small>

                <b>
                  {index === 0
                    ? "10.10(土)"
                    : "10.11(日)"}
                </b>

              </span>
            </h3>

            <div className="Home-Timetable-list">

              {dayData.items.map((item, i) => (
                <div
                  key={i}
                  className="Home-Timetable-item"
                >

                  <div className="Home-Timetable-time">
                    {item[0]}
                  </div>

                  <div className="Home-Timetable-icon">
                    <img
                      src={item[2]}
                      alt={item[1]}
                      className="Home-Timetable-iconImage"
                    />
                  </div>

                  <div className="Home-Timetable-content">
                    {item[1]}
                  </div>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ZentaiTimetable;