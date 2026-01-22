"use client";
import React, { useState } from "react";

import LaughMusicDate from "./LaughMusicDate";
import LaughMusicStageTT from "./LaughMusicStageTT";

import LaughMusicStageTTDay1 from "./data/LaughMusicStageTTDay1";
import LaughMusicStageTTDay2 from "./data/LaughMusicStageTTDay2";

const LaughMusicStageScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const timetableData =
    selectedDay === 1
      ? LaughMusicStageTTDay1
      : LaughMusicStageTTDay2;

  return (
    <>
      {/* 日付切り替え */}
      <LaughMusicDate onDayChange={setSelectedDay} />

      {/* タイムテーブル */}
      <div className="LaughMusic-background-box">
        <LaughMusicStageTT data={timetableData} />
      </div>
    </>
  );
};

export default LaughMusicStageScheduleSection;
