"use client";

import "./Survey.css";

export default function SurveySection() {
  const surveys = [
    {
      title: "愛工大祭について",
    },
    {
      title: "アプリ満足度",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScB7WqU5jATBfb7bxedWU6mnj2CXpD5Lo7smAGL-0hH91ZqHw/viewform?usp=publish-editor",
    },
    // {
    //   title: "脱出ゲーム",
    // },
    // {
    //   title: "クラブ・工科",
    // },
  ];

  return (
    <section className="Survey-section">

      {/* 上部装飾 */}
      <div className="Survey-top-line"></div>

      <div className="Survey-white-left"></div>
      <div className="Survey-white-center"></div>

      <div className="Survey-diagonal-line"></div>
      <div className="Survey-diagonal-line-2"></div>

      <div className="Survey-blue-bg"></div>
      <div className="Survey-blue-bg2"></div>

      {/* タイトル */}
      <div className="Survey-section-title">
        アンケート
      </div>

      {/* カード一覧 */}
      <div className="Survey-container">

        {surveys.map((item, index) => {

          const content = (
            <>
              {/* 左アクセント */}
              <div className="Survey-left-accent"></div>

              {/* 左側 */}
              <div className="Survey-left">

                <div className="Survey-text">

                  <div className="Survey-label">
                    {item.title}
                  </div>

                </div>

              </div>

              {/* 右側 */}
              <div className="Survey-right">

                <div className="Survey-right-line"></div>

                <div className="Survey-arrow">
                  ▶
                </div>

              </div>
            </>
          );

          return item.url ? (
            <a
              className="Survey-item"
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div
              className="Survey-item"
              key={index}
            >
              {content}
            </div>
          );
        })}

      </div>

    </section>
  );
}