"use client";

import "./FaqGuide.css";

export default function FaqGuide() {
  return (
    <section className="faq-guide">

      <div className="faq-guide-header">
        <div className="faq-guide-number">
          08
        </div>

        <h2>よくある質問</h2>
      </div>

      <div className="faq-guide-image">
        <img
          src="/guide/faq.png"
          alt="よくある質問"
        />
      </div>

      <ul className="faq-guide-list">
        <li>よくある質問をカテゴリごとに確認できます。</li>
        <li>質問をタップすると回答が表示されます。</li>
        <li>来場前や当日に困ったときにご利用ください。</li>
      </ul>

    </section>
  );
}