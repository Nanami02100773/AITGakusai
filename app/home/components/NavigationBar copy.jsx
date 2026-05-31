"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./NavigationBar.css";

const logos = [
 "/homecenterlogo/ait.gif",
  "/homecenterlogo/aitfes.png",
  "/homecenterlogo/poster.png",
];

const NavigationBar = () => {
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ロゴローテーション
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 無限ループ処理
  useEffect(() => {
    if (index === logos.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [index]);

  return (
    <>
      {/* =========================
          トップバー
      ========================= */}
      <header className="top-bar">

        {/* 戻る */}
        <button
          className="nav-button"
          onClick={() => router.back()}
        >
          ←
        </button>

        {/* ロゴ */}
        <div
          className={`top-bar-center ${
            index % logos.length === 0
              ? "active-0"
              : index % logos.length === 1
              ? "active-1"
              : "active-2"
          }`}
        >
          <div
            className="logo-track"
            style={{
              transform: `translateY(-${index * 100}%)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {[...logos, logos[0]].map((src, i) => (
              <div className="logo-slide" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* メニュー開閉 */}
        <button
          className="nav-button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ≡
        </button>
      </header>

      {/* =========================
          オーバーレイ
      ========================= */}
      {isMenuOpen && (
        <div
          className="overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* =========================
          サイドメニュー
      ========================= */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>

        {/* ヘッダー */}
        <div className="menu-header">
          <button
            className="menu-back"
            onClick={() => setIsMenuOpen(false)}
          >
            ＜ 戻る
          </button>

          <span>Menu</span>
        </div>

        <Link
          href="/Guide"
          className="menu-item"
          onClick={() => setIsMenuOpen(false)}
        >
          操作説明
        </Link>

        <Link
          href="/Login"
          className="menu-item"
          onClick={() => setIsMenuOpen(false)}
        >
          学祭用ログイン
        </Link>
      </div>

      {/* =========================
          下部ナビ（画像版）
      ========================= */}
      <nav className="bottom-nav">

        <Link href="/home" className="nav-item">
          <img
            src="/NavigationIcons/home.png"
            alt="home"
            className="nav-icon-img"
          />
        </Link>

        <Link href="/stage" className="nav-item">
          <img
            src="/NavigationIcons/stage.png"
            alt="stage"
            className="nav-icon-img"
          />
        </Link>

        <Link href="/map" className="nav-item">
          <img
            src="/NavigationIcons/map.png"
            alt="map"
            className="nav-icon-img"
          />
        </Link>

        <Link href="/Project2" className="nav-item">
          <img
            src="/NavigationIcons/calendar.png"
            alt="calendar"
            className="nav-icon-img"
          />
        </Link>

        <Link href="/question" className="nav-item">
          <img
            src="/NavigationIcons/chat.png"
            alt="chat"
            className="nav-icon-img"
          />
        </Link>

      </nav>
    </>
  );
};

export default NavigationBar;