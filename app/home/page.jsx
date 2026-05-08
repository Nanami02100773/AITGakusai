"use client";

import { useEffect, useState } from "react";

import {
  Orbitron,
  M_PLUS_Rounded_1c,
} from "next/font/google";

import HeroSection from "./components/HeroSection";
import NoticeSection from "./components/NoticeSection";
import Carousel from "./components/Carousel";
import Timetable from "./components/Timetable";
import AwardSection from "./components/AwardSection";
import ProfilePicture from "./components/ProfilePicture";
import NavigationBar from "./components/NavigationBar";
import Loading from "./components/Loading";
import Maintenance from "./components/Maintenance";

/* ===== フォント ===== */
export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const rounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [isMaintenance, setIsMaintenance] = useState(false);

  const images = [
    "/images/festival1.jpg",
    "/images/festival2.jpg",
    "/images/festival3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const checkSystem = async () => {
      try {
        await new Promise((resolve) =>
          setTimeout(resolve, 2000)
        );

        const systemError = false;

        if (systemError) {
          setIsMaintenance(true);
        }
      } catch {
        setIsMaintenance(true);
      } finally {
        setLoading(false);
      }
    };

    checkSystem();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(
        (prev) => (prev + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  if (loading) return <Loading />;
  if (isMaintenance) return <Maintenance />;

  return (
    <div className={rounded.className}>
      <HeroSection image={images[index]} />

      <Carousel />

      <NoticeSection />

      <Timetable />

      <AwardSection />

      <ProfilePicture />

      <NavigationBar />
    </div>
  );
}