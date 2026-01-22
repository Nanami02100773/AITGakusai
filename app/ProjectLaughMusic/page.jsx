"use client";
import React from "react";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import NavigationBar from "./components/NavigationBar";
import DetailTable from "./components/DetailTable";
import LaughMusicStageTTWrapper from "./components/LaughMusicStageTTWrapper";
import LaughMusicGameCorner from "./components/LaughMusicGameCorner";
import LaughMusicInfo from "./components/LaughMusicInfo"; // ← 追加

import img1 from "./components/images/スクリーンショット (1).png";
import img2 from "./components/images/スクリーンショット 2024-06-12 110056.png";
import img3 from "./components/images/スクリーンショット 2024-07-03 114934.png";

export default function Page() {
  return (
    <main>
      <Title text="Laugh＆Music" />

      <ImageCarousel images={[img1, img2, img3]} />

      <DescriptionBox />

      <NavigationBar />

      <DetailTable />

      {/* Day切り替え + ステージTT */}
      <LaughMusicStageTTWrapper />

       {/* 出演者紹介 */}
      <LaughMusicInfo />

      {/* ゲームコーナー */}
      <LaughMusicGameCorner />
    </main>
  );
}
