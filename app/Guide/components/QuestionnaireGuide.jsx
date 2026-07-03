"use client";

import "./QuestionnaireGuide.css";

export default function QuestionnaireGuide() {
  return (
    <section className="questionnaire-guide">

      <div className="questionnaire-guide-header">
        <div className="questionnaire-guide-number">
          07
        </div>

        <h2>アンケート</h2>
      </div>

      <div className="questionnaire-guide-image">
        <img
          src="/guide/questionnaire.png"
          alt="アンケート"
        />
      </div>

      <ul className="questionnaire-guide-list">
        <li>アプリ満足度アンケートに回答できます。</li>
        <li>企画ごとのアンケートを選択できます。</li>
        <li>回答後は送信ボタンで提出できます。</li>
      </ul>

    </section>
  );
}