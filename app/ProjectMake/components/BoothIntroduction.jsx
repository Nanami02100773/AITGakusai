"use client";

import React from "react";
import "./BoothIntroduction.css";

import img1 from "./Booth/No.1.jpg";
import img2 from "./Booth/No.2.jpg";
import img3 from "./Booth/No.3.jpg";


/* ========================================
   ブースデータ
======================================== */

const booths = [
  {
    image: img1.src,
    label: "ヘアアレンジ",
  },
  {
    image: img2.src,
    label: "メイク",
  },
  {
    image: img3.src,
    label: "ボディーシール",
  },
];


function MakeBooth() {

  return (
    <section className="Make-booth-section">


      {/* ========================================
          セクションタイトル
      ======================================== */}

      <div className="make-section-title">
        ブース紹介
      </div>


      {/* ========================================
          ブース一覧
      ======================================== */}

      <div className="Make-booth-list">

        {booths.map((booth, index) => (

          <div
            className="Make-booth-item"
            key={index}
          >

            <div className="Make-booth-card">


              {/* ========================================
                  写真
              ======================================== */}

              <img
                src={booth.image}
                alt={booth.label}
                className="Make-booth-image"
              />


              {/* ========================================
                  ブース名
              ======================================== */}

              <p className="Make-booth-label">
                {booth.label}
              </p>


            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


export default MakeBooth;