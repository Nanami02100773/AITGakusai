"use client";

import React from "react";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import NavigationBar from "./components/NavigationBar";
import DetailTable from "./components/DetailTable";
import KajinoStageTTWrapper from "./components/KajinoStageTTWrapper";
import Game from "./components/Game";


export default function Page() {

  return (
    <main className="kajino-page">

      <Title />

      <ImageCarousel />

      <DescriptionBox />

      <NavigationBar />

      <DetailTable />

      {/* ▼ Day切り替え＋ステージTT */}

      <KajinoStageTTWrapper />

      <Game />

    </main>
  );
}
