import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "工科展／楽市楽座／脱出ゲーム／MAKE",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      value: "10:00～17:00",
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "スタンプは1人1回までです",
        "景品は数に限りがあります",
        "総合案内所で交換してください",
        "学祭と執行のスタンプラリーがあります",
      ],
    },
  ];

  return (
    <section>
      <div className="ProjectStampRally-section-wrapper">
        <div className="StampRally-section-title">
          詳細情報
        </div>
      </div>

      <div className="ProjectStampRally-detail-table">
        {details.map((item, index) => (
          <div
            className="ProjectStampRally-detail-row"
            key={index}
          >
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

            <div className="ProjectStampRally-detail-content">
              <div className="ProjectStampRally-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="ProjectStampRally-note-list">
                    {item.value.map((note, i) => (
                      <li key={i}>{note}</li>
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