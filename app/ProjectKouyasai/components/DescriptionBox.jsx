import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "学園祭の最後を締めくくるステージ企画です。表彰式や後夜ダンス、ビンゴ大会、火舞など、さまざまな企画を開催します。最後には仕掛け花火や打ち上げ花火も予定しており、学園祭のフィナーレを盛大に盛り上げます。";

  return (
    <div>
      <div>
        <div className="koyasai-section-title">
          企画説明
        </div>
      </div>

      <div className="koyasai-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;