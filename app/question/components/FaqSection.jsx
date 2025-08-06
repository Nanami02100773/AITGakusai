import React from "react";
import "./FaqSection.css";

/* FAQセクション */
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
        {section?.title}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="faq-box-wrapper">
          {section.items.map((pair, qIndex) => {
            const qKey = `${sectionIndex}-${qIndex}`;
            const isQOpen = openQuestions[qKey];

            return (
              <div key={qKey} className={`faq-pair ${isQOpen ? "open" : ""}`}>
                <button
                  className={`faq-question ${isQOpen ? "active" : ""}`}
                  onClick={() => toggleQuestion(qKey)}
                >
                  Q {pair.q}
                </button>
                {isQOpen && (
                  <div className="faq-answer-content">A {pair.a}</div>
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
