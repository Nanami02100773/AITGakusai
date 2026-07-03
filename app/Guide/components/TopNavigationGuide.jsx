"use client";

import "./TopNavigationGuide.css";

export default function TopNavigationGuide() {
  return (
    <div className="guide-card">

      {/* タイトル */}
      <div className="guide-header">
        <div className="Guide-section-title">
          01. メニュー
        </div>
      </div>

      {/* メニュー全体画像 */}
      <div className="menu-preview-box">
        {/* 画像がある場合 */}
        {/* <img src="/guide/home-menu.png" alt="メニュー画面" /> */}

        {/* 画像がない場合 */}
        <div className="image-placeholder">
          メニュー画面
        </div>
      </div>

      {/* 説明一覧 */}
      <div className="guide-detail-box">

        {/* 戻る */}
        <div className="guide-item">

          <div className="guide-left">
            <div className="guide-image-box">
              <img src="/guide/back.png" alt="戻る" />
            </div>
          </div>

          <div className="guide-text">
            <h3>戻る</h3>
            <p>前の画面へ戻ります。</p>
          </div>

        </div>

        {/* メニュー */}
        <div className="guide-item">

          <div className="guide-left">
            <div className="guide-image-box">
              <img src="/guide/menu.png" alt="メニュー" />
            </div>
          </div>

          <div className="guide-text">
            <h3>メニュー</h3>
            <p>操作説明やログインページを表示します。</p>
          </div>

        </div>

        {/* ロゴ */}
        <div className="guide-item">

          <div className="guide-left">
            <div className="guide-image-box">
              <img src="/guide/logo.png" alt="ロゴ" />
            </div>
          </div>

          <div className="guide-text">
            <h3>ロゴエリア</h3>
            <p>学祭ロゴやお知らせが表示されます。</p>
          </div>

        </div>

      </div>

    </div>
  );
}