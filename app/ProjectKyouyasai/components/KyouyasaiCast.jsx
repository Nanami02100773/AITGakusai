import React from "react";

const KyouyasaiCast = ({ artists }) => {
  if (!artists || artists.length === 0) {
    return <p>出演者情報がありません</p>;
  }

  return (
    <>
      {artists.map((artist, index) => (
        <div key={index} className="Kyouyasai-profile-box">
          <div className="Kyouyasai-profile">

            {/* 画像 */}
            <img
              src={artist.image}
              alt={artist.name}
              className="Kyouyasai-photo"
            />

            {/* 紹介 */}
            <div className="Kyouyasai-bio">
              <h3>{artist.name}</h3>
              <p>{artist.bio}</p>
            </div>

            {/* SNS */}
            <div className="Kyouyasai-sns-wrapper">
              <div className="Kyouyasai-sns-title">SNS</div>

              <div className="Kyouyasai-sns">
                {artist.sns?.instagram && (
                  <a href={artist.sns.instagram} target="_blank">
                    <img src="/icons/instagram.png" />
                  </a>
                )}

                {artist.sns?.x && (
                  <a href={artist.sns.x} target="_blank">
                    <img src="/icons/x.png" />
                  </a>
                )}

                {artist.sns?.youtube && (
                  <a href={artist.sns.youtube} target="_blank">
                    <img src="/icons/youtube.png" />
                  </a>
                )}

                {artist.sns?.website && (
                  <a href={artist.sns.website} target="_blank">
                    <img src="/icons/web.png" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      ))}
    </>
  );
};

export default KyouyasaiCast;