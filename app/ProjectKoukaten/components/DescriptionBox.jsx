import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "ここに企画の説明が入ります。企画の内容や目的、参加方法などを詳しく説明します。例えば、スタンプラリーでは、参加者が指定された場所を訪れてスタンプを集めることで、特典を得ることができます。また、工科展では、学生たちの研究やプロジェクトを展示し、来場者に技術やアイデアを紹介します。各企画の詳細は、公式ウェブサイトやSNSで随時更新されますので、ぜひチェックしてください！";

  return (
    <div>
      <div className="Koukaten-section-title">企画説明</div>

      <div className="Koukaten-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;
