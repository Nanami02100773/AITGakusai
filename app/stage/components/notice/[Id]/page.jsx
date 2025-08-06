import './globals.css'; // ✅ これが必要です
export default function NoticePage({ params }) {
  const { id } = params;

  return (
    <div className="notice-wrapper">
      <div className="notice-label">お知らせ</div>

      <div className="notice-card">
        <div className="notice-card-header">
          <div className="notice-dot" />
          <button className="notice-arrow">&#8963;</button>
        </div>

        <div className="notice-card-content">
          <h1>ステージ関連お知らせ No.{id}</h1>
          <p>
            このページは <code>/notice/{id}</code> に対応する動的ルートです。
          </p>
        </div>
      </div>
    </div>
  );
}
