"use client";

import React from "react";
import "./ConcertInfo.css";

const ArtistListDay = ({ artists }) => {
  if (!artists || artists.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="concert-performer-section">
      <h2 className="Concert-section-title">出演者様紹介</h2>

      <div className="concert-scroll-area">
        {artists.map((artist, index) => (
          <div className="concert-profile-box" key={index}>
            <div className="concert-profile">
              {/* 写真 */}
              <div className="concert-photo">
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

              {/* 紹介文 */}
              <div className="concert-bio">
                <h3>{artist.name}</h3>
                <p>ここに演者の紹介文が入ります。</p>
              </div>
            </div>

            {/* ▼ カード外・中央 SNS ▼ */}
            <div className="concert-sns-wrapper">
              <p className="concert-sns-title">公式SNS</p>

              <div className="concert-sns">
                {artist.instagram && (
                  <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.png" alt="Instagram" />
                  </a>
                )}

                {artist.x && (
                  <a href={artist.x} target="_blank" rel="noopener noreferrer">
                    <img src="/icons/x.png" alt="X" />
                  </a>
                )}

                {artist.youtube && (
                  <a href={artist.youtube} target="_blank" rel="noopener noreferrer">
                    <img src="/icons/youtube.png" alt="YouTube" />
                  </a>
                )}

                {artist.website && (
                  <a href={artist.website} target="_blank" rel="noopener noreferrer">
                    <img src="/icons/web.png" alt="公式サイト" />
                  </a>
                )}
              </div>
            </div>
            {/* ▲ SNSここまで ▲ */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistListDay;
