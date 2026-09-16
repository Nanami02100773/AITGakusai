import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "工科展／楽市楽座／工科展／脱出ゲーム",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      items: [
        {
          tag: "受付・景品交換",
          value: "10:00～17:00",
        },
        {
          tag: "三叉路案内所",
          value: "16:30（終了）",
        },
      ],
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      items: [
        "スタンプは1人1回までです",
        "景品は数に限りがあります",
        "総合案内所で交換してください",
        "学祭と執行のスタンプラリーがあります",
      ],
    },
  ];

  return (
    <section>

      {/* ==========================================
          セクションタイトル
      ========================================== */}
      <div className="ProjectStampRally-section-wrapper">
        <div className="StampRally-section-title">
          詳細情報
        </div>
      </div>

      {/* ==========================================
          詳細テーブル
      ========================================== */}
      <div className="ProjectStampRally-detail-table">

        {details.map((item, index) => (
          <div
            className="ProjectStampRally-detail-row"
            key={index}
          >

            {/* ==========================================
                左側ラベル
            ========================================== */}
            <div className="ProjectStampRally-detail-label">

              <span className="ProjectStampRally-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`ProjectStampRally-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="ProjectStampRally-detail-text">
                {item.label}
              </span>

            </div>

            {/* ==========================================
                右側コンテンツ
            ========================================== */}
            <div className="ProjectStampRally-detail-content">

              <div className="ProjectStampRally-detail-value">

                {/* ==========================================
                    場所
                ========================================== */}
                {item.label === "場所" && (
                  <span>
                    {item.value}
                  </span>
                )}

                {/* ==========================================
                    時間
                ========================================== */}
                {item.label === "時間" && (
                  <div className="ProjectStampRally-time-list">

                    {item.items.map((time, i) => (
                      <div
                        className="ProjectStampRally-time"
                        key={i}
                      >
                        <span className="ProjectStampRally-time-tag">
                          {time.tag}
                        </span>

                        <span>
                          {time.value}
                        </span>
                      </div>
                    ))}

                  </div>
                )}

                {/* ==========================================
                    注意事項
                ========================================== */}
                {item.label === "注意事項" && (
                  <ul className="ProjectStampRally-note-list">

                    {item.items.map((note, i) => (
                      <li key={i}>
                        {note}
                      </li>
                    ))}

                  </ul>
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