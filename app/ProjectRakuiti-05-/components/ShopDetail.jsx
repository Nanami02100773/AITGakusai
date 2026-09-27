"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

import no5Image from "../../ProjectRakuiti/components/Group/No.5/1.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Rakuiti-05-shop-detail">

      {/* =================================
          ヘッダー画像
      ================================= */}

      <div className="Rakuiti-05-shop-icon-area">
        <img
          src={no5Image.src}
          alt={`${MenuData.shopName} 画像`}
        />
      </div>


      {/* =================================
          店名
      ================================= */}

      <div className="Rakuiti-05-shop-name">
        {MenuData.shopName}
      </div>


      {/* =================================
          出展団体
      ================================= */}

      <div className="Rakuiti-05-shop-org">
        {MenuData.organization}
      </div>


      {/* =================================
          タブ
      ================================= */}

      <div className="Rakuiti-05-shop-tabs">

        <div
          className={`Rakuiti-05-tab ${
            activeTab === "intro"
              ? "Rakuiti-05-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-05-tab ${
            activeTab === "menu"
              ? "Rakuiti-05-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("menu")}
        >
          メニュー
        </div>

      </div>


      {/* =================================
          紹介文
      ================================= */}

      {activeTab === "intro" && (
        <div className="Rakuiti-05-shop-description">

          {/* 商品紹介 */}

          <div className="Rakuiti-05-description-block">

            <div className="Rakuiti-05-description-title">
              商品紹介
            </div>

            <p>
              {MenuData.productDescription}
            </p>

          </div>


          {/* 団体紹介 */}

          <div className="Rakuiti-05-description-block">

            <div className="Rakuiti-05-description-title">
              団体紹介
            </div>

            <p>
              {MenuData.organizationDescription}
            </p>

          </div>

        </div>
      )}


      {/* =================================
          メニュー
      ================================= */}

      {activeTab === "menu" && (
        <div className="Rakuiti-05-shop-menu">

          <div className="Rakuiti-05-menu-sheet">

            {/* メニュータイトル */}

            <div className="Rakuiti-05-menu-title">
              メニュー表
              <span>(円)</span>
            </div>


            {/* メニュー */}

            {MenuData.menu.map((section, index) => (
              <div
                className="Rakuiti-05-menu-section"
                key={index}
              >

                <div className="Rakuiti-05-menu-type">
                  {section.type}
                </div>


                <div className="Rakuiti-05-menu-list">

                  {section.items.map((item, itemIndex) => (
                    <div
                      className="Rakuiti-05-menu-row"
                      key={itemIndex}
                    >

                      <div className="Rakuiti-05-menu-name">
                        {item.name}
                      </div>

                      <div className="Rakuiti-05-menu-dots">
                      </div>

                      <div className="Rakuiti-05-menu-price">
                        {item.price}
                      </div>

                    </div>
                  ))}

                </div>

              </div>
            ))}


            {/* 注意書き */}

            <div className="Rakuiti-05-menu-bottom-note">
              ※当日内容が変更されることがあります
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ShopDetail;