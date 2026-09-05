import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "メインストリート 献血バス付近",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      value:
        "10月10日（土）10:30～16:20\n10月11日（日）10:30～16:20",
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "雨天決行です",
        "献血の可否については赤十字血液センターの方の案内に従ってください",
        "献血後に体調が悪くなった場合は、スタッフへお申し出ください",
        "受付後にくじ引きへ参加できます",
      ]
    },
  ];

  return (
    <section>
      <div className="kenketsu-section-wrapper">
        <div className="kenketsu-section-title">
          詳細情報
        </div>
      </div>

      <div className="kenketsu-detail-table">
        {details.map((item, index) => (
          <div
            className="kenketsu-detail-row"
            key={index}
          >
            <div className="kenketsu-detail-label">
              <span className="kenketsu-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`kenketsu-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="kenketsu-detail-text">
                {item.label}
              </span>
            </div>

            <div className="kenketsu-detail-content">
              <div className="kenketsu-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="kenketsu-note-list">
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