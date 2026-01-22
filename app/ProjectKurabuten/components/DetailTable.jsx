import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    { label: "場所", value: "〇〇教室" },
    { label: "時間", value: "10:00～16:00" },
    { label: "注意事項", value: "特になし" }
  ];

  return (
    <section>
      {/* セクションタイトル */}
      <div className="ProjectKurabuten-section-wrapper">
        <div className="ProjectKurabuten-section-title">
          詳細情報
        </div>
      </div>

      {/* 詳細テーブル */}
      <div className="ProjectKurabuten-detail-table">
        {details.map((d, i) => (
          <div className="ProjectKurabuten-detail-row" key={i}>
            <span className="ProjectKurabuten-detail-label">
              {d.label}
            </span>
            <span className="ProjectKurabuten-detail-value">
              {d.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DetailTable;
