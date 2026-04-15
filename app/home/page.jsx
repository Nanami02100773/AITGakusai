"use client";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const checkSystem = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const systemError = false; // trueにするとメンテ

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

  if (loading) return <Loading />;
  if (isMaintenance) return <Maintenance />;

  return (
    <div>
      <Carousel />
      <NoticeSection />
      <Timetable />
      <AwardSection />
      <ProfilePicture />
      <NavigationBar />
    </div>
  );
}