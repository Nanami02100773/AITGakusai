"use client";
import Link from "next/link";
import "./NoticeSection.css";

const NoticeSection = () => {
  return (
    <section className="notice-section">
      <h2 className="title1">お知らせ</h2>
      <div className="box3">
        <ul>
          <li className="notice-item">
            <Link href="/home/notice/1">ステージ関連お知らせ</Link>
          </li>
          <li className="notice-item">
            <Link href="/home/notice/2">ステージ関連お知らせ２</Link>
          </li>
          <li className="notice-item">
            <Link href="/home/notice/3">メンテナンス情報：〇日深夜</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NoticeSection;
