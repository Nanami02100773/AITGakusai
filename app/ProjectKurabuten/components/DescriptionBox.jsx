import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "さまざまなクラブ・サークルが出展！それぞれが普段どのような活動をしているのか、どんな魅力があるのかを知ることができます。展示を見るだけでなく、ゲームや企画などを実際に体験できるブースもあります。気になるクラブ・サークルを見つけて、ぜひ足を運んでみてください！";

  return (
    <div>
      <div>
        <div className="kurabuten-section-title">
          企画説明
        </div>
      </div>

      <div className="kurabuten-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;