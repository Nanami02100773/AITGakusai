"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

import no12Image1 from "../../ProjectRakuiti/components/Group/No.12/1.jpg";
import no12Image2 from "../../ProjectRakuiti/components/Group/No.12/2.jpg";
import no12Image3 from "../../ProjectRakuiti/components/Group/No.12/3.jpg";
import no12Image4 from "../../ProjectRakuiti/components/Group/No.12/4.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shopImages = [
    no12Image1,
  ];

  return (
    <div className="Rakuiti-06-shop-detail">

      {/* ==========================================
          ヘッダー画像
      ========================================== */}

      <div className="Rakuiti-06-shop-icon-area">

        <img
          src={shopImages[0].src}
          alt={`${MenuData.shopName} 画像`}
        />

      </div>


      {/* ==========================================
          店名
      ========================================== */}

      <div className="Rakuiti-06-shop-name">
        {MenuData.shopName}
      </div>


      {/* ==========================================
          出展団体
      ========================================== */}

      <div className="Rakuiti-06-shop-org">
        {MenuData.organization}
      </div>


      {/* ==========================================
          タブ
      ========================================== */}

      <div className="Rakuiti-06-shop-tabs">

        <div
          className={`Rakuiti-06-tab ${
            activeTab === "intro"
              ? "Rakuiti-06-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-06-tab ${
            activeTab === "menu"
              ? "Rakuiti-06-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("menu")}
        >
          メニュー
        </div>

      </div>


      {/* ==========================================
          紹介文
      ========================================== */}

      {activeTab === "intro" && (
        <div className="Rakuiti-06-shop-description">

          {/* ======================================
              売り物紹介
          ====================================== */}

          <div className="Rakuiti-06-shop-focus">

            <h3 className="Rakuiti-06-shop-focus-title">
              売り物紹介
            </h3>

            <p>
              {MenuData.productDescription}
            </p>


            {/* ======================================
                写真
            ====================================== */}

            <div className="Rakuiti-06-shop-focus-images">

              <div className="Rakuiti-06-image-box">
                <img
                  src={no12Image2.src}
                  alt="焼きそば"
                />
              </div>

              <div className="Rakuiti-06-image-box">
                <img
                  src={no12Image3.src}
                  alt="焼きそばパン"
                />
              </div>

              <div className="Rakuiti-06-image-box">
                <img
                  src={no12Image4.src}
                  alt="ホットドッグ"
                />
              </div>

            </div>

          </div>


          {/* ======================================
              団体紹介
          ====================================== */}

          <div className="Rakuiti-06-shop-focus">

            <h3 className="Rakuiti-06-shop-focus-title">
              団体紹介
            </h3>

            <p>
              {MenuData.organizationDescription}
            </p>

          </div>

        </div>
      )}


      {/* ==========================================
          メニュー
      ========================================== */}

      {activeTab === "menu" && (
        <div className="Rakuiti-06-shop-menu">

          <div className="Rakuiti-06-menu-sheet">

            <div className="Rakuiti-06-menu-title">
              メニュー表
            </div>


            <div className="Rakuiti-06-menu-list">

              {MenuData.menu.map((item, index) => (
                <div
                  className="Rakuiti-06-menu-row"
                  key={index}
                >

                  <div className="Rakuiti-06-menu-name">
                    {item.name}
                  </div>

                  <div className="Rakuiti-06-menu-dots"></div>

                  <div className="Rakuiti-06-menu-price">
                    {item.price}円
                  </div>

                </div>
              ))}

            </div>


            {/* ======================================
                メニュー注意書き
            ====================================== */}

            <div className="Rakuiti-06-menu-bottom-note">
              ※当日内容が変更されることがあります
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ShopDetail;