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

// 無限ループ用に複製
const loopLogos = [...logos, ...logos, ...logos];

const NavigationBar = () => {
  const router = useRouter();

  const [index, setIndex] = useState(logos.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ロゴローテーション
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 無限ループ
  useEffect(() => {
    if (index >= logos.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(logos.length);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 500);
    }
  }, [index]);

  return (
    <>
      <header className="top-bar">

       <button
  className="nav-button nav-back-button"
  onClick={() => router.back()}
>
  ⮜
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
  transform: `translate3d(0,-${index * 36}px,0)`,
  transition: isTransitioning
    ? "transform .5s ease-in-out"
    : "none",
}}
          >
            {loopLogos.map((src, i) => (
              <div className="logo-slide" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

        <button
          className="nav-button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ≡
        </button>
      </header>

      {isMenuOpen && (
        <div
          className="overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
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

      <nav className="bottom-nav">

       <Link href="/home" className="nav-item">
  <img
    src="/NavigationIcons/home.png"
    alt="home"
    className="nav-icon-img nav-home-icon"
  />
</Link>

<Link href="/stage" className="nav-item">
  <img
    src="/NavigationIcons/stage.png"
    alt="stage"
    className="nav-icon-img nav-stage-icon"
  />
</Link>

<Link href="/map" className="nav-item">
  <img
    src="/NavigationIcons/map.png"
    alt="map"
    className="nav-icon-img nav-map-icon"
  />
</Link>

<Link href="/Project2" className="nav-item">
  <img
    src="/NavigationIcons/calendar.png"
    alt="calendar"
    className="nav-icon-img nav-calendar-icon"
  />
</Link>

<Link href="/question" className="nav-item">
  <img
    src="/NavigationIcons/chat.png"
    alt="chat"
    className="nav-icon-img nav-chat-icon"
  />
</Link>

      </nav>
    </>
  );
};

export default NavigationBar;