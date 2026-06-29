"use client";

import React from "react";
import "./MascotDetail.css";
import MascotCard from "./MascotCard";

const MascotDetail = () => {
  return (
    <div className="question-page">

      <div className="question-card-wrapper">

        {/* 上部装飾 */}
        <div className="question-decoration">

          <div className="question-card-white-left"></div>

          <div className="question-card-white-center"></div>

          <div className="question-top-line"></div>

          <div className="question-top-base"></div>

          <div className="question-top-dots"></div>

        </div>

      </div>

    </div>
  );
};

export default MascotDetail;