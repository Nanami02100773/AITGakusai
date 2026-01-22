"use client";

import React from "react";
import "./StampPoint.css";

function StampRally() {
  return (
    <section className="StampRally-section">
      {/* タイトル */}
      <div className="StampRally-section-title">
        スタンプポイント
      </div>

      {/* リスト */}
      <div className="StampRally-list">
        <div className="StampRally-item">
          <div className="StampRally-card">
            
            {/* 画像差し込み用 白いボックス */}
            <div className="StampRally-image-box">
              IMAGE
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default StampRally;
