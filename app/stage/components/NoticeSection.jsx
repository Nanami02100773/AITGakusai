"use client";
import Link from "next/link";
import "./NoticeSection.css";
import { useEffect, useState } from "react";

const NoticeSection = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notices") || "[]");
    const filtered = data.filter((n) => n.category === "stage");
    setNotices(filtered);
  }, []);

  return (
    <section className="Stage-notice-section">
      <h2 className="Stage-section-title">お知らせ</h2>

      <div className="Stage-notice-box">
        <ul className="Stage-notice-list">
          {notices.map((notice, index) => (
            <li key={notice.id} className="Stage-notice-item">

              <Link
                href={`/stage/notice/${notice.id}`}
                className="Stage-notice-link"
              >

                {/* ===== 波（追加） ===== */}
                <svg
                  className="stage-wave"
                  viewBox="0 0 200 100"
                  preserveAspectRatio="none"
                >
                  <path
                    className="wave-back"
                    d="M0,120 C30,80 120,20 200,90 L200,200 Z"
                  />
                  <path
                    className="wave-front"
                    d="M0,150 C80,50 150,90 200,30 L200,100 Z"
                  />
                </svg>

                {/* ===== 番号 ===== */}
                <div className="stage-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* ===== テキスト ===== */}
                <div className="stage-text">
                  {notice.title}
                </div>

                {/* ===== 矢印 ===== */}
                <div className="stage-arrow">›</div>

              </Link>

            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NoticeSection;