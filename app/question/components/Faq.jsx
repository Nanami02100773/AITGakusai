"use client";
import { useState } from "react";
import "./Faq.css";
import faqData from "./data/faqData";
import FaqSection from "./FaqSection";

const Faq = () => {
  const [openSections, setOpenSections] = useState({});
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="faq-wrapper">
      <h1 className="faq-box-title">よくある質問</h1>
      <div className="faq-container">
        {faqData.map((section, index) => (
          <FaqSection
            key={index}
            section={section}
            sectionIndex={index}
            isOpen={openSections[index]}
            toggleSection={toggleSection}
            openQuestions={openQuestions}
            toggleQuestion={toggleQuestion}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
