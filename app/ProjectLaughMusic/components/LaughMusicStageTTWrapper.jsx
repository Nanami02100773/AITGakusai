"use client";
import React, { useState } from "react";

import LaughMusicDate from "./LaughMusicDate";
import LaughMusicStageTT from "./LaughMusicStageTT";

import LaughMusicStageTTDay1 from "./data/LaughMusicStageTTDay1";
import LaughMusicStageTTDay2 from "./data/LaughMusicStageTTDay2";

const LaughMusicStageTTWrapper = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const currentData =
    selectedDay === 1
      ? LaughMusicStageTTDay1
      : LaughMusicStageTTDay2;

  return (
    <>
      {/* グレー背景：ステージタイムテーブル */}
      <div className="LaughMusic-background-box">
        <LaughMusicStageTT data={currentData} />
      </div>
    </>
  );
};

export default LaughMusicStageTTWrapper;
