"use client";

import React, { useState } from "react";
import "./ShopDetail.css";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="Rakuiti-01-shop-detail">
      {/* 画像エリア */}
      <div className="Rakuiti-01-shop-icon-area"></div>

      {/* 店名 */}
      <div className="Rakuiti-01-shop-name">模擬店名</div>
      <div className="Rakuiti-01-shop-org">出展団体</div>

      {/* タブ */}
      <div className="Rakuiti-01-shop-tabs">
        <div
          className={`Rakuiti-01-tab ${
            activeTab === "intro" ? "Rakuiti-01-tab-active" : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-01-tab ${
            activeTab === "menu" ? "Rakuiti-01-tab-active" : ""
          }`}
          onClick={() => setActiveTab("menu")}
        >
          メニュー
        </div>
      </div>

      {/* 紹介文 */}
      {activeTab === "intro" && (
        <div className="Rakuiti-01-shop-description">
          <p>ここに紹介文が入ります。</p>

          {/* お店の紹介 */}
          <div className="Rakuiti-01-shop-focus">
            <h3 className="Rakuiti-01-shop-focus-title">お店の紹介</h3>

            <div className="Rakuiti-01-shop-focus-images">
              <div className="Rakuiti-01-image-box"></div>
              <div className="Rakuiti-01-image-box"></div>
              <div className="Rakuiti-01-image-box"></div>
            </div>
          </div>
        </div>
      )}

      {/* メニュー */}
      {activeTab === "menu" && (
        <div className="Rakuiti-01-shop-menu">
          <div className="Rakuiti-01-menu-sheet">
            <div className="Rakuiti-01-menu-col Rakuiti-01-menu-col-left">
              <div className="Rakuiti-01-menu-row">たこ焼き</div>
              <div className="Rakuiti-01-menu-row">―――</div>
              <div className="Rakuiti-01-menu-row">―――</div>
              <div className="Rakuiti-01-menu-row">―――</div>
            </div>

            <div className="Rakuiti-01-menu-line"></div>

            <div className="Rakuiti-01-menu-col Rakuiti-01-menu-col-right">
              <div className="Rakuiti-01-menu-row">100円</div>
              <div className="Rakuiti-01-menu-row">200円</div>
              <div className="Rakuiti-01-menu-row">―――円</div>
              <div className="Rakuiti-01-menu-row">―――円</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopDetail;
