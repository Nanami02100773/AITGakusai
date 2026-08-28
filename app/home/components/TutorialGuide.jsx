"use client";

import "./TutorialGuide.css";

export default function TutorialGuide({ onClose }) {
  return (
    <div
      className="Tutorial-guide-overlay"
      onClick={onClose}
    >

      <div className="Tutorial-guide">

        {/* ===== 吹き出し ===== */}
        <div className="Tutorial-guide-bubble">

          <p className="Tutorial-guide-text">
            わからなくなったら
            <br />
            「≡」からいつでも
            <br />
            チュートリアルを見られるよ！
          </p>

        </div>


      
        {/* ===== 閉じる ===== */}
        <button
          className="Tutorial-guide-button"
          onClick={onClose}
        >
          OK
        </button>

      </div>

    </div>
  );
}