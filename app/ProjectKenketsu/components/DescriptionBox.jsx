import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "すぐできる人助け！病気やけがなどで輸血を必要としている患者さんの尊い生命を救うため、赤十字センター協力の元、16～69歳まで※の健康な方に献血のご協力をお願いしています。この企画では、献血バスの中で採血を行います。大学祭では、献血にご協力いただいた方を対象にくじ引きも実施し、景品や協賛品をプレゼントします。けんけつちゃんの着ぐるみやプラカードを使った情宣も行い、より多くの方に献血について知っていただけるよう活動します。ぜひこの機会に献血にご協力ください。";

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