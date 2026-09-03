"use client";

import React, { useEffect, useState } from "react";
import "./IntroductoryItems.css";


/* ==========================================
   No.1
========================================== */

import no1Image1 from "./Group/No.1/1.jpg";
import no1Image2 from "./Group/No.1/2.jpg";
import no1Image3 from "./Group/No.1/3.jpg";
import no1Image4 from "./Group/No.1/4.jpg";
import no1Image5 from "./Group/No.1/5.jpg";
import no1Image6 from "./Group/No.1/6.jpg";
import no1Image7 from "./Group/No.1/7.jpg";
import no1Image8 from "./Group/No.1/8.jpg";


/* ==========================================
   No.2
========================================== */

import no2Image1 from "./Group/No.2/1.jpg";


/* ==========================================
   No.3
========================================== */

import no3Image1 from "./Group/No.3/1.jpg";


/* ==========================================
   No.4
========================================== */

import no4Image1 from "./Group/No.4/1.jpg";


/* ==========================================
   No.5
========================================== */

import no5Image1 from "./Group/No.5/1.jpg";
import no5Image2 from "./Group/No.5/2.jpg";
import no5Image3 from "./Group/No.5/3.jpg";
import no5Image4 from "./Group/No.5/4.jpg";
import no5Image5 from "./Group/No.5/5.jpg";
import no5Image6 from "./Group/No.5/6.jpg";
import no5Image7 from "./Group/No.5/7.jpg";


/* ==========================================
   No.6
========================================== */

import no6Image1 from "./Group/No.6/1.jpg";


/* ==========================================
   No.7
========================================== */

import no7Image1 from "./Group/No.7/1.jpg";


/* ==========================================
   No.8
========================================== */

import no8Image1 from "./Group/No.8/1.jpg";
import no8Image2 from "./Group/No.8/2.jpg";
import no8Image3 from "./Group/No.8/3.jpg";
import no8Image4 from "./Group/No.8/4.jpg";
import no8Image5 from "./Group/No.8/5.jpg";
import no8Image6 from "./Group/No.8/6.jpg";
import no8Image7 from "./Group/No.8/7.jpg";
import no8Image8 from "./Group/No.8/8.jpg";


/* ==========================================
   No.9
========================================== */

import no9Image1 from "./Group/No.9/1.jpg";


/* ==========================================
   No.10
========================================== */

import no10Image1 from "./Group/No.10/1.png";
import no10Image2 from "./Group/No.10/2.png";


/* ==========================================
   No.11
========================================== */

import no11Image1 from "./Group/No.11/1.jpg";
import no11Image2 from "./Group/No.11/2.jpg";
import no11Image3 from "./Group/No.11/3.jpg";
import no11Image4 from "./Group/No.11/4.jpg";


/* ==========================================
   No.12
========================================== */

import no12Image1 from "./Group/No.12/1.jpg";


/* ==========================================
   No.13
========================================== */

import no13Image1 from "./Group/No.13/1.png";
import no13Image2 from "./Group/No.13/2.jpg";


/* ==========================================
   No.14
========================================== */

import no14Image1 from "./Group/No.14/1.jpg";


/* ==========================================
   No.15
========================================== */

import no15Image1 from "./Group/No.15/1.png";


/* ==========================================
   出展団体データ
========================================== */

const cardData = [

  {
    group: "海洋調査ロボットプロジェクト2026",
    subdesc1:
      "海洋調査ロボットでは、「現場で使える水中ロボット」をテーマに水中生物を模倣した生物模倣型ロボットやスクリュースラスタで推進するスクリュースラスタ型ロボットを開発しています。水中ロボットコンテストへの出場に加え、校外イベントでは開発しているロボットのデモンストレーションも行っています。",
    images: [
      no1Image1,
      no1Image2,
      no1Image3,
      no1Image4,
      no1Image5,
      no1Image6,
      no1Image7,
      no1Image8,
    ],
  },

  {
    group: "JSBC2026",
    subdesc1:
      "『Japan Steel Bridge Competition』という日本中の大学・高専が4000mmほどの橋梁を制作して、その橋梁の美観、架設時間、たわみなどを競う大会に出場してます。大学では鋼材の切断や穴あけ、溶接などの加工を行っています。去年の大会では美観5位を取りました。",
    images: [
      no2Image1,
    ],
  },

  {
    group: "筑波モデルロケットプロジェクト",
    subdesc1:
      "火薬エンジンで打ち上がるミニロケットが一瞬で高度100m以上へ飛ぶ「モデルロケット全国大会」。私たち筑波モデルロケットプロジェクトは、ほぼゼロから知識を学び直しながら、機体設計・3Dプリントでの部品製作・試験飛行までを自分たちの手で行い、同大会での飛行を目指して活動しています。",
    images: [
      no3Image1,
    ],
  },

  {
    group: "種子島ロケットプロジェクト",
    subdesc1:
      "私たちは第23回種子島ロケットコンテストでの優勝・上位入賞を目指すプロジェクトです。前年度では上位入賞を果たした経験と明らかとなった課題を踏まえ、自作モデルロケットの設計精度と完成度を追求。設計・製作・打上げ・評価までを一貫して手掛け、実践的な技術力と課題解決力を磨きながら、継続的に成果を出す体制構築に取り組んでいます。",
    images: [
      no4Image1,
    ],
  },

  {
    group: "AIT 鉄人プロジェクト",
    subdesc1:
      "私たちは、大学公式イメージキャラクター「鉄人28号」を学生の手で実現するプロジェクトです。現在は23代目の機体を開発し、最先端のAI技術である強化学習を用いた歩行制御に取り組んでいます。また、地域連携活動を通して、子どもたちにものづくりの楽しさを伝えています。",
    images: [
      no5Image1,
      no5Image2,
      no5Image3,
      no5Image4,
      no5Image5,
      no5Image6,
      no5Image7,
    ],
  },

  {
    group: "過疎地域における魅力向上および活性化プロジェクト",
    subdesc1:
      "本プロジェクトでは、愛知県設楽町名倉地区と西尾市佐久島を対象に、宿泊施設を拠点とした地域の魅力向上と活性化に取り組みます。具体的には、KAKOUBAデッキや草原テラスのDIY製作、空き家の改修を通じて地域資源を活用し、新たな価値を創出するとともに、交流人口の拡大や持続可能な地域づくりを目指します。",
    images: [
      no6Image1,
    ],
  },

  {
    group: "本棚制作ワークショップの実施",
    subdesc1:
      "本プロジェクトは、瀬戸市立図書館にて実施する、わくわく本棚づくりWSを通じて、子どもたちの読書への関心と創造性の向上を目的とする。近年、デジタル化の進展により読書離れが進む一方で、図書館には単なる本の貸出機能を超えた体験の場としての役割が求められている。参加者は、お気に入りの本を飾るための本棚を制作し、本と空間の関係を主体的に考える機会を得ることができる。",
    images: [
      no7Image1,
    ],
  },

  {
    group: "団RoboCupプロジェクト",
    subdesc1:
      "RoboCupプロジェクトは，AIロボットで世界を目指す学生団体です！災害救助を競うRescueと，AIサッカーのSoccerの2リーグに参加し，昨年度は国内優勝＆世界大会2位という実績も！今年はSoccerで世界大会初挑戦し韓国まで行きました！そんな私たちの活動内容をぜひご覧にきてください！",
    images: [
      no8Image1,
      no8Image2,
      no8Image3,
      no8Image4,
      no8Image5,
      no8Image6,
      no8Image7,
      no8Image8,
    ],
  },

  {
    group:
      "団2026 Ene-1 SUZUKA Challenge, 2026 Ene-1 MOTEGI GP KV-40への挑戦",
    subdesc1:
      "私たちは年に2回、鈴鹿サーキットとモビリティリゾートもてぎで行われるEne-1に向けてモーターカーを作っているグループです。Ene-1で好成績を収める事を目的として活動しています。Ene-1とは、単三電池40本を動力にしたモーターカーで、タイムを競い合うレース競技です。参加者全員が同じ動力となる為、その限られた動力をどのような工夫で、どれほど速く、どれほど長く動かせるかがこの競技の魅力になります。私たちもEne-1に向けて毎年様々な工夫をしていますので、是非その目でご覧ください。",
    images: [
      no9Image1,
    ],
  },

  {
    group:
      "KAIT Racer GP（AIで走る自動運転カーレース）の参戦",
    subdesc1:
      "KAIT Racer GPは、RCカーを用いてAIで走る自動運転車の開発に挑戦するプロジェクトです。カメラやLIDARで周囲を認識し、経路計画からモータ制御までを学生の手で構築。ものづくりと情報技術を融合し、走行実験と改善を重ねながら、自律走行する未来のモビリティを小さな車体で実現します。",
    images: [
      no10Image1,
      no10Image2,
    ],
  },

  {
    group: "奥川研究室",
    subdesc1:
      "レスキューロボットについて研究しています！",
    images: [
      no11Image1,
      no11Image2,
      no11Image3,
      no11Image4,
    ],
  },

  {
    group: "団システム工学研究",
    subdesc1:
      "システム工学研究会は、アプリケーション作成やサーバ保守管理、デザイン、電子工作といったハードウェア分野まで、ITに関する様々な活動をしています。ハッカソンやイベントに自主的に参加し、技術力の向上を目指す部員が集まっています。",
    images: [
      no12Image1,
    ],
  },

  {
    group: "内田研究室",
    subdesc1:
      "こんにちは！内田研究室です！内田研究室では主にロボットの研究開発を行っており、今回の大学祭ではからくり・草刈り・SR(サービスロボット)の３つの班から出展します。からくり班からは電源を必要としない無人搬送車、草刈り班からは自律走行のできる草刈り機、SR班からは、清掃や介護を行う多機能サービスロボットを展示しています。",
    images: [
      no13Image1,
      no13Image2,
    ],
  },

  {
    group: "SL同好会",
    subdesc1:
      "SL同好会では、ミニSLの製作・整備・運転を通して、ものづくりの楽しさや機械の仕組みを学んでいます。学内イベントや地域の催しにも参加し、子どもたちに乗車体験を提供しています。学年を問わず仲良く活動しており、機械や鉄道に興味がある人はもちろん、初心者も大歓迎です。",
    images: [
      no14Image1,
    ],
  },

  {
    group: "団みらい工房物創りクラブ",
    subdesc1:
      "みらい工房で作成した木工作品を販売します！木のぬくもりを感じる作品をぜひ手にとってみてください！",
    images: [
      no15Image1,
    ],
  },

];


/* ==========================================
   コンポーネント
========================================== */

const IntroductoryItems = () => {

  const [currentImages, setCurrentImages] = useState(
    cardData.map(() => 0)
  );


  /* ==========================================
     写真を5秒ごとに切り替え
  ========================================== */

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentImages((prev) =>
        prev.map((current, index) => {

          const images = cardData[index].images;

          if (!images || images.length <= 1) {
            return 0;
          }

          return (current + 1) % images.length;

        })
      );

    }, 5000);

    return () => clearInterval(timer);

  }, []);


  return (
    <section className="IntroductoryItems-section">


      {/* ==========================================
          セクションタイトル
      ========================================== */}

      <div className="IntroductoryItems-section-wrapper">

        <div className="Koukaten-section-title">
          出展団体
        </div>

      </div>


      {/* ==========================================
          カード一覧
      ========================================== */}

      <main className="IntroductoryItems-card-list">

        <div className="IntroductoryItems-card-wrapper">

          {cardData.map((item, index) => {

            const imageCount = item.images.length;
            const currentImage = currentImages[index];

            return (

              <div
                className="IntroductoryItems-card"
                key={index}
              >


                {/* ==================================
                    番号＋団体名
                ================================== */}

                <div className="IntroductoryItems-top">

                  <div className="IntroductoryItems-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="IntroductoryItems-group">
                    {item.group}
                  </div>

                </div>


                {/* ==================================
                    ピンクライン
                ================================== */}

                <div className="IntroductoryItems-red-line"></div>


                {/* ==================================
                    紹介文
                ================================== */}

                <div className="IntroductoryItems-description">
                  {item.subdesc1}
                </div>


                {/* ==================================
                    画像
                ================================== */}

                <div className="IntroductoryItems-thumb">

                  {imageCount > 0 ? (

                    <>

                      {/* ==============================
                          写真
                      ============================== */}

                      <img
                        key={`${index}-${currentImage}`}
                        src={item.images[currentImage].src}
                        alt={`${item.group} 写真 ${currentImage + 1}`}
                        className="IntroductoryItems-thumb-image"
                      />


                      {/* ==============================
                          写真枚数
                      ============================== */}

                      {imageCount > 1 && (

                        <div className="IntroductoryItems-photo-count">
                          {currentImage + 1} / {imageCount}
                        </div>

                      )}


                      {/* ==============================
                          写真ドット
                      ============================== */}

                      {imageCount > 1 && (

                        <div className="IntroductoryItems-photo-dots">

                          {item.images.map((_, imageIndex) => (

                            <span
                              key={imageIndex}
                              className={
                                imageIndex === currentImage
                                  ? "IntroductoryItems-photo-dot active"
                                  : "IntroductoryItems-photo-dot"
                              }
                            />

                          ))}

                        </div>

                      )}

                    </>

                  ) : (

                    <div className="IntroductoryItems-no-image">
                      PHOTO
                    </div>

                  )}

                </div>

              </div>

            );

          })}

        </div>

      </main>

    </section>
  );
};


export default IntroductoryItems;