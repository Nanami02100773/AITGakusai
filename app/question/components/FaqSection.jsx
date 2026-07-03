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
    <div className="faq-item-wrapper">
      {/* セクションヘッダー */}
      <button
        className="faq-item-header"
        onClick={() => toggleSection(sectionIndex)}
      >
        <div className="faq-left">
          <div className="faq-icon">
            <span className={michroma.className}>Q</span>
          </div>

          <span className="faq-title">
            {section.title}
          </span>
        </div>

        <div className="faq-toggle">
          <span
            className={`arrow ${isOpen ? "open" : ""}`}
          />
        </div>
      </button>

      {/* 開いた時 */}
      {isOpen && (
        <div className="faq-question-list">
          {section.items.map((pair, qIndex) => {
            const qKey = `${sectionIndex}-${qIndex}`;
            const isQOpen = openQuestions[qKey];

            return (
              <div
                key={qKey}
                className="faq-pair"
              >
                {/* 質問 */}
                <button
                  className={`faq-question ${isQOpen ? "open" : ""}`}
                  onClick={() => toggleQuestion(qKey)}
                >
                  <div className="faq-question-content">
                    <span className="q-circle" />

                    <div className="faq-question-label">
                      {pair.q}
                    </div>
                  </div>
                </button>

                {/* 回答 */}
                {isQOpen && (
                  <div className="faq-answer-card">
              <div className="faq-answer-header">
  <div className="faq-answer-icon">
    <span className={michroma.className}>A</span>
  </div>

  <div className="faq-answer-text">
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