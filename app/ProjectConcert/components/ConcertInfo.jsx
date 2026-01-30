"use client";

import React from "react";
import "./ConcertInfo.css";

// 表示コンポーネント
import ArtistListDay from "./ArtistListDay";

// data
import ArtistListData from "./data/ArtistListData";

const ConcertInfo = () => {
  return (
    <div className="Concert-info">
      <ArtistListDay artists={ArtistListData} />
    </div>
  );
};

export default ConcertInfo;
