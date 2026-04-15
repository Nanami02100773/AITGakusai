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

    // 👇 「全体」だけ + 元データ
    const filtered = saved.filter((n) => n.category === "all");

    setNotices([...filtered, ...homeNoticeData]);
  }, []);

  return (
    <section className="Home-notice-section">
      <h2 className="Home-section-title">お知らせ</h2>

      <div className="Home-box3">
        <ul>
          {notices.map((notice) => (
            <li key={notice.id} className="Home-notice-item">
              <Link
                href={`/home/notice/${notice.id}`}
                className="Home-notice-link"
              >
                {notice.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NoticeSection;