"use client";

import React, { useState } from "react";

import Date from "./Date";
import StageTT from "./StageTT";
import Performer from "./Performer";

import StageTTDataDay1 from "./data/StageTTData1";
import StageTTDataDay2 from "./data/StageTTData2";

import SpeakerDataDay1 from "./data/SpeakerDataDay1";
import SpeakerDataDay2 from "./data/SpeakerDataDay2";

const StageSchedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const timetableData =
    selectedDay === 1
      ? StageTTDataDay1
      : StageTTDataDay2;

  const speakerData =
    selectedDay === 1
      ? SpeakerDataDay1
      : SpeakerDataDay2;

  return (
    <>
      {/* 日付切り替え */}
      <Date onDayChange={handleDayChange} />

      {/* 日別コンテンツ */}
      <div className="Stage-Schedule-content">
        <StageTT data={timetableData} />
        <Performer speakers={speakerData} />
      </div>
    </>
  );
};

export default StageSchedule;