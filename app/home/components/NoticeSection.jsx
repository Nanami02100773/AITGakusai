"use client";
import Link from "next/link";
import "./NoticeSection.css";
import { useEffect, useState } from "react";
import { homeNoticeData } from "./data/homeNoticeData";

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
      <h2 className="Home-section-title">お知らせ</h2>

      <div className="Home-box3">
        {notices.map((notice, index) => (
          <Link
            key={notice.id}
            href={`/home/notice/${notice.id}`}
            className={`Home-notice-item n${index + 1}`}
          >

    <svg
  className="notice-wave"
  viewBox="0 0 200 100"
  preserveAspectRatio="none"
>
  {/* 奥の波 */}
  <path
    className="wave-back"
    d="M0,120 C30,80 120,20 200,90 L200,200 Z"
  />
  {/* 手前の波 */}
  <path
    className="wave-front"
    d="M0,150 C80,50 150,90 200,30 L200,100 Z"
  />
</svg>

            {/* ===== 番号 ===== */}
            <div className={`notice-number n${index + 1}`}>
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* ===== テキスト ===== */}
            <div className="notice-text">
              {notice.title}
            </div>

            {/* ===== 矢印 ===== */}
            <div className="notice-arrow">›</div>

          </Link>
        ))}
      </div>
    </section>
  );
};

export default NoticeSection;