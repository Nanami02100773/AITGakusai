"use client";

import React from "react";
import Faq from "./components/Faq";
import NavigationBar from "./components/NavigationBar";
import MascotDetail from "./components/MascotDetail";
import MascotCard from "./components/MascotCard";


function App() {
  return (
    <div>
      <Faq />
      <NavigationBar />
      <MascotDetail />
      <MascotCard />
    </div>
  );
}

export default App;