"use client";
import React from "react";
import "./StageTitle.css";

const StageHeader = () => {
  return (
    <section className="stage-section">

      {/* ===== 上の写真エリア ===== */}
      <div className="stage-hero">

        <img
          src="/img/stage.jpg"
          alt="ステージ"
          className="stage-image"
        />

        {/* 👇 ここに入れる（これが超重要） */}
        <div className="stage-title">
          ステージ情報
        </div>

      </div>

      {/* ===== 下のカード ===== */}
      <div className="stage-card">
        <div className="stage-indicator"></div>
      </div>

    </section>
  );
};

export default StageHeader;