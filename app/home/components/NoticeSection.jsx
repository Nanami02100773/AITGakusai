"use client";

import Link from "next/link";
import "./NoticeSection.css";
import { useEffect, useState } from "react";
import { orbitron } from "../page";

const NoticeSection = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const loadNotices = () => {
      const saved = JSON.parse(
        localStorage.getItem("notices") || "[]"
      );

      if (saved.length === 0) {

        // =================================================
        // 初期のお知らせ
        // =================================================

        const initialNotices = [
          {
            id: "welcome-1",
            title: "第〇回 愛工大祭がスタートしました！",
            body: "本日はご来場いただきありがとうございます。ステージ企画や展示企画、模擬店など様々なイベントをお楽しみください。",
            category: "all",
            status: "public",
          },
          {
            id: "welcome-2",
            title: "公式アプリ公開のお知らせ",
            body: "愛工大祭公式アプリでは企画一覧、マップ、タイムテーブルなどをご確認いただけます。",
            category: "all",
            status: "public",
          },
          {
            id: "welcome-3",
            title: "ご来場の皆様へ",
            body: "混雑時はスタッフの案内に従って安全にお楽しみください。ゴミの分別にもご協力をお願いいたします。",
            category: "all",
            status: "public",
          },
        ];

        localStorage.setItem(
          "notices",
          JSON.stringify(initialNotices)
        );

        setNotices(initialNotices);

      } else {

        // =================================================
        // ホームに表示するお知らせ
        //
        // category が all
        // ＋
        // status が public
        // のものだけ表示
        // =================================================

        const filtered = saved.filter(
          (notice) =>
            notice.category === "all" &&
            notice.status !== "private"
        );

        setNotices(filtered);
      }
    };

    // 初回読み込み
    loadNotices();

    // =================================================
    // 同じタブ内で localStorage が更新されたとき用
    // =================================================

    const handleStorage = () => {
      loadNotices();
    };

    window.addEventListener(
      "storage",
      handleStorage
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorage
      );
    };
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