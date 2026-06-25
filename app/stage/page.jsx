"use client";

import { Orbitron } from "next/font/google";

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "800"],
});

import NoticeSection from "./components/NoticeSection";
import NavigationBar from "./components/NavigationBar";
import StageScheduleSection from "./components/StageScheduleSection";

import "./global.css";
import StageTitle from "./components/StageTitle";

export default function App() {
  return (
    <div>
      <StageTitle />
      <NoticeSection />
      <NavigationBar />
      <StageScheduleSection />
    </div>
  );
}