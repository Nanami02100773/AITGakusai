"use client";

import Image from "next/image";
import { orbitron } from "../page";
import "./EnjoyGuide.css";

import image10 from "./data/10.jpg";

export default function EnjoyGuide() {
  return (
    <section className="Enjoy-Guide-section">

      {/* ==========================
          タイトル
      ========================== */}

      <div className="Enjoy-Guide-header">

        <div className={`Enjoy-Guide-number ${orbitron.className}`}>
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
            画像
        ========================== */}

        <div className="Enjoy-Guide-image-box">

          <Image
            src={image10}
            alt="愛工大祭を楽しもう"
            priority
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