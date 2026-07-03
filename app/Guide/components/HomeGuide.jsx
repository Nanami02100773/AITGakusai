"use client";

import "./HomeGuide.css";

export default function HomeGuide() {
  return (
    <section className="home-guide">

      {/* タイトル */}
      <div className="home-guide-header">
        <div className="home-guide-number">
          03
        </div>

        <h2>ホーム</h2>
      </div>

      {/* スマホ画像 */}
      <div className="home-guide-image">
        <img
          src="/guide/home.png"
          alt="ホーム画面"
        />
      </div>

      {/* 説明 */}
      <ul className="home-guide-list">
        <li>最新のお知らせを確認できます。</li>
        <li>注目企画を表示します。</li>
        <li>下へスクロールすると各機能へ移動できます。</li>
      </ul>

    </section>
  );
}