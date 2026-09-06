import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "セントラル1階が本格的なカジノ空間に大変身！トランプやルーレット、ビッグシックス、ジャックポット、ダーツなど、さまざまなゲームをコインを使って楽しめます。さらにステージではビンゴゲームも開催！カジノならではの雰囲気と勝ち負けのスリルを味わいながら、友達や家族と一緒に楽しい時間を過ごしてみませんか？";

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