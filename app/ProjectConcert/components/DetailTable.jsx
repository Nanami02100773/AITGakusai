import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
{
  label: "時間",
  value: (
    <>
      <div className="Concert-detail-subrow">
        <span className="Concert-detail-sublabel">開場</span>
        <span className="Concert-detail-subtext">10:00</span>
      </div>
      <div className="Concert-detail-subrow">
        <span className="Concert-detail-sublabel">開演</span>
        <span className="Concert-detail-subtext">10:30</span>
      </div>
    </>
  ),
},
{
  label: "注意事項",
  value: (
    <>
      <div className="Concert-detail-subrow">
        <span className="Concert-detail-sublabel">受付時</span>
        <span className="Concert-detail-subtext">
          学生証をご提示ください
        </span>
      </div>
      <div className="Concert-detail-subrow">
        <span className="Concert-detail-sublabel">館内</span>
        <span className="Concert-detail-subtext">飲食禁止</span>
      </div>
    </>
  ),
},

  ]

  return (
    <section className="Concert-section">
      {/* セクションタイトル */}
      <div className="Concert-section-wrapper">
        <div className="Concert-section-title">詳細情報</div>
      </div>

      {/* 詳細テーブル */}
      <div className="Concert-detail-table">
        {details.map((d, i) => (
          <div className="Concert-detail-row" key={i}>
            <span className="Concert-detail-label">{d.label}</span>
            <span className="Concert-detail-value">{d.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DetailTable;
