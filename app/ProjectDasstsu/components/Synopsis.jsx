import React from "react";
import "./Synopsis.css";

function DasstsDescriptionBox() {
  const text =
    "大学祭に来たあなたは、ふと近くの教室に入ると、そこには南京錠で閉ざされた箱に時限爆弾が！カウントダウンはすでに始まっています。生きて帰るためには、いくつかの謎を解いて南京錠を開け、時限爆弾を止めなければなりません。あなたは仲間と協力して、制限時間10分以内にこの密室から無事に脱出できるでしょうか？";

  return (
    <section>
      <div className="dasstsu-synopsis-wrapper">
        <div className="dasstsu-section-title">
          あらすじ
        </div>
      </div>

      <div className="dasstsu-synopsis-box">
        {text}
      </div>
    </section>
  );
}

export default DasstsDescriptionBox;