import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    { label: "場所", value: "〇〇教室" },
    { label: "時間", value: "10:00～16:00" },
    { label: "注意事項", value: "特になし" }
  ];

  return (
    <div>
      <div className="section-title">企画詳細</div>
      <div className="detail-table">
        {details.map((d, i) => (
          <div className="detail-row" key={i}>
            <span className="detail-label">{d.label}</span>
            <span className="detail-value">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailTable;
