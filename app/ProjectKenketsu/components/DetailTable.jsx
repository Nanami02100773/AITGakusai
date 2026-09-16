import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "メインストリート 献血バス付近",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      items: [
        {
          tag: "10月10日（土）",
          value: "10:30～16:20",
        },
        {
          tag: "10月11日（日）",
          value: "10:30～16:20",
        },
      ],
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "雨天決行です",
        "献血の可否については赤十字血液センターの方の案内に従ってください",
        "献血後に体調が悪くなった場合は、スタッフへお申し出ください",
        "受付後にくじ引きへ参加できます",
        "16～69歳まで※の健康な方に献血のご協力をお願いしています",
        "この企画は献血バスの中で採血を行います",
        "※66歳以上の方の献血については、献血いただく方の健康を考慮し60～66歳の間に献血経験がある方に限ります",
      ],
    },
  ];

  return (
    <section>

      {/* ==========================================
          セクションタイトル
      ========================================== */}

      <div className="kenketsu-section-wrapper">

        <div className="kenketsu-section-title">
          詳細情報
        </div>

      </div>


      {/* ==========================================
          詳細テーブル
      ========================================== */}

      <div className="kenketsu-detail-table">

        {details.map((item, index) => (
          <div
            className="kenketsu-detail-row"
            key={index}
          >

            {/* ==========================================
                左側ラベル
            ========================================== */}

            <div className="kenketsu-detail-label">

              <span className="kenketsu-detail-icon">

                <img
                  src={item.icon}
                  alt={item.label}
                  className={`kenketsu-detail-icon-image ${item.iconClass}`}
                />

              </span>

              <span className="kenketsu-detail-text">
                {item.label}
              </span>

            </div>


            {/* ==========================================
                右側コンテンツ
            ========================================== */}

            <div className="kenketsu-detail-content">

              <div className="kenketsu-detail-value">

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
                  <div className="kenketsu-date-list">

                    {item.items.map((time, i) => (
                      <div
                        className="kenketsu-date-row"
                        key={i}
                      >

                        <div className="kenketsu-date-box">
                          {time.tag}
                        </div>

                        <div className="kenketsu-time">
                          {time.value}
                        </div>

                      </div>
                    ))}

                  </div>
                )}


                {/* ==========================================
                    注意事項
                ========================================== */}

                {item.label === "注意事項" && (
                  <ul className="kenketsu-note-list">

                    {item.value.map((note, i) => (
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