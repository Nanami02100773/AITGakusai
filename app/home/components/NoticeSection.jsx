"use client";
import Link from "next/link";
import "./NoticeSection.css";
import { useEffect, useState } from "react";
import { homeNoticeData } from "./data/homeNoticeData";
import { orbitron } from "../page";

const NoticeSection = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("notices") || "[]");

    const filtered = saved.filter((n) => n.category === "all");
    setNotices([...filtered, ...homeNoticeData]);
  }, []);

  return (
    <section className="Home-notice-section">
      {/* ← タイトルはいじらない */}
      <div className="Home-section-title-wrapper">
  <div className="Home-section-title">
    お知らせ
  </div>
</div>
      <div className="Home-box3">
        {notices.map((notice, index) => (
          <Link
            key={notice.id}
            href={`/home/notice/${notice.id}`}
            className={`Home-notice-item n${index + 1}`}
          >


            {/* ===== 番号 ===== */}
  <div
  className={`
    notice-number
    n${index + 1}
    ${orbitron.className}
  `}
>
  {String(index + 1).padStart(2, "0")}
</div>

<div className="notice-line" />
           {/* ===== テキスト ===== */}
<div className="notice-text">
  {notice.title}
</div>

<div className="notice-dots" />

{/* ===== 矢印 ===== */}
<div className="notice-arrow">›</div>

          </Link>
        ))}
      </div>
    </section>
  );
};

export default NoticeSection;