"use client";

import { useEffect, useState } from "react";
import "./NoticeList.css";

export default function NoticeList() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("notices") || "[]");

    setNotices(data);
  }, []);

  return (
    <div className="notice-list-container">
      <h1 className="notice-list-title">
        投稿済みお知らせ
      </h1>

      {notices.length === 0 ? (
        <div className="notice-empty">
          お知らせはありません
        </div>
      ) : (
        notices.map((notice) => (
          <div
            key={notice.id}
            className="notice-card"
          >
            <div className="notice-category">
              {notice.category === "stage"
                ? "ステージ"
                : "全体"}
            </div>

            <div className="notice-card-title">
              {notice.title}
            </div>

            <div className="notice-card-body">
              {notice.body}
            </div>
          </div>
        ))
      )}
    </div>
  );
}