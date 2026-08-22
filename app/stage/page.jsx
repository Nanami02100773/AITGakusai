"use client";

import { Orbitron } from "next/font/google";

import "./global.css";

import Hero from "./components/Hero";
import NoticeSection from "./components/NoticeSection";
import StageSchedule from "./components/StageSchedule";
import NavigationBar from "./components/NavigationBar";

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function Page() {
  return (
    <div>
      <Hero />

      <NoticeSection />

      <StageSchedule />

      <NavigationBar />
    </div>
  );
}