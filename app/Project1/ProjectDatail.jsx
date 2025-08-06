// ProjectDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const projects = [
  "スタンプラリー", "工科展", "クラブ展", "WAKUWAKU LAND",
  "MAKE", "脱出ゲーム", "献血", "楽市楽座", "トレゾール",
  "condort", "Laugh & Music", "狂夜祭", "後夜祭"
];

export default function ProjectDetail() {
  const { id } = useParams();
  const projectName = projects[id];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{projectName}</h1>
      <p>ここに {projectName} の詳細情報を追加できます。</p>
      <Link to="/">← 一覧に戻る</Link>
    </div>
  );
}
