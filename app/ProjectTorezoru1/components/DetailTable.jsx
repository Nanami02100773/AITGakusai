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
      <div className="ruminosu-section-wrapper">
        <div className="ruminosu-section-title">
          詳細情報
        </div>
      </div>

      <div className="ruminosu-detail-table">
        {details.map((item, index) => (
          <div
            className="ruminosu-detail-row"
            key={index}
          >
            <div className="ruminosu-detail-label">
              <span className="ruminosu-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`ruminosu-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="ruminosu-detail-text">
                {item.label}
              </span>
            </div>

            <div className="ruminosu-detail-content">
              <div className="ruminosu-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="ruminosu-note-list">
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