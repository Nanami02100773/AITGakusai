"use client";

import React from "react";
import { Michroma } from "next/font/google";
import "./FaqSection.css";

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
    <div className="Question-FaqSection-item">
      {/* セクションヘッダー */}
      <button
        className="Question-FaqSection-header"
        onClick={() => toggleSection(sectionIndex)}
      >
        <div className="Question-FaqSection-left">
          <div className="Question-FaqSection-icon">
            <span className={michroma.className}>Q</span>
          </div>

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

      {/* 開いた時 */}
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
                {/* 質問 */}
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

                {/* 回答 */}
                {isQOpen && (
                  <div className="Question-FaqSection-answer-card">
                    <div className="Question-FaqSection-answer-header">
                      <div className="Question-FaqSection-answer-icon">
                        <span className={michroma.className}>A</span>
                      </div>

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