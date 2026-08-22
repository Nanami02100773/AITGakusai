import "./LoginGuide.css";

export default function LoginGuide() {
  return (
    <section className="login-guide">
      <div className="login-guide-card">
        <div className="login-guide-number">09</div>

        <h2 className="login-guide-title">ログインページ</h2>

        <div className="login-guide-preview">
          <div className="login-preview">
            <h3>AIT 工大祭2025</h3>

            <input
              type="text"
              placeholder="メールアドレス"
              readOnly
            />

            <input
              type="password"
              placeholder="パスワード"
              readOnly
            />

            <button>ログイン</button>
          </div>
        </div>

        <p className="login-guide-text">
          ※ログインでアンケートや
          <br />
          一部機能が利用できます。
        </p>
      </div>
    </section>
  );
}