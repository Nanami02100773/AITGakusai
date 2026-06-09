import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "📍",
      label: "場所",
      value: "〇〇教室",
    },
    {
      icon: "🕒",
      label: "時間",
      value: "10:00～16:00",
    },
    {
      icon: "⚠",
      label: "注意事項",
      value: "特になし",
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
                {item.icon}
              </span>

              <span>
                {item.label}
              </span>
            </div>

            <div className="ProjectStampRally-detail-content">
              <div className="ProjectStampRally-detail-value">
                {item.value}
              </div>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default DetailTable;