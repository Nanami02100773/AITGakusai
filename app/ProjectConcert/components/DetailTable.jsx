import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "鉀徳館",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "日時",
      date: "10月11日(日)",
      open: "15:00",
      start: "15:30",
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      items: [
        "立ち見や椅子の上に立つ行為は禁止です",
        "公演中は携帯電話の電源をお切りください",
        "会場内での飲食・喫煙は禁止です",
        "体調が悪くなった場合は、近くのスタッフへお声がけください",
        "カメラ・ボイスレコーダー等での撮影・録音は禁止です",
        "違反行為があった場合、退場していただく場合があります",
        "その他、学園祭実行委員会の指示に従ってください",
      ],
    },
  ];

  return (
    <section>

      {/* ==========================================
          セクションタイトル
      ========================================== */}
      <div className="concert-section-wrapper">
        <div className="concert-section-title">
          詳細情報
        </div>
      </div>

      {/* ==========================================
          詳細テーブル
      ========================================== */}
      <div className="concert-detail-table">

        {details.map((item, index) => (
          <div
            className="concert-detail-row"
            key={index}
          >

            {/* ==========================================
                左側ラベル
            ========================================== */}
            <div className="concert-detail-label">

              <span className="concert-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`concert-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="concert-detail-text">
                {item.label}
              </span>

            </div>

            {/* ==========================================
                右側コンテンツ
            ========================================== */}
            <div className="concert-detail-content">

              <div className="concert-detail-value">

                {/* ==========================================
                    場所
                ========================================== */}
                {item.label === "場所" && (
                  <span>
                    {item.value}
                  </span>
                )}

                {/* ==========================================
                    日時
                ========================================== */}
                {item.label === "日時" && (
                  <div className="concert-date-content">

                    {/* 日付 */}
                    <div className="concert-date">
                      {item.date}
                    </div>

                    {/* 開場・開演 */}
                    <div className="concert-time-row">

                      {/* 開場 */}
                      <div className="concert-time">
                        <span className="concert-info-tag">
                          開場
                        </span>

                        <span>
                          {item.open}
                        </span>
                      </div>

                      {/* 開演 */}
                      <div className="concert-time">
                        <span className="concert-info-tag">
                          開演
                        </span>

                        <span>
                          {item.start}
                        </span>
                      </div>

                    </div>

                  </div>
                )}

                {/* ==========================================
                    注意事項
                ========================================== */}
                {item.label === "注意事項" && (
                  <div className="concert-info-list">

                    {item.items.map((text, i) => (
                      <div
                        key={i}
                        className="concert-info-description"
                      >
                        {text}
                      </div>
                    ))}

                  </div>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default DetailTable;