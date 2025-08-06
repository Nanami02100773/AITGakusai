"use client";
import React from "react";
import NoticeSection from "./components/NoticeSection";
import NavigationBar from "./components/NavigationBar";
import StageTTWrapper from "./components/StageTTWrapper";
import "./global.css";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'

function App() {
  const [restart, setRestrat] = useState('');
  const pathname = usePathname()

  useEffect(() => {
    // 毎回初期化
    setRestrat('');
  }, [pathname]);

  return (
    <div>
      <NoticeSection />
      <NavigationBar />
      <StageTTWrapper />
    </div>
  );
}

export default App;
