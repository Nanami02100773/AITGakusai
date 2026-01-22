"use client";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import StandbyScreen from "./components/StandbyScreen"; // ← 追加

const App = () => {
  return (
    <div>
      <NavigationBar />
      <StandbyScreen /> {/* ← 呼び出し */}
    </div>
  );
};

export default App;
