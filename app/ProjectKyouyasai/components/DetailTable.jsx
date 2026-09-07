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
      value: "15:50～20:00",
    },
    {
      icon: "/project/Precautions.png",
      iconClass: "precautions-icon",
      label: "注意事項",
      value: [
        "リフト、ダイブ、サーフ、モッシュ等の危険行為",
        "開場時間前、早朝から並ぶ行為",
        "他のお客様に迷惑となる行為",
        "ステージ設備を壊しかねない行為",
        "ベンチの上に立つ行為",
        "酒気を帯びた状態での入場",
        "物を投げる行為",
        "ステージの妨害となる行為",
        "モラルに反する発言や行動",
        "撮影を禁止としているパフォーマーの撮影",
        "脚立、目線よりも高い三脚を使用した撮影",
        "受付以外からの入場",
        "その他、運営側の判断で、他のお客様、イベント側、運営側に迷惑をかける行為",
        "雨天時、演者発表中は傘さしが原則禁止となります。（ステージ観覧エリアに限る）",
        "そのため、カッパの持参をお願いします。",
        "安全のため、トラロープには触らずに少し離れてご観覧ください。",
      ],
    },
  ];

  return (
    <section>
      <div className="kyoyasai-section-wrapper">
        <div className="kyoyasai-section-title">
          詳細情報
        </div>
      </div>

      <div className="kyoyasai-detail-table">
        {details.map((item, index) => (
          <div
            className="kyoyasai-detail-row"
            key={index}
          >
            <div className="kyoyasai-detail-label">
              <span className="kyoyasai-detail-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`kyoyasai-detail-icon-image ${item.iconClass}`}
                />
              </span>

              <span className="kyoyasai-detail-text">
                {item.label}
              </span>
            </div>

            <div className="kyoyasai-detail-content">
              <div className="kyoyasai-detail-value">
                {Array.isArray(item.value) ? (
                  <>
                    <ul className="kyoyasai-note-list">
                      {item.value.map((note, i) => (
                        <li key={i}>{note}</li>
                      ))}
                    </ul>

                    <div className="kyoyasai-warning">
                      <p>
                        ※上記の事項が守られないときは、ライブを途中で中断するか、
                        会場からご退場していただく場合がありますので、予めご了承ください。
                      </p>

                      <p>
                        ※時間外でのトラブルに関しましては大学祭実行委員会は一切責任を負いません。
                      </p>
                    </div>
                  </>
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