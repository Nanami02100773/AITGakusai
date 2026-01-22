"use client";
import React, { useState, useEffect } from "react";
import "./LaughMusicDate.css";

const LaughMusicDate = ({ onDayChange }) => {
  const [selectedDay, setSelectedDay] = useState(1);

  useEffect(() => {
    if (typeof onDayChange === "function") {
      onDayChange(selectedDay);
    }
  }, [selectedDay, onDayChange]);

  return (
    <div className="LaughMusicDate-toggle">
      <button
        className={selectedDay === 1 ? "active" : ""}
        onClick={() => setSelectedDay(1)}
      >
        1日目
      </button>
      <button
        className={selectedDay === 2 ? "active" : ""}
        onClick={() => setSelectedDay(2)}
      >
        2日目
      </button>
    </div>
  );
};

export default LaughMusicDate;
