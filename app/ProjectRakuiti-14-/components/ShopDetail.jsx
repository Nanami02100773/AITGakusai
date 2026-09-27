"use client";

import React, { useEffect, useState } from "react";
import "./ShopDetail.css";
import MenuData from "./data/MenuData";

import no14Image1 from "../../ProjectRakuiti/components/Group/No.14/1.jpg";
import no14Image2 from "../../ProjectRakuiti/components/Group/No.14/2.jpg";
import no14Image3 from "../../ProjectRakuiti/components/Group/No.14/3.jpg";

function ShopDetail() {
  const [activeTab, setActiveTab] = useState("intro");
  const [activeImage, setActiveImage] = useState(0);

  const shopImages = [
    no14Image1,
    no14Image2,
    no14Image3,
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
    <div className="Rakuiti-14-shop-detail">

      {/* ==========================================
          ヘッダー画像
      ========================================== */}

      <div className="Rakuiti-14-shop-icon-area">

        <img
          src={shopImages[activeImage].src}
          alt={`WinDraチャレンジ 画像${activeImage + 1}`}
        />

        <button
          type="button"
          className="Rakuiti-14-image-button Rakuiti-14-image-button-prev"
          onClick={handlePrevImage}
          aria-label="前の画像"
        >
          ‹
        </button>

        <button
          type="button"
          className="Rakuiti-14-image-button Rakuiti-14-image-button-next"
          onClick={handleNextImage}
          aria-label="次の画像"
        >
          ›
        </button>

        <div className="Rakuiti-14-image-dots">

          {shopImages.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`Rakuiti-14-image-dot ${
                activeImage === index
                  ? "Rakuiti-14-image-dot-active"
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

      <div className="Rakuiti-14-shop-name">
        WinDraチャレンジ
      </div>


      {/* ==========================================
          出展団体
      ========================================== */}

      <div className="Rakuiti-14-shop-org">
        学生団体WinDra
      </div>


      {/* ==========================================
          タブ
      ========================================== */}

      <div className="Rakuiti-14-shop-tabs">

        <div
          className={`Rakuiti-14-tab ${
            activeTab === "intro"
              ? "Rakuiti-14-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("intro")}
        >
          紹介文
        </div>

        <div
          className={`Rakuiti-14-tab ${
            activeTab === "menu"
              ? "Rakuiti-14-tab-active"
              : ""
          }`}
          onClick={() => setActiveTab("menu")}
        >
          出展概要
        </div>

      </div>


      {/* ==========================================
          紹介文
      ========================================== */}

      {activeTab === "intro" && (
        <div className="Rakuiti-14-shop-description">

          <p>
            ストラックアウトにチャレンジしてみませんか？
            <br />
            こんにちは！学生団体WinDraです。私たちは
            「ドラゴンズを学生の力で盛り上げる」をスローガンに掲げて活動しています！
            <br />
            ブースに足を運んで少しでもドラゴンズの魅力を知ってもらえたら嬉しいです！
            <br />
            ドラゴンズの青いユニフォームが目印です！ぜひお越しください！
          </p>

        </div>
      )}


      {/* ==========================================
          出展概要
      ========================================== */}

      {activeTab === "menu" && (
        <div className="Rakuiti-14-shop-menu">

          <div className="Rakuiti-14-menu-sheet">

            <div className="Rakuiti-14-menu-title">
              {MenuData.gameTitle}
            </div>


            {/* ==========================================
                遊び方
            ========================================== */}

            <div className="Rakuiti-14-menu-section">

              <div className="Rakuiti-14-menu-category">
                遊び方
              </div>

              <div className="Rakuiti-14-menu-list">

                {MenuData.rules.map((rule, index) => (
                  <div
                    className="Rakuiti-14-menu-rule"
                    key={index}
                  >
                    {rule}
                  </div>
                ))}

              </div>

              <div className="Rakuiti-14-menu-note">
                {MenuData.ruleNote}
              </div>

            </div>


            {/* ==========================================
                クリア特典
            ========================================== */}

            <div className="Rakuiti-14-menu-section">

              <div className="Rakuiti-14-menu-category">
                {MenuData.clearTitle}
              </div>

              <div className="Rakuiti-14-reward-list">

                {MenuData.clearItems.map((item, index) => (
                  <div
                    className="Rakuiti-14-reward-row"
                    key={index}
                  >

                    <div className="Rakuiti-14-reward-level">
                      {item.level}
                    </div>

                    <div className="Rakuiti-14-reward-text">
                      {item.reward}
                    </div>

                  </div>
                ))}

              </div>

            </div>


            {/* ==========================================
                参加費
            ========================================== */}

            <div className="Rakuiti-14-menu-section">

              <div className="Rakuiti-14-menu-category">
                {MenuData.feeTitle}
              </div>

              <div className="Rakuiti-14-fee">
                {MenuData.fee}
              </div>

              <div className="Rakuiti-14-menu-note">
                {MenuData.feeNote}
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ShopDetail;