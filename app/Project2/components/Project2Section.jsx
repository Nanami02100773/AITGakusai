import Link from "next/link";
import "./Project2Section.css";

export default function Project2Section() {
  return (
    <section className="Project2Section-root">
      <div className="Project2Section-container">

        <div className="Project2-section-title">
          企画、紹介
        </div>

        {/* ===== 教室企画 ===== */}
        <div className="Project2-box">

          {/* メインカード */}
          <Link href="/ProjectStampRally" className="Project2-feature">
            <div className="Project2-feature-image"></div>

            <div className="Project2-feature-text">
              <div className="Project2-feature-title">
                スタンプラリー
              </div>
            </div>
          </Link>

          <div className="Project2-box-title">
            教室企画
          </div>

          <div className="Project2-grid">
            <Link href="/ProjectKoukaten" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">工科展</p>
            </Link>

            <Link href="/ProjectKurabuten" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">クラブ展</p>
            </Link>

            <Link href="/ProjectWakuwakuLand" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">WAKUWAKU LAND</p>
            </Link>

            <Link href="/ProjectMake" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">MAKE</p>
            </Link>

            <Link href="/ProjectDasstsu" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">脱出ゲーム</p>
            </Link>

            <Link href="/ProjectKenketsu" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">献血</p>
            </Link>

            <Link href="/ProjectRakuiti" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">楽市楽座</p>
            </Link>

            <Link href="/ProjectTorezoru1" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">トレゾール</p>
            </Link>
          </div>
        </div>

        {/* ===== ステージ ===== */}
        <div className="Project2-box stage">

          <div className="Project2-box-title">
            ステージ企画
          </div>

          <div className="Project2-grid">
            <Link href="/ProjectConcert" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">Concert</p>
            </Link>

            <Link href="/ProjectLaughMusic" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">LaughMusic</p>
            </Link>

            <Link href="/ProjectKyouyasai" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-label">狂夜祭</p>
            </Link>

            <Link href="/ProjectKouyasai" className="Project2-card">
              <div className="Project2-image"></div>
              <p className="Project2-image"></div>
              <p className="Project2-label">後夜祭</p>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}