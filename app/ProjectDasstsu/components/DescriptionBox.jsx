import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "大学祭に訪れたあなたは、ふと近くの教室に入ると、そこには南京錠で閉ざされた箱に入った時限爆弾が……。カウントダウンが始まる中、いくつかの謎を解き、制限時間内に爆弾を止めて無事に脱出することができるでしょうか？3段階の難易度から選んで、謎解きに挑戦してみよう！";

  return (
    <div>
      <div>
        <div className="dasstsu-section-title">
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