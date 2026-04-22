"use client";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import NoticeSection from "./components/NoticeSection";
import Carousel from "./components/Carousel";
import Timetable from "./components/Timetable";
import AwardSection from "./components/AwardSection";
import ProfilePicture from "./components/ProfilePicture";
import NavigationBar from "./components/NavigationBar";
import Loading from "./components/Loading";
import Maintenance from "./components/Maintenance";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [isMaintenance, setIsMaintenance] = useState(false);

  // 👇 追加（画像切り替え用）
  const images = [
    "/images/festival1.jpg",
    "/images/festival2.jpg",
    "/images/festival3.jpg"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const checkSystem = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

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

  // 👇 自動で画像切り替え（いらなければ消してOK）
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  if (loading) return <Loading />;
  if (isMaintenance) return <Maintenance />;

  return (
    <div>
      {/* 👇 ここが今回の本命 */}
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