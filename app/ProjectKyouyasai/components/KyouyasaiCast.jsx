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

      <div className="kyoyasai-section-title">
        出演者紹介
      </div>

      <div className="kyoyasai-scroll-area">

        {KyouyasaiData.map((artist, index) => (
          <div
            className="kyoyasai-profile-box"
            key={index}
          >
            {/* 名前 */}
            <div className="kyoyasai-name">
              {artist.name}
            </div>

            {/* カード */}
            <div className="kyoyasai-card">

              {/* 画像 */}
              <div className="kyoyasai-image">
                <img
                  src={artist.image}
                  alt={artist.name}
                />
              </div>

              {/* 紹介文 */}
              <div className="kyoyasai-description">
                <div className="kyoyasai-description-inner">
                  {artist.bio}
                </div>
              </div>

              {/* SNS */}
              {artist.sns && (
                <div className="kyoyasai-sns-wrapper">

                  <div className="kyoyasai-sns-title">
                    公式SNS
                  </div>

                  <div className="kyoyasai-sns">

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

export default KyouyasaiCast;