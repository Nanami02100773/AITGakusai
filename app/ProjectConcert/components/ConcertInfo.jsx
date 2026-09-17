"use client";

import React from "react";
import "./ConcertInfo.css";

import ArtistListData from "./data/ArtistListData";

const ConcertInfo = () => {
  if (!ArtistListData || ArtistListData.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="Concert-performer-section">

      {/* ==========================================
          タイトル
      ========================================== */}

      <div className="Concert-section-title">
        出演者様紹介
      </div>


      {/* ==========================================
          出演者一覧
      ========================================== */}

      <div className="Concert-scroll-area">

        {ArtistListData.map((artist, index) => (

          <div
            className="Concert-profile-box"
            key={index}
          >

            {/* ==================================
                アーティスト名
            ================================== */}

            <div className="Concert-name">
              {artist.name}
            </div>


            {/* ==================================
                カード
            ================================== */}

            <div className="Concert-card">

              {/* =================================
                  写真
              ================================= */}

              <div className="Concert-image">

                <img
                  src={artist.image.src}
                  alt={artist.name}
                />

              </div>


              {/* =================================
                  紹介
              ================================= */}

              <div className="Concert-description">

                <div className="Concert-description-title">
                  PROFILE
                </div>

                <div className="Concert-description-inner">
                  {artist.bio ||
                    "ここに演者の紹介文が入ります。"
                  }
                </div>

              </div>


              {/* =================================
                  SNS
              ================================= */}

              <div className="Concert-sns-wrapper">

                <div className="Concert-sns-title">
                  公式SNS
                </div>


                <div className="Concert-sns">

                  {/* ==============================
                      X
                  ============================== */}

                  {artist.x && (
                    <a
                      href={artist.x}
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

                  {artist.instagram && (
                    <a
                      href={artist.instagram}
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

                  {artist.youtube && (
                    <a
                      href={artist.youtube}
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

                  {artist.website && (
                    <a
                      href={artist.website}
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

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ConcertInfo;