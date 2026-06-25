"use client";

import Link from "next/link";
import "./NoticeSection.css";
import { useEffect, useState } from "react";
import { orbitron } from "../page";

const NoticeSection = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("notices") || "[]"
    );

    const filtered = saved.filter(
      (n) => n.category === "stage"
    );

    setNotices(filtered);
  }, []);

  return (
    <section className="stage-notice-section">
      <div className="stage-section-title-wrapper">
        <div className="stage-section-title">
          お知らせ
        </div>
      </div>

      <div className="stage-box3">
        {notices.length === 0 ? (
          <div className="stage-notice-empty">
            現在ステージに関するお知らせはありません
          </div>
        ) : (
          notices.map((notice, index) => (
            <Link
              key={notice.id}
              href={`/stage/notice/${notice.id}`}
              className={`stage-notice-item n${index + 1}`}
            >
              <div
                className={`notice-number ${orbitron.className}`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="notice-text">
                {notice.title}
              </div>

              <div className="notice-dots" />

              <div className="notice-arrow">
                ›
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default NoticeSection;