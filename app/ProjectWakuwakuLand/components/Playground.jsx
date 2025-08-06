import React from "react";
import "./Playground.css";

const cardData = [
  { label: "ラベル1", title: "サンプルタイトル 1", desc: "説明文" },
  { label: "ラベル2", title: "サンプルタイトル 2", desc: "ここにカード2の説明が入ります。" },
  { label: "ラベル3", title: "サンプルタイトル 3", desc: "カード3の内容についての簡単な説明文。" },
  { label: "ラベル4", title: "サンプルタイトル 4", desc: "これはカード4の情報を説明するテキストです。" },
  { label: "ラベル5", title: "サンプルタイトル 5", desc: "カード5" },
  { label: "ラベル6", title: "サンプルタイトル 6", desc: "これはカード6の簡単な紹介文です。" },
];

const WakuwakuLand = () => {
  return (
    <main className="card-list">
        <div className="wakuwakuland-title">ブース紹介</div>
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-left">
            <div className="thumb-wrapper">
              <div className="thumb"></div>
              <div className="label">{card.label}</div>
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

export default WakuwakuLand;
