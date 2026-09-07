import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "セントラル広場のステージで、芸人、アイドル、ダンサーなど多彩な出演者によるパフォーマンスをお楽しみいただけます。さらに、歌王やイントロドン、〇×ゲームなど、来場者の皆さまも一緒に楽しめる体験型の企画も開催します。迫力のあるパフォーマンスと参加型の企画を通して、会場全体が一体となって盛り上がれるステージをお届けします。ぜひセントラル広場で、特別な時間をお楽しみください！";

  return (
    <div>
      <div>
        <div className="laughmusic-section-title">
          企画説明
        </div>
      </div>

      <div className="laughmusic-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;