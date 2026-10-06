"use client";

import { useEffect, useState } from "react";

import {
  Orbitron,
  M_PLUS_Rounded_1c,
} from "next/font/google";

import Hero from "./components/Hero";
import NoticeSection from "./components/NoticeSection";
import Carousel from "./components/Carousel";
import Timetable from "./components/Timetable";
import AwardSection from "./components/AwardSection";
import Sns from "./components/Sns";
import NavigationBar from "./components/NavigationBar";
import Loading from "./components/Loading";
import Maintenance from "./components/Maintenance";
import Tutorial from "./components/Tutorial";


/* =================================================
   フォント
================================================= */

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const rounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});


/* =================================================
   表示設定
================================================= */

/*
  準備中画面を表示する
  true  → 表示
  false → 通常画面
*/
const SHOW_LOADING = false;


/*
  メンテナンス画面を表示する
  true  → 表示
  false → 通常画面
*/
const SHOW_MAINTENANCE = false;


/*
  ※両方 true にした場合は
  メンテナンス画面を優先します
*/


export default function Page() {

  /* =================================================
     ヒーロー画像
  ================================================= */

  const images = [
    "/images/festival1.jpg",
    "/images/festival2.jpg",
    "/images/festival3.jpg",
  ];

  const [index, setIndex] = useState(0);


  /* =================================================
     カルーセル
  ================================================= */

  useEffect(() => {

    const timer = setInterval(() => {

      setIndex(
        (prev) => (prev + 1) % images.length
      );

    }, 4000);

    return () => clearInterval(timer);

  }, [images.length]);


  /* =================================================
     メンテナンス
  ================================================= */

  if (SHOW_MAINTENANCE) {
    return <Maintenance />;
  }


  /* =================================================
     準備中
  ================================================= */

  if (SHOW_LOADING) {
    return <Loading />;
  }


  /* =================================================
     通常ホーム画面
  ================================================= */

  return (
    <div className={rounded.className}>

      <Hero image={images[index]} />

      <Carousel />

      <NoticeSection />

      <Timetable />

      <AwardSection />

      <Sns />

      <NavigationBar />

      {/* ===== チュートリアル ===== */}

      <Tutorial />

    </div>
  );
}