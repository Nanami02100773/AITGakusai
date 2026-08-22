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
      <div className="kyoyasai-section-wrapper">
        <div className="kyoyasai-section-title">
          詳細情報
        </div>
      </div>

      <div className="kyoyasai-detail-table">
        {details.map((item, index) => (
          <div
            className="kyoyasai-detail-row"
            key={index}
          >
            <div className="kyoyasai-detail-label">
              <span className="kyoyasai-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`kyoyasai-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="kyoyasai-detail-text">
                {item.label}
              </span>
            </div>

            <div className="kyoyasai-detail-content">
              <div className="kyoyasai-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="kyoyasai-note-list">
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
