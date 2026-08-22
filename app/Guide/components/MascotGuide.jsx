"use client";

import "./MascotGuide.css";

export default function MascotGuide() {
  return (
    <section className="mascot-guide">

      <div className="mascot-guide-header">
        <div className="mascot-guide-number">
          09
        </div>

        <h2>マスコット紹介</h2>
      </div>

      <div className="mascot-guide-image">
        <img
          src="/guide/mascot.png"
          alt="マスコット紹介"
        />
      </div>

      <ul className="mascot-guide-list">
        <li>大学祭公式マスコットを紹介しています。</li>
        <li>プロフィールや特徴を確認できます。</li>
        <li>マスコットの魅力をぜひご覧ください。</li>
      </ul>

    </section>
  );
}