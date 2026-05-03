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
            <div className="Project2-feature-image"></div>

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
            <Card title="スタンプラリー" link="/ProjectStampRally" />
            <Card title="工科展" link="/ProjectKoukaten" />
            <Card title="クラブ展" link="/ProjectKurabuten" />
<Card title="WAKUWAKU LAND" link="/ProjectWakuwakuLand" className="wakuwaku" />            <Card title="MAKE" link="/ProjectMake" />
            <Card title="脱出ゲーム" link="/ProjectDasstsu" />
            <Card title="献血" link="/ProjectKenketsu" />
            <Card title="楽市楽座" link="/ProjectRakuiti" />
            <Card title="トレゾール" link="/ProjectTorezoru1" />
            <Card title="Concert" link="/ProjectConcert" />
          </div>
        </div>

        {/* ===== ステージ企画 ===== */}
        <div className="Project2-box stage">

          <div className="Project2-feature">
            <div className="Project2-feature-image"></div>

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
            <Card title="LaughMusic" link="/ProjectLaughMusic" />
            <Card title="狂夜祭" link="/ProjectKyouyasai" />
            <Card title="後夜祭" link="/ProjectKouyasai" />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ===== カード ===== */
function Card({ title, link, className = "" }) {
  return (
    <Link href={link} className={`Project2-card ${className}`}>

      <div className="Project2-image fancy"></div>

      <div className="Project2-bottom">
        <p className="Project2-label">{title}</p>
      </div>

      <div className="Project2-arrow">＞</div>

    </Link>
  );
}