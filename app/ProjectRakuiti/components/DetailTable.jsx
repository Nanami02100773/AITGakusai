import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "セントラルパーク",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      value:
        "10月10日（土）10:30～19:00\n10月11日（日）10:30～19:00\n夜間営業 17:00～19:00",
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "雨天決行です",
        "夜間営業は17:00～19:00です",
        "夜間営業は指定されたブースのみ行います",
        "セントラルパークは全面禁煙です",
        "大学祭実行委員の指示に従ってください",
      ],
    },
  ];

  return (
    <section>
      <div className="rakuichi-section-wrapper">
        <div className="rakuichi-section-title">
          詳細情報
        </div>
      </div>

      <div className="rakuichi-detail-table">
        {details.map((item, index) => (
          <div
            className="rakuichi-detail-row"
            key={index}
          >
            <div className="rakuichi-detail-label">
              <span className="rakuichi-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`rakuichi-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="rakuichi-detail-text">
                {item.label}
              </span>
            </div>

            <div className="rakuichi-detail-content">
              <div className="rakuichi-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="rakuichi-note-list">
                    {item.value.map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                  </ul>
                ) : (
                  item.value.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.value.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))
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