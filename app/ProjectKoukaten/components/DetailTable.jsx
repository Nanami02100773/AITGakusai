import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "AITプラザ1階",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      value: [
        "10/10（土）　10:00～17:00",
        "11/11（日）　10:00~16:15"
      ]
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "展示品は許可なく触れないでください。",
        "AIT プラザ内は飲食喫煙禁止です。",
        "大学祭実行委員の指示に従ってください。従わずに生じた事故、トラブルに関して大学祭実行委員会は一切責任を負いません。",
  
      ],
    },
  ];

  return (
    <section>
      <div className="Koukaten-section-wrapper">
        <div className="Koukaten-section-title">
          詳細情報
        </div>
      </div>

      <div className="Koukaten-detail-table">
        {details.map((item, index) => (
          <div
            className="Koukaten-detail-row"
            key={index}
          >
            <div className="Koukaten-detail-label">
              <span className="Koukaten-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`Koukaten-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="Koukaten-detail-text">
                {item.label}
              </span>
            </div>

            <div className="Koukaten-detail-content">
              <div className="Koukaten-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="Koukaten-note-list">
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