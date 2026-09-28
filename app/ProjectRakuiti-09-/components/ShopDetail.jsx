"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";

import MenuData from "./data/MenuData";

import no9Image1 from "../../ProjectRakuiti/components/Group/No.9/1.jpg";
import no9Image2 from "../../ProjectRakuiti/components/Group/No.9/2.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");
  const [activeImage, setActiveImage] = useState(0);

  /* ==========================================
     写真
  ========================================== */

  const shopImages = [
    {
      image: no9Image2,
      alt: "小物の販売",
    },
    {
      image: no9Image1,
      alt: "ダンボール迷路",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ==========================================
     前の画像
  ========================================== */

  const handlePrevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? shopImages.length - 1 : prev - 1
    );
  };

  /* ==========================================
     次の画像
  ========================================== */

  const handleNextImage = () => {
    setActiveImage((prev) =>
      prev === shopImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="Rakuiti-09-shop-detail">

      {/* ==========================================
          ヘッダー画像
      ========================================== */}

      <div className="Rakuiti-09-shop-icon-area">

        <img
          src={shopImages[activeImage].image.src}
          alt={shopImages[activeImage].alt}
        />

        <button
          type="button"
          className="Rakuiti-09-image-button Rakuiti-09-image-button-prev"
          onClick={handlePrevImage}
          aria-label="前の画像"
        >
          ‹
        </button>

        <button
          type="button"
          className="Rakuiti-09-image-button Rakuiti-09-image-button-next"
          onClick={handleNextImage}
          aria-label="次の画像"
        >
          ›
        </button>

        <div className="Rakuiti-09-image-dots">

          {shopImages.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`Rakuiti-09-image-dot ${
                activeImage === index
                  ? "Rakuiti-09-image-dot-active"
                  : ""
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`画像${index + 1}`}
            />
          ))}

        </div>

      </div>

      {/* ==========================================
          出展名
      ========================================== */}

      <div className="Rakuiti-09-shop-name">
        {MenuData.shopName}
      </div>

      {/* ==========================================
          出展団体
      ========================================== */}

      <div className="Rakuiti-09-shop-org">
        {MenuData.organization}
      </div>

      {/* ==========================================
          タブ
      ========================================== */}

      <div className="Rakuiti-09-shop-tabs">

        <div
          className={`Rakuiti-09-tab ${
            activeTab === "intro"
              ? "Rakuiti-09-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-09-tab ${
            activeTab === "menu"
              ? "Rakuiti-09-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("menu")}
        >
          出展内容
        </div>

      </div>

      {/* ==========================================
          紹介文
      ========================================== */}

      {activeTab === "intro" && (
        <div className="Rakuiti-09-shop-description">

          <p>
            {MenuData.description}
          </p>

          {/* ==========================================
              お店の紹介
          ========================================== */}

          <div className="Rakuiti-09-shop-focus">

            <h3 className="Rakuiti-09-shop-focus-title">
              お店の紹介
            </h3>

            <div className="Rakuiti-09-shop-focus-content">

              {/* 2.jpg */}

              <div className="Rakuiti-09-shop-focus-item">

                <div className="Rakuiti-09-image-box">

                  <img
                    src={no9Image2.src}
                    alt="小物の販売"
                  />

                </div>

                <p>
                  {MenuData.imageDescriptions[0]}
                </p>

              </div>

              {/* 1.jpg */}

              <div className="Rakuiti-09-shop-focus-item">

                <div className="Rakuiti-09-image-box">

                  <img
                    src={no9Image1.src}
                    alt="ダンボール迷路"
                  />

                </div>

                <p>
                  {MenuData.imageDescriptions[1]}
                </p>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* ==========================================
          出展内容
      ========================================== */}

      {activeTab === "menu" && (
        <div className="Rakuiti-09-shop-menu">

          <div className="Rakuiti-09-menu-sheet">

            <div className="Rakuiti-09-menu-title">
              出展内容
            </div>

            <div className="Rakuiti-09-menu-section">

            
              <div className="Rakuiti-09-menu-list">

                {MenuData.content.map((item, index) => (
                  <div
                    className="Rakuiti-09-menu-rule"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ShopDetail;