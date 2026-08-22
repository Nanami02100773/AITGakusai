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

    if (saved.length === 0) {

      // =================================================
      // お知らせ編集欄
      //
      // ▼変更してよい
      // title → お知らせ一覧に表示されるタイトル
      // body  → お知らせ詳細ページに表示される文章
      //
      // ▼お知らせを追加する方法
      // 下の {} を1セットコピーして追加する
      //
      // ▼変更しない
      // id
      // category
      // =================================================

      const initialNotices = [
        {
          id: "welcome-1",
          title: "第〇回 愛工大祭がスタートしました！",
          body: "本日はご来場いただきありがとうございます。ステージ企画や展示企画、模擬店など様々なイベントをお楽しみください。",
          category: "all",
        },
        {
          id: "welcome-2",
          title: "公式アプリ公開のお知らせ",
          body: "愛工大祭公式アプリでは企画一覧、マップ、タイムテーブルなどをご確認いただけます。",
          category: "all",
        },
        {
          id: "welcome-3",
          title: "ご来場の皆様へ",
          body: "混雑時はスタッフの案内に従って安全にお楽しみください。ゴミの分別にもご協力をお願いいたします。",
          category: "all",
        },
      ];

      localStorage.setItem(
        "notices",
        JSON.stringify(initialNotices)
      );

      setNotices(initialNotices);

    } else {
      const filtered = saved.filter(
        (n) => n.category === "all"
      );

      setNotices(filtered);
    }
  }, []);

  return (
    <section className="Home-Notice-section">

      {/* タイトル */}
      <div className="Home-Notice-title-wrapper">
        <div className="Home-section-title">
          お知らせ
        </div>
      </div>

      {/* お知らせ一覧 */}
      <div className="Home-Notice-list">
        {notices.map((notice, index) => (
          <Link
            key={notice.id}
            href={`/home/notice/${notice.id}`}
            className={`Home-Notice-item n${index + 1}`}
          >
            <div
              className={`
                Home-Notice-number
                n${index + 1}
                ${orbitron.className}
              `}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="Home-Notice-text">
              {notice.title}
            </div>

            <div className="Home-Notice-dots" />

            <div className="Home-Notice-arrow">
              ›
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default NoticeSection;