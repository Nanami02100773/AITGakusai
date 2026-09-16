import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "1号館2階",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      value: [
        {
          date: "10月10日（土）",
          time: "10:30～16:30",
        },
        {
          date: "10月11日（日）",
          time: "10:30～16:00",
        },
      ],
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "各企画のルールを守って楽しく遊んでください",
        "大学祭実行委員の指示に従ってください",
        "お荷物はご自身で管理してください",
        "万が一の破損・紛失・盗難等について、責任は負いません",
        "怪我やトラブルについては自己責任となりますのでご了承ください",
      ],
    },
  ];

  return (
    <section>
      <div className="kirakiraparc-section-wrapper">
        <div className="kirakiraparc-section-title">
          詳細情報
        </div>
      </div>

      <div className="kirakiraparc-detail-table">
        {details.map((item, index) => (
          <div
            className="kirakiraparc-detail-row"
            key={index}
          >
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

            <div className="kirakiraparc-detail-content">
              <div className="kirakiraparc-detail-value">

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
                  <ul className="kirakiraparc-note-list">
                    {item.value.map((note, i) => (
                      <li key={i}>
                        {note}
                      </li>
                    ))}
                  </ul>

                ) : (
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