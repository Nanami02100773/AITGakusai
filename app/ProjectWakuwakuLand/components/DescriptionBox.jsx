import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "移動遊園地やエアー遊具！動物とふれあえる動物園やエアー遊具、さかなつり、スーパーボールすくい、射的をやっています！大人も子供も楽しめること間違いなし！";

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