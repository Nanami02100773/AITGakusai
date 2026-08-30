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

            {/* スタンプポイント画像 */}
            <div className="StampRally-image-box">
              <img
                src="/ProjectStamp/StampPoint.svg"
                alt="スタンプポイント"
                className="StampRally-image"
              />
            </div>

            {/* 説明文 */}
            <p className="StampRally-description">
              ★の位置がスタンプポイントです
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default StampRally;