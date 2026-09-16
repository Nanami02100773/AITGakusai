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
      items: [
        {
          tag: "10月10日（土）",
          value: "10:30～16:30",
        },
        {
          tag: "10月11日（日）",
          value: "10:30～16:00",
        },
      ],
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

      {/* ==========================================
          セクションタイトル
      ========================================== */}

      <div className="make-section-wrapper">

        <div className="make-section-title">
          詳細情報
        </div>

      </div>


      {/* ==========================================
          詳細テーブル
      ========================================== */}

      <div className="make-detail-table">

        {details.map((item, index) => (
          <div
            className="make-detail-row"
            key={index}
          >

            {/* ==========================================
                左側ラベル
            ========================================== */}

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


            {/* ==========================================
                右側コンテンツ
            ========================================== */}

            <div className="make-detail-content">

              <div className="make-detail-value">

                {/* ==========================================
                    場所
                ========================================== */}

                {item.label === "場所" && (
                  <span>
                    {item.value}
                  </span>
                )}


                {/* ==========================================
                    時間
                ========================================== */}

                {item.label === "時間" && (
                  <div className="make-date-list">

                    {item.items.map((time, i) => (
                      <div
                        className="make-date-row"
                        key={i}
                      >

                        <span className="make-date-box">
                          {time.tag}
                        </span>

                        <span className="make-time">
                          {time.value}
                        </span>

                      </div>
                    ))}

                  </div>
                )}


                {/* ==========================================
                    注意事項
                ========================================== */}

                {item.label === "注意事項" && (
                  <ul className="make-note-list">

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