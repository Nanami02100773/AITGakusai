"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./NavigationBar.css";

const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
];

const NavigationBar = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ロゴ自動ローテーション
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
      <header className="top-bar">
        <button className="nav-button" onClick={() => router.back()}>
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

        {/* ≡ ボタン（トグル） */}
        <button
          className="nav-button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ≡
        </button>
      </header>

      {/* 背景オーバーレイ */}
      {isMenuOpen && (
        <div
          className="overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* 右側サイドメニュー */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-header">Menu</div>

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

      {/* 下部ナビ */}
      <nav className="bottom-nav">
        <Link href="/home" className="nav-item">🏠</Link>
        <Link href="/stage" className="nav-item">🏢</Link>
        <Link href="/map" className="nav-item">📍</Link>
        <Link href="/Project2" className="nav-item">📅</Link>
        <Link href="/question" className="nav-item">💬</Link>
      </nav>
    </>
  );
};

export default NavigationBar;