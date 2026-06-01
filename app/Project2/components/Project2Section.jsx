"use client";
import Link from "next/link";
import "./Project2Section.css";

export default function Project2Section() {
  return (
    <section className="Project2Section-root">

      <div className="Project2Section-container">

        {/* ===== タイトル ===== */}
        <div className="Project2-section-title">
          企画、紹介
        </div>

        {/* ===== 教室企画 ===== */}
        <div className="Project2-box">

          <div className="Project2-feature">

            <img
              src="/projectsection/stage.png"
              alt="教室企画"
              className="Project2-feature-image"
            />

            <div className="Project2-feature-text">
              <div className="Project2-feature-title">
                教室企画
              </div>

              <div className="Project2-feature-desc">
                各教室で行われる展示や体験型の企画を楽しもう！
              </div>
            </div>

          </div>

          <div className="Project2-grid">

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

        {/* ===== ステージ企画 ===== */}
        <div className="Project2-box stage">

          <div className="Project2-feature">

            <img
              src="/projectsection/stage.png"
              alt="ステージ企画"
              className="Project2-feature-image"
            />

            <div className="Project2-feature-text">
              <div className="Project2-feature-title">
                ステージ企画
              </div>

              <div className="Project2-feature-desc">
                ライブやイベントなど、盛り上がる企画が盛りだくさん！
              </div>
            </div>

          </div>

          <div className="Project2-grid">

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

      <div className="Project2Section-line"></div>

    </section>
  );
}

/* ===== カード ===== */
function Card({
  title,
  link,
  image,
  className = "",
}) {
  return (
    <Link
      href={link}
      className={`Project2-card ${className}`}
    >

      <div className="Project2-image fancy">
        <img
          src={image}
          alt={title}
          className="Project2-card-image"
        />
      </div>

      <div className="Project2-bottom">
        <p className="Project2-label">
          {title}
        </p>
      </div>

      <div className="Project2-arrow">
        ＞
      </div>

    </Link>
  );
}