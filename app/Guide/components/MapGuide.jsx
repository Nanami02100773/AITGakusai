"use client";

import "./MapGuide.css";

export default function MapGuide() {
  return (
    <section className="map-guide">

      {/* タイトル */}
      <div className="map-guide-header">
        <div className="map-guide-number">
          05
        </div>

        <h2>マップ</h2>
      </div>

      {/* 画像 */}
      <div className="map-guide-image">
        <img
          src="/guide/map.png"
          alt="マップ画面"
        />
      </div>

      {/* 説明 */}
      <ul className="map-guide-list">
        <li>企画場所をマップで確認できます。</li>
        <li>現在地を確認できます。</li>
        <li>ピンをタップすると詳細を表示できます。</li>
      </ul>

    </section>
  );
}