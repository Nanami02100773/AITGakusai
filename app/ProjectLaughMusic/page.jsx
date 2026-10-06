"use client";

import React from "react";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import NavigationBar from "./components/NavigationBar";
import DetailTable from "./components/DetailTable";
import LaughMusicStageWrapper from "./components/LaughMusicStageWrapper";
import LaughMusicGameCorner from "./components/LaughMusicGameCorner";

export default function Page() {
  return (
    <main>
      <Title text="Laugh＆Music" />

      <ImageCarousel />

      <DescriptionBox />

      <NavigationBar />

      <DetailTable />

      {/* Day切り替え + ステージTT */}
      <LaughMusicStageWrapper />

      <LaughMusicGameCorner />
    </main>
  );
}