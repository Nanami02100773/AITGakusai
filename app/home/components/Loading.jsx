"use client";

import "./Loading.css";

export default function Loading() {
  return (
    <main className="Loading-screen">

      {/* ===== 上部ウェーブ ===== */}
      <div className="Loading-wave Loading-wave-top"></div>

      {/* ===== コンテンツ ===== */}
      <div className="Loading-content">

        {/* ローディング */}
        <div className="Loading-spinner">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="Loading-spinner-bar"
              style={{
                transform: `rotate(${index * 30}deg)`,
              }}
            />
          ))}
        </div>

        {/* タイトル */}
        <h1 className="Loading-title">
          準備中です
        </h1>

        {/* 説明 */}
        <p className="Loading-message">
          ただいま公開に向けて
          <br />
          準備を進めています。
          <br />
          今しばらくお待ちください。
        </p>

      </div>

      {/* ===== 下部ウェーブ ===== */}
      <div className="Loading-wave Loading-wave-bottom"></div>

    </main>
  );
}