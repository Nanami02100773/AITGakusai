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
      label: "時間",
      value: "17:00～20:10",
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "スタッフ・司会の指示に従ってください",
        "花火・火舞の実施時は、スタッフの指示に従い安全な場所からご覧ください",
        "火舞・花火の実施場所には立ち入らないでください",
        "危険行為や他の来場者の迷惑となる行為は禁止です",
        "天候や安全上の理由により、内容が変更・中止となる場合があります",
      ],
    },
  ];

  return (
    <section>
      <div className="koyasai-section-wrapper">
        <div className="koyasai-section-title">
          詳細情報
        </div>
      </div>

      <div className="koyasai-detail-table">
        {details.map((item, index) => (
          <div
            className="koyasai-detail-row"
            key={index}
          >
            <div className="koyasai-detail-label">
              <span className="koyasai-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`koyasai-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="koyasai-detail-text">
                {item.label}
              </span>
            </div>

            <div className="koyasai-detail-content">
              <div className="koyasai-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="koyasai-note-list">
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