"use client";

import React from "react";
import "./MascotDetail.css";

const MascotDetail = () => {
  return (
    <div className="Question-MascotDetail-page">

      <div className="Question-MascotDetail-card-wrapper">

        {/* 上部装飾 */}
        <div className="Question-MascotDetail-decoration">

          {/* 左白パーツ */}
          <div className="Question-MascotDetail-card-white-left"></div>

          {/* 青い斜めパーツ */}
          <div className="Question-MascotDetail-card-blue-center"></div>

          {/* 白い斜めパーツ */}
          <div className="Question-MascotDetail-card-white-center"></div>

          {/* 斜めライン */}
          <div className="Question-MascotDetail-top-line"></div>

          {/* 青い台座 */}
          <div className="Question-MascotDetail-top-base"></div>

          {/* 水色ストライプ */}
          <div className="Question-MascotDetail-top-dots"></div>

        </div>

      </div>

    </div>
  );
};

export default MascotDetail;