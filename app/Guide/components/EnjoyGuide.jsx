import "./EnjoyGuide.css";

export default function EnjoyGuide() {
  return (
    <section className="enjoy-guide">
      <div className="enjoy-guide-card">
        <div className="enjoy-guide-number">10</div>

        <h2 className="enjoy-guide-title">楽しもう！</h2>

        <div className="enjoy-guide-content">
          <div className="enjoy-guide-text">
            <p>工大祭2025を</p>
            <p>思いっきり</p>
            <p>楽しんでください！</p>

            <br />

            <p>最高の思い出を</p>
            <p>一緒につくろう！</p>
          </div>

          <img
            src="/mascot.png"
            alt="マスコット"
            className="enjoy-guide-image"
          />
        </div>
      </div>
    </section>
  );
}