"use client";

import React from "react";
import { M_PLUS_Rounded_1c } from "next/font/google";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import DetailTable from "./components/DetailTable";
import StampPoint from "./components/StampPonit";
import NavigationBar from "./components/NavigationBar";


const rounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function Page() {
  return (
    <div className={rounded.className}>
      <Title />
      <ImageCarousel />
      <DescriptionBox />
      <DetailTable />
      <StampPoint />
      <NavigationBar />
    </div>
  );
}