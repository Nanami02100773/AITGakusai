"use client";

import React from "react";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import DetailTable from "./components/DetailTable";
import NavigationBar from "./components/NavigationBar";

import KouyasaiInfo from "./components/KouyasaiInfo";
import KouyasaiGame from "./components/KouyasaiGame";
import KouyasaiStageTT from "./components/KouyasaiStageTT";

import img1 from "./components/images/スクリーンショット (1).png";
import img2 from "./components/images/スクリーンショット 2024-06-12 110056.png";
import img3 from "./components/images/スクリーンショット 2024-07-03 114934.png";

export default function Page() {
  return (
    <div className="kouyasai-page">
      <Title />

      <ImageCarousel images={[img1, img2, img3]} />

      <DescriptionBox />
      <DetailTable />
      <KouyasaiStageTT />
      <KouyasaiInfo />
      <KouyasaiGame />

      <NavigationBar />
    </div>
  );
}
