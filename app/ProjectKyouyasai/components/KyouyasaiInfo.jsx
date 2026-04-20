"use client";

import React from "react";
import "./KyouyasaiInfo.css";

import KyouyasaiCast from "./KyouyasaiCast";
import KyouyasaiData from "./data/KyouyasaiData";

const KyouyasaiInfo = () => {
  return (
    <section className="Kyouyasai-info">
      {/* タイトル */}
      <h2 className="Kyouyasai-section-title">出演者様紹介</h2>

      {/* グレーボックス */}
      <div className="Kyouyasai-scroll-area">
        <KyouyasaiCast artists={KyouyasaiData} />
      </div>
    </section>
  );
};

export default KyouyasaiInfo;