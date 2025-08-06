"use client";
import React from "react";
import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import Gauge from "./components/Gauge"
import DescriptionBox from "./components/DescriptionBox";
import DetailTable from "./components/DetailTable";
import NavigationBar from "./components/NavigationBar";

import img1 from "./components/images/スクリーンショット (1).png";
import img2 from "./components/images/スクリーンショット 2024-06-12 110056.png";
import img3 from "./components/images/スクリーンショット 2024-07-03 114934.png";

export default function Page() {
  return (
    <div>
      <Title/>
      <ImageCarousel images={[img1, img2, img3]} />
      <DescriptionBox />
      <DetailTable />
        <Gauge/>
      <NavigationBar />
    </div>
  );
}