"use client";

import React from "react";
import "./FaqSection.css";

const FaqSection = ({
  section,
  sectionIndex,
  isOpen,
  toggleSection,
  openQuestions = {},
  toggleQuestion
}) => {
  return (
    <div className="faq-item-wrapper">
      {/* セクションヘッダー */}
      <button
        className="faq-item-header"
        onClick={() => toggleSection(sectionIndex)}
      >
        <div className="faq-left">
          <div className="faq-icon">
            <div className="icon-line"></div>
          </div>

          <span className="faq-title">
            {section?.title}
          </span>
        </div>

        <div className="faq-toggle">
          <span
            className={`arrow ${
              isOpen ? "open" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* 開いた時 */}
      {isOpen && (
        <div className="faq-box-wrapper">
          {section?.items?.map((pair, qIndex) => {
            const qKey = `${sectionIndex}-${qIndex}`;
            const isQOpen = openQuestions[qKey];

            return (
              <div
                key={qKey}
                className="faq-pair"
              >
                {/* 質問 */}
                <button
                  className="faq-question"
                  onClick={() =>
                    toggleQuestion(qKey)
                  }
                >
                  <span className="q-circle">
                    Q
                  </span>

                  <span className="question-text">
                    {pair.q}
                  </span>
                </button>

                {/* 回答 */}
                {isQOpen && (
                  <div className="faq-answer-card">
                    {pair.a}
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