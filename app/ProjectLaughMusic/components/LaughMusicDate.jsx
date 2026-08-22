"use client";

import "./LaughMusicDate.css";

const LaughMusicDate = ({
  selectedDay,
  onDayChange,
}) => {
  return (
    <div className="LaughMusicDate-toggle">
      <button
        className={selectedDay === 1 ? "active" : ""}
        onClick={() => onDayChange(1)}
      >
        Day1
      </button>

      <button
        className={selectedDay === 2 ? "active" : ""}
        onClick={() => onDayChange(2)}
      >
        Day2
      </button>
    </div>
  );
};

export default LaughMusicDate;