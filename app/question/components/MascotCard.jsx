"use client";

import React from "react";
import "./MascotCard.css";

const MascotCard = () => {
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
                  src="/mascot/mascot.jpg"
                  alt="リード君"
                />
              </div>

              <div className="Question-MascotCard-dot-line"></div>

            </div>

            <div className="Question-MascotCard-text">

              <img
                src="/mascot/name.png"
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
                  <img src="/mascot/male.png" alt="" />
                  <span>性別</span>
                </div>

                <b>オス</b>

              </div>

              <div className="Question-MascotCard-item Question-MascotCard-green">

                <div className="Question-MascotCard-item-title">
                  <img src="/mascot/heart.png" alt="" />
                  <span>性格</span>
                </div>

                <b>情熱的・仲間思い</b>

              </div>

              <div className="Question-MascotCard-item Question-MascotCard-orange">

                <div className="Question-MascotCard-item-title">
                  <img src="/mascot/food.png" alt="" />
                  <span>好きなもの</span>
                </div>

                <b>魚</b>

              </div>

            </div>

            <div className="Question-MascotCard-right">

              <h3 className="Question-MascotCard-other-title">

                <img
                  src="/mascot/star.png"
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
                <li>シャチに追いかけまわされたせいで海洋恐怖症になった。</li>
              </ul>

            </div>

          </div>

          {/* 投票 */}
          <div className="Question-MascotCard-vote">

            <p>＼ このマスコットを応援しよう！ ／</p>

            <button>投票する</button>

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