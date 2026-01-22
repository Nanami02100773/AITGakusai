"use client";
import React, { useState } from "react";

import Date from "./Date";
import DayStageTimetable from "./DayStageTimetable";
import DaySpeakerList from "./DaySpeakerList";

import StageTTdataDay1 from "./data/StageTTdata";
import StageTTdataDay2 from "./data/StageTTdata2";

import SpeakerDataDay1 from "./data/SpeakerDataDay1";
import SpeakerDataDay2 from "./data/SpeakerDataDay2";

const StageScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const timetableData =
    selectedDay === 1 ? StageTTdataDay1 : StageTTdataDay2;

  const speakerData =
    selectedDay === 1 ? SpeakerDataDay1 : SpeakerDataDay2;

  return (
    <>
      {/* 日付切り替え（白背景） */}
      <Date onDayChange={handleDayChange} />

      {/* 日別で切り替わるエリア */}
      <div className="background-box">
        <DayStageTimetable data={timetableData} />
        <DaySpeakerList speakers={speakerData} />
      </div>
    </>
  );
};

export default StageScheduleSection;
