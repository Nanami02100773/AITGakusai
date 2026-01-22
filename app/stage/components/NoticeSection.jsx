"use client";
import Link from "next/link";
import "./NoticeSection.css";
import { noticeData } from "./data/noticeData";

const NoticeSection = () => {
  return (
    <section className="notice-section">
      <h2 className="title1">お知らせ</h2>

      <div className="box3">
        <ul>
          {noticeData.map((notice) => (
            <li key={notice.id} className="notice-item">
              <Link
                href={`/stage/notice/${notice.id}`}
                className="notice-link"
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
