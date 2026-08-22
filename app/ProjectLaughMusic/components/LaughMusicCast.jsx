"use client";

import React from "react";
import "./LaughMusicCast.css";

const LaughMusicCast = ({ artists }) => {
  if (!artists || artists.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="LaughMusic-performer-section">
      <div className="LaughMusic-section-title">
        出演者紹介
      </div>

      <div className="LaughMusic-scroll-area">
        {artists.map((artist, index) => (
          <div
            className="LaughMusic-profile-box"
            key={index}
          >
            {/* 名前 */}
            <div className="LaughMusic-name">
              {artist.name}
            </div>

            {/* カード */}
            <div className="LaughMusic-card">

              {/* 画像 */}
              <div className="LaughMusic-image">
                <img
                  src={artist.image}
                  alt={artist.name}
                />
              </div>

              {/* 紹介文 */}
              <div className="LaughMusic-description">
                <div className="LaughMusic-description-inner">
                  {artist.bio ||
                    "ここに出演者紹介文が入ります。"}
                </div>
              </div>

              {/* SNS */}
              {artist.sns && (
                <div className="LaughMusic-sns-wrapper">

                  <div className="LaughMusic-sns-title">
                    公式SNS
                  </div>

                  <div className="LaughMusic-sns">

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

export default LaughMusicCast;
