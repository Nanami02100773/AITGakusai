"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

import no15Image1 from "../../ProjectRakuiti/components/Group/No.15/1.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Rakuiti-15-shop-detail">

      {/* ==========================================
          ヘッダー画像
      ========================================== */}

      <div className="Rakuiti-15-shop-icon-area">

        <img
          src={no15Image1.src}
          alt={`${MenuData.shopName} 画像`}
        />

      </div>


      {/* ==========================================
          店名
      ========================================== */}

      <div className="Rakuiti-15-shop-name">
        {MenuData.shopName}
      </div>


      {/* ==========================================
          出展団体
      ========================================== */}

      <div className="Rakuiti-15-shop-org">
        {MenuData.organization}
      </div>


      {/* ==========================================
          タブ
      ========================================== */}

      <div className="Rakuiti-15-shop-tabs">

        <div
          className={`Rakuiti-15-tab ${
            activeTab === "intro"
              ? "Rakuiti-15-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-15-tab ${
            activeTab === "menu"
              ? "Rakuiti-15-tab-active"
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
        <div className="Rakuiti-15-shop-description">

          <div className="Rakuiti-15-shop-focus">

            <p>
              わらび餅を売ります！
            </p>

          </div>

        </div>
      )}


      {/* ==========================================
          メニュー
      ========================================== */}

      {activeTab === "menu" && (
        <div className="Rakuiti-15-shop-menu">

          <div className="Rakuiti-15-menu-sheet">

            <div className="Rakuiti-15-menu-title">
              メニュー表
              <span>(円)</span>
            </div>


            <div className="Rakuiti-15-menu-list">

              {MenuData.menu.map((item, index) => (
                <div
                  className="Rakuiti-15-menu-row"
                  key={index}
                >

                  <div className="Rakuiti-15-menu-name">
                    {item.name}
                  </div>

                  <div className="Rakuiti-15-menu-dots"></div>

                  <div className="Rakuiti-15-menu-price">
                    {item.price}
                    {item.price !== "" && "円"}
                  </div>

                </div>
              ))}

            </div>


            {/* ==========================================
                メニュー注意書き
            ========================================== */}

            <div className="Rakuiti-15-menu-bottom-note">
              ※当日内容が変更されることがあります
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ShopDetail;