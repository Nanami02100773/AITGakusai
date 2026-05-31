"use client";

import React from "react";
import "./MascotDetail.css";

const MascotDetail = () => {
  return (
    <div className="page">

   <div className="card">

  <div className="card-white-left"></div>
<div className="card-white-center"></div>
<div className="card-white-right"></div>

  <div className="top-line"></div>

  {/* 中身 */}

        {/* =========================
            上部プロフィール
        ========================= */}
        <div className="hero">

          <div className="mascot-area">

            <img
              src="/leadkun.png"
              alt="リード君"
              className="image"
            />

      

            <div className="dot-line"></div>

          </div>

          <div className="text">

            <h1>リード君</h1>

            <p>
              みんなをリードしてくれる、
              元気いっぱいのペンギン！
              好奇心旺盛で、
              いつも新しいことに
              チャレンジ！
            </p>

          </div>

        </div>

        {/* =========================
            特徴
        ========================= */}
        <h2>特徴</h2>
<div className="grid">

  <div className="left">

    <div className="item blue">
      <span>性別</span>
      <b>オス</b>
    </div>

    <div className="item green">
      <span>性格</span>
      <b>情熱的・仲間思い</b>
    </div>

    <div className="item orange">
      <span>好きなもの</span>
      <b>魚</b>
    </div>

  </div>

  <div className="right">

    <h3>その他</h3>

    <ul>
      <li>ゼン君の先輩</li>
      <li>猫舌</li>
      <li>おっちょこちょい</li>
      <li>モテモテ</li>
      <li>シャチに追いかけまわされたことがトラウマで、海洋恐怖症になった。</li>
    </ul>

  </div>

</div>

        {/* =========================
            投票
        ========================= */}
        <div className="vote">

          <p>このマスコットを応援しよう！</p>

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