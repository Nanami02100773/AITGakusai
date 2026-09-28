"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

import no16Image from "../../ProjectRakuiti/components/Group/No.16/1.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Rakuiti-16-shop-detail">

      {/* ==========================================
          ヘッダー画像
      ========================================== */}

      <div className="Rakuiti-16-shop-icon-area">
        <img
          src={no16Image.src}
          alt={`${MenuData.shopName} 画像`}
        />
      </div>


      {/* ==========================================
          店名
      ========================================== */}

      <div className="Rakuiti-16-shop-name">
        {MenuData.shopName}
      </div>


      {/* ==========================================
          出展団体
      ========================================== */}

      <div className="Rakuiti-16-shop-org">
        {MenuData.organization}
      </div>


      {/* ==========================================
          タブ
      ========================================== */}

      <div className="Rakuiti-16-shop-tabs">

        <div
          className={`Rakuiti-16-tab ${
            activeTab === "intro"
              ? "Rakuiti-16-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-16-tab ${
            activeTab === "menu"
              ? "Rakuiti-16-tab-active"
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
        <div className="Rakuiti-16-shop-description">
          <p>
            {MenuData.productDescription}
          </p>
        </div>
      )}


      {/* ==========================================
          メニュー
      ========================================== */}

      {activeTab === "menu" && (
        <div className="Rakuiti-16-shop-menu">

          <div className="Rakuiti-16-menu-sheet">

            {/* ==================================
                メニュータイトル
            ================================== */}

            <div className="Rakuiti-16-menu-title">
              メニュー表
              <span>(円)</span>
            </div>


            {/* ==================================
                メニュー一覧
            ================================== */}

            {MenuData.menu.map((section, index) => (
              <div
                className="Rakuiti-16-menu-section"
                key={index}
              >

                {/* ==================================
                    カテゴリー見出し
                ================================== */}

                <div className="Rakuiti-16-menu-category">
                  {section.type}
                </div>


                {/* ==================================
                    商品一覧
                ================================== */}

                <div className="Rakuiti-16-menu-list">

                  {section.items.map((item, itemIndex) => (
                    <div
                      className="Rakuiti-16-menu-row"
                      key={itemIndex}
                    >

                      <div className="Rakuiti-16-menu-name">
                        {item.name}
                      </div>

                      <div className="Rakuiti-16-menu-dots">
                      </div>

                      <div className="Rakuiti-16-menu-price">
                        {item.price}
                      </div>

                    </div>
                  ))}

                </div>

              </div>
            ))}


            {/* ==========================================
                フレーバー
            ========================================== */}

            {MenuData.flavor && MenuData.flavor.length > 0 && (
              <div className="Rakuiti-16-menu-flavor">

                <div className="Rakuiti-16-menu-flavor-title">
                  フレーバー
                </div>

                <div className="Rakuiti-16-menu-flavor-list">

                  {MenuData.flavor.map((flavor, index) => (
                    <span key={index}>
                      {flavor}
                    </span>
                  ))}

                </div>

              </div>
            )}


            {/* ==========================================
                メニュー注意書き
            ========================================== */}

            <div className="Rakuiti-16-menu-bottom-note">
              ※当日内容が変更されることがあります
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ShopDetail;