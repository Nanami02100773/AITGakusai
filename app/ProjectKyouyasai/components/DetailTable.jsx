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
      <div className="Kyouyasai-section-wrapper">
        <div className="Kyouyasai-section-title">
          詳細情報
        </div>
      </div>

      {/* 詳細テーブル */}
      <div className="Kyouyasai-detail-table">
        {details.map((d, i) => (
          <div className="Kyouyasai-detail-row" key={i}>
            <span className="Kyouyasai-detail-label">
              {d.label}
            </span>
            <span className="Kyouyasai-detail-value">
              {d.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DetailTable;
