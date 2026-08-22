"use client";

import React, { useState, useEffect } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

function ShopDetail() {
const [activeTab, setActiveTab] = useState("intro");

useEffect(() => {
window.scrollTo(0, 0);
}, []);

return ( <div className="Rakuiti-04-shop-detail">


  {/* ヘッダー画像 */}
  <div className="Rakuiti-04-shop-icon-area"></div>

  {/* 店名 */}
  <div className="Rakuiti-04-shop-name">
    模擬店名
  </div>

  {/* 出展団体 */}
  <div className="Rakuiti-04-shop-org">
    出展団体
  </div>

  {/* タブ */}
  <div className="Rakuiti-04-shop-tabs">

    <div
      className={`Rakuiti-04-tab ${
        activeTab === "intro"
          ? "Rakuiti-04-tab-active"
          : ""
      }`}
      onClick={() => setActiveTab("intro")}
    >
      紹介文
    </div>

    <div
      className={`Rakuiti-04-tab ${
        activeTab === "menu"
          ? "Rakuiti-04-tab-active"
          : ""
      }`}
      onClick={() => setActiveTab("menu")}
    >
      メニュー
    </div>

  </div>

  {/* 紹介文 */}
  {activeTab === "intro" && (
    <div className="Rakuiti-04-shop-description">

      <p>
        ここに紹介文が入ります。
      </p>

      <div className="Rakuiti-04-shop-focus">

        <h3 className="Rakuiti-04-shop-focus-title">
          お店の紹介
        </h3>

        <div className="Rakuiti-04-shop-focus-images">

          <div className="Rakuiti-04-image-box">
            <img src="/shop/1.jpg" alt="" />
          </div>

          <div className="Rakuiti-04-image-box">
            <img src="/shop/2.jpg" alt="" />
          </div>

          <div className="Rakuiti-04-image-box">
            <img src="/shop/3.jpg" alt="" />
          </div>

          <div className="Rakuiti-04-image-box">
            <img src="/shop/4.jpg" alt="" />
          </div>

          <div className="Rakuiti-04-image-box">
            <img src="/shop/5.jpg" alt="" />
          </div>

        </div>

      </div>

    </div>
  )}

{/* メニュー */}
{activeTab === "menu" && (
  <div className="Rakuiti-04-shop-menu">
    <div className="Rakuiti-04-menu-sheet">

      <div className="Rakuiti-04-menu-col Rakuiti-04-menu-col-left">
        {MenuData.map((item, index) => (
          <div
            key={index}
            className="Rakuiti-04-menu-row"
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="Rakuiti-04-menu-line"></div>

      <div className="Rakuiti-04-menu-col Rakuiti-04-menu-col-right">
        {MenuData.map((item, index) => (
          <div
            key={index}
            className="Rakuiti-04-menu-row"
          >
            {item.price}円
          </div>
        ))}
      </div>

    </div>
  </div>
)}

</div>

);
}

export default ShopDetail;
