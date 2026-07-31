"use client";

import Link from "next/link";
import "./Section.css";

export default function Section() {
  return (
    <section className="Project-Section-section">

      <div className="Project-Section-container">

        {/* タイトル */}
        <div className="Project-Section-title">
          企画紹介
        </div>

        {/* 教室企画 */}
        <div className="Project-Section-category">

          <div className="Project-Section-header">

            <img
              src="/projectsection/school.png"
              alt="教室企画"
              className="Project-Section-header-image"
            />

            <div className="Project-Section-header-text">
              <div className="Project-Section-header-title">
                教室企画
              </div>

              <div className="Project-Section-header-description">
                各教室で行われる展示や体験型の企画を楽しもう！
              </div>
            </div>

          </div>

          <div className="Project-Section-grid">

            <Card
              title="スタンプラリー"
              link="/ProjectStampRally"
              image="/projectsection/stamprally.png"
            />

            <Card
              title="工科展"
              link="/ProjectKoukaten"
              image="/projectsection/kokaten.png"
            />

            <Card
              title="クラブ展"
              link="/ProjectKurabuten"
              image="/projectsection/clubten.png"
            />

            <Card
              title="きらきら PAKE"
              link="/ProjectWakuwakuLand"
              image="/projectsection/kirakirapark.png"
              className="wakuwaku"
            />

            <Card
              title="MAKE"
              link="/ProjectMake"
              image="/projectsection/make.png"
            />

            <Card
              title="脱出ゲーム"
              link="/ProjectDasstsu"
              image="/projectsection/dassyutsu.png"
            />

            <Card
              title="献血"
              link="/ProjectKenketsu"
              image="/projectsection/kenketsu.png"
            />

            <Card
              title="楽市楽座"
              link="/ProjectRakuiti"
              image="/projectsection/rakuichi.png"
            />

            <Card
              title="ルミノス"
              link="/ProjectTorezoru1"
              image="/projectsection/luminos.png"
            />

            <Card
              title="Concert"
              link="/ProjectConcert"
              image="/projectsection/concert.png"
            />

          </div>

        </div>

        {/* ステージ企画 */}
        <div className="Project-Section-category stage">

          <div className="Project-Section-header">

            <img
              src="/projectsection/stage.png"
              alt="ステージ企画"
              className="Project-Section-header-image"
            />

            <div className="Project-Section-header-text">
              <div className="Project-Section-header-title">
                ステージ企画
              </div>

              <div className="Project-Section-header-description">
                ライブやイベントなど、盛り上がる企画が盛りだくさん！
              </div>
            </div>

          </div>

          <div className="Project-Section-grid">

            <Card
              title="LaughMusic"
              link="/ProjectLaughMusic"
              image="/projectsection/laughmusic.png"
            />

            <Card
              title="狂夜祭"
              link="/ProjectKyouyasai"
              image="/projectsection/kyoyasai.png"
            />

            <Card
              title="後夜祭"
              link="/ProjectKouyasai"
              image="/projectsection/koyasai.png"
            />

          </div>

        </div>

      </div>

      <div className="Project-Section-line"></div>

    </section>
  );
}

function Card({
  title,
  link,
  image,
  className = "",
}) {
  return (
    <Link
      href={link}
      className={`Project-Section-card ${className}`}
    >

      <div className="Project-Section-card-image-area fancy">
        <img
          src={image}
          alt={title}
          className="Project-Section-card-image"
        />
      </div>

      <div className="Project-Section-card-footer">
        <p className="Project-Section-card-title">
          {title}
        </p>
      </div>

      <div className="Project-Section-card-arrow">
        ＞
      </div>

    </Link>
  );
}