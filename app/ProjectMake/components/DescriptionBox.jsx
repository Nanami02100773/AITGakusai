import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
  "メニューをもとに来場者の皆さまにヘアアレンジやメイク、ボディーシールなどを楽しんでいただく企画です。MAKEの雰囲気に合わせた音楽が流れる空間で、普段とは少し違ったおしゃれを体験してみませんか？ぜひお気軽にお越しください。";
  return (
    <div>
      <div>
        <div className="make-section-title">
          企画説明
        </div>
      </div>

      <div className="Koukaten-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;