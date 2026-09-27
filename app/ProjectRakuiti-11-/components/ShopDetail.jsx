"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

import no11Image1 from "../../ProjectRakuiti/components/Group/No.11/1.jpg";
import no11Image2 from "../../ProjectRakuiti/components/Group/No.11/2.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shopImages = [
    no11Image1,
    no11Image2,
  ];

  const handlePrevImage = () => {
    setActiveImage((prev) =>
      prev === 0
        ? shopImages.length - 1
        : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImage((prev) =>
      prev === shopImages.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <div className="Rakuiti-11-shop-detail">

      {/* ==========================================
          ヘッダー画像
      ========================================== */}

      <div className="Rakuiti-11-shop-icon-area">

        <img
          src={shopImages[activeImage].src}
          alt={`${MenuData.shopName} 画像${activeImage + 1}`}
        />

        <button
          type="button"
          className="Rakuiti-11-image-button Rakuiti-11-image-button-prev"
          onClick={handlePrevImage}
          aria-label="前の画像"
        >
          ‹
        </button>

        <button
          type="button"
          className="Rakuiti-11-image-button Rakuiti-11-image-button-next"
          onClick={handleNextImage}
          aria-label="次の画像"
        >
          ›
        </button>

        <div className="Rakuiti-11-image-dots">

          {shopImages.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`Rakuiti-11-image-dot ${
                activeImage === index
                  ? "Rakuiti-11-image-dot-active"
                  : ""
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`画像${index + 1}`}
            />
          ))}

        </div>

      </div>


      {/* ==========================================
          店名
      ========================================== */}

      <div className="Rakuiti-11-shop-name">
        {MenuData.shopName}
      </div>


      {/* ==========================================
          出展団体
      ========================================== */}

      <div className="Rakuiti-11-shop-org">
        {MenuData.organization}
      </div>


      {/* ==========================================
          タブ
      ========================================== */}

      <div className="Rakuiti-11-shop-tabs">

        <div
          className={`Rakuiti-11-tab ${
            activeTab === "intro"
              ? "Rakuiti-11-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-11-tab ${
            activeTab === "menu"
              ? "Rakuiti-11-tab-active"
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
        <div className="Rakuiti-11-shop-description">

          {/* ======================================
              商品紹介
          ====================================== */}

          <div className="Rakuiti-11-shop-focus">

            <h3 className="Rakuiti-11-shop-focus-title">
              商品紹介
            </h3>

            <p>
              {MenuData.productDescription}
            </p>

          </div>


          {/* ======================================
              団体紹介
          ====================================== */}

          <div className="Rakuiti-11-shop-focus">

            <h3 className="Rakuiti-11-shop-focus-title">
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
        <div className="Rakuiti-11-shop-menu">

          <div className="Rakuiti-11-menu-sheet">

            <div className="Rakuiti-11-menu-title">
              メニュー表
            </div>


            <div className="Rakuiti-11-menu-list">

              {MenuData.menu.map((item, index) => (
                <div
                  className="Rakuiti-11-menu-row"
                  key={index}
                >

                  <div className="Rakuiti-11-menu-name">
                    {item.name}
                  </div>

                </div>
              ))}

            </div>


            {/* ==========================================
                メニュー注意書き
            ========================================== */}

            <div className="Rakuiti-11-menu-bottom-note">
              ※当日内容が変更されることがあります
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ShopDetail;