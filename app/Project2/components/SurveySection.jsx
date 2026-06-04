"use client";
import "./SurveySection.css";

export default function SurveySection() {

  const surveys = [
    {
      title: "アプリ満足度",
      image: "/stagequestionnaire/app.png",
      color: "#163f9f",
    },
    {
      title: "全体",
      image: "/stagequestionnaire/whole.png",
      color: "#7f97b5",
    },
    {
      title: "脱出ゲーム",
      image: "/stagequestionnaire/dassyutsu.png",
      color: "#d7a548",
    },
    {
      title: "メイク",
      image: "/stagequestionnaire/lip.png",
      color: "#d83b52",
    },
    {
      title: "クラブ・工科",
      image: "/stagequestionnaire/kurakou.png",
      color: "#2f7bff",
    },
  ];

  return (
    <section className="SurveySection">

      <div className="Survey-top-line"></div>

      <div className="Survey-white-left" />
      <div className="Survey-white-center" />

      <div className="Survey-diagonal-line"></div>
      <div className="Survey-diagonal-line-2"></div>

      <div className="Survey-blue-bg" />
      <div className="Survey-blue-bg2" />

      <div className="Home-section-title">
        アンケート
      </div>

      <div className="Survey-container">

        {surveys.map((item, index) => (
          <div
            className="Survey-item"
            key={index}
          >

            <div className="Survey-left-bar" />

            <div className="Survey-circle-area">

              <div
                className="Survey-circle-outer"
                style={{
                  "--ring-color": item.color,
                }}
              >

                <div className="Survey-circle-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="Survey-icon"
                  />
                </div>

              </div>

            </div>

            <div className="Survey-divider" />

            <div className="Survey-label">
              {item.title}
            </div>

            <div className="Survey-arrow">
              ›
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}