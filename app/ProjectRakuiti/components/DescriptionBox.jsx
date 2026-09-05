import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "セントラルパークに19団体23店舗の模擬店が出店する企画です。さまざまな団体が趣向を凝らした料理や装飾、衣装などで来場者をお迎えします。また、来場者による人気投票を行い、総合的に最も素晴らしかった団体を「ベストオブブース賞」として決定します。模擬店を楽しみながら、ぜひお気に入りのブースに投票してみてください。";

  return (
    <div>
      <div>
        <div className="rakuichi-section-title">
          企画説明
        </div>
      </div>

      <div className="rakuichi-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;