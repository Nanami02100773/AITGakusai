"use client";

import React, { useEffect, useState } from "react";
import "./IntroductoryItems.css";

import no1Image1 from "./Group/No.1/1.jpg";
import no1Image2 from "./Group/No.1/2.jpg";
import no1Image3 from "./Group/No.1/3.jpg";
import no1Image4 from "./Group/No.1/4.jpg";
import no1Image5 from "./Group/No.1/5.jpg";
import no1Image6 from "./Group/No.1/6.jpg";
import no1Image7 from "./Group/No.1/7.jpg";
import no1Image8 from "./Group/No.1/8.jpg";

/* ==========================================
   出展団体データ
========================================== */

const cardData = [
  {
    group: "海洋調査ロボットプロジェクト2026",
    title: "紹介文1",
    subdesc1:
      "海洋調査ロボットプロジェクトでは、「現場で使える水中ロボット」をテーマに水中生物を模倣した生物模倣型ロボットやスクリュースラスタで推進するスクリュースラスタ型ロボットを開発しています。水中ロボットコンテストへの出場に加え、校外イベントでは開発しているロボットのデモンストレーションも行っています。",
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
    title: "紹介文2",
    subdesc1:
      "『Japan Steel Bridge Competition』という日本中の大学・高専が4000mmほどの橋梁を制作して、その橋梁の美観、架設時間、たわみなどを競う大会に出場してます。大学では鋼材の切断や穴あけ、溶接などの加工を行っています。去年の大会では美観5位を取りました。",
    images: [],
  },
  {
    group: "筑波モデルロケットプロジェクト",
    title: "紹介文3",
    subdesc1:
      "火薬エンジンで打ち上がるミニロケットが一瞬で高度100m以上へ飛ぶ「モデルロケット全国大会」。私たち筑波モデルロケットプロジェクトは、ほぼゼロから知識を学び直しながら、機体設計・3Dプリントでの部品製作・試験飛行までを自分たちの手で行い、同大会での飛行を目指して活動しています。",
    images: [],
  },
  {
    group: "種子島ロケットプロジェクト",
    title: "紹介文4",
    subdesc1:
      "私たちは第23回種子島ロケットコンテストでの優勝・上位入賞を目指すプロジェクトです。前年度では上位入賞を果たした経験と明らかとなった課題を踏まえ、自作モデルロケットの設計精度と完成度を追求。設計・製作・打上げ・評価までを一貫して手掛け、実践的な技術力と課題解決力を磨きながら、継続的に成果を出す体制構築に取り組んでいます。",
    images: [],
  },
  {
    group: "AIT 鉄人プロジェクト",
    title: "紹介文5",
    subdesc1:
      "私たちは、大学公式イメージキャラクター「鉄人28号」を学生の手で実現するプロジェクトです。現在は23代目の機体を開発し、最先端のAI技術である強化学習を用いた歩行制御に取り組んでいます。また、地域連携活動を通して、子どもたちにものづくりの楽しさを伝えています。",
    images: [],
  },
  {
    group: "過疎地域における魅力向上および活性化プロジェクト",
    title: "紹介文6",
    subdesc1:
      "本プロジェクトでは、愛知県設楽町名倉地区と西尾市佐久島を対象に、宿泊施設を拠点とした地域の魅力向上と活性化に取り組みます。具体的には、KAKOUBAデッキや草原テラスのDIY製作、空き家の改修を通じて地域資源を活用し、新たな価値を創出するとともに、交流人口の拡大や持続可能な地域づくりを目指します。",
    images: [],
  },
  {
    group: "本棚制作ワークショップの実施",
    title: "紹介文7",
    subdesc1:
      "本プロジェクトは、瀬戸市立図書館にて実施する、わくわく本棚づくりWSを通じて、子どもたちの読書への関心と創造性の向上を目的とする。近年、デジタル化の進展により読書離れが進む一方で、図書館には単なる本の貸出機能を超えた体験の場としての役割が求められている。参加者は、お気に入りの本を飾るための本棚を制作し、本と空間の関係を主体的に考える機会を得ることができる。",
    images: [],
  },
  {
    group: "団RoboCupプロジェクト",
    title: "紹介文8",
    subdesc1:
      "RoboCupプロジェクトは，AIロボットで世界を目指す学生団体です！災害救助を競うRescueと，AIサッカーのSoccerの2リーグに参加し，昨年度は国内優勝＆世界大会2位という実績も！今年はSoccerで世界大会初挑戦し韓国まで行きました！そんな私たちの活動内容をぜひご覧にきてください！",
    images: [],
  },
  {
    group: "団2026 Ene-1 SUZUKA Challenge, 2026 Ene-1 MOTEGI GP KV-40への挑戦",
    title: "紹介文9",
    subdesc1:
      "私たちは年に2回、鈴鹿サーキットとモビリティリゾートもてぎで行われるEne-1に向けてモーターカーを作っているグループです。Ene-1で好成績を収める事を目的として活動しています。Ene-1とは、単三電池40本を動力にしたモーターカーで、タイムを競い合うレース競技です。参加者全員が同じ動力となる為、その限られた動力をどのような工夫で、どれほど速く、どれほど長く動かせるかがこの競技の魅力になります。私たちもEne-1に向けて毎年様々な工夫をしていますので、是非その目でご覧ください。",
    images: [],
  },
  {
    group: "KAIT Racer GP（AIで走る自動運転カーレース）の参戦",
    title: "紹介文10",
    subdesc1:
      "KAIT Racer GPは、RCカーを用いてAIで走る自動運転車の開発に挑戦するプロジェクトです。カメラやLIDARで周囲を認識し、経路計画からモータ制御までを学生の手で構築。ものづくりと情報技術を融合し、走行実験と改善を重ねながら、自律走行する未来のモビリティを小さな車体で実現します。",
    images: [],
  },
  {
    group: "奥川研究室",
    title: "紹介文11",
    subdesc1:
      "レスキューロボットについて研究しています！",
    images: [],
  },
  {
    group: "団システム工学研究",
    title: "紹介文12",
    subdesc1:
      "システム工学研究会は、アプリケーション作成やサーバ保守管理、デザイン、電子工作といったハードウェア分野まで、ITに関する様々な活動をしています。ハッカソンやイベントに自主的に参加し、技術力の向上を目指す部員が集まっています。",
    images: [],
  },
  {
    group: "内田研究室",
    title: "紹介文13",
    subdesc1:
      "こんにちは！内田研究室です！内田研究室では主にロボットの研究開発を行っており、今回の大学祭ではからくり・草刈り・SR(サービスロボット)の３つの班から出展します。からくり班からは電源を必要としない無人搬送車、草刈り班からは自律走行のできる草刈り機、SR班からは、清掃や介護を行う多機能サービスロボットを展示しています。",
    images: [],
  },
  {
    group: "SL同好会",
    title: "紹介文14",
    subdesc1:
      "SL同好会では、ミニSLの製作・整備・運転を通して、ものづくりの楽しさや機械の仕組みを学んでいます。学内イベントや地域の催しにも参加し、子どもたちに乗車体験を提供しています。学年を問わず仲良く活動しており、機械や鉄道に興味がある人はもちろん、初心者も大歓迎です。",
    images: [],
  },
  {
    group: "団みらい工房物創りクラブ",
    title: "紹介文15",
    subdesc1:
      "みらい工房で作成した木工作品を販売します！木のぬくもりを感じる作品をぜひ手にとってみてください！",
    images: [],
  },
];

/* ==========================================
   コンポーネント
========================================== */

const Koukaten = () => {
  const [currentImages, setCurrentImages] = useState(
    cardData.map(() => 0)
  );

  /* ==========================================
     写真を自動切り替え
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
    <section className="Koukaten-section">

      {/* タイトル */}
      <div className="Koukaten-section-wrapper">
        <div className="Koukaten-section-title">
          出展団体
        </div>
      </div>

      {/* カード一覧 */}
      <main className="Koukaten-card-list">
        <div className="Koukaten-card-wrapper">

          {cardData.map((item, index) => (
            <div
              className="Koukaten-card"
              key={index}
            >

              {/* 左側 */}
              <div className="Koukaten-card-left">
                <div className="Koukaten-thumb-wrapper">

                  {/* 団体名 */}
                  <div className="Koukaten-overlay-box">
                    {item.group}
                  </div>

                  {/* 画像 */}
                  <div className="Koukaten-thumb">
                    {item.images.length > 0 && (
                      <img
                        src={
                          item.images[
                            currentImages[index]
                          ].src
                        }
                        alt={`${item.group} 写真`}
                      />
                    )}
                  </div>

                </div>
              </div>

              {/* 区切り線 */}
              <div className="Koukaten-card-divider"></div>

              {/* 右側 */}
              <div className="Koukaten-card-right">

                <div className="Koukaten-sub1-title">
                  {item.title}
                </div>

                <div className="Koukaten-introduction1-subdesc">
                  {item.subdesc1}
                </div>

              </div>

            </div>
          ))}

        </div>
      </main>

    </section>
  );
};

export default Koukaten;