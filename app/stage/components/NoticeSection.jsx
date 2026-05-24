"use client";
import Link from "next/link";
import "./NoticeSection.css";
import { useEffect, useState } from "react";

const NoticeSection = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notices") || "[]");
    const filtered = saved.filter((n) => n.category === "stage");
    setNotices(filtered);
  }, []);

  return (
    <section className="Stage-notice-section">

      {/* タイトル */}
      <div className="Stage-section-title-wrapper">
        <div className="Stage-section-title">
          お知らせ
        </div>
      </div>

      <div className="Stage-notice-box">

        {notices.map((notice, index) => (
          <Link
            key={notice.id}
            href={`/stage/notice/${notice.id}`}
            className="Stage-notice-item"
          >

            {/* 左背景 */}
            <div className="Stage-notice-bg" />

            {/* 番号 */}
            <div className="Stage-notice-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* テキスト */}
            <div className="Stage-notice-text">
              {notice.title}
            </div>

            {/* ドット */}
            <div className="Stage-notice-dots" />

            {/* 矢印 */}
            <div className="Stage-notice-arrow">›</div>

          </Link>
        ))}

      </div>
    </section>
  );
};

export default NoticeSection;