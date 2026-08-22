import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
  "学内各所に設置されたスタンプラリーポイントを巡りスタンプを集めよう！4か所すべてのスタンプを集めた方には総合案内所にて豪華景品をプレゼント！さまざまな展示や企画を楽しみながら校内を探検しコンプリートを目指そう！";
  return (
    <div>
      <div>
        <div className="StampRally-section-title">企画説明</div>
      </div>

      <div className="ProjectStampRally-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;
