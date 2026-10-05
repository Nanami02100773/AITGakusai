"use client";

import { useEffect, useState } from "react";
import { orbitron } from "../page";
import "./TopNavigationGuide.css";

import image1 from "./data/1.png";


// =================================================
// 透過部分を自動でカット
// =================================================

function useTransparentCrop(image) {
  const [croppedImage, setCroppedImage] = useState(image.src);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.drawImage(
        img,
        0,
        0,
        img.naturalWidth,
        img.naturalHeight
      );

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const data = imageData.data;

      let minX = canvas.width;
      let minY = canvas.height;
      let maxX = 0;
      let maxY = 0;

      let found = false;

      // 透明ではない部分を探す
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const index =
            (y * canvas.width + x) * 4;

          const alpha = data[index + 3];

          if (alpha > 5) {
            found = true;

            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
          }
        }
      }

      // 全部透明だった場合
      if (!found) {
        setCroppedImage(image.src);
        return;
      }

      const width = maxX - minX + 1;
      const height = maxY - minY + 1;

      const cropCanvas = document.createElement("canvas");

      cropCanvas.width = width;
      cropCanvas.height = height;

      const cropCtx =
        cropCanvas.getContext("2d");

      cropCtx.drawImage(
        img,
        minX,
        minY,
        width,
        height,
        0,
        0,
        width,
        height
      );

      setCroppedImage(
        cropCanvas.toDataURL("image/png")
      );
    };

    img.src = image.src;
  }, [image]);

  return croppedImage;
}


// =================================================
// メイン
// =================================================

export default function TopNavigationGuide() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    {
      number: "01",
      title: "戻るボタン",
      text: "左側にあるマークを押すと、一つ前のページに戻ることができます。",
    },
    {
      number: "02",
      title: "ロゴエリア",
      text: "愛工大祭のロゴなどが表示されます。",
    },
    {
      number: "03",
      title: "メニュー",
      text: "アプリの操作説明を確認できます。",
    },
  ];


  // =================================================
  // 画像は image1 で固定
  // =================================================

  const croppedImage =
    useTransparentCrop(image1);

  const currentAlt = "上部メニュー";


  // =================================================
  // 項目の開閉
  // =================================================

  const handleToggle = (index) => {
    setOpenItem(
      openItem === index
        ? null
        : index
    );
  };


  return (
    <section className="TopNavigationGuide">

      {/* ==========================
          ページタイトル
      ========================== */}

      <div className="TopNavigationGuide-header">

        <div
          className={`TopNavigationGuide-number ${orbitron.className}`}
        >
          01
        </div>

        <h1>上部メニュー</h1>

      </div>


      {/* ==========================
          メインカード
      ========================== */}

      <div className="TopNavigationGuide-content">


        {/* ==========================
            大きい画像ボックス
        ========================== */}

        <div className="TopNavigationGuide-image-box">

          <div className="TopNavigationGuide-image">

            <img
              src={croppedImage}
              alt={currentAlt}
            />

          </div>

        </div>


        {/* ==========================
            タイトル
        ========================== */}

        <div className="Guide-section-title">
          上部メニュー
        </div>


        {/* ==========================
            説明
        ========================== */}

        <div className="TopNavigationGuide-notice">

          {items.map((item, index) => (

            <div
              className="TopNavigationGuide-notice-item"
              key={item.title}
            >

              <button
                type="button"
                className="TopNavigationGuide-notice-title"
                onClick={() =>
                  handleToggle(index)
                }
              >

                <span className="TopNavigationGuide-notice-dot"></span>

                <span
                  className={`TopNavigationGuide-item-number ${orbitron.className}`}
                >
                  {item.number}
                </span>

                <h2>
                  {item.title}
                </h2>

                <span
                  className={`TopNavigationGuide-arrow ${
                    openItem === index
                      ? "is-open"
                      : ""
                  }`}
                >
                  &gt;
                </span>

              </button>


              {openItem === index && (

                <div className="TopNavigationGuide-notice-text">
                  {item.text}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}