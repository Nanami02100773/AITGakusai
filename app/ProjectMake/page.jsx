"use client";

import React from "react";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import DetailTable from "./components/DetailTable";
import NavigationBar from "./components/NavigationBar";
import BoothIntroduction from "./components/BoothIntroduction";


export default function Page() {

  return (
    <div>

      <div>

        <Title />

        <ImageCarousel />

        <DescriptionBox />

        <DetailTable />

        <NavigationBar />

        <BoothIntroduction />

      </div>

    </div>
  );
}