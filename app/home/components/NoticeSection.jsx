"use client";
import Link from "next/link";
import "./NoticeSection.css";
import { homeNoticeData } from "./data/homeNoticeData";

const NoticeSection = () => {
  return (
    <section className="Home-notice-section">
      <h2 className="Home-title">お知らせ</h2>

      <div className="Home-box3">
        <ul>
          {homeNoticeData.map((notice) => (
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
