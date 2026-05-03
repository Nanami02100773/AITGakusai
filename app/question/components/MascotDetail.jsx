"use client";
import React from "react";
import "./MascotDetail.css";

const MascotDetail = () => {
  return (
    <div className="page">
      {/* 背景装飾 */}
      <div className="bg-pink"></div>
      <div className="bg-blue"></div>
      <div className="bg-yellow"></div>

      {/* メイン */}
      <div className="hero">
        <div className="image">マスコット</div>

        <div className="text">
          <h1>マスコット</h1>
          <p>
            みんなをリードしてくれる、元気いっぱいのマスコット！<br />
            好奇心旺盛で、いつも新しいことにチャレンジ！
          </p>
        </div>
      </div>

      {/* カード */}
      <div className="card">
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
              <li>元気いっぱい</li>
              <li>ちょっとドジ</li>
              <li>人気者</li>
            </ul>
          </div>
        </div>

        <div className="vote">
          <p>このマスコットを応援しよう！</p>
          <button>投票する</button>
          <small>あなたの応援が力になります！</small>
        </div>
      </div>
    </div>
  );
};

export default MascotDetail;