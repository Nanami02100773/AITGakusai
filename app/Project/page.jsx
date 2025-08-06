"use client";
import React from "react";
import DetailTable from "./components/DetailTable";
import DescriptionBox from "./components/DescriptionBox";
import ImageCarousel from "./components/ImageCarousel";
import NavigationBar from "./components/NavigationBar";
// import ProjectCard from "./components/ProjectCard";
// import Title from "./components/Title";
import img1 from "./components/images/スクリーンショット (1).png";
import img2 from "./components/images/スクリーンショット 2024-06-12 110056.png";
import img3 from "./components/images/スクリーンショット 2024-07-03 114934.png";

export default function App() {
  const descriptionText = "ここに企画の説明が入ります。企画の内容や目的、参加方法などを詳しく説明します。例えば、スタンプラリーでは、参加者が指定された場所を訪れてスタンプを集めることで、特典を得ることができます。また、工科展では、学生たちの研究やプロジェクトを展示し、来場者に技術やアイデアを紹介します。各企画の詳細は、公式ウェブサイトやSNSで随時更新されますので、ぜひチェックしてください！";
  const details = [
    { label: "場所", value: "〇〇教室" },
    { label: "時間", value: "10:00～16:00" },
    { label: "注意事項", value: "特になし" }
  ];

  return (
    <div>
      <ImageCarousel images={[
        img1,
        img2,
        img3
      ]}/>
      <DescriptionBox text={descriptionText} />
      <DetailTable details={details} />
      <NavigationBar/>
      {/* <ProjectCard title="プロジェクト名" /> */}
      {/* <Title/> */}
    </div>
  );
}
