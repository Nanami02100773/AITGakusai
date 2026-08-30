"use client";
import React from "react";
import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
// もしファイル名が DescriptionBox.jsx の場合：
import DescriptionBox from "./components/DescriptionBox";
import DetailTable from "./components/DetailTable";
import IntroductoryItems from "./components/IntroductoryItems";
import NavigationBar from "./components/NavigationBar";


export default function Page() {
  return (
    <div className="koukaten">
      <Title/>
      <ImageCarousel />
      <DescriptionBox />
      <DetailTable />
      <IntroductoryItems />
      <NavigationBar />
    </div>
  );
}
