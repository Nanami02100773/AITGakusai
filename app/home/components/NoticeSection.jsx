"use client";
import Link from "next/link";
import "./NoticeSection.css";

const NoticeSection = () => {
  return (
    <section className="notice-section">
      <h2 className="title">お知らせ</h2>
      <div className="box3">
        <ul>
          <li>
            <Link href="/home/notice/1">
              <div className="notice-item">イベント開催予定：〇月〇日</div>
            </Link>
          </li>
          <li>
            <Link href="/home/notice/2">
              <div className="notice-item">新商品が追加されました！</div>
            </Link>
          </li>
          <li>
            <Link href="/home/notice/3">
              <div className="notice-item">メンテナンス情報：〇日深夜</div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NoticeSection;
