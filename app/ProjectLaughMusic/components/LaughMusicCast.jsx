"use client";

import React from "react";
import "./LaughMusicCast.css";

import XIcon from "./snsicons/X.png";
import InstagramIcon from "./snsicons/Instagram.png";
import YoutubeIcon from "./snsicons/Youtube.png";
import WebIcon from "./snsicons/Web.png";

const LaughMusicCast = ({ artists }) => {
  if (!artists || artists.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="LaughMusic-performer-section">

      {/* ==========================================
          タイトル
      ========================================== */}

      <div className="LaughMusic-section-title">
        出演者紹介
      </div>


      {/* ==========================================
          出演者一覧
      ========================================== */}

      <div className="LaughMusic-scroll-area">

        {artists.map((artist, index) => (

          <div
            className="LaughMusic-profile-box"
            key={index}
          >

            {/* ==================================
                出演者名
            ================================== */}

            <div className="LaughMusic-name">
              {artist.name}
            </div>


            {/* ==================================
                カード
            ================================== */}

            <div className="LaughMusic-card">

              {/* =================================
                  写真
              ================================= */}

              <div className="LaughMusic-image">

                <img
                  src={artist.image}
                  alt={artist.name}
                />

              </div>


              {/* =================================
                  紹介
              ================================= */}

              <div className="LaughMusic-description">

                <div className="LaughMusic-description-title">
                  PROFILE
                </div>

                <div className="LaughMusic-description-inner">
                  {artist.bio ||
                    "ここに出演者紹介文が入ります。"
                  }
                </div>

              </div>


              {/* =================================
                  SNS
              ================================= */}

              {artist.sns && (

                <div className="LaughMusic-sns-wrapper">

                  {/* =================================
                      SNSタイトル
                  ================================= */}

                  <div className="LaughMusic-sns-title">
                    公式SNS
                  </div>


                  {/* =================================
                      SNS一覧
                  ================================= */}

                  <div className="LaughMusic-sns">

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
                          src={XIcon.src}
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
                          src={InstagramIcon.src}
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
                          src={YoutubeIcon.src}
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
                          src={WebIcon.src}
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

export default LaughMusicCast;