import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "セントラル1階",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      value: "10月10,11日 10:30～16:30",
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "場内は喫煙禁止です",
        "場内は飲食禁止です",
        "場内での賭博行為は禁止です",
        "場内の備品を破損した場合、弁償してもらうことがあります",
        "コインの窃盗・横流し行為は禁止です",
        "コインを会場の外に持ち出さないでください",
        "ゲームの妨害をしないでください",
        "企画終了時はコインをすべて回収します",
        "大学祭実行委員の指示に従ってください",
        "ルールを守れない場合は退場してもらうことがあります",
      ],
    },
  ];

  return (
    <section>
      <div className="kajino-section-wrapper">
        <div className="kajino-section-title">
          詳細情報
        </div>
      </div>

      <div className="kajino-detail-table">
        {details.map((item, index) => (
          <div
            className="kajino-detail-row"
            key={index}
          >
            <div className="kajino-detail-label">
              <span className="kajino-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`kajino-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="kajino-detail-text">
                {item.label}
              </span>
            </div>

            <div className="kajino-detail-content">
              <div className="kajino-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="kajino-note-list">
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