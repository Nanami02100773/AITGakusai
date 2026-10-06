"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./Event.css";

import image1 from "./Data/1.jpg";
import image2 from "./Data/2.jpg";
import image3 from "./Data/3.jpg";
import image4 from "./Data/4.jpg";
import image5 from "./Data/5.jpg";

const ProjectEventImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

export default function ProjectEvent() {
  const [currentImage, setCurrentImage] = useState(0);

  // 3秒ごとに画像切り替え
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) =>
        prev === ProjectEventImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="Project-Event-section">

      {/* メイン画像 */}
      <div className="Project-Event-image-area">

        <Image
          src={ProjectEventImages[currentImage]}
          alt={`企画紹介 ${currentImage + 1}`}
          fill
          className="Project-Event-image"
        />

        {/* タイトル */}
        <div className="Project-Event-title">
          企画紹介
        </div>

        {/* 説明 */}
        <div className="Project-Event-description-box">
          <p className="Project-Event-description-text">
            本ページでは愛工大祭で実施される各企画の内容をまとめて紹介しています。開催時間や場所なども掲載しているので、ぜひご来場の際の参考にご覧ください。
          </p>
        </div>

      </div>

      {/* インジケーター */}
      <div className="Project-Event-card">
        <div className="Project-Event-indicator">
          {ProjectEventImages.map((_, index) => (
            <span
              key={index}
              className={
                index === currentImage
                  ? "Project-Event-indicator-dot active"
                  : "Project-Event-indicator-dot"
              }
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>

    </section>
  );
}