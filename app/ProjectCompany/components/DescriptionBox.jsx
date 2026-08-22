import React from "react";
import "./DescriptionBox.css";

function CompanyDescriptionBox() {
  const text =
    "紹介文など";

  return (
    <section>
      {/* セクションタイトル */}
      <div className="Company-section-wrapper">
        <div className="Company-section-title">企業紹介</div>
      </div>

      {/* 説明ボックス */}
      <div className="Company-description-box">
        {text}
      </div>
    </section>
  );
}

export default CompanyDescriptionBox;
