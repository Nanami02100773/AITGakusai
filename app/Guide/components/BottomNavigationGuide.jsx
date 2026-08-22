"use client";

import "./BottomNavigationGuide.css";

export default function BottomNavigationGuide() {
  const menus = [
    {
      title: "ホーム",
      description: "最新情報・おすすめ企画",
    },
    {
      title: "ステージ情報",
      description: "ライブやイベント情報を確認",
    },
    {
      title: "マップ",
      description: "模擬店や教室の場所を検索",
    },
    {
      title: "企画紹介",
      description: "各企画やアンケートを確認",
    },
    {
      title: "よくある質問",
      description: "FAQやマスコット紹介を確認",
    },
  ];

  return (
    <section className="bottom-navigation-guide">
      <div className="bottom-navigation-guide__header">
        <div className="bottom-navigation-guide__number">
          02
        </div>

        <h2>下部メニュー</h2>
      </div>

      {/* プレビュー */}
      <div className="bottom-navigation-guide__preview">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="bottom-navigation-guide__preview-item"
          >
            <div className="bottom-navigation-guide__preview-icon" />

            <span>{menu.title}</span>
          </div>
        ))}
      </div>

      {/* 説明一覧 */}
      <div className="bottom-navigation-guide__list">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="bottom-navigation-guide__item"
          >
            <div className="bottom-navigation-guide__icon" />

            <div className="bottom-navigation-guide__content">
              <h3>{menu.title}</h3>

              <p>{menu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}