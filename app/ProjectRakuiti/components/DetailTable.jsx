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
      items: [
        {
          tag: "10月10日（土）",
          value: "10:30～19:00",
        },
        {
          tag: "10月11日（日）",
          value: "10:30～19:00",
        },
      ],
      note: "※夜間営業 17:00～19:00",
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
    <div className="rakuichi-section-wrapper">

      {/* =====================================
          セクションタイトル
      ===================================== */}

      <h2 className="rakuichi-section-title">
        企画詳細
      </h2>

      {/* =====================================
          詳細テーブル
      ===================================== */}

      <section className="rakuichi-detail-table">

        {details.map((item, index) => (
          <div
            className="rakuichi-detail-row"
            key={index}
          >

            {/* =====================================
                左ラベル
            ===================================== */}

            <div className="rakuichi-detail-label">

              <div className="rakuichi-detail-icon">
                <img
                  src={item.icon}
                  alt=""
                  className={`rakuichi-detail-icon-image ${item.iconClass}`}
                />
              </div>

              <span className="rakuichi-detail-text">
                {item.label}
              </span>

            </div>

            {/* =====================================
                右側
            ===================================== */}

            <div className="rakuichi-detail-content">

              <div className="rakuichi-detail-value">

                {/* 場所 */}

                {item.label === "場所" && (
                  <span>
                    {item.value}
                  </span>
                )}

                {/* 時間 */}

                {item.label === "時間" && (
                  <div className="rakuichi-time-list">

                    {item.items.map((time, i) => (
                      <div
                        className="rakuichi-time"
                        key={i}
                      >

                        <span className="rakuichi-time-tag">
                          {time.tag}
                        </span>

                        <span>
                          {time.value}
                        </span>

                      </div>
                    ))}

                    <div className="rakuichi-time-note">
                      {item.note}
                    </div>

                  </div>
                )}

                {/* 注意事項 */}

                {item.label === "注意事項" && (
                  <ul className="rakuichi-note-list">

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

      </section>

    </div>
  );
}

export default DetailTable;