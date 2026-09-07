import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "セントラル広場",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "日時",
      value: [
        "10月10日(土)　10:30～15:05",
        "10月11日(日)　10:30～18:10",
      ],
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "出演者様はスタッフ・司会の指示に従ってください",
        "参加希望のお客様が荷物を持っている場合は、クロークテントに荷物を預けてもらってください",
        "小学生以下の参加者には、必ず保護者同伴で参加してもらってください",
        "ビンゴカードの再配布はありません",
        "何か分からないことがあれば舞台統括担当者まで連絡してください",
      ],
    },
  ];

  return (
    <section>
      <div className="laughmusic-section-wrapper">
        <div className="laughmusic-section-title">
          詳細情報
        </div>
      </div>

      <div className="laughmusic-detail-table">
        {details.map((item, index) => (
          <div
            className="laughmusic-detail-row"
            key={index}
          >
            <div className="laughmusic-detail-label">
              <span className="laughmusic-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`laughmusic-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="laughmusic-detail-text">
                {item.label}
              </span>
            </div>

            <div className="laughmusic-detail-content">
              <div className="laughmusic-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="laughmusic-note-list">
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