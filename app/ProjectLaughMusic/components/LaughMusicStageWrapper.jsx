"use client";
import "./LaughMusicStageWrapper.css";

import { useState } from "react";

import LaughMusicDate from "./LaughMusicDate";
import LaughMusicStageTT from "./LaughMusicStageTT";
import LaughMusicCast from "./LaughMusicCast";


import LaughMusicCastDay1 from "./data/LaughMusicCastDay1";
import LaughMusicCastDay2 from "./data/LaughMusicCastDay2";

const LaughMusicStageWrapper = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const artists =
    selectedDay === 1
      ? LaughMusicCastDay1
      : LaughMusicCastDay2;

return (
  <>
    <LaughMusicDate
      selectedDay={selectedDay}
      onDayChange={setSelectedDay}
    />

    <div className="LaughMusic-content-box">
      <LaughMusicStageTT
        selectedDay={selectedDay}
      />

      <LaughMusicCast
        artists={artists}
      />
    </div>
  </>
);
};

export default LaughMusicStageWrapper;