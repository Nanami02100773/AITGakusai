"use client";

import React from "react";
import "./MascotDetail.css";

const MascotDetail = () => {
  return (
    <div className="question-page">

      {/* タイトル */}
      <div className="question-mascot-section-title">
        マスコット紹介
      </div>

      <div className="question-card-wrapper">

        {/* =========================
            上部装飾
        ========================= */}
        <div className="question-decoration">

          <div className="question-card-white-left"></div>

          <div className="question-card-white-center"></div>

          <div className="question-top-line"></div>

          <div className="question-top-base"></div>

          <div className="question-top-dots"></div>

        </div>

        {/* =========================
            メインカード
        ========================= */}
        <div className="question-card">

          {/* =========================
              上部プロフィール
          ========================= */}
          <div className="question-hero">

            <div className="question-mascot-area">

              <div className="question-image">
                <img
                  src="/mascot/mascot.jpg"
                  alt="リード君"
                />
              </div>

              <div className="question-dot-line"></div>

            </div>

            <div className="question-text">

              <img
                src="/mascot/name.png"
                alt="リード君"
                className="question-name-logo"
              />

              <div className="question-name-dots"></div>

              <p>
                みんなをリードしてくれる元気いっぱいのペンギン！
                好奇心旺盛でいつも新しいことにチャレンジしているよ！
              </p>

            </div>

          </div>

          {/* =========================
              特徴
          ========================= */}
          <h2 className="question-feature-title">

            <span className="question-line"></span>

            <span className="question-feature-label">
              特徴
            </span>

            <span className="question-line"></span>

          </h2>

          <div className="question-grid">

            <div className="question-left">

              <div className="question-item question-blue">

                <div className="question-item-title">
                  <img src="/mascot/male.png" alt="" />
                  <span>性別</span>
                </div>

                <b>オス</b>

              </div>

              <div className="question-item question-green">

                <div className="question-item-title">
                  <img src="/mascot/heart.png" alt="" />
                  <span>性格</span>
                </div>

                <b>情熱的・仲間思い</b>

              </div>

              <div className="question-item question-orange">

                <div className="question-item-title">
                  <img src="/mascot/food.png" alt="" />
                  <span>好きなもの</span>
                </div>

                <b>魚</b>

              </div>

            </div>

            <div className="question-right">

              <h3 className="question-other-title">

                <img
                  src="/mascot/star.png"
                  alt=""
                  className="question-other-title-icon"
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

          {/* =========================
              投票
          ========================= */}
          <div className="question-vote">

            <p>＼ このマスコットを応援しよう！ ／</p>

            <button>投票する</button>

            <small>
              あなたの応援が力になります！
            </small>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MascotDetail;