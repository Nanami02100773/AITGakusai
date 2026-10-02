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

      // =================================================
      // デフォルトのお知らせ
      // =================================================

      const defaultNotices = [
        {
          id: "welcome-1",
          title: "第66回 愛工大祭がスタートしました！",
          body: "本日はご来場いただきありがとうございます。ステージ企画や展示企画、模擬店など様々なイベントをお楽しみください。",
          category: "all",
          status: "public",
          isDefault: true,
        },
        {
          id: "welcome-2",
          title: "公式アプリ公開のお知らせ",
          body: "今年度実装された愛工大祭公式アプリでは企画一覧、マップ、タイムテーブルなどをご確認いただけます。",
          category: "all",
          status: "public",
          isDefault: true,
        },
        {
          id: "welcome-3",
          title: "ご来場の皆様へ",
          body: "混雑時はスタッフの案内に従って安全にお楽しみください。ゴミの分別にもご協力をお願いいたします。",
          category: "all",
          status: "public",
          isDefault: true,
        },
      ];

      // =================================================
      // 手入力したお知らせ
      // =================================================

      const manualNotices = saved.filter(
        (notice) =>
          notice.id !== "welcome-1" &&
          notice.id !== "welcome-2" &&
          notice.id !== "welcome-3"
      );

      // =================================================
      // デフォルトを上
      // 手入力を下
      // =================================================

      const allNotices = [
        ...defaultNotices,
        ...manualNotices,
      ];

      localStorage.setItem(
        "notices",
        JSON.stringify(allNotices)
      );

      const filtered = allNotices.filter(
        (notice) =>
          notice.category === "all" &&
          notice.status !== "private"
      );

      setNotices(filtered);
    };

    loadNotices();

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

      {/* =================================================
          メカフレーム
      ================================================= */}

      <div className="Home-Notice-frame"></div>


      {/* =================================================
          タイトル
      ================================================= */}

      <div className="Home-Notice-title-wrapper">

        <div className="Home-section-title">
          お知らせ
        </div>

      </div>


      {/* =================================================
          お知らせ一覧
      ================================================= */}

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