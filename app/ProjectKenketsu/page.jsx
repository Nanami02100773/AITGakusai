"use client";

import React from "react";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import DetailTable from "./components/DetailTable";
import Gauge from "./components/Gauge";
import NavigationBar from "./components/NavigationBar";


export default function Page() {

  return (
    <div>

      <Title />

      <ImageCarousel />

      <DescriptionBox />

      <DetailTable />

      <Gauge />

      <NavigationBar />

    </div>
  );
}