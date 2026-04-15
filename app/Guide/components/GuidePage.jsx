import "./GuidePage.css";

export default function GuidePage() {
  return (
    <div className="guide-container">
      <h1 className="guide-title">操作説明</h1>

      <div className="guide-box">
        <p>・画面下のアイコンから各ページに移動できます。</p>
        <p>・≡ボタンを押すとメニューが開きます。</p>
        <p>・ロゴは自動で切り替わります。</p>
      </div>
    </div>
  );
}