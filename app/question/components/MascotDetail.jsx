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

          {/* 左白パーツ */}
          <div className="question-card-white-left"></div>

          {/* 青い斜めパーツ（追加） */}
          <div className="question-card-blue-center"></div>

          {/* 白い斜めパーツ */}
          <div className="question-card-white-center"></div>

          {/* 斜めライン */}
          <div className="question-top-line"></div>

          {/* 青い台座 */}
          <div className="question-top-base"></div>

          {/* 水色ストライプ */}
          <div className="question-top-dots"></div>

        </div>

  

      </div>

    </div>
  );
};

export default MascotDetail;