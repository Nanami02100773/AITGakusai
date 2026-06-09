"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./NoticeList.css";

export default function NoticeList() {
  const [notices, setNotices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("notices") || "[]");

    setNotices(data);
  }, []);

  const published = notices.length;
  const draft = 0;

  return (
    <div className="notice-list-container">

      <div className="top-tabs">
        <button className="active">
          一覧
        </button>

        <button>
          下書き
        </button>
      </div>

      <div className="summary-grid">

        <div className="summary-card total">
          <span>投稿数</span>
          <h2>{notices.length}</h2>
        </div>

        <div className="summary-card status">
          <div>
            <p className="green-dot">
              ● 公開中
            </p>

            <h3>{published}</h3>
          </div>

          <div className="divider" />

          <div>
            <p>● 非公開</p>
            <h3>{draft}</h3>
          </div>
        </div>

      </div>

      <div className="toolbar">

        <button className="toolbar-btn">
          新しい順
        </button>

        <input
          className="search-input"
          placeholder="検索"
        />

        <button className="toolbar-btn">
          絞り込み
        </button>

      </div>

      {notices.map((notice) => (
        <div
          key={notice.id}
          className="notice-card"
          onClick={() =>
            router.push(
              `/admin/notice/edit/${notice.id}`
            )
          }
        >

          <div className="notice-card-top">

            <div
              className={`notice-category ${notice.category}`}
            >
              {notice.category === "stage"
                ? "ステージ"
                : notice.category === "class"
                ? "教室企画"
                : "模擬店"}
            </div>

            <div className="notice-status">
              ● 公開中
            </div>

          </div>

          <div className="notice-card-title">
            {notice.title}
          </div>

          <div className="notice-card-body">
            {notice.body}
          </div>

          {notice.date && (
            <div className="notice-date">
              {notice.date}
            </div>
          )}

        </div>
      ))}

    </div>
  );
}