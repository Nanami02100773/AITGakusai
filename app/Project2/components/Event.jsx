"use client";

import Image from "next/image";
import "./Event.css";

export default function ProjectEvent() {
  return (
    <section className="Project-Event-section">

      {/* メイン画像 */}
      <div className="Project-Event-image-area">

        <Image
          src="/img/3.jpg"
          alt="企画"
          fill
          className="Project-Event-image"
        />

        {/* タイトル */}
        <div className="Project-Event-title">
          企画紹介
        </div>

        {/* 説明 */}
        <div className="Project-Event-description-box">
          <p className="Project-Event-description-text">
            本ページでは愛工大祭で実施される各企画の内容をまとめて紹介しています。開催時間や場所なども掲載しているので、ぜひご来場の際の参考にご覧ください。
          </p>
        </div>

      </div>

      {/* インジケーター */}
      <div className="Project-Event-card">
        <div className="Project-Event-indicator"></div>
      </div>

    </section>
  );
}