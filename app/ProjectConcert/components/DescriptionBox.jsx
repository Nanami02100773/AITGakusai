import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "有名アーティスト様をお招きして、鉀徳館でコンサートを開催します。来場者の皆さまに楽しんでいただくとともに、コンサートに携わったすべての人にとって忘れられない最高の思い出となる企画を目指します。";

  return (
    <div>
      <div>
        <div className="concert-section-title">
          企画説明
        </div>
      </div>

      <div className="concert-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;