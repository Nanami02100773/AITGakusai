"use client";

import React from "react";
import "./MascotCard.css";

import leadImageWalk from "./Mascot/リード君歩く.jpg";
import nameImage from "./Mascot/name.png";

import MascotCardData from "./data/MascotCard.js";

const MascotCard = () => {

  /* ==========================================
     プロフィール
  ========================================== */

  const profileItems = [
    {
      label: "名前",
      value: MascotCardData.name,
      type: "important",
    },
    {
      label: "種族",
      value: MascotCardData.species,
      type: "important",
    },
    {
      label: "性別",
      value: MascotCardData.gender,
      type: "important",
    },
    {
      label: "性格",
      value: MascotCardData.personality,
      type: "normal",
    },
    {
      label: "好きなこと",
      value: MascotCardData.favorite,
      type: "normal",
    },
    {
      label: "好きな食べ物",
      value: MascotCardData.favoriteFood,
      type: "normal",
    },
    {
      label: "習慣",
      value: MascotCardData.habit,
      type: "small",
    },
    {
      label: "趣味",
      value: MascotCardData.hobby,
      type: "small",
    },
    {
      label: "MBTI",
      value: MascotCardData.mbti,
      type: "small",
    },
  ];


  return (
    <section className="Question-MascotCard-section">


      {/* ==========================================
          セクションタイトル
      ========================================== */}

      <div className="Question-MascotCard-section-title">

        <span>
          マスコット紹介
        </span>

      </div>


      {/* ==========================================
          メインカード
      ========================================== */}

      <section className="Question-MascotCard-card">


        {/* ==========================================
            上部ビジュアル
        ========================================== */}

        <div className="Question-MascotCard-visual">


          {/* ==========================================
              名前・ロゴ
          ========================================== */}

          <div className="Question-MascotCard-visual-info">

            <img
              src={nameImage.src}
              alt={MascotCardData.name}
              className="Question-MascotCard-name-logo"
            />

            <p className="Question-MascotCard-subtitle">
              {MascotCardData.subtitle}
            </p>

            <div className="Question-MascotCard-species">
              {MascotCardData.species}
            </div>

          </div>


          {/* ==========================================
              リード君画像
          ========================================== */}

          <div className="Question-MascotCard-visual-mascot">

            <div className="Question-MascotCard-image-box">

              <img
                src={leadImageWalk.src}
                alt={MascotCardData.name}
                className="Question-MascotCard-image"
              />

            </div>

          </div>


        </div>


        {/* ==========================================
            紹介文
        ========================================== */}

        <div className="Question-MascotCard-description-box">

          <p className="Question-MascotCard-description">
            {MascotCardData.description}
          </p>

        </div>


        {/* ==========================================
            プロフィール
        ========================================== */}

        <div className="Question-MascotCard-profile-area">


          {/* ==========================================
              見出し
          ========================================== */}

          <div className="Question-MascotCard-profile-heading">

            <span className="Question-MascotCard-profile-line"></span>

            <h3>
              プロフィール
            </h3>

            <span className="Question-MascotCard-profile-line"></span>

          </div>


          {/* ==========================================
              プロフィール一覧
          ========================================== */}

          <div className="Question-MascotCard-profile">

            {profileItems.map((item) => (

              <div
                key={item.label}
                className={`Question-MascotCard-profile-item Question-MascotCard-profile-item-${item.type}`}
              >

                <div className="Question-MascotCard-profile-content">

                  <div className="Question-MascotCard-profile-label">
                    {item.label}
                  </div>

                  <div className="Question-MascotCard-profile-value">
                    {item.value}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ==========================================
            投票
        ========================================== */}

        <div className="Question-MascotCard-vote">

          <p className="Question-MascotCard-vote-title">
            {MascotCardData.voteTitle}
          </p>


          <a
            href={MascotCardData.voteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="Question-MascotCard-vote-button"
          >

            <span>
              {MascotCardData.voteButton}
            </span>

          </a>


          <p className="Question-MascotCard-vote-text">
            {MascotCardData.voteText}
          </p>

        </div>


      </section>

    </section>
  );
};

export default MascotCard;