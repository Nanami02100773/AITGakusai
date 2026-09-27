"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

import no10Image1 from "../../ProjectRakuiti/components/Group/No.10/1.jpg";
import no10Image2 from "../../ProjectRakuiti/components/Group/No.10/2.jpg";
import no10Image3 from "../../ProjectRakuiti/components/Group/No.10/3.jpg";
import no10Image4 from "../../ProjectRakuiti/components/Group/No.10/4.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shopImages = [
    no10Image1,
    no10Image2,
    no10Image3,
  ];

  const handlePrevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? shopImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImage((prev) =>
      prev === shopImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="Rakuiti-10-shop-detail">

      {/* =================================
          ショップ画像
      ================================= */}

      <div className="Rakuiti-10-shop-icon-area">

        <img
          src={shopImages[activeImage].src}
          alt={`${MenuData.shopName} 画像`}
        />

        <button
          type="button"
          className="Rakuiti-10-image-button Rakuiti-10-image-button-prev"
          onClick={handlePrevImage}
          aria-label="前の画像"
        >
          ‹
        </button>

        <button
          type="button"
          className="Rakuiti-10-image-button Rakuiti-10-image-button-next"
          onClick={handleNextImage}
          aria-label="次の画像"
        >
          ›
        </button>

        <div className="Rakuiti-10-image-dots">
          {shopImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`Rakuiti-10-image-dot ${
                activeImage === index
                  ? "Rakuiti-10-image-dot-active"
                  : ""
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`${index + 1}枚目の画像`}
            />
          ))}
        </div>

      </div>


      {/* =================================
          店名
      ================================= */}

      <div className="Rakuiti-10-shop-name">
        {MenuData.shopName}
      </div>


      {/* =================================
          団体名
      ================================= */}

      <div className="Rakuiti-10-shop-org">
        {MenuData.organization}
      </div>


      {/* =================================
          タブ
      ================================= */}

      <div className="Rakuiti-10-shop-tabs">

        <button
          type="button"
          className={`Rakuiti-10-tab ${
            activeTab === "intro"
              ? "Rakuiti-10-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介
        </button>

       
      </div>


      {/* =================================
          紹介
      ================================= */}

      {activeTab === "intro" && (
        <div className="Rakuiti-10-shop-description">

      


          {/* 商品紹介 */}

          <div className="Rakuiti-10-shop-focus">

            <h3 className="Rakuiti-10-shop-focus-title">
              商品紹介
            </h3>

            <p>
              {MenuData.productDescription}
            </p>

            <div className="Rakuiti-10-shop-focus-images">

              <div className="Rakuiti-10-image-box">
                <img
                  src={no10Image4.src}
                  alt="たこ焼き"
                />
              </div>

            </div>

          </div>

        </div>
      )}




    </div>
  );
}

export default ShopDetail;