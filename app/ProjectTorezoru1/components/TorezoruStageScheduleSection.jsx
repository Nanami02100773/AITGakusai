"use client";
import React, { useState } from "react";

import TorezoruDate from "./TorezoruDate";
import TorezoruDayStageTT from "./TorezoruDayStageTT";

import TorezoruStageTTDay1 from "./data/TorezoruStageTTDay1";
import TorezoruStageTTDay2 from "./data/TorezoruStageTTDay2";

const TorezoruStageScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const timetableData =
    selectedDay === 1 ? TorezoruStageTTDay1 : TorezoruStageTTDay2;

  return (
    <>
      {/* 日付切り替え */}
      <TorezoruDate onDayChange={handleDayChange} />

      {/* 日別で切り替わるステージタイムテーブル */}
      <div className="Torezoru-background-box">
        <TorezoruDayStageTT data={timetableData} />
      </div>
    </>
  );
};

export default TorezoruStageScheduleSection;
