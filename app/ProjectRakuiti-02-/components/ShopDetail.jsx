"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

import no2Image from "../../ProjectRakuiti/components/Group/No.2/1.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Rakuiti-02-shop-detail">

      {/* ==========================================
          ヘッダー画像
      ========================================== */}

      <div className="Rakuiti-02-shop-icon-area">

        <img
          src={no2Image.src}
          alt={`${MenuData.shopName} 画像`}
        />

      </div>


      {/* ==========================================
          店名
      ========================================== */}

      <div className="Rakuiti-02-shop-name">
        {MenuData.shopName}
      </div>


      {/* ==========================================
          出展団体
      ========================================== */}

      <div className="Rakuiti-02-shop-org">
        {MenuData.organization}
      </div>


      {/* ==========================================
          タブ
      ========================================== */}

      <div className="Rakuiti-02-shop-tabs">

        <div
          className={`Rakuiti-02-tab ${
            activeTab === "intro"
              ? "Rakuiti-02-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-02-tab ${
            activeTab === "menu"
              ? "Rakuiti-02-tab-active"
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
        <div className="Rakuiti-02-shop-description">

          <p>
            {MenuData.description}
          </p>

        </div>
      )}


      {/* ==========================================
          メニュー
      ========================================== */}

      {activeTab === "menu" && (
        <div className="Rakuiti-02-shop-menu">

          <div className="Rakuiti-02-menu-sheet">

            <div className="Rakuiti-02-menu-title">
              メニュー表
              <span>(円)</span>
            </div>


            {MenuData.menu.map((section, index) => (
              <div
                className="Rakuiti-02-menu-section"
                key={index}
              >

                <div className="Rakuiti-02-menu-type">
                  {section.type}
                </div>

                <div className="Rakuiti-02-menu-list">

                  {section.items.map((item, itemIndex) => (
                    <div
                      className="Rakuiti-02-menu-row"
                      key={itemIndex}
                    >

                      <div className="Rakuiti-02-menu-name">
                        {item.name}
                      </div>

                      <div className="Rakuiti-02-menu-dots"></div>

                      <div className="Rakuiti-02-menu-price">
                        {item.price}
                      </div>

                    </div>
                  ))}

                </div>

              </div>
            ))}


            {/* ==========================================
                メニュー注意書き
            ========================================== */}

            <div className="Rakuiti-02-menu-bottom-note">
              ※当日内容が変更されることがあります
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ShopDetail;