"use client";

import React from "react";
import "./KouyasaiCast.css";
import KouyasaiData from "./data/KouyasaiData";

const KouyasaiCast = () => {
  if (!KouyasaiData || KouyasaiData.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="koyasai-performer-section">

      <div className="koyasai-section-title">
        出演者紹介
      </div>

      <div className="koyasai-scroll-area">

        {KouyasaiData.map((artist, index) => (
          <div
            className="koyasai-profile-box"
            key={index}
          >
            {/* 名前 */}
            <div className="koyasai-name">
              {artist.name}
            </div>

            {/* カード */}
            <div className="koyasai-card">

              {/* 画像 */}
              <div className="koyasai-image">
                <img
                  src={artist.image}
                  alt={artist.name}
                />
              </div>

              {/* 紹介文 */}
              <div className="koyasai-description">
                <div className="koyasai-description-inner">
                  {artist.bio}
                </div>
              </div>

              {/* SNS */}
              {artist.sns && (
                <div className="koyasai-sns-wrapper">

                  <div className="koyasai-sns-title">
                    公式SNS
                  </div>

                  <div className="koyasai-sns">

                    {artist.sns.x && (
                      <a
                        href={artist.sns.x}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/icons/x.png"
                          alt="X"
                        />
                      </a>
                    )}

                    {artist.sns.instagram && (
                      <a
                        href={artist.sns.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/icons/instagram.png"
                          alt="Instagram"
                        />
                      </a>
                    )}

                    {artist.sns.youtube && (
                      <a
                        href={artist.sns.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/icons/youtube.png"
                          alt="YouTube"
                        />
                      </a>
                    )}

                    {artist.sns.website && (
                      <a
                        href={artist.sns.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/icons/web.png"
                          alt="Website"
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

export default KouyasaiCast;