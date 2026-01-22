"use client";
import Link from "next/link";
import "./NoticeSection.css";
import { homeNoticeData } from "./data/homeNoticeData";

const NoticeSection = () => {
  return (
    <section className="home-notice-section">
      <h2 className="home-title">お知らせ</h2>

      <div className="home-box3">
        <ul>
          {homeNoticeData.map((notice) => (
            <li key={notice.id} className="home-notice-item">
              <Link
                href={`/home/notice/${notice.id}`}
                className="home-notice-link"
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
