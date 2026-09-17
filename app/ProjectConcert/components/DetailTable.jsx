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
      label: "時間",
      value: [
        {
          date: "10月11日（日）",
          time: "開場 15:00 / 開演 15:30",
        },
      ],
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "椅子の上に立たないでください",
        "開演中は携帯電話の電源をお切りください",
        "館内は飲食、喫煙禁止です",
        "開演中に気分が悪くなった方はお近くのスタッフをお呼びください",
        "カメラ、ボイスレコーダーの持ち込みは禁止です",
        "以上のことを守らない場合は退場してもらいます",
        "大学祭実行委員の指示に従ってください",
        "指示に従わずに生じた事故、トラブル等に関して大学祭実行委員会は一切責任を負いません",
      ],
    },
  ];

  return (
    <section>

      {/* =====================================
          セクションタイトル
      ===================================== */}

      <div className="kirakiraparc-section-wrapper">
        <div className="kirakiraparc-section-title">
          詳細情報
        </div>
      </div>

      {/* =====================================
          詳細テーブル
      ===================================== */}

      <div className="kirakiraparc-detail-table">

        {details.map((item, index) => (
          <div
            className="kirakiraparc-detail-row"
            key={index}
          >

            {/* =====================================
                左ラベル
            ===================================== */}

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

            {/* =====================================
                右側
            ===================================== */}

            <div className="kirakiraparc-detail-content">

              <div className="kirakiraparc-detail-value">

                {/* =====================================
                    時間
                ===================================== */}

                {item.label === "時間" ? (

                  <div className="kirakiraparc-date-content">

                    {item.value.map((day, i) => (
                      <div
                        className="kirakiraparc-date-row"
                        key={i}
                      >

                        <span className="kirakiraparc-date">
                          {day.date}
                        </span>

                        <span className="kirakiraparc-time">
                          {day.time}
                        </span>

                      </div>
                    ))}

                  </div>

                ) : Array.isArray(item.value) ? (

                  /* =====================================
                     注意事項
                  ===================================== */

                  <ul className="kirakiraparc-note-list">

                    {item.value.map((note, i) => (
                      <li key={i}>
                        {note}
                      </li>
                    ))}

                  </ul>

                ) : (

                  /* =====================================
                     場所
                  ===================================== */

                  item.value

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