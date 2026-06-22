"use client";

import React from "react";
import "./ConcertInfo.css";

// data
import ArtistListData from "./data/ArtistListData";

const ConcertInfo = () => {
  if (!ArtistListData || ArtistListData.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <section className="Concert-performer-section">
      <div className="Concert-section-title">
        出演者様紹介
      </div>

      <div className="Concert-scroll-area">
        {ArtistListData.map((artist, index) => (
          <div
            className="Concert-profile-box"
            key={index}
          >
            {/* アーティスト名 */}
            <div className="Concert-name">
              {artist.name}
            </div>

            {/* カード */}
            <div className="Concert-card">

              {/* 画像 */}
              <div className="Concert-image">
                <img
                  src={artist.image}
                  alt={artist.name}
                />
              </div>

              {/* 紹介文 */}
              <div className="Concert-description">
                <div className="Concert-description-inner">
                  {artist.bio ||
                    "ここに演者の紹介文が入ります。"}
                </div>
              </div>

              {/* SNS */}
              <div className="Concert-sns-wrapper">
                <div className="Concert-sns-title">
                  公式SNS
                </div>

                <div className="Concert-sns">

                  {artist.x && (
                    <a
                      href={artist.x}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/icons/x.png"
                        alt="X"
                      />
                    </a>
                  )}

                  {artist.instagram && (
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/icons/instagram.png"
                        alt="Instagram"
                      />
                    </a>
                  )}

                  {artist.youtube && (
                    <a
                      href={artist.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/icons/youtube.png"
                        alt="YouTube"
                      />
                    </a>
                  )}

                  {artist.website && (
                    <a
                      href={artist.website}
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

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConcertInfo;