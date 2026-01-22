"use client";

import React from "react";
import "./KouyasaiInfo.css";

import KouyasaiCast from "./KouyasaiCast";
import KouyasaiData from "./data/KouyasaiData";

const KouyasaiInfo = () => {
  return (
    <div className="Kouyasai-info">
      <KouyasaiCast artists={KouyasaiData} />
    </div>
  );
};

export default KouyasaiInfo;
