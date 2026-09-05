import React from "react";
import "./DetailTable.css";

function DetailTable() {
const details = [
  {
    icon: "/project/place.png",
    iconClass: "place-icon",
    label: "場所",
    value: "1号館 2階",
  },
  {
    icon: "/project/clock.png",
    iconClass: "clock-icon",
    label: "時間",
    value: ["10月10日（土）10:30～16:30",
    "10月11日（日）10:30～16:00",
    ]
  },
  {
    icon: "/project/Precautions.png",
    iconClass: "precautions-icon",
    label: "注意事項",
    value: [
      "予約された時間の15分前までにお越しください",
      "予約は1回につき1つのメニューまでです",
      "1人3回までメニューを予約できます",
      "キャンセルする場合は30分前までに受付へお申し出ください",
      "進行状況により予約時間が前後する場合があります",
      "大学祭実行委員の指示に従ってください",
    ],
  },
];

  return (
    <section>
      <div className="make-section-wrapper">
        <div className="make-section-title">
          詳細情報
        </div>
      </div>

      <div className="make-detail-table">
        {details.map((item, index) => (
          <div
            className="make-detail-row"
            key={index}
          >
            <div className="make-detail-label">
              <span className="make-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`make-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="make-detail-text">
                {item.label}
              </span>
            </div>

            <div className="make-detail-content">
              <div className="make-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="make-note-list">
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