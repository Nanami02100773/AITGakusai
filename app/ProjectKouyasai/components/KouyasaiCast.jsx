"use client";

import React from "react";
import "./KouyasaiInfo.css";

const KouyasaiCast = ({ artists }) => {
  if (!artists || artists.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="Kouyasai-cast-section">
      {/* ▼ タイトル（灰色ボックスの外） */}
      <h2 className="Kouyasai-section-title">
        出演者様紹介
      </h2>

      {/* ▼ 灰色背景ボックス */}
      <div className="Kouyasai-scroll-area">
        {artists.map((artist, index) => (
          <div className="Kouyasai-profile-box" key={index}>
            <div className="Kouyasai-profile">
              <div className="Kouyasai-photo">
                <img
                  src={artist.image}
                  alt={artist.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="Kouyasai-bio">
                <h3>{artist.name}</h3>
                <p>{artist.bio}</p>
              </div>
            </div>

            {artist.sns && (
              <div className="Kouyasai-sns-wrapper">
                <p className="Kouyasai-sns-title">公式SNS</p>
                <div className="Kouyasai-sns">
                  {artist.sns.instagram && (
                    <a href={artist.sns.instagram} target="_blank" rel="noopener noreferrer">
                      <img src="/icons/instagram.png" alt="Instagram" />
                    </a>
                  )}
                  {artist.sns.x && (
                    <a href={artist.sns.x} target="_blank" rel="noopener noreferrer">
                      <img src="/icons/x.png" alt="X" />
                    </a>
                  )}
                  {artist.sns.youtube && (
                    <a href={artist.sns.youtube} target="_blank" rel="noopener noreferrer">
                      <img src="/icons/youtube.png" alt="YouTube" />
                    </a>
                  )}
                  {artist.sns.website && (
                    <a href={artist.sns.website} target="_blank" rel="noopener noreferrer">
                      <img src="/icons/web.png" alt="公式サイト" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KouyasaiCast;
