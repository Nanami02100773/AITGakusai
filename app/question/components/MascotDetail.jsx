"use client";

import React from "react";
import "./MascotDetail.css";

const MascotDetail = () => {
  return (
  <div className="page">

  <div className="mascot-section-title">
    マスコット紹介
  </div>

  <div className="card">

    <div className="card-white-left"></div>
    <div className="card-white-center"></div>
    <div className="top-line"></div>

    {/* 中身 */}

        {/* =========================
            上部プロフィール
        ========================= */}
        <div className="hero">

          <div className="mascot-area">
<div className="image">
  <img
    src="/mascot/mascot.jpg"
    alt="リード君"
  />
</div>

      

            <div className="dot-line"></div>

          </div>

          <div className="text">

<img
  src="/mascot/name.png"
  alt="リード君"
  className="name-logo"
/>

<div className="name-dots"></div>

            <p>
              みんなをリードしてくれる元気いっぱいのペンギン！好奇心旺盛でいつも新しいことにチャレンジしているよ！
            </p>

          </div>

        </div>

  {/* =========================
    特徴
========================= */}
<h2 className="feature-title">
  <span className="line"></span>

  <span className="feature-label">
    特徴
  </span>

  <span className="line"></span>
</h2>
<div className="grid">

  <div className="left">

<div className="item blue">
  <div className="item-title">
    <img src="/mascot/male.png" alt="" />
    <span>性別</span>
  </div>
  <b>オス</b>
</div>

<div className="item green">
  <div className="item-title">
    <img src="/mascot/heart.png" alt="" />
    <span>性格</span>
  </div>
  <b>情熱的・仲間思い</b>
</div>

<div className="item orange">
  <div className="item-title">
    <img src="/mascot/food.png" alt="" />
    <span>好きなもの</span>
  </div>
  <b>魚</b>
</div>
  </div>

  <div className="right">

<h3 className="other-title">
  <img src="/mascot/star.png" alt="" className="other-title-icon" />
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

        {/* =========================
            投票
        ========================= */}
        <div className="vote">

          <p>\\　このマスコットを応援しよう！　//</p>

          <button>投票する</button>

          <small>
            あなたの応援が力になります！
          </small>

        </div>

      </div>

    </div>
  );
};

export default MascotDetail;