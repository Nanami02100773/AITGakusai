"use client";

import React from "react";

import Title from "./components/Title";
import ImageCarousel from "./components/ImageCarousel";
import DescriptionBox from "./components/DescriptionBox";
import DetailTable from "./components/DetailTable";
import NavigationBar from "./components/NavigationBar";

// import KyouyasaiCast from "./components/KyouyasaiCast";
import KyouyasaiGame from "./components/KyouyasaiGame";
import KyouyasaiStageTT from "./components/KyouyasaiStageTT";

import img1 from "./components/images/No.1.jpg";
import img2 from "./components/images/No.2.jpg";
import img3 from "./components/images/No.3.jpg";


export default function Page() {

  return (
    <div className="kyouyasai-page">

      <Title />

      <ImageCarousel
        images={[
          img1.src,
          img2.src,
          img3.src,
        ]}
      />

      <DescriptionBox />

      <DetailTable />

      <KyouyasaiStageTT />

      {/* <KyouyasaiCast /> */}

      <KyouyasaiGame />

      <NavigationBar />

    </div>
  );
}