"use client";

import React from "react";

import NoticeSection from "./components/NoticeSection";
import NavigationBar from "./components/NavigationBar";
import StageScheduleSection from "./components/StageScheduleSection";

import "./global.css";

export default function App() {
  return (
    <div>
      <NoticeSection />
      <NavigationBar />
    
      <StageScheduleSection />
    </div>
  );
}
