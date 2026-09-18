"use client";

import React from "react";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import DetailTable from "./components/DetailTable";
import ConcertInfo from "./components/ConcertInfo";
import NavigationBar from "./components/NavigationBar";


export default function Page() {
  return (
    <div>
      <Title />

      <ImageCarousel />

      <DescriptionBox />

      <DetailTable />

      <ConcertInfo />

      <NavigationBar />
    </div>
  );
}