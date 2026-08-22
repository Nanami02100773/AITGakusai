"use client";
import React from "react";
import AITGuideIframe from "./AITGuideIframe";
import { Suspense } from "react";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "50px 0 70px",
      }}
    >
      <Suspense>
        <AITGuideIframe />
      </Suspense>
    </div>
  );
};

export default App;
