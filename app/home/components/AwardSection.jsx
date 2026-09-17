import React from "react";
import "./AwardSection.css";

const awards = [
  {
    title: "ベスト・オブ・ブース賞",
    description:
      "全模擬店の中から、お客様による投票で最も高い評価を得た団体に贈られる賞です。多くのお客様から支持を集めた、最も優れた模擬店が選ばれます。",
  },
  {
    title: "ベストオブ工科展",
    description:
      "工科展に参加する団体の中から、最も優秀な団体に贈られる賞です。工科展を代表する、特に優れた活動を行った団体が選ばれます。",
  },
  {
    title: "同窓会特別賞",
    description:
      "一般団体のみを対象とした特別賞です。工科展での活動内容や取り組みなどを通して、特に優れた団体が選ばれ、同窓会から贈られる賞です。",
  },
  {
    title: "後援会特別賞",
    description:
      "一般団体のみを対象とした特別賞です。工科展での活動内容や取り組みなどを通して、特に優れた団体が選ばれ、後援会から贈られる賞です。",
  },
];

export default function AwardSection() {
  return (
    <section className="Home-Award-section">

      {/* =================================================
          タイトル
      ================================================= */}
      <h2 className="Home-section-title">
        グランプリ
      </h2>

      <div className="Home-Award-container">

        <div className="Home-Award-crown">

          <div className="Home-Award-list">

            <div className="Home-Award-cornerLeftBottom"></div>
            <div className="Home-Award-cornerRightBottom"></div>

            {/* =================================================
                グランプリとは？
            ================================================= */}
            <div className="Home-Award-crownArea">

              <div className="Home-Award-crownTextWrap">

                <div className="Home-Award-crownIconWrap">
                  <img
                    src="/Award/crown.png"
                    alt="crown"
                    className="Home-Award-crownIcon"
                  />
                </div>

                <div className="Home-Award-crownText">

                  <div className="Home-Award-crownSubtitle">
                    グランプリとは？
                  </div>

                  <div className="Home-Award-crownDescription">
                    模擬店・工科展などの各出展企画を対象に、来場者や審査員による投票を実施し、学園祭を代表するグランプリを決定します。
                  </div>

                </div>

              </div>

            </div>

            <div className="Home-Award-crownLine"></div>

            {/* =================================================
                賞一覧
            ================================================= */}
            {awards.map((award, i) => (
              <div
                key={i}
                className={`Home-Award-card ${
                  i === 0 ? "Home-Award-card-first" : ""
                }`}
              >

                <div className="Home-Award-leftBar"></div>

                <div className="Home-Award-cardTitle">
                  {award.title}
                </div>

                <div className="Home-Award-cardDescription">
                  {award.description}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}