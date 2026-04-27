"use client";
import Image from "next/image";
import "./Project2.css";

export default function Project2() {
  return (
    <section className="Project2-section">

      {/* ===== 画像エリア ===== */}
      <div className="Project2-hero">

        <Image
          src="/images/kikaku.jpg"
          alt="企画"
          fill
          className="Project2-image"
        />

        {/* タイトル */}
        <div className="Project2-title">
          企画、情報
        </div>

        {/* 👇 説明ボックスをここに移動 */}
        <div className="Project2-info-box">

  <div className="Project2-info-lines">
    <p className="Project2-info-text">
      本ページでは、愛工大祭で実施される各企画の内容をまとめて紹介しています。開催時間や場所なども掲載しているので、ぜひご来場の際の参考にご覧ください。
    </p>
  </div>

</div>

      </div>

      {/* ===== 下のカード ===== */}
      <div className="Project2-card">
        <div className="Project2-indicator"></div>
      </div>

    </section>
  );
}