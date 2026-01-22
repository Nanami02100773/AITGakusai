"use client";
import React from "react";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // 縦に並べる
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ fontSize: "24px", marginBottom: "10px" }}>準備中</div>
      <div style={{ fontSize: "16px", color: "gray" }}>時間がなくて今年は無理なので、来年までに実装できるように頑張る予定</div>
    </div>
  );
};

export default App;
