import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: (
        <>
          サッカー場/愛和会館2階講堂/10号館2～5階/14号館101・102/セントラルガーデン
        </>
      ),
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      items: [
        {
          tag: "10/10（土）",
          value: "10:30～16:00",
        },
        {
          tag: "10/11（日）",
          value: "10:30～16:00",
        },
      ],
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "他の来場者や出展団体の迷惑になる行為はご遠慮ください。",
        "通路をふさがないよう、周囲にご配慮ください。",
        "展示物や会場内の備品にはお手を触れないようご注意ください。",
        "展示教室内での飲食・喫煙は禁止です。",
        "出展団体からの過度な勧誘等にはご注意ください。",
        "会場内では大学祭実行委員の案内・指示に従ってください。",
      ],
    },
  ];

  return (
    <section>
      <div className="kurabuten-section-wrapper">
        <div className="kurabuten-section-title">
          詳細情報
        </div>
      </div>

      <div className="kurabuten-detail-table">
        {details.map((item, index) => (
          <div
            className="kurabuten-detail-row"
            key={index}
          >
            <div className="kurabuten-detail-label">
              <span className="kurabuten-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`kurabuten-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="kurabuten-detail-text">
                {item.label}
              </span>
            </div>

            <div className="kurabuten-detail-content">
              <div className="kurabuten-detail-value">

                {item.label === "場所" && (
                  <span>{item.value}</span>
                )}

                {item.label === "時間" && (
                  <div className="kurabuten-time-list">
                    {item.items.map((time, i) => (
                      <div
                        className="kurabuten-time"
                        key={i}
                      >
                        <span className="kurabuten-time-tag">
                          {time.tag}
                        </span>

                        <span>
                          {time.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {item.label === "注意事項" && (
                  <ul className="kurabuten-note-list">
                    {item.value.map((note, i) => (
                      <li key={i}>
                        {note}
                      </li>
                    ))}
                  </ul>
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