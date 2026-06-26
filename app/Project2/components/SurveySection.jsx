"use client";

import "./SurveySection.css";

export default function SurveySection() {

  const surveys = [
    {
      title: "アプリ満足度",
      image: "/stagequestionnaire/app.png",
    },
    {
      title: "全体",
      image: "/stagequestionnaire/whole.png",
    },
    {
      title: "脱出ゲーム",
      image: "/stagequestionnaire/dassyutsu.png",
    },
    {
      title: "メイク",
      image: "/stagequestionnaire/lip.png",
    },
    {
      title: "クラブ・工科",
      image: "/stagequestionnaire/kurakou.png",
    },
  ];

  return (
    <section className="SurveySection">

      {/* 上部装飾 */}
      <div className="Survey-top-line"></div>

      <div className="Survey-white-left"></div>
      <div className="Survey-white-center"></div>

      <div className="Survey-diagonal-line"></div>
      <div className="Survey-diagonal-line-2"></div>

      <div className="Survey-blue-bg"></div>
      <div className="Survey-blue-bg2"></div>

      {/* タイトル */}
      <div className="Home-section-title">
        アンケート
      </div>

      {/* カード一覧 */}
      <div className="Survey-container">

        {surveys.map((item, index) => (

          <div
            className="Survey-item"
            key={index}
          >

            {/* 左アクセント */}
            <div className="Survey-left-accent"></div>

            {/* 左側 */}
            <div className="Survey-left">

              <div className="Survey-circle">

                <div className="Survey-circle-inner">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="Survey-icon"
                  />

                </div>

              </div>

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

          </div>

        ))}

      </div>

    </section>
  );
}