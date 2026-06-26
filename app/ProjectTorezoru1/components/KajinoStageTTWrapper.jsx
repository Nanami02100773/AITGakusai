"use client";
import React, { useState } from "react";

import KajinoDate from "./KajinoDate";
import KajinoStageTT from "./KajinoStageTT";

import KajinoStageTTDay1 from "./data/KajinoStageTTDay1";
import KajinoStageTTDay2 from "./data/KajinoStageTTDay2";

const KajinoStageTTWrapper = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const currentData =
    selectedDay === 1 ? KajinoStageTTDay1 : KajinoStageTTDay2;

  return (
    <>
      {/* グレー背景：ステージタイムテーブルのみ */}
      <div className="kajino-background-box">
        <KajinoStageTT data={currentData} />
      </div>
    </>
  );
};

export default KajinoStageTTWrapper;
