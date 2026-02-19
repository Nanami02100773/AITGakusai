import React from "react";
import "./CompanySNS.css";

function CompanySNS() {
  return (
    <section>
      <div className="Company-section-wrapper">
        <div className="Company-section-title">
          Details
        </div>
      </div>

      <div className="Company-sns-wrapper">
        <a
          href="https://instagram.com/企業公式"
          target="_blank"
          rel="noopener noreferrer"
          className="Company-sns-icon"
        >
          Instagram
        </a>

        <a
          href="https://twitter.com/企業公式"
          target="_blank"
          rel="noopener noreferrer"
          className="Company-sns-icon"
        >
          X
        </a>

        <a
          href="https://youtube.com/企業公式"
          target="_blank"
          rel="noopener noreferrer"
          className="Company-sns-icon"
        >
          YouTube
        </a>
      </div>
    </section>
  );
}

export default CompanySNS;
