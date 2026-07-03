"use client";

import "./ProjectGuide.css";

export default function ProjectGuide() {
  return (
    <section className="project-guide">

      <div className="project-guide-header">
        <div className="project-guide-number">
          06
        </div>

        <h2>企画紹介</h2>
      </div>

      <div className="project-guide-image">
        <img
          src="/guide/project.png"
          alt="企画紹介"
        />
      </div>

      <ul className="project-guide-list">
        <li>教室企画・ステージ企画を掲載しています。</li>
        <li>企画をタップすると詳細を確認できます。</li>
        <li>開催場所や開催時間を確認できます。</li>
      </ul>

    </section>
  );
}