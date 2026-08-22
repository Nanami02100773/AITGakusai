"use client";

import React from "react";
import { M_PLUS_Rounded_1c } from "next/font/google";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import DetailTable from "./components/DetailTable";
import StampPoint from "./components/StampPonit";
import NavigationBar from "./components/NavigationBar";

import img1 from "./components/images/スクリーンショット (1).png";
import img2 from "./components/images/スクリーンショット 2024-06-12 110056.png";
import img3 from "./components/images/スクリーンショット 2024-07-03 114934.png";

const rounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function Page() {
  return (
    <div className={rounded.className}>
      <Title />
      <ImageCarousel images={[img1, img2, img3]} />
      <DescriptionBox />
      <DetailTable />
      <StampPoint />
      <NavigationBar />
    </div>
  );
}