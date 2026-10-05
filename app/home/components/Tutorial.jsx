"use client";

import { useEffect, useState } from "react";
import "./Tutorial.css";
import TutorialGuide from "./TutorialGuide";

import image1 from "./Tutorial/1.jpg";
import image2 from "./Tutorial/2.jpg";
import image3 from "./Tutorial/3.jpg";
import image4 from "./Tutorial/4.jpg";

export default function Tutorial() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [page, setPage] = useState(0);


  /* =================================================
     初回だけ表示
  ================================================= */

  useEffect(() => {
    const completed =
      localStorage.getItem("tutorialCompleted");

    if (!completed) {
      setShowTutorial(true);
    }
  }, []);


  /* =================================================
     「チュートリアルをもう一度」を
     NavigationBarから受け取る
  ================================================= */

  useEffect(() => {
    const handleOpenTutorial = () => {
      setPage(0);
      setShowGuide(false);
      setShowTutorial(true);
    };

    window.addEventListener(
      "openTutorial",
      handleOpenTutorial
    );

    return () => {
      window.removeEventListener(
        "openTutorial",
        handleOpenTutorial
      );
    };
  }, []);


  /* =================================================
     チュートリアル内容
  ================================================= */

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

      image: image1,

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

      image: image2,

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

      image: image3,

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

      image: image4,

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


  /* =================================================
     次へ
  ================================================= */

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

    setPage((prev) => prev + 1);
  };


  /* =================================================
     戻る
  ================================================= */

  const prevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };


  /* =================================================
     チュートリアル終了後
  ================================================= */

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


  /* =================================================
     チュートリアル本体
  ================================================= */

  return (
    <>
      <div className="Tutorial-overlay">

        <div className="Tutorial-card">

          {/* =================================================
              ラベル
          ================================================= */}

          <div className="Tutorial-label">
            {current.label}
          </div>


          {/* =================================================
              タイトル
          ================================================= */}

          <h2 className="Tutorial-title">
            {current.title}
          </h2>


          {/* =================================================
              説明画像
          ================================================= */}

          <div
            className={`Tutorial-image-box ${
              isLastPage
                ? "Tutorial-image-box-last"
                : ""
            }`}
          >
            <img
              src={current.image.src}
              alt=""
              className="Tutorial-image"
            />
          </div>


          {/* =================================================
              説明文
          ================================================= */}

          <p className="Tutorial-text">
            {current.text}
          </p>


          {/* =================================================
              操作部分
          ================================================= */}

          <div
            className={
              isLastPage
                ? "Tutorial-controls Tutorial-controls-last"
                : "Tutorial-controls"
            }
          >

            {/* =================================================
                戻る
            ================================================= */}

            <button
              className="Tutorial-arrow Tutorial-arrow-prev"
              onClick={prevPage}
              disabled={page === 0}
            >
              ←
            </button>


            {/* =================================================
                ドット
            ================================================= */}

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


            {/* =================================================
                次へ
            ================================================= */}

            {!isLastPage && (
              <button
                className="Tutorial-arrow"
                onClick={nextPage}
              >
                →
              </button>
            )}


            {/* =================================================
                スタート
            ================================================= */}

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