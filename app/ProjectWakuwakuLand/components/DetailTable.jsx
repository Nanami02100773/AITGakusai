import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "AITプラザ1階",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      items: [
        {
          tag: "10/10（土）",
          value: "10:00～17:00",
        },
        {
          tag: "10/11（日）",
          value: "10:00～16:15",
        },
      ],
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "展示品は許可なく触れないでください。",
        "AIT プラザ内は飲食喫煙禁止です。",
        "大学祭実行委員の指示に従ってください。従わずに生じた事故、トラブルに関して大学祭実行委員会は一切責任を負いません。",
      ],
    },
  ];

  return (
    <section>

      {/* ==========================================
          セクションタイトル
      ========================================== */}

      <div className="kirakiraparc-section-wrapper">

        <div className="kirakiraparc-section-title">
          詳細情報
        </div>

      </div>


      {/* ==========================================
          詳細テーブル
      ========================================== */}

      <div className="kirakiraparc-detail-table">

        {details.map((item, index) => (
          <div
            className="kirakiraparc-detail-row"
            key={index}
          >

            {/* ==========================================
                左側ラベル
            ========================================== */}

            <div className="kirakiraparc-detail-label">

              <span className="kirakiraparc-detail-icon">

                <img
                  src={item.icon}
                  alt={item.label}
                  className={`kirakiraparc-detail-icon-image ${item.iconClass}`}
                />

              </span>

              <span className="kirakiraparc-detail-text">
                {item.label}
              </span>

            </div>


            {/* ==========================================
                右側コンテンツ
            ========================================== */}

            <div className="kirakiraparc-detail-content">

              <div className="kirakiraparc-detail-value">

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
                  <div className="kirakiraparc-date-list">

                    {item.items.map((time, i) => (
                      <div
                        className="kirakiraparc-date-row"
                        key={i}
                      >

                        <span className="kirakiraparc-date-box">
                          {time.tag}
                        </span>

                        <span className="kirakiraparc-time">
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
                  <ul className="kirakiraparc-note-list">

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