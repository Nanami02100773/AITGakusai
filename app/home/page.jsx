"use client";
import React from "react";
import NoticeSection from "./components/NoticeSection";
import Carousel from "./components/Carousel";
import Timetable from "./components/Timetable";
import AwardSection from "./components/AwardSection";
import ProfilePicture from "./components/ProfilePicture";
import NavigationBar from "./components/NavigationBar";

export default function ZentaiCarousel() {
  return (
    <div>
      <Carousel />
      <NoticeSection />
      <Timetable/>
      <AwardSection />
      <ProfilePicture/>
      <NavigationBar/>
    </div>
  );
}
