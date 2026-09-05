import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "大学祭で献血にご協力いただく企画です。受付をしていただいた方にはくじ引きに参加していただき、景品や協賛品をプレゼントします。けんけつちゃんの着ぐるみやプラカードを使った情宣も行い、より多くの方に献血について知っていただけるよう活動します。ぜひご協力ください。";

  return (
    <div>
      <div>
        <div className="kenketsu-section-title">
          企画説明
        </div>
      </div>

      <div className="kenketsu-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;