import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "AITプラザ",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      open: "10:00",
      start: "10:30",
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",

      reception: [
        "総合案内所にて受付",
        "スタンプカードを受け取る",
        "参加説明を確認する",
      ],

      inside: [
        "館内自由見学可能",
        "順路に従って移動",
        "他の来場者へ配慮する",
      ],
    },
  ];

  return (
    <section>
      <div className="concert-section-wrapper">
        <div className="concert-section-title">
          詳細情報
        </div>
      </div>

      <div className="concert-detail-table">
        {details.map((item, index) => (
          <div
            className="concert-detail-row"
            key={index}
          >
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

            <div className="concert-detail-content">
              <div className="concert-detail-value">

                {/* 場所 */}
                {item.label === "場所" && (
                  <span>{item.value}</span>
                )}

                {/* 時間 */}
                {item.label === "時間" && (
                  <div className="concert-time-box">
                    <div className="concert-time-item">
                      <span className="concert-info-tag">
                        開場
                      </span>

                      <span>{item.open}</span>
                    </div>

                    <div className="concert-time-item">
                      <span className="concert-info-tag">
                        開演
                      </span>

                      <span>{item.start}</span>
                    </div>
                  </div>
                )}

                {/* 注意事項 */}
                {item.label === "注意事項" && (
                  <>
                    <div className="concert-info-row">
                      <span className="concert-info-tag">
                        受付時
                      </span>

                      <div className="concert-info-list">
                        {item.reception.map((text, i) => (
                          <div
                            key={i}
                            className="concert-info-description"
                          >
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="concert-info-row">
                      <span className="concert-info-tag">
                        館内
                      </span>

                      <div className="concert-info-list">
                        {item.inside.map((text, i) => (
                          <div
                            key={i}
                            className="concert-info-description"
                          >
                           {text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
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