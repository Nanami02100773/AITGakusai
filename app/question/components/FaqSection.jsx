"use client";

import React from "react";
import {
  Michroma,
  M_PLUS_Rounded_1c,
} from "next/font/google";
import "./FaqSection.css";

/* =================================================
   通常フォント
================================================= */
const rounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

/* =================================================
   Q・A専用フォント
================================================= */
const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

const FaqSection = ({
  section,
  sectionIndex,
  isOpen,
  toggleSection,
  openQuestions = {},
  toggleQuestion,
}) => {
  return (
    <div
      className={`Question-FaqSection-item ${rounded.className}`}
    >

      {/* =================================================
          セクションヘッダー
      ================================================= */}
      <button
        className="Question-FaqSection-header"
        onClick={() => toggleSection(sectionIndex)}
      >
        <div className="Question-FaqSection-left">

          {/* QだけMichroma */}
          <div className="Question-FaqSection-icon">
            <span className={michroma.className}>
              Q
            </span>
          </div>

          {/* 日本語はM PLUS Rounded 1c */}
          <span className="Question-FaqSection-title">
            {section.title}
          </span>

        </div>

        <div className="Question-FaqSection-toggle">
          <span
            className={`Question-FaqSection-arrow ${
              isOpen ? "open" : ""
            }`}
          />
        </div>
      </button>

      {/* =================================================
          質問一覧
      ================================================= */}
      {isOpen && (
        <div className="Question-FaqSection-question-list">

          {section.items.map((pair, qIndex) => {
            const qKey = `${sectionIndex}-${qIndex}`;
            const isQOpen = openQuestions[qKey];

            return (
              <div
                key={qKey}
                className="Question-FaqSection-pair"
              >

                {/* =================================================
                    質問
                ================================================= */}
                <button
                  className={`Question-FaqSection-question ${
                    isQOpen ? "open" : ""
                  }`}
                  onClick={() => toggleQuestion(qKey)}
                >
                  <div className="Question-FaqSection-question-content">

                    <span className="Question-FaqSection-question-circle" />

                    <div className="Question-FaqSection-question-label">
                      {pair.q}
                    </div>

                  </div>
                </button>

                {/* =================================================
                    回答
                ================================================= */}
                {isQOpen && (
                  <div className="Question-FaqSection-answer-card">

                    <div className="Question-FaqSection-answer-header">

                      {/* AだけMichroma */}
                      <div className="Question-FaqSection-answer-icon">
                        <span className={michroma.className}>
                          A
                        </span>
                      </div>

                      {/* 日本語はM PLUS Rounded 1c */}
                      <div className="Question-FaqSection-answer-text">
                        {pair.a}
                      </div>

                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
};

export default FaqSection;