import React from "react";
import "./DetailTable.css";

function DetailTable() {
  const details = [
    {
      icon: "/project/place.png",
      iconClass: "place-icon",
      label: "場所",
      value: "5号館講義実験棟 1階・3階 ER321",
    },
    {
      icon: "/project/clock.png",
      iconClass: "clock-icon",
      label: "時間",
      value: "10月10日（土）10:30～16:30\n10月11日（日）10:30～16:30",
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "1グループ1～6人で参加できます",
        "制限時間は10分です",
        "難易度は3段階から選べます",
        "1回の受付で1回分のみ予約できます",
        "整理番号順にご案内しますので、案内前にはお越しください",
        "進行状況によって案内時間がずれる場合があります",
        "場内は飲食・喫煙禁止です",
        "机や椅子の上には乗らないでください",
        "ゲーム中の入退場は原則できません",
        "大学祭実行委員の指示に従ってください",
      ],
    },
  ];

  return (
    <section>
      <div className="dasstsu-section-wrapper">
        <div className="dasstsu-section-title">
          詳細情報
        </div>
      </div>

      <div className="dasstsu-detail-table">
        {details.map((item, index) => (
          <div
            className="dasstsu-detail-row"
            key={index}
          >
            <div className="dasstsu-detail-label">
              <span className="dasstsu-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`dasstsu-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="dasstsu-detail-text">
                {item.label}
              </span>
            </div>

            <div className="dasstsu-detail-content">
              <div className="dasstsu-detail-value">
                {Array.isArray(item.value) ? (
                  <ul className="dasstsu-note-list">
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