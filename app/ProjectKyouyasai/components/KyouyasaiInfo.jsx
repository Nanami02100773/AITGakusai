"use client";

import React from "react";
import "./KyouyasaiInfo.css";

import KyouyasaiCast from "./KyouyasaiCast";
import KyouyasaiData from "./data/KyouyasaiData";

const KyouyasaiInfo = () => {
  return (
    <div className="kyouyasai-info">
      <KyouyasaiCast artists={KyouyasaiData} />
    </div>
  );
};

export default KyouyasaiInfo;
