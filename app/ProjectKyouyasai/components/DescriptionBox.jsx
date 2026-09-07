import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  const text =
    "夜のステージを熱く盛り上げる！バンドパフォーマンスを中心に、会場全体が一体となって楽しめるステージをお届けします。迫力のある演奏と熱いパフォーマンスで、来場者の皆さまも一緒に盛り上がれること間違いなし！昼間とは一味違う夜ならではの雰囲気の中で、音楽を思いきり楽しみながら、最高の時間を過ごしましょう。学園祭の夜を彩る熱いステージを、ぜひ会場でお楽しみください！";

  return (
    <div>
      <div>
        <div className="kyoyasai-section-title">
          企画説明
        </div>
      </div>

      <div className="kyoyasai-description-box">
        {text}
      </div>
    </div>
  );
}

export default DescriptionBox;