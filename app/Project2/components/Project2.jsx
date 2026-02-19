import Link from "next/link";
import "./Project2.css";

export default function Project2() {
  return (
    <div className="Project2-container">

      {/* =========================
          企画紹介
      ========================= */}
      <div className="Project2-title">企画紹介</div>

      <div className="Project2-grid">

        <Link href="/ProjectStampRally" className="Project2-card">
          <div className="Project2-image"></div>
          <p className="Project2-label">スタンプラリー</p>
        </Link>

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
          <p className="Project2-label">後夜祭</p>
        </Link>

      </div>


      {/* =========================
          協賛企業
      ========================= */}
      <div className="Project2-title" style={{ marginTop: "80px" }}>
        協賛企業
      </div>

      <div className="Project2-grid">

        <Link href="/ProjectCompany" className="Project2-card">
          <div className="Project2-image"></div>
          <p className="Project2-label">企業1</p>
        </Link>

        <Link href="/ProjectCompany2" className="Project2-card">
          <div className="Project2-image"></div>
          <p className="Project2-label">企業2</p>
        </Link>

        <Link href="/ProjectCompany3" className="Project2-card">
          <div className="Project2-image"></div>
          <p className="Project2-label">企業3</p>
        </Link>

        <Link href="/ProjectCompany4" className="Project2-card">
          <div className="Project2-image"></div>
          <p className="Project2-label">企業4</p>
        </Link>

      </div>

    </div>
  );
}
