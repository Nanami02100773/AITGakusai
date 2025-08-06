"use client";
import React, { useState } from "react";
import Date from "./Date";
import StageTT from "./StageTT";
import SpeakerIntroduction from "./SpeakerIntroduction";
import StageTTdata from "./data/StageTTdata";
import StageTTdata2 from "./data/StageTTdata2";

const StageTTWrapper = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const currentData = selectedDay === 1 ? StageTTdata : StageTTdata2;

  return (
    <>
      {/* ✅ ボタンは外側（白背景） */}
      <Date onDayChange={handleDayChange} />

      {/* ✅ こっちはグレー背景に含める */}
      <div className="background-box">
        <StageTT data={currentData} />
        <SpeakerIntroduction />
      </div>
    </>
  );
};

export default StageTTWrapper;
