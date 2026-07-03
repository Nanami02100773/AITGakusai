"use client";

import "./StageGuide.css";

export default function StageGuide() {
  return (
    <section className="stage-guide">

      {/* タイトル */}
      <div className="stage-guide-header">
        <div className="stage-guide-number">
          04
        </div>

        <h2>ステージ情報</h2>
      </div>

      {/* 画像 */}
      <div className="stage-guide-image">
        <img
          src="/guide/stage.png"
          alt="ステージ情報"
        />
      </div>

      {/* 説明 */}
      <ul className="stage-guide-list">
        <li>1日目・2日目の切り替えができます。</li>
        <li>タイムテーブルを表示します。</li>
        <li>▼を押すと詳細を確認できます。</li>
        <li>出演者紹介も掲載しています。</li>
      </ul>

    </section>
  );
}