"use client";
import React from "react";
import ProjectCardList from "./components/ProjectCard";
import NavigationBar from "./components/NavigationBar";
import Title from "./components/Title";

export default function App() {
  return (
    <div>
      <div className="scroll-area">
        <Title/>
        <ProjectCardList />
      </div>
      <NavigationBar />
    </div>
  );
}
