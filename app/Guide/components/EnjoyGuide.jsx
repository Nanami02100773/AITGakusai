"use client";

import "./EnjoyGuide.css";

export default function EnjoyGuide() {
  return (
    <section className="Enjoy-Guide-section">

      {/* ==========================
          タイトル
      ========================== */}

      <div className="Enjoy-Guide-header">

        <div className="Enjoy-Guide-number">
          10
        </div>

        <h1>
          楽しもう！
        </h1>

      </div>


      {/* ==========================
          メインボックス
      ========================== */}

      <div className="Enjoy-Guide-content">

        {/* ==========================
            マスコット画像
        ========================== */}

        <div className="Enjoy-Guide-image-box">

          <img
            src="/mascot.png"
            alt="愛工大祭マスコット"
          />

        </div>


        {/* ==========================
            メッセージ
        ========================== */}

        <div className="Enjoy-Guide-text">

          <p>愛工大祭を思いっきり楽しんでください！</p>

          <p>最高の思い出を一緒につくろう！</p>

        </div>

      </div>

    </section>
  );
}