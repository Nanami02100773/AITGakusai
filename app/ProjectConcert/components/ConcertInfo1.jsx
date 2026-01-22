import React from "react";
import "./ConcertInfo.css";

export default function ConcertArtist() {
  return (
    <section className="Concert-root">

      {/* セクションタイトル */}
      <div className="Concert-section-title">
        出演者様
      </div>

      {/* アーティスト名 */}
      <div className="Concert-name">
        アーティスト名
      </div>

      {/* カード */}
      <div className="Concert-card">

        {/* 画像エリア */}
        <div className="Concert-image">
          {/* <img src="" alt="artist" /> */}
        </div>

        {/* 紹介文 */}
        <div className="Concert-description">
          <div className="Concert-description-inner">
            紹介文がここに入ります。紹介文がここに入ります。
          </div>
        </div>

      </div>

      {/* SNS */}
      <div className="Concert-sns-title">
        公式SNS
      </div>

      <div className="Concert-sns">
        <span>X</span>
        <span>Instagram</span>
        <span>LINE</span>
        <span>YouTube</span>
      </div>

    </section>
  );
}
