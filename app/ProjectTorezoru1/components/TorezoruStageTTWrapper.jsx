"use client";
import React, { useState } from "react";

import TorezoruDate from "./TorezoruDate";
import TorezoruStageTT from "./TorezoruStageTT";

import TorezoruStageTTDay1 from "./data/TorezoruStageTTDay1";
import TorezoruStageTTDay2 from "./data/TorezoruStageTTDay2";

const TorezoruStageTTWrapper = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const currentData =
    selectedDay === 1 ? TorezoruStageTTDay1 : TorezoruStageTTDay2;

  return (
    <>
      {/* 日付切り替え（白背景）
      <TorezoruDate onDayChange={handleDayChange} /> */}

      {/* グレー背景：ステージタイムテーブルのみ */}
      <div className="Torezoru-background-box">
        <TorezoruStageTT data={currentData} />
      </div>
    </>
  );
};

export default TorezoruStageTTWrapper;
