"use client";

import React, { useEffect, useState } from "react";
import "./MascotCard.css";

import leadImageWalk from "./Mascot/リード君歩く.jpg";
import voteImage from "./Mascot/投票お願い.png";

import nameImage from "./Mascot/name.png";
import maleImage from "./Mascot/male.png";
import heartImage from "./Mascot/heart.png";
import foodImage from "./Mascot/food.png";
import starImage from "./Mascot/star.png";

const MascotCard = () => {

  /* ========================================
     リード君画像
  ======================================== */

  const mascotImages = [
    leadImageWalk,
    voteImage,
  ];

  const [mascotIndex, setMascotIndex] = useState(0);

  /* ========================================
     リード君画像切り替え
  ======================================== */

  useEffect(() => {

    const interval = setInterval(() => {

      setMascotIndex((prev) =>
        (prev + 1) % mascotImages.length
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
      {/* タイトル */}
      <div className="Question-MascotCard-section-title">
        マスコット紹介
      </div>

      <div className="Question-MascotCard-card">
        <div className="Question-MascotCard-card-inner">

          {/* 上部プロフィール */}
          <div className="Question-MascotCard-hero">

            <div className="Question-MascotCard-mascot-area">

              <div className="Question-MascotCard-image">

                <img
                  src={mascotImages[mascotIndex].src}
                  alt="リード君"
                />

              </div>

              <div className="Question-MascotCard-dot-line"></div>

            </div>

            <div className="Question-MascotCard-text">

              <img
                src={nameImage.src}
                alt="リード君"
                className="Question-MascotCard-name-logo"
              />

              <div className="Question-MascotCard-name-dots"></div>

              <p>
                みんなをリードする元気いっぱいのペンギン！
                好奇心旺盛でいつも新しいことにチャレンジしているよ！
              </p>

            </div>

          </div>

          {/* 特徴 */}
          <h2 className="Question-MascotCard-feature-title">

            <span className="Question-MascotCard-line"></span>

            <span className="Question-MascotCard-feature-label">
              特徴
            </span>

            <span className="Question-MascotCard-line"></span>

          </h2>

          <div className="Question-MascotCard-grid">

            <div className="Question-MascotCard-left">

              <div className="Question-MascotCard-item Question-MascotCard-blue">

                <div className="Question-MascotCard-item-title">

                  <img
                    src={maleImage.src}
                    alt=""
                  />

                  <span>性別</span>

                </div>

                <b>オス</b>

              </div>

              <div className="Question-MascotCard-item Question-MascotCard-green">

                <div className="Question-MascotCard-item-title">

                  <img
                    src={heartImage.src}
                    alt=""
                  />

                  <span>性格</span>

                </div>

                <b>情熱的・仲間思い</b>

              </div>

              <div className="Question-MascotCard-item Question-MascotCard-orange">

                <div className="Question-MascotCard-item-title">

                  <img
                    src={foodImage.src}
                    alt=""
                  />

                  <span>好きなもの</span>

                </div>

                <b>魚</b>

              </div>

            </div>

            <div className="Question-MascotCard-right">

              <h3 className="Question-MascotCard-other-title">

                <img
                  src={starImage.src}
                  alt=""
                  className="Question-MascotCard-other-title-icon"
                />

                その他

              </h3>

              <ul>
                <li>ゼン君の先輩</li>
                <li>猫舌</li>
                <li>おっちょこちょい</li>
                <li>モテモテ</li>
                <li>
                  シャチに追いかけまわされたせいで海洋恐怖症になった。
                </li>
              </ul>

            </div>

          </div>

          {/* 投票 */}
          <div className="Question-MascotCard-vote">

            <p>
              ＼ このマスコットを応援しよう！ ／
            </p>

            <a
              href="https://gakumado.mynavi.jp/contests/mascot"
              target="_blank"
              rel="noopener noreferrer"
              className="Question-MascotCard-vote-button"
            >
              投票する
            </a>

            <small>
              あなたの応援が力になります！
            </small>

          </div>

        </div>
      </div>
    </>
  );
};

export default MascotCard;