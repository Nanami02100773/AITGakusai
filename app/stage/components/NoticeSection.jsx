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
      (n) =>
        n.category === "stage" &&
        n.status !== "private"
    );

    setNotices(filtered);
  }, []);

  return (
    <section className="Stage-Notice-section">

      {/* タイトル */}
      <div className="Stage-Notice-title-wrapper">
        <div className="Stage-section-title">
          お知らせ
        </div>
      </div>

      {/* お知らせ一覧 */}
      <div className="Stage-Notice-list">

        {notices.length === 0 ? (

          <div className="Stage-Notice-empty">
            現在ステージに関するお知らせはありません
          </div>

        ) : (

          notices.map((notice, index) => (

            <Link
              key={notice.id}
              href={`/stage/notice/${notice.id}`}
              className={`Stage-Notice-item n${index + 1}`}
            >

              <div
                className={`
                  Stage-Notice-number
                  n${index + 1}
                  ${orbitron.className}
                `}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="Stage-Notice-text">
                {notice.title}
              </div>

              <div className="Stage-Notice-dots" />

              <div className="Stage-Notice-arrow">
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