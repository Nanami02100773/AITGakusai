"use client";
import React from "react";
import AITGuideIframe from "./AITGuideIframe";
import { Suspense } from "react";

const App = () => {
  return (
    <div
  style={{
    height: "100vh",
    padding: "60px 0 90px",
    boxSizing: "border-box",
  }}
>
      <Suspense>
        <AITGuideIframe />
      </Suspense>
    </div>
  );
};

export default App;
