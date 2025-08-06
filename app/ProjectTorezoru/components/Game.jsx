import React from "react";
import "./Game.css";

const cardData = [
  {
    src: "sample1.jpg",
    alt: "画像1",
    title: "サンプルタイトル 1",
    desc: "これはカード1の説明文です。画像は左に表示されます。",
  },
  {
    src: "sample2.jpg",
    alt: "画像2",
    title: "サンプルタイトル 2",
    desc: "ここはカード2の説明文。説明文が少し長くても対応できます。",
  },
  {
    src: "sample3.jpg",
    alt: "画像3",
    title: "サンプルタイトル 3",
    desc: "カード3の詳細情報をここに記載してください。",
  },
  {
    src: "sample4.jpg",
    alt: "画像4",
    title: "サンプルタイトル 4",
    desc: "カード4の内容です。用途に応じてご自由に編集してください。",
  },
  {
    src: "sample5.jpg",
    alt: "画像5",
    title: "サンプルタイトル 5",
    desc: "カード5の紹介文です。",
  },
  {
    src: "sample6.jpg",
    alt: "画像6",
    title: "サンプルタイトル 6",
    desc: "これはカード6の説明文です。見出しと説明が分かれています。",
  },
];

const Torezoru = () => {
  return (
    <main className="card-list">
          <div className="game-title">出展団体</div>
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-left">
            <div className="thumb-wrapper">
              <div className="thumb">
                <img src={card.src} alt={card.alt} />
              </div>
            </div>
          </div>
          <div className="card-divider"></div>
          <div className="card-right">
            <div className="title">{card.title}</div>
            <div className="desc">{card.desc}</div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Torezoru;
