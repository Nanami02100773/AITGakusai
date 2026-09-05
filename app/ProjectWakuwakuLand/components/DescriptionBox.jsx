import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "移動遊園地をイメージした、子どもから大人まで楽しめる体験型企画です。動物とふれあえる動物園やエアー遊具、さかなつり、ボウリング、射的など、さまざまな遊びを楽しむことができます。家族や友達と一緒に、思いっきり遊んで楽しんでください！";

  return (
    <div>
      <div>
        <div className="kirakiraparc-section-title">
          企画説明
        </div>
      </div>

      <div className="kirakiraparc-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;