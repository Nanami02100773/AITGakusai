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

  // 自動ローテーション（上→下）
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // ループ処理
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

        {/* 中央ロゴ枠 */}
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
              transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            }}
          >
            {[...logos, logos[0]].map((src, i) => (
              <div className="logo-slide" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

        <Link href="/menu" className="nav-button">
          ≡
        </Link>
      </header>

      {/* 下部ナビ */}
      <nav className="bottom-nav">
        <Link href="/home" className="nav-item">
          <span className="nav-icon">🏠</span>
        </Link>
        <Link href="/stage" className="nav-item">
          <span className="nav-icon">🏢</span>
        </Link>
        <Link href="/map" className="nav-item">
          <span className="nav-icon">📍</span>
        </Link>
        <Link href="/Project2" className="nav-item">
          <span className="nav-icon">📅</span>
        </Link>
        <Link href="/question" className="nav-item">
          <span className="nav-icon">💬</span>
        </Link>
      </nav>
    </>
  );
};

export default NavigationBar;
