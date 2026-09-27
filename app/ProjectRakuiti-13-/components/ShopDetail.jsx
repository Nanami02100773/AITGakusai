"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

import no13Image from "../../ProjectRakuiti/components/Group/No.13/1.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Rakuiti-13-shop-detail">

      {/* ==========================================
          ヘッダー画像
      ========================================== */}

      <div className="Rakuiti-13-shop-icon-area">

        <img
          src={no13Image.src}
          alt={`${MenuData.shopName} 画像`}
        />

      </div>


      {/* ==========================================
          店名
      ========================================== */}

      <div className="Rakuiti-13-shop-name">
        {MenuData.organization}
      </div>


      {/* ==========================================
          出展団体
      ========================================== */}

      <div className="Rakuiti-13-shop-org">
        {MenuData.organization}
      </div>


      {/* ==========================================
          タブ
      ========================================== */}

      <div className="Rakuiti-13-shop-tabs">

        <div
          className={`Rakuiti-13-tab ${
            activeTab === "intro"
              ? "Rakuiti-13-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-13-tab ${
            activeTab === "menu"
              ? "Rakuiti-13-tab-active"
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
        <div className="Rakuiti-13-shop-description">

          <p>
            {MenuData.description}
          </p>

        </div>
      )}


      {/* ==========================================
          メニュー
      ========================================== */}

      {activeTab === "menu" && (
        <div className="Rakuiti-13-shop-menu">

          <div className="Rakuiti-13-menu-sheet">

            <div className="Rakuiti-13-menu-title">
              メニュー表
            </div>


            {MenuData.menu.map((section, index) => (
              <div
                className="Rakuiti-13-menu-section"
                key={index}
              >

                <div className="Rakuiti-13-menu-category">
                  {section.category}
                </div>


                <div className="Rakuiti-13-menu-type">
                  {section.type}
                </div>


                <div className="Rakuiti-13-menu-list">

                  {section.items.map((item, itemIndex) => (
                    <div
                      className="Rakuiti-13-menu-row"
                      key={itemIndex}
                    >

                      <div className="Rakuiti-13-menu-name">
                        {item.name}
                      </div>

                      <div className="Rakuiti-13-menu-dots"></div>

                      <div className="Rakuiti-13-menu-price">
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

            <div className="Rakuiti-13-menu-bottom-note">
              ※当日内容が変更されることがあります
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ShopDetail;