"use client";

import React from "react";
import "./KyouyasaiCast.css";
import KyouyasaiData from "./data/KyouyasaiData";

const KyouyasaiCast = () => {
  if (!KyouyasaiData || KyouyasaiData.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="kyoyasai-performer-section">

      {/* ==========================================
          タイトル
      ========================================== */}

      <div className="kyoyasai-section-title">
        出演者紹介
      </div>


      {/* ==========================================
          出演者一覧
      ========================================== */}

      <div className="kyoyasai-scroll-area">

        {KyouyasaiData.map((artist, index) => (

          <div
            className="kyoyasai-profile-box"
            key={index}
          >

            {/* ==================================
                名前
            ================================== */}

            <div className="kyoyasai-name">
              {artist.name}
            </div>


            {/* ==================================
                カード
            ================================== */}

            <div className="kyoyasai-card">

              {/* =================================
                  画像
              ================================= */}

              <div className="kyoyasai-image">

                <img
                  src={artist.image}
                  alt={artist.name}
                />

              </div>


              {/* =================================
                  紹介文
              ================================= */}

              <div className="kyoyasai-description">

                <div className="kyoyasai-description-inner">
                  {artist.bio}
                </div>

              </div>


              {/* =================================
                  SNS
              ================================= */}

              {artist.sns && (

                <div className="kyoyasai-sns-wrapper">

                  <div className="kyoyasai-sns-title">
                    公式SNS
                  </div>


                  <div className="kyoyasai-sns">

                    {/* ==============================
                        X
                    ============================== */}

                    {artist.sns.x && (

                      <a
                        href={artist.sns.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                      >

                        <img
                          src="/snsicons/X.png"
                          alt="X"
                        />

                      </a>

                    )}


                    {/* ==============================
                        Instagram
                    ============================== */}

                    {artist.sns.instagram && (

                      <a
                        href={artist.sns.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >

                        <img
                          src="/snsicons/Instagram.png"
                          alt="Instagram"
                        />

                      </a>

                    )}


                    {/* ==============================
                        YouTube
                    ============================== */}

                    {artist.sns.youtube && (

                      <a
                        href={artist.sns.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      >

                        <img
                          src="/snsicons/Youtube.png"
                          alt="YouTube"
                        />

                      </a>

                    )}


                    {/* ==============================
                        公式サイト
                    ============================== */}

                    {artist.sns.website && (

                      <a
                        href={artist.sns.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="公式サイト"
                      >

                        <img
                          src="/snsicons/Web.png"
                          alt="公式サイト"
                        />

                      </a>

                    )}

                  </div>

                </div>

              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default KyouyasaiCast;