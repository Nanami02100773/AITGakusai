"use client";
import Link from "next/link";
import "./NoticeSection.css";
import { noticeData } from "./data/noticeData";

const NoticeSection = () => {
  return (
    <section className="Stage-notice-section">
      <h2 className="Stage-notice-title">お知らせ</h2>

      <div className="Stage-notice-box">
        <ul className="Stage-notice-list">
          {noticeData.map((notice) => (
            <li key={notice.id} className="Stage-notice-item">
              <Link
                href={`/stage/notice/${notice.id}`}
                className="Stage-notice-link"
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
