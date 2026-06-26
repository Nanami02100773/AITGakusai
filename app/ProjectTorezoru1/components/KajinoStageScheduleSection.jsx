"use client";
import React, { useState } from "react";

import KajinoDate from "./KajinoDate";
import KajinoDayStageTT from "./KajinoDayStageTT";

import KajinoStageTTDay1 from "./data/KajinoStageTTDay1";
import KajinoStageTTDay2 from "./data/KajinoStageTTDay2";

const KajinoStageScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const timetableData =
    selectedDay === 1 ? KajinoStageTTDay1 : KajinoStageTTDay2;

  return (
    <>
      {/* 日付切り替え */}
      <KajinoDate onDayChange={handleDayChange} />

      {/* 日別で切り替わるステージタイムテーブル */}
      <div className="kajino-background-box">
        <KajinoDayStageTT data={timetableData} />
      </div>
    </>
  );
};

export default KajinoStageScheduleSection;
