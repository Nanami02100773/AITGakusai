import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h1 className="loading-text">読み込み中...</h1>
    </div>
  );
}