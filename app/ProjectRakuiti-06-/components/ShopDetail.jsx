"use client";

import React, { useState } from "react";
import "./ShopDetail.css";

function ShopDetail06() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="Rakuiti-06-shop-detail">
      <div className="Rakuiti-06-shop-icon-area"></div>

      <div className="Rakuiti-06-shop-name">模擬店名</div>
      <div className="Rakuiti-06-shop-org">出展団体</div>

      <div className="Rakuiti-06-shop-tabs">
        <div
          className={`Rakuiti-06-tab ${
            activeTab === "intro" ? "Rakuiti-06-tab-active" : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-06-tab ${
            activeTab === "menu" ? "Rakuiti-06-tab-active" : ""
          }`}
          onClick={() => setActiveTab("menu")}
        >
          メニュー
        </div>
      </div>

      {activeTab === "intro" && (
        <div className="Rakuiti-06-shop-description">
          <p>ここに紹介文が入ります。</p>

          <div className="Rakuiti-06-shop-focus">
            <h3 className="Rakuiti-06-shop-focus-title">お店の紹介</h3>

            <div className="Rakuiti-06-shop-focus-images">
              <div className="Rakuiti-06-image-box"></div>
              <div className="Rakuiti-06-image-box"></div>
              <div className="Rakuiti-06-image-box"></div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "menu" && (
        <div className="Rakuiti-06-shop-menu">
          <div className="Rakuiti-06-menu-sheet">
            <div className="Rakuiti-06-menu-col Rakuiti-06-menu-col-left">
              <div className="Rakuiti-06-menu-row">たこ焼き</div>
              <div className="Rakuiti-06-menu-row">―――</div>
              <div className="Rakuiti-06-menu-row">―――</div>
              <div className="Rakuiti-06-menu-row">―――</div>
            </div>

            <div className="Rakuiti-06-menu-line"></div>

            <div className="Rakuiti-06-menu-col Rakuiti-06-menu-col-right">
              <div className="Rakuiti-06-menu-row">100円</div>
              <div className="Rakuiti-06-menu-row">200円</div>
              <div className="Rakuiti-06-menu-row">―――円</div>
              <div className="Rakuiti-06-menu-row">―――円</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopDetail06;
