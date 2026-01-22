"use client";

import React, { useState } from "react";
import "./LaughMusicInfo.css";
import "./LaughMusicDate.css";

import LaughMusicCast from "./LaughMusicCast";

import LaughMusicCastDay1 from "./data/LaughMusicCastDay1";
import LaughMusicCastDay2 from "./data/LaughMusicCastDay2";

const LaughMusicInfo = () => {
  const [day, setDay] = useState("day1");

  const artists =
    day === "day1" ? LaughMusicCastDay1 : LaughMusicCastDay2;

  return (
    <section className="LaughMusic-info">
      {/* ▼ タイトル（灰色ボックスの外） */}
      <h2 className="LaughMusic-section-title">出演者様紹介</h2>

      {/* ▼ 灰色ボックス */}
      <div className="LaughMusic-scroll-area">
        {/* Day切り替え */}
        <div className="LaughMusicDate-toggle">
          <button
            className={day === "day1" ? "active" : ""}
            onClick={() => setDay("day1")}
          >
            Day1
          </button>

          <button
            className={day === "day2" ? "active" : ""}
            onClick={() => setDay("day2")}
          >
            Day2
          </button>
        </div>

        {/* 出演者一覧 */}
        <LaughMusicCast artists={artists} />
      </div>
      {/* ▲ 灰色ボックス */}
    </section>
  );
};

export default LaughMusicInfo;
