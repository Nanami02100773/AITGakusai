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
      <button
        className="faq-item-header"
        onClick={() => toggleSection(sectionIndex)}
      >
        <div className="faq-left">
          <div className="faq-icon">
            {/* 仮：線アイコン風 */}
            <div className="icon-line"></div>
          </div>
          <span className="faq-title">{section?.title}</span>
        </div>

        <span className={`arrow ${isOpen ? "open" : ""}`}></span>
      </button>

      {isOpen && (
        <div className="faq-box-wrapper">
          {section.items.map((pair, qIndex) => {
            const qKey = `${sectionIndex}-${qIndex}`;
            const isQOpen = openQuestions[qKey];

            return (
              <div key={qKey} className="faq-pair">
                <button
                  className="faq-question"
                  onClick={() => toggleQuestion(qKey)}
                >
                  Q {pair.q}
                </button>

                {isQOpen && (
                  <div className="faq-answer-content">
                    A {pair.a}
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