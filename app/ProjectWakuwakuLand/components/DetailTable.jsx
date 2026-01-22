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
      <div className="WakuwakuLand-section-wrapper">
        <div className="WakuwakuLand-section-title">
          詳細情報
        </div>
      </div>

      {/* 詳細テーブル */}
      <div className="WakuwakuLand-detail-table">
        {details.map((d, i) => (
          <div className="WakuwakuLand-detail-row" key={i}>
            <span className="WakuwakuLand-detail-label">
              {d.label}
            </span>
            <span className="WakuwakuLand-detail-value">
              {d.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DetailTable;
