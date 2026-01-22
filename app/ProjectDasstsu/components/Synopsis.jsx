import React from "react";
import "./Synopsis.css";

function DasstsDescriptionBox() {
  const text =
    "この企画では、来場者が気軽に参加しながら楽しめる体験や展示を用意しています。会場内を巡って挑戦する企画や、学生による研究や成果の紹介を通して、新しい発見や学びに出会うことができます。友人同士はもちろん、初めての方でも楽しめる内容となっていますので、ぜひお気軽にご参加ください。";

  return (
    <section>
      {/* Synopsis タイトル */}
      <div className="Dasstsu-synopsis-wrapper">
        <div className="Dasstsu-synopsis-title">あらすじ</div>
      </div>

      {/* Synopsis 本文 */}
      <div className="Dasstsu-synopsis-box">
        {text}
      </div>
    </section>
  );
}

export default DasstsDescriptionBox;
