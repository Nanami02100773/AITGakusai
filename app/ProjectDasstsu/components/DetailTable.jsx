import React from "react";
import "./DetailTable.css";

function DasstsDetailTable() {
  const details = [
    { label: "場所", value: "〇〇教室" },
    { label: "時間", value: "10:00～16:00" },
    { label: "注意事項", value: "特になし" }
  ];

  return (
    <section>
      {/* セクションタイトル */}
      <div className="Dasstsu-section-wrapper">
        <div className="Dasstsu-section-title">
          詳細情報
        </div>
      </div>

      {/* 詳細テーブル */}
      <div className="Dasstsu-detail-table">
        {details.map((d, i) => (
          <div className="Dasstsu-detail-row" key={i}>
            <span className="Dasstsu-detail-label">
              {d.label}
            </span>
            <span className="Dasstsu-detail-value">
              {d.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DasstsDetailTable;
