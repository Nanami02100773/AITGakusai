"use client";

import React from "react";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import DetailTable from "./components/DetailTable";
import NavigationBar from "./components/NavigationBar";

import KouyasaiGame from "./components/KouyasaiGame";
import KouyasaiStageTT from "./components/KouyasaiStageTT";


export default function Page() {
  return (
    <div className="kouyasai-page">

      <Title />

      <ImageCarousel />

      <DescriptionBox />

      <DetailTable />

      <KouyasaiStageTT />

      <KouyasaiGame />

      <NavigationBar />

    </div>
  );
}