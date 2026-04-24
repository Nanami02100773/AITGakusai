"use client";

import React from "react";
import NoticeSection from "./components/NoticeSection";
import NavigationBar from "./components/NavigationBar";
import StageScheduleSection from "./components/StageScheduleSection";

import "./global.css";
import StageTitle from "./components/StageTitle";

export default function App() {
  return (
    <div>
      <StageTitle/>
      <NoticeSection />
      <NavigationBar />
      <StageScheduleSection />
    </div>
  );
}
