"use client";

import React from "react";
import "./Playground.css";

import no1Image from "./Play/No.1.jpg";
import no2Image from "./Play/No.2.jpg";
import no3Image from "./Play/No.3.jpg";
import no5Image from "./Play/No.5.jpg";
import no6Image from "./Play/No.6.jpg";

/* ==========================================
   ゲーム・体験データ
========================================== */

const cardData = [
  {
    title: "動物園",
    category: "ふれあい体験",
    location: "1号館 1階ピロティ",
    image: no1Image,

    content:
      "動物とふれあったり、動物との接し方を学んだりしながら、動物園を楽しみます！",

    notices: [
      "動物にらんぼうをしないでね。",
      "動物をフェンスの外に出さないでね。",
      "動物にうんちやおしっこをかけられるときがあるので気をつけてね。",
      "動物園に入れないときがあります。",
      "大学祭実行委員の指示に従ってください。",
    ],
  },

  {
    title: "エアー遊具",
    category: "ふわふわ遊具",
    location: "第1本部棟前",
    image: no2Image,

    content:
      "大きなエアー遊具で思いっきり遊ぼう！子どもから大人まで楽しめる体験です。",

    notices: [
      "中で食べたり飲んだりしないでね。",
      "靴は脱いで入ってね。",
      "時間制だから時間は守ってね。",
      "大学祭実行委員の指示に従い、順番を守ってね。",
      "荷物は荷物預け場所に預けてね。",
      "ポケットの中の物も出してね。",
      "万が一の破損・紛失・盗難等について、責任は負いません。",
      "怪我やトラブルについては自己責任となりますのでご了承ください。",
    ],
  },

  {
    title: "さかなつり",
    category: "ゲーム",
    location: "さかなつりテント",
    image: no3Image,

    content:
      "釣りざおを使って魚を釣ろう！制限時間30秒で、何匹釣れるか挑戦してみよう！",

    notices: [
      "制限時間は30秒です。",
      "4人まで一緒にゲームできます。",
      "おにいさん、おねえさんの言うことをよく聞いて、楽しく遊んでね。",
      "大学祭実行委員の指示に従ってください。",
      "お荷物はご自分で管理してください。",
      "万が一の破損・紛失・盗難等について、責任は負いません。",
    ],
  },

  {
    title: "ボウリング",
    category: "ゲーム",
    location: "ボウリングテント",
    image: no3Image,

    content:
      "ボールを転がして、なるべく多くのピンを倒そう！1人2回まで挑戦できます。",

    notices: [
      "1人2回まで投げることができます。",
      "ボールは上から投げず、下から投げよう。",
      "おにいさん、おねえさんの言うことをよく聞いて、楽しく遊んでね。",
      "大学祭実行委員の指示に従ってください。",
      "お荷物はご自分で管理してください。",
      "万が一の破損・紛失・盗難等について、責任は負いません。",
    ],
  },

  {
    title: "射的",
    category: "ゲーム",
    location: "射的テント",
    image: no5Image,

    content:
      "射的銃を使って的を狙おう！1人5回まで挑戦できます。",

    notices: [
      "1人5回まで撃つことができます。",
      "合計点数を得点カードに書いてもらってね。",
      "おにいさん、おねえさんの言うことをよく聞いて、楽しく遊んでね。",
      "大学祭実行委員の指示に従ってください。",
      "お荷物はご自分で管理してください。",
      "万が一の破損・紛失・盗難等について、責任は負いません。",
    ],
  },

  {
    title: "景品交換所",
    category: "景品交換",
    location: "景品交換所テント",
    image: no6Image,

    content:
      "射的・ボウリング・さかなつり・エアー遊具をすべて楽しんだら、得点カードを持って景品交換所へ！得点に応じた景品や、コンプリート特典を受け取ろう！",

    notices: [
      "得点カードを忘れずに持ってきてね。",
      "4つのゲームをすべて楽しんだら、コンプリート特典がもらえるよ。",
      "景品は先着順で、なくなり次第終了です。",
      "景品の交換は1人1回までです。",
      "景品交換所では大学祭実行委員の指示に従ってください。",
      "景品の数には限りがあります。",
    ],
  },
];


/* ==========================================
   コンポーネント
========================================== */

export default function Playground() {
  return (
    <section className="kirakiraparc-section">

      {/* ==========================================
          セクションタイトル
      ========================================== */}

      <div className="kirakiraparc-section-wrapper">
        <h2 className="kirakiraparc-section-title">
          ゲーム紹介
        </h2>
      </div>


      {/* ==========================================
          タイトル以外を囲う背景ボックス
      ========================================== */}

      <main className="kirakiraparc-card-list">

        {cardData.map((item, index) => (

          <article
            className="kirakiraparc-card"
            key={index}
          >

            {/* ==========================================
                左側
            ========================================== */}

            <div className="kirakiraparc-card-left">

              <div
                className="kirakiraparc-thumb"
                style={{
                  "--playground-bg": `url(${item.image.src})`,
                }}
              >

                {/* 企画名 */}

                <div className="kirakiraparc-thumb-title-area">

                  <span className="kirakiraparc-thumb-main-title">
                    {item.title}
                  </span>

                  <span className="kirakiraparc-thumb-category">
                    ～ {item.category} ～
                  </span>

                </div>


                {/* ==========================================
                    四角い写真
                ========================================== */}

                <div className="kirakiraparc-image-circle">

                  <img
                    src={item.image.src}
                    alt={item.title}
                    className="kirakiraparc-image"
                  />

                </div>


                {/* ==========================================
                    場所
                ========================================== */}

                <div className="kirakiraparc-location-box">

                  <div className="kirakiraparc-location-icon">
                    ●
                  </div>

                  <div className="kirakiraparc-location-content">

                    <span className="kirakiraparc-location-label">
                      場所
                    </span>

                    <span className="kirakiraparc-location-text">
                      {item.location}
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* ==========================================
                区切り線
            ========================================== */}

            <div className="kirakiraparc-card-divider"></div>


            {/* ==========================================
                右側
            ========================================== */}

            <div className="kirakiraparc-card-right">

              {/* ==========================================
                  内容
              ========================================== */}

              <div className="kirakiraparc-sub-title">

                <span className="kirakiraparc-sub-icon">
                  📄
                </span>

                <span>
                  内容
                </span>

              </div>


              <p className="kirakiraparc-description">
                {item.content}
              </p>


              {/* ==========================================
                  点線
              ========================================== */}

              <div className="kirakiraparc-dotted-line"></div>


              {/* ==========================================
                  注意事項
              ========================================== */}

              <div className="kirakiraparc-notice-title">

                <span className="kirakiraparc-warning-icon">
                  ⚠️
                </span>

                <span>
                  注意事項
                </span>

              </div>


              {/* ==========================================
                  注意事項リスト
              ========================================== */}

              <ul className="kirakiraparc-notice-list">

                {item.notices.map((notice, noticeIndex) => (

                  <li key={noticeIndex}>

                    <span className="kirakiraparc-notice-dot"></span>

                    <span className="kirakiraparc-notice-text">
                      {notice}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          </article>

        ))}

      </main>

    </section>
  );
}