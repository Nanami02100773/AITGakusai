"use client";

import "./Maintenance.css";

export default function Maintenance() {
  return (
    <main className="Maintenance-screen">

      {/* ===== 上部ウェーブ ===== */}
      <div className="Maintenance-wave Maintenance-wave-top"></div>

      {/* ===== コンテンツ ===== */}
      <div className="Maintenance-content">

        {/* ローディング */}
        <div className="Maintenance-spinner">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="Maintenance-spinner-bar"
              style={{
                transform: `rotate(${index * 30}deg)`,
              }}
            />
          ))}
        </div>

        {/* タイトル */}
        <h1 className="Maintenance-title">
          メンテナンス中です
        </h1>

        {/* 説明 */}
        <p className="Maintenance-message">
          ただいまシステムのメンテナンスを
          <br />
          行っております。
          <br />
          しばらくしてからもう一度
          <br />
          アクセスしてください。
        </p>

      </div>

      {/* ===== 下部ウェーブ ===== */}
      <div className="Maintenance-wave Maintenance-wave-bottom"></div>

    </main>
  );
}