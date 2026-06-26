import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "大学の研究室やクラブ・プロジェクト団体が日頃の研究成果や活動内容を発表する展示企画です。学生たちが主体となって運営し、ものづくりや研究の魅力を来場者の皆さまにお届けします。各団体の工夫を凝らした展示や発表をぜひお楽しみください。";

  return (
    <div>
      <div>
        <div className="kajino-section-title">
          企画説明
        </div>
      </div>

      <div className="kajino-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;