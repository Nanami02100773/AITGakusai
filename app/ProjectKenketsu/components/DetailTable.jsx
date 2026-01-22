import React from "react";
import "./DetailTable.css";

function KenketsuDetailTable() {
  const details = [
    { label: "場所", value: "〇〇教室" },
    { label: "時間", value: "10:00～16:00" },
    { label: "注意事項", value: "特になし" }
  ];

  return (
    <section>
      {/* セクションタイトル */}
      <div className="Kenketsu-section-wrapper">
        <div className="Kenketsu-section-title">
          詳細情報
        </div>
      </div>

      {/* 詳細テーブル */}
      <div className="Kenketsu-detail-table">
        {details.map((d, i) => (
          <div className="Kenketsu-detail-row" key={i}>
            <span className="Kenketsu-detail-label">
              {d.label}
            </span>
            <span className="Kenketsu-detail-value">
              {d.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KenketsuDetailTable;
