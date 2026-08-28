"use client";

import { useEffect, useState } from "react";
import "./Tutorial.css";
import TutorialGuide from "./TutorialGuide";

export default function Tutorial() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const [page, setPage] = useState(0);


  /* ===== 初回だけ表示 ===== */
  useEffect(() => {
    const completed =
      localStorage.getItem("tutorialCompleted");

    if (!completed) {
      setShowTutorial(true);
    }
  }, []);


  const tutorialData = [
    {
      label: "はじめに",

      title: (
        <>
          アプリの使い方を
          <br />
          かんたんに説明するよ！
        </>
      ),

      image: "/images/tutorial1.png",

      text: (
        <>
          スワイプしてアプリの使い方を
          <br />
          チェックしてみてね！
        </>
      ),
    },

    {
      label: "上部メニュー",

      title: (
        <>
          右上の「≡」をタップすると
          <br />
          詳細情報が見られるよ！
        </>
      ),

      image: "/images/tutorial2.png",

      text: (
        <>
          各機能の詳しい使い方や情報は
          <br />
          メニューから確認できるよ！
        </>
      ),
    },

    {
      label: "下部メニュー",

      title: (
        <>
          下のメニューから
          <br />
          目的のページへ移動できるよ！
        </>
      ),

      image: "/images/tutorial3.png",

      text: (
        <>
          ホームやマップなど
          <br />
          よく使うページをすぐに開けるよ！
        </>
      ),
    },

    {
      label: "準備OK！",

      title: (
        <>
          愛工大祭を楽しもう！
        </>
      ),

      image: "/images/tutorial4.png",

      text: (
        <>
          これで準備完了！
          <br />
          いろいろなページを見てみてね！
        </>
      ),
    },
  ];


  const current = tutorialData[page];

  const isLastPage =
    page === tutorialData.length - 1;


  /* ===== 次へ ===== */
  const nextPage = () => {
    if (isLastPage) {
      setShowTutorial(false);

      localStorage.setItem(
        "tutorialCompleted",
        "true"
      );

      setTimeout(() => {
        setShowGuide(true);
      }, 300);

      return;
    }

    setPage(page + 1);
  };


  /* ===== 戻る ===== */
  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };


  /* ===== チュートリアル終了後 ===== */
  if (!showTutorial) {
    return (
      <>
        {showGuide && (
          <TutorialGuide
            onClose={() => setShowGuide(false)}
          />
        )}
      </>
    );
  }


  return (
    <>
      <div className="Tutorial-overlay">

        <div className="Tutorial-card">

          <div className="Tutorial-label">
            {current.label}
          </div>


          <h2 className="Tutorial-title">
            {current.title}
          </h2>


          {/* ===== 説明画像ボックス ===== */}
          <div className="Tutorial-image-box">

            <img
              src={current.image}
              alt=""
              className="Tutorial-image"
            />

          </div>


          <p className="Tutorial-text">
            {current.text}
          </p>


{/* ===== 操作部分 ===== */}
<div
  className={
    isLastPage
      ? "Tutorial-controls Tutorial-controls-last"
      : "Tutorial-controls"
  }
>

  {/* ===== 戻る ===== */}
  <button
    className="Tutorial-arrow Tutorial-arrow-prev"
    onClick={prevPage}
    disabled={page === 0}
  >
    ←
  </button>


{/* ===== ドット ===== */}
{!isLastPage && (
  <div className="Tutorial-dots">
    {tutorialData.map((_, index) => (
      <span
        key={index}
        className={
          index === page
            ? "Tutorial-dot Tutorial-dot-active"
            : "Tutorial-dot"
        }
      />
    ))}
  </div>
)}


  {/* ===== 次へ ===== */}
  {!isLastPage && (
    <button
      className="Tutorial-arrow"
      onClick={nextPage}
    >
      →
    </button>
  )}


  {/* ===== スタート ===== */}
  {isLastPage && (
    <button
      className="Tutorial-start"
      onClick={nextPage}
    >
      スタート
    </button>
  )}

</div>
        </div>

      </div>
    </>
  );
}