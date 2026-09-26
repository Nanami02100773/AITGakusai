"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

import no4Image1 from "../../ProjectRakuiti/components/Group/No.4/1.jpg";
import no4Image2 from "../../ProjectRakuiti/components/Group/No.4/2.jpg";
import no4Image3 from "../../ProjectRakuiti/components/Group/No.4/3.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");
  const [activeImage, setActiveImage] = useState(0);

  const shopImages = [
    no4Image1,
    no4Image2,
    no4Image3,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="Rakuiti-04-shop-detail">

      {/* ==========================================
          ヘッダー画像
      ========================================== */}

      <div className="Rakuiti-04-shop-icon-area">

        <img
          src={shopImages[activeImage].src}
          alt={`${MenuData.shopName} 画像${activeImage + 1}`}
        />

        <button
          type="button"
          className="Rakuiti-04-image-button Rakuiti-04-image-button-prev"
          onClick={handlePrevImage}
          aria-label="前の画像"
        >
          ‹
        </button>

        <button
          type="button"
          className="Rakuiti-04-image-button Rakuiti-04-image-button-next"
          onClick={handleNextImage}
          aria-label="次の画像"
        >
          ›
        </button>

        <div className="Rakuiti-04-image-dots">

          {shopImages.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`Rakuiti-04-image-dot ${
                activeImage === index
                  ? "Rakuiti-04-image-dot-active"
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

      <div className="Rakuiti-04-shop-name">
        {MenuData.shopName}
      </div>


      {/* ==========================================
          出展団体
      ========================================== */}

      <div className="Rakuiti-04-shop-org">
        {MenuData.organization}
      </div>


      {/* ==========================================
          タブ
      ========================================== */}

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


      {/* ==========================================
          紹介文
      ========================================== */}

      {activeTab === "intro" && (
        <div className="Rakuiti-04-shop-description">

          <p>
            {MenuData.description}
          </p>

        </div>
      )}


      {/* ==========================================
          メニュー
      ========================================== */}

      {activeTab === "menu" && (
        <div className="Rakuiti-04-shop-menu">

          <div className="Rakuiti-04-menu-sheet">

            <div className="Rakuiti-04-menu-title">
              メニュー表
              <span>(円)</span>
            </div>

            <div className="Rakuiti-04-menu-note">
              {MenuData.menuNote}
            </div>

            {MenuData.menu.map((section, index) => (
              <div
                className="Rakuiti-04-menu-section"
                key={index}
              >

                <div className="Rakuiti-04-menu-category">
                  {section.category}
                </div>

                <div className="Rakuiti-04-menu-type">
                  {section.type}
                </div>

                <div className="Rakuiti-04-menu-list">

                  {section.items.map((item, itemIndex) => (
                    <div
                      className="Rakuiti-04-menu-row"
                      key={itemIndex}
                    >

                      <div className="Rakuiti-04-menu-name">
                        {item.name}
                      </div>

                      <div className="Rakuiti-04-menu-dots"></div>

                      <div className="Rakuiti-04-menu-price">
                        {item.price}
                      </div>

                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      )}

    </div>
  );
}

export default ShopDetail;