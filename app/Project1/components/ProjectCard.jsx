// ProjectCard.jsx
import React from "react";
import "./ProjectCard.css";

export default function ProjectCardList() {
  const projects = [
    { title: "スタンプラリー", url: "./ProjectStampRally" },
    { title: "工科展", url: "/ProjectKoukaten" },
    { title: "クラブ展", url: "ProjectKurabuten" },
    { title: "WAKUWAKU LAND", url: "/ProjectWakuwakuLand" },
    { title: "MAKE", url: "/ProjectMake" },
    { title: "脱出ゲーム", url: "/ProjectDasstsu" }, // ← 外部リンク
    { title: "献血", url: "/ProjectKenketsu" },
    { title: "楽市楽座", url: "/ProjectRakuiti" },
    { title: "トレゾール", url: "/ProjectTorezoru" },
    { title: "condort", url: "#" },
    { title: "Laugh & Music", url: "#" },
    { title: "狂夜祭", url: "#" },
    { title: "後夜祭", url: "#" }
  ];

  return (
    <div className="project-list">
      {projects.map((proj, idx) => (
        proj.url !== "#" ? (
          <a 
            href={proj.url}
            key={idx}
            className="project-card"
            target={proj.url.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <div className="project-title">{proj.title}</div>
          </a>
        ) : (
          <div key={idx} className="project-card">
            <div className="project-title">{proj.title}</div>
          </div>
        )
      ))}
    </div>
  );
}
